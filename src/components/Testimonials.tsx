import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Elevate Global Ventures made selling my home incredibly easy. They provided a fair offer and handled everything professionally. I couldn't be happier with the experience!",
    author: "Sarah Anderson",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5
  },
  {
    id: 2,
    content: "I was facing foreclosure and needed to sell quickly. They gave me a fair cash offer and closed in just 10 days. Their team was supportive throughout the entire process.",
    author: "Michael Thompson",
    location: "San Diego, CA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5
  },
  {
    id: 3,
    content: "The process was seamless from start to finish. They were transparent about everything and helped me avoid foreclosure. I'm grateful for their professional service.",
    author: "Emily Rodriguez",
    location: "Phoenix, AZ",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const autoPlayTimer = setInterval(nextSlide, 5000);
    return () => clearInterval(autoPlayTimer);
  }, []);

  return (
    <div className="bg-navy-50 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-navy-900">What Our Clients Say</h2>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-navy-50 transition-all duration-200 focus:outline-none"
            disabled={isAnimating}
          >
            <ChevronLeft className="h-6 w-6 text-navy-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-navy-50 transition-all duration-200 focus:outline-none"
            disabled={isAnimating}
          >
            <ChevronRight className="h-6 w-6 text-navy-600" />
          </button>

          {/* Testimonials Carousel */}
          <div className="relative h-[400px] mx-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute w-full transition-all duration-500 ease-in-out ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0'
                    : index < currentIndex
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-white rounded-xl shadow-xl p-8 mx-auto max-w-2xl">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-navy-500 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-navy-700 text-lg italic mb-8">"{testimonial.content}"</p>
                  
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="h-14 w-14 rounded-full object-cover mr-4 border-2 border-navy-500"
                    />
                    <div>
                      <h4 className="font-semibold text-lg text-navy-900">{testimonial.author}</h4>
                      <p className="text-navy-600">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-navy-600 w-6' : 'bg-navy-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};