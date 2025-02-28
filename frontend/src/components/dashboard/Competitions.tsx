import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Calendar, 
  Users, 
  Clock, 
  ArrowRight, 
  Filter, 
  Search,
  ChevronDown,
  Star,
  Award,
  Medal,
  Flag,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface Competition {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  participants: number;
  maxParticipants: number;
  prize: string;
  badgeLevel: number;
  status: 'Upcoming' | 'Active' | 'Completed';
  category: string;
  host: {
    name: string;
    avatar: string;
    badgeLevel: number;
  };
}

const Competitions: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const competitions: Competition[] = [
    {
      id: 1,
      title: 'Web Development Challenge',
      description: 'Build a responsive web application with React and Tailwind CSS. The application should be a task management tool with features like task creation, deletion, and status updates.',
      startDate: '2025-05-15',
      endDate: '2025-05-22',
      participants: 48,
      maxParticipants: 100,
      prize: '500 Merit Points + Badge Level Boost',
      badgeLevel: 2,
      status: 'Upcoming',
      category: 'Development',
      host: {
        name: 'Alex Johnson',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
        badgeLevel: 5
      }
    },
    {
      id: 2,
      title: 'UI Design Competition',
      description: 'Design a mobile app interface for a fitness tracking application. The design should include screens for user dashboard, workout tracking, and social features.',
      startDate: '2025-05-20',
      endDate: '2025-06-05',
      participants: 32,
      maxParticipants: 50,
      prize: '300 Merit Points + Mentorship Session',
      badgeLevel: 1,
      status: 'Upcoming',
      category: 'Design',
      host: {
        name: 'Sarah Williams',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
        badgeLevel: 4
      }
    },
    {
      id: 3,
      title: 'Algorithm Challenge',
      description: 'Solve a series of algorithmic problems with optimal time and space complexity. Problems will range from easy to hard difficulty.',
      startDate: '2025-05-01',
      endDate: '2025-05-10',
      participants: 120,
      maxParticipants: 200,
      prize: '800 Merit Points + Cash Prize',
      badgeLevel: 3,
      status: 'Active',
      category: 'Algorithms',
      host: {
        name: 'Michael Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
        badgeLevel: 5
      }
    },
    {
      id: 4,
      title: 'Data Visualization Hackathon',
      description: 'Create insightful data visualizations from a provided dataset. Visualizations should be interactive and tell a compelling story.',
      startDate: '2025-04-15',
      endDate: '2025-04-25',
      participants: 75,
      maxParticipants: 75,
      prize: '600 Merit Points + Internship Opportunity',
      badgeLevel: 2,
      status: 'Completed',
      category: 'Data Science',
      host: {
        name: 'Emily Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
        badgeLevel: 4
      }
    },
    {
      id: 5,
      title: 'Mobile App Development',
      description: 'Develop a mobile application that addresses a social issue. The app should be functional, user-friendly, and have a clear impact.',
      startDate: '2025-06-01',
      endDate: '2025-06-30',
      participants: 25,
      maxParticipants: 60,
      prize: '1000 Merit Points + Startup Funding',
      badgeLevel: 4,
      status: 'Upcoming',
      category: 'Development',
      host: {
        name: 'David Kim',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
        badgeLevel: 5
      }
    },
  ];
  
  const filteredCompetitions = competitions.filter(competition => {
    const matchesFilter = filter === 'all' || competition.status.toLowerCase() === filter;
    const matchesSearch = competition.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          competition.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          competition.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Competitions</h1>
        <button className="btn-primary flex items-center">
          <Trophy className="h-5 w-5 mr-1" />
          Host Competition
        </button>
      </div>
      
      {/* Filters and Search */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search competitions..."
              className="input pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <select
                className="input appearance-none pr-8"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="upcoming">Upcoming</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
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
                <option value="all">All Categories</option>
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="algorithms">Algorithms</option>
                <option value="data-science">Data Science</option>
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
                <option value="1">Level 1</option>
                <option value="2">Level 2</option>
                <option value="3">Level 3</option>
                <option value="4">Level 4+</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Competition Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCompetitions.map((competition, index) => (
          <motion.div
            key={competition.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center">
                    <h3 className="text-xl font-semibold">{competition.title}</h3>
                    <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                      competition.status === 'Active' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                        : competition.status === 'Upcoming' 
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' 
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {competition.status}
                    </span>
                    <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                      {competition.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Hosted by {competition.host.name}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full overflow-hidden">
                    <img 
                      src={competition.host.avatar} 
                      alt={competition.host.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-2 flex items-center bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded-full">
                    <Trophy className="h-3 w-3 text-amber-600 dark:text-amber-400 mr-1" />
                    <span className="text-xs text-amber-800 dark:text-amber-300">
                      Level {competition.host.badgeLevel}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {competition.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Duration</span>
                  </div>
                  <p className="font-medium">
                    {new Date(competition.startDate).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })} - {new Date(competition.endDate).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
                    <Users className="h-4 w-4 mr-1" />
                    <span>Participants</span>
                  </div>
                  <p className="font-medium">
                    {competition.participants} / {competition.maxParticipants}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-amber-500 mr-2" />
                  <span className="font-medium">{competition.prize}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Medal className="h-4 w-4 text-primary-600 dark:text-darkPrimary-400 mr-1" />
                  <span>Required Badge Level: {competition.badgeLevel}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                {competition.status === 'Upcoming' && (
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>
                      Starts in {Math.ceil((new Date(competition.startDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days
                    </span>
                  </div>
                )}
                {competition.status === 'Active' && (
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>
                      Ends in {Math.ceil((new Date(competition.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days
                    </span>
                  </div>
                )}
                {competition.status === 'Completed' && (
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <CheckCircle2 className="h-4 w-4 mr-1" />
                    <span>Completed</span>
                  </div>
                )}
                
                <button className={`px-4 py-2 rounded-md text-sm font-medium flex items-center ${
                  competition.status === 'Completed'
                    ? 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                    : 'bg-primary-600 hover:bg-primary-700 text-white dark:bg-darkPrimary-600 dark:hover:bg-darkPrimary-700'
                }`}>
                  {competition.status === 'Completed' ? 'View Results' : 'Register Now'}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {filteredCompetitions.length === 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 text-center">
          <AlertCircle className="h-12 w-12 mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium mb-2">No competitions found</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your filters or search criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default Competitions;