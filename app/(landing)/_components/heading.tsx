"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-3-3xl space-y-4">
      <h1 className="text-3xl md:text-5xl sm:text-4xl font-bold">
        Document Reading, Redefined.<br></br> Welcome to{" "}
        <span className="underline">PageTalk</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-xl font-medium">
        PageTalk is a connected workspace powered by AI where better and faster
        work happens
      </h3>
      <Button>
        Get Started
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
