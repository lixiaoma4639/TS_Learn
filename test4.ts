type aaa = {
    key : string,
    getScreen(): string;
    screen: {
        // new (props: string, context?: any): string;
        (props: string, context?: any): string | null;
    }
    
}

const bbb: aaa = {
    screen: (props: string, context?: any) => {
        return "234";
    },
    key: 'lx',
    getScreen : () => {
        return '123'
    }
}

console.log(bbb.key)
console.log(bbb.getScreen())