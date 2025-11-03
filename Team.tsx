import React from 'react';
import { Mail, Linkedin, Github, ExternalLink, Award, GraduationCap, MapPin } from 'lucide-react';

export const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Principal Investigator",
      title: "Professor of Computer Science & Biomedical Engineering",
      institution: "Stanford University",
      location: "Stanford, CA",
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Dr. Chen leads the AI for Global Health lab with expertise in deep learning applications for medical imaging. Her work focuses on developing accessible diagnostic tools for resource-limited settings.",
      expertise: ["Deep Learning", "Medical Imaging", "Global Health AI", "Computer Vision"],
      education: "PhD Computer Science, MIT • MS Biomedical Engineering, Johns Hopkins",
      publications: 47,
      citations: 2847,
      awards: ["NSF CAREER Award", "IEEE Fellow", "MIT Technology Review Innovator Under 35"],
      email: "sarah.chen@stanford.edu",
      linkedin: "sarah-chen-ai",
      github: "sarahchen-ai"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Co-Principal Investigator",
      title: "Associate Professor of Electrical Engineering",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Dr. Rodriguez specializes in neural network architectures and optimization techniques. He leads the development of efficient AI models for deployment in clinical environments.",
      expertise: ["Neural Architecture Search", "Model Optimization", "Edge Computing", "Signal Processing"],
      education: "PhD Electrical Engineering, Caltech • MS Computer Science, Carnegie Mellon",
      publications: 38,
      citations: 1923,
      awards: ["IEEE Signal Processing Society Award", "Google Faculty Research Award"],
      email: "m.rodriguez@berkeley.edu",
      linkedin: "michael-rodriguez-ee",
      github: "mrodriguez-ee"
    },
    {
      name: "Dr. Emily Watson",
      role: "Senior Research Scientist",
      title: "Research Scientist, Medical AI Division",
      institution: "Google DeepMind",
      location: "London, UK",
      image: "https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Dr. Watson brings extensive experience in clinical AI deployment and validation. She leads the clinical translation efforts and oversees field studies in endemic regions.",
      expertise: ["Clinical AI", "Healthcare Systems", "Federated Learning", "Medical Validation"],
      education: "PhD Biomedical Informatics, Harvard • MD, Oxford University",
      publications: 29,
      citations: 1456,
      awards: ["Royal Society Research Fellowship", "Wellcome Trust Career Award"],
      email: "emily.watson@deepmind.com",
      linkedin: "emily-watson-md",
      github: "ewatson-ai"
    },
    {
      name: "Dr. James Liu",
      role: "Research Scientist",
      title: "Assistant Professor of Biostatistics",
      institution: "Johns Hopkins University",
      location: "Baltimore, MD",
      image: "https://images.pexels.com/photos/5212372/pexels-photo-5212372.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Dr. Liu focuses on statistical validation and clinical trial design for AI diagnostic tools. He ensures rigorous evaluation of model performance across diverse populations.",
      expertise: ["Biostatistics", "Clinical Trials", "Epidemiology", "Data Science"],
      education: "PhD Biostatistics, Harvard • MS Statistics, University of Washington",
      publications: 31,
      citations: 1247,
      awards: ["ASA Outstanding Statistical Application Award", "NIH Early Career Investigator"],
      email: "james.liu@jhu.edu",
      linkedin: "james-liu-stats",
      github: "jliu-stats"
    },
    {
      name: "Dr. Anna Kowalski",
      role: "Postdoctoral Researcher",
      title: "Postdoctoral Fellow",
      institution: "Stanford University",
      location: "Stanford, CA",
      image: "https://images.pexels.com/photos/5212383/pexels-photo-5212383.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Dr. Kowalski specializes in transfer learning and domain adaptation for medical imaging. She develops techniques to improve model generalization across different imaging conditions.",
      expertise: ["Transfer Learning", "Domain Adaptation", "Few-shot Learning", "Meta-learning"],
      education: "PhD Machine Learning, ETH Zurich • MS Computer Science, Technical University of Munich",
      publications: 18,
      citations: 743,
      awards: ["Google PhD Fellowship", "European Research Council Starting Grant"],
      email: "anna.kowalski@stanford.edu",
      linkedin: "anna-kowalski-ml",
      github: "akowalski-ml"
    },
    {
      name: "Dr. Robert Thompson",
      role: "Clinical Collaborator",
      title: "Professor of Infectious Diseases",
      institution: "London School of Hygiene & Tropical Medicine",
      location: "London, UK",
      image: "https://images.pexels.com/photos/5212394/pexels-photo-5212394.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Dr. Thompson provides clinical expertise and oversees field validation studies. With 20+ years of experience in malaria research, he ensures clinical relevance and practical applicability.",
      expertise: ["Malaria Diagnosis", "Tropical Medicine", "Field Studies", "Clinical Validation"],
      education: "MD, University of Cambridge • PhD Parasitology, Oxford University",
      publications: 156,
      citations: 8934,
      awards: ["Royal College of Physicians Gold Medal", "WHO Excellence in Malaria Research"],
      email: "robert.thompson@lshtm.ac.uk",
      linkedin: "robert-thompson-md",
      github: "rthompson-clinical"
    }
  ];

  const collaborators = [
    {
      institution: "World Health Organization",
      role: "Global Health Partnership",
      description: "Collaboration on deployment guidelines and global health impact assessment"
    },
    {
      institution: "Médecins Sans Frontières",
      role: "Field Validation Partner",
      description: "Real-world testing in clinical settings across sub-Saharan Africa"
    },
    {
      institution: "Bill & Melinda Gates Foundation",
      role: "Funding Partner",
      description: "Supporting research and development of accessible diagnostic tools"
    },
    {
      institution: "PATH",
      role: "Implementation Partner",
      description: "Technology transfer and scaling for global health impact"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Research Team</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our interdisciplinary team combines expertise in artificial intelligence, medical imaging, 
            clinical medicine, and global health to advance malaria detection technology.
          </p>
        </div>

        {/* Team Members */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Core Research Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {member.role}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-1">{member.title}</p>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{member.institution}</span>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Expertise</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <GraduationCap className="h-4 w-4 mr-1" />
                      <span className="font-medium">Education</span>
                    </div>
                    <p className="text-xs text-gray-600">{member.education}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-bold text-blue-600">{member.publications}</div>
                      <div className="text-xs text-gray-600">Publications</div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-bold text-green-600">{member.citations.toLocaleString()}</div>
                      <div className="text-xs text-gray-600">Citations</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Recent Awards</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {member.awards.slice(0, 2).map((award, awardIndex) => (
                        <li key={awardIndex} className="flex items-start">
                          <Award className="h-3 w-3 mr-1 mt-0.5 text-yellow-500 flex-shrink-0" />
                          <span>{award}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-2">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-center hover:bg-blue-700 transition-colors text-sm"
                    >
                      <Mail className="h-4 w-4 inline mr-1" />
                      Contact
                    </a>
                    <a
                      href={`https://linkedin.com/in/${member.linkedin}`}
                      className="p-2 bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={`https://github.com/${member.github}`}
                      className="p-2 bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Collaborators */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Collaborators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collaborators.map((collab, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{collab.institution}</h3>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    {collab.role}
                  </span>
                </div>
                <p className="text-gray-700 text-sm">{collab.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We're always looking for talented researchers, clinicians, and engineers passionate about 
            using AI to address global health challenges. Join us in making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Open Positions
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Collaboration Opportunities
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};