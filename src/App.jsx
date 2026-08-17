import React from 'react';
import Calculator from './Calculator';
import './index.css'; // Make sure this is imported if not in main.jsx

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
