const apiKey="AIzaSyCVHXDkOpQdlDwasUuKKpqTOuLHMuHwvvY";

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai"
  
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt: any) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });

    try{
      const result = await chatSession.sendMessage(prompt);
      console.log(result.response.text())
      return result.response.text()
    }catch(e: any){
      console.log(e);
      throw new Error(e);
    }
  }
  
  export default run;