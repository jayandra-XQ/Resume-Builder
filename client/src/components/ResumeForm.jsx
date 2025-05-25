import React, { useState } from "react";
import ResumePreview from "./ResumePreview";
import { saveResume } from "../api/api";
import html2pdf from "html2pdf.js";
import { Moon, Sun } from "lucide-react";
import { WithContext as ReactTagInput } from "react-tag-input";
import { motion } from "framer-motion";
import { generateExperience } from "../api/api";

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
  });

  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([{ title: "", description: "", link: "" }]);
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSkillDelete = (i) => setSkills(skills.filter((_, index) => index !== i));
  const handleSkillAddition = (tag) => setSkills([...skills, tag]);

  const handleProjectChange = (index, e) => {
    const updated = [...projects];
    updated[index][e.target.name] = e.target.value;
    setProjects(updated);
  };

  const addProject = () => setProjects([...projects, { title: "", description: "", link: "" }]);
  const removeProject = (index) => setProjects(projects.filter((_, i) => i !== index));

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveResume({ ...formData, skills: skills.map((tag) => tag.text), projects });
  };

  const downloadPDF = () => {
    const element = document.getElementById("resume-preview");
    html2pdf().from(element).save("resume.pdf");
  };

  const handleGenerateExperience = async () => {
    try {
      const response = await generateExperience({
        jobTitle: formData.experienceTitle,
        technologies: formData.technologies,
      });

      console.log("AI Suggestion:", response.data.suggestion);
    } catch (error) {
      console.error("Failed to generate experience:", error);
    }
  };

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen p-6" : "bg-white text-black min-h-screen p-6"}>
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => setDarkMode(!darkMode)} className="px-4 py-2 bg-gray-200 rounded dark:bg-gray-700">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button onClick={downloadPDF} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Download PDF
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {Object.entries(formData).map(([key, value]) => (
            <div key={key}>
              <label htmlFor={key} className="block font-semibold capitalize mb-1">{key}</label>
              <input
                type="text"
                id={key}
                name={key}
                value={value}
                onChange={handleChange}
                className="w-full p-2 border rounded bg-white dark:bg-gray-800 dark:text-white"
                required
              />
            </div>
          ))}

          <div className="relative">
            <label className="block font-semibold capitalize mb-1" htmlFor="experience">Experience</label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 border rounded bg-white dark:bg-gray-800 dark:text-white"
              required
            />
            <button
              type="button"
              onClick={handleGenerateExperience}
              className="absolute right-2 bottom-2 bg-purple-600 text-white px-2 py-1 text-sm rounded hover:bg-purple-700"
            >
              ✨ Generate with AI
            </button>
          </div>

          <div>
            <label className="block font-semibold mb-1">Skills</label>
            <ReactTagInput
              tags={skills}
              handleDelete={handleSkillDelete}
              handleAddition={handleSkillAddition}
              placeholder="Add skills and press enter"
              classNames={{
                tagInputField: "w-full p-2 border rounded bg-white dark:bg-gray-800 dark:text-white",
                tags: "flex flex-wrap gap-2",
                tag: "bg-blue-500 text-white px-2 py-1 rounded",
                remove: "ml-1 cursor-pointer"
              }}
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Projects</label>
            {projects.map((project, index) => (
              <div key={index} className="border p-4 rounded space-y-2 mb-2">
                <input
                  type="text"
                  name="title"
                  placeholder="Project Title"
                  value={project.title}
                  onChange={(e) => handleProjectChange(index, e)}
                  className="w-full p-2 border rounded"
                  required
                />
                <textarea
                  name="description"
                  placeholder="Project Description"
                  value={project.description}
                  onChange={(e) => handleProjectChange(index, e)}
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="url"
                  name="link"
                  placeholder="Project Link (optional)"
                  value={project.link}
                  onChange={(e) => handleProjectChange(index, e)}
                  className="w-full p-2 border rounded"
                />
                <button type="button" onClick={() => removeProject(index)} className="text-red-500 text-sm">
                  Remove Project
                </button>
              </div>
            ))}
            <button type="button" onClick={addProject} className="px-4 py-2 bg-indigo-500 text-white rounded">
              Add Project
            </button>
          </div>

          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Save Resume
          </button>
        </form>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <ResumePreview data={{ ...formData, skills: skills.map((s) => s.text), projects }} />
        </motion.div>
      </div>
    </div>
  );
};

export default ResumeForm;
