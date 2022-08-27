/* eslint no-param-reassign: 0 */

// Extract the Word Definitions from the document
export const getWordDefinitionsFromDocument = (document: Document) => {
  // For some reason, the API send us internal links for inner Wiktionary anchors
  // eg. <a href="./nuage">nuage</a>
  // So we have to replace the internal link with a Wiktionary one.
  // Strangely, it works by only reassigning the retrieved href.
  document.querySelectorAll("a").forEach((anchor) => {
    if (anchor.rel === "mw:WikiLink") {
      // Update href with Wiktionary
      anchor.href = `${anchor.href}`;
      // Make the link open in a new tab
      anchor.rel = "noopener noreferrer";
      anchor.target = "_blank";
    }
  });

  // Wiktionary's definitions are wrapped into <ol> tags
  const wordDefinitionsNodeList = document.querySelectorAll("ol");

  // From NodeList, get array of HTML Definitions
  const wordDefinitions = Array.from(wordDefinitionsNodeList).map(
    // eslint-disable-next-line @typescript-eslint/no-shadow
    (word) => word.innerHTML,
  );

  return wordDefinitions;
};
