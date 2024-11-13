import fetch from "node-fetch";
import fs from "fs";
import path from "path";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const handler = async () => {
  const ACCESS_TOKEN = process.env.PUBLIC_INSTAGRAM_ACCESS_TOKEN;
  const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink&access_token=${ACCESS_TOKEN}`;

  try {
    const response = await fetch(url);

    // Log the raw response for debugging
    const textResponse = await response.text();
    console.log("Raw response from Instagram API:", textResponse);

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status} - ${textResponse}`);
    }

    // Attempt to parse the response as JSON
    const data = JSON.parse(textResponse);

    // Filter to get only the 3 most recent images
    const recentImages = data.data
      .filter(item => item.media_type === "IMAGE")
      .slice(0, 3);

    const filePath = path.join(process.cwd(), "public", "instagram.json");
    console.log("Writing Instagram data to:", filePath);

    // Ensure the directory exists
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    // Write the file
    fs.writeFileSync(filePath, JSON.stringify(recentImages, null, 2));

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Instagram data updated successfully!" }),
    };
  } catch (error) {
    console.error("Error in fetchInstagram:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

// Invoke the handler function when the script is run
handler().catch(error => {
  console.error("Error executing handler:", error);
});
