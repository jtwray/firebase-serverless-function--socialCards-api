import React, { useState } from "react";
import Template from 'SingleTemplate'

export default function TemplatesSideBar() {
  const [templates, setTemplates] = useState([]);

  return (
    <>
      {templates.length > 0 &&
        templates.map((template) => <Template template={template} />)}
    </>
  );
}
