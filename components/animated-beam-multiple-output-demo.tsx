"use client"

import type React from "react"
import { forwardRef, useRef } from "react"
import { FolderOpen, FileText, MessageCircle, MessageSquare, StickyNote, Check, ClipboardPenLine, ListTodo } from "lucide-react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/ui/animated-beam"

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode; delay?: number }>(
  ({ className, children, delay = 0 }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: delay,
        }}
        whileHover={{ scale: 1.1 }}
        className={cn(
          "border-border z-10 flex size-12 items-center justify-center rounded-full border-2 bg-background p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className,
        )}
      >
        {children}
      </motion.div>
    )
  },
)

Circle.displayName = "Circle"

export function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)
  const div8Ref = useRef<HTMLDivElement>(null)

  return (
    <div
      className={cn("relative flex h-[600px] w-full items-center justify-center overflow-hidden", className)}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref} delay={0.1}>
            <FolderOpen className="size-full" />
          </Circle>
          <Circle ref={div2Ref} delay={0.1}>
            <FileText className="size-full" />
          </Circle>
          <Circle ref={div3Ref} delay={0.1}>
            <MessageCircle className="size-full" />
          </Circle>
          <Circle ref={div4Ref} delay={0.1}>
            <MessageSquare className="size-full" />
          </Circle>
          <Circle ref={div5Ref} delay={0.1}>
            <StickyNote className="size-full" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16" delay={1}>
            <ClipboardPenLine className="size-full" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div8Ref} delay={1.5}>
            <Check className="size-full" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref} delay={2}>
            <ListTodo className="size-full" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div6Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div6Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div8Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div8Ref} toRef={div7Ref} />
    </div>
  )
}