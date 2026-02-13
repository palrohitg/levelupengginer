import { UserCheck, FileText, Share2, Briefcase, GraduationCap, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <UserCheck className="h-6 w-6" />,
    title: "1:1 Mentorship",
    description: "Personal guidance from engineers at FAANG and top product companies.",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Resume Review",
    description: "Get your resume optimized by hiring managers and recruiters.",
  },
  {
    icon: <Share2 className="h-6 w-6" />,
    title: "Referrals",
    description: "Direct referrals to Google, Amazon, Microsoft, Zomato & more.",
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Mock Interviews",
    description: "Practice with real interviewers in simulated interview settings.",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Industry Curriculum",
    description: "Courses designed by engineers from top tech companies.",
  },
  {
    icon: <HeartHandshake className="h-6 w-6" />,
    title: "Placement Support",
    description: "End-to-end support until you land your dream role.",
  },
];

const WhyUs = () => {
  return (
    <section className="bg-accent/30 py-20">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl">Why Level Up Engineers?</h2>
          <p className="text-muted-foreground">
            We don't just teach — we mentor, guide, and place you at the best companies.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="rounded-xl border bg-card p-6 transition-all hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {f.icon}
              </div>
              <h3 className="mb-2 font-display font-semibold">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
