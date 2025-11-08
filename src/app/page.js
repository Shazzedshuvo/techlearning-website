

import Campain from "./Comnonent/Campain";
import CourseCard from "./Comnonent/CourseCard";
import Evant from "./Comnonent/Evant";
import ExclusiveSolutions from "./Comnonent/ExclusiveSolutions";
import FiltarCourch from "./Comnonent/FiltarCourch";
import Footer from "./Comnonent/Footer";

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
  <SuccessStoriesSection></SuccessStoriesSection>
  <Evant></Evant>
 
<Campain></Campain>

  <ExclusiveSolutions></ExclusiveSolutions>
  <SaktionComent></SaktionComent>


   </div>
  );
}
