import React from 'react';
import MentorList from '../Comnonent/MentorList';

export const metadata = {
  title: "Industry Mentors & 1-on-1 Coaching — TechLearning",
  description: "Connect with seasoned software engineers, product designers, and tech leads from top companies for personal career guidance and project reviews.",
};

const MentorPage = () => {
  return (
    <div className="min-h-screen bg-[#07090e]">
      <MentorList />
    </div>
  );
};

export default MentorPage;