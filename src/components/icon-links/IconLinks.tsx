import React from "react";
import { Button } from "../ui/button";

interface Props {
  children: React.ReactNode;
  href: string;
  size: "default" | "sm" | "lg" | "icon";
}

export default function IconLinks({ children, href, size }: Props) {
  return (
    <Button
      variant="ghost"
      size={size}
      className="rounded-full text-white hover:text-blue-500"
      asChild
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center"
      >
        {children}
      </a>
    </Button>
  );
}
