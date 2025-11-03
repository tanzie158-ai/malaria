import React, { useState, useCallback } from 'react';
import { Upload, X, Loader, Eye, Download, Share2, Play, Pause, RotateCcw } from 'lucide-react';

interface AnalysisResult {
  prediction: string;
  confidence: number;
  species?: string;
  stage?: string;
  risk: 'low' | 'medium' | 'high';
  recommendations: string[];
  processingTime: number;
}

export const Demo: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [selectedModel, setSelectedModel] = useState('hybrid');
  const [isPlaying, setIsPlaying] = useState(false);

  const handleImageUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      setAnalysisResult(null);
    }
  }, []);

  const handleDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
  }, []);

  const handleDrop = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      setAnalysisResult(null);
    }
  }, []);

  const analyzeImage = useCallback(async () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);
    const startTime = Date.now();
    
    // Simulate realistic processing time based on model
    const processingTimes = {
      hybrid: 1200,
      resnet: 800,
      custom: 1500
    };
    
    await new Promise(resolve => setTimeout(resolve, processingTimes[selectedModel as keyof typeof processingTimes]));
    
    const processingTime = (Date.now() - startTime) / 1000;
    
    // Simulate different results based on model and random factors
    const mockResults: AnalysisResult[] = [
      {
        prediction: 'Positive',
        confidence: 98.7,
        species: 'Plasmodium falciparum',
        stage: 'Trophozoite',
        risk: 'high',
        recommendations: [
          'Immediate clinical consultation required',
          'Consider antimalarial treatment (Artemisinin-based)',
          'Monitor for severe malaria complications',
          'Repeat test in 24-48 hours to assess treatment response'
        ],
        processingTime
      },
      {
        prediction: 'Negative',
        confidence: 99.2,
        risk: 'low',
        recommendations: [
          'No malaria parasites detected in current sample',
          'Continue clinical monitoring if symptoms persist',
          'Consider other differential diagnoses for fever',
          'Repeat test if clinical suspicion remains high'
        ],
        processingTime
      },
      {
        prediction: 'Positive',
        confidence: 94.3,
        species: 'Plasmodium vivax',
        stage: 'Ring form',
        risk: 'medium',
        recommendations: [
          'Confirm diagnosis with additional testing',
          'Consult infectious disease specialist',
          'G6PD testing recommended before primaquine',
          'Monitor for relapse prevention strategies'
        ],
        processingTime
      }
    ];

    const result = mockResults[Math.floor(Math.random() * mockResults.length)];
    setAnalysisResult(result);
    setIsAnalyzing(false);
  }, [selectedImage, selectedModel]);

  const clearImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    setAnalysisResult(null);
  };

  const models = [
    { id: 'hybrid', name: 'Hybrid CNN-RNN', accuracy: '98.7%', description: 'Our novel architecture combining spatial and temporal features' },
    { id: 'resnet', name: 'ResNet-50 Transfer', accuracy: '97.3%', description: 'Fine-tuned ResNet-50 with attention mechanisms' },
    { id: 'custom', name: 'Custom CNN', accuracy: '95.9%', description: 'Purpose-built CNN for malaria detection' },
  ];

  const sampleImages = [
    {
      name: 'P. falciparum Sample',
      url: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'High-quality blood smear with visible trophozoites'
    },
    {
      name: 'Normal Blood Smear',
      url: 'https://images.pexels.com/photos/8488725/pexels-photo-8488725.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Negative control sample with healthy erythrocytes'
    },
    {
      name: 'P. vivax Sample',
      url: 'https://images.pexels.com/photos/6303762/pexels-photo-6303762.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Blood smear showing P. vivax ring forms'
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Interactive Demo</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience our hybrid deep learning framework for malaria detection. Upload your own 
            microscopic blood smear images or try our sample images to see the AI in action.
          </p>
        </div>

        {/* Demo Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Panel - Upload and Controls */}
          <div className="space-y-6">
            {/* Model Selection */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Select AI Model</h3>
              <div className="space-y-3">
                {models.map((model) => (
                  <label key={model.id} className="flex items-start p-4 rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="model"
                      value={model.id}
                      checked={selectedModel === model.id}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      className="mt-1 mr-3"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium text-gray-900">{model.name}</p>
                        <span className="text-sm font-semibold text-blue-600">{model.accuracy}</span>
                      </div>
                      <p className="text-sm text-gray-600">{model.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Image Upload */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload Blood Smear Image</h3>
              
              {!imagePreview ? (
                <div
                  className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById('file-input')?.click()}
                >
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-lg font-medium text-gray-900 mb-2">
                    Upload Microscopic Image
                  </p>
                  <p className="text-gray-600 mb-4">
                    Drag and drop your image here, or click to browse
                  </p>
                  <p className="text-sm text-gray-500">
                    Supports JPG, PNG, TIFF (Max 10MB) • 1000x magnification recommended
                  </p>
                  <input
                    id="file-input"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative">
                    <img
                      src={imagePreview}
                      alt="Blood smear preview"
                      className="w-full h-64 object-cover rounded-lg border"
                    />
                    <button
                      onClick={clearImage}
                      className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={analyzeImage}
                      disabled={isAnalyzing}
                      className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader className="h-5 w-5 animate-spin" />
                          <span>Analyzing...</span>
                        </>
                      ) : (
                        <>
                          <Eye className="h-5 w-5" />
                          <span>Analyze Image</span>
                        </>
                      )}
                    </button>
                    
                    {analysisResult && (
                      <div className="flex space-x-2">
                        <button className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                          <Download className="h-5 w-5" />
                        </button>
                        <button className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                          <Share2 className="h-5 w-5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Sample Images */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Try Sample Images</h3>
              <div className="grid grid-cols-1 gap-3">
                {sampleImages.map((sample, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setImagePreview(sample.url);
                      setSelectedImage(new File([], sample.name));
                      setAnalysisResult(null);
                    }}
                    className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-left"
                  >
                    <img
                      src={sample.url}
                      alt={sample.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{sample.name}</p>
                      <p className="text-sm text-gray-600">{sample.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Results */}
          <div>
            {isAnalyzing && (
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="text-center">
                  <Loader className="mx-auto h-16 w-16 text-blue-600 animate-spin mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    AI Analysis in Progress
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Processing with {models.find(m => m.id === selectedModel)?.name}
                  </p>
                  <div className="bg-gray-200 rounded-full h-3 mb-4">
                    <div className="bg-blue-600 h-3 rounded-full animate-pulse" style={{ width: '75%' }}></div>
                  </div>
                  <div className="text-sm text-gray-500 space-y-1">
                    <p>✓ Image preprocessing complete</p>
                    <p>✓ Feature extraction in progress</p>
                    <p>⏳ Running inference...</p>
                  </div>
                </div>
              </div>
            )}
            
            {analysisResult && !isAnalyzing && (
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900">Analysis Results</h3>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Processing Time</div>
                    <div className="font-semibold text-blue-600">{analysisResult.processingTime.toFixed(1)}s</div>
                  </div>
                </div>
                
                {/* Primary Result */}
                <div className="mb-6 p-6 rounded-lg bg-gray-50 border">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {analysisResult.prediction === 'Positive' ? (
                        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      ) : (
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      )}
                      <h4 className="text-xl font-bold text-gray-900">
                        {analysisResult.prediction}
                      </h4>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        {analysisResult.confidence}%
                      </div>
                      <div className="text-sm text-gray-600">Confidence</div>
                    </div>
                  </div>
                  
                  {analysisResult.species && (
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-600">Species</div>
                        <div className="font-medium text-gray-900">{analysisResult.species}</div>
                      </div>
                      {analysisResult.stage && (
                        <div>
                          <div className="text-sm text-gray-600">Stage</div>
                          <div className="font-medium text-gray-900">{analysisResult.stage}</div>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    analysisResult.risk === 'high' ? 'bg-red-100 text-red-800' :
                    analysisResult.risk === 'medium' ? 'bg-orange-100 text-orange-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {analysisResult.risk.charAt(0).toUpperCase() + analysisResult.risk.slice(1)} Risk
                  </div>
                </div>

                {/* Recommendations */}
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-3">Clinical Recommendations</h5>
                  <ul className="space-y-2">
                    {analysisResult.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                        <span className="text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Disclaimer */}
                <div className="p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                  <p className="text-sm text-yellow-800">
                    <strong>Research Demo:</strong> This is a demonstration of our AI model for research purposes. 
                    Results should not be used for actual clinical diagnosis. Always consult qualified 
                    medical professionals and confirm with laboratory testing.
                  </p>
                </div>
              </div>
            )}

            {!isAnalyzing && !analysisResult && (
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 text-center">
                <div className="text-gray-400 mb-4">
                  <Eye className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready for Analysis</h3>
                <p className="text-gray-600">
                  Upload a microscopic blood smear image or select a sample to begin AI-powered malaria detection.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Technical Details */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Image Preprocessing</h4>
              <p className="text-sm text-gray-600">
                Automated quality assessment, normalization, and enhancement of microscopic images
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Feature Extraction</h4>
              <p className="text-sm text-gray-600">
                CNN layers identify spatial patterns and parasite-specific morphological features
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Sequence Analysis</h4>
              <p className="text-sm text-gray-600">
                RNN processes temporal context and relationships between detected features
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Classification</h4>
              <p className="text-sm text-gray-600">
                Final prediction with confidence scores and species identification
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};