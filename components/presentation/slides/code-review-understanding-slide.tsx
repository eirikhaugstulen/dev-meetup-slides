import Image from "next/image";
import type { Slide } from "../presentation";
import { Cursor } from "../assets/cursor-logo";
import { Vercel } from "../assets/vercel-logo";
const devinLogo = "/presentation-assets/devin-logo.png";
const coderabbitLogo = "/presentation-assets/coderabbit-logo.png";

export const codeReviewUnderstandingSlide: Slide = {
    id: "code-review-understanding",
    displayName: "Assistive tools",
    notes: `
For code reviews, there are a few tools I’ve used. Coderabbit is free and runs in GitHub - it checks your diffs and gives review comments. My favorites, though, are CursorBugBot and the Vercel Agent. They actually run your code in a virtual machine, which helps them catch deeper issues, like memory leaks or missing security patches. That said, results can vary and you can’t easily steer what they focus on, so they’re best used as first-line support - not a replacement for human reviewers.

On the codebase side, I highly recommend DeepWiki by Cognition (the same people behind Devin). You can feed any open-source repo into it, and it generates detailed, technical documentation. I’ve used it a lot in DHIS2, both for new repos and ones I work in daily - it’s especially helpful when I need to refresh my memory or dig into unfamiliar parts of the code.
    `,
    content: (
        <div className="h-full w-full bg-gradient-to-br from-background via-background to-muted/40 p-8 md:p-14 flex flex-col gap-12">
            <header className="max-w-2xl space-y-4">
                <p className="text-sm font-semibold tracking-[0.3em] uppercase text-muted-foreground">Workflows</p>
                <h2 className="text-4xl md:text-4xl font-bold leading-tight">
                    Assistive tools
                </h2>
            </header>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <section className="relative overflow-hidden rounded-3xl border bg-card/80 shadow-sm backdrop-blur">
                    <div className="flex flex-col gap-6 p-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-semibold">Code review</h3>
                            </div>
                            <span className="rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">AI-assisted</span>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            <div className="flex flex-col items-center gap-3 text-center">
                                <div className="grid place-items-center rounded-2xl bg-muted/60 p-6">
                                    <Image
                                        src={coderabbitLogo}
                                        alt="CodeRabbit logo"
                                        width={56}
                                        height={56}
                                        className="h-14 w-14 object-contain"
                                        priority
                                    />
                                </div>
                                <div>
                                    <p className="text-base font-semibold">CodeRabbit</p>
                                    <p className="text-xs text-muted-foreground italic">CodeRabbit Inc</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-3 text-center">
                                <div className="grid place-items-center rounded-2xl bg-muted/60 p-6">
                                    <Cursor className="h-14 w-14" />
                                </div>
                                <div>
                                    <p className="text-base font-semibold">Cursor bugbot</p>
                                    <p className="text-xs text-muted-foreground italic">Anysphere, Inc</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-3 text-center">
                                <div className="grid place-items-center rounded-2xl bg-muted/60 p-6">
                                    <Vercel className="h-14 w-14" />
                                </div>
                                <div>
                                    <p className="text-base font-semibold">Vercel Agent</p>
                                    <p className="text-xs text-muted-foreground italic">Vercel</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden rounded-3xl border bg-card/80 shadow-sm backdrop-blur">
                    <div className="flex flex-col gap-6 p-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-semibold">Codebase understanding</h3>
                            </div>
                            <span className="rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">Deep context</span>
                        </div>

                        <div className="flex flex-col items-center gap-3 text-center">
                            <div className="grid place-items-center rounded-2xl bg-muted/60 p-6">
                                <Image
                                    src={devinLogo}
                                    alt="Devin logo"
                                    width={56}
                                    height={56}
                                    className="h-14 w-14 object-contain"
                                    priority
                                />
                            </div>
                            <div>
                                <p className="text-base font-semibold">DeepWiki</p>
                                <p className="text-xs text-muted-foreground italic">Cognition</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    ),
};

