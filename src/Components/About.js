import React from "react";
import mainpagephoto from "../Image/mainpagephoto.png";
import { Link } from "react-router-dom";
import Chatbot from "./Chatbot";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Chatbot />

      <div className="relative w-full h-[420px] flex items-center">
        <Chatbot />
        <img
          src={mainpagephoto}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background"
          loading="lazy"
        />
        <div className="relative z-10 flex flex-col items-start justify-start md:justify-center h-full text-left text-white px-8 md:px-16 lg:px-24 pt-8 md:pb-20 font-serif">
          <h1 className="text-3xl md:text-2xl lg:text-5xl font-bold mb-4 md:mb-6 leading-snug">
            <span className="block text-yellow-500 mb-2">Get To Know Us</span>
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
          <h2 className="text-md md:text-xl lg:text-3xl font-bold text-yellow-600">
            Cattel HealthCare Consultation
          </h2>
          <p className="md:text-md lg:text-lg leading-relaxed max-w-4xl mx-auto p-2">
            MooRopan India Pvt. Ltd. was established with the motive of
            "Gau-swasthayam Rakshatu" in May 2023. We provide cattle healthcare
            aid/ devices, services and consultations pan India.
          </p>
        </div>
        <div className="flex-1 mb-4 md:mb-0">
  <div className="relative w-full max-w-xl mx-auto border-4 border-yellow-600 rounded-lg shadow-xl overflow-hidden">
    <a
      href="https://youtu.be/4QqkWmI_kX0?si=sr8dN2R8xWMuIe6g"
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full h-full"
    >
      <div className="relative w-full h-60 md:h-72 lg:h-80 bg-gray-200 rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/4QqkWmI_kX0"
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

      {/* Scientific Numerology Section */}
      <div className="relative w-full h-full flex items-center">
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-left  px-6 md:px-16 lg:px-24 pb-10 sm:pb-2 md:pd-4 font-serif">
          <h1 className="text-md md:text-xl lg:text-3xl font-bold ml-2 leading-snug">
            <span className="block  mb-2 text-yellow-600">Our Products </span>
          </h1>
          <p className="md:text-md lg:text-lg leading-relaxed  p-2">
            Our products facilitate better management of herd. Our affordable
            products reduce cow morbidity, enhance milk quantity and quality.
          </p>
          <p className="text-md sm:text-sm md:text-base tracking-wide mb-4">
            {/* Content goes here */}
          </p>
        </div>
      </div>

      {/* Predictions Numerology Section */}
      <div className="relative w-full h-full flex items-start">
        {/* Content Section */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-left px-6 md:px-16 lg:px-24 pb-10 sm:pb-2 md:pb-4 font-serif w-full md:w-2/3 lg:w-3/4">
          <h1 className="text-md md:text-xl lg:text-3xl font-bold ml-2 leading-snug">
            <span className="block mb-2 text-yellow-600">MastiSense Cure </span>
          </h1>
          <p className="md:text-md lg:text-lg leading-relaxed max-w-4xl p-2">
            <p className="md:text-md lg:text-lg leading-relaxed max-w-4xl p-2">
              Mastitis is udder inflammation caused by bacterial infection.{" "}
              <span className="block mb-2">
                Such infection results in breaching of blood milk barrier and
                changes the composition of milk which can be analyzed using
                sensors.
              </span>
            </p>
            <span className="block mb-2">
              • Highlight predictions related to marriage, politics, elections,
              business, and various life aspects
            </span>
            <span className="block mb-2">
              • Showcase the significant predictions that made headlines, such
              as the 2011 Cricket World Cup and the 2012 T-20 World Cup
              predictions featured in "LOKSHAHI VARTA" and "LOKMAT."
            </span>
            <span className="block mb-2">
              • Mention the prediction accuracy for the T-20 World Cup 2014
              featured in "NAVA-BHARAT."
            </span>
            <span className="block mb-2">
              • 2023 Predictions Come True: A Year of Surprises and
              Confirmations!
            </span>
          </p>
          <p className="md:text-md lg:text-lg leading-relaxed max-w-4xl p-2">
            • Dr. Messhram shares his annual predictions on his YouTube channel,
            offering insightful and thought-provoking analyses. To witness his
            remarkable predictive abilities, viewers can access his previous
            predictions on his YouTube videos, showcasing his expertise in
            numerology."
          </p>
        </div>
      </div>

      {/*Client  Section*/}
      <div className="relative w-full h-full flex items-center">
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-left  px-6 md:px-16 lg:px-24 pb-10 sm:pb-2 md:pd-4 font-serif">
          <h1 className="text-md md:text-xl lg:text-3xl font-bold ml-2 leading-snug">
            <span className="block  mb-2 text-yellow-600">
              Notable Clients: Trusted by the Best
            </span>
          </h1>
          <p className="md:text-md lg:text-lg leading-relaxed p-2">
            Dr. Messhram has an impressive clientele, which includes notable
            figures from the sports, entertainment industry and political
            arenas.
          </p>
          <p className="md:text-md lg:text-lg leading-relaxed p-2">
            IPL and Indian Cricketers like Ramandeep Singh, Karn Sharma , Nehal
            Wadhera , Naman Dhir and Umesh Yadav, who changed their jersey
            number after consulting Dr. Messhram, Other many domestic athletes
            along with Gujarat Giants Pro Kabbaddi League players are among
            those who have benefitted from his guidance.
            <span className="block mb-2">
              Renowned figures in Indian politics, such as Mrs. Surekhatai
              Thakre, Santosh Mahatme and Suresh Deshmukh, have also sought his
              counsel, alongside many other politicians.
            </span>
            <span className="block mb-2">
              Bollywood actors including Nishigandha Wadh, Bhuushan Kulkarni and
              other TV actors are also taking guidance from Dr Sumiit.
            </span>
          </p>
        </div>
      </div>

      {/*       <section className="text-gray-600 body-font bg-gradient-to-r from-yellow-500 to-amber-950 py-3">
        <div className="container px-6 py-10 mx-auto font-serif">
          <div className="flex flex-wrap justify-center text-center">
            <div className="p-4 w-full sm:w-1/4">
              <div className="flex flex-col items-center justify-center">
                <CountUp target={2700} duration={1000} />
                <p className="leading-relaxed text-gray-200 text-lg font-semibold">
                  Users
                </p>
              </div>
            </div>
            <div className="p-4 w-full sm:w-1/4">
              <div className="flex flex-col items-center justify-center">
                <CountUp target={248} duration={1000} />
                <p className="leading-relaxed text-gray-200 text-lg font-semibold">
                  Subscribers
                </p>
              </div>
            </div>
            <div className="p-4 w-full sm:w-1/4">
              <div className="flex flex-col items-center justify-center">
                <CountUp target={35} duration={1000} />
                <p className="leading-relaxed text-gray-200 text-lg font-semibold">
                  Downloads
                </p>
              </div>
            </div>
            <div className="p-4 w-full sm:w-1/4">
              <div className="flex flex-col items-center justify-center">
                <CountUp target={4} duration={1000} />
                <p className="leading-relaxed text-gray-200 text-lg font-semibold">
                  Products
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/*Beyond Numerology Section*/}
      <div className="relative w-full h-full flex items-center pt-5">
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-left  px-6 md:px-16 lg:px-24 pb-10 sm:pb-2 md:pd-4 font-serif">
          <h1 className="text-md md:text-xl lg:text-3xl font-bold ml-2 leading-snug">
            <span className="block  mb-2 text-yellow-600">
              Beyond Numerology: More than just Numbers
            </span>
          </h1>
          <p className="md:text-md lg:text-lg leading-relaxed max-w-4xl p-2">
            Dr. Sumiit Messhram’s diverse talents extend beyond his scientific
            approach to numerology. As a poet, he expresses his creativity and
            depth of thought through the art of written verse. His athletic
            prowess is evident from his representation of his college, district,
            and zone in cricket, showcasing his dedication and skill in sports.
            Additionally, his role as a dedicated social worker highlights his
            commitment to community service. He is the visionary behind the
            'MAVILAL' Educational Trust, which underscores his passion for
            fostering education and personal development.
          </p>
          <p className="md:text-md lg:text-lg leading-relaxed max-w-4xl p-2">
            Dr. Messhram's talents extend far beyond numerology. A poet, skilled
            sportsperson, and experienced sports physio, he has worked with
            elite teams in high-profile events, including the Legends League
            Cricket, ICC World Cricket League, BCCI domestic, and IPL.
          </p>
        </div>
      </div>

      {/*Media Section*/}
      <div className="relative w-full h-full flex items-center ">
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-left  px-6 md:px-16 lg:px-24 pb-10 sm:pb-2 md:pd-4 font-serif">
          <h1 className="text-md md:text-xl lg:text-3xl font-bold ml-2 leading-snug">
            <span className="block  mb-2 text-yellow-600">In the Media</span>
          </h1>
          <p className="md:text-md lg:text-lg leading-relaxed  p-2">
            <span className="block mb-2">
              • Showcase the media coverage, including articles in "LOKSHAHI
              VARTA," "LOKMAT," and "NAVA-BHARAT.
            </span>
            <span className="block mb-2">
              • Mention the exclusive interview on radio_mgiri 90.4 in December
              2013.
            </span>
            <span className="block mb-2">
              • Radio Wardha 90.8 and few podcasts providing listeners with
              unique insights.
            </span>
            <span className="block mb-2">
              • A seasoned cricketer, Dr. Messhram has proudly represented his
              college, district, and zone.
            </span>
          </p>
        </div>
      </div>

      {/*Consultation Section*/}
      <div className="relative w-full h-full flex items-center bg-gradient-to-r p-5 from-amber-950 to-red-600">
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-left px-6 md:px-16 lg:px-24 pb-10 sm:pb-4 md:pb-6 font-serif">
          <h1 className="text-md md:text-xl lg:text-4xl font-bold text-white leading-tight mb-4">
            <span className="block mb-2 text-yellow-300">
              Experience the Magic of Numerology
            </span>
          </h1>
          <p className="md:text-md lg:text-lg leading-relaxed text-white mb-6">
            <span className="block mb-4">
              "Are you ready to transform your life? Dr. Sumiit Messhram invites
              you to explore the power of numerology and unlock the potential
              for positive change."
            </span>
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-transform hover:scale-105"
            >
              Get Your Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
