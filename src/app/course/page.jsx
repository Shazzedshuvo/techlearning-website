import React from 'react';
import FiltarCourch from '../Comnonent/FiltarCourch';

export const metadata = {
  title: "Professional Tech Courses & Bootcamps — TechLearning",
  description: "Browse comprehensive career-track courses in Full-Stack MERN, React, UI/UX, Python AI, and Digital Marketing with mentor guidance and placement support.",
};

const CoursePage = () => {
  return (
    <div className="min-h-screen bg-[#07090e]">
      <FiltarCourch />
    </div>
  );
};

export default CoursePage;