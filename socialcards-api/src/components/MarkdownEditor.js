import React, { useState } from "react";

export default function MarkdownEditor({setMarkdown,markdown}) {

  function handleChange(event) {
    setMarkdown(event.target.value);
  }

  return (
    <>
      <section>
        <h2>Update Markdown to preview your socials card</h2>
        <textarea
          cols="50"
          rows="10"
          id="markdowneditor"
          name="markdowneditor"
          placeholder=""
          value={markdown}
          onChange={handleChange}
        />
 
      </section>
    </>
  );
}
