"use client";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    text: "Vår och åt lunch med goda vänner i vår lilla matgrupp. Mycket nöjda med maten som bestod av dagens lunch för mig och hamburgertallrik för övriga. Rekommenderas!",
    author: "Mats Planell",
  },
  {
    id: 2,
    text: "Amazing food and great service! The ambiance was perfect for a family dinner. Will definitely come back again.",
    author: "John Doe",
  },
  {
    id: 3,
    text: "The best dining experience I've had in a long time. The staff was very attentive and the food was delicious.",
    author: "Jane Smith",
  },
];

const CustomerReviewCarousel = () => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

   
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000); 

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [api]);

  useEffect(() => {
    if (!api) return;

    
    api.on("select", () => {
      const totalSlides = reviews.length;
      const selectedIndex = api.selectedScrollSnap();

      // If at the last slide, reset to the first slide without animation
      if (selectedIndex === totalSlides - 1) {
        setTimeout(() => {
          api.scrollTo(0, true); // Instant scroll to the first slide
        }, 3000); // Wait for the transition to complete
      }

      // If at the first slide and going backward, reset to the last slide without animation
      if (selectedIndex === 0 && api.canScrollPrev()) {
        setTimeout(() => {
          api.scrollTo(totalSlides - 1, true); // Instant scroll to the last slide
        }, 3000); // Wait for the transition to complete
      }

      setCurrent(selectedIndex);
    });
  }, [api]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black/30 p-6 rounded-lg shadow-lg w-full flex flex-col justify-center items-center"
    >
      <h2 className="text-4xl font-bold text-center mb-4 text-yellow-200">
        SEE WHAT OUR CUSTOMERS SAY!
      </h2>
      <Carousel className="w-full max-w-md" setApi={setApi}>
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem key={review.id}>
              <div className="text-center">
                <p className="text-white text-2xl">{review.text}</p>
                <p className="text-gray-500 mt-4">- {review.author}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex gap-2 mt-4">
        {reviews.map((_, index) => (
          <Button
            key={index}
            className={`w-2 h-2 rounded-full ${
              current === index ? "bg-yellow-200" : "bg-gray-500"
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default CustomerReviewCarousel;
