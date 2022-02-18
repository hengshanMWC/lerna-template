import add from "lodash-es/add";
type afn = (num1: number, num2: number) => number;
export const a: afn = (num1, num2) => add(num1, num2);
