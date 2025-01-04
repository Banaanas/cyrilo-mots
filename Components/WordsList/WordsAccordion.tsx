import styled from "@emotion/styled";
import * as Accordion from "@radix-ui/react-accordion";

import { useStoreWordsAccordionLoading } from "../../lib/zustand-store/useWordsAccordionStore";
import { useWordsStore } from "../../lib/zustand-store/useWordsStore";
import { Loader } from "../Common/Loader";
import { Word } from "../Word/Word";

export const AccordionRoot = styled(Accordion.Root)`
  display: flex;
  flex-direction: column;
  justify-self: start;
  row-gap: 20px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-grow: 1;
`;

export const WordsAccordion = () => {
  const wordsList = useWordsStore((state) => state.wordsList);
  const wordsAccordionState = useStoreWordsAccordionLoading(
    (state) => state.wordsAccordionState,
  );

  if (wordsAccordionState === "not-rendered") return null;

  if (wordsAccordionState === "loading")
    return (
      <Container>
        <Loader size="112px" />
      </Container>
    );

  return (
    <AccordionRoot type="single" collapsible>
      {wordsList?.map((word) => {
        return <Word key={word.id} {...word} />;
      })}
    </AccordionRoot>
  );
};
