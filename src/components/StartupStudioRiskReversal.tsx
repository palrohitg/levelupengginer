import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Shield,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Zap
} from "lucide-react";

const guarantees = [
  {
    icon: <Clock className="h-8 w-8" />,
    title: "30-Day Money-Back Guarantee",
    description: "Not satisfied with our work? Get a full refund, no questions asked.",
    details: "We stand behind our quality. If you're not completely satisfied within the first 30 days, we'll refund 100% of your payment.",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "IP Ownership & Security",
    description: "You own everything we build. Enterprise-grade security and NDAs.",
    details: "All code, designs, and intellectual property belong to you. We use bank-level security and sign comprehensive NDAs.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Dedicated Team Commitment",
    description: "Same engineers from start to finish. No team switching or handoffs.",
    details: "Your project gets a dedicated team that stays with you throughout the entire journey, ensuring consistency and quality.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "On-Time Delivery Promise",
    description: "Missed deadlines? We work extra hours to make it right.",
    details: "We guarantee delivery within agreed timelines. If we miss a deadline, we'll extend your project at no extra cost.",
    color: "from-orange-500 to-red-500"
  }
];

const testimonials = [
  {
    quote: "The money-back guarantee gave us confidence to start. Best decision we made.",
    author: "Sarah Chen",
    company: "TechFlow",
    rating: 5
  },
  {
    quote: "They delivered exactly what they promised, on time and within budget.",
    author: "Mike Rodriguez",
    company: "DataSync",
    rating: 5
  },
  {
    quote: "The IP ownership and security measures exceeded our expectations.",
    author: "Lisa Wang",
    company: "SecurePay",
    rating: 5
  }
];

const StartupStudioRiskReversal = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-grid-slate-700/25" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="container relative">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary border-primary/30">
              <Shield className="mr-2 h-4 w-4" />
              Risk-Free Partnership
            </Badge>
            <h2 className="mb-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Zero Risk.
              <span className="text-primary"> Maximum Reward.</span>
            </h2>
            <p className="text-lg text-slate-300">
              We take all the risk so you can focus on building something amazing.
              If we don't deliver exceptional results, you don't pay.
            </p>
          </motion.div>
        </div>

        {/* Guarantees Grid */}
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {guarantees.map((guarantee, i) => (
            <motion.div
              key={guarantee.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <div className="mb-4 flex items-center gap-3">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${guarantee.color} text-white shadow-lg`}>
                      {guarantee.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-white">{guarantee.title}</CardTitle>
                  </div>
                  <p className="text-slate-300 font-medium">{guarantee.description}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-400">{guarantee.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl font-bold mb-2">What Founders Say</h3>
            <p className="text-slate-300">Real feedback from startups who've worked with us</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="mb-4 flex gap-0.5">
                      {Array.from({ length: testimonial.rating }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-slate-200 mb-4 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-sm text-slate-400">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Card className="border-slate-700 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm shadow-2xl max-w-2xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Ready to Start Risk-Free?</h3>
                <p className="text-slate-300">
                  Book a free consultation and see how we can help you build your startup without any upfront risk.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                  <Link to="/startup-studio/contact">
                    <Users className="h-5 w-5" />
                    Book Free Consultation
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-slate-600 bg-slate-700/50 text-white hover:bg-slate-700 gap-2">
                  <Link to="/startup-studio">
                    <ArrowRight className="h-5 w-5" />
                    Learn More
                  </Link>
                </Button>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-slate-400">
                  ✓ No upfront payment required
                  <br />
                  ✓ 30-day money-back guarantee
                  <br />
                  ✓ Free consultation with no obligation
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default StartupStudioRiskReversal;