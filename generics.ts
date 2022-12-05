function simpleStringState<T>(
        initial: T
        ): [() => T, (v: T) => void] {
    let str: T = initial;
    return [
        () => str,
        (v: T) => {
            str = v;
        }
    ]
}

//const [str1getter, str1setter] = simpleStringState("hello");
//console.log(str1getter());
//str1setter("goodbye");
//console.log(str1getter());
//
//const [str2getter, str2setter] = simpleStringState<string | null>(null);
//str2setter("goodbyew");

interface Rank<RankItem> {
    item: RankItem,
    rank: number
}

function ranker<RankItem>(
            items: RankItem[],
            rank: (v: RankItem
        ) => number): RankItem[] {
    const ranks: Rank<RankItem>[] = items.map((item) => ( {
        item,
        rank: rank(item)
    }));

    ranks.sort((a, b) => a.rank - b.rank);

    return ranks.map((rank) => rank.item);
}

interface Pokemon {
    name: string;
    hp: number;
}

const pokemon: Pokemon[] = [
    {
        name: "Bulbasaur",
        hp: 20
    },
    {
        name: "Charmander",
        hp: 5
    },
]

const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks)