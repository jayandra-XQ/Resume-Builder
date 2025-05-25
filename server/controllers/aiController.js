import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateExperience = async (req, res) => {
  try {
    const { jobTitle = "", technologies = [] } = req.body;

    if (!jobTitle || technologies.length === 0) {
      return res.status(400).json({ error: "Missing jobTitle or technologies in request body" });
    }

    const prompt = `Write 2-3 strong resume bullet points for a software developer with the title "${jobTitle}" using technologies like ${technologies.join(
      ", "
    )}. Focus on achievements and measurable impact.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const suggestion = completion.choices[0].message.content.trim();
    res.status(200).json({ suggestion });
  } catch (err) {
    console.error("Error in generateExperience:", err.message);
    res.status(500).json({ error: "Failed to generate suggestions" });
  }
};