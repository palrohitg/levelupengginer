import { instructors } from "@/lib/courseData";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const InstructorShowcase = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl">Learn from the Best</h2>
          <p className="text-muted-foreground">
            Our instructors are senior engineers and tech leads from top companies.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {instructors.map((inst, i) => (
            <motion.div
              key={inst.name}
              className="flex items-center gap-4 rounded-xl border bg-card p-4 transition-all hover:shadow-md"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
            >
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                  {inst.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-display font-semibold text-sm">{inst.name}</div>
                <div className="text-xs text-muted-foreground">{inst.role}</div>
                <div className="text-xs font-medium text-primary">{inst.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorShowcase;
