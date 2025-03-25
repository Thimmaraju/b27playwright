import { test, expect } from '@playwright/test';


test.afterAll(()=>{

    console.log("After all tests one time")

})

test.beforeEach(()=>{

    console.log(" Beofre Each test")

})

test.afterEach(()=>{

    console.log(" After Each test")

})

test.beforeAll(()=>{

    console.log("Beofre Any tests one time")

})





test.describe("Gruop 1", ()=>{


    test("test 1",{tag: "@smoke"}, ()=>{

        test.slow()

        console.log(" Test 1 Body")
    })
    
    
    test("test 2", ()=>{
    
        console.log(" Test 2 Body")
    })
    

})


test.describe("Group 2", ()=>{

    test("test 3",{tag: "@smoke"}, ()=>{

       // test.fixme() // Whenever you want fix the test script 

        console.log(" Test 3 Body")
    })
    
    test("test 4", {tag: "@regression"}, ()=>{

        //test.fail()

        expect(2).toBe(2)
    
        console.log(" Test 4 Body")
    })

})


