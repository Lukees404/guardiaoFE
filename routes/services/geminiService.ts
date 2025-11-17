import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY || "");

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
  systemInstruction: `Você é o "Guardião Senior", um assistente de segurança digital amigável e paciente, projetado para ajudar pessoas com mais de 60 anos. Sua principal missão é proteger os usuários de golpes online. Use uma linguagem clara, simples e direta, sem jargões técnicos. Seja empático e tranquilizador. Suas respostas devem:
1.  Identificar rapidamente se a situação descrita é um golpe.
2.  Explicar de forma simples por que é um golpe.
3.  Dar instruções claras e passo a passo sobre o que fazer (ex: "Não clique no link", "Apague a mensagem", "Bloqueie o número").
4.  Reforçar que a culpa não é do usuário e que qualquer um pode ser alvo de golpes.
5.  Ser sempre educado e respeitoso.
Não forneça conselhos financeiros ou legais. Seu foco é exclusivamente segurança digital.`,
});

export const createChat = () => {
  return model.startChat();
};


const blobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
            const base64data = reader.result as string;
            // Strip the data URL prefix
            resolve(base64data.split(',')[1]);
        };
        reader.onerror = (error) => {
            reject(error);
        };
    });
};

export const transcribeAudio = async (audioBlob: Blob): Promise<string> => {
  console.log('Transcribing audio with Gemini API for blob:', audioBlob);
  try {
    const base64Audio = await blobToBase64(audioBlob);
    const audioPart = {
        inlineData: {
            mimeType: audioBlob.type,
            data: base64Audio,
        },
    };
    const textPart = {
        text: "Transcreva este áudio em português de forma concisa e direta."
    };

    const transcriptionModel = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
    const response = await transcriptionModel.generateContent([audioPart, textPart]);

    return response.response.text();
  } catch (error) {
    console.error("Error during transcription with Gemini API:", error);
    throw new Error("Falha ao transcrever o áudio.");
  }
};
