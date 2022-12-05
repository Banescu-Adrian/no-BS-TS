function pluck<DataType, KeyType extends keyof DataType>
        (
            items: DataType[],
            key: KeyType
        ): DataType[KeyType][] {
    return items.map( item => item[key]);
}

const dogs = [
    {
        name: "Minie",
        age: 13
    },
    {
        name: "LG",
        age: 15
    }
];

console.log(pluck(dogs, "age"))

interface BaseEvent {
    time: number;
    user: string;
}

interface EventMap {
    addToCart: BaseEvent & { quantity: number; productId: string};
    checkout: BaseEvent
}

function sendEvent<Name extends keyof EventMap>
(
        name: Name,
        data: EventMap[Name]
        ): void {
    console.log([name, data])
}

sendEvent("addToCart", {productId: 'foo', user: 'bar', quantity: 1, time: 10});
sendEvent("checkout", { user: "bar", time: 10});