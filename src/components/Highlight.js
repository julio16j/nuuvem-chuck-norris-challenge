import React from "react";

function HighlighText ({ text = "", regexTerm = "" }) {
  if (!regexTerm.trim()) {
    return <span>{text}</span>;
  }
  const regex = new RegExp(`(${regexTerm})`, "i");
  const parts = text.split(regex);

  return (
    <span>
      {parts.filter(String).map((part, i) => {
        return regex.test(part) ? (
          <mark key={i}>{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </span>
  );
};
export default HighlighText