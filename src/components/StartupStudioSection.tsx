import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Layers,
  Zap,
  CircleDollarSign,
  TrendingUp,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: <Users className="h-5 w-5" />,
    title: "No hiring circus",
    description:
      "Skip job posts, interviews, and ramp-up. You get experienced engineers when you need them — not six months from now.",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "One partner, full stack",
    description:
      "Strategy, architecture, build, and iteration under one roof — not a patchwork of freelancers.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Speed to something real",
    description:
      "Ship a credible MVP faster so you validate with users, not slide decks.",
  },
  {
    icon: <CircleDollarSign className="h-5 w-5" />,
    title: "Founder-friendly economics",
    description:
      "Pay for outcomes and momentum — not a permanent payroll before you have traction.",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Built to scale",
    description:
      "Start lean; evolve the product and stack as usage and revenue grow.",
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "You stay in the CEO seat",
    description:
      "We handle tech execution; you own vision, narrative, and growth.",
  },
];

const StartupStudioSection = () => {
  return (
    <section id="for-startups" className="border-y bg-gradient-to-b from-background to-accent/20 py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Startup Studio
          </motion.p>
          <motion.h2
            className="mb-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            Don&apos;t hire. Just build.
          </motion.h2>
          <motion.p
            className="mb-6 text-lg font-medium text-foreground sm:text-xl"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            We&apos;re your end-to-end tech team — from validating the idea to shipping the MVP and scaling what works.
          </motion.p>
          <motion.p
            className="text-muted-foreground sm:text-lg"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            Most founders don&apos;t fail on vision; they stall on execution. LevelUp Engineers acts as your complete tech
            partner — so you move from idea → MVP → launch → scale without building an in-house team first.{" "}
            <span className="font-medium text-foreground">We handle tech. You focus on growth.</span>
          </motion.p>
        </div>

        <div className="mx-auto mt-4 max-w-2xl text-center">
          <p className="text-sm text-muted-foreground">
            Idea validation → MVP → launch → scale · From concept to customers — without hiring a dev team.
          </p>
        </div>

        <motion.div
          className="mx-auto mt-14 max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="mb-8 text-center font-display text-2xl font-bold sm:text-3xl">Why founders choose this</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item, i) => (
              <motion.div
                key={item.title}
                className="rounded-xl border bg-card p-6 transition-all hover:shadow-md"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <h4 className="mb-2 font-display font-semibold">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mx-auto mt-14 flex max-w-xl flex-col items-center gap-3 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <Button asChild size="lg" className="gap-2 text-base">
            <Link to="/contact?interest=startup-mvp">
              Book a free strategy call <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground">15 minutes. We&apos;ll tell you honestly if we&apos;re the right fit.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default StartupStudioSection;
