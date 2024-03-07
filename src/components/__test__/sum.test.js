import { sum } from "../sum";

test("Sum function should calculate the sum of two numbers" , () =>{
    const result = sum(2,7);

    expect(result).toBe(9)
}) 