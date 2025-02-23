/* eslint-disable react/prop-types */

import { getYouTubeVideoId } from "../../Utils/Youtube";

export function YouTubeEmbedAdvanced  ({
  videoId,
  title = "YouTube video",
  autoplay = false,
  startAt = 0,
  controls = true,
  muted = false,
  className = ""
}) {
  // Construct URL with parameters
  // const videoUrl = new URL(`${videoId}`);
  const videoUrl = new URL(`https://www.youtube.com/embed/${getYouTubeVideoId(videoId)}`);
  
  // Add parameters if needed
  const params = {
    autoplay: autoplay ? 1 : 0,
    start: startAt,
    controls: controls ? 1 : 0,
    mute: muted ? 1 : 0
  };
  
  Object.entries(params).forEach(([key, value]) => {
    videoUrl.searchParams.append(key, value);
  });

  return (
    <div className={`mx-auto ${className}`}>
      <div className="relative w-full pt-[56.25%] bg-gray-100 rounded-lg">
        {/* Loading placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-pulse text-gray-400">Loading...</div>
        </div>
        
        <iframe
          src={videoUrl.toString()}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

// Example usage component


