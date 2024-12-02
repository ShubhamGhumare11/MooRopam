import React from 'react'
import Chatbot from './Chatbot'
import herosection from '../Image/herosection.jpg'

const Numerology = () => {
  return (
    <div >
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
             Unevil the Mysteries
            </span>
            <span className="block text-yellow-500"> of Your Destiny</span>
          </h1>
          {/* <div className="mt-1 mr-1">
            <Link to="/services" className="px-8 py-4 border text-sm md:text-base font-semibold rounded-full hover:bg-amber-400 hover:text-black transition duration-300">
              Explore Services &rarr;
            </Link>
          </div> */}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mt-4 md:mt-8 px-4 md:px-8 lg:px-12  ">
        <div className="flex-1 p-4 sm:p-6 md:p-10 lg:p-12 mb-10 font-serif">
          <h2 className="text-md md:text-xl lg:text-3xl font-bold text-yellow-600 ">
            What is Numerology?
          </h2>
          <p className="md:text-md lg:text-lg leading-relaxed max-w-4xl mx-auto p-2">
            At its core, numerology is the study of the symbolism and significance of numbers. It posits that numbers can carry inherent qualities and vibrations that influence our personalities, destinies, and life events. Numerologists believe that by understanding the numerical patterns present in a person’s life, they can gain insights into their character, purpose, and potential future.

            Numerology assigns meaning to numbers from 1 to 9 and also includes “master numbers” like 11, 22, and 33, which are not reduced to a single digit. Each number is associated with specific traits and energies. The practice involves analyzing a person’s name and birthdate to derive core numbers, such as the Life Path Number and Expression Number, which offer profound insights into one’s life journey and purpose.
          </p>
        </div>
        <div className="flex-1 mb-4 md:mb-0">
          <div className="relative w-full max-w-xl mx-auto border-4 border-yellow-600 rounded-lg shadow-xl overflow-hidden">
            <a
              href="https://youtu.be/iuj8OjOCcco?si=pdHvWvPqh1hfb9Ko"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <div className="relative w-full h-60 md:h-72 lg:h-80 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full object-cover"
                  src="https://www.youtube.com/embed/iuj8OjOCcco"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="relative w-full h-full flex items-center">
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-left  px-6 md:px-16 lg:px-24 pb-10 sm:pb-2 md:pd-4 font-serif">

          <div className="container mx-auto px-6 py-3 sm:px-8 lg:px-16 max-w-7xl text-center">
            <h2 className="text-4xl font-bold text-customBrown">
              A Brief History of Numerology
            </h2>

          </div>
          <p className="md:text-md lg:text-lg leading-relaxed  p-2">
            Numerology’s origins are shrouded in the mists of time, making it difficult to pinpoint its exact birthplace. However, it is believed to have ancient roots in various cultures, including Babylon, Egypt, Greece, and China. The Greek philosopher Pythagoras, known for the Pythagorean Theorem, is often credited with formalizing numerology in its current form around 2,500 years ago.

            Pythagoras believed that numbers held the key to understanding the universe and the human soul. He and his followers explored the mystical and mathematical properties of numbers, laying the foundation for the numerology we know today.
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://www.youtube.com/@AuspiciousNumerology"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-transform hover:scale-105"
            >
              Check out our YouTube Channel
            </a>
          </div>
        </div>
      </div>


      <div className="relative w-full h-full flex flex-col items-center text-center py-7 px-6 md:px-10 lg:px-20 mt-12 font-serif bg-center mb-6 bg-yellow-100">
        <div className="relative z-10 flex flex-col items-start justify-start h-full text-left px-6 md:px-16 lg:px-24 pb-10 sm:pb-2 md:pd-4 font-serif">
          <h1 className="text-md md:text-xl lg:text-3xl font-bold leading-snug">
            <span className="block mb-2 text-yellow-600">Types of Numerology</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Pythagorean Numerology:",
              description:
                "Based on Pythagoras’s teachings. Uses a person’s birthdate and name to calculate core numbers.   Focuses on the Life Path Number, Expression Number, and other key numerological aspects.",
            },
            {
              title: "Chaldean Numerology:",
              description:
                "Originated in ancient Babylon. Assigns numerical values to letters of the alphabet. Often used for name analysis and determining the vibrations associated with names.",
            },
            {
              title: "Kabbalah Numerology:",
              description:
                "Rooted in Jewish mysticism (Kabbalah). Applies mystical meanings to numbers and their interactions. Seeks to uncover spiritual insights and connections.",
            },
            {
              title: "Chinese Numerology:",
              description:
                "Tied to Chinese culture and philosophy. Emphasizes the symbolism and significance of numbers in various aspects of life. Commonly used in Chinese astrology and Feng Shui.",
            },
            {
              title: "Indian Numerology:",
              description:
                "Derived from ancient Indian scriptures, including the Vedas. Integrates numerology with astrology. Uses birthdates, names, and planetary positions to provide insights.",
            },
            {
              title: "Western Numerology:",
              description:
                "An umbrella term for various numerological systems in the Western world. Often based on Pythagorean principles. Popularized in the West through books and publications.",
            },
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="block max-w-sm p-4 bg-white border border-yellow-600 rounded-lg shadow transform hover:scale-105 transition-transform duration-300 ease-in-out min-w-[16rem] flex-grow"
            >
              <h3 className="text-2xl font-semibold mt-2 text-customBrown">
                {item.title}
              </h3>
              <p className="font-normal text-black mt-2">{item.description}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="relative w-full h-full flex flex-col items-center text-center px-6 md:px-16 lg:px-24 py-10 font-serif ">

        <div className="container mx-auto px-6 py-3 sm:px-8 lg:px-16 max-w-7xl text-center">
          <h2 className="text-4xl font-bold text-customBrown">
            Benefits Of Numerology
          </h2>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-4">
            {[
              {
                title: "Self-Understanding:",
                description: "Numerology provides insights into your personality, strengths, and weaknesses.",
                subdescription: "It helps you better understand your motivations and inner drives.",
              },
              {
                title: "Spiritual Growth:",
                description: "Many practitioners of numerology find it to be a spiritual journey.",
                subdescription: "It can deepen your connection to the universe and help you explore your spiritual path.",
              },
              {
                title: "Personal Empowerment:",
                description: "Numerology empowers individuals to take control of their lives.",
                subdescription: "It offers a framework for personal development and self-improvement.",
              },
              {
                title: "Holistic Well-being:",
                description: "Numerology considers the mind, body, and spirit as interconnected.",
                subdescription: "It promotes holistic well-being and a balanced approach to life.",
              },
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className="block max-w-lg p-5 bg-white rounded-lg shadow-2xl text-left items-start"
              >
                <h3 className="text-xl font-semibold text-customBrown">{item.title}</h3>
                <div className="mt-2 text-black">
                  <span className="block mb-1 font-normal">{item.description}</span>
                  <span className="block font-normal">{item.subdescription}</span>
                </div>
              </a>
            ))}
          </div>
          <div className="flex flex-col space-y-4">
            {[
              {
                title: "Life Guidance:",
                description: "By calculating your Life Path Number, numerology can reveal your life’s purpose and the path you should follow.",
                subdescription: "It offers guidance on career choices, relationships, and major life decisions.",
              },
              {
                title: "Enhanced Relationships:",
                description: "Numerology can help you understand the dynamics of your relationships, whether personal or professional.",
                subdescription: "It offers insights into compatibility and can lead to healthier, more fulfilling connections.",
              },
              {
                title: "Timing and Planning:",
                description: "Numerology can help you determine auspicious times for important events in your life.",
                subdescription: "It aids in decision-making by revealing the potential outcomes of choices.",
              },
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className="block max-w-lg p-5 bg-white  rounded-lg shadow-2xl text-left items-start "
              >
                <h3 className="text-xl font-semibold text-customBrown">{item.title}</h3>
                <div className="mt-2 text-black">
                  <span className="block mb-1 font-normal">{item.description}</span>
                  <span className="block font-normal">{item.subdescription}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>


    </div>
  )
}

export default Numerology;