import Campain from "./Comnonent/Campain";
import CourseCard from "./Comnonent/CourseCard";
import Ebook from "./Comnonent/Ebook";
import Evant from "./Comnonent/Evant";
import ExclusiveSolutions from "./Comnonent/ExclusiveSolutions";
import FiltarCourch from "./Comnonent/FiltarCourch";
import MentorList from "./Comnonent/MentorList";
import SaktionComent from "./Comnonent/SaktionComent";
import SuccessStoriesSection from "./Comnonent/SuccessStoriesSection";
import Hero from "./Hero/Hero";
import Hero2 from "./Hero/Hero2";

export default function Home() {
  return (
    <div className="mx-auto bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900">
      {/* <AllCourse></AllCourse> */}

      {/* <Produx></Produx> */}
      <Hero></Hero>
      <Hero2></Hero2>
      <CourseCard></CourseCard>
      <FiltarCourch></FiltarCourch>
      <div className="h-screen">
        <Ebook></Ebook>
      </div>
      <MentorList></MentorList>
      <SuccessStoriesSection></SuccessStoriesSection>

      <Evant></Evant>

      <Campain></Campain>

      <ExclusiveSolutions></ExclusiveSolutions>
      <SaktionComent></SaktionComent>
    </div>
  );
}
