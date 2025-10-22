import type { Slide } from "../presentation";
import { LightRays } from "@/components/ui/light-rays";
import { StripedPattern } from "@/components/ui/striped-pattern";
import { AnimatedBeamMultipleOutputDemo } from "@/components/animated-beam-multiple-output-demo";
import { motion, type Variants } from "framer-motion";

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

export const planModeSlide: Slide = {
    id: "plan-mode",
    displayName: "Plan First",
    notes: `
Modern coding agents are great at planning thanks to better context handling. Many tools now have a planning mode, where the agent explores the codebase and suggests a step-by-step plan before making changes.

You can review the plan first, give feedback, and avoid rework later.

Tip #3: Use planning mode often. Go back and forth with the agent to get the plan right before starting big tasks - it saves time and leads to better results.
    `,
    content: (
        <div className="h-full relative overflow-hidden rounded-lg">
            <motion.div
                className="h-full flex flex-col gap-8 p-6 md:px-12 md:py-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className="z-20 w-full max-w-3xl mx-auto text-center md:text-left"
                    variants={itemVariants}
                >
                    <motion.p
                        className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-4"
                        variants={itemVariants}
                    >
                        Tip #3
                    </motion.p>
                    <motion.h2
                        className="text-4xl font-bold"
                        variants={itemVariants}
                    >
                        Plan first, execute second
                    </motion.h2>
                    <motion.ul
                        className="mt-4 space-y-2 text-lg leading-relaxed text-foreground"
                        variants={itemVariants}
                    >
                        <motion.li className="flex items-center gap-3" variants={itemVariants}>
                            <span className="size-2 rounded-full bg-primary/50" />
                            <span>Don&apos;t outsource your thinking</span>
                        </motion.li>
                        <motion.li className="flex items-center gap-3" variants={itemVariants}>
                            <span className="size-2 rounded-full bg-primary/50" />
                            <span>Steer the agent&apos;s outcome before you execute</span>
                        </motion.li>
                    </motion.ul>
                </motion.div>
                <motion.div
                    className="flex-1 flex items-center justify-center"
                    variants={itemVariants}
                >
                    <AnimatedBeamMultipleOutputDemo />
                </motion.div>
            </motion.div>

            <LightRays />
            <StripedPattern className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] opacity-15" />
            <div className="absolute inset-0 bg-gradient-to-br from-background/0 via-background/40 to-background/60 pointer-events-none" />
        </div>
    ),
};


