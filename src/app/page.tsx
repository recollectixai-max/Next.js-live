import { HeroSection } from "@/components/ui/HeroSection";
import InteractiveBentoGrid from "@/components/ui/InteractiveBentoGrid";
import { CountUp } from "@/components/ui/CountUp";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import SpotlightCarousel from "@/components/SpotlightCarousel";
import GraphicsShowcase from "@/components/GraphicsShowcase";
import BrandLogoShowcase from "@/components/BrandLogoShowcase";
import CurvedGallerySection from "@/components/CurvedGallerySection";
import PhoneMarqueeShowcase from "@/components/PhoneMarqueeShowcase";
import ShowcaseHero from "@/components/component";

export default function Home() {

  const items = [
    { id: 5, brand: "Baba Falooda", logo: "./baba-logo.png", mediaType: "video", media: "./baba-reel.mp4" },
    { id: 1, brand: "Tarboush", logo: "./tarboush-logo.png", mediaType: "video", media: "./tarboush-reel.mp4" },
    { id: 2, brand: "Mak Cakes", logo: "./mak-logo.png", mediaType: "video", media: "./mak-reel.mp4" },
    { id: 3, brand: "Benita Rolls", logo: "./benita-logo.png", mediaType: "video", media: "./benita-reel-1.mp4" },
    { id: 4, brand: "Timepass Chai", logo: "./tp-logo.png", mediaType: "video", media: "./tp-reel.mp4" },
    { id: 6, brand: "Benita Rolls", logo: "./benita-logo.png", mediaType: "video", media: "./benita-reel-2.mp4" },
  ];

  const clients = [
    { id: "brand-1", name: "Brand 1", src: "/media/brand.png" },
    { id: "brand-2", name: "Brand 2", src: "/media/brand_2.png" },
    { id: "brand-3", name: "Brand 3", src: "/media/brand_3.png" },
    { id: "brand-4", name: "Brand 4", src: "/media/brand_4.png" },
    { id: "brand-5", name: "Brand 5", src: "/media/brand_5.png" },
    { id: "brand-6", name: "Brand 6", src: "/media/brand_6.png" },
    { id: "brand-7", name: "Brand 7", src: "/media/brand_7.png" },
    { id: "brand-8", name: "Brand 8", src: "/media/brand_8.png" },
    { id: "brand-9", name: "Brand 9", src: "/media/brand_9.png" },
  ];

  const graphics = [
    { id: "graphics-1", src: "/gd1.jpg", alt: "Dales Eden brand campaign artwork" },
    { id: "graphics-2", src: "/gd2.jpg", alt: "Brand campaign graphic design" },
    { id: "graphics-3", src: "/gd3.jpg", alt: "Anichee campaign graphic" },
    { id: "graphics-4", src: "/gd4.jpg", alt: "Bakery campaign artwork" },
    { id: "graphics-5", src: "/gd5.jpg", alt: "Campaign creative artwork" },
    { id: "graphics-6", src: "/gd6.jpg", alt: "Creative brand campaign" },
    { id: "graphics-7", src: "/gd7.jpg", alt: "Brand promotional graphic" },
    { id: "graphics-8", src: "/gd8.jpg", alt: "Campaign visual design" },
  ];

  const viralreels = [
    { id: "reel-1", src: "/eden-v.mp4", alt: "Tarboush campaign reel", mediaType: "video" as const, viewsText: "12.7M Views" },
    { id: "reel-2", src: "/thop-v.mp4", alt: "Mak Cakes campaign reel", mediaType: "video" as const, viewsText: "2M Views" },
    { id: "reel-3", src: "/evo-v.mp4", alt: "Benita Rolls campaign reel", mediaType: "video" as const, viewsText: "97K Views" },
    { id: "reel-4", src: "/cremure-v.mp4", alt: "Timepass Chai campaign reel", mediaType: "video" as const, viewsText: "310K Views" },
    { id: "reel-5", src: "/ideal-f.mp4", alt: "Baba Falooda campaign reel", mediaType: "video" as const, viewsText: "97.3K Views" },
  ];

  const curvedreels = [
    { id: "reel-1", src: "/cremure-a.mp4", alt: "Tarboush campaign reel", mediaType: "video" as const },
    { id: "reel-5", src: "/f2.mp4", alt: "Baba Falooda campaign reel", mediaType: "video" as const },
    { id: "reel-2", src: "/punjabi-a.mp4", alt: "Mak Cakes campaign reel", mediaType: "video" as const },
    { id: "reel-4", src: "/f1.mp4", alt: "Timepass Chai campaign reel", mediaType: "video" as const },
    { id: "reel-3", src: "/evo-a.mp4", alt: "Benita Rolls campaign reel", mediaType: "video" as const },
    { id: "reel-6", src: "/f3.mp4", alt: "Benita Rolls campaign reel", mediaType: "video" as const },
  ];

  return (
    <div className="bg-white">
      <HeroSection />

      <PhoneMarqueeShowcase
        images={viralreels}
        heading="From Reel to Real Reach"
        subtitle="Short-form stories. Long-lasting impressions."
        className="bg-white text-gray-900 pb-8"
      />

      <BrandLogoShowcase
        logos={clients}
        heading="Trusted by industry leaders"
        subtitle="Creative collaborations across industries."
        className="bg-white text-gray-900 pb-8"
      />

      <div className="text-center pb-8">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
          Visuals That Speak
        </h2>
        <GraphicsShowcase
          posts={graphics}
          ariaLabel="Selected Recollectix campaign graphics"
          className=""
        />
      </div>


      <ShowcaseHero
        slides={[
          { video: "/ideal-f.mp4", gradient: "from-[#5b4a8a] via-[#4a3a78] to-[#2a2142]", alt: "Ideal Founders reel" },
          { video: "/stomach-f.mp4", gradient: "from-[#7fcbe6] via-[#8fd3ea] to-[#f4a3b8]", alt: "Stomach Founders reel" },
          { video: "/franco-f.mp4", gradient: "from-[#e8899c] via-[#ee9ab0] to-[#cfa0d8]", alt: "Franco Founders reel" },
          { video: "/f4.mp4", gradient: "from-[#e8899c] via-[#ee9ab0] to-[#cfa0d8]", alt: "Munazha Qazi Founders reel" },
          { video: "/f5.mp4", gradient: "from-[#e8899c] via-[#ee9ab0] to-[#cfa0d8]", alt: "TP Chai Founders reel" },
        ]}
      />

      <SpotlightCarousel items={items} interval={4500} title="Our work in spotlight" />

      {/* Intro Section */}
      {/* <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          Connecting Brands with Influencers for Unstoppable Partnerships that Drive Success.
        </h2>
      </section> */}

      <CurvedGallerySection
        images={curvedreels}
        heading="Setting the Scene, Serving the Story"
        subtitle="Where beautiful spaces meet irresistible flavours."
        className="bg-gray-300 text-gray-900 pb-8"
      />

      {/* Services Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-primary">
              OUR SERVICES
            </h2>
          </div>

          <InteractiveBentoGrid />

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              View All Services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stats / Impact with CountUp */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4">
              <div className="text-5xl md:text-6xl font-black mb-2 flex justify-center items-center">
                <CountUp to={4} />M+
              </div>
              <p className="text-blue-100 font-medium">Audience Reached</p>
            </div>
            <div className="p-4">
              <div className="text-5xl md:text-6xl font-black mb-2 flex justify-center items-center">
                <CountUp to={100} />+
              </div>
              <p className="text-blue-100 font-medium">Campaigns</p>
            </div>
            <div className="p-4">
              <div className="text-5xl md:text-6xl font-black mb-2 flex justify-center items-center">
                <CountUp to={1000} separator="," />+
              </div>
              <p className="text-blue-100 font-medium">Influencers</p>
            </div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto mt-12 pt-12 border-t border-white/20">
            <h2 className="text-xl md:text-2xl font-bold leading-tight italic">
              &quot;Successfully managed a network of influencers, delivering custom-tailored campaigns that consistently exceed brand goals.&quot;
            </h2>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
      </section>

 

      {/* Amplifying Brand Reach */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">Our Approach</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Amplifying your brand&apos;s reach
            </h2>
          </div>
          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Recollectix Media, we integrate precision performance media targeting to drive actual objectives and maximize reach like never before.
            </p>
          </div>
        </div>
      </section> */}

      {/* Work Showcase - Sticky Gallery */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            OUR <span className="text-primary">WORK</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we bring brands to life with our influencer network.
          </p>
        </div>
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-black shadow-2xl">
            <video
              src="/media/hero_bg.mp4"
              className="block w-full aspect-video object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </section> */}

      {/* Full Width Team Image */}
      <div className="mb-20 px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center text-gray-900 mb-6">
          OUR <span className="text-primary">TEAM</span>
        </h2>
        <div className="relative mx-auto w-full max-w-7xl h-[240px] sm:h-[350px] md:h-[500px] lg:h-[650px] rounded-2xl md:rounded-3xl overflow-hidden">
          <Image
            src="/media/team_pics/recollectix-team.png"
            alt="Our Team"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* Motto / Call to Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Be the Word of every Mouth
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Our impactful influencer marketing campaigns serve as a powerful catalyst in your digital strategy.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/50"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
