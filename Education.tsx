import React, { useState } from 'react';
import { BookOpen, Video, FileText, Users, ChevronRight, Play, Clock } from 'lucide-react';

export const Education: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Malaria Overview', icon: BookOpen },
    { id: 'detection', title: 'Detection Methods', icon: FileText },
    { id: 'ai-models', title: 'AI Models', icon: Video },
    { id: 'training', title: 'Training Resources', icon: Users },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Understanding Malaria</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">What is Malaria?</h4>
                <p className="text-gray-600 mb-4">
                  Malaria is a life-threatening disease caused by Plasmodium parasites transmitted through 
                  infected Anopheles mosquito bites. It remains a major global health challenge, particularly 
                  in tropical and subtropical regions.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>5 Plasmodium species affect humans</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>247 million cases worldwide (2021)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>619,000 deaths annually</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Plasmodium Species</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 rounded-lg">
                    <p className="font-medium text-red-800">P. falciparum</p>
                    <p className="text-sm text-red-600">Most deadly species, causes cerebral malaria</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <p className="font-medium text-orange-800">P. vivax</p>
                    <p className="text-sm text-orange-600">Most widespread, causes relapsing malaria</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <p className="font-medium text-yellow-800">P. ovale & P. malariae</p>
                    <p className="text-sm text-yellow-600">Less common, milder symptoms</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="font-medium text-purple-800">P. knowlesi</p>
                    <p className="text-sm text-purple-600">Zoonotic species, Southeast Asia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'detection':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Detection Methods</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Microscopy</h4>
                <img 
                  src="https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Microscopy"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <p className="text-sm text-gray-600 mb-3">
                  Gold standard for malaria diagnosis using thick and thin blood smears.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• High sensitivity and specificity</li>
                  <li>• Species identification possible</li>
                  <li>• Requires skilled microscopist</li>
                  <li>• Time-intensive process</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Rapid Diagnostic Tests</h4>
                <img 
                  src="https://images.pexels.com/photos/8516698/pexels-photo-8516698.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="RDT"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <p className="text-sm text-gray-600 mb-3">
                  Point-of-care tests detecting malaria antigens in blood samples.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Quick results (15-20 minutes)</li>
                  <li>• No special training required</li>
                  <li>• Limited species differentiation</li>
                  <li>• Lower sensitivity at low parasitemia</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">AI-Assisted Diagnosis</h4>
                <img 
                  src="https://images.pexels.com/photos/8488725/pexels-photo-8488725.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="AI Diagnosis"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <p className="text-sm text-gray-600 mb-3">
                  Machine learning models for automated parasite detection and classification.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Consistent accuracy</li>
                  <li>• Rapid processing</li>
                  <li>• Reduces human error</li>
                  <li>• Supports remote diagnosis</li>
                </ul>
              </div>
            </div>
          </div>
        );
      
      case 'ai-models':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">AI Models for Malaria Detection</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Convolutional Neural Networks (CNNs)</h4>
                <p className="text-gray-600 mb-4">
                  Deep learning models specifically designed for image analysis, excellent at detecting 
                  spatial patterns in microscopic images.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h5 className="font-medium text-blue-900">Architecture</h5>
                    <p className="text-sm text-blue-700 mt-1">Multiple convolutional layers with pooling and activation functions</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h5 className="font-medium text-blue-900">Advantages</h5>
                    <p className="text-sm text-blue-700 mt-1">Excellent feature extraction, translation invariant</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h5 className="font-medium text-blue-900">Accuracy</h5>
                    <p className="text-sm text-blue-700 mt-1">95-98% on standardized datasets</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Hybrid CNN-RNN Models</h4>
                <p className="text-gray-600 mb-4">
                  Combines spatial feature extraction of CNNs with sequential processing capabilities 
                  of Recurrent Neural Networks for enhanced accuracy.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h5 className="font-medium text-green-900">Innovation</h5>
                    <p className="text-sm text-green-700 mt-1">Temporal context awareness for better classification</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h5 className="font-medium text-green-900">Performance</h5>
                    <p className="text-sm text-green-700 mt-1">Superior accuracy in complex cases</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h5 className="font-medium text-green-900">Applications</h5>
                    <p className="text-sm text-green-700 mt-1">Multi-stage parasite detection</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Transfer Learning Approaches</h4>
                <p className="text-gray-600 mb-4">
                  Pre-trained models (ResNet, VGG, DenseNet) fine-tuned on malaria datasets for 
                  improved performance with limited training data.
                </p>
                <div className="flex space-x-4">
                  <div className="flex-1 p-4 bg-purple-50 rounded-lg">
                    <h5 className="font-medium text-purple-900">ResNet-50</h5>
                    <p className="text-sm text-purple-700 mt-1">97.3% accuracy, fast inference</p>
                  </div>
                  <div className="flex-1 p-4 bg-purple-50 rounded-lg">
                    <h5 className="font-medium text-purple-900">DenseNet-121</h5>
                    <p className="text-sm text-purple-700 mt-1">96.8% accuracy, efficient architecture</p>
                  </div>
                  <div className="flex-1 p-4 bg-purple-50 rounded-lg">
                    <h5 className="font-medium text-purple-900">VGG-16</h5>
                    <p className="text-sm text-purple-700 mt-1">95.9% accuracy, robust features</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'training':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Training Resources</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">Video Tutorials</h4>
                {[
                  { title: 'Introduction to Malaria Microscopy', duration: '15:32', level: 'Beginner' },
                  { title: 'AI-Assisted Diagnosis Workflow', duration: '22:18', level: 'Intermediate' },
                  { title: 'Advanced Pattern Recognition', duration: '18:45', level: 'Advanced' },
                  { title: 'Quality Control Best Practices', duration: '12:20', level: 'All Levels' },
                ].map((video, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-100 p-2 rounded-lg">
                        <Play className="h-4 w-4 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-900">{video.title}</h5>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{video.duration}</span>
                          </div>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                            {video.level}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">Documentation</h4>
                {[
                  { title: 'API Reference Guide', type: 'Technical' },
                  { title: 'Clinical Validation Study', type: 'Research' },
                  { title: 'Installation & Setup', type: 'Getting Started' },
                  { title: 'Troubleshooting Guide', type: 'Support' },
                  { title: 'Model Training Tutorial', type: 'Advanced' },
                  { title: 'Data Preparation Guidelines', type: 'Technical' },
                ].map((doc, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-blue-600" />
                        <div>
                          <h5 className="font-medium text-gray-900">{doc.title}</h5>
                          <span className="text-sm text-gray-600">{doc.type}</span>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Sidebar */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 sticky top-4">
          <h3 className="font-semibold text-gray-900 mb-4">Learning Modules</h3>
          <nav className="space-y-2">
            {sections.map(({ id, title, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeSection === id
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{title}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Content */}
      <div className="lg:col-span-3">
        <div className="bg-gray-50 rounded-xl p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};