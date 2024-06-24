function scoreOfString(s: string): any {
  const splitted = s.split("");
  let sum = 0;

  for (let i = 0; i < splitted.length - 1; i++) {
    const actualCode = splitted[i].charCodeAt(0);
    const nextCode = splitted[i + 1].charCodeAt(0);
    sum += Math.abs(actualCode - nextCode);
  }
  return sum;
}
