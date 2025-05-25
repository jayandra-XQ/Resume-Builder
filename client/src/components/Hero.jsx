import React from 'react'
import resume from '../assets/resume-preview.jpeg'
import template2 from '../assets/template2.webp';
import template3 from '../assets/template3.png';
import template4 from '../assets/template4.png';
import FAQSection from './FAQSection';
import { useNavigate } from 'react-router-dom';
import AISuggestionsCard from './AISuggestionsCard';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <AISuggestionsCard />
      <section className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Resume Preview Image */}
        <div className="flex justify-center">
          <img
            src={resume}
            alt="Resume Preview"
            className="max-w-full rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Right: Text and Buttons with Gradient */}
        <div className="flex flex-col justify-center p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-xl">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight animate-fadeIn">The Best Online Resume Builder</h1>
          <p className="text-lg mb-6 font-light animate-fadeIn delay-100">
            Craft your perfect resume effortlessly with our intuitive platform.
          </p>
          <div className="flex space-x-4 mb-6 animate-fadeIn delay-200">
            <button
              onClick={() => navigate('/create')}
              className="bg-orange-500 hover:bg-orange-600 transition-all transform hover:scale-105 text-white font-semibold py-3 px-6 rounded-lg shadow-md">
              Create My Resume Now
            </button>
          </div>
          <div className="flex space-x-8 mb-6 animate-fadeIn delay-300">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-green-300">↑ 38%</span>
              <span className="text-sm">More Interviews</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-green-300">↑ 23%</span>
              <span className="text-sm">Higher Job Offer Rate</span>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="col-span-2 text-gray-700 text-center md:text-left px-4">
          <p className="mb-4 text-lg leading-relaxed">
            Our online resume builder offers a quick and easy way to create your professional resume from 25+ design templates.
            Whether you’re starting from scratch or refining an existing resume, our platform serves as a powerful resume generator
            and provides expert resume help at every step.
          </p>
          <p className="text-lg leading-relaxed">
            Create a resume using our AI resume builder feature, plus take advantage of expert suggestions, a built-in resume editor,
            and customizable modern and professional resume templates. Free users have access to our easy-to-use resume creator
            and TXT file downloads.
          </p>
        </div>

        {/* Template Section - Full Width */}
        <section className="w-full px-6 py-16 text-center bg-gray-100">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Pick One of Many World-Class Templates and Build Your Resume in Minutes
          </h2>
          <div className="flex justify-center gap-6 mb-8 overflow-x-auto w-full">
            <img src={resume} alt="Template 1" className="w-56 md:w-64 rounded-lg shadow-xl transition-transform hover:scale-105" />
            <img src={template2} alt="Template 2" className="w-56 md:w-64 rounded-lg shadow-xl transition-transform hover:scale-105" />
            <img src={template3} alt="Template 3" className="w-56 md:w-64 rounded-lg shadow-xl transition-transform hover:scale-105" />
            <img src={template4} alt="Template 4" className="w-56 md:w-64 rounded-lg shadow-xl transition-transform hover:scale-105" />
          </div>
          <div className="flex justify-center items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer"></span>
            <span className="w-3 h-3 rounded-full bg-blue-500 cursor-pointer"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer"></span>
          </div>
        </section>

        {/* Feature Section */}
        <section className="w-full px-6 py-16 text-center bg-white">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Get hired 36% faster with our feature-packed and easy-to-use resume builder app</h2>
          <p className="text-gray-600 mb-6">ResumeBuilder.com is now part of Bold LLC. For more information visit our <a href="#" className="text-blue-500 underline">Terms of Use</a> and <a href="#" className="text-blue-500 underline">Privacy Policy</a>.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-left flex items-start space-x-4">
              <span className="text-purple-500 text-3xl">📜</span>
              <div>
                <h3 className="font-bold text-lg">Powerful resume builder</h3>
                <p className="text-gray-600">Use our potent creation tools and expert guidance to create the perfect resume for your next job application.</p>
              </div>
            </div>
            <div className="text-left flex items-start space-x-4">
              <span className="text-purple-500 text-3xl">📄</span>
              <div>
                <h3 className="font-bold text-lg">Professional templates</h3>
                <p className="text-gray-600">Choose from 25+ ATS-friendly modern and professional templates.</p>
              </div>
            </div>
            <div className="text-left flex items-start space-x-4">
              <span className="text-purple-500 text-3xl">🎨</span>
              <div>
                <h3 className="font-bold text-lg">Customize fonts and colors</h3>
                <p className="text-gray-600">Select custom fonts and colors on any resume template.</p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section>
        <FAQSection />
      </section>

    </>


  )
}

export default Hero