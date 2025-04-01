import { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    script1.async = true;

    const script2 = document.createElement('script');
    script2.src = "https://files.bpcontent.cloud/2025/04/01/21/20250401214606-A8HSMKL5.js";
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return null;
};

export default ChatBot;
