/**
 * 索引查下类型T[P] （如： Props['a']）在类型中使用这种语法, 就是 索引查询类型, 用来查询属性的类型
 * 注意: []中的属性名称必须在被查询的类中, 否则就会报错
 */
type Props = { a: number, b: string, c: boolean}
type TypeA = Props['c']

type MyPartial<T> = {
    [P in keyof T]?: T[P];
};
type MyPartialChild = MyPartial<Props>

//也可以查询多个类型
type MuchProps = Props['a' | 'b']
type MuchProps2 = Props[keyof Props]
