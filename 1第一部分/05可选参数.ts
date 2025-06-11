
/**
 * 在参数名后面使用?表示是可选参数,  而且可选参数后面的参数不可以是必选参数, 可选参数只能放在最后
 * 
 */
function user(name: string, age?: number): void {
    console.log('name = ', name,  " age = " + age )
}
user('张三', 15)
user('LiSi')

const config: {url: string, method?: string} = {
    url: 'www.baidu.com'
}
console.log(config.url)
console.log(config.method)