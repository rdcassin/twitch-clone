import { Recommended } from "./recommended";
import { Toggle, ToggleSkeleton } from "./toggle";
import { RecommendedSkeleton } from "./recommended";
import { Wrapper } from "./wrapper";

import { getRecommended } from "@/lib/recommended-service";

export const Sidebar = async () => {
  const recommended = await getRecommended();

  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-4 log:pt-0">
        <Recommended data={recommended} />
      </div>
    </Wrapper>
  );
};

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-72 h-full bg-background border-r border-[#2D2E35] z-50">
      <ToggleSkeleton />
      <RecommendedSkeleton />
    </aside>
  );
};
