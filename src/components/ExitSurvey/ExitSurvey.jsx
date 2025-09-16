import { useEffect, useState } from "react";
import "./ExitSurvey.css";

const ExitSurvey = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    easeOfNavigation: "",
    contentInformative: "",
    designAppeal: "",
    technicalIssues: "",
  });

  useEffect(() => {
    const isShown = localStorage.getItem("exitSurveyShown");

    if (!isShown) {
      const timer = setTimeout(() => {
        setShow(true);
        localStorage.setItem("exitSurveyShown", "true");
      }, 120000); // ⏱ 2 minutes = 120,000ms

      return () => clearTimeout(timer); // cleanup on unmount
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    formPayload.append("entry.648860555", formData.easeOfNavigation);
    formPayload.append("entry.1004365490", formData.contentInformative);
    formPayload.append("entry.1176015488", formData.designAppeal);
    formPayload.append("entry.1965053255", formData.technicalIssues);

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSekUTMezH3oNtPtQR0b0bkojGX0te9sIU23UsWWIqIsVWi31A/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: formPayload,
      }
    );

    setShow(false);
    alert("Thanks for your feedback!");
  };

  const handleClose = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="exit-survey-overlay">
      <div className="exit-survey-popup">
        <button className="exit-survey-close" onClick={handleClose}>
          Skip
        </button>
        <h3>Before You Go...</h3>
        <p>We’d love your feedback!</p>
        <form onSubmit={handleSubmit} className="exit-survey-form">
          {/* Questions */}
          <div className="survey-question">
            <label>How easy was it to navigate the website?</label>
            <div className="radio-group">
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value}>
                  <input
                    type="radio"
                    name="easeOfNavigation"
                    value={value}
                    onChange={handleChange}
                    required
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>

          <div className="survey-question">
            <label>How informative was the content on the website?</label>
            <div className="radio-group">
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value}>
                  <input
                    type="radio"
                    name="contentInformative"
                    value={value}
                    onChange={handleChange}
                    required
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>

          <div className="survey-question">
            <label>How visually appealing do you find the website design?</label>
            <div className="radio-group">
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value}>
                  <input
                    type="radio"
                    name="designAppeal"
                    value={value}
                    onChange={handleChange}
                    required
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>

          <div className="survey-question">
            <label>Did you encounter any technical issues while using the website?</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="technicalIssues"
                  value="Yes"
                  onChange={handleChange}
                  required
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="technicalIssues"
                  value="No"
                  onChange={handleChange}
                  required
                />
                No
              </label>
            </div>
          </div>

          <button type="submit" className="exit-survey-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExitSurvey;
