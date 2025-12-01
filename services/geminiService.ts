import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || ''; 
// In a real app, handle missing API key gracefully, but for this demo we assume it's injected.

const ai = new GoogleGenAI({ apiKey });

export const getBookRecommendations = async (userQuery: string, contextBooks: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, I can't connect to the AI service right now (Missing API Key).";
  }

  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `You are a helpful, polite, and knowledgeable bookseller at Kinokuniya USA. 
    Your goal is to help customers find books they will love. 
    You have deep knowledge of Japanese literature, Manga, Anime, Art books, and Stationery.
    
    Here is a list of some books currently in our featured inventory (but you can recommend general titles too if they fit):
    ${contextBooks}

    When a user asks for a recommendation:
    1. Be enthusiastic and polite (Japanese service style).
    2. Suggest specific titles (from inventory if applicable, or general famous ones).
    3. Briefly explain why you recommend it.
    4. If the user asks about store hours or locations, mention Kinokuniya has stores in NYC, San Francisco, Los Angeles, etc.
    5. Keep responses concise (under 100 words) unless asked for more detail.
    
    Response format: Plain text, formatted nicely.`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model,
      contents: userQuery,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I'm having a little trouble finding the right book for you. Could you try asking in a different way?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sumimasen! My connection to the book database is a bit slow. Please try again in a moment.";
  }
};
