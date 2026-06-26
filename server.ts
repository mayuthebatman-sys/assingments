import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Helper to get or initialize the Gemini client lazily
let aiClient: GoogleGenAI | null = null;
function getGenAIClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not configured. Please define it in the Secrets panel.");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parser middleware
  app.use(express.json());

  // API endpoints FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Interactive AI Consultant diagnostic endpoint
  app.post("/api/diagnose", async (req, res) => {
    try {
      const { painPoints, theory, targetCompany } = req.body;

      if (!painPoints || !Array.isArray(painPoints) || painPoints.length === 0) {
        return res.status(400).json({ error: "At least one organizational pain point must be selected." });
      }
      if (!theory) {
        return res.status(400).json({ error: "A management or leadership theory must be selected for the framework." });
      }
      const company = targetCompany || "Kapruka Holdings";

      const ai = getGenAIClient();
      
      const prompt = `
Analyze the following scenario for a professional academic report:
- Target Organization: ${company}
- Selected Critical Pain Points: ${painPoints.map(p => `"${p}"`).join(", ")}
- Analytical Framework: ${theory}

Write a comprehensive, professional, 350-word strategic advisory memo. 
The memo must follow this structure:
1. **Scenario Assessment**: Contextualize why these pain points are driving the down-growth/stagnation at ${company}.
2. **Theoretical Application**: Explain exactly how ${theory} explains the dysfunction or provides a mechanism for improvement. Quote/cite standard academic concepts (e.g., Fayol, Herzberg, Transformational Leadership, or Schein).
3. **Strategic Recommendations**: Provide 2-3 highly actionable, contextualized recommendations for the executive leadership of ${company} to resolve these issues and align their organizational culture with performance.

Maintain a scholarly yet highly practical, senior business consultant tone. Avoid generic statements; specifically mention Sri Lanka's retail/e-commerce context and how this compares to industry peers like Daraz and Lassana Flora where relevant.
`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: "You are a senior academic tutor in Leadership and Management, and a prestige tier business consultant in Sri Lankan enterprise strategies. Your responses should be formatted in clean markdown, using rigorous corporate language and accurate citations.",
          temperature: 0.7,
        }
      });

      res.json({
        analysis: response.text,
        frameworkUsed: theory,
        targetCompany: company
      });
    } catch (error: any) {
      console.error("Gemini API Error in server:", error);
      res.status(500).json({ 
        error: error?.message || "An unexpected error occurred during consultant diagnosis.",
        details: error?.stack || ""
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT} under ${process.env.NODE_ENV || 'development'} mode`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start full-stack server:", err);
});
