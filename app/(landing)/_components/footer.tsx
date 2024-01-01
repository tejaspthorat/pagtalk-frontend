import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="text-white dark:text-black flex items-center w-full p-6 bg-black z-50 dark:bg-white">
      PageTalk
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};
