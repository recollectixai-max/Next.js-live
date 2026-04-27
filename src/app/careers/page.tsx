import type { Metadata } from "next";
import { CareersPage } from "@/components/careers/CareersPage";

export const metadata: Metadata = {
    title: "Careers | Recollectix",
    description: "Explore open positions at Recollectix and apply to join the team.",
};

export default function CareersRoute() {
    return <CareersPage />;
}
