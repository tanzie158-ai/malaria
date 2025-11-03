import React from 'react';
import { Microscope, Github, Mail, Globe, FileText, Users, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Microscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-gray-900">Malaria Detection Research</div>
                <div className="text-sm text-gray-600">Hybrid Deep Learning Frameworks</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Advancing malaria identification through innovative AI research, supporting 
              global health initiatives and improving diagnostic accessibility worldwide.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Research</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Methodology</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Results</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Publications</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Interactive Demo</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Datasets</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Code Repository</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Technical Documentation</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Trained Models</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Collaboration</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Research Team</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Partner Organizations</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Contact Researchers</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Join Our Mission</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © 2024 Malaria Detection Research Project. Advancing global health through AI innovation.
            <span className="block mt-1">
              Research collaboration between Stanford University, UC Berkeley, Google DeepMind, and Johns Hopkins University.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};