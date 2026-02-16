
/**
 * Simple analytics utility for tracking user engagement.
 * In a production environment, this would integrate with Google Analytics 4, 
 * Mixpanel, or a custom event tracking backend.
 */

export type CTAEvent = {
  event_name: string;
  button_text: string;
  location: string;
  timestamp: string;
};

export const trackCTAEvent = (buttonText: string, location: string) => {
  const eventData: CTAEvent = {
    event_name: 'cta_click',
    button_text: buttonText,
    location: location,
    timestamp: new Date().toISOString(),
  };

  // Log to console for demonstration
  console.log('%c[Analytics Event]', 'color: #3b82f6; font-weight: bold;', eventData);

  // Example: If GA4 was present
  // if (typeof window.gtag === 'function') {
  //   window.gtag('event', 'select_content', {
  //     content_type: 'button',
  //     item_id: buttonText.toLowerCase().replace(/\s+/g, '_'),
  //     location_id: location
  //   });
  // }
};
