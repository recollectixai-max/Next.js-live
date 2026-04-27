"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import type { CareerRole } from "@/components/careers/careerData";

type JobModalProps = {
    role: CareerRole | null;
    onClose: () => void;
    onApply: (roleTitle: string) => void;
};

export function JobModal({ role, onClose, onApply }: JobModalProps) {
    useEffect(() => {
        if (!role) {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [role, onClose]);

    if (!role) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-stone-950/40 px-4 py-6 backdrop-blur-sm">
            <div className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/70 bg-[#fcfbf7] shadow-[0_35px_120px_-40px_rgba(28,25,23,0.45)]">
                <div className="flex items-start justify-between border-b border-stone-200 bg-white/90 px-6 py-5 sm:px-8">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                            Open Role
                        </p>
                        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-stone-950 sm:text-3xl">
                            {role.title}
                        </h2>
                        <p className="mt-2 text-sm text-stone-600">{role.location}</p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-full border border-stone-200 bg-stone-50 p-2 text-stone-600 transition-colors hover:border-stone-300 hover:text-stone-900"
                        aria-label="Close job details"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="max-h-[calc(90vh-96px)] overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
                    <div className="space-y-8">
                        {role.sections.map((section, index) => {
                            if (section.type === "paragraph") {
                                return (
                                    <section key={`${role.slug}-paragraph-${index}`} className="space-y-3">
                                        {section.heading ? (
                                            <h3 className="text-lg font-semibold text-stone-900">{section.heading}</h3>
                                        ) : null}
                                        <div className="space-y-4 text-[15px] leading-7 text-stone-700">
                                            {section.content.split("\n\n").map((paragraph) => (
                                                <p key={paragraph} className="whitespace-pre-line">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    </section>
                                );
                            }

                            if (section.type === "bullets") {
                                return (
                                    <section key={`${role.slug}-bullets-${index}`} className="space-y-4">
                                        <h3 className="text-lg font-semibold text-stone-900">{section.heading}</h3>
                                        <ul className="space-y-3 text-[15px] leading-7 text-stone-700">
                                            {section.items.map((item) => (
                                                <li key={item} className="flex items-start gap-3">
                                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                );
                            }

                            if (section.type === "numbered") {
                                return (
                                    <section key={`${role.slug}-numbered-${index}`} className="space-y-5">
                                        <h3 className="text-lg font-semibold text-stone-900">{section.heading}</h3>
                                        <div className="space-y-5">
                                            {section.items.map((item, itemIndex) => (
                                                <div
                                                    key={item.title}
                                                    className="rounded-[1.5rem] border border-stone-200 bg-white px-5 py-5 shadow-[0_18px_45px_-35px_rgba(41,37,36,0.28)]"
                                                >
                                                    <h4 className="text-base font-semibold text-stone-900">
                                                        {itemIndex + 1}. {item.title}
                                                    </h4>
                                                    <div className="mt-3 space-y-2 text-[15px] leading-7 text-stone-700">
                                                        {item.lines.map((line, lineIndex) => (
                                                            <p key={`${item.title}-${lineIndex}`}>{line}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                );
                            }

                            return (
                                <section key={`${role.slug}-meta-${index}`} className="space-y-3">
                                    <div className="rounded-[1.5rem] border border-stone-200 bg-white px-5 py-5 text-[15px] leading-7 text-stone-700 shadow-[0_18px_45px_-35px_rgba(41,37,36,0.28)]">
                                        {section.items.map((item) => (
                                            <p key={item}>{item}</p>
                                        ))}
                                    </div>
                                </section>
                            );
                        })}
                    </div>

                    <div className="mt-8 flex flex-col gap-3 border-t border-stone-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-stone-600">
                            Interested in this role? Start your application below.
                        </p>
                        <button
                            type="button"
                            onClick={() => onApply(role.title)}
                            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
                        >
                            Apply for {role.title}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
