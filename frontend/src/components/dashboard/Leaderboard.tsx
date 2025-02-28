import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Medal, 
  Award, 
  Users, 
  Search, 
  ChevronDown,
  ArrowUp,
  ArrowDown,
  Filter,
  Star,
  Clock,
  CheckCircle2
} from 'lucide-react';

interface LeaderboardUser {
  id: number;
  name: string;
  avatar: string;
  badgeLevel: number;
  taskPoints: number;
  meritPoints: number;
  completedTasks: number;
  competitions: number;
  winRate: number;
  streak: number;
  rank: number;
  change: 'up' | 'down' | 'same';
  template: string;
  subfield: string;
}

const Leaderboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState('weekly');
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const leaderboardData: LeaderboardUser[] = [
    {
      id: 1,
      name: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      badgeLevel: 5,
      taskPoints: 2450,
      meritPoints: 850,
      completedTasks: 78,
      competitions: 12,
      winRate: 75,
      streak: 42,
      rank: 1,
      change: 'same',
      template: 'Software Engineering',
      subfield: 'Web Developer'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      badgeLevel: 4,
      taskPoints: 2180,
      meritPoints: 720,
      completedTasks: 65,
      competitions: 8,
      winRate: 62,
      streak: 28,
      rank: 2,
      change: 'up',
      template: 'Design',
      subfield: 'UI Designer'
    },
    {
      id: 3,
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      badgeLevel: 5,
      taskPoints: 2050,
      meritPoints: 680,
      completedTasks: 72,
      competitions: 10,
      winRate: 70,
      streak: 35,
      rank: 3,
      change: 'down',
      template: 'Software Engineering',
      subfield: 'Cloud Engineer'
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      badgeLevel: 4,
      taskPoints: 1950,
      meritPoints: 640,
      completedTasks: 68,
      competitions: 7,
      winRate: 57,
      streak: 21,
      rank: 4,
      change: 'up',
      template: 'Data Science',
      subfield: 'Data Analyst'
    },
    {
      id: 5,
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      badgeLevel: 3,
      taskPoints: 1820,
      meritPoints: 590,
      completedTasks: 60,
      competitions: 6,
      winRate: 50,
      streak: 14,
      rank: 5,
      change: 'same',
      template: 'Business',
      subfield: 'Marketing'
    },
    {
      id: 6,
      name: 'Olivia Martinez',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      badgeLevel: 3,
      taskPoints: 1750,
      meritPoints: 520,
      completedTasks: 55,
      competitions: 5,
      winRate: 40,
      streak: 10,
      rank: 6,
      change: 'up',
      template: 'Design',
      subfield: 'UX Designer'
    },
    {
      id: 7,
      name: 'James Wilson',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      badgeLevel: 2,
      taskPoints: 1680,
      meritPoints: 480,
      completedTasks: 50,
      competitions: 4,
      winRate: 25,
      streak: 7,
      rank: 7,
      change: 'down',
      template: 'Software Engineering',
      subfield: 'Mobile Developer'
    },
    {
      id: 8,
      name: 'Sophia Lee',
      avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      badgeLevel: 2,
      taskPoints: 1520,
      meritPoints: 420,
      completedTasks: 45,
      competitions: 3,
      winRate: 33,
      streak: 5,
      rank: 8,
      change: 'up',
      template: 'Data Science',
      subfield: 'ML Engineer'
    },
    {
      id: 9,
      name: 'Daniel Brown',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      badgeLevel: 1,
      taskPoints: 1350,
      meritPoints: 380,
      completedTasks: 40,
      competitions: 2,
      winRate: 50,
      streak: 3,
      rank: 9,
      change: 'same',
      template: 'Business',
      subfield: 'Finance'
    },
    {
      id: 10,
      name: 'Emma Garcia',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      badgeLevel: 1,
      taskPoints: 1200,
      meritPoints: 320,
      completedTasks: 35,
      competitions: 1,
      winRate: 0,
      streak: 2,
      rank: 10,
      change: 'up',
      template: 'Arts',
      subfield: 'Writing'
    },
  ];
  
  const filteredLeaderboard = leaderboardData.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          user.template.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          user.subfield.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = category === 'all' || user.template.toLowerCase().includes(category.toLowerCase());
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Leaderboard</h1>
        <div className="flex items-center space-x-2">
          <button
            className={`px-3 py-1.5 text-sm font-medium rounded-md ${
              timeRange === 'weekly' 
                ? 'bg-primary-100 text-primary-700 dark:bg-darkPrimary-900 dark:text-darkPrimary-300' 
                : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
            }`}
            onClick={() => setTimeRange('weekly')}
          >
            Weekly
          </button>
          <button
            className={`px-3 py-1.5 text-sm font-medium rounded-md ${
              timeRange === 'monthly' 
                ? 'bg-primary-100 text-primary-700 dark:bg-darkPrimary-900 dark:text-darkPrimary-300' 
                : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
            }`}
            onClick={() => setTimeRange('monthly')}
          >
            Monthly
          </button>
          <button
            className={`px-3 py-1.5 text-sm font-medium rounded-md ${
              timeRange === 'alltime' 
                ? 'bg-primary-100 text-primary-700 dark:bg-darkPrimary-900 dark:text-darkPrimary-300' 
                : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
            }`}
            onClick={() => setTimeRange('alltime')}
          >
            All Time
          </button>
        </div>
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
              placeholder="Search users..."
              className="input pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <select
                className="input appearance-none pr-8"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
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
          </div>
        </div>
      </div>
      
      {/* Top 3 Podium */}
      <div className="flex flex-col md:flex-row items-end justify-center gap-4 py-8">
        {/* Second Place */}
        {filteredLeaderboard.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              <div className="h-20 w-20 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-600">
                <img 
                  src={filteredLeaderboard[1].avatar} 
                  alt={filteredLeaderboard[1].name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-gray-300 dark:bg-gray-600 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold">
                2
              </div>
            </div>
            <div className="mt-2 text-center">
              <p className="font-semibold">{filteredLeaderboard[1].name}</p>
              <div className="flex items-center justify-center mt-1">
                <Medal className="h-4 w-4 text-gray-500 mr-1" />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {filteredLeaderboard[1].taskPoints} pts
                </span>
              </div>
            </div>
            <div className="h-24 w-16 bg-gray-300 dark:bg-gray-600 rounded-t-lg mt-4 flex items-center justify-center">
              <Trophy className="h-6 w-6 text-white" />
            </div>
          </motion.div>
        )}
        
        {/* First Place */}
        {filteredLeaderboard.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-amber-400 dark:border-amber-500">
                <img 
                  src={filteredLeaderboard[0].avatar} 
                  alt={filteredLeaderboard[0].name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-amber-400 dark:bg-amber-500 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold">
                1
              </div>
            </div>
            <div className="mt-2 text-center">
              <p className="font-semibold">{filteredLeaderboard[0].name}</p>
              <div className="flex items-center justify-center mt-1">
                <Trophy className="h-4 w-4 text-amber-500 mr-1" />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {filteredLeaderboard[0].taskPoints} pts
                </span>
              </div>
            </div>
            <div className="h-32 w-20 bg-amber-400 dark:bg-amber-500 rounded-t-lg mt-4 flex items-center justify-center">
              <Award className="h-8 w-8 text-white" />
            </div>
          </motion.div>
        )}
        
        {/* Third Place */}
        {filteredLeaderboard.length > 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              <div className="h-20 w-20 rounded-full overflow-hidden border-4 border-amber-700 dark:border-amber-800">
                <img 
                  src={filteredLeaderboard[2].avatar} 
                  alt={filteredLeaderboard[2].name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-amber-700 dark:bg-amber-800 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold">
                3
              </div>
            </div>
            <div className="mt-2 text-center">
              <p className="font-semibold">{filteredLeaderboard[2].name}</p>
              <div className="flex items-center justify-center mt-1">
                <Medal className="h-4 w-4 text-amber-700 dark:text-amber-800 mr-1" />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {filteredLeaderboard[2].taskPoints} pts
                </span>
              </div>
            </div>
            <div className="h-16 w-16 bg-amber-700 dark:bg-amber-800 rounded-t-lg mt-4 flex items-center justify-center">
              <Medal className="h-6 w-6 text-white" />
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Leaderboard Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Rank
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  User
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Badge
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Task Points
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Merit Points
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Completed Tasks
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Win Rate
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Streak
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredLeaderboard.map((user, index) => (
                <motion.tr 
                  key={user.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className={`font-semibold ${
                        user.rank <= 3 ? 'text-amber-500' : 'text-gray-700 dark:text-gray-300'
                      }`}>
                        {user.rank}
                      </span>
                      {user.change === 'up' && (
                        <ArrowUp className="ml-1 h-4 w-4 text-green-500" />
                      )}
                      {user.change === 'down' && (
                        <ArrowDown className="ml-1 h-4 w-4 text-red-500" />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full overflow-hidden">
                        <img 
                          src={user.avatar} 
                          alt={user.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium">{user.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {user.template} • {user.subfield}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                        user.badgeLevel >= 5 ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' :
                        user.badgeLevel >= 4 ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' :
                        user.badgeLevel >= 3 ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                        user.badgeLevel >= 2 ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                        'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                      }`}>
                        {user.badgeLevel}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium">{user.taskPoints}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium">{user.meritPoints}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm">{user.completedTasks}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Trophy className="h-4 w-4 text-amber-500 mr-1" />
                      <span className="text-sm">{user.winRate}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-blue-500 mr-1" />
                      <span className="text-sm">{user.streak} days</span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;