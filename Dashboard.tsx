import React from 'react';
import { TrendingUp, Users, Clock, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { StatCard } from './StatCard';
import { RecentAnalysis } from './RecentAnalysis';
import { ModelPerformance } from './ModelPerformance';

export const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Analyses',
      value: '12,847',
      change: '+12%',
      trend: 'up' as const,
      icon: TrendingUp,
      color: 'blue',
    },
    {
      title: 'Positive Cases',
      value: '2,341',
      change: '+5%',
      trend: 'up' as const,
      icon: AlertTriangle,
      color: 'red',
    },
    {
      title: 'Accuracy Rate',
      value: '98.7%',
      change: '+0.3%',
      trend: 'up' as const,
      icon: CheckCircle,
      color: 'green',
    },
    {
      title: 'Processing Time',
      value: '1.2s',
      change: '-15%',
      trend: 'down' as const,
      icon: Clock,
      color: 'teal',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h2>
        <p className="text-gray-600">
          Real-time analytics and performance metrics for malaria detection system
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RecentAnalysis />
        <ModelPerformance />
      </div>
    </div>
  );
};