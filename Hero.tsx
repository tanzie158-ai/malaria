import React from 'react';
import { ArrowRight, Download, Github, ExternalLink, Microscope, Brain, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Advancing Malaria Identification From 
              <span className="text-blue-300"> Microscopic Blood Smears</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Using Hybrid Deep Learning Frameworks for Enhanced Diagnostic Accuracy
            </p>
            <p className="text-lg mb-12 text-blue-200 max-w-3xl mx-auto">
              Our research introduces novel hybrid CNN-RNN architectures that achieve 98.7% accuracy 
              in malaria parasite detection, significantly outperforming traditional methods and 
              supporting global health initiatives in resource-limited settings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             
              <a
  href="https://github.com/your-repo-link"
  target="_blank"
  className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white border border-white border-opacity-30 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 backdrop-blur-sm"
>
  <Github className="h-5 w-5" />
  <span>View Code</span>
</a>
             <a
  href="https://your-live-demo-link"
  target="_blank"
  className="bg-transparent hover:bg-white hover:bg-opacity-10 text-white border border-white border-opacity-50 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200"
>
  <ExternalLink className="h-5 w-5" />
  <span>Live Demo</span>
</a>
              </div>
            </div>
          </div>
        </div>
    

      {/* Key Features */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our hybrid deep learning approach combines the spatial feature extraction capabilities 
              of CNNs with the sequential processing power of RNNs for superior malaria detection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Microscope className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Detection</h3>
              <p className="text-gray-600 leading-relaxed">
                Multi-stage parasite identification with species-specific classification 
                including P. falciparum, P. vivax, P. ovale, and P. malariae detection.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hybrid Architecture</h3>
              <p className="text-gray-600 leading-relaxed">
                Novel CNN-RNN fusion model that leverages both spatial and temporal features 
                for enhanced accuracy in complex microscopic image analysis.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-time Processing</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimized inference pipeline achieving sub-second processing times 
                suitable for point-of-care diagnostics in resource-limited settings.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">98.7%</div>
              <div className="text-gray-600 font-medium">Detection Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">1.2s</div>
              <div className="text-gray-600 font-medium">Processing Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">15K+</div>
              <div className="text-gray-600 font-medium">Training Images</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">5</div>
              <div className="text-gray-600 font-medium">Parasite Species</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Explore Our Research
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Dive deeper into our methodology, results, and implementation details. 
            Access our datasets, trained models, and comprehensive documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
              <span>Read Full Paper</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Try Interactive Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
