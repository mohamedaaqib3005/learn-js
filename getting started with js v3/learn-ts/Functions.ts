const sum = (a?: number, b: number): number => {
  return a + b
}



console.log(sum("56", 6));// error cannot assign string to number variable

console.log(sum(0, 89));


const greet1 = (name?: string): string => {//?means name can have string or undefined type
  return name || "Guest";
}

console.log(greet1("")); //Guest || logical or takes only truthy so in this case even "" and 0 will be falsy but 0 is anyways not allowed because of string type


const greet2 = (name?: string): string => {
  return name ?? "Guest";
}

console.log(greet2(""))//"" it doesnt ignore empty string in case of nullish colleasing



const greet3 = (name: string): string => {
  return name ?? "Guest";
}

console.log(greet3(""))//""


const greet4 = (name: string): string => {
  return name || "Guest";
}

console.log(greet4(""))//Guest



const greet5 = (name: string): string => {
  return name
}

console.log(greet5(""))//""
console.log(greet5())//undefined