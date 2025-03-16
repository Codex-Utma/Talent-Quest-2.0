import { Webchat, WebchatProvider, useClient } from '@botpress/webchat';

import { theme } from './chatbotTheme';
import './ChatBot.css';

const clientId = import.meta.env.VITE_CHATBOT_CLIENT_ID;

export default function App() {
  const client = useClient({ clientId });

  return (
    <WebchatProvider client={client} theme={theme} configuration={{
      botName: "Talent Quest Bot",
      botDescription: "¡Hola! Soy Talent Quest Bot, tu asistente virtual. ¿En qué puedo ayudarte?",
    }}>
      <Webchat />
    </WebchatProvider>
  );
}
