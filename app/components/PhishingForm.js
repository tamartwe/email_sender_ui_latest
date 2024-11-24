import React, { useState } from 'react';

const PhishingForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/phishing-management/send', {
        method: 'POST',
        headers: {
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