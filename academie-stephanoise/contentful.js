import { createClient } from "contentful";
import dotenv from "dotenv";

dotenv.config();

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getBlogPosts = async () => {
  const entries = await contentfulClient.getEntries({
    content_type: "blogPost",
    include: 1, // Include linked assets
  });

  // Map the response to include necessary fields
  return entries.items.map((item) => ({
    id: item.sys.id,
    slug: item.fields.slug,
    titre: item.fields.titre,
    label: item.fields.label,
    descriptionCourte: item.fields.descriptionCourte,
    datePublication: item.fields.datePublication,
    auteur: item.fields.auteur,
  }));
};
