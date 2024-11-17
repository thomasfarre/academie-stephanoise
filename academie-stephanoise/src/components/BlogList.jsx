const BlogList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <p>No blog posts available.</p>;
  }

  return (
    <div className="pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-16 pt-10 lg:pt-16">
          {posts.map((post) => {
            const { id, slug, titre, label, descriptionCourte, datePublication, auteur } = post;

            return (
              <a href={`/blog/${slug}`} key={id} className="block">
                <article className="flex max-w-xl flex-col items-start justify-between">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={datePublication} className="text-gray-500">
                      {datePublication ? new Date(datePublication).toLocaleDateString() : "Unknown Date"}
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      {label || "Untitled Post"}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                      {titre || "Untitled Post"}
                    </h3>
                    <p className="mt-2 text-sm/6 text-gray-600">
                      {descriptionCourte || "No description available."}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <div className="text-sm/6">
                      <p className="font-semibold text-gray-900">
                        {auteur || "Unknown Author"}
                      </p>
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
