import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote, TrendingUp, Users, DollarSign } from "lucide-react";

const startupStories = [
  {
    name: "Shoppin",
    founder: "Rahul Sharma",
    avatar: "RS",
    funding: "$2.5M",
    users: "50K+",
    growth: "300%",
    description: "From idea to Series A in 18 months. Built their entire e-commerce platform with our studio team.",
    quote: "Level Up Engineers didn't just build our product—they became an extension of our founding team.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "PandaMoney",
    founder: "Priya Patel",
    avatar: "PP",
    funding: "$4.2M",
    users: "100K+",
    growth: "500%",
    description: "Fintech startup that scaled from MVP to 100K users in 12 months with enterprise-grade security.",
    quote: "The engineering quality and speed of delivery exceeded our wildest expectations.",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    name: "Source Asia",
    founder: "Arun Kumar",
    avatar: "AK",
    funding: "$1.8M",
    users: "75K+",
    growth: "400%",
    description: "B2B platform that achieved product-market fit in 8 months and raised seed funding.",
    quote: "Working with their team felt like having a full engineering department without the hiring headaches.",
    gradient: "from-purple-500 to-pink-500"
  }
];

const StartupStudioSocialProof = () => {
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
              Success Stories
            </Badge>
            <h2 className="mb-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              From Idea to IPO:
              <span className="text-primary"> Real Founder Journeys</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Meet the founders who've turned their vision into reality with our engineering studio.
            </p>
          </motion.div>
        </div>

        {/* Startup Stories */}
        <div className="grid gap-8 lg:grid-cols-3">
          {startupStories.map((story, i) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="group relative overflow-hidden border-0 bg-white/60 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 dark:bg-slate-800/60">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {story.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-lg">{story.founder}</h3>
                        <p className="text-sm text-muted-foreground">Founder, {story.name}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {story.funding}
                    </Badge>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-lg font-bold text-primary">{story.users}</div>
                      <div className="text-xs text-muted-foreground">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <TrendingUp className="h-4 w-4 text-emerald-500" />
                      </div>
                      <div className="text-lg font-bold text-emerald-500">{story.growth}</div>
                      <div className="text-xs text-muted-foreground">Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <DollarSign className="h-4 w-4 text-purple-500" />
                      </div>
                      <div className="text-lg font-bold text-purple-500">{story.funding}</div>
                      <div className="text-xs text-muted-foreground">Raised</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{story.description}</p>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/20" />
                    <blockquote className="text-sm italic text-foreground pl-6 border-l-2 border-primary/20">
                      "{story.quote}"
                    </blockquote>
                  </div>
                </CardContent>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${story.gradient}`} />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 via-emerald-500/10 to-purple-500/10 p-8 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="grid gap-6 md:grid-cols-4 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Startups Built</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-500 mb-1">$25M+</div>
              <div className="text-sm text-muted-foreground">Funding Raised</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-500 mb-1">85%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-1">3</div>
              <div className="text-sm text-muted-foreground">Successful Exits</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StartupStudioSocialProof;