/**
 * 交叉类型，功能类似与接口继承（extends），用于组合多个类型为一个类型（常用于对象类型），
 * 而且每个被联合的类型的字段都必须有，除非该自动配置成了可选参数
 */
interface HasName {
    name: string;
}

interface HasAge {
    age: number;
}

interface HasAddress {
    //ts中的可选参数是在属性名称后面加？，而kotlin中是在类型string后面加？
    address?: string;
}

type PersonDetails2 = HasName & HasAge & HasAddress;

const person2: PersonDetails2 = {
    name: 'Alice',
    age: 30,
    address: '北京'
};

// console.log(person2)

//交叉类型和联合类似使用举例
type NavigationRouteConfig = ( 
    | { screen : string} 
    //这里的getScreen方法，参数类型是number返回值类型是string
    | { getScreen(params: number) : string}
    )    
    & 
    {
        navigationOptions: {},
        params?: {},
        path?: string
    }

let routerConfig: NavigationRouteConfig = {
    screen: 'View',
    //以下的getScreen写法都正确
    // getScreen: function aaa(params){
    //     return ''
    // },
    // getScreen: (params: number) => {
    //     return params + '';
    // },
    // getScreen: (params) => (''),
    getScreen(params): string{
        return '';
    },
    navigationOptions: {},
    params: {},
    path: '/auto/index',
}

//交叉类型举例2
type AAA = (
    navigationOptionsContainer: {
        navigation: string,
        theme: number,
    } & {
      navigationOptions: string;
    }
  ) => boolean

let aaa: AAA = ({navigation, theme}) => {
    console.log(navigation)
    return true;
}

console.log(aaa({navigation: '1', theme: 2, navigationOptions: '3'}))