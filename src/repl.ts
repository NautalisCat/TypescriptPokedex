export function cleanInput(input: string): string[] {
  const splitInput = input.split(" ").filter((word) => word !== "");
  const cleanArray = splitInput.map((word: string) => word.trim().toLowerCase());
  
  return cleanArray; 
}
