function convertHtmlEntities(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }

  return [...str].map(char => htmlEntities[char] || char).join("");
}
