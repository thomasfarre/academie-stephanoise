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
  console.log("Final URL:", finalURL);
  console.log("Event:", event);
  try {
    if (event.httpMethod === "GET") {
      return fetch(finalURL)
        .then((response) => {
          console.log("Response status:", response.status);
          return response.json();
        })
        .then((data) => {
          console.log("Data received:", data);
          return {
            statusCode: 200,
            body: JSON.stringify(data.items, null, 2),
            HEADERS,
          };
        });
    }
    console.log("Invalid HTTP method:", event.httpMethod);
    return {
      statusCode: 401,
    };
  } catch (e) {
    console.error("Error occurred:", e);
    return {
      statusCode: 500,
      body: e.toString(),
    };
  }
};
