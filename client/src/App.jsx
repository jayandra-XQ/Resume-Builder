import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResumeForm from './components/ResumeForm';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-6 font-sans">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">AI-Powered Resume Builder</h1>
        <div className="w-full bg-white rounded-2xl shadow-2xl p-8">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/create" element={<ResumeForm />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
