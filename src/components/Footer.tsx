import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/media/full_recollectix_logo.png"
                                alt="Recollectix Media"
                                width={180}
                                height={60}
                                className="h-12 w-auto object-contain"
                            />
                        </Link>
                        <p className="mt-4 text-gray-600 max-w-sm">
                            Where brand brilliance meets talent excellence. We craft compelling narratives and engineer standout campaigns, seamlessly blending media mastery with top-tier talent management.
                        </p>
                        <div className="mt-6 flex space-x-4">
                            <a
                                href="https://www.instagram.com/recollectix/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-white rounded-full"
                            >
                                <Instagram size={20} />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/recollectix-media-pvt-ltd"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-white rounded-full"
                            >
                                <Linkedin size={20} />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a
                                href="https://www.youtube.com/results?search_query=digital+buzz+with+faheem"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-white rounded-full"
                            >
                                <Youtube size={20} />
                                <span className="sr-only">YouTube</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
                        <ul className="space-y-4 text-sm text-gray-600">
                            <li>
                                <strong className="block text-gray-900 mb-1">India Office:</strong>
                                201 Orbit Premises, Ram Nagar, Near Inorbit Mall, Malad West, Mumbai-400064.
                            </li>
                            <li>
                                <strong className="block text-gray-900 mb-1">UAE Office:</strong>
                                Ground Floor, Reem Building 4, Street 8b Oud Metha, Dubai, UAE.
                            </li>
                            <li>
                                <strong className="block text-gray-900 mb-1">Phone:</strong>
                                <a href="tel:+918850942466" className="hover:text-primary transition-colors">+91 88509 42466</a>
                            </li>
                            <li>
                                <strong className="block text-gray-900 mb-1">Email:</strong>
                                <a href="mailto:faheem@recollectix.com" className="hover:text-primary transition-colors">faheem@recollectix.com</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-600 hover:text-primary transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Recollectix Media Pvt. All rights reserved.
                    </p>
                    <p className="text-primary font-medium italic mt-2 md:mt-0">
                        "Be the Word of every Mouth"
                    </p>
                </div>
            </div>
        </footer>
    );
}
