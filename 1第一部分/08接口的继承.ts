// interface Point2D { x: number, y: number}
// interface Point3D { x: number, y: number, z: number}

/**
 * 使用extends对上面的接口进行简化
 */
interface Point2D {
    x: number, 
    y: number
}
interface Point3D extends Point2D {
    z: number
}
let p3 : Point3D = {
    x:1,
    y:2,
    z:3
}
console.log(p3)