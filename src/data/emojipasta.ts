import fs from "fs-extra";
import path from "path";
import yaml from "js-yaml";

export interface Emojipasta {
  slug: string;
  title: string;
  contents: string;
}

export interface EmojipastaBySlug {
  [slug: string]: Emojipasta;
}

export const getAllEmojipasta = async () => {
  const emojipastaPath = path.join(process.cwd(), "data", "emojipasta.yml");
  const rawData = await fs.readFile(emojipastaPath, "utf-8");
  const data = yaml.safeLoad(rawData, {
    filename: emojipastaPath,
  }) as Emojipasta[];
  const dataBySlug = data.reduce(
    (acc, data) => ({
      ...acc,
      [data.slug]: data,
    }),
    {} as EmojipastaBySlug
  );
  return { data, dataBySlug };
};
