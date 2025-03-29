
import React, { useEffect, useState } from 'react';
import { Instagram } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Mock data that better represents the gourmande_is_50s Instagram account
const instagramPosts = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
    caption: 'Our signature vintage plating style #50sstyle #foodart',
    likes: 156,
    date: '2 days ago'
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=710&q=80',
    caption: 'Classic desserts with a modern twist #50sdessert #vintagestyle',
    likes: 203,
    date: '3 days ago'
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    caption: 'Our 50s-inspired milkshake selection #vintagemilkshakes #50sdiner',
    likes: 178,
    date: '1 week ago'
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1525640788966-69bdb028aa73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    caption: 'Retro diner vibes in our kitchen #50skitchen #vintagestyle',
    likes: 134,
    date: '2 weeks ago'
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1370&q=80',
    caption: 'Friday night classics at Gourmande #50sfood #comfortfood',
    likes: 221,
    date: '3 weeks ago'
  },
  {
    id: 6,
    imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80',
    caption: 'Our vintage-inspired ice cream sundaes #classicsundae #50sdessert',
    likes: 189,
    date: '1 month ago'
  }
];

const InstagramFeed = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(instagramPosts.length / 3));
      }, 3000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay]);

  return (
    <section className="py-20 px-6 bg-rose-50 dark:bg-midnight-900">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="flex items-center gap-2 mb-3">
            <Instagram className="h-6 w-6 text-rose-500" />
            <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white">
              Follow Us on Instagram
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            Stay updated with our latest 50s-inspired culinary creations, vintage events, and nostalgic moments 
            by following us on Instagram.
          </p>
          <a 
            href="https://www.instagram.com/gourmande_is_50s/" 
            target="_blank"
            rel="noopener noreferrer" 
            className="mt-4 inline-flex items-center text-rose-500 hover:text-rose-600 font-medium"
          >
            @gourmande_is_50s
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </div>

        <div className="relative px-4 sm:px-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {instagramPosts.map((post) => (
                <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-xl bg-white dark:bg-midnight-800 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="relative aspect-square overflow-hidden">
                        <img 
                          src={post.imageUrl} 
                          alt={post.caption} 
                          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-2 mb-2">
                          {post.caption}
                        </p>
                        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                          <span>{post.likes} likes</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -left-4 top-1/2 -translate-y-1/2">
              <CarouselPrevious className="bg-white/80 dark:bg-midnight-800/80 shadow-md" />
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2">
              <CarouselNext className="bg-white/80 dark:bg-midnight-800/80 shadow-md" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
