import styled from "@emotion/styled";
import { AlertOctagon as AlertIcon } from "react-feather";

import { fetchWiktionaryDefinitionsErrorString } from "../../../lib/api-calls/wiktionary/get-wiktionary-definitions";
import { WiktionaryDefinitions } from "../../../types/types";
import {
  WordDefinitionContainer,
  WordDefinitionErrorText,
} from "../../StyledComponents/WordDefinition";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const WordDefinitions = ({
  wiktionaryDefinitions,
}: WordDefinitionProps) => {
  // STRING / UNDEFINED - If Wiktionary API Call resulted in an Error, then a string has been returned from getWiktionaryDefinitions() function - get-wiktionary-definitions.ts
  if (
    !wiktionaryDefinitions ||
    wiktionaryDefinitions.includes(fetchWiktionaryDefinitionsErrorString) ||
    typeof wiktionaryDefinitions === "string"
  )
    return (
      <Container>
        <WordDefinitionErrorText>
          <AlertIcon />
          {fetchWiktionaryDefinitionsErrorString}
        </WordDefinitionErrorText>
      </Container>
    );

  // ARRAY<STRING> - If Wiktionary API Call resulted in a Success, then an Array of strings has been returned from getWiktionaryDefinitions() function - get-wiktionary-definitions.ts

  return (
    <>
      {wiktionaryDefinitions.map((definition) => {
        return (
          <WordDefinitionContainer
            key={definition}
            dangerouslySetInnerHTML={{ __html: definition }}
          />
        );
      })}
    </>
  );
};

interface WordDefinitionProps {
  wiktionaryDefinitions: WiktionaryDefinitions;
}
