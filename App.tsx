import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Research } from './components/Research';
import { Methodology } from './components/Methodology';
import { Results } from './components/Results';
import { Publications } from './components/Publications';
import { Demo } from './components/Demo';
import { Team } from './components/Team';
import { Footer } from './components/Footer';

export type TabType = 'home' | 'research' | 'methodology' | 'results' | 'publications' | 'demo' | 'team';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <Hero />;
      case 'research':
        return <Research />;
      case 'methodology':
        return <Methodology />;
      case 'results':
        return <Results />;
      case 'publications':
        return <Publications />;
      case 'demo':
        return <Demo />;
      case 'team':
        return <Team />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {renderActiveTab()}
      </main>
      <Footer />
    </div>
  );
}

export default App;