import React, { useState, useCallback } from 'react';
import { Upload, X, Loader, Eye, Download, Share2 } from 'lucide-react';
import { AnalysisResults } from './AnalysisResults';

interface AnalysisResult {
  prediction: string;
  confidence: number;
  species?: string;
  stage?: string;
  risk: 'low' | 'medium' | 'high';
  recommendations: string[];
}

export const ImageAnalyzer: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [selectedModel, setSelectedModel] = useState('hybrid');

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
    
    // Simulate API call with realistic delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Simulate different results based on random factors
    const mockResults: AnalysisResult[] = [
      {
        prediction: 'Positive',
        confidence: 94.2,
        species: 'Plasmodium falciparum',
        stage: 'Trophozoite',
        risk: 'high',
        recommendations: [
          'Immediate clinical consultation required',
          'Consider antimalarial treatment',
          'Monitor patient for severe malaria symptoms',
          'Repeat test in 24-48 hours if symptoms persist'
        ]
      },
      {
        prediction: 'Negative',
        confidence: 97.8,
        risk: 'low',
        recommendations: [
          'No malaria parasites detected',
          'Continue monitoring if symptoms present',
          'Consider other differential diagnoses',
          'Repeat test if clinical suspicion remains high'
        ]
      },
      {
        prediction: 'Positive',
        confidence: 89.7,
        species: 'Plasmodium vivax',
        stage: 'Ring form',
        risk: 'medium',
        recommendations: [
          'Confirm with additional testing',
          'Consult infectious disease specialist',
          'Consider G6PD testing before primaquine',
          'Monitor for relapse prevention'
        ]
      }
    ];

    const result = mockResults[Math.floor(Math.random() * mockResults.length)];
    setAnalysisResult(result);
    setIsAnalyzing(false);
  }, [selectedImage]);

  const clearImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    setAnalysisResult(null);
  };

  const models = [
    { id: 'hybrid', name: 'Hybrid CNN-RNN', accuracy: '98.7%' },
    { id: 'resnet', name: 'ResNet Transfer Learning', accuracy: '97.3%' },
    { id: 'custom', name: 'Custom CNN', accuracy: '95.9%' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Image Analyzer</h2>
        <p className="text-gray-600">
          Upload microscopic blood smear images for AI-powered malaria detection
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Model Selection</h3>
            <div className="space-y-2">
              {models.map((model) => (
                <label key={model.id} className="flex items-center p-3 rounded-lg border cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="model"
                    value={model.id}
                    checked={selectedModel === model.id}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="mr-3"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{model.name}</p>
                    <p className="text-sm text-gray-600">Accuracy: {model.accuracy}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload Image</h3>
            
            {!imagePreview ? (
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => document.getElementById('file-input')?.click()}
              >
                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-lg font-medium text-gray-900 mb-2">
                  Upload Blood Smear Image
                </p>
                <p className="text-gray-600 mb-4">
                  Drag and drop your image here, or click to browse
                </p>
                <p className="text-sm text-gray-500">
                  Supports JPG, PNG, TIFF (Max 10MB)
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
                    className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={analyzeImage}
                    disabled={isAnalyzing}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader className="h-4 w-4 animate-spin" />
                        <span>Analyzing...</span>
                      </>
                    ) : (
                      <>
                        <Eye className="h-4 w-4" />
                        <span>Analyze Image</span>
                      </>
                    )}
                  </button>
                  
                  {analysisResult && (
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                        <Download className="h-4 w-4" />
                      </button>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          {isAnalyzing && (
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-center py-8">
                <Loader className="mx-auto h-12 w-12 text-blue-600 animate-spin mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Analyzing Image...
                </h3>
                <p className="text-gray-600">
                  Processing with {models.find(m => m.id === selectedModel)?.name}
                </p>
                <div className="mt-4 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          )}
          
          {analysisResult && !isAnalyzing && (
            <AnalysisResults result={analysisResult} modelName={models.find(m => m.id === selectedModel)?.name || ''} />
          )}
        </div>
      </div>
    </div>
  );
};