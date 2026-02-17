import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Level Up Engineers" className="h-9 w-9 rounded-lg object-cover" />
              <span className="font-display text-lg font-bold">Level Up Engineers</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering engineers to crack top tech companies with expert mentorship and structured learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-display font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="mb-4 font-display font-semibold">Courses</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/courses/interview-prep" className="hover:text-primary transition-colors">Intensive Interview Prep Program</Link></li>
              <li><Link to="/courses/backend-engineering" className="hover:text-primary transition-colors">Backend Engineering</Link></li>
              <li><Link to="/courses/devops-sre" className="hover:text-primary transition-colors">DevOps + SRE</Link></li>
              <li><Link to="/courses/full-stack" className="hover:text-primary transition-colors">Full Stack Engineering</Link></li>
              <li><Link to="/courses/data-engineering" className="hover:text-primary transition-colors">Data Engineering</Link></li>
              <li><Link to="/courses/android-engineering" className="hover:text-primary transition-colors">Android Engineering</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> contact@levelupengineers.com</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 72069 12018</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Gurugram, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Level Up Engineers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
