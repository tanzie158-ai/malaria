import React, { useState } from 'react';
import { Eye, Download, Calendar, User, Activity } from 'lucide-react';

interface SampleImage {
  id: string;
  url: string;
  title: string;
  result: string;
  confidence: number;
  species?: string;
  magnification: string;
  date: string;
  technician: string;
  description: string;
}

export const SampleGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const sampleImages: SampleImage[] = [
    {
      id: '001',
      url: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'P. falciparum Trophozoites',
      result: 'Positive',
      confidence: 96.8,
      species: 'Plasmodium falciparum',
      magnification: '1000x',
      date: '2024-01-15',
      technician: 'Dr. Sarah Chen',
      description: 'Multiple trophozoites visible in infected erythrocytes showing classic ring forms and some developing forms.'
    },
    {
      id: '002',
      url: 'https://images.pexels.com/photos/8488725/pexels-photo-8488725.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Normal Blood Smear',
      result: 'Negative',
      confidence: 99.2,
      magnification: '1000x',
      date: '2024-01-14',
      technician: 'Dr. Michael Rodriguez',
      description: 'Normal erythrocytes with no parasitic inclusions. Excellent quality preparation.'
    },
    {
      id: '003',
      url: 'https://images.pexels.com/photos/6303762/pexels-photo-6303762.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'P. vivax Ring Forms',
      result: 'Positive',
      confidence: 94.1,
      species: 'Plasmodium vivax',
      magnification: '1000x',
      date: '2024-01-13',
      technician: 'Dr. Emily Watson',
      description: 'Characteristic P. vivax ring forms with enlarged infected erythrocytes and Schüffner\'s dots.'
    },
    {
      id: '004',
      url: 'https://images.pexels.com/photos/8516698/pexels-photo-8516698.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Mixed Infection',
      result: 'Positive',
      confidence: 91.7,
      species: 'Mixed species',
      magnification: '1000x',
      date: '2024-01-12',
      technician: 'Dr. James Liu',
      description: 'Complex case showing evidence of mixed Plasmodium species infection.'
    },
    {
      id: '005',
      url: 'https://images.pexels.com/photos/5816302/pexels-photo-5816302.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'P. malariae Band Forms',
      result: 'Positive',
      confidence: 89.3,
      species: 'Plasmodium malariae',
      magnification: '1000x',
      date: '2024-01-11',
      technician: 'Dr. Anna Kowalski',
      description: 'Distinctive P. malariae band forms and rosette schizonts visible.'
    },
    {
      id: '006',
      url: 'https://images.pexels.com/photos/8516742/pexels-photo-8516742.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'High Parasitemia',
      result: 'Positive',
      confidence: 97.5,
      species: 'Plasmodium falciparum',
      magnification: '1000x',
      date: '2024-01-10',
      technician: 'Dr. Robert Thompson',
      description: 'Severe malaria case with very high parasitemia, multiple infected cells per field.'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Samples', count: sampleImages.length },
    { id: 'positive', label: 'Positive Cases', count: sampleImages.filter(img => img.result === 'Positive').length },
    { id: 'negative', label: 'Negative Cases', count: sampleImages.filter(img => img.result === 'Negative').length },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? sampleImages 
    : sampleImages.filter(img => 
        selectedCategory === 'positive' ? img.result === 'Positive' : img.result === 'Negative'
      );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Sample Gallery</h2>
        <p className="text-gray-600">
          Curated collection of analyzed blood smear images for reference and training
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {category.label} ({category.count})
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <div key={image.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  image.result === 'Positive' 
                    ? 'bg-red-100 text-red-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {image.result}
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{image.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{image.description}</p>
              
              <div className="space-y-2 mb-4">
                {image.species && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Activity className="h-4 w-4 mr-2" />
                    <span>{image.species}</span>
                  </div>
                )}
                <div className="flex items-center text-sm text-gray-600">
                  <User className="h-4 w-4 mr-2" />
                  <span>{image.technician}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{image.date} • {image.magnification}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Confidence</p>
                  <p className="font-semibold text-gray-900">{image.confidence}%</p>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};