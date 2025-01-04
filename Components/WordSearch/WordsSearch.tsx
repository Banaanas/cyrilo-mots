import AwesomeDebouncePromise from "awesome-debounce-promise";
import { ChangeEvent, FormEvent, useId, useRef, useState } from "react";

import { useMaxRangeStore } from "../../lib/zustand-store/useMaxRangeStore";
import { useStoreWordsAccordionLoading } from "../../lib/zustand-store/useWordsAccordionStore";
import { useWordsSearchStore } from "../../lib/zustand-store/useWordsSearchStore";
import { useWordsStore } from "../../lib/zustand-store/useWordsStore";
import {
  initialRangeFrom,
  initialRangeTo,
} from "../WordsList/WordsList.helpers";
import {
  isInputTooShort,
  resetWordsList,
  WordSearchError,
} from "./WordSearchError/WordSearchError.helpers";
import { WordsSearchError } from "./WordSearchError/WordsSearchError";
import { getWordsSearch } from "./WordsSearch.helpers";
import {
  IconsContainer,
  Input,
  Label,
  SearchContainer,
  StyledCrossIcon,
  StyledSearchIcon,
} from "./WordsSearch.styles";

export const WordsSearch = () => {
  const setSearchedString = useWordsSearchStore(
    (state) => state.setSearchedString,
  );
  const [searchError, setSearchError] = useState<WordSearchError>(null);
  const setWordsList = useWordsStore((state) => state.setWordsList);

  // Store maxRange in store
  const setMaxRange = useMaxRangeStore((state) => state.setMaxRange);

  const fetchAllWordsList = useWordsStore((state) => state.fetchAllWordsList);

  const setWordsAccordionState = useStoreWordsAccordionLoading(
    (state) => state.setWordsAccordionState,
  );

  // Set unique ID to input
  const inputID = useId();

  const handleResetList = async () => {
    await resetWordsList(fetchAllWordsList, setMaxRange);
    setWordsAccordionState("normal");
  };

  const handleWordsSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSearchedString(inputValue);

    setWordsAccordionState("loading");
    setSearchError(null);

    // Check if searched string includes min 3 characters
    if (inputValue === "") {
      await handleResetList();
      setWordsAccordionState("normal");
      return;
    }

    // Check if searched string includes min 3 characters
    if (isInputTooShort(inputValue)) {
      setSearchError("input-too-short");

      // Display the all-words WordsSearchList
      await handleResetList();
      setWordsAccordionState("not-rendered");
      return;
    }

    // Get searched string / word
    const { searchedWordsList, searchedWordsResultsNumber } =
      await getWordsSearch(inputValue, initialRangeFrom, initialRangeTo);

    // If no result
    if (!searchedWordsResultsNumber) {
      setSearchError("no-result");
      setWordsAccordionState("not-rendered");
      return;
    }

    // If result === 0
    if (searchedWordsResultsNumber === 0 && inputValue) {
      setSearchError("no-result");
      setWordsAccordionState("not-rendered");
      return;
    }

    // If too many results
    if (searchedWordsResultsNumber > 999 && inputValue) {
      setSearchError("too-many-results");
      setWordsAccordionState("not-rendered");
      return;
    }

    if (searchedWordsResultsNumber) setMaxRange(searchedWordsResultsNumber);
    if (searchedWordsList) setWordsList(searchedWordsList);
    setWordsAccordionState("normal");
  };

  const debouncedHandleWordsSearch = AwesomeDebouncePromise(
    handleWordsSearch,
    750,
  );

  // When click on the Cross Icon, it clears the input's value and reset the WordsList
  // Use of useState and NOT Zustand store's searchedString value because this value is updated with onChange, within a debounce Function, too slow to update the value and delete the content of the input
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnInput = (event: FormEvent<HTMLInputElement>) =>
    setInputValue(event.currentTarget.value);

  const clearInputValue = async () => {
    setInputValue("");
    setSearchedString("");
    setWordsAccordionState("loading");

    if (inputRef.current) {
      inputRef.current.value = ""; // Safe access to `value`
    }

    await handleResetList();
    setWordsAccordionState("normal");
  };
  return (
    <SearchContainer>
      <Label htmlFor={inputID}>
        <IconsContainer>
          <StyledSearchIcon hidden={!!inputValue} />

          <StyledCrossIcon hidden={!inputValue} onClick={clearInputValue} />
        </IconsContainer>
        <Input
          ref={inputRef}
          onChange={debouncedHandleWordsSearch}
          onInput={handleOnInput}
          id={inputID}
          placeholder="Chercher un mot..."
          type="search"
        />
      </Label>
      <WordsSearchError searchError={searchError} />
    </SearchContainer>
  );
};
