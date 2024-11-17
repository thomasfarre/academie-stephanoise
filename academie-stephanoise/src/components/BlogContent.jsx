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

  return <div className="blog-content prose max-w-none text-neutral-700">{documentToReactComponents(content, options)}</div>;
};

export default BlogContent;
