import axios from 'axios';

export const saveResume = async (data) => {
  try {
    const res = await axios.post('http://localhost:5000/api/resume', data);
    alert('Resume saved!');
    return res.data;
  } catch (error) {
    alert('Failed to save resume');
    console.error(error);
  }
};


export const generateExperience = ({ jobTitle, technologies }) => {
  return axios.post("http://localhost:5000/api/ai/generate-experience", {
    jobTitle,
    technologies,
  });
};

