import { SketchLogoIcon } from "@radix-ui/react-icons";

export function Logo() {
  return (
    <div className="bg-primary h-8 w-8 flex items-center justify-center rounded-md">
      <SketchLogoIcon className="w-5 h-5 text-primary-foreground" />
    </div>
  );
}
