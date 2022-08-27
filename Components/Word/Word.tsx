import styled from "@emotion/styled";
import React from "react";

import { WiktionaryDefinitions } from "../../types/types";
import {
  AccordionChevron,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Word.styles";
import WordDefinitionsCheckbox from "./WordDefinitions/WordDefinitionCheckbox";
import WordDefinitions from "./WordDefinitions/WordDefinitions";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Word = ({ id, word, isRead, wiktionaryDefinitions }: WordProps) => {
  return (
    <AccordionItem value={id.toString()}>
      <AccordionTrigger>
        <span>{word}</span>
        <AccordionChevron aria-hidden size={32} />
      </AccordionTrigger>
      <AccordionContent asChild>
        <Article>
          <WordDefinitionsCheckbox id={id} isRead={isRead} />
          <WordDefinitions wiktionaryDefinitions={wiktionaryDefinitions} />
        </Article>
      </AccordionContent>
    </AccordionItem>
  );
};

export default Word;

interface WordProps {
  id: number;
  word: string;
  isRead: boolean;
  wiktionaryDefinitions: WiktionaryDefinitions;
}
