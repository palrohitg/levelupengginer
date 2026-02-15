import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building2, TrendingUp, Star } from "lucide-react";
import { stats } from "@/lib/courseData";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ReactNode> = {
  "Students Placed": <Users className="h-5 w-5 text-primary" />,
  "Hiring Partners": <Building2 className="h-5 w-5 text-primary" />,
  "Placement Rate": <TrendingUp className="h-5 w-5 text-primary" />,
  "Student Rating": <Star className="h-5 w-5 text-primary" />,
};

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/50 to-background py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Trusted by 500+ Engineers
            </span>
            <h1 className="mb-6 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Crack Your Dream
              <span className="text-primary"> Tech Job</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
              Get mentored by engineers from Blinkit, Zomato, Paytm, Google, Amazon, Microsoft & more. Master DSA, System Design, Backend, DevOps, and Full Stack — with 1:1 guidance, resume reviews & referrals.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild size="lg" className="gap-2 text-base">
              <Link to="/courses">
                Explore Courses <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link to="/contact">Talk to a Counselor</Link>
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl bg-card p-4 text-center shadow-sm border">
              <div className="mb-1 flex justify-center">{iconMap[stat.label]}</div>
              <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
