import { HeroSection } from "@/components/ui/HeroSection";
import { StickyGallery } from "@/components/ui/StickyGallery";
import InteractiveBentoGrid from "@/components/ui/InteractiveBentoGrid";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";
import { CountUp } from "@/components/ui/CountUp";
import Link from "next/link";
import { ArrowRight, Star, Users, Briefcase, Code, MousePointerClick } from "lucide-react";

export default function Home() {
  const clients = [
    { name: "Brand 1", logo: "/media/brand.png" },
    { name: "Brand 2", logo: "/media/brand_2.png" },
    { name: "Brand 3", logo: "/media/brand_3.png" },
    { name: "Brand 4", logo: "/media/brand_4.png" },
    { name: "Brand 5", logo: "/media/brand_5.png" },
    { name: "Brand 6", logo: "/media/brand_6.png" },
    { name: "Brand 7", logo: "/media/brand_7.png" },
    { name: "Brand 8", logo: "/media/brand_8.png" },
    { name: "Brand 9", logo: "/media/brand_9.png" },
  ];

  const leftVideos = [
    "/media/influencer_clip_2.mp4",
    "/media/influencer_clip_3.mp4",
    "/media/influencer_clip_7.mp4",
  ];

  const rightVideos = [
    "/media/influencer_clip_4.mp4",
    "/media/influencer_clip_5.mp4",
    "/media/influencer_clip_6.mp4",
    "/media/influencer_clip_8.mp4",
  ];

  return (
    <div className="bg-white">
      <HeroSection />

      {/* Client Marquee */}
      <section className="py-12 bg-white border-b border-gray-100">
        <p className="text-center text-sm font-semibold text-gray-400 mb-8 uppercase tracking-widest">Trusted by industry leaders</p>
        <InfiniteMarquee
          items={clients.map((c, i) => (
            <div key={i} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 px-8">
              <img src={c.logo} alt={c.name} className="h-12 md:h-16 object-contain" />
            </div>
          ))}
          speed="normal"
        />
      </section>

      {/* Intro Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          Connecting Brands with Influencers for Unstoppable Partnerships that Drive Success.
        </h2>
      </section>

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
              "Successfully managed a network of influencers, delivering custom-tailored campaigns that consistently exceed brand goals."
            </h2>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
      </section>

      {/* Amplifying Brand Reach */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">Our Approach</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Amplifying your brand's reach
            </h2>
          </div>
          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Recollectix Media, we integrate precision performance media targeting to drive actual objectives and maximize reach like never before.
            </p>
          </div>
        </div>
      </section>

      {/* Work Showcase - Sticky Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            OUR <span className="text-primary">WORK</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we bring brands to life with our influencer network.
          </p>
        </div>
        <StickyGallery
          leftItems={leftVideos}
          rightItems={rightVideos}
          centerVideoUrl="/media/influencer_clip_9.mp4"
        />
      </section>

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
