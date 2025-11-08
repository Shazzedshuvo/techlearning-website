// "use client";

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCourseData } from "../Redux/courseSlice";

// const Saktion = () => {
//   const dispatch = useDispatch();
//   const courseState = useSelector((state) => state.courseSlice); // store key used in your store

//   useEffect(() => {
//     dispatch(fetchCourseData());
//   }, [dispatch]);

//   const { loading, courseData: items = [], error } = courseState || {};
//   return (
//     <div className="text-white flex flex-col justify-center items-center px-4 py-20 container">
//       <div className="flex justify-between items-center gap-25">
//         <div className="relative bg-gradient-to-br from-blue-900/20 via-gray-900 to-blue-950 border border-blue-500/40 rounded-2xl p-8 shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:shadow-[0_0_45px_rgba(59,130,246,0.45)] transition-all duration-500"></div>
//         {items.map((item) => (
//           <div key={item.id}>
//             <h1>{item.title}</h1>
//             <img src={item.image} alt={item.title} />
//           </div>
//         ))}
        
//       </div>
//     </div>
//   );
// };

// export default Saktion;
