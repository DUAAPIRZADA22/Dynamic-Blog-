import AuthorCard from "@/components/AuthorCard";
import CommentSection from "@/components/CommentSection";
import Feature from "@/components/Feature";
import Guide from "@/components/Guide";
import Main from "@/components/Main";


import React from "react";

const page = () => {
  return (
    <div>
      <Feature />
      <Main />
      <Guide />
      <AuthorCard />
      <CommentSection />
    </div>
  );
};

export default page;
