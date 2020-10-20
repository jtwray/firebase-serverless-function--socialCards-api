import React, { useState, useEffect } from "react";
import axios from "axios";
import PreviewCard from "../PreviewCard"

export default function FacebookPreview({form_array}) {
  const [loading, setLoading] = useState();

  const [previews, setPreviews] = useState();

  function handleFetchPreviews() {
    setLoading(true);
    form_array.split(",").forEach((url) => {
      axios
        .post(`https://graph.facebook.com?id=${url}&scrape=true`)
        .then(({ data }) => setPreviews([...previews, data]))
        .catch(({ message }) => console.error({ message }));
    });
    setLoading(false);
  }

  return (
    <>
      {!loading &&
        previews &&
        previews.map((card) => <PreviewCard card={card} />)}

      <button onClick={handleFetchPreviews()}>
        get OPENGRAPH/facebook previews
      </button>
    </>
  );
}
