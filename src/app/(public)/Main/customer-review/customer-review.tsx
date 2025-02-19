"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    if (!api) return;

    // Auto-swiping logic
    const interval = setInterval(() => {
      setIsSliding(true);

      if (current === reviews.length - 1) {
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
    }, 6000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [api, current]);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      setIsSliding(false);
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
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isSliding ? 0 : 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-white text-2xl">{review.text}</p>
                  <p className="text-gray-500 mt-4">- {review.author}</p>
                </motion.div>
              </AnimatePresence>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-slate-600 text-white" />
        <CarouselNext className="bg-slate-600 text-white" />
      </Carousel>
      <div className="flex gap-2 mt-4">
        {reviews.map((_, index) => (
          <Button
            key={index}
            className={`w-2 h-2 rounded-full ${
              current === index ? "bg-yellow-200" : "bg-gray-500"
            }`}
            onClick={() => {
              setIsSliding(true);
              api?.scrollTo(index);
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default CustomerReviewCarousel;
