import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Logo className="h-10 w-10" />
              <span className="ml-2 text-xl font-bold">Task Hive</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A collaborative ecosystem for personal and professional growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-darkPrimary-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-darkPrimary-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-darkPrimary-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-darkPrimary-400">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-darkPrimary-400">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#features" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-darkPrimary-400">
                  AI-Powered Goals
                </Link>
              </li>
              <li>
                <Link to="/#features" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-darkPrimary-400">
                  Task Management
                </Link>
              </li>
              <li>
                <Link to="/#features" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-darkPrimary-400">
                  Competitions
                </Link>
              </li>
              <li>
                <Link to="/#features" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-darkPrimary-400">
                  Badge System
                </Link>
              </li>
              <li>
                <Link to="/#features" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-darkPrimary-400">
                  Mentorship
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-darkPrimary-400">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-darkPrimary-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-darkPrimary-400">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-darkPrimary-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-darkPrimary-400">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-darkPrimary-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-darkPrimary-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-darkPrimary-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-darkPrimary-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-darkPrimary-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-center text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Task Hive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;