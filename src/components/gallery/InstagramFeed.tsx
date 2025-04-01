
import React, { useEffect, useState } from 'react';
import { Instagram } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

// Data representing real posts from @gourmande_is_50s Instagram account
const instagramPosts = [
  {
    id: 1,
    imageUrl: 'https://sjdunwlftwdzeetlxpxj.supabase.co/storage/v1/object/public/images//483936436_18487917181058803_7771839338171818453_n.webp',
    caption: "Jade de la roulotte 𝑮𝒐𝒖𝒓𝒎𝒂𝒏𝒅𝒆 𝒊𝒔 𝟓𝟎'𝒔 à Mouans-Sartoux a un nouveau projet ! Ouvrir un nouveau palais de la gourmandise où l'on pourra : Déguster plus de gourmandises Faire des ateliers pâtisserie avec les enfants et les adultes, Créer des événements sucrés Et si vous lui donniez un coup de pouce ?",
    likes: 83,
    date: '13 Mars 2025'
  },
  {
    id: 2,
    imageUrl: 'https://sjdunwlftwdzeetlxpxj.supabase.co/storage/v1/object/public/images//484984049_17905482798128083_6103084717711498149_n.jpg',
    caption: '📅 Samedi 05 avril 2025🕙 De 10h à 17h (sans réservation)📍 La Roulotte de Gourmande is 50’s – Parking Auchan à Mouans-Sartoux',
    likes: 62,
    date: '15 Mars 2025'
  },
  {
    id: 3,
    imageUrl: 'https://sjdunwlftwdzeetlxpxj.supabase.co/storage/v1/object/public/images//483459635_17949787118941329_1338514172780654550_n.jpg',
    caption: 'Joyeux premier anniversaire victoria 🫶🏼',
    likes: 57,
    date: '10 Mars 2025'
  },
  {
    id: 4,
    imageUrl: 'https://sjdunwlftwdzeetlxpxj.supabase.co/storage/v1/object/public/images//480325040_17947144496941329_7830754025186764662_n.jpg',
    caption: 'Un joyeux anniversaire @en_vert_et_rouge !! Mon écolo favorite !!!! Un gâteau bien gourmand fidèle à son image !!! Bisous ma copine !!!!',
    likes: 87,
    date: '21 février 2025'
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    caption: 'Layer cake sur le thème des black pink pour l’anniversaire de Callie.',
    likes: 51,
    date: '2 weeks ago'
  },
  {
    id: 6,
    imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80',
    caption: 'Our homemade ice cream sundae with chocolate sauce and sprinkles #sundaefunday #vintagedessert',
    likes: 198,
    date: '3 weeks ago'
  },
  {
    id: 7,
    imageUrl: 'https://images.unsplash.com/photo-1536353284924-9220c464e262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    caption: 'Our pink ladies enjoying their milkshakes after roller skating #pinkladies #50sfashion',
    likes: 267,
    date: '1 month ago'
  },
  {
    id: 8,
    imageUrl: 'https://images.unsplash.com/photo-1514979859329-23886fc32229?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    caption: 'Classic malt shop vibes - our vintage counter and stools #retrodesign #50sdiner',
    likes: 221,
    date: '1 month ago'
  }
];

const InstagramFeed = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading of Instagram images
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
                        {loading ? (
                          <Skeleton className="w-full h-full" />
                        ) : (
                          <img 
                            src={post.imageUrl} 
                            alt={post.caption} 
                            className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                          />
                        )}
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
