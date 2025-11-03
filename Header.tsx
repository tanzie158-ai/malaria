import React from 'react';
import { Microscope, Home, FlaskConical, Cpu, BarChart3, FileText, Play, Users } from 'lucide-react';
import { TabType } from '../App';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home' as TabType, label: 'Home', icon: Home },
    { id: 'research' as TabType, label: 'Research', icon: FlaskConical },
    { id: 'methodology' as TabType, label: 'Methodology', icon: Cpu },
    { id: 'results' as TabType, label: 'Results', icon: BarChart3 },
    { id: 'publications' as TabType, label: 'Publications', icon: FileText },
    { id: 'demo' as TabType, label: 'Demo', icon: Play },
    { id: 'team' as TabType, label: 'Team', icon: Users },
  ];

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Microscope className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Malaria Detection Research</h1>
              <p className="text-sm text-gray-600">Hybrid Deep Learning Frameworks</p>
            </div>
          </div>
          <nav className="flex space-x-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 ${
                  activeTab === id
                    ? 'bg-blue-600 text-white font-medium shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};