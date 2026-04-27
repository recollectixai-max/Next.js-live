import { ArrowUpRight, MapPin } from "lucide-react";

type JobCardProps = {
    title: string;
    location: string;
    onViewDetails: () => void;
};

export function JobCard({ title, location, onViewDetails }: JobCardProps) {
    return (
        <article className="group flex h-full flex-col justify-between rounded-[2rem] border border-stone-200/80 bg-white p-7 shadow-[0_20px_60px_-40px_rgba(41,37,36,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_90px_-45px_rgba(20,93,160,0.4)]">
            <div className="space-y-5">
                <span className="inline-flex rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                    Open Position
                </span>
                <div className="space-y-3">
                    <h3 className="max-w-sm text-2xl font-semibold tracking-tight text-stone-900">
                        {title}
                    </h3>
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#f6f1e7] px-3 py-1.5 text-sm text-stone-700">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{location}</span>
                    </div>
                </div>
            </div>

            <button
                type="button"
                onClick={onViewDetails}
                className="mt-10 inline-flex items-center justify-between rounded-full border border-stone-300 bg-stone-50 px-5 py-3 text-sm font-semibold text-stone-900 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
            >
                <span>View Details</span>
                <ArrowUpRight className="h-4 w-4" />
            </button>
        </article>
    );
}
