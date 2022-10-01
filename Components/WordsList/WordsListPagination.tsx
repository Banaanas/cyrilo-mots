import styled from "@emotion/styled";
import {
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon,
} from "react-feather";
import ReactPaginate from "react-paginate";

import { useStoreWordsAccordionLoading } from "../../lib/zustand-store/usestore-words-accordion";
import appTheme from "../../styles/appTheme";

const ReactPaginateComponent = styled(ReactPaginate)`
  all: unset; // Remove Browser list style
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  width: 100%;
  color: ${appTheme.colors.tertiary["500"]};
  list-style: none;

  // Gap between React Pagination List items
  @media ${appTheme.queries.tabletAndUp} {
    column-gap: 16px;
  }

  @media ${appTheme.queries.laptopAndUp} {
    column-gap: 24px;
  }

  // All React Pagination List items
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    // Clickable Links
    a {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      height: 100%;
      border-radius: 2px;
      cursor: pointer;
      isolation: isolate;

      ::after {
        position: absolute;
        z-index: -1;
        inset: 0 0;
        width: 100%;
        height: 100%;
        background-color: ${appTheme.colors.tertiary["200"]};
        opacity: 0;
        transition: opacity 250ms ease-out;
        content: "";
      }

      :hover {
        font-weight: ${appTheme.fontWeight.bold};
      }

      :hover::after {
        opacity: 1;
      }
    }
  }

  // Currently displayed page
  .active-pagination {
    font-weight: ${appTheme.fontWeight.bold};
    color: ${appTheme.colors.tertiary["900"]};
    background-color: ${appTheme.colors.tertiary["200"]};
    pointer-events: none;
  }

  .previous-button {
    margin-right: 16px;
  }

  .next-button {
    margin-left: 16px;
  }

  .break-button {
    pointer-events: none;
  }

  // Previous and Next buttons Arrow Icons
  svg {
    color: ${appTheme.colors.tertiary["500"]};
  }

  // Disabled - Previous and Next Buttons
  .disabled-pagination {
    pointer-events: none;

    svg {
      color: ${appTheme.colors.tertiary["300"]};
    }
  }
`;

const WordsListPagination = ({
  onPageChange,
  pageCount,
}: WordsListPaginationProps) => {
  const wordsAccordionState = useStoreWordsAccordionLoading(
    (state) => state.wordsAccordionState,
  );

  // Doesn't render if no pageCount or pageCount ==== 1 and if wordsAccordionState is not rendered
  if (!pageCount || pageCount === 1 || wordsAccordionState === "not-rendered")
    return null;

  return (
    <ReactPaginateComponent
      pageCount={pageCount}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onPageChange={onPageChange}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      activeClassName="active-pagination"
      breakClassName="break-button"
      disabledClassName="disabled-pagination"
      previousLinkClassName="previous-button"
      nextLinkClassName="next-button"
      previousLabel={<ArrowLeftIcon size="18px" />}
      nextLabel={<ArrowRightIcon size="18px" />}
      breakLabel="-"
    />
  );
};

export default WordsListPagination;

interface WordsListPaginationProps {
  onPageChange: ({ selected }: { selected: number }) => Promise<void>;
  pageCount: number | null;
}
