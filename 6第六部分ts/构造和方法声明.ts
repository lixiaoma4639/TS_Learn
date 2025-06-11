type aaa = {
    key : string,
    getScreen(): string;
    screen: {
        new (props: string, context?: any): string; //声明构造
        (props: string, context?: any): string | null; //声明一个函数
    }
}

// 实现一个类，包含构造函数
class ScreenClass {
    constructor(props: string, context?: any) {
        return `Class instance with props: ${props}`;
    }
    
}

// 使用类 `ScreenClass` 的实例，创建一个函数来实现调用签名
const screenFunction = (props: string, context?: any): string | null => {
    // 执行一些逻辑，根据 props 和 context 返回字符串或 null
    return props ? `Function call with props: ${props}` : null;
};

// 将 `screenFunction` 的属性 `prototype` 指向 `ScreenClass` 的 `prototype`
screenFunction.prototype = ScreenClass.prototype;

// 将 `screenFunction` 类型断言为同时具有构造函数签名和函数签名的类型
const screen2: { 
    new (props: string, context?: any): string; 
    (props: string, context?: any): string | null 
} = screenFunction as any;

// 定义符合 `aaa` 类型的对象
const example: aaa = {
    key: 'exampleKey',
    getScreen: () => 'exampleScreen',
    screen: screen2
};

console.log(example.key)
console.log(example.getScreen())