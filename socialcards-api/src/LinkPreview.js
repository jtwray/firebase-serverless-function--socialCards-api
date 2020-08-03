import React, { useState, useEffect } from "react";
import PreviewCard from "./PreviewCard.js";

export default function LinkPreview() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState();
  const [links, setLinks] = useState();

  const handleSubmit = async (evt) => {
    setLoading(true);
    evt.preventDefault();
    console.log(`Submitting ${text}`);
  };
  const fetchPreviews = async () => {
    if (loading) {
      const res = await fetch(
        "https://us-central1-socialcards-api.cloudfunctions.net/scraper",
        {
          method: "POST",
          body: JSON.stringify({ text }),
        }
      );
      const data = await res.json();
      console.log(data);
      setLinks(data);
      setLoading(false);
    } 
  };

  useEffect(() => {
    fetchPreviews();
  }, [loading]);

  return (
    <div>
      <h1>Form</h1>
      Try this:{" "}
      <pre>
        a post with some links https://fireship.io and
        https://fireship.io/courses/javascript/
      </pre>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          cols="50"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <h2>Preview</h2>
      <p>{text}</p>
      {loading ? <h3>Fetching link previews... 🤔🤔🤔</h3>:
       
     links &&  links.data.map(obj => <PreviewCard key={obj.url} linkData={obj} />
        )
    }
    
    </div>
  );
}
