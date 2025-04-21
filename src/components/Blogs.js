// Blogs.js
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './styles/Blogs.css';

const blogs = [
  { title: 'Blog 1', description: 'Yet to add', link: 'https://yourblog.com/blog1', image: 'path-to-image/blog1.jpg' },
];

const Blogs = () => {
  const scrollContainerRef = useRef(null);
  const [canScroll, setCanScroll] = useState(false);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScroll(scrollWidth > clientWidth);
    }
  };

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 320, behavior: 'smooth' });
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, []);

  return (
    <section className="blog-section" id="blogs">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        My Blogs
      </motion.h1>

      {canScroll && <button className="scroll-btn scroll-btn-left" onClick={scrollLeft}>‹</button>}

      <div className="blog-cards-wrapper">
        <div className={`blog-cards-container ${canScroll ? 'fade-mask' : ''}`} ref={scrollContainerRef}>
          {blogs.map((blog, index) => (
            <motion.div
              className="blog-card"
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
            >
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
              <a href={blog.link} target="_blank" rel="noopener noreferrer" className="read-blog">Read Blog</a>
            </motion.div>
          ))}
        </div>
      </div>

      {canScroll && <button className="scroll-btn scroll-btn-right" onClick={scrollRight}>›</button>}
    </section>
  );
};

export default Blogs;