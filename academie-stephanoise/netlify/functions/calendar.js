exports.handler = async function (event, context) {
  try {
    const BASEPARAMS = `orderBy=startTime&singleEvents=true&timeMin=${new Date().toISOString()}`;
    const BASEURL = `https://www.googleapis.com/calendar/v3/calendars/${process.env.CALENDAR_ID}/events?${BASEPARAMS}`;
    const finalURL = `${BASEURL}&key=${process.env.CALENDAR_API}`;

    console.log("Final URL:", finalURL);
    console.log("Environment Variables:", {
      CALENDAR_API: process.env.CALENDAR_API,
      CALENDAR_ID: process.env.CALENDAR_ID,
    });

    const response = await fetch(finalURL);
    console.log("API Response Status:", response.status);

    const data = await response.json();
    console.log("API Response Body:", JSON.stringify(data, null, 2));

    if (!Array.isArray(data.items)) {
      console.error("Unexpected Data Format:", data);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Invalid data format" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data.items),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (error) {
    console.error("Error fetching events:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
