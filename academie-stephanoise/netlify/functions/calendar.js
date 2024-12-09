import fetch from "node-fetch";
const { CALENDAR_API, CALENDAR_ID } = process.env;
const BASEPARAMS = `orderBy=startTime&singleEvents=true&timeMin=${new Date().toISOString()}`;
const BASEURL = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?${BASEPARAMS}`;
const HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Methods": "GET",
};
exports.handler = async function (event, context) {
  const finalURL = `${BASEURL}&key=${CALENDAR_API}`;
  try {
    if (event.httpMethod === "GET") {
      return fetch(finalURL)
        .then((response) => response.json())
        .then((data) => ({
          statusCode: 200,
          body: JSON.stringify(data.items, null, 2),
          HEADERS,
        }));
    }
    return {
      statusCode: 401,
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: e.toString(),
    };
  }
};
