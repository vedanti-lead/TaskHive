import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  ChevronDown, 
  Star, 
  Award, 
  Calendar, 
  Clock, 
  Users, 
  Trophy, 
  MessageCircle, 
  Plus, 
  ArrowRight, 
  AlertCircle, 
  BookOpen
} from 'lucide-react';

// Define interfaces for type safety
interface Mentor {
  id: number;
  name: string;
  avatar: string;
  badgeLevel: number;
  rating: number;
  reviews: number;
  specialization: string;
  template: string;
  subfield: string;
  experience: string;
  availability: string;
  hourlyRate: number;
  bio: string;
  skills: string[];
  sessions: number;
}

interface MentorshipSession {
  id: number;
  mentorId: number;
  mentorName: string;
  mentorAvatar: string;
  date: string;
  time: string;
  duration: number;
  topic: string;
  status: 'Upcoming' | 'Completed' | 'Cancelled';
  notes?: string;
}

const Mentorship: React.FC = () => {
  // State variables
  const [activeTab, setActiveTab] = useState<'find' | 'sessions'>('find');
  const [searchTerm, setSearchTerm] = useState('');
  const [specialization, setSpecialization] = useState('all');
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  
  const mentors: Mentor[] = [
    {
      id: 1,
      name: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      badgeLevel: 5,
      rating: 4.9,
      reviews: 124,
      specialization: 'Frontend Development',
      template: 'Software Engineering',
      subfield: 'Web Developer',
      experience: '8 years',
      availability: 'Weekdays, Evenings',
      hourlyRate: 50,
      bio: 'Senior frontend developer specializing in React and modern JavaScript frameworks. I love helping others grow their skills and navigate the ever-changing landscape of web development.',
      skills: ['React', 'JavaScript', 'TypeScript', 'CSS', 'UI/UX', 'Performance Optimization'],
      sessions: 78
    },
    {
      id: 2,
      name: 'Sarah Williams',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      badgeLevel: 4,
      rating: 4.8,
      reviews: 89,
      specialization: 'UI/UX Design',
      template: 'Design',
      subfield: 'UI Designer',
      experience: '6 years',
      availability: 'Weekends, Flexible',
      hourlyRate: 45,
      bio: 'Passionate UI/UX designer with experience in creating intuitive and beautiful interfaces. I focus on user-centered design principles and enjoy mentoring aspiring designers.',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'User Research', 'Prototyping', 'Design Systems'],
      sessions: 65
    },
    {
      id: 3,
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      badgeLevel: 5,
      rating: 4.7,
      reviews: 112,
      specialization: 'Cloud Architecture',
      template: 'Software Engineering',
      subfield: 'Cloud Engineer',
      experience: '10 years',
      availability: 'Weekdays, Mornings',
      hourlyRate: 60,
      bio: 'Cloud architect with expertise in AWS, Azure, and GCP. I help developers understand cloud infrastructure, serverless computing, and DevOps practices.',
      skills: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD'],
      sessions: 92
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      badgeLevel: 4,
      rating: 4.6,
      reviews: 76,
      specialization: 'Data Analysis',
      template: 'Data Science',
      subfield: 'Data Analyst',
      experience: '5 years',
      availability: 'Weekends, Evenings',
      hourlyRate: 40,
      bio: 'Data analyst with a background in statistics and visualization. I enjoy breaking down complex data concepts and helping others derive meaningful insights from their data.',
      skills: ['Python', 'R', 'SQL', 'Tableau', 'Power BI', 'Statistical Analysis'],
      sessions: 54
    },
    {
      id: 5,
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      badgeLevel: 3,
      rating: 4.5,
      reviews: 42,
      specialization: 'Digital Marketing',
      template: 'Business',
      subfield: 'Marketing',
      experience: '4 years',
      availability: 'Flexible',
      hourlyRate: 35,
      bio: 'Digital marketing specialist focused on SEO, content marketing, and social media strategies. I help businesses and individuals build their online presence and reach their target audience.',
      skills: ['SEO', 'Content Strategy', 'Social Media', 'Google Analytics', 'Email Marketing'],
      sessions: 38
    },
  ];

  const sessions: MentorshipSession[] = [
    {
      id: 1,
      mentorId: 1,
      mentorName: 'Alex Johnson',
      mentorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      date: '2025-05-15',
      time: '18:00',
      duration: 60,
      topic: 'Advanced React Hooks and Performance Optimization',
      status: 'Upcoming'
    },
    {
      id: 2,
      mentorId: 3,
      mentorName: 'Michael Chen',
      mentorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      date: '2025-05-10',
      time: '10:00',
      duration: 45,
      topic: 'Introduction to Serverless Architecture',
      status: 'Completed',
      notes: 'Great session! Learned about AWS Lambda, API Gateway, and best practices for serverless applications.'
    },
    {
      id: 3,
      mentorId: 2,
      mentorName: 'Sarah Williams',
      mentorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      date: '2025-05-05',
      time: '14:30',
      duration: 90,
      topic: 'Portfolio Review and Design Feedback',
      status: 'Completed',
      notes: 'Sarah provided excellent feedback on my portfolio. She suggested improvements for visual hierarchy and user flow.'
    },
    {
      id: 4,
      mentorId: 4,
      mentorName: 'Emily Rodriguez',
      mentorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      date: '2025-05-20',
      time: '19:00',
      duration: 60,
      topic: 'Data Visualization Best Practices',
      status: 'Upcoming'
    },
    {
      id: 5,
      mentorId: 5,
      mentorName: 'David Kim',
      mentorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      date: '2025-04-28',
      time: '16:00',
      duration: 45,
      topic: 'SEO Fundamentals and Content Strategy',
      status: 'Cancelled'
    },
  ];
  
  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          mentor.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          mentor.template.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          mentor.subfield.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSpecialization = specialization === 'all' || 
                                  mentor.template.toLowerCase().includes(specialization.toLowerCase()) ||
                                  mentor.specialization.toLowerCase().includes(specialization.toLowerCase());
    
    return matchesSearch && matchesSpecialization;
  });
  
  const upcomingSessions = sessions.filter(session => session.status === 'Upcoming');
  const pastSessions = sessions.filter(session => session.status === 'Completed' || session.status === 'Cancelled');
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Mentorship Program</h1>
        <div className="flex space-x-2">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === 'find' 
                ? 'bg-primary-600 text-white dark:bg-darkPrimary-600' 
                : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
            }`}
            onClick={() => setActiveTab('find')}
          >
            Find a Mentor
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === 'sessions' 
                ? 'bg-primary-600 text-white dark:bg-darkPrimary-600' 
                : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
            }`}
            onClick={() => setActiveTab('sessions')}
          >
            My Sessions
          </button>
        </div>
      </div>
      
      {activeTab === 'find' ? (
        <>
          {/* Filters and Search */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search mentors by name, specialization..."
                  className="input pl-10 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <div className="relative">
                  <select
                    className="input appearance-none pr-8"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                  >
                    <option value="all">All Specializations</option>
                    <option value="software">Software Engineering</option>
                    <option value="design">Design</option>
                    <option value="data">Data Science</option>
                    <option value="business">Business</option>
                    <option value="arts">Arts</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
                
                <div className="relative">
                  <select
                    className="input appearance-none pr-8"
                    defaultValue="all"
                  >
                    <option value="all">All Badge Levels</option>
                    <option value="3">Level 3+</option>
                    <option value="4">Level 4+</option>
                    <option value="5">Level 5</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mentor Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredMentors.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                      <img 
                        src={mentor.avatar} 
                        alt={mentor.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{mentor.name}</h3>
                        <div className="flex items-center bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded-full">
                          <Award className="h-4 w-4 text-amber-600 dark:text-amber-400 mr-1" />
                          <span className="text-xs text-amber-800 dark:text-amber-300">
                            Level {mentor.badgeLevel}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {mentor.specialization} • {mentor.experience} experience
                      </p>
                      <div className="flex items-center mt-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(mentor.rating)
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : i < mentor.rating
                                  ? 'text-yellow-400 fill-yellow-400 opacity-50'
                                  : 'text-gray-300 dark:text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm font-medium">{mentor.rating}</span>
                        <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">
                          ({mentor.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                      {mentor.bio}
                    </p>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {mentor.skills.slice(0, 5).map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                    {mentor.skills.length > 5 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                        +{mentor.skills.length - 5} more
                      </span>
                    )}
                  </div>
                  
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Availability</span>
                      </div>
                      <p className="text-sm font-medium">{mentor.availability}</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
                        <BookOpen className="h-4 w-4 mr-1" />
                        <span>Sessions Completed</span>
                      </div>
                      <p className="text-sm font-medium">{mentor.sessions}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                    <div className="text-lg font-semibold">
                      ${mentor.hourlyRate} <span className="text-sm text-gray-500 dark:text-gray-400">/ hour</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md text-sm font-medium flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Message
                      </button>
                      <button 
                        className="px-3 py-1.5 bg-primary-600 hover:bg-primary-700 dark:bg-darkPrimary-600 dark:hover:bg-darkPrimary-700 text-white rounded-md text-sm font-medium flex items-center"
                        onClick={() => setSelectedMentor(mentor)}
                      >
                        Book Session
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredMentors.length === 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 text-center">
              <AlertCircle className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium mb-2">No mentors found</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your filters or search criteria.
              </p>
            </div>
          )}
        </>
      ) : (
        <>
          {/* Upcoming Sessions */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Upcoming Sessions</h2>
              <button className="btn-primary flex items-center text-sm">
                <Plus className="h-4 w-4 mr-1" />
                Book New Session
              </button>
            </div>
            
            {upcomingSessions.length > 0 ? (
              <div className="space-y-4">
                {upcomingSessions.map((session, index) => (
                  <motion.div
                    key={session.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                  >
                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={session.mentorAvatar} 
                          alt={session.mentorName}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{session.topic}</h3>
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-xs">
                            {session.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          with {session.mentorName}
                        </p>
                        <div className="flex items-center mt-2 text-sm">
                          <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-1" />
                          <span className="text-gray-600 dark:text-gray-400">
                            {new Date(session.date).toLocaleDateString('en-US', { 
                              weekday: 'long',
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </span>
                          <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
                          <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-1" />
                          <span className="text-gray-600 dark:text-gray-400">
                            {session.time} ({session.duration} min)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end space-x-2">
                      <button className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md text-xs font-medium">
                        Reschedule
                      </button>
                      <button className="px-3 py-1.5 bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-800/50 text-red-700 dark:text-red-300 rounded-md text-xs font-medium">
                        Cancel
                      </button>
                      <button className="px-3 py-1.5 bg-primary-600 hover:bg-primary-700 dark:bg-darkPrimary-600 dark:hover:bg-darkPrimary-700 text-white rounded-md text-xs font-medium">
                        Join Meeting
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium mb-2">No upcoming sessions</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  You don't have any mentorship sessions scheduled.
                </p>
                <button className="btn-primary inline-flex items-center">
                  Book Your First Session
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            )}
          </div>
          
          {/* Past Sessions */}
          {pastSessions.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Past Sessions</h2>
              <div className="space-y-4">
                {pastSessions.map((session, index) => (
                  <motion.div
                    key={session.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                  >
                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={session.mentorAvatar} 
                          alt={session.mentorName}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{session.topic}</h3>
                          <span className={`px-2 py-0.5 rounded-full text-xs ${
                            session.status === 'Completed'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                              : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                          }`}>
                            {session.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          with {session.mentorName}
                        </p>
                        <div className="flex items-center mt-2 text-sm">
                          <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-1" />
                          <span className="text-gray-600 dark:text-gray-400">
                            {new Date(session.date).toLocaleDateString('en-US', { 
                              weekday: 'long',
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </span>
                          <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
                          <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-1" />
                          <span className="text-gray-600 dark:text-gray-400">
                            {session.time} ({session.duration} min)
                          </span>
                        </div>
                        
                        {session.notes && (
                          <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-sm">
                            <p className="font-medium mb-1">Session Notes:</p>
                            <p className="text-gray-600 dark:text-gray-400">{session.notes}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {session.status === 'Completed' && (
                      <div className="mt-4 flex justify-end space-x-2">
                        <button className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md text-xs font-medium">
                          View Recording
                        </button>
                        <button className="px-3 py-1.5 bg-primary-600 hover:bg-primary-700 dark:bg-darkPrimary-600 dark:hover:bg-darkPrimary-700 text-white rounded-md text-xs font-medium">
                          Book Again
                        </button>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
      
      {/* Mentor Booking Modal */}
      {selectedMentor && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedMentor(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-w-lg w-full"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Book a Session</h3>
              <button 
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                onClick={() => setSelectedMentor(null)}
              >
                &times;
              </button>
            </div>
            
            <div className="flex items-center mb-6">
              <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                <img 
                  src={selectedMentor.avatar} 
                  alt={selectedMentor.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">{selectedMentor.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {selectedMentor.specialization}
                </p>
                <div className="flex items-center mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(selectedMentor.rating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : i < selectedMentor.rating
                            ? 'text-yellow-400 fill-yellow-400 opacity-50'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm">{selectedMentor.rating}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Session Topic</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="e.g., Career Advice, Code Review, Portfolio Feedback"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <input
                    type="date"
                    className="input w-full"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Time</label>
                  <input
                    type="time"
                    className="input w-full"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Duration</label>
                <select className="input w-full">
                  <option value="30">30 minutes (${(selectedMentor.hourlyRate / 2).toFixed(2)})</option>
                  <option value="60">60 minutes (${selectedMentor.hourlyRate.toFixed(2)})</option>
                  <option value="90">90 minutes (${(selectedMentor.hourlyRate * 1.5).toFixed(2)})</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Message (Optional)</label>
                <textarea
                  className="input w-full h-24 resize-none"
                  placeholder="Share what you'd like to discuss or any questions you have"
                ></textarea>
              </div>
            </div>
            
            <div className="mt-6 flex justify-between items-center">
              <div className="text-lg font-semibold">
                Total: ${selectedMentor.hourlyRate.toFixed(2)}
              </div>
              <div className="flex space-x-2">
                <button 
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md text-sm font-medium"
                  onClick={() => setSelectedMentor(null)}
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 dark:bg-darkPrimary-600 dark:hover:bg-darkPrimary-700 text-white rounded-md text-sm font-medium">
                  Confirm Booking
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Mentorship;