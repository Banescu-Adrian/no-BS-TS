//const beforeLoad = "beforeLoad";
//const loading = "loading";
//const loaded = "loaded";

enum LoadingState {
     beforeLoad = "beforeLoad",
     loading = "loading",
     loaded = "loaded",
}

const isLoading = (state: LoadingState) => state === LoadingState.loading;

//console.log(isLoading("dog"))
console.log(isLoading(LoadingState.loaded))


// litteral types

function rollDice(dice: number): number {
    let pip = 0;
    for( let i =0; i < dice; i++) {
        pip += Math.floor((Math.random() * 5)) + 1;
    }

    return pip;
}

console.log(rollDice(4))

function sendEvent(name: "addToCart", data: { productId: number }): void
function sendEvent(name: "checkout", data: { cartCount: number }): void
function sendEvent(name: string, data: unknown): void {
    console.log(`${name}: ${JSON.stringify(data)}`)
}

sendEvent("addToCart", { productId: 1})