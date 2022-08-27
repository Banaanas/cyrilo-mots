import { supabaseClient } from "@supabase/auth-helpers-nextjs";

import { Word } from "../../../types/types";

// Get Word
export const getWord = async (id: number) => {
  const { data: word, error } = await supabaseClient
    .from<Word>("words")
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
    .from<Word>("words")
    .update({ isRead: !word?.isRead }, { returning: "representation" })
    .eq("id", id);
};
