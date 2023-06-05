import sanityClient from "../sanityClient";

const logEvent = async (
  logLevel: string,
  message: string,
  data: any
): Promise<void> => {
  try {
    await sanityClient.create({
      _type: "log",
      timestamp: new Date().toISOString(),
      logLevel,
      message,
      data,
    });
  } catch (error) {
    // Handle any potential errors from sanity
    console.error("Failed to log event:", error);
  }
};

export default logEvent;
