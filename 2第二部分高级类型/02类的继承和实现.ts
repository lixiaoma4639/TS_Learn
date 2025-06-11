
/**
 * ts中的修饰符和Java中的意思差不多
 */
interface IUser {
    name: string
    show(): void
}

class UserNation {
    nation: string = ''

    getNation(){
        return this.nation
    }

    private resetNation(){
        this.nation = ''
    }

    __resetNation__(){
        this.nation = ''
    }
}

class AUser extends UserNation implements IUser{
    //必须实现接口中的方法和变量
    name: string = ''
    show(): void {
        console.log("hi....")
    }
}
let aUser = new AUser()
aUser.getNation()
// aUser.resetNation
aUser.__resetNation__()



