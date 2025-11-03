import React, { useState } from 'react';
import { Brain, Layers, Zap, Database, ArrowRight, Code, Settings } from 'lucide-react';

export const Methodology: React.FC = () => {
  const [activeSection, setActiveSection] = useState('architecture');

  const sections = [
    { id: 'architecture', title: 'Model Architecture', icon: Brain },
    { id: 'preprocessing', title: 'Data Preprocessing', icon: Database },
    { id: 'training', title: 'Training Strategy', icon: Settings },
    { id: 'optimization', title: 'Optimization', icon: Zap },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'architecture':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hybrid CNN-RNN Architecture</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our novel hybrid architecture combines the spatial feature extraction capabilities of 
                Convolutional Neural Networks with the sequential processing power of Recurrent Neural Networks, 
                specifically designed for microscopic blood smear analysis.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Architecture Components</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h5 className="font-semibold text-gray-900 mb-2">CNN Feature Extractor</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• ResNet-50 backbone with custom modifications</li>
                      <li>• Multi-scale feature pyramid network</li>
                      <li>• Attention mechanisms for parasite localization</li>
                      <li>• Batch normalization and dropout regularization</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h5 className="font-semibold text-gray-900 mb-2">RNN Sequence Processor</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Bidirectional LSTM layers</li>
                      <li>• Temporal feature aggregation</li>
                      <li>• Context-aware classification</li>
                      <li>• Gradient clipping for stability</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-full">
                    <div className="text-center">
                      <div className="bg-blue-600 text-white p-3 rounded-lg mb-3">
                        <span className="font-semibold">Input Image</span>
                        <div className="text-sm opacity-90">224×224×3</div>
                      </div>
                      <ArrowRight className="h-6 w-6 text-gray-400 mx-auto mb-3" />
                      <div className="bg-green-600 text-white p-3 rounded-lg mb-3">
                        <span className="font-semibold">CNN Features</span>
                        <div className="text-sm opacity-90">2048-dim</div>
                      </div>
                      <ArrowRight className="h-6 w-6 text-gray-400 mx-auto mb-3" />
                      <div className="bg-purple-600 text-white p-3 rounded-lg mb-3">
                        <span className="font-semibold">RNN Processing</span>
                        <div className="text-sm opacity-90">512-dim</div>
                      </div>
                      <ArrowRight className="h-6 w-6 text-gray-400 mx-auto mb-3" />
                      <div className="bg-orange-600 text-white p-3 rounded-lg">
                        <span className="font-semibold">Classification</span>
                        <div className="text-sm opacity-90">6 classes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <Layers className="h-8 w-8 text-blue-600 mb-3" />
                <h5 className="font-semibold text-gray-900 mb-2">Layer Configuration</h5>
                <p className="text-sm text-gray-600">
                  Optimized layer depths and widths based on extensive hyperparameter tuning 
                  and ablation studies.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <Code className="h-8 w-8 text-green-600 mb-3" />
                <h5 className="font-semibold text-gray-900 mb-2">Implementation</h5>
                <p className="text-sm text-gray-600">
                  Built using PyTorch framework with custom CUDA kernels for 
                  accelerated training and inference.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <Brain className="h-8 w-8 text-purple-600 mb-3" />
                <h5 className="font-semibold text-gray-900 mb-2">Innovation</h5>
                <p className="text-sm text-gray-600">
                  Novel fusion mechanism that adaptively weights CNN and RNN 
                  contributions based on image complexity.
                </p>
              </div>
            </div>
          </div>
        );

      case 'preprocessing':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Preprocessing Pipeline</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive preprocessing pipeline designed to handle the variability in microscopic 
                blood smear images while preserving critical diagnostic features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Image Enhancement</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Histogram equalization for contrast enhancement</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Gaussian filtering for noise reduction</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Color space normalization (RGB to LAB)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Illumination correction algorithms</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Data Augmentation</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Rotation (0°-360°) and flipping transformations</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Elastic deformation for realistic variations</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Color jittering and brightness adjustment</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Mixup and CutMix regularization techniques</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Processing Steps</h4>
                  <div className="space-y-4">
                    {[
                      { step: 1, title: 'Quality Assessment', desc: 'Automated image quality scoring' },
                      { step: 2, title: 'Segmentation', desc: 'Cell boundary detection and isolation' },
                      { step: 3, title: 'Normalization', desc: 'Standardized intensity and color ranges' },
                      { step: 4, title: 'Patch Extraction', desc: 'Region of interest identification' },
                      { step: 5, title: 'Feature Enhancement', desc: 'Parasite-specific feature amplification' },
                    ].map((item) => (
                      <div key={item.step} className="flex items-center space-x-4">
                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{item.title}</div>
                          <div className="text-sm text-gray-600">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Quality Control</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Automated blur detection and filtering</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Artifact removal and correction</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Standardized image dimensions (224×224)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'training':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Training Strategy</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Multi-stage training approach with progressive learning and advanced optimization techniques 
                to achieve optimal performance across diverse datasets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Training Phases</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h5 className="font-medium text-blue-900 mb-2">Phase 1: Pre-training</h5>
                    <p className="text-sm text-gray-600 mb-2">ImageNet initialization with frozen layers</p>
                    <div className="text-xs text-gray-500">Epochs: 50 | LR: 1e-4 | Batch: 32</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h5 className="font-medium text-green-900 mb-2">Phase 2: Fine-tuning</h5>
                    <p className="text-sm text-gray-600 mb-2">Gradual unfreezing with reduced learning rate</p>
                    <div className="text-xs text-gray-500">Epochs: 100 | LR: 1e-5 | Batch: 16</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h5 className="font-medium text-purple-900 mb-2">Phase 3: Optimization</h5>
                    <p className="text-sm text-gray-600 mb-2">Full model training with advanced techniques</p>
                    <div className="text-xs text-gray-500">Epochs: 200 | LR: 1e-6 | Batch: 8</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Optimization Techniques</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>AdamW optimizer with weight decay</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Cosine annealing learning rate schedule</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Gradient accumulation for large batch effects</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Early stopping with patience mechanism</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Loss Functions</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Focal loss for class imbalance handling</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Label smoothing for regularization</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Multi-task learning with auxiliary losses</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Training Infrastructure</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">8</span>
                  </div>
                  <div className="font-medium text-gray-900">NVIDIA V100 GPUs</div>
                  <div className="text-sm text-gray-600">Distributed training setup</div>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">72h</span>
                  </div>
                  <div className="font-medium text-gray-900">Training Duration</div>
                  <div className="text-sm text-gray-600">Complete model training</div>
                </div>
                <div className="text-center">
                  <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">15K</span>
                  </div>
                  <div className="font-medium text-gray-900">Training Images</div>
                  <div className="text-sm text-gray-600">Diverse dataset sources</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'optimization':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Model Optimization</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Advanced optimization techniques to achieve real-time performance while maintaining 
                high accuracy for clinical deployment scenarios.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Model Compression</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Knowledge distillation from teacher models</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Pruning of redundant network connections</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Quantization to 8-bit precision</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Dynamic inference optimization</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Hardware Acceleration</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>CUDA kernel optimization for GPU inference</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>TensorRT integration for NVIDIA GPUs</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>OpenVINO support for Intel hardware</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Mobile deployment with Core ML/TensorFlow Lite</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">Inference Time</span>
                      <span className="text-blue-600 font-bold">1.2s</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">Model Size</span>
                      <span className="text-green-600 font-bold">45MB</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">Memory Usage</span>
                      <span className="text-purple-600 font-bold">2.1GB</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">Throughput</span>
                      <span className="text-orange-600 font-bold">50 img/s</span>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Deployment Options</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Cloud-based API services</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Edge computing devices</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Mobile applications</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Embedded systems integration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Methodology</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technical approach combining advanced deep learning architectures 
            with optimized preprocessing and training strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 sticky top-4">
              <h3 className="font-semibold text-gray-900 mb-4">Technical Sections</h3>
              <nav className="space-y-2">
                {sections.map(({ id, title, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveSection(id)}
                    className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeSection === id
                        ? 'bg-blue-600 text-white font-medium shadow-lg'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
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
      </div>
    </div>
  );
};