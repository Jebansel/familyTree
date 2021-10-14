const {generation1, generation2, generation3} = require ('./familyTree');

describe("Family Tree", () => {
    test("Should return name", () => {
        expect(generation1[0].name).toBe("Elizabeth II")
    })
});

//Need to find out difference between .toBe and .toEqual

//.toBe doesn't work here for the array
describe("Family Tree", () => {
    test("Should return parents", () => {
        expect(generation1[0].childOf()).toEqual(["George", "Elizabeth"])
    })
});