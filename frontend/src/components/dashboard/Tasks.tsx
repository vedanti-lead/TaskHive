import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Filter, 
  Search, 
  Plus, 
  ChevronDown, 
  ChevronUp,
  MoreHorizontal,
  Edit,
  Trash2,
  CheckSquare,
  Square
} from 'lucide-react';

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Completed' | 'In Progress' | 'Not Started';
  type: 'Teacher' | 'Community';
  points: number;
}

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Complete React Component Library',
      description: 'Build a reusable component library with proper documentation for the team to use.',
      dueDate: '2025-05-10',
      priority: 'High',
      status: 'In Progress',
      type: 'Teacher',
      points: 50,
    },
    {
      id: 2,
      title: 'Write Technical Documentation',
      description: 'Create comprehensive documentation for the API endpoints and database schema.',
      dueDate: '2025-05-11',
      priority: 'Medium',
      status: 'Not Started',
      type: 'Teacher',
      points: 30,
    },
    {
      id: 3,
      title: 'Review Pull Requests',
      description: 'Review and provide feedback on team members\' code submissions.',
      dueDate: '2025-05-12',
      priority: 'Low',
      status: 'Not Started',
      type: 'Teacher',
      points: 20,
    },
    {
      id: 4,
      title: 'Fix Responsive Layout Issues',
      description: 'Address the layout problems on mobile devices for the dashboard page.',
      dueDate: '2025-05-09',
      priority: 'High',
      status: 'Completed',
      type: 'Teacher',
      points: 40,
    },
    {
      id: 5,
      title: 'Optimize Database Queries',
      description: 'Improve the performance of slow database queries in the reporting module.',
      dueDate: '2025-05-15',
      priority: 'Medium',
      status: 'Not Started',
      type: 'Community',
      points: 60,
    },
    {
      id: 6,
      title: 'Implement Authentication Flow',
      description: 'Create a secure authentication system with email verification and password reset.',
      dueDate: '2025-05-20',
      priority: 'High',
      status: 'Not Started',
      type: 'Community',
      points: 80,
    },
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [priorityFilter, setPriorityFilter] = useState<string>('All');
  const [typeFilter, setTypeFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('dueDate');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [selectedTasks, setSelectedTasks] = useState<number[]>([]);
  
  const handleStatusChange = (taskId: number, newStatus: 'Completed' | 'In Progress' | 'Not Started') => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const toggleSort = (field: string) => {
    if (sortBy === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortDirection('asc');
    }
  };
  
  const toggleTaskSelection = (taskId: number) => {
    if (selectedTasks.includes(taskId)) {
      setSelectedTasks(selectedTasks.filter(id => id !== taskId));
    } else {
      setSelectedTasks([...selectedTasks, taskId]);
    }
  };
  
  const toggleAllTasks = () => {
    if (selectedTasks.length === filteredTasks.length) {
      setSelectedTasks([]);
    } else {
      setSelectedTasks(filteredTasks.map(task => task.id));
    }
  };
  
  const markSelectedAsCompleted = () => {
    setTasks(tasks.map(task => 
      selectedTasks.includes(task.id) ? { ...task, status: 'Completed' } : task
    ));
    setSelectedTasks([]);
  };
  
  // Filter tasks
  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          task.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || task.status === statusFilter;
    const matchesPriority = priorityFilter === 'All' || task.priority === priorityFilter;
    const matchesType = typeFilter === 'All' || task.type === typeFilter;
    
    return matchesSearch && matchesStatus && matchesPriority && matchesType;
  });
  
  // Sort tasks
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === 'dueDate') {
      return sortDirection === 'asc' 
        ? new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
        : new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
    } else if (sortBy === 'priority') {
      const priorityOrder = { High: 3, Medium: 2, Low: 1 };
      return sortDirection === 'asc'
        ? priorityOrder[a.priority] - priorityOrder[b.priority]
        : priorityOrder[b.priority] - priorityOrder[a.priority];
    } else if (sortBy === 'points') {
      return sortDirection === 'asc' ? a.points - b.points : b.points - a.points;
    }
    return 0;
  });
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Tasks & Assignments</h1>
        <button className="btn-primary flex items-center">
          <Plus className="h-5 w-5 mr-1" />
          New Task
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
              placeholder="Search tasks..."
              className="input pl-10 w-full"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <select
                className="input appearance-none pr-8"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="Completed">Completed</option>
                <option value="In Progress">In Progress</option>
                <option value="Not Started">Not Started</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            <div className="relative">
              <select
                className="input appearance-none pr-8"
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
              >
                <option value="All">All Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
             </div>
            
            <div className="relative">
              <select
                className="input appearance-none pr-8"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="All">All Types</option>
                <option value="Teacher">Teacher</option>
                <option value="Community">Community</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        
        {selectedTasks.length > 0 && (
          <div className="mt-4 p-2 bg-primary-50 dark:bg-darkPrimary-900 rounded-md flex items-center justify-between">
            <span className="text-sm font-medium">{selectedTasks.length} tasks selected</span>
            <div className="flex space-x-2">
              <button 
                className="px-3 py-1 bg-primary-600 dark:bg-darkPrimary-600 text-white text-sm rounded-md hover:bg-primary-700 dark:hover:bg-darkPrimary-700"
                onClick={markSelectedAsCompleted}
              >
                Mark as Completed
              </button>
              <button className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-md hover:bg-gray-300 dark:hover:bg-gray-600">
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Task List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-10">
                  <div className="flex items-center">
                    <button 
                      className="mr-2 focus:outline-none"
                      onClick={toggleAllTasks}
                    >
                      {selectedTasks.length === filteredTasks.length && filteredTasks.length > 0 ? (
                        <CheckSquare className="h-4 w-4 text-primary-600 dark:text-darkPrimary-400" />
                      ) : (
                        <Square className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  <button 
                    className="flex items-center focus:outline-none"
                    onClick={() => toggleSort('title')}
                  >
                    Task
                    {sortBy === 'title' && (
                      sortDirection === 'asc' ? 
                        <ChevronUp className="h-4 w-4 ml-1" /> : 
                        <ChevronDown className="h-4 w-4 ml-1" />
                    )}
                  </button>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  <button 
                    className="flex items-center focus:outline-none"
                    onClick={() => toggleSort('dueDate')}
                  >
                    Due Date
                    {sortBy === 'dueDate' && (
                      sortDirection === 'asc' ? 
                        <ChevronUp className="h-4 w-4 ml-1" /> : 
                        <ChevronDown className="h-4 w-4 ml-1" />
                    )}
                  </button>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  <button 
                    className="flex items-center focus:outline-none"
                    onClick={() => toggleSort('priority')}
                  >
                    Priority
                    {sortBy === 'priority' && (
                      sortDirection === 'asc' ? 
                        <ChevronUp className="h-4 w-4 ml-1" /> : 
                        <ChevronDown className="h-4 w-4 ml-1" />
                    )}
                  </button>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  <button 
                    className="flex items-center focus:outline-none"
                    onClick={() => toggleSort('points')}
                  >
                    Points
                    {sortBy === 'points' && (
                      sortDirection === 'asc' ? 
                        <ChevronUp className="h-4 w-4 ml-1" /> : 
                        <ChevronDown className="h-4 w-4 ml-1" />
                    )}
                  </button>
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {sortedTasks.length > 0 ? (
                sortedTasks.map((task) => (
                  <motion.tr 
                    key={task.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={task.status === 'Completed' ? 'bg-gray-50 dark:bg-gray-900/30' : ''}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button 
                        className="focus:outline-none"
                        onClick={() => toggleTaskSelection(task.id)}
                      >
                        {selectedTasks.includes(task.id) ? (
                          <CheckSquare className="h-5 w-5 text-primary-600 dark:text-darkPrimary-400" />
                        ) : (
                          <Square className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className={`font-medium ${task.status === 'Completed' ? 'line-through text-gray-500 dark:text-gray-400' : ''}`}>
                          {task.title}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {task.description.length > 60 ? `${task.description.substring(0, 60)}...` : task.description}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm">
                          {new Date(task.dueDate).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        task.priority === 'High' 
                          ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' 
                          : task.priority === 'Medium' 
                            ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' 
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                      }`}>
                        {task.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        className={`text-sm rounded-md border-0 py-1 pl-2 pr-8 ${
                          task.status === 'Completed' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                            : task.status === 'In Progress' 
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' 
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                        }`}
                        value={task.status}
                        onChange={(e) => handleStatusChange(task.id, e.target.value as 'Completed' | 'In Progress' | 'Not Started')}
                      >
                        <option value="Not Started">Not Started</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        task.type === 'Teacher' 
                          ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' 
                          : 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300'
                      }`}>
                        {task.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {task.points} pts
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="relative inline-block text-left">
                        <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                          <MoreHorizontal className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        </button>
                        {/* Dropdown menu would go here */}
                      </div>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                    No tasks found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tasks;