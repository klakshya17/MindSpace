import React from "react";
import BlogCard from "../components/Blog_Card";
import Blogs from "../attributes/Blogs";
function BlogPage() {
  const arr = Blogs.map((Blogs) => {
    return (
      <BlogCard
        title={Blogs.title}
        date={Blogs.date}
        content={Blogs.content}
        writer={Blogs.writer}
      />
    );
  });
  return (
    <div className="BlogPage">
      <h2>Blog Page</h2>
      {arr}{" "}
    </div>
  );
}
export default BlogPage;
