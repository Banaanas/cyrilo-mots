import { supabaseClient } from "./supabase-client";

// Get Word
export const getWord = async (id: number) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data: word, error } = await supabaseClient
    .from("words")
    .select()
    .eq("id", id)
    .single(); // Get single object (not an array)

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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
