import React, { useState } from "react";
import "./SingleTemplate.css";

export default function Template({ template, setTemplates }) {


function handleSidebarStorage(){}
function handleLocalStorage(){}
  return (
    <>
      <div>
      {template.name}
      {template.timestamp}
      {template.markdown}
        <button class="tooltip">
          sidebar
          <span class="tooltiptext">store template in sidebar?</span>
        </button>
        <button class="tooltip">
         copy
          <span class="tooltiptext">take this one with you?</span>
        </button>
      </div>
    </>
  );
}
