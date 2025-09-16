import React from 'react';
import './EventDetails.css';
import { assets } from '../../../src/assets/assets'; // adjust path as needed
import { useNavigate } from 'react-router-dom'; // React Router for navigation


const EventDetails = () => {
  const navigate = useNavigate();

  const galleryImages = [
    assets.NewEventPhoto,
    assets.NewEventPhoto,
    assets.NewEventPhoto,
    assets.NewEventPhoto,
    // Add more images if available
  ];

  return (
    <div className="event-details-container">
      <button
        className="close-button"
        onClick={() => navigate('/')}
        aria-label="Close event details"
      >
       <span style={{ fontSize: '1.5rem' }}>✖</span>
      </button>

      <h1 className="event-title">Science Fair Event</h1>

      <p className="event-description">
        Our <strong>Science Fair</strong> last Saturday was a huge success! Students showcased innovative experiments, creative models, and interactive demonstrations. It was an inspiring day full of curiosity and collaboration.
      </p>

      <h2 className="section-heading">Event Recap Video</h2>
      <div className="event-video">
        <video controls width="100%">
          <source src={assets.NewEventVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h2 className="section-heading">Photo Gallery</h2>
      <div className="event-gallery">
        {galleryImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
};

export default EventDetails;