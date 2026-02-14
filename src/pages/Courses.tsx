import Navbar from "@/components/Navbar";
import CoursesOverview from "@/components/CoursesOverview";
import Footer from "@/components/Footer";

const Courses = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <CoursesOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
