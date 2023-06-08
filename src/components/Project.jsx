import React from "react";
import "./Project.css";

export default function Project({ post }) {

  return (
    <div class="container">
      <div class="project-container">
        <h2 className="project-title">{post.title.rendered}</h2>
        <p className="project-date">
          {new Date(Date.now()).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </p>
        <p
          className="project-content"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
        
      </div>
    </div>
  );
}