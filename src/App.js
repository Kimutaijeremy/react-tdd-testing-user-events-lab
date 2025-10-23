import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState({
    technology: false,
    design: false,
    business: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  
  const handleInterestChange = (e) => {
    setInterests({
      ...interests,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedInterests = Object.keys(interests).filter(
    (interest) => interests[interest]
  );

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img src="https://via.placeholder.com/350" alt="My profile pic" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <h2>Newsletter Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label>Interests:</label>
          <div>
            <input
              type="checkbox"
              id="technology"
              name="technology"
              checked={interests.technology}
              onChange={handleInterestChange}
            />
            <label htmlFor="technology">Technology</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="design"
              name="design"
              checked={interests.design}
              onChange={handleInterestChange}
            />
            <label htmlFor="design">Design</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="business"
              name="business"
              checked={interests.business}
              onChange={handleInterestChange}
            />
            <label htmlFor="business">Business</label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <p>Thank you for signing up, {name}!</p>
          {selectedInterests.length > 0 && (
            <p>
              Your interests: {selectedInterests.join(", ")}
            </p>
          )}
        </div>
      )}
    </main>
  );
}

export default App;