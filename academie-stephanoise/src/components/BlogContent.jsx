import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

// Rich Text Renderer Options
const options = {
  renderNode: {
    // Render embedded assets (images)
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title } = node.data.target.fields;
      return (
        <img
          loading="lazy"
          src={file.url}
          alt={title || "Untitled Post"}
          className="my-4"
        />
      );
    },
    // Render hyperlinks
    [BLOCKS.HYPERLINK]: (node, children) => (
      <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
        {children || "No description available."}
      </a>
    ),
  },
};

const BlogContent = ({ content }) => {
  if (!content) return <p>No blog posts available.</p>;

  return <div className="prose">{documentToReactComponents(content, options)}</div>;
};

// <style>
//   .blog-content h1 {
//     font-size: 5rem;
//     font-family: 'Protest Strike', sans-serif;
//   }
// </style>

export default BlogContent;
