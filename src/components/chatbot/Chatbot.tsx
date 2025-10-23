import { useState } from 'react';
import { ChatbotButton } from './ChatbotButton';
import { ChatWindow } from './ChatWindow';

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatbotButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <ChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
