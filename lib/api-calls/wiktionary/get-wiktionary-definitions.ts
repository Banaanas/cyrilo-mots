import axios from "axios";

import { getWordDefinitionsFromDocument } from "./get-word-definitions-from-document";
import { parseWiktionaryResponse } from "./parse-wiktionary-response";

export const fetchWiktionaryDefinitionsErrorString =
  "Une erreur empêche d'afficher la définition Wiktionary du mot.";

// REST API for wiktionary word definition exists but not in French yet :
// https://en.wiktionary.org/api/rest_v1/page/definition/tree
// https://fr.wiktionary.org/api/rest_v1/page/definition/nuage

// That's why we're using the API to retrieve the global Page's HTML
// Then we refine the Nodes list
export const getWiktionaryDefinitions = async (word: string) => {
  try {
    const response = await axios.get<string>(
      `https://fr.wiktionary.org/api/rest_v1/page/html/${word}`,
    );

    const document = parseWiktionaryResponse(response);

    // Return Array of strings
    const wordDefinitions = getWordDefinitionsFromDocument(document);

    return wordDefinitions;
  } catch {
    // Return String (Error Text used in  WordsDefinition.tsx)
    return fetchWiktionaryDefinitionsErrorString;
  }
};
