import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { User } from '@supabase/supabase-js';

interface UserContextType {
  user: User | null;
  profile: UserProfile | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string, name: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<UserProfile>) => Promise<void>;
}

interface UserProfile {
  id: string;
  name: string;
  avatar_url: string | null;
  badge_level: number;
  task_points: number;
  merit_points: number;
  selected_template: string | null;
  selected_subfield: string | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check active session and fetch user profile
    const getSession = async () => {
      setIsLoading(true);
      
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user) {
          setUser(session.user);
          await fetchProfile(session.user.id);
        }
      } catch (error) {
        console.error('Error fetching session:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          setUser(session.user);
          await fetchProfile(session.user.id);
        } else {
          setUser(null);
          setProfile(null);
        }
        setIsLoading(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        throw error;
      }

      if (data) {
        setProfile(data as UserProfile);
      } else {
        // Create a new profile if it doesn't exist
        const newProfile: Partial<UserProfile> = {
          id: userId,
          name: 'New User',
          badge_level: 1,
          task_points: 0,
          merit_points: 0,
        };
        
        await supabase.from('profiles').insert([newProfile]);
        setProfile(newProfile as UserProfile);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return { error };
      }

      return { error: null };
    } catch (error) {
      return { error };
    }
  };

  const signUp = async (email: string, password: string, name: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        return { error };
      }

      if (data.user) {
        // Create a profile for the new user
        const newProfile = {
          id: data.user.id,
          name,
          badge_level: 1,
          task_points: 0,
          merit_points: 0,
        };
        
        await supabase.from('profiles').insert([newProfile]);
      }

      return { error: null };
    } catch (error) {
      return { error };
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', user.id);

      if (error) {
        throw error;
      }

      setProfile(prev => prev ? { ...prev, ...updates } : null);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const value = {
    user,
    profile,
    isLoading,
    signIn,
    signUp,
    signOut,
    updateProfile,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};