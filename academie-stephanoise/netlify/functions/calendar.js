exports.handler = async function (event, context) {
  try {
    const BASEPARAMS = `orderBy=startTime&singleEvents=true&timeMin=${new Date().toISOString()}`;
    const BASEURL = `https://www.googleapis.com/calendar/v3/calendars/${process.env.CALENDAR_ID}/events?${BASEPARAMS}`;
    const finalURL = `${BASEURL}&key=${process.env.CALENDAR_API}`;

    const cacheBuster = `&_=${new Date().getTime()}`;
    const response = await fetch(finalURL + cacheBuster);
    const data = await response.json();

    if (!Array.isArray(data.items)) {
      console.error("Unexpected Data Format:", data);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Invalid data format" }),
      };
    }

    console.log("Fetched events:", data.items);

    return {
      statusCode: 200,
      body: JSON.stringify(data.items),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-cache, no-store, must-revalidate",
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
