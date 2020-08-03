import React from "react";

export default function PreviewCard({ linkData }) {
  return (
    <a className="preview" href={linkData.url} >
      <img src={linkData.image} alt={linkData.title} style={{width:"600px"}}/>
      <div>
        <h4>{linkData.title}</h4>
        <p>{linkData.description || linkData.title}</p>
      </div>
    </a>
  );
}
