import { Users, Star, MousePointerClick, Megaphone, Code } from "lucide-react";
import { ServicesShowcase } from "@/components/ui/ServiceShowcase";

export default function Services() {
    const services = [
        {
            title: "Influencer Marketing",
            description: "We believe influencer marketing is about more than just numbers—it's about creating strategic influencer partnerships that drive brand visibility and engagement. We start by understanding your goals and audience, crafting targeted influencer campaigns that deliver results. With a solid plan in place.",
            icon: <Users className="w-10 h-10 text-white" />,
            image: "/media/services_influence_marketing.png",
            link: "/services/influencer-marketing",
        },
        {
            title: "Talent Management",
            description: "Our talent management services help influencers and creators connect with top brand opportunities. We handle the behind-the-scenes work, ensuring your visibility so you can focus on growing your influence. Let us turn your digital presence into measurable success.",
            icon: <Star className="w-10 h-10 text-white" />,
            image: "/media/services_talent_management.png",
            link: "/services/talent-management",
        },
        {
            title: "Social Media Management",
            description: "Transform your online presence with our expert social media management services. We create engaging content, drive strategic campaigns, and analyse performance to boost your brand's visibility and interaction. Let us manage the day-to-day so you can focus on what matters—building relationships with your audience and growing your business.",
            icon: <MousePointerClick className="w-10 h-10 text-white" />,
            image: "/media/services_smm.png",
            link: "/services/social-media-management",
        },
        {
            title: "Public Relation",
            description: "Elevate your brand's reputation with our expert PR services. We design powerful PR strategies to captivate your target audience, foster media relationships, and create press coverage that gets noticed. Whether it's amplifying your brand message we craft compelling stories that drive business success.",
            icon: <Megaphone className="w-10 h-10 text-white" />,
            image: "/media/services_public_relation.png",
            link: "/services/public-relations",
        },
        {
            title: "Web Development",
            description: "Bring your brand vision to life with our expert web development services. We create responsive, user-friendly websites that provide seamless experiences across devices. From custom designs to full website optimization, we ensure your site is fast, secure, and optimized for search engines, helping you convert visitors into loyal customers.",
            icon: <Code className="w-10 h-10 text-white" />,
            image: "/media/services_web_development.png",
            link: "/services/web-development",
        },
    ];

    return (
        <div className="bg-white overflow-x-hidden">
            {/* Video Header */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <video
                    src="/media/service_online.mp4"
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>

            <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <ServicesShowcase services={services} />
            </div>

            <div className="bg-primary py-20 px-4 sm:px-6 lg:px-8 text-center text-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Brand?</h2>
                    <p className="mb-8 text-blue-100 text-lg">Let's collaborate to build something amazing together.</p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
}
