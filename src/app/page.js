import Hero from "./Hero/Hero";
import Hero2 from "./Hero/Hero2";
import FiltarCourch from "./Comnonent/FiltarCourch";
import CourseCard from "./Comnonent/CourseCard";
import ExclusiveSolutions from "./Comnonent/ExclusiveSolutions";
import Ebook from "./Comnonent/Ebook";
import MentorList from "./Comnonent/MentorList";
import SuccessStoriesSection from "./Comnonent/SuccessStoriesSection";
import Evant from "./Comnonent/Evant";
import Campain from "./Comnonent/Campain";
import SaktionComent from "./Comnonent/SaktionComent";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Hero2 />
      <FiltarCourch />
      <CourseCard />
      <ExclusiveSolutions />
      <Ebook />
      <MentorList />
      <SuccessStoriesSection />
      <Evant />
      <Campain />
      <SaktionComent />
    </div>
  );
}
