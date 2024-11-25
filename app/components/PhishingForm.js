import React, { useState } from 'react';

const PhishingForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    try {
      let token;
      if (typeof window !== "undefined") {
        token = localStorage.getItem("token");
      }
      const response = await fetch('http://localhost:3001/phishing-management/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`, // Include Bearer token in the Authorization header
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
      });

      if (response.ok) {
        console.log('POST request was successful');
        // Handle success as needed
      } else {
        console.error('Error in POST request');
        // Handle error as needed
      }
    } catch (error) {
      console.error('Error in POST request:', error);
      // Handle error as needed
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter email address" 
      />
      <button onClick={handleSubmit}>Send Email</button>
    </div>
  );
};

export default PhishingForm;