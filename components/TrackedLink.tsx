"use client";
import Link, { LinkProps } from "next/link";
import { track } from "@vercel/analytics";
import type { ReactNode } from "react";

type Props = LinkProps & {
  children: ReactNode;
  className?: string;
  eventName: string;
  eventProperties?: Record<string, string | number | boolean>;
};

export default function TrackedLink({ children, eventName, eventProperties = {}, ...props }: Props) {
  return <Link {...props} onClick={() => track(eventName, eventProperties)}>{children}</Link>;
}
