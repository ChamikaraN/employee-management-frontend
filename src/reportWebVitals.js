const reportWebVitals = async (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    try {
      const webVitals = await import("web-vitals");
      webVitals.getCLS(onPerfEntry);
      webVitals.getFID(onPerfEntry);
      webVitals.getFCP(onPerfEntry);
      webVitals.getLCP(onPerfEntry);
      webVitals.getTTFB(onPerfEntry);
    } catch (error) {
      console.error("Failed to load web-vitals", error);
    }
  }
};

export default reportWebVitals;
