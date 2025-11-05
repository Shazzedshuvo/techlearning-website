
import CourseCard from "./Comnonent/CourseCard";
import ExclusiveSolutions from "./Comnonent/ExclusiveSolutions";
import Footer from "./Comnonent/Footer";
import Navbar from "./Comnonent/Navbar ";
import SuccessStoriesSection from "./Comnonent/SuccessStoriesSection";
import Hero from "./Hero/Hero";
import SetCounte from "./SetCountar/SetCounte";

export default function Home() {
  return (
   <div className="container mx-auto bg-gradient-to-br from-gray-900 to-gray-950">
  <Navbar></Navbar>
  <Hero></Hero>
  <CourseCard></CourseCard>
  <SuccessStoriesSection></SuccessStoriesSection>

  <ExclusiveSolutions></ExclusiveSolutions>
  <Footer></Footer>

   </div>
  );
}
