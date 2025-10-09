"use client";

import { SlideDeck } from "@/components/presentation";
import { devMeetupOctoberSlides } from "@/components/presentation/presentations";

export default function PresentationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <SlideDeck slides={devMeetupOctoberSlides} autoAdvanceMs={0} />
    </div>
  );
}

