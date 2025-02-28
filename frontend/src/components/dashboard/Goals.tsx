import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  Filler
} from 'chart.js';
import { 
  Target, 
  TrendingUp, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Plus,
  ChevronRight,
  ChevronDown,
  Edit,
  Trash2
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface Goal {
  id: number;
  title: string;
  description: string;
  target: number;
  current: number;
  deadline: string;
  category: string;
  progress: number[];
}

const Goals: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // Chart colors
  const primaryColor = isDark ? 'rgb(16, 185, 129)' : 'rgb(22, 163, 74)';
  const secondaryColor = isDark ? 'rgb(5, 150, 105)' : 'rgb(34, 197, 94)';
  const textColor = isDark ? 'rgb(209, 213, 219)' : 'rgb(55, 65, 81)';
  const gridColor = isDark ? 'rgba(75, 85, 99, 0.2)' : 'rgba(209, 213, 219, 0.2)';
  
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: 1,
      title: 'Complete 10 React Projects',
      description: 'Build 10 different React projects to strengthen your skills',
      target: 10,
      current: 4,
      deadline: '2025-08-31',
      category: 'Technical Skills',
      progress: [0, 1, 2, 3, 4, 4, 4],
    },
    {
      id: 2,
      title: 'Learn TypeScript',
      description: 'Master TypeScript fundamentals and advanced concepts',
      target: 100,
      current: 65,
      deadline: '2025-06-15',
      category: 'Technical Skills',
      progress: [0, 10, 25, 40, 55, 65, 65],
    },
    {
      id: 3,
      title: 'Contribute to Open Source',
      description: 'Make meaningful contributions to open source projects',
      target: 5,
      current: 2,
      deadline: '2025-12-31',
      category: 'Community',
      progress: [0, 0, 1, 1, 2, 2, 2],
    },
  ]);
  
  const [expandedGoal, setExpandedGoal] = useState<number | null>(null);
  
  const toggleGoalExpand = (goalId: number) => {
    if (expandedGoal === goalId) {
      setExpandedGoal(null);
    } else {
      setExpandedGoal(goalId);
    }
  };
  
  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: gridColor,
        },
        ticks: {
          color: textColor,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: textColor,
        },
      },
    },
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Goal Progress Tracker</h1>
        <button className="btn-primary flex items-center">
          <Plus className="h-5 w-5 mr-1" />
          New Goal
        </button>
      </div>
      
      {/* Goal Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow p-4"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Active Goals</p>
              <p className="text-2xl font-bold">{goals.length}</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow p-4"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Average Progress</p>
              <p className="text-2xl font-bold">
                {Math.round(goals.reduce((acc, goal) => acc + (goal.current / goal.target) * 100, 0) / goals.length)}%
              </p>
            </div>
            <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow p-4"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Upcoming Deadlines</p>
              <p className="text-2xl font-bold">
                {goals.filter(goal => new Date(goal.deadline) > new Date() && (goal.current / goal.target) < 1).length}
              </p>
            </div>
            <div className="h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center">
              <Calendar className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Goal List */}
      <div className="space-y-4">
        {goals.map((goal) => {
          const progressPercentage = Math.round((goal.current / goal.target) * 100);
          const isExpanded = expandedGoal === goal.id;
          
          // Chart data
          const chartData = {
            labels: ['Start', 'Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Current'],
            datasets: [
              {
                label: 'Progress',
                data: goal.progress,
                borderColor: primaryColor,
                backgroundColor: `${primaryColor}20`,
                tension: 0.4,
                fill: true,
              },
              {
                label: 'Target',
                data: Array(7).fill(goal.target),
                borderColor: `${secondaryColor}80`,
                borderDash: [5, 5],
                borderWidth: 2,
                pointRadius: 0,
                fill: false,
              },
            ],
          };
          
          return (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden"
            >
              <div 
                className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                onClick={() => toggleGoalExpand(goal.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h3 className="text-lg font-semibold">{goal.title}</h3>
                      <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                        {goal.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{goal.description}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="flex items-center justify-end">
                        <span className="text-sm font-medium">
                          {goal.current} / {goal.target}
                        </span>
                        <span className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                          ({progressPercentage}%)
                        </span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>
                          Due {new Date(goal.deadline).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </span>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
                
                <div className="mt-3">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-primary-600 dark:bg-darkPrimary-500 h-2.5 rounded-full" 
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-4"
                >
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-2">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Progress Over Time</h4>
                        <div className="h-64">
                          <Line data={chartData} options={chartOptions} />
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium mb-2">Goal Details</h4>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                              <p className="text-xs text-gray-500 dark:text-gray-400">Current Progress</p>
                              <p className="text-lg font-semibold">{goal.current} / {goal.target}</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                              <p className="text-xs text-gray-500 dark:text-gray-400">Completion</p>
                              <p className="text-lg font-semibold">{progressPercentage}%</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                              <p className="text-xs text-gray-500 dark:text-gray-400">Deadline</p>
                              <p className="text-lg font-semibold">
                                {new Date(goal.deadline).toLocaleDateString('en-US', { 
                                  month: 'short', 
                                  day: 'numeric', 
                                  year: 'numeric' 
                                })}
                              </p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                              <p className="text-xs text-gray-500 dark:text-gray-400">Category</p>
                              <p className="text-lg font-semibold">{goal.category}</p>
                            </div>
                          </div>
                          
                          <div className="flex space-x-2">
                            <button className="flex-1 py-2 bg-primary-600 hover:bg-primary-700 dark:bg-darkPrimary-600 dark:hover:bg-darkPrimary-700 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center">
                              <CheckCircle2 className="h-4 w-4 mr-1" />
                              Update Progress
                            </button>
                            <button className="p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md text-gray-700 dark:text-gray-300">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="p-2 bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-800/50 rounded-md text-red-700 dark:text-red-300">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Goals;