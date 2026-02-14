import { instructors } from "@/lib/courseData";
import { motion } from "framer-motion";
import { Linkedin, Briefcase, Clock } from "lucide-react";

const InstructorShowcase = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-accent/30 to-background" />
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
          >
            Our Mentors
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mb-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl"
          >
            Learn from the Best
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Senior engineers and tech leads from Google, Amazon, Microsoft & more — here to guide you.
          </motion.p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {instructors.map((inst, i) => (
            <motion.article
              key={inst.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20"
            >
              {/* Card top - photo & overlay */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={inst.image}
                  alt={inst.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/20 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">{inst.name}</h3>
                    <p className="text-sm font-medium text-primary">{inst.company}</p>
                  </div>
                  <a
                    href={inst.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/90 text-primary-foreground transition-colors hover:bg-primary"
                    aria-label={`${inst.name} on LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                    <Briefcase className="h-3 w-3" />
                    {inst.role}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {inst.experience}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground line-clamp-4">
                  {inst.bio}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorShowcase;
