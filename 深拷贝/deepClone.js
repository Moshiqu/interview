// 深拷贝: 复制出全新的对象
let obj1 = {
    array: [1, 2],
    arrayOfObj: [{ a: 3, b: 4 }],
    obj: { c: 5 },
    reg: /7/,
    date: new Date(),
    // map: new Map([['d', 8], ['e', 9]]),
    // set: new Set([10, 11]),
    num: 22,
    str: "xx",
    bol: false,
    fn: function () {
        console.log(6)
        return 6
    },
    nulVal: null,
}

const deepClone = function (obj) {
    if (typeof obj === 'object') {
        if (obj === null) {
            return null
        } else if (obj.constructor === Object) {
            const newObj = {}
            for (const key in obj) {
                if (Object.hasOwnProperty.call(obj, key)) {
                    const element = obj[key];
                    if (typeof element !== 'object' && typeof element !== 'function') {
                        newObj[key] = element
                    } else {
                        newObj[key] = deepClone(element)
                    }
                }
            }
            return newObj
        } else if (obj.constructor === Array) {
            const newArray = []
            for (const iterator of obj) {
                if (typeof iterator !== 'object' && typeof iterator !== 'function') {
                    newArray.push(iterator)
                } else {
                    newArray.push(deepClone(iterator))
                }
            }
            return newArray
        } else if (obj.constructor === Map) {
            const newMap = new Map()
        } else if (obj.constructor === Set) {
            const newSet = new Set()

        } else if (obj.constructor === RegExp) {
            const newRegExpString = obj.toString()
            return new RegExp(newRegExpString.replaceAll('/',''))
        } else {
            throw new Error(`[Error]${obj} 是一个未知数据!`)
        }
    } else if (typeof obj === 'function') {
        const newFn = obj.toString()
        return new Function(`return ${newFn}`)()
    } else {
        return obj
    }
}

console.log(deepClone(obj1));