let ReactPixel = null;

export async function initFacebookPixel(pixelId) {
  if (typeof window !== 'undefined') {
    if (!ReactPixel) {
      const mod = await import('react-facebook-pixel');
      ReactPixel = mod.default;
      ReactPixel.init(pixelId);
    }
    return ReactPixel;
  }
  return null;
}

export function trackEvent(pixel, eventName, eventId) {
  if (pixel && typeof window !== 'undefined') {
    pixel.track(eventName, {}, { eventID: eventId });
  }
}