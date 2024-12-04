import React, { useRef, useState, useEffect } from "react";
import cattlevideo from "../Image/mooropanvideo.mp4";

const VideoPage = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className="relative w-80% h-[500px] px-9 py-10 overflow-hidden"
      style={{
        backgroundColor: "#000", // Optional: Change background color if needed
      }}
    >
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
        >              <source src={cattlevideo} type="video/mp4" />
</video>
      </div>

      {/* Play/Pause Button */}
      <button
        className="absolute top-2 right-2 bg-indigo-600 text-white px-4 py-2 rounded-md shadow-lg"
        onClick={togglePlayPause}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default VideoPage;
