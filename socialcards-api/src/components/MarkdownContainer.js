import React, { useState } from "react";
import MarkdownEditor from "./MarkdownEditor";
import MarkdownPreview from "./MarkdownPreview";

export default function MarkdownContainer() {

  const [markdown, setMarkdown] = useState("");
  return (
    <>
   
        <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
        <MarkdownPreview markdown={markdown} />
    
    </>
  );
}
