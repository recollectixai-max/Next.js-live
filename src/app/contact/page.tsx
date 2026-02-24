"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import AntigravityBackground from "@/components/ui/AntigravityBackground";

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formData);
        alert("Thanks for contacting us! We'll get back to you soon.");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-white relative min-h-screen">
            {/* Antigravity Background - Behind Content */}
            <AntigravityBackground
                count={800}
                magnetRadius={5}
                ringRadius={5}
                waveSpeed={0.8}
                waveAmplitude={0.4}
                particleSize={0.6}
                lerpSpeed={0.12}
                color="#0c08fd"
                autoAnimate={true}
                particleVariance={1}
                rotationSpeed={1}
                depthFactor={1.7}
                pulseSpeed={2.8}
                particleShape="sphere"
                fieldStrength={10.9}
                className="fixed inset-0 pointer-events-none opacity-40 z-0"
            />

            {/* Content - Above Background */}
            <div className="relative z-10">
                <div className="bg-gray-50/80 backdrop-blur-sm py-20 px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
                        CONTACT US - LETS TALK
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Have questions about what we do or how we do it? Got any Ideas or Projects in mind?
                    </p>
                </div>

                <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Reach Out!</h2>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-50 p-3 rounded-lg text-primary mt-1">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">India Office</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            201 Orbit Premises, Ram Nagar, Near Inorbit Mall,<br />
                                            Malad West, Mumbai-400064.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-50 p-3 rounded-lg text-primary mt-1">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">UAE Office</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Ground Floor, Reem Building 4, Street 8b Oud Metha,<br />
                                            Dubai, United Arab Emirates.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-50 p-3 rounded-lg text-primary mt-1">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                                        <a href="tel:+918850942466" className="text-gray-600 hover:text-primary transition-colors block">
                                            +91 88509 42466
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-50 p-3 rounded-lg text-primary mt-1">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                                        <a href="mailto:faheem@recollectix.com" className="text-gray-600 hover:text-primary transition-colors block">
                                            faheem@recollectix.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                                            placeholder="First Name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                                            placeholder="Last Name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Comment or Message
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                                        placeholder="Tell us about your project..."
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/20"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
