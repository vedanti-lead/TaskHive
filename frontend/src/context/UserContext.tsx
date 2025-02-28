import React, { createContext, useContext, useState } from 'react';

interface UserContextType {
  user: any | null;
  profile: UserProfile | null;
  isLoading: boolean;
  signIn: (email: string) => void; // ✅ Added signIn function
  signOut: () => void; // ✅ Added signOut function
  updateProfile: (updates: Partial<UserProfile>) => void;
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
  const [user, setUser] = useState<any | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const signIn = (email: string) => {
    setUser({ email }); // ✅ Simulate authentication (replace with DBMS later)
  };

  const signOut = () => {
    setUser(null);
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    setProfile(prev => (prev ? { ...prev, ...updates } : null));
  };

  const value = {
    user,
    profile,
    isLoading,
    signIn,
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
