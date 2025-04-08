export const sendFbEvent = async (eventName, customData = {}, userData = {}) => {
  try {
    const res = await fetch('/api/fb-conversion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        url: window.location.href,
        customData,
        userData,
      }),
    });

    const result = await res.json();
    console.log('📡 Evento enviado via API:', result);
  } catch (err) {
    console.error('Erro ao enviar evento pro Meta:', err);
  }
};
