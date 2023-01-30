type Params = {
  action: "click" | "view";
  description: string;
  experimentVariant: string | null;
  // minimal data. IRL this would may some more depending on the shared tracking schema e.g., event "category"
};

export const trackEvent = (params: Params) => {
  /**
   * fake augmentation
   * a real internal tracker lib should augment all events with sane standards e.g., timestamp, session ID, url etc.
   */
  const data = {
    ...params,
    url: window.location.href,
    timestamp: Date.now(),
    sessionId: "fake-unique-session-id",
  };

  console.log(`%c Track event`, "background: #222; color: #bada55", data);
};
