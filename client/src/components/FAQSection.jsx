import React, { useState } from 'react';

function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: 'What makes Resume Builder the best resume tool?',
      answer: 'Using the Resume Builder app, you have a 30% higher chance of getting a job, and users experience a 42% higher response rate from recruiters. You’ll get resume help from experts every step of the way, with 25+ professional resume templates and AI-enabled suggestions to write a resume that gets results.',
    },
    {
      question: 'How do I use the Resume Builder app?',
      answer: 'You can use the Resume Builder app by following the on-screen instructions.',
    },
    {
      question: 'Should I make a different resume for every job application?',
      answer: 'Yes, it is recommended to tailor your resume to each job application.',
    },
    {
      question: 'Does Resume Builder have resume examples that I can look at?',
      answer: 'Yes, Resume Builder provides a variety of resume examples.',
    },
    {
      question: 'What is an AI resume builder?',
      answer: 'An AI resume builder uses artificial intelligence to help you create your resume.',
    },
    {
      question: 'Should I download my new resume as a PDF or text file?',
      answer: 'PDF is generally recommended for maintaining formatting.',
    },
    {
      question: 'How can I use Resume Builder for free?',
      answer: 'Resume Builder offers a free trial period.',
    },
  ];

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Column: Title */}
      <div>
        <h2 className="text-3xl font-bold mb-8">
          Frequently Asked Questions About Resume Builder
        </h2>
      </div>

      {/* Right Column: Questions and Answers */}
      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 py-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span className="text-2xl text-gray-500">
                {expandedIndex === index ? '-' : '+'}
              </span>
            </div>
            {expandedIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;