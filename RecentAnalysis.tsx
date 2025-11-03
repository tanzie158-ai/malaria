import React from 'react';
import { CheckCircle, XCircle, AlertTriangle, Clock } from 'lucide-react';

export const RecentAnalysis: React.FC = () => {
  const analyses = [
    {
      id: 'IMG_001',
      timestamp: '2 minutes ago',
      result: 'Negative',
      confidence: 97.8,
      status: 'completed',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 'IMG_002',
      timestamp: '5 minutes ago',
      result: 'Positive - P. falciparum',
      confidence: 94.2,
      status: 'completed',
      icon: AlertTriangle,
      color: 'text-red-600',
    },
    {
      id: 'IMG_003',
      timestamp: '8 minutes ago',
      result: 'Negative',
      confidence: 99.1,
      status: 'completed',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 'IMG_004',
      timestamp: '12 minutes ago',
      result: 'Processing',
      confidence: 0,
      status: 'processing',
      icon: Clock,
      color: 'text-blue-600',
    },
    {
      id: 'IMG_005',
      timestamp: '15 minutes ago',
      result: 'Positive - P. vivax',
      confidence: 91.7,
      status: 'completed',
      icon: AlertTriangle,
      color: 'text-orange-600',
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Analysis</h3>
      <div className="space-y-4">
        {analyses.map((analysis) => (
          <div key={analysis.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
            <div className="flex items-center space-x-3">
              <analysis.icon className={`h-5 w-5 ${analysis.color}`} />
              <div>
                <p className="font-medium text-gray-900">{analysis.id}</p>
                <p className="text-sm text-gray-600">{analysis.timestamp}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={`font-medium ${analysis.color}`}>{analysis.result}</p>
              {analysis.status === 'completed' && (
                <p className="text-sm text-gray-600">{analysis.confidence}% confidence</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};