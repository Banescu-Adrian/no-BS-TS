type MyFlexibleDogInfo = {
    name: string;
    [key: string]: string | number
}

const dog: MyFlexibleDogInfo = {
    name: "Jack",
    breed: "mut",
    age: 20
}

interface DogInfo {
    name: string;
    age: number;
}

type OptionsFlags<Type> = {
    [Property in keyof Type]: null;
};

type DogInfoOptions = OptionsFlags<DogInfo>;

type Listeners<Type> = {
    [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (newValue: Type[Property]) => void
}

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
    throw "needs implementation";
}

const lg: DogInfo = {
    name: "LG",
    age: 33
}

type DocInfoListeners = Listeners<DogInfo>

listenToObject(lg, {
    onNameChange: (v:string) => {},
    onAgeChange: (v:number) => {},
})