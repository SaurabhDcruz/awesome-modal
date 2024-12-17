import React, { useState } from 'react';
import Modal from './component/Modal/Modal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTheme, setModalTheme] = useState('light');
  const [modalAnimation, setModalAnimation] = useState('fade');
  const [modalTitle, setModalTitle] = useState('AI Modal');
  const [showCloseIcon, setShowCloseIcon] = useState(true);
  const [aiFeature, setAiFeature] = useState(null);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const animations = ['fade', 'slide', 'zoom', 'rotate', 'bounce', 'flip', 'swing', 'expand', 'shake'];

  const aiFeatures = [
    { name: 'Natural Language Processing', description: 'Understand and generate human-like text.' },
    { name: 'Image Recognition', description: 'Identify objects, people, and scenes in images.' },
    { name: 'Speech Recognition', description: 'Convert spoken language into written text.' },
    { name: 'Sentiment Analysis', description: 'Determine the emotional tone behind text.' },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>AI Modal Demo</h1>
      <button onClick={toggleModal} style={{ fontSize: '16px', padding: '10px 20px', marginBottom: '20px' }}>Open Modal</button>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
        <label>
          Theme:
          <select value={modalTheme} onChange={(e) => setModalTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
        <label>
          Animation:
          <select value={modalAnimation} onChange={(e) => setModalAnimation(e.target.value)}>
            {animations.map(anim => (
              <option key={anim} value={anim}>{anim}</option>
            ))}
          </select>
        </label>
        <label>
          Title:
          <input 
            type="text" 
            value={modalTitle} 
            onChange={(e) => setModalTitle(e.target.value)}
          />
        </label>
        <label>
          Show Close Icon:
          <input 
            type="checkbox" 
            checked={showCloseIcon} 
            onChange={(e) => setShowCloseIcon(e.target.checked)}
          />
        </label>
        <label>
          AI Feature:
          <select 
            value={aiFeature ? aiFeature.name : ''} 
            onChange={(e) => setAiFeature(aiFeatures.find(f => f.name === e.target.value) || null)}
          >
            <option value="">None</option>
            {aiFeatures.map(feature => (
              <option key={feature.name} value={feature.name}>{feature.name}</option>
            ))}
          </select>
        </label>
      </div>
      <Modal 
        isOpen={isModalOpen} 
        onClose={toggleModal}
        title={modalTitle}
        theme={modalTheme}
        animation={modalAnimation}
        showCloseIcon={showCloseIcon}
        aiFeature={aiFeature}
      >
        <p>This is a highly customizable AI Modal.</p>
        <p>It supports dynamic content updates, various animations, and theme switching.</p>
        <p>You can easily integrate AI features and customize its appearance.</p>
      </Modal>
    </div>
  );
};

export default App;