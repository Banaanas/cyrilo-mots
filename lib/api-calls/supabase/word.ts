import { PostgrestError } from "@supabase/supabase-js";

import { Word } from "../../../types/types";
import { supabaseClient } from "./supabase-client";

// Get Word
export const getWord = async (id: number) => {
  const {
    data: word,
    error,
  }: { data: Word | null; error: PostgrestError | null } = await supabaseClient
    .from("words")
    .select()
    .eq("id", id)
    .single(); // Get single object (not an array)

  return { word, error };
};

// Toggle Word isRead
export const toggleWord = async (id: number) => {
  // Get Word first
  const { word } = await getWord(id);

  // Then Update (toggle) isRead value
  await supabaseClient
    .from("words")
    .update({ isRead: !word?.isRead }, { count: "exact" })
    .eq("id", id);
};
