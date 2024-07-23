"use client";

import { useState } from "react";

export default function TextExpander({ description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const textToShow = isExpanded
    ? description
    : description.split(" ").slice(0, 40).join(" ") + "...";

  return (
    <div>
      <p>{textToShow}</p>
      <button onClick={() => setIsExpanded((isExpanded) => !isExpanded)}>
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </div>
  );
}
