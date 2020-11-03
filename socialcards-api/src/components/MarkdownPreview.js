import React, { useEffect, useState } from "react";

export default function MarkdownPreview({ markdown }) {
  const portalStyle = {
    border: "solid red 3px",
    boxShadow: "0px 0px 6px 4px black,0px 0px 1px 3px black",
    width: "700px",
    height: "500px",
    boxSizing: "border-box",
  };
  const [preview, setPreview] = useState(`
  <div style="
  color:pink;
  font-size:3rem;
  text-shadow:
   .51px .51px 3px white,
   -.51px -.51px 3px black;
  background:firebrick;
  padding:1rem;"
   onmouseenter="this.style.color='black';" 
   onmouseleave="this.style.color='pink';"
  >TuckerTime</div>`);

  function create2(strHTML) {
    let parsedMarkup = document.createRange().createContextualFragment(strHTML);
    let previewportal2 = document.querySelector("#div2");
    previewportal2.appendChild(parsedMarkup);
  }

  useEffect(() => {
    create2(markdown);
  }, [markdown]);

  return (
    <>
      <section id="previewPortal" style={portalStyle}>
        {preview}
        <div style={{ border: "1rem solid black" }}>
          <h2>create2</h2>
          <div id="div2"></div>
        </div>
      </section>
    </>
  );
}

{
  /**
      ##U
      user inputs markup 
      markup is converted to DOM elements and displayed in the preview window
      updates made live everything is stored here in the window instance
      
      ##P
      user inputs markup string
      markup is parsed and stored as an array of strings in  application state
      state.markup is translated into dome elements and appended to the preview window
      ##E
      
      
      
      ##R
      
      */
}
