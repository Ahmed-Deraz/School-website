import React, { useEffect, useState } from "react";
import "./NewEventDialog.css";
import { assets } from "../../../src/assets/assets";

const STORAGE_KEY = "newEventDialog.closedThisSession";

const NewEventDialog = () => {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    // If user already closed it this session, do NOT show again
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (dismissed) return;

    const timer = setTimeout(() => {
      setShowDialog(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Auto-close
  useEffect(() => {
    if (!showDialog) return;
    const t = setTimeout(() => setShowDialog(false), 30000);
    return () => clearTimeout(t);
  }, [showDialog]);

  const closeDialog = () => {
    sessionStorage.setItem(STORAGE_KEY, "true");  // Store per session
    setShowDialog(false);
  };

  const handleSeeMore = () => {
    sessionStorage.setItem(STORAGE_KEY, "true"); // Store per session
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
          <button onClick={closeDialog} className="btn btn-close">Close</button>
          <button onClick={handleSeeMore} className="btn btn-primary">See More</button>
        </div>
      </div>
    </div>
  );
};

export default NewEventDialog;
