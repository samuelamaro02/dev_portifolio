// lib/fbConversionApi.js

export async function sendFbEvent(eventName, customData = {}, userData = {}) {
    try {
      const res = await fetch('/api/fb-conversion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventName,
          customData,
          userData,
          url: window.location.href,
        }),
      });
  
      const result = await res.json();
      console.log('🎯 [FB Conversion API] Evento enviado com sucesso:', result);
      return result;
    } catch (err) {
      console.error('❌ [FB Conversion API] Erro ao enviar evento:', err);
    }
  }
  