"use client";

import { useTransition } from "react";

import { onFollow, onUnfollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ActionsProps {
  isFollowing: boolean;
  userId: string;
}

export const Actions = ({
    isFollowing,
    userId,
}: ActionsProps) => {
  const [isPending, startTransition] = useTransition();

  const handleFollow = () => {
    startTransition(() => {
      onFollow(userId)
      .then((data) => toast.success(`Now Questing with ${data.following.username}!`))
      .catch(() => toast.error("Unable to join Quest Party..."));
    });
  };

  const handleUnfollow = () => {
    startTransition(() => {
      onUnfollow(userId)
      .then((data) => toast.success(`You have left ${data.following.username}'s Quest Party.`))
      .catch(() => toast.error("Unable to leave Quest Party..."));
    });
  };

  const onClick = () => {
   if(isFollowing) {
     handleUnfollow();
   } else {
     handleFollow();
   }
  }

  return (
    <Button
      disabled={isPending}
      variant="primary"
      onClick={onClick}
    >
      {isFollowing ? "Leave Quest Party" : "Join Quest Party"}
    </Button>
  );
};
