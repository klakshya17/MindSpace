import React from "react";
import "./Blog_Card.css";
function BlogCard(props) {
  return (
    <div class="blog">
      <div className="blogTop">
        <h2>{props.title}</h2>
        <date>
          <h4>{props.date}</h4>
        </date>
      </div>
      <p>
        {props.content}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Accumsan lacus vel
        facilisis volutpat. Neque vitae tempus quam pellentesque nec nam. Amet
        consectetur adipiscing elit ut. Euismod quis viverra nibh cras pulvinar.
        Pulvinar neque laoreet suspendisse interdum consectetur libero. A diam
        maecenas sed enim ut sem viverra. Et magnis dis parturient montes
        nascetur ridiculus mus mauris. Ultrices in iaculis nunc sed augue lacus
        viverra vitae. Pretium viverra suspendisse potenti nullam ac. Ultricies
        integer quis auctor elit sed vulputate mi sit amet.
      </p>
      <h4>{props.writer}</h4>
    </div>
  );
}
export default BlogCard;
