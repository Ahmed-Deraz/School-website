import React, { useEffect, useState } from 'react';
import './NewEventDialog.css'; // Keep your styles here
import {assets} from '../../../src/assets/assets';

const NewEventDialog = () => {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDialog(true);
    }, 500); // Show dialog after 500ms

    return () => clearTimeout(timer);
  }, []);

  // Auto-close after 7 seconds
  useEffect(() => {
    if (showDialog) {
      const autoCloseTimer = setTimeout(() => {
        setShowDialog(false);
      }, 30000); // Auto-close after 7 seconds
      return () => clearTimeout(autoCloseTimer);
    }
  }, [showDialog]);

  const handleClose = () => setShowDialog(false);

  const handleSeeMore = () => {
    window.location.href = "/events";
  };

  if (!showDialog) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-box animate-popup">
        <img src={assets.EventBanner} alt="Event Banner" className="dialog-banner" />
        <h2 className="dialog-title">🎉 New Event Alert!</h2>
        <p className="dialog-content">
          Our <strong>Science Fair</strong> took place last Saturday — packed with fun, innovation, and hands-on learning! 
        </p>
        <div className="dialog-actions">
          <button onClick={handleClose} className="btn btn-close">Close</button>
          <button onClick={handleSeeMore} className="btn btn-primary">See More</button>
        </div>
      </div>
    </div>
  );
};

export default NewEventDialog;