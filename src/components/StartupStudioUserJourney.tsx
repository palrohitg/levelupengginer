import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Lightbulb,
  Users,
  Code,
  Rocket,
  TrendingUp,
  Target,
  Award,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const journeySteps = [
  {
    phase: "Discovery",
    title: "You Have an Idea",
    description: "A problem that needs solving, a market opportunity, or a vision for change.",
    icon: <Lightbulb className="h-8 w-8" />,
    color: "from-yellow-500 to-orange-500",
    duration: "Week 1"
  },
  {
    phase: "Strategy",
    title: "We Define Success",
    description: "Market research, user interviews, competitive analysis, and product strategy.",
    icon: <Target className="h-8 w-8" />,
    color: "from-blue-500 to-cyan-500",
    duration: "Week 1-2"
  },
  {
    phase: "Design",
    title: "Product Design & Planning",
    description: "User experience design, technical architecture, and development roadmap.",
    icon: <Users className="h-8 w-8" />,
    color: "from-purple-500 to-pink-500",
    duration: "Week 2-3"
  },
  {
    phase: "Build",
    title: "MVP Development",
    description: "Full-stack development, testing, and iteration based on real user feedback.",
    icon: <Code className="h-8 w-8" />,
    color: "from-emerald-500 to-teal-500",
    duration: "Week 3-6"
  },
  {
    phase: "Launch",
    title: "Go-to-Market",
    description: "Production deployment, user acquisition, and initial growth optimization.",
    icon: <Rocket className="h-8 w-8" />,
    color: "from-indigo-500 to-purple-500",
    duration: "Week 6-8"
  },
  {
    phase: "Scale",
    title: "Growth & Optimization",
    description: "Performance optimization, feature expansion, and scaling infrastructure.",
    icon: <TrendingUp className="h-8 w-8" />,
    color: "from-green-500 to-emerald-500",
    duration: "Week 8+"
  },
  {
    phase: "Success",
    title: "Fundraising & Exit",
    description: "Product-market fit achieved, ready for investment or acquisition.",
    icon: <Award className="h-8 w-8" />,
    color: "from-orange-500 to-red-500",
    duration: "Ongoing"
  }
];

const StartupStudioUserJourney = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-accent/20 py-24">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="container relative">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <ArrowRight className="mr-2 h-4 w-4" />
              Your Journey to Success
            </Badge>
            <h2 className="mb-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              From Idea to
              <span className="text-primary"> Unicorn</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We've guided hundreds of founders through this exact journey. Here's what success looks like.
            </p>
          </motion.div>
        </div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 md:left-1/2 md:-ml-0.5" />

          <div className="space-y-8">
            {journeySteps.map((step, i) => (
              <motion.div
                key={step.phase}
                className={`relative flex items-center gap-8 md:gap-12 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 rounded-full bg-primary border-4 border-background md:left-1/2 md:-ml-2 z-10" />

                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="group overflow-hidden border-0 bg-white/60 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-slate-800/60">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} text-white shadow-lg`}>
                          {step.icon}
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-1 text-xs font-medium">
                            {step.phase}
                          </Badge>
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-lg">{step.title}</h3>
                            <Badge variant="secondary" className="text-xs">
                              {step.duration}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground">{step.description}</p>

                      {i < journeySteps.length - 1 && (
                        <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                          <ArrowRight className="h-4 w-4" />
                          <span>Next: {journeySteps[i + 1].phase}</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <motion.div
          className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 via-emerald-500/10 to-purple-500/10 p-8 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="text-center mb-6">
            <h3 className="font-display text-xl font-semibold mb-2">Average Timeline to Success</h3>
            <p className="text-muted-foreground">Based on our portfolio of successful startups</p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-slate-800/50">
              <div className="text-2xl font-bold text-primary mb-1">4-6 weeks</div>
              <div className="text-sm text-muted-foreground">MVP Launch</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-slate-800/50">
              <div className="text-2xl font-bold text-emerald-500 mb-1">3-6 months</div>
              <div className="text-sm text-muted-foreground">Product-Market Fit</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-slate-800/50">
              <div className="text-2xl font-bold text-purple-500 mb-1">6-12 months</div>
              <div className="text-sm text-muted-foreground">Seed Funding</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-slate-800/50">
              <div className="text-2xl font-bold text-orange-500 mb-1">12-18 months</div>
              <div className="text-sm text-muted-foreground">Series A Ready</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StartupStudioUserJourney;