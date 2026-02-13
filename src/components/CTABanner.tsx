import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl rounded-2xl bg-primary p-10 text-center text-primary-foreground sm:p-14">
          <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl">Ready to Level Up?</h2>
          <p className="mb-8 text-primary-foreground/80">
            Book a free counseling session and discover the right path for your engineering career.
          </p>
          <Button asChild size="lg" variant="secondary" className="gap-2 text-base">
            <Link to="/contact">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
