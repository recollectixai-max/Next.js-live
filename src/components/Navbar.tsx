"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Language = "en" | "ar";

type GoogleTranslateWindow = Window & {
    google?: {
        translate?: {
            TranslateElement?: new (
                options: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean },
                elementId: string
            ) => unknown;
        };
    };
    googleTranslateElementInit?: () => void;
};

const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/our-work" },
    // { name: "New Work", href: "/new-work" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState<Language>("en");
    const [translationError, setTranslationError] = useState(false);
    const pathname = usePathname();
    const [isAboutHero, setIsAboutHero] = useState(false);
    const pendingLanguage = useRef<Language | null>(null);

    const applyLanguage = useCallback((nextLanguage: Language) => {
        const translateElement = document.getElementById("google_translate_element");
        const languageSelect = translateElement?.querySelector<HTMLSelectElement>("select.goog-te-combo");

        if (!languageSelect) {
            pendingLanguage.current = nextLanguage;
            return false;
        }

        pendingLanguage.current = null;
        languageSelect.value = nextLanguage === "ar" ? "ar" : "";
        languageSelect.dispatchEvent(new Event("change"));
        document.documentElement.lang = nextLanguage;
        document.documentElement.dir = nextLanguage === "ar" ? "rtl" : "ltr";
        return true;
    }, []);

    useEffect(() => {
        const googleWindow = window as GoogleTranslateWindow;
        const widget = document.getElementById("google_translate_element");
        if (!widget) return;

        const initializeWidget = () => {
            const TranslateElement = googleWindow.google?.translate?.TranslateElement;
            if (TranslateElement && !widget.querySelector("select.goog-te-combo")) {
                new TranslateElement(
                    { pageLanguage: "en", includedLanguages: "ar", autoDisplay: false },
                    "google_translate_element"
                );
            }
        };

        googleWindow.googleTranslateElementInit = initializeWidget;

        const observer = new MutationObserver(() => {
            if (pendingLanguage.current) {
                applyLanguage(pendingLanguage.current);
            }
        });
        observer.observe(widget, { childList: true, subtree: true });

        if (googleWindow.google?.translate?.TranslateElement) {
            initializeWidget();
        } else if (!document.getElementById("google-translate-script")) {
            const script = document.createElement("script");
            script.id = "google-translate-script";
            script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            script.onerror = () => {
                pendingLanguage.current = null;
                setLanguage("en");
                setTranslationError(true);
            };
            document.head.appendChild(script);
        }

        return () => observer.disconnect();
    }, [applyLanguage]);

    useEffect(() => {
        if (language !== "ar") return;
        const timeout = window.setTimeout(() => applyLanguage("ar"), 250);
        return () => window.clearTimeout(timeout);
    }, [applyLanguage, language, pathname]);

    const handleLanguageChange = (nextLanguage: Language) => {
        setLanguage(nextLanguage);
        setTranslationError(false);
        applyLanguage(nextLanguage);
    };

    const languageSelector = (
        <label className="inline-flex items-center">
            <span className="sr-only">Choose language</span>
            <select
                value={language}
                onChange={(event) => handleLanguageChange(event.target.value === "ar" ? "ar" : "en")}
                aria-label="Choose language"
                className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            >
                <option value="en">English</option>
                <option value="ar">العربية</option>
            </select>
        </label>
    );

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
                        <Link href="/" className="flex items-center w-[170px] sm:w-[220px] md:w-[280px] lg:w-[320px]">
                            <Image
                                src="/media/recollectix_media_logo_trimmed.png"
                                alt="Recollectix Logo"
                                width={960}
                                height={240}
                                className={cn(
                                    "w-full h-auto object-contain transition-opacity duration-500",
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
                        {languageSelector}
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

            <div
                id="google_translate_element"
                aria-hidden="true"
                className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0"
            />
            {translationError && (
                <p role="status" className="absolute right-4 top-full mt-2 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700 shadow">
                    Arabic translation could not be loaded. Please try again later.
                </p>
            )}

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
                        <div className="px-4 py-3">
                            {languageSelector}
                        </div>
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
