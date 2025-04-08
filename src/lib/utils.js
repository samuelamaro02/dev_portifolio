export const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };
  
  export const trackPixelAndApi = async (fbPixel, eventName, customData = {}) => {
    const eventId = `${eventName}-${Date.now()}`;
    const fbp = getCookie('_fbp') || '';
    const fbc = getCookie('_fbc') || '';
  
    // Pixel
    trackEvent(fbPixel, eventName, eventId);
  
    // API
    await sendFbEvent(eventName, customData, {
      fbp,
      fbc,
      client_user_agent: navigator.userAgent,
      event_id: eventId,
    });
  };
  