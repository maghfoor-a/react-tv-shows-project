import { format } from "path";

export function seperateGenres(input: string[]): string {
  let finalString = "";
  for (const word of input) {
    finalString += word + ", ";
  }
  return finalString.slice(0, finalString.length - 2);
}
