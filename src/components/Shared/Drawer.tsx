"use client";

import { useRef, useEffect } from "react";

// * utils
import { cn } from "@/utils";

// * hooks
import useToggle from "@/hooks/useToggle";

// * types
type DrawerProps = {
  className?: string;
  defaultOpen?: boolean;
  children: React.ReactNode | ((open: boolean) => React.ReactNode);
  trigger: (toggle: (value?: boolean) => void, open: boolean) => React.ReactElement;
};

const Drawer = ({ defaultOpen, trigger, className, children }: DrawerProps) => {
  const [open, toggle] = useToggle(!!defaultOpen);
  const collapseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const collapse = collapseRef.current;
    if (!open || !collapse) return;

    collapse.style.maxHeight = collapse.scrollHeight + "px";
  }, []);

  return (
    <div className={cn("drawer", open && "open", className)}>
      <div className="trigger">{trigger(toggle, open)}</div>

      <div
        ref={collapseRef}
        style={{ maxHeight: open ? collapseRef.current?.scrollHeight : 0 }}
        className="collapsible transition-[max-height] duration-300 overflow-hidden"
      >
        {typeof children === "function" ? children(open) : children}
      </div>
    </div>
  );
};

export default Drawer;
