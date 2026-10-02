import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const maxLength = 60;

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <div className="App">
      {showSuccess ? (
        <h1 className="message-success">Thanks for the update!</h1>
      ) : (
        <div className="status-update">
          <h1>Super Short Status!</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="status">
              Tell us how you are doing in 60 characters or less!
            </label>
            <textarea
              id="status"
              className={message.length > maxLength ? "too-long" : ""}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="I'm crushing it!"
            />
            <button
              type="submit"
              disabled={message.length < 1 || message.length > maxLength}
            >
              Tell the world!
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
