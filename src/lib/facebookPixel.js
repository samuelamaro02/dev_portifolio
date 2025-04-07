export async function initFacebookPixel(pixelId) {
    if (typeof window === 'undefined') return null;
  
    const { default: ReactPixel } = await import('react-facebook-pixel');
  
    const advancedMatching = {
      em: 'user@example.com'
    };
  
    const options = {
      autoConfig: true,
      debug: false
    };
  
    ReactPixel.init(pixelId, advancedMatching, options);
  
    return ReactPixel;
  }
  
  export function trackPageView(ReactPixel) {
    if (ReactPixel) {
      ReactPixel.pageView();
    }
  }
  
  export function trackEvent(ReactPixel, eventName, data = {}) {
    if (ReactPixel) {
      ReactPixel.track(eventName, data);
    }
  }
  