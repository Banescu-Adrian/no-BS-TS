interface MyUser {
    name: string;
    id: number;
    email?: string;
}

//interface MyUserOptionals {
//    name?: string;
//    age?: number;
//    email?: string;
//}

type MyUserOptionals = Partial<MyUser>;

type RequiredMyUser = Required<MyUser>;
type JustEmailAndEmail = Pick<MyUser, "email" | "name">

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
    return {
        ...user,
        ...overrides
    }
}

console.log(
        merge(
            {
                name: "Jack",
                id: 20,
                email: "aaa@aa.com"
            },
            {
                email: "rere@abc.com"
            }
        )
)


const mapById = (users: MyUser[]): Record<MyUser["id"], Omit<MyUser, "id">> => {
    return users.reduce((a, v) => {
        const {id, ...other} = v;
        return {
            ...a,
            [id]: other,
        }
        }, {})
}

console.log(mapById(
[
    {
            id: 15,
            name: "bar"
        },
        {
            id: 20,
            name: "foo"
        }
]
))