import { AxiosResponse } from "axios";

// Return HTML from string Wiktionary Response
export const parseWiktionaryResponse = (
  wiktionaryResponse: AxiosResponse<string>,
) => {
  // Get from the HTML the only elements we want to display
  const parser = new DOMParser();
  const document = parser.parseFromString(
    wiktionaryResponse?.data,
    "text/html",
  );

  return document;
};
