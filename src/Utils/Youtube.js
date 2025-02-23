export const getYouTubeVideoId = (url) => {
    const regex = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|.*[?&]v=))([^?&]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };