export function printToFile(text: string, callback: () => void):void {
    console.log(text);
    callback()
}

export type MutationFunction = (v: number) => number;

export function arrayMutate(numbers: number[], mutate: MutationFunction): number[] {
    return numbers.map(mutate);
}

console.log(arrayMutate([1,2,3], (v) => v * 10))

type AddedFunction = (val: number) => number;

//Clojure
export function createAdder(num: number): AddedFunction  {
    return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55))