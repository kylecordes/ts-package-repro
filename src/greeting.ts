export interface Person {
    name: string
}

export function greet(p: Person) {
    console.log("Hello", p.name)
}
