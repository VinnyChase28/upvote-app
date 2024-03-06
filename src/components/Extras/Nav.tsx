import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "../ui/button";

export function Navbar() {
  return (
    <div className="mr-4 hidden md:flex py-6 px-6">
      <Link to="/" className="mr-6 flex items-center space-x-2">
        <Check className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          Technical Assessment
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link
          to="/extras"
          className="transition-colors hover:text-foreground/80"
        >
          Extras
        </Link>
        <Button
          variant={"secondary"}
          onClick={() =>
            (window.location.href = "mailto:vincentfgauthier@gmail.com")
          }
        >
          Email Me
        </Button>
      </nav>
    </div>
  );
}
