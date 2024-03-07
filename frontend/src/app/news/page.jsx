"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

function NewsPage() {
  const [data, setData] = useState([]);
  //const navigate = useNavigate();

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    try {
      const response = await axios.get("http://localhost:5050/api/projects/latest-news");
      //const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects/latest-news`);
      setData(response.data.articles);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-customGreenStart via-customGreenMiddle to-customGreenEnd">
      <Navbar />
      <h1 className="text-white text-3xl ml-40 animate-rotate-x animate-twice animate-duration-[6000ms]">News</h1>
      <div className="news-container flex flex-wrap justify-center items-center">
        {data.map((item) => (
          <div className="card text-justify inline-block m-8 h-450 w-400 overflow-hidden rounded bg-cream hover:shadow-lg" key={item._id}>
            <div className="row p-4 ">
             <a href={item.url} target="_blank" >
             <img 
              src={item.urlToImage || '/nophoto.png'}
              alt={item.title || 'Noticia'} 
              className="inline w-full h-44 object-cover rounded"
              />
             </a>
              
            
      </div>
      <div className="p-4 mb-6">
        <p className="mb-1">{item.title}</p>
        <p>{item.description}</p>
        <a href={item.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block overflow-hidden overflow-ellipsis whitespace-nowrap text-blue-600 mb-2.5"
        >
        {item.url}
        </a>
      </div>
    </div>
        ))}
        <Footer />
      </div>

    </div>
  );
}

export default NewsPage;