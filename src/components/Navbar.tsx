"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/our-work" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const [isAboutHero, setIsAboutHero] = useState(false);

    // Hide Navbar logo on About page until scrolled past hero section
    useEffect(() => {
        if (pathname === "/about") {
            setIsAboutHero(true);
            const handleScroll = () => {
                // Show navbar logo when scrolling past 1.5vh (earlier transition)
                // This ensures smooth handoff from animated logo to navbar logo
                if (window.scrollY > window.innerHeight * 1.5) {
                    setIsAboutHero(false);
                } else {
                    setIsAboutHero(true);
                }
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        } else {
            setIsAboutHero(false);
        }
    }, [pathname]);

    return (
        <nav
            className="fixed top-0 left-0 right-0 w-full z-[99999] bg-white border-b border-gray-200 shadow-md transition-all duration-300"
            style={{ transform: 'translate3d(0, 0, 0)' }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/media/logo.png"
                                alt="Recollectix Logo"
                                width={300}
                                height={300}
                                className={cn(
                                    "h-20 w-auto object-contain transition-opacity duration-500",
                                    isAboutHero ? "opacity-0" : "opacity-100"
                                )}
                                priority
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "text-gray-700 hover:text-primary transition-all font-medium text-sm lg:text-base py-1",
                                        isActive && "border-b-2 border-gray-600 font-bold text-primary"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                        <Link
                            href="/contact"
                            className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
                        >
                            Get Started
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-900 hover:text-primary focus:outline-none p-2"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 shadow-xl animate-in slide-in-from-top-5 duration-200">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-3 rounded-lg text-base font-semibold text-gray-800 hover:text-primary hover:bg-gray-50 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-4 mt-2 border-t border-gray-100">
                            <Link
                                href="/contact"
                                className="block w-full text-center bg-primary text-white px-4 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
