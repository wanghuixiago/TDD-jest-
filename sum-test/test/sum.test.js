// todo a+b=c;
// example:input 1,2 get 3
const sum =require ("../src/sum")

describe("sum",()=>{
    test("sum is defined",()=>{
        expect(sum).toBeDefined()
    }),
    test("test should be a function",()=>{
        expect(typeof(sum)).toBe('function')
    }),
    test("input 1,1 got 2",()=>{
        expect(sum(1,1)).toBe(2)
    }),
    test("input 1000,1 got 10001",()=>{
        expect(sum(1,1000)).toBe(1001)
    }),
    test("input 100,1 got 101",()=>{
        expect(sum(1,100)).toBe(101)
    })
})