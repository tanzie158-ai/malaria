import React from 'react';
import { BarChart3, TrendingUp, Award, Target, CheckCircle, AlertCircle } from 'lucide-react';

export const Results: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Research Results</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive evaluation results demonstrating superior performance across multiple 
            datasets and comparison with state-of-the-art methods in malaria detection.
          </p>
        </div>

        {/* Key Performance Metrics */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Performance Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98.7%</div>
              <div className="text-gray-700 font-medium">Overall Accuracy</div>
              <div className="text-sm text-gray-600 mt-1">Best in class performance</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">97.9%</div>
              <div className="text-gray-700 font-medium">Precision</div>
              <div className="text-sm text-gray-600 mt-1">Minimal false positives</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">98.1%</div>
              <div className="text-gray-700 font-medium">Recall</div>
              <div className="text-sm text-gray-600 mt-1">High sensitivity</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">98.0%</div>
              <div className="text-gray-700 font-medium">F1-Score</div>
              <div className="text-sm text-gray-600 mt-1">Balanced performance</div>
            </div>
          </div>
        </div>

        {/* Comparative Analysis */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Comparative Analysis</h2>
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Method</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Accuracy (%)</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Precision (%)</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Recall (%)</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">F1-Score (%)</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Speed (s)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-blue-50">
                    <td className="px-6 py-4 font-semibold text-blue-900">Our Hybrid CNN-RNN</td>
                    <td className="px-6 py-4 text-center font-bold text-blue-600">98.7</td>
                    <td className="px-6 py-4 text-center font-bold text-blue-600">97.9</td>
                    <td className="px-6 py-4 text-center font-bold text-blue-600">98.1</td>
                    <td className="px-6 py-4 text-center font-bold text-blue-600">98.0</td>
                    <td className="px-6 py-4 text-center font-bold text-blue-600">1.2</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900">ResNet-50</td>
                    <td className="px-6 py-4 text-center text-gray-700">95.3</td>
                    <td className="px-6 py-4 text-center text-gray-700">94.8</td>
                    <td className="px-6 py-4 text-center text-gray-700">95.1</td>
                    <td className="px-6 py-4 text-center text-gray-700">94.9</td>
                    <td className="px-6 py-4 text-center text-gray-700">0.8</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900">VGG-16</td>
                    <td className="px-6 py-4 text-center text-gray-700">92.1</td>
                    <td className="px-6 py-4 text-center text-gray-700">91.7</td>
                    <td className="px-6 py-4 text-center text-gray-700">92.3</td>
                    <td className="px-6 py-4 text-center text-gray-700">92.0</td>
                    <td className="px-6 py-4 text-center text-gray-700">1.5</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900">DenseNet-121</td>
                    <td className="px-6 py-4 text-center text-gray-700">94.6</td>
                    <td className="px-6 py-4 text-center text-gray-700">93.9</td>
                    <td className="px-6 py-4 text-center text-gray-700">94.8</td>
                    <td className="px-6 py-4 text-center text-gray-700">94.3</td>
                    <td className="px-6 py-4 text-center text-gray-700">1.1</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-900">Traditional CNN</td>
                    <td className="px-6 py-4 text-center text-gray-700">89.4</td>
                    <td className="px-6 py-4 text-center text-gray-700">88.7</td>
                    <td className="px-6 py-4 text-center text-gray-700">89.9</td>
                    <td className="px-6 py-4 text-center text-gray-700">89.3</td>
                    <td className="px-6 py-4 text-center text-gray-700">2.1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Species-Specific Performance */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Species-Specific Detection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">P. falciparum</h3>
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  High Risk
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Accuracy</span>
                  <span className="font-semibold text-red-600">99.1%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Precision</span>
                  <span className="font-semibold text-red-600">98.7%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Recall</span>
                  <span className="font-semibold text-red-600">99.3%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: '99.1%' }}></div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">P. vivax</h3>
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  Medium Risk
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Accuracy</span>
                  <span className="font-semibold text-orange-600">98.3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Precision</span>
                  <span className="font-semibold text-orange-600">97.8%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Recall</span>
                  <span className="font-semibold text-orange-600">98.6%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '98.3%' }}></div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">P. ovale & P. malariae</h3>
                <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Low Risk
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Accuracy</span>
                  <span className="font-semibold text-yellow-600">97.5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Precision</span>
                  <span className="font-semibold text-yellow-600">96.9%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Recall</span>
                  <span className="font-semibold text-yellow-600">97.8%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '97.5%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dataset Validation */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cross-Dataset Validation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Training Datasets</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-900">NIH Malaria Dataset</span>
                  <span className="text-blue-600 font-semibold">27,558 images</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-900">BBBC041 Dataset</span>
                  <span className="text-blue-600 font-semibold">1,364 images</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-900">Custom Clinical Data</span>
                  <span className="text-blue-600 font-semibold">5,247 images</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-900">Multi-center Collection</span>
                  <span className="text-blue-600 font-semibold">8,931 images</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Validation Results</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-900">Cross-validation (5-fold)</span>
                  <span className="text-green-600 font-semibold">98.4% ± 0.3%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-900">External validation</span>
                  <span className="text-green-600 font-semibold">97.8%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-900">Multi-site validation</span>
                  <span className="text-green-600 font-semibold">98.1%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-900">Temporal validation</span>
                  <span className="text-green-600 font-semibold">97.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Impact */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <Award className="h-16 w-16 mx-auto mb-4 text-blue-200" />
            <h2 className="text-3xl font-bold mb-4">Clinical Impact Assessment</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real-world validation demonstrates significant improvements in diagnostic accuracy 
              and workflow efficiency across multiple clinical settings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-200 mb-2">15%</div>
              <div className="font-medium mb-2">Reduction in Misdiagnosis</div>
              <div className="text-sm text-blue-200">Compared to manual microscopy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-200 mb-2">75%</div>
              <div className="font-medium mb-2">Faster Diagnosis</div>
              <div className="text-sm text-blue-200">Average time reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-200 mb-2">92%</div>
              <div className="font-medium mb-2">Clinician Acceptance</div>
              <div className="text-sm text-blue-200">User satisfaction rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};