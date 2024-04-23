import React, { useState, useEffect } from 'react';

const TextBoxWithButton = () => {
  const [inputValue, setInputValue] = useState('');
  const [processedData, setProcessedData] = useState('');

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/running');
        if (response.ok) {
          const data = await response.json();
          console.log('Received data from backend:', data);
          setProcessedData(data.result); // Set the processed data in state
        } else {
          console.error('Failed to fetch processed data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const intervalId = setInterval(fetchData, 5000); // Poll every 5 seconds
    return () => clearInterval(intervalId); // Cleanup the interval

  }, []); // Run this effect only once when the component mounts

  return (
    <div className="max-w-md mx-auto p-4">
      
    </div>
  );
};

export default TextBoxWithButton;
