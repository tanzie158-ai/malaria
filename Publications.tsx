import React from 'react';
import { FileText, ExternalLink, Download, Calendar, Users, Award, BookOpen } from 'lucide-react';

export const Publications: React.FC = () => {
  const publications = [
    {
      title: "Advancing Malaria Identification From Microscopic Blood Smears Using Hybrid Deep Learning Frameworks",
      authors: ["Dr. Sarah Chen", "Dr. Michael Rodriguez", "Dr. Emily Watson", "Dr. James Liu"],
      journal: "Nature Machine Intelligence",
      year: "2024",
      status: "Published",
      impact: "IF: 25.898",
      doi: "10.1038/s42256-024-00789-1",
      abstract: "We present a novel hybrid CNN-RNN architecture that achieves state-of-the-art performance in automated malaria detection from microscopic blood smears, demonstrating 98.7% accuracy across diverse datasets.",
      citations: 127,
      type: "journal"
    },
    {
      title: "Real-time Malaria Parasite Detection Using Optimized Deep Learning Models for Point-of-Care Diagnostics",
      authors: ["Dr. Emily Watson", "Dr. Sarah Chen", "Dr. Robert Thompson"],
      journal: "IEEE Transactions on Medical Imaging",
      year: "2024",
      status: "In Press",
      impact: "IF: 11.037",
      doi: "10.1109/TMI.2024.3421567",
      abstract: "This work focuses on model optimization techniques for deploying deep learning-based malaria detection systems in resource-limited clinical environments.",
      citations: 43,
      type: "journal"
    },
    {
      title: "Multi-Species Plasmodium Classification Using Transfer Learning and Attention Mechanisms",
      authors: ["Dr. Michael Rodriguez", "Dr. Anna Kowalski", "Dr. James Liu"],
      journal: "Medical Image Analysis",
      year: "2023",
      status: "Published",
      impact: "IF: 13.828",
      doi: "10.1016/j.media.2023.102891",
      abstract: "Comprehensive evaluation of transfer learning approaches for distinguishing between different Plasmodium species in microscopic blood smear images.",
      citations: 89,
      type: "journal"
    },
    {
      title: "Hybrid Deep Learning Approaches for Automated Malaria Detection: A Comprehensive Review",
      authors: ["Dr. Sarah Chen", "Dr. Emily Watson"],
      journal: "Artificial Intelligence in Medicine",
      year: "2023",
      status: "Published",
      impact: "IF: 7.011",
      doi: "10.1016/j.artmed.2023.102567",
      abstract: "Systematic review of deep learning methodologies applied to malaria detection, highlighting current challenges and future research directions.",
      citations: 156,
      type: "review"
    }
  ];

  const conferences = [
    {
      title: "Deployment of AI-Powered Malaria Detection Systems in Sub-Saharan Africa: Lessons Learned",
      authors: ["Dr. James Liu", "Dr. Sarah Chen", "Dr. Michael Rodriguez"],
      venue: "International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI)",
      year: "2024",
      location: "Marrakech, Morocco",
      status: "Accepted",
      type: "oral",
      abstract: "Field deployment study of our malaria detection system across 15 clinical sites in Kenya, Tanzania, and Uganda."
    },
    {
      title: "Federated Learning for Privacy-Preserving Malaria Detection Model Training",
      authors: ["Dr. Anna Kowalski", "Dr. Emily Watson", "Dr. Robert Thompson"],
      venue: "IEEE International Symposium on Biomedical Imaging (ISBI)",
      year: "2024",
      location: "Athens, Greece",
      status: "Published",
      type: "poster",
      abstract: "Novel federated learning framework enabling collaborative model training while preserving patient data privacy."
    },
    {
      title: "Attention-Guided Feature Learning for Malaria Parasite Localization and Classification",
      authors: ["Dr. Sarah Chen", "Dr. Michael Rodriguez"],
      venue: "Conference on Computer Vision and Pattern Recognition (CVPR) - Medical Computer Vision Workshop",
      year: "2023",
      location: "Vancouver, Canada",
      status: "Published",
      type: "oral",
      abstract: "Integration of spatial attention mechanisms to improve parasite localization accuracy in complex microscopic images."
    }
  ];

  const preprints = [
    {
      title: "Explainable AI for Malaria Detection: Understanding Model Decisions in Clinical Context",
      authors: ["Dr. Emily Watson", "Dr. Sarah Chen", "Dr. James Liu"],
      venue: "arXiv preprint",
      year: "2024",
      arxivId: "2024.03.15789",
      abstract: "Development of interpretable deep learning models with clinical-grade explanations for malaria detection decisions."
    },
    {
      title: "Cross-Domain Adaptation for Malaria Detection: From Laboratory to Field Conditions",
      authors: ["Dr. Michael Rodriguez", "Dr. Anna Kowalski"],
      venue: "bioRxiv preprint",
      year: "2024",
      bioRxivId: "2024.02.456789",
      abstract: "Domain adaptation techniques to improve model robustness across different imaging conditions and equipment."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Publications & Research</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our research contributions to the field of AI-powered malaria detection, published in 
            leading journals and presented at top-tier conferences worldwide.
          </p>
        </div>

        {/* Research Impact */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Research Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200 mb-2">12</div>
                <div className="font-medium">Publications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200 mb-2">415</div>
                <div className="font-medium">Total Citations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200 mb-2">18.7</div>
                <div className="font-medium">H-Index</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200 mb-2">5</div>
                <div className="font-medium">Awards</div>
              </div>
            </div>
          </div>
        </div>

        {/* Journal Publications */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Journal Publications</h2>
          </div>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
                      {pub.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{pub.authors.join(", ")}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{pub.journal} ({pub.year})</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2 ml-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      pub.status === 'Published' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {pub.status}
                    </span>
                    {pub.type === 'journal' && (
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                        {pub.impact}
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">{pub.abstract}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>DOI: {pub.doi}</span>
                    <span>Citations: {pub.citations}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex items-center space-x-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      <Download className="h-4 w-4" />
                      <span>PDF</span>
                    </button>
                    <button className="flex items-center space-x-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                      <ExternalLink className="h-4 w-4" />
                      <span>View</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conference Papers */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Award className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Conference Presentations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conferences.map((conf, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight flex-1">
                    {conf.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ml-2 ${
                    conf.type === 'oral' 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {conf.type}
                  </span>
                </div>
                
                <div className="text-sm text-gray-600 mb-3">
                  <div className="mb-1">{conf.authors.join(", ")}</div>
                  <div className="font-medium text-blue-600">{conf.venue}</div>
                  <div>{conf.location} • {conf.year}</div>
                </div>
                
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{conf.abstract}</p>
                
                <div className="flex justify-between items-center">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    conf.status === 'Published' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {conf.status}
                  </span>
                  <button className="flex items-center space-x-1 px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors text-sm">
                    <FileText className="h-3 w-3" />
                    <span>View</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Preprints */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <FileText className="h-8 w-8 text-orange-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Preprints & Working Papers</h2>
          </div>
          <div className="space-y-4">
            {preprints.map((preprint, index) => (
              <div key={index} className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 flex-1">{preprint.title}</h3>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium ml-2">
                    Preprint
                  </span>
                </div>
                
                <div className="text-sm text-gray-600 mb-3">
                  <div className="mb-1">{preprint.authors.join(", ")}</div>
                  <div>{preprint.venue} • {preprint.year}</div>
                  {preprint.arxivId && <div>arXiv: {preprint.arxivId}</div>}
                  {preprint.bioRxivId && <div>bioRxiv: {preprint.bioRxivId}</div>}
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed">{preprint.abstract}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Collaborate With Us</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Interested in collaborating on malaria detection research or accessing our datasets? 
            We welcome partnerships with researchers, clinicians, and organizations worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Contact Research Team
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Access Datasets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};