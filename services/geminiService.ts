
// This is a mock service to simulate Gemini API responses for the chat feature.
// In a real application, this would be replaced with actual calls to the @google/genai SDK.

export const getChatResponse = (message: string): Promise<string> => {
  console.log(`Sending to mock Gemini API: "${message}"`);

  const lowerCaseMessage = message.toLowerCase();
  
  let botResponse = "Entendido. Estou buscando a melhor resposta para você...";

  if (lowerCaseMessage.includes("senha") && lowerCaseMessage.includes("banco")) {
    botResponse = "**Com certeza, isso é um golpe!** Bancos e instituições financeiras sérias **nunca** pedem sua senha por telefone, e-mail ou SMS. Não compartilhe essa informação com ninguém. Desligue a ligação imediatamente e, se possível, bloqueie o número.";
  } else if (lowerCaseMessage.includes("link") && lowerCaseMessage.includes("estranho")) {
    botResponse = "Cuidado, pode ser um link malicioso para roubar seus dados (phishing). **Não clique nele!** A melhor coisa a fazer é apagar a mensagem. Se veio de um contato conhecido, pergunte a ele por outro meio (como uma ligação) se ele realmente enviou aquilo.";
  } else if (lowerCaseMessage.includes("prêmio") || lowerCaseMessage.includes("ganhou")) {
    botResponse = "Essa é uma tática muito comum de golpe. Desconfie sempre de prêmios inesperados, especialmente se pedirem para você pagar alguma taxa ou fornecer dados pessoais para recebê-lo. Na dúvida, ignore e apague.";
  } else if (lowerCaseMessage.includes("ajuda") || lowerCaseMessage.includes("como posso")) {
     botResponse = "Claro! Estou aqui para ajudar. Você pode me perguntar sobre e-mails suspeitos, ligações de telemarketing, mensagens de WhatsApp, segurança em redes sociais ou qualquer outra dúvida sobre segurança digital.";
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(botResponse);
    }, 1500 + Math.random() * 1000); // Simulate network delay
  });
};
