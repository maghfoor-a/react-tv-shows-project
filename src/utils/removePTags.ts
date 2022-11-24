export function removePTags(input: string): string {
  if (input !== null && input.length > 0) {
    let output = input.replace(/<p>/g, "");
    output = output.replace(/<\/p>/g, "");
    return output;
  } else {
    return "SUMMARY NOT FOUND";
  }
}
