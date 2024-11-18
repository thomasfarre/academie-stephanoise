import Heading from './foundations/Heading.jsx';
import BodyText from './foundations/BodyText.jsx';

const BlogList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <BodyText variant="paragraph">No blog posts available.</BodyText>;
  }

  return (
    <div className="relative isolate overflow-hidden bg-white xl:overflow-visible">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-[39%] stroke-neutral-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-red-200">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-16 pt-10 lg:pt-16">
          {posts.map((post) => {
            const { id, slug, titre, label, descriptionCourte, datePublication, auteur } = post;

            return (
              <a href={`/blog/${slug}`} key={id} className="block ">
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
                    <Heading level={3} className="mt-3 group-hover:text-neutral-600">
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
