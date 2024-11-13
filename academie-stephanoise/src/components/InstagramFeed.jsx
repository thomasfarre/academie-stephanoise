import { useEffect, useState } from 'react';

const InstagramFeed = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/instagram.json');
        if (!response.ok) {
          throw new Error(`Error fetching Instagram data: ${response.statusText}`);
        }

        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error loading Instagram feed:', error);
        setError('Failed to load Instagram feed.');
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="mt-4">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map(image => (
            <a
              key={image.id}
              href={image.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-105"
            >
              <img
                className="w-full h-96 object-cover rounded-md shadow-md saturate-0"
                src={image.media_url}
                alt="Instagram Post"
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default InstagramFeed;
