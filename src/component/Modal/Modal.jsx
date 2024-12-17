import React, { useState, useEffect, useCallback } from 'react';
import './Modal.css';

const Modal = ({ 
  isOpen, 
  onClose, 
  children, 
  title, 
  showCloseIcon = true,
  animation = 'fade',
  theme = 'light',
  aiFeature = null
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [localTheme, setLocalTheme] = useState(theme);

  useEffect(() => {
    setLocalTheme(theme);
  }, [theme]);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, handleClose]);

  if (!isOpen && !isClosing) return null;

  return (
    <div className={`modal-overlay ${animation} ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
      <div 
        className={`modal ${localTheme} ${animation} ${isClosing ? 'closing' : ''}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>{title}</h2>
          {showCloseIcon && (
            <button className="close-button" onClick={handleClose}>
              ×
            </button>
          )}
        </div>
        <div className="modal-content">
          {children}
          {aiFeature && (
            <div className="ai-feature">
              <h3>AI Feature: {aiFeature.name}</h3>
              <p>{aiFeature.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;