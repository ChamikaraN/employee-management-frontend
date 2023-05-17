import sanityClient from "../sanityClient";

const logEvent = async (logLevel, message, data) => {
  try {
    await sanityClient.create({
      _type: "log",
      timestamp: new Date().toISOString(),
      logLevel,
      message,
      data,
    });
  } catch (error) {
    // Handle any potential errors
    console.error("Failed to log event:", error);
  }
};

export default logEvent;
