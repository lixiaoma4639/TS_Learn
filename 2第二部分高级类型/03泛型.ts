function id<T>(value: T) : T {
    console.log(typeof value)
    return value;
}
console.log(id<number>(19))
console.log(id(true))
console.log(id<string>('lx'))
console.log(id('fff4'))

