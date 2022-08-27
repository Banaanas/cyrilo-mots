export interface Word {
  id: number;
  word: string;
  isRead: boolean;
}

export type WiktionaryDefinitions = Array<string> | string;

export interface WordWithDef extends Word {
  wiktionaryDefinitions: WiktionaryDefinitions;
}

// Response from Supabase (Array of Words)
export type WordsWithDefList = Array<WordWithDef>;
