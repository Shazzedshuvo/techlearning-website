// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";
// import { addCource } from "../Redux/courseSlice";
// import { FaStar, FaUserGraduate } from "react-icons/fa";

// const AllCourse = () => {
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const handleCourseClick = (course) => {
//     dispatch(addCource(course));
//     router.push(`/course/${course.id}`);
//   };

//   const [courses, setCourses] = useState([]);

//   const fetchData = async () => {
//     const res = await fetch("/Product.json");
//     const data = await res.json();
//     setCourses(data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="px-6 py-12 container mx-auto ">
//       <h1 className="text-4xl font-extrabold text-center text-white mb-12">
//         All Courses
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {courses.map((course) => (
//           <div
//             key={course.id}
//             className="bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 border border-blue-500/30 rounded-2xl p-6 h-100 shadow-lg hover:shadow-[0_0_40px_rgba(59,130,246,0.45)] transition-all duration-500 flex flex-col"
//           >
//             {/* Course Image */}
//             {course.image && (
//               <img
//                 src={course.image}
//                 alt={course.title}
//                 className="w-full h-48 object-cover rounded-xl mb-4"
//               />
//             )}

//             {/* Title */}
//             <h2 className="text-l col-span-2 line-clamp-1 font-bold text-white mb-2">
//               {course.title}
//             </h2>

//             {/* Reviews + Students */}
//             <div className="flex items-center justify-between text-gray-300 text-sm mb-3">
//               <div className="flex items-center gap-2">
//                 <FaStar className="text-yellow-400" />
//                 <span>{course.rating?.stars || "4.5"}k Reviews</span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <FaUserGraduate className="text-blue-400" />
//                 <span>{course.students || "18,000"} Students</span>
//               </div>
//             </div>

//             {/* Fee */}
//             <div className="text-white font-semibold text-lg mb-4">
//               Course Fee: {course.fee || "50,000 BDT"}
//             </div>

//             {/* Button */}
//             <button
//               onClick={() => handleCourseClick(course)}
//               className="mt-auto w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 rounded-lg transition-all duration-300 active:scale-95"
//             >
//               View Details
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllCourse;
