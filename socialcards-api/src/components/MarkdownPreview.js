import React, { useRef, useEffect, useState, useCallback } from "react";

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
  const [preview2, setPreview2] = useState();
  const [preview3, setPreview3] = useState();
  const [preview4, setPreview4] = useState();
  const previewRef = useRef();

  function create1(strHTML) {
    let preview_portal = document.querySelector("#div1");
    // preview_portal.appendChild(createNode(strHTML));
    preview_portal.innerHTML=(strHTML);
  }

  function create2(strHTML) {
    let parsedMarkup = document.createRange().createContextualFragment(strHTML);
    let previewportal2 = document.querySelector("#div2");
    previewportal2.appendChild(parsedMarkup);
  }

  function create3(htmlSTR) {
    let previewportal3 = document.querySelector("#div3");
    let subDom = new DOMParser();
    let new_child = subDom.parseFromString(htmlSTR, "text/html");

    previewportal3.innerHTML = new_child;
    previewRef.current = new_child;
  }

  function create4(markdown) {
    let previewportal4 = document.querySelector("#div4");
    let parsedMarkup = document.createDocumentFragment();
    parsedMarkup.innerHTML = markdown;
    let preview_portal = document.querySelector("#previewPortal");
    previewportal4.append(parsedMarkup);
    console.log({ preview_portal });
  }

  // function handleLogMarkup(){
  //   console.log({ parsedMarkup });
  //   console.log({ newref });
  // }

  useEffect(() => {
    create1(markdown);
    create2(markdown);
    create3(markdown);
    create4(markdown);
  }, [markdown]);

  return (
    <>
      <section id="previewPortal" style={portalStyle}>
        {preview}
        <div style={{ border: "1rem solid black" }}>
          <h2>create1</h2>
          <div id="div1"></div>
        </div>
        <div style={{ border: "1rem solid black" }}>
          <h2>create2</h2>
          <div id="div2"></div>
        </div>
        <div style={{ border: "1rem solid black" }}>
          <h2>create3</h2>
          <div id="div3"></div>
        </div>
        <div style={{ border: "1rem solid black" }}>
          <h2>create4</h2>
          <div id="div4"></div>
        </div>

        <p>{preview}</p>
        <div ref={previewRef}></div>
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
