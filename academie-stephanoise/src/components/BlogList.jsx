import Heading from './foundations/Heading.jsx';
import BodyText from './foundations/BodyText.jsx';

const BlogList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <BodyText variant="paragraph">No blog posts available.</BodyText>;
  }

  return (
    <div className="pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-16 pt-10 lg:pt-16 divide-y divide-neutral-200">
          {posts.map((post) => {
            const { id, slug, titre, label, descriptionCourte, datePublication, auteur } = post;

            return (
              <a href={`/blog/${slug}`} key={id} className="block">
                <article className="flex max-w-xl flex-col items-start justify-between pt-16">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={datePublication} className="text-neutral-500">
                      {datePublication ? new Date(datePublication).toLocaleDateString() : "Unknown Date"}
                    </time>
                    <BodyText variant="label" className="relative z-10 text-xs rounded-full bg-red-50 px-3 py-1.5 font-medium text-red-700">
                      {label || "Untitled Post"}
                    </BodyText>
                  </div>
                  <div className="group relative">
                    <Heading level={4} className="mt-3 group-hover:text-neutral-600">
                      {titre || "Untitled Post"}
                    </Heading>
                    <BodyText variant="paragraph" className="mt-2">
                      {descriptionCourte || "No description available."}
                    </BodyText>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <div className="text-sm/6">
                      <BodyText variant="label">
                        {auteur || "Unknown Author"}
                      </BodyText>
                    </div>
                  </div>
                </article>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
