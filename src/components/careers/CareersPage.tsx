"use client";

import { useRef, useState } from "react";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { careerRoles, type CareerRole } from "@/components/careers/careerData";
import { JobCard } from "@/components/careers/JobCard";
import { JobModal } from "@/components/careers/JobModal";
import { ApplicationForm } from "@/components/careers/ApplicationForm";

export function CareersPage() {
    const [activeRole, setActiveRole] = useState<CareerRole | null>(null);
    const [selectedRole, setSelectedRole] = useState(careerRoles[0]?.title ?? "");
    const positionsRef = useRef<HTMLElement | null>(null);
    const applicationRef = useRef<HTMLElement | null>(null);

    const scrollToPositions = () => {
        positionsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const handleApply = (roleTitle: string) => {
        setSelectedRole(roleTitle);
        setActiveRole(null);
        window.setTimeout(() => {
            applicationRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
    };

    return (
        <div className="bg-[#f7f2e8] text-stone-900">
            <section className="relative overflow-hidden border-b border-stone-200/80 bg-[linear-gradient(135deg,#f9f4ea_0%,#ffffff_45%,#f3eee3_100%)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,93,160,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(180,147,92,0.18),transparent_30%)]" />
                <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(120,113,108,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,113,108,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

                <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
                    <div className="max-w-4xl space-y-8">
                        <span className="inline-flex items-center gap-2 rounded-full border border-stone-200/80 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-stone-600 shadow-sm backdrop-blur">
                            <BriefcaseBusiness className="h-4 w-4 text-primary" />
                            Careers at Recollectix
                        </span>

                        <div className="space-y-5">
                            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
                                Join Our Team
                            </h1>
                            <p className="max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
                                Build, create, and grow with a team that turns ideas into reality.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={scrollToPositions}
                            className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_-18px_rgba(20,93,160,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
                        >
                            View Open Positions
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </section>

            <section ref={positionsRef} className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div className="space-y-3">
                        <span className="inline-flex rounded-full border border-stone-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                            Open Positions
                        </span>
                        <h2 className="text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
                            Find the role that fits your strengths
                        </h2>
                    </div>
                    <p className="max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
                        Explore the current openings and review the full job details before you apply.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {careerRoles.map((role) => (
                        <JobCard
                            key={role.slug}
                            title={role.title}
                            location={role.cardLocation}
                            onViewDetails={() => setActiveRole(role)}
                        />
                    ))}
                </div>
            </section>

            <section ref={applicationRef} className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
                <ApplicationForm
                    roles={careerRoles}
                    selectedRole={selectedRole}
                    onRoleChange={setSelectedRole}
                />
            </section>

            <JobModal
                role={activeRole}
                onClose={() => setActiveRole(null)}
                onApply={handleApply}
            />
        </div>
    );
}
