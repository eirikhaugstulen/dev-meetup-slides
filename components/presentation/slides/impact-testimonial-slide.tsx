import Image from "next/image";
import type { Slide } from "../presentation";
import { LightRays } from "@/components/ui/light-rays";
import { StripedPattern } from "@/components/ui/striped-pattern";
import { motion, type Variants } from "framer-motion";

const captureLogo = "/presentation-assets/capture-app-logo.png";
const modelingLogo = "/presentation-assets/modeling-app-logo.png";

const containerVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1] as const,
            when: "beforeChildren",
            staggerChildren: 0.12,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1] as const,
        },
    },
};

export const impactTestimonialSlide: Slide = {
    id: "ai-impact",
    displayName: "Where AI Helped",
    notes: `
In the Tracker team, we had to rewrite the massive and complex Capture App from Flow (an old TypeScript-like language) to TypeScript. It was a huge job we probably couldn’t have done without AI. We used a cloud agent called Devin, which gets smarter the more you use it. As one teammate put it: the first 25% of the rewrite took a month, but the last 25% took just three days.

On the Climate team, we had to rebuild the modeling app to support new features for an upcoming conference. The old setup didn’t cut it, so we started from scratch with better infrastructure and branding. With both local tools and Devin in the cloud, we were knocking out multiple tickets at once and finished the full rewrite in about a month.
    `,
    content: (
        <div className="h-full relative overflow-hidden rounded-lg">
            <motion.div
                className="h-full grid items-center p-8 md:px-32"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.section
                    className="rounded-3xl border bg-card/80 shadow-sm p-8 px-24 grid gap-16 z-10"
                    variants={itemVariants}
                >
                    {/* Title */}
                    <motion.div className="space-y-3" variants={itemVariants}>
                        <motion.p
                            className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground"
                            variants={itemVariants}
                        >
                            Testimonial
                        </motion.p>
                        <motion.h2 className="text-4xl font-bold" variants={itemVariants}>
                            Places where AI made a difference
                        </motion.h2>
                    </motion.div>

                    {/* Row 1 */}
                    <motion.div className="flex items-center gap-6" variants={itemVariants}>
                        <div className="shrink-0 rounded-2xl bg-muted/50 relative border p-3 shadow-sm">
                            <Image
                                src={captureLogo}
                                alt="Capture app logo"
                                width={96}
                                height={96}
                                className="h-24 w-24 object-contain"
                                priority
                            />
                        </div>
                        <div className="space-y-2 max-w-1/2 flex-1">
                            <h3 className="text-2xl font-semibold">Capture app</h3>
                            <p className="text-base text-muted-foreground">
                                Migrated from Flow to TypeScript using Devin. While the first 25% took about a month, the final 25% was completed in three days.
                            </p>
                        </div>
                    </motion.div>

                    {/* Row 2 (mirrored) */}
                    <motion.div className="flex items-center justify-end gap-6" variants={itemVariants}>
                        <div className="space-y-2 text-right max-w-1/2 flex-1">
                            <h3 className="text-2xl font-semibold">Modeling app</h3>
                            <p className="text-base text-muted-foreground">
                                Rebuilt the app from the ground up with modern infrastructure and DHIS2 branding. The rewrite took about a month and involved a range of cloud and local tools.
                            </p>
                        </div>
                        <div className="shrink-0 rounded-2xl bg-muted/50 p-3 border shadow-sm">
                            <Image
                                src={modelingLogo}
                                alt="Modeling app logo"
                                width={96}
                                height={96}
                                className="h-24 w-24 object-contain"
                                priority
                            />
                        </div>
                    </motion.div>
                </motion.section>
            </motion.div>

            <LightRays />
            <StripedPattern className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] opacity-15" />
            <div className="absolute inset-0 bg-gradient-to-br from-background/0 via-background/40 to-background/60 pointer-events-none" />
        </div>
    ),
};


