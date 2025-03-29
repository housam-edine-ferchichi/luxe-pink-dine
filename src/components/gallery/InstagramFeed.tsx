
import React, { useEffect, useState } from 'react';
import { Instagram } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Mock data for Instagram posts
const instagramPosts = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=780&q=80',
    caption: 'Our signature dish - Beef Wellington with truffle sauce #finedining',
    likes: 156,
    date: '2 days ago'
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
    caption: 'Fresh seafood platter for the weekend #seafood #weekend',
    likes: 203,
    date: '3 days ago'
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    caption: 'Our new cocktail menu is now available! #cocktails',
    likes: 178,
    date: '1 week ago'
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    caption: 'Behind the scenes in our kitchen #cheflife',
    likes: 134,
    date: '2 weeks ago'
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    caption: 'Friday night vibes at L\'Élégance #weekendvibes',
    likes: 221,
    date: '3 weeks ago'
  },
  {
    id: 6,
    imageUrl: 'https://images.unsplash.com/photo-1536489885086-1f21af39f569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    caption: 'Special dessert for tonight #sweettooth',
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
            Stay updated with our latest culinary creations, events, and behind-the-scenes moments 
            by following us on Instagram.
          </p>
          <a 
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer" 
            className="mt-4 inline-flex items-center text-rose-500 hover:text-rose-600 font-medium"
          >
            @lelegance_restaurant
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
