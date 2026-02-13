import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { courses } from "@/lib/courseData";

interface LeadCaptureFormProps {
  preselectedCourse?: string;
}

const LeadCaptureForm = ({ preselectedCourse }: LeadCaptureFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: preselectedCourse || "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Thank you for your interest! 🎉",
        description: "Our team will reach out to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", course: preselectedCourse || "", message: "" });
      setSubmitting(false);
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <Input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
      </div>
      <Select value={formData.course} onValueChange={(val) => setFormData({ ...formData, course: val })}>
        <SelectTrigger>
          <SelectValue placeholder="Select a Course" />
        </SelectTrigger>
        <SelectContent>
          {courses.map((c) => (
            <SelectItem key={c.slug} value={c.slug}>
              {c.shortTitle}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Textarea
        placeholder="Your message (optional)"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        rows={3}
      />
      <Button type="submit" className="w-full" size="lg" disabled={submitting}>
        {submitting ? "Submitting..." : "Get in Touch"}
      </Button>
    </form>
  );
};

export default LeadCaptureForm;
