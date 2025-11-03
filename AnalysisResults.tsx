import React from 'react';
import { CheckCircle, AlertTriangle, XCircle, Activity, Clock, User } from 'lucide-react';

interface AnalysisResult {
  prediction: string;
  confidence: number;
  species?: string;
  stage?: string;
  risk: 'low' | 'medium' | 'high';
  recommendations: string[];
}

interface AnalysisResultsProps {
  result: AnalysisResult;
  modelName: string;
}

export const AnalysisResults: React.FC<AnalysisResultsProps> = ({ result, modelName }) => {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getResultIcon = () => {
    if (result.prediction === 'Positive') {
      return <AlertTriangle className="h-8 w-8 text-red-600" />;
    }
    return <CheckCircle className="h-8 w-8 text-green-600" />;
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 95) return 'text-green-600';
    if (confidence >= 90) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Analysis Results</h3>
      
      <div className="space-y-6">
        {/* Primary Result */}
        <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
          <div className="flex items-center space-x-4">
            {getResultIcon()}
            <div>
              <h4 className="text-xl font-bold text-gray-900">
                {result.prediction}
              </h4>
              <p className="text-sm text-gray-600">
                Model: {modelName}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className={`text-2xl font-bold ${getConfidenceColor(result.confidence)}`}>
              {result.confidence}%
            </p>
            <p className="text-sm text-gray-600">Confidence</p>
          </div>
        </div>

        {/* Detailed Information */}
        {result.species && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-2 mb-2">
                <Activity className="h-5 w-5 text-blue-600" />
                <h5 className="font-medium text-gray-900">Species</h5>
              </div>
              <p className="text-gray-700">{result.species}</p>
            </div>
            
            {result.stage && (
              <div className="p-4 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <h5 className="font-medium text-gray-900">Parasite Stage</h5>
                </div>
                <p className="text-gray-700">{result.stage}</p>
              </div>
            )}
          </div>
        )}

        {/* Risk Assessment */}
        <div className={`p-4 rounded-lg border ${getRiskColor(result.risk)}`}>
          <div className="flex items-center space-x-2 mb-2">
            <User className="h-5 w-5" />
            <h5 className="font-medium">Risk Level</h5>
          </div>
          <p className="font-semibold capitalize">{result.risk} Risk</p>
        </div>

        {/* Recommendations */}
        <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
          <h5 className="font-medium text-gray-900 mb-3">Clinical Recommendations</h5>
          <ul className="space-y-2">
            {result.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                <span className="text-gray-700">{rec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-200">
          <p className="text-sm text-yellow-800">
            <strong>Disclaimer:</strong> This AI analysis is for research and educational purposes. 
            Always confirm results with laboratory testing and consult qualified medical professionals 
            for clinical decisions.
          </p>
        </div>
      </div>
    </div>
  );
};