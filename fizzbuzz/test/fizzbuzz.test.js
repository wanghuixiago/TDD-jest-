// todo 1 2 fizz 4 buzz fizz 7 8 fizz....;
//是3的倍数输出fizz，是5的倍数输出buzz。是15的倍数输出fizzbuzz
//函数没有输入，输出为一个长度为100的数组
const fb =require ("../src/fizzbuzz")

describe("fb",()=>{
    test("fb is defined",()=>{
        expect(fb).toBeDefined()
    }),
    test("fb should be a function",()=>{
        expect(typeof(fb)).toBe('function')
    }),
    test("input 1 got 1",()=>{
        expect(fb()[0]).toBe(1)
    }),
    test("input 3 got fizz",()=>{
        expect(fb()[2]).toBe("fizz")
    }),
    test("input 6 got fizz",()=>{
        expect(fb()[5]).toBe("fizz")
    }),
    test("input 5 got buzz",()=>{
        expect(fb()[4]).toBe("buzz")
    }),
    test("input 15 got fizzbuzz",()=>{
        expect(fb()[14]).toBe("fizzbuzz")
    })
})