import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chatbot from './Chatbot';
import herosection from "../Image/herosection.jpg";
import { FaRegBell,FaYoutube  } from "react-icons/fa";
// import dotenv from 'dotenv';

// dotenv.config();


const Shimmer = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-48 w-full rounded-lg"></div>
      <div className="mt-4 h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="mt-2 h-4 bg-gray-300 rounded w-1/4"></div>
    </div>
  );
};

// Pagination Component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-wrap justify-center mt-8 space-x-2 py-2 md:space-x-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 md:px-4 md:py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50 text-xs md:text-base"
      >
        &laquo;
      </button>
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 m-3 md:px-4 md:py-2 rounded-lg ${currentPage === page ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-yellow-400 text-xs md:text-base`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 md:px-4 md:py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50 text-xs md:text-base"
      >
        &raquo;
      </button>
    </div>
  );
};

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [pageToken, setPageToken] = useState('');
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [pageVideos, setPageVideos] = useState({}); // Store videos by page number
  const [playingVideoId, setPlayingVideoId] = useState(null); // Track the video being played

  // Fetch videos function
  const fetchVideos = async (page = 1) => {
    setLoading(true);
    setLoadingMore(true);
    console.log(process.env.REACT_APP_GOOGLE_API_KEY,"key");
    try {
      const response = await axios.get(
        'https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: process.env.REACT_APP_GOOGLE_API_KEY,
          channelId: 'UCJxoyed7j8YYNLXQ4SmF14Q',
          part: 'snippet,id',
          order: 'date',
          maxResults: 25,
          pageToken: page === 1 ? '' : pageToken,
        }
      }
      );
      const newVideos = response.data.items;
      setPageVideos(prevPageVideos => ({
        ...prevPageVideos,
        [page]: newVideos
      }));
      setPageToken(response.data.nextPageToken || '');
      setTotalPages(Math.ceil(response.data.pageInfo.totalResults / 25));
      setHasMore(!!response.data.nextPageToken);
    } catch (error) {
      console.error('Error fetching YouTube videos:', error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  // Fetch videos on page change
  useEffect(() => {
    if (!pageVideos[currentPage]) {
      fetchVideos(currentPage);
    }
  }, [currentPage]);

  // Handle video click to play the video
  const handleVideoClick = (videoId) => {
    if (playingVideoId === videoId) {
      setPlayingVideoId(null); // Pause the video if it's already playing
    } else {
      setPlayingVideoId(videoId); // Play the selected video
    }
  };

  // Handle page change
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Get videos for current page
  const currentVideos = pageVideos[currentPage] || [];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Chatbot />
      <div className="relative w-full h-[420px] flex items-center">
        <Chatbot />
        <img
          src={herosection}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background"
          loading="lazy"
        />
        <div className="relative z-10 flex flex-col items-start justify-start md:justify-center h-full text-left text-white px-8 md:px-16 lg:px-24 pt-8 md:pb-20 font-serif">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4 md:mb-6 leading-snug">
            <span className="block text-yellow-500 ">
              Our YouTube Channel
            </span>
            <span className="block text-white">Discover the </span>
            <span className="block text-white">World Of Numerology </span>

          </h1>
          {/* <div className="mt-1 mr-1">
            <Link to="/services" className="px-8 py-4 border text-sm md:text-base font-semibold rounded-full hover:bg-amber-400 hover:text-black transition duration-300">
              Explore Services &rarr;
            </Link>
          </div> */}
        </div>
      </div>

      <div className="body-font text-white py-12 font-serif">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-4">
            {/* Watch Now Button */}
            <a href='https://www.youtube.com/@AuspiciousNumerology' target='_blank'>
              <button className="bg-gradient-to-r from-customOrange to-customBrown text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-customOrange flex items-center">
              <FaYoutube   className="w-6 h-6 mr-3"  />
                Watch Now
              </button>
            </a>

            {/* Subscribe Button */}
            <a href='https://www.youtube.com/@AuspiciousNumerology' target='_blank'>

              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 flex items-center">
                <FaRegBell  className="w-5 h-5 mr-3" />
                Subscribe 
              </button>
            </a>
          </div>
        </div>
      </div>


      <div className="container mx-auto px-4 sm:px-8 lg:px-16 max-w-7xl mt-8">
        {loading && !currentVideos.length ? (
          <div className="flex flex-wrap justify-center -mx-2">
            {[...Array(12)].map((_, index) => (
              <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-8" key={index}>
                <Shimmer />
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="flex flex-wrap justify-center -mx-2 font-serif">
              {currentVideos.map((video) => (
                <div
                  key={video.id.videoId}
                  className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-8 flex flex-col"
                >
                  <div
                    onClick={() => handleVideoClick(video.id.videoId)}
                    className="relative bg-gradient-to-r from-customOrange to-customBrown shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden flex flex-col cursor-pointer"
                  >
                    {playingVideoId === video.id.videoId ? (
                      <iframe
                        className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                        src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title={video.snippet.title}
                      ></iframe>
                    ) : (
                      <>
                        <img
                          className="w-full h-40 sm:h-52 lg:h-64 object-cover transition-opacity duration-300 hover:opacity-90"
                          src={video.snippet.thumbnails.high.url}
                          alt={video.snippet.title}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 hover:bg-opacity-60">
                          <svg
                            className="w-12 h-12 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M14 11l-6 4V7l6 4z"></path>
                          </svg>
                        </div>
                        <div className="relative bg-white p-3 flex flex-col">
                          <h1 className="text-customBrown font-bold text-lg mb-2 transition-colors duration-300 hover:text-customOrange cursor-pointer">
                            {toSentenceCase(video.snippet.title).length > 40
                              ? toSentenceCase(video.snippet.title).substring(0, 35) + "..."
                              : toSentenceCase(video.snippet.title)}
                          </h1>

                        </div>
                      </>
                    )}
                  </div>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg text-center hover:bg-yellow-400 transition-colors duration-300"
                  >
                    Watch
                  </a>
                </div>
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );


};

export default Videos;
function toSentenceCase(str) {
  if (!str) return "";

  return str.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
    return match.toUpperCase();
  });
}