"use client";

import { useId, useState } from "react";
import type { CareerRole } from "@/components/careers/careerData";

type ApplicationFormProps = {
    roles: CareerRole[];
    selectedRole: string;
    onRoleChange: (role: string) => void;
};

export function ApplicationForm({ roles, selectedRole, onRoleChange }: ApplicationFormProps) {
    const formId = useId();
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [statusType, setStatusType] = useState<"success" | "error" | "">("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        resume: "",
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files, type } = event.target;

        if (type === "file") {
            setFormData((prev) => ({
                ...prev,
                resume: files && files[0] ? files[0].name : "",
            }));
            return;
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onRoleChange(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formElement = event.currentTarget;
        const payload = new FormData(formElement);

        setIsSubmitting(true);
        setSubmitted(false);
        setStatusMessage("");
        setStatusType("");

        void fetch("/api/careers/apply", {
            method: "POST",
            body: payload,
        })
            .then(async (response) => {
                const result = (await response.json()) as { message?: string };

                if (!response.ok) {
                    throw new Error(result.message || "Something went wrong while submitting your application.");
                }

                setSubmitted(true);
                setStatusType("success");
                setStatusMessage(result.message || "Application submitted successfully.");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    resume: "",
                });
                onRoleChange(roles[0]?.title ?? "");
                formElement.reset();
            })
            .catch((error: unknown) => {
                const message = error instanceof Error
                    ? error.message
                    : "Something went wrong while submitting your application.";

                setStatusType("error");
                setStatusMessage(message);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="application-form" className="rounded-[2rem] border border-stone-200/80 bg-white p-6 shadow-[0_25px_70px_-45px_rgba(41,37,36,0.35)] sm:p-8 lg:p-10">
            <div className="max-w-2xl space-y-4">
                <span className="inline-flex rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                    Application Form
                </span>
                <h2 className="text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
                    Apply to join the team
                </h2>
                <p className="text-base leading-7 text-stone-600">
                    Share your details and the role you&apos;re applying for. We&apos;ll review your application and reach out if there&apos;s a fit.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                    <label htmlFor={`${formId}-name`} className="text-sm font-medium text-stone-700">
                        Name
                    </label>
                    <input
                        id={`${formId}-name`}
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full rounded-2xl border border-stone-200 bg-[#fcfbf7] px-4 py-3.5 text-stone-900 outline-none transition-all placeholder:text-stone-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                        placeholder="Your full name"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor={`${formId}-email`} className="text-sm font-medium text-stone-700">
                        Email
                    </label>
                    <input
                        id={`${formId}-email`}
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full rounded-2xl border border-stone-200 bg-[#fcfbf7] px-4 py-3.5 text-stone-900 outline-none transition-all placeholder:text-stone-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                        placeholder="you@example.com"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor={`${formId}-phone`} className="text-sm font-medium text-stone-700">
                        Phone
                    </label>
                    <input
                        id={`${formId}-phone`}
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full rounded-2xl border border-stone-200 bg-[#fcfbf7] px-4 py-3.5 text-stone-900 outline-none transition-all placeholder:text-stone-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                        placeholder="+91 00000 00000"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor={`${formId}-role`} className="text-sm font-medium text-stone-700">
                        Role
                    </label>
                    <select
                        id={`${formId}-role`}
                        name="role"
                        required
                        value={selectedRole}
                        onChange={handleRoleChange}
                        className="w-full rounded-2xl border border-stone-200 bg-[#fcfbf7] px-4 py-3.5 text-stone-900 outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                    >
                        <option value="" disabled>
                            Select a role
                        </option>
                        {roles.map((role) => (
                            <option key={role.slug} value={role.title}>
                                {role.title}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="space-y-2 md:col-span-2">
                    <label htmlFor={`${formId}-resume`} className="text-sm font-medium text-stone-700">
                        Resume Upload
                    </label>
                    <label
                        htmlFor={`${formId}-resume`}
                        className="flex cursor-pointer flex-col items-center justify-center rounded-[1.75rem] border border-dashed border-stone-300 bg-[#fcfbf7] px-6 py-8 text-center transition-all hover:border-primary hover:bg-white"
                    >
                        <span className="text-sm font-medium text-stone-700">
                            {formData.resume || "Upload your resume"}
                        </span>
                        <span className="mt-2 text-sm text-stone-500">
                            PDF, DOC, or DOCX
                        </span>
                    </label>
                    <input
                        id={`${formId}-resume`}
                        name="resume"
                        type="file"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={handleInputChange}
                        className="sr-only"
                    />
                </div>

                <div className="md:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                        {isSubmitting ? "Submitting..." : "Apply Now"}
                    </button>
                    {submitted ? (
                        <p className="text-sm text-emerald-700">
                            {statusMessage}
                        </p>
                    ) : statusMessage ? (
                        <p className={`text-sm ${statusType === "error" ? "text-red-600" : "text-stone-600"}`}>
                            {statusMessage}
                        </p>
                    ) : null}
                </div>
            </form>
        </section>
    );
}
