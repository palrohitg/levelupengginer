import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InstructorShowcase from "@/components/InstructorShowcase";
import CTABanner from "@/components/CTABanner";
import { Target, Heart, Rocket, Shield } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  { icon: <Target className="h-6 w-6" />, title: "Placement-Focused", description: "Everything we do is geared towards getting you hired at top companies." },
  { icon: <Heart className="h-6 w-6" />, title: "Mentorship-First", description: "We believe in personal guidance over mass lectures. Every student gets 1:1 attention." },
  { icon: <Rocket className="h-6 w-6" />, title: "Industry-Relevant", description: "Our curriculum is built by engineers who work at the companies you want to join." },
  { icon: <Shield className="h-6 w-6" />, title: "Trust & Transparency", description: "No hidden fees, no false promises. Just honest mentorship and real results." },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-accent/30 py-20">
          <div className="container">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-4 font-display text-4xl font-extrabold sm:text-5xl">About Level Up Engineers</h1>
              <p className="text-lg text-muted-foreground">
                We started Level Up Engineers with a simple mission — to bridge the gap between college education and what top tech companies actually look for. Our mentors have been through the journey themselves and are here to guide you every step of the way.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <h2 className="font-display text-3xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground">
                To democratize access to high-quality tech mentorship. We believe every motivated engineer deserves guidance from the best — not just those who can afford elite coaching or have the right connections. Through structured programs, 1:1 mentorship, and real-world project experience, we help engineers go from aspiring to hired.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-accent/30 py-20">
          <div className="container">
            <h2 className="mb-12 text-center font-display text-3xl font-bold">Our Values</h2>
            <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  className="rounded-xl border bg-card p-6"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {v.icon}
                  </div>
                  <h3 className="mb-2 font-display font-semibold">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <InstructorShowcase />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default About;
