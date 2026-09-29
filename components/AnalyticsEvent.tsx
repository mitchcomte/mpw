"use client";
import { useEffect, useRef } from "react";
import { track } from "@vercel/analytics";

type Props = {
  name: string;
  properties?: Record<string, string | number | boolean>;
};

export default function AnalyticsEvent({ name, properties = {} }: Props) {
  const sent = useRef(false);
  useEffect(() => {
    if (sent.current) return;
    sent.current = true;
    track(name, properties);
  }, [name, properties]);
  return null;
}
