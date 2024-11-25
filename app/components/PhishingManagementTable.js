"use client"

import React, { useState, useEffect } from 'react';
import './PhishingManagementTable.css'

const PhishingManagementTable = () => {
  const [phishingAttempts, setPhishingAttempts] = useState([]);

  useEffect(() => {
    const fetchPhishingAttempts = async () => {
      try {
        let token;
        if (typeof window !== "undefined") {
          token = localStorage.getItem("token");
        }
        const response = await fetch('http://localhost:3001/phishing-management', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Include Bearer token in the Authorization header
            'Content-Type': 'application/json'
          }
        });
        if (response.ok) {
          const data = await response.json();
           // Filter out records where attemptId is empty
          const filteredData = data.filter((attempt) => attempt.attemptId !== '' && attempt.attemptId !== undefined);
          setPhishingAttempts(filteredData);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPhishingAttempts();
  }, []);

  return (
    <div>
      <h2 className="table-header">Phishing Management Table</h2>
      <table className="phishing-table">
        <thead>
          <tr>
            <th>Attempt ID</th>
            <th>Email</th>
            <th>Attempt Number</th>
          </tr>
        </thead>
        <tbody>
          {phishingAttempts.map((attempt) => (
            <tr key={attempt.attemptId}>
              <td>{attempt.attemptId}</td>
              <td>{attempt.email}</td>
              <td>{attempt.attempt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PhishingManagementTable;