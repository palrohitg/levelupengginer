import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Shield,
  Users,
  Target,
  Clock,
  Award,
  CheckCircle,
  X,
  Star
} from "lucide-react";

const advantages = [
  {
    title: "Enterprise-Grade Engineering",
    description: "Engineers from FAANG & unicorn companies with battle-tested experience",
    icon: <Award className="h-6 w-6" />,
    benefits: [
      "Code quality that scales to millions of users",
      "Security and performance from day one",
      "Architecture that handles rapid growth"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Full-Stack Ownership",
    description: "One unified team handles design, development, DevOps, and scaling",
    icon: <Users className="h-6 w-6" />,
    benefits: [
      "No handoffs or communication gaps",
      "Consistent vision across all touchpoints",
      "Faster iteration and deployment cycles"
    ],
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Founder-First Approach",
    description: "We think like founders, not just engineers. Your success is our success.",
    icon: <Target className="h-6 w-6" />,
    benefits: [
      "Strategic product decisions, not just technical ones",
      "Focus on business outcomes over feature lists",
      "Partnership mentality throughout the journey"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Lightning-Fast Delivery",
    description: "From idea to production in weeks, not months. No bureaucracy.",
    icon: <Zap className="h-6 w-6" />,
    benefits: [
      "Direct communication, no project managers",
      "Agile methodology optimized for startups",
      "Continuous deployment and user feedback loops"
    ],
    color: "from-orange-500 to-red-500"
  }
];

const comparisonData = [
  { feature: "Engineering Quality", studio: true, freelancers: false, agencies: true },
  { feature: "Full-Stack Coverage", studio: true, freelancers: false, agencies: true },
  { feature: "Strategic Guidance", studio: true, freelancers: false, agencies: false },
  { feature: "Speed to Market", studio: true, freelancers: false, agencies: false },
  { feature: "Cost Efficiency", studio: true, freelancers: false, agencies: false },
  { feature: "Scalability Focus", studio: true, freelancers: false, agencies: true }
];

const StartupStudioCompetitiveAdvantage = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-accent/20 to-background py-24">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />

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
              <Star className="mr-2 h-4 w-4" />
              Why Choose Our Studio
            </Badge>
            <h2 className="mb-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Not Just Engineers.
              <span className="text-primary"> Strategic Partners.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We don't just write code. We help you build products that win markets and attract investors.
            </p>
          </motion.div>
        </div>

        {/* Advantages Grid */}
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {advantages.map((advantage, i) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="group overflow-hidden border-0 bg-white/60 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-slate-800/60">
                <CardHeader>
                  <div className="mb-4 flex items-center gap-3">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${advantage.color} text-white shadow-lg`}>
                      {advantage.icon}
                    </div>
                    <CardTitle className="text-xl font-bold">{advantage.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {advantage.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${advantage.color}`} />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          className="rounded-2xl border bg-card/60 backdrop-blur-sm shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="p-6 md:p-8">
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl font-bold mb-2">How We Compare</h3>
              <p className="text-muted-foreground">See why startups choose our studio over traditional options</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold">Feature</th>
                    <th className="text-center py-3 px-4 font-semibold text-primary">Our Studio</th>
                    <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Freelancers</th>
                    <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Agencies</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={row.feature} className="border-b border-border/50">
                      <td className="py-3 px-4 font-medium">{row.feature}</td>
                      <td className="py-3 px-4 text-center">
                        <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                      </td>
                      <td className="py-3 px-4 text-center">
                        {row.freelancers ? (
                          <CheckCircle className="h-5 w-5 text-emerald-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {row.agencies ? (
                          <CheckCircle className="h-5 w-5 text-emerald-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3 text-primary font-medium">
            <Shield className="h-5 w-5" />
            <span>Risk-free guarantee: Love our work or get your money back</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StartupStudioCompetitiveAdvantage;