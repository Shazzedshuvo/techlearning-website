import React from 'react';
import Ebook from '../Comnonent/Ebook';

export const metadata = {
  title: "Free E-Books, Cheat Sheets & Developer Guides — TechLearning",
  description: "Download free e-books, cheat sheets, design templates, and interview preparation guides crafted by experienced engineers.",
};

const EbookPage = () => {
  return (
    <div className="min-h-screen bg-[#07090e]">
      <Ebook />
    </div>
  );
};

export default EbookPage;