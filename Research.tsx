import React from 'react';
import { Target, Lightbulb, Zap, Globe, ArrowRight } from 'lucide-react';

export const Research: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Research Overview</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Malaria remains one of the world's most pressing health challenges, affecting millions globally. 
            Our research addresses the critical need for accurate, rapid, and accessible diagnostic tools 
            through innovative deep learning approaches.
          </p>
        </div>

        {/* Problem Statement */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 md:p-12 border border-red-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Traditional malaria diagnosis relies heavily on manual microscopic examination of blood smears, 
                  which requires extensive training and is prone to human error. In resource-limited settings, 
                  where malaria is most prevalent, access to skilled microscopists is often limited.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>247 million malaria cases reported globally in 2021</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>619,000 deaths, primarily in sub-Saharan Africa</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Limited access to skilled microscopists in endemic regions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Inter-observer variability in manual diagnosis</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Microscopic blood smear"
                  className="rounded-lg shadow-lg w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Innovative Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Hybrid Architecture</h3>
              <p className="text-gray-600 text-sm">
                Combining CNN spatial feature extraction with RNN temporal processing for enhanced accuracy.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Transfer Learning</h3>
              <p className="text-gray-600 text-sm">
                Leveraging pre-trained models and fine-tuning on malaria-specific datasets for optimal performance.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Real-time Processing</h3>
              <p className="text-gray-600 text-sm">
                Optimized inference pipeline enabling rapid diagnosis suitable for clinical environments.
              </p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Global Impact</h3>
              <p className="text-gray-600 text-sm">
                Designed for deployment in resource-limited settings with minimal infrastructure requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Research Objectives */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-blue-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Objectives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Develop Hybrid CNN-RNN Architecture</h3>
                    <p className="text-gray-600 text-sm">
                      Create novel deep learning models that combine spatial and temporal feature extraction 
                      for enhanced parasite detection accuracy.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Achieve Superior Accuracy</h3>
                    <p className="text-gray-600">Achieve Superior Accuracy(&lt; 99%) and species classification.</p>
  
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Enable Real-time Diagnosis</h3>
                    <p className="text-gray-600 text-sm">
                      Optimize models for rapid inference suitable for point-of-care diagnostics 
                      in clinical settings.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Multi-species Classification</h3>
                    <p className="text-gray-600 text-sm">
                      Develop comprehensive detection capabilities for all major Plasmodium species 
                      affecting human health.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">5</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Validate Clinical Utility</h3>
                    <p className="text-gray-600 text-sm">
                      Conduct extensive validation studies using diverse datasets from multiple 
                      geographic regions and clinical settings.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">6</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Open Source Implementation</h3>
                    <p className="text-gray-600 text-sm">
                      Provide accessible tools and models to support global malaria elimination 
                      efforts and further research.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact and Applications */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Expected Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-600 font-medium mb-2">Reduction in Diagnostic Time</div>
              <div className="text-sm text-gray-500">From hours to seconds for accurate results</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
              <div className="text-gray-600 font-medium mb-2">Cost Reduction</div>
              <div className="text-sm text-gray-500">Lower operational costs in clinical settings</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600 font-medium mb-2">Accessibility Improvement</div>
              <div className="text-sm text-gray-500">Deployment in resource-limited areas</div>
            </div>
          </div>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 mx-auto transition-colors">
            <span>Explore Methodology</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};