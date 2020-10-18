import React,{useRef,useState,useCallback} from "react";

export default function MarkdownPreview({markdown}) {
  const markdownRef=useRef( )
markdownRef.current=markdown;

const [preview,setPreview]=useState("")

const loadedPreview=useCallback(
  (markdown) => {
    setPreview(markdown)
  },
  [markdown],
)








  return (
    <>
      <section
        style={{
          border: "solid red 3px",
          boxShadow: "0px 0px 6px 4px black,0px 0px 1px 3px black",
          width: "700px",
          height: "500px",
          boxSizing: "border-box",
        }}
      > 
        <h1>"header" </h1>
        <img src="#" alt="#" />
        <p ref={preview}></p>
      </section>
    </>
  );
}
