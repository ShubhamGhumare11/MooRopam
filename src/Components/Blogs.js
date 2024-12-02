import React from 'react';
import Chatbot from './Chatbot';
import herosection from "../Image/herosection.jpg";
import { blogsData } from './data';
import dhoni from "../Image/Dhoni.png"
import zodiac from "../Image/zodiac.jpg"
import uphaar from "../Image/uphaar-tragedy-numerology.jpg"

const Blogs = () => {
  return (
    <div>
      <div className="relative w-full h-[420px] flex items-center">
        <Chatbot />
        <img
          src={herosection}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background"
          loading="lazy"
        />
        <div className="relative z-10 flex flex-col items-start justify-start md:justify-center h-full text-left text-white px-8 md:px-16 lg:px-24 pt-8 md:pb-20 font-serif">
          <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold mb-4 md:mb-6 leading-snug">
            <span className="block text-yellow-500 ">
            Explore Insights Through
            </span>
            <span className="block mt-3 text-white"> Our Blogs </span>
          </h1>
          {/* <div className="mt-1 mr-1">
            <Link to="/services" className="px-8 py-4 border text-sm md:text-base font-semibold rounded-full hover:bg-amber-400 hover:text-black transition duration-300">
              Explore Services &rarr;
            </Link>
          </div> */}
        </div>
      </div>

      <div className='container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 mt-4 bg-orange-300 font-serif'>
        {/* First Blog Post */}
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 text-black shadow-lg"
        >
          <img
            src={uphaar}
            alt="Uphaar Theatre Tragedy"
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5 bg-white rounded-r">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline text-customBrown">
              Uphaar Theatre Tragedy: Unveiling the Astonishing Numerological Pattern
            </h3>
            <span className="text-xs text-gray-500">February 19, 2021</span>
            <p>
              Years ago, Delhi was shaken by a devastating tragedy – the Uphaar Theatre Tragedy. This heart-wrenching incident left an indelible mark, a painful memory in the collective consciousness. The flames, smoke, and desperate cries of loved...
            </p>
            <button className="bg-customBrown text-white font-semibold py-2 px-4 rounded-full mt-3 hover:bg-customOrange transition-colors duration-300 text-sm">
              Read More
            </button>
          </div>
        </a>

        {/* Grid of Three Blogs */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {blogsData.slice(0, 3).map((post, index) => (
            <a
              key={index}
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline text-black shadow-lg bg-white rounded"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded-t h-44 bg-gray-500"
                src={post.imgSrc}
                alt={post.title}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-customBrown">
                  {post.title}
                </h3>
                <span className="text-xs text-gray-500">{post.date}</span>
                <p>{post.description}</p>
                <button className="bg-customBrown text-white font-semibold py-2 px-4 rounded-full mt-3 hover:bg-customOrange transition-colors duration-300 text-sm">
                  {post.buttonText}
                </button>
              </div>
            </a>
          ))}
        </div>

        <div className='container max-w-6xl  mx-auto space-y-6 sm:space-y-12 mt-4'>
          {/* First Blog Post */}
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 text-black shadow-lg"
          >
            <img
              src={zodiac}
              alt="Uphaar Theatre Tragedy"
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5 bg-white rounded-r">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline text-customBrown">
                Zodiac Professions: Explore the Connection with Numerology
              </h3>
              <span className="text-xs text-gray-500">February 19, 2021</span>
              <p>
                Ever wondered how our zodiac signs might influence our career paths and professional endeavors? The stars, through astrological signs, are believed to offer insights into the most suitable professions for individuals.
              </p>
              <button className="bg-customBrown text-white font-semibold py-2 px-4 rounded-full mt-3 hover:bg-customOrange transition-colors duration-300 text-sm">
                Read More
              </button>
            </div>
          </a>

          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {blogsData.slice(3, 6).map((post, index) => (
              <a
                key={index}
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline text-black shadow-lg bg-white rounded"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded-t h-44 bg-gray-500"
                  src={post.imgSrc}
                  alt={post.title}
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-customBrown">
                    {post.title}
                  </h3>
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <p>{post.description}</p>
                  <button className="bg-customBrown text-white font-semibold py-2 px-4 rounded-full mt-3 hover:bg-customOrange transition-colors duration-300 text-sm">
                    {post.buttonText}
                  </button>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className='container max-w-6xl mx-auto space-y-6 sm:space-y-12 mt-4'>
          {/* First Blog Post */}
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 text-black shadow-lg"
          >
            <img
              src={dhoni}
              alt="Uphaar Theatre Tragedy"
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5 bg-white rounded-r">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline text-customBrown">
                M S DHONI 7,2,6: A Numerical Journey of Destiny and Success
              </h3>
              <span className="text-xs text-gray-500">February 19, 2021</span>
              <p>
                M S Dhoni, the iconic cricketing figure, was born on 7th July 1981. His life is intricately woven with the threads of numbers, especially 7, 2, and 6. This fascinating connection has not only influenced his personal choices but has also left an indelible mark on his extraordinary career.
              </p>
              <button className="bg-customBrown text-white font-semibold py-2 px-4 rounded-full mt-3 hover:bg-customOrange transition-colors duration-300 text-sm">
                Read More
              </button>
            </div>
          </a>

          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {blogsData.slice(6, 9).map((post, index) => (
              <a
                key={index}
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline text-black shadow-lg bg-white rounded"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded-t h-44 bg-gray-500"
                  src={post.imgSrc}
                  alt={post.title}
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-customBrown">
                    {post.title}
                  </h3>
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <p>{post.description}</p>
                  <button className="bg-customBrown text-white font-semibold py-2 px-4 rounded-full mt-3 hover:bg-customOrange transition-colors duration-300 text-sm">
                    {post.buttonText}
                  </button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
