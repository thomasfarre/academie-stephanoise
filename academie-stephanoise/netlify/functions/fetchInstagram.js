import fetch from "node-fetch";
import fs from "fs";
import path from "path";

export const handler = async () => {
  const ACCESS_TOKEN = process.env.PUBLIC_INSTAGRAM_ACCESS_TOKEN;
  const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink&access_token=${ACCESS_TOKEN}`;
  const filePath = path.join(__dirname, "../dist/instagram.json");

  try {
    // Check if the file exists
    let recentImages = [];
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      const lastModified = new Date(stats.mtime);
      const now = new Date();

      // If the file was modified less than an hour ago, use the cached data
      if (now - lastModified < 3600000) {
        const cachedData = fs.readFileSync(filePath);
        return {
          statusCode: 200,
          body: cachedData,
        };
      } else {s
        // If the file exists but is older than an hour, read it
        recentImages = JSON.parse(fs.readFileSync(filePath));
      }
    }

    // Fetch new data from Instagram API
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Instagram API error: ${JSON.stringify(data)}`);
    }

    // Filter to get only the 3 most recent images
    recentImages = data.data
      .filter(item => item.media_type === "IMAGE")
      .slice(0, 3);

    // Write the file to the dist directory
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
