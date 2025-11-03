import React from 'react';
import { Brain, Zap, Target } from 'lucide-react';

export const ModelPerformance: React.FC = () => {
  const models = [
    {
      name: 'Hybrid CNN-RNN',
      accuracy: 98.7,
      precision: 97.9,
      recall: 98.1,
      speed: '1.2s',
      status: 'active',
      icon: Brain,
    },
    {
      name: 'Transfer Learning (ResNet)',
      accuracy: 97.3,
      precision: 96.8,
      recall: 97.6,
      speed: '0.8s',
      status: 'active',
      icon: Zap,
    },
    {
      name: 'Custom CNN',
      accuracy: 95.9,
      precision: 94.7,
      recall: 96.2,
      speed: '1.5s',
      status: 'backup',
      icon: Target,
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Model Performance</h3>
      <div className="space-y-4">
        {models.map((model) => (
          <div key={model.name} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <model.icon className="h-5 w-5 text-blue-600" />
                <span className="font-medium text-gray-900">{model.name}</span>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                model.status === 'active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {model.status}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Accuracy</p>
                <p className="font-semibold text-gray-900">{model.accuracy}%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Speed</p>
                <p className="font-semibold text-gray-900">{model.speed}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Precision</p>
                <p className="font-semibold text-gray-900">{model.precision}%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Recall</p>
                <p className="font-semibold text-gray-900">{model.recall}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};