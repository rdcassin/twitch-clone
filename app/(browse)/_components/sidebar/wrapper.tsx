"use client";

// import { useEffect, useState } from "react"; /*See notes below. */
import { useIsClient } from "usehooks-ts";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

import { FollowingSkeleton } from "./following";
import { RecommendedSkeleton } from "./recommended";
import { ToggleSkeleton } from "./toggle";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  const isClient = useIsClient();
  const { collapsed } = useSidebar((state) => state);

  /* Since usehooks-ts is installed, hydration error can be resolved with useIsClient.  Alternatively, it can be resolved using useState and useEffect from react. */
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  if (!isClient) return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-72 h-full bg-background border-r border-[#2D2E35] z-50">
      <ToggleSkeleton />
      <FollowingSkeleton />
      <RecommendedSkeleton />
    </aside>
  );

  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-72 h-full bg-background border-r border-[#2D2E35] z-50",
        collapsed && "w-[70px]"
      )}
    >
      {children}
    </aside>
  );
};
