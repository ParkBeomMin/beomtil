const assert = require("assert");
const { changeValueNotation } = require("./index");
describe("표기법 변환 함수 string", () => {
    it("string, camel to camel", () => {
        const result = changeValueNotation("notaionTest", "camel");
        assert.equal(result, "notaionTest");
    });
    it("string, snake to camel", () => {
        const result = changeValueNotation("notaion_test", "camel");
        assert.equal(result, "notaionTest");
    });
    it("string, pascal to camel", () => {
        const result = changeValueNotation("NotaionTest", "camel");
        assert.equal(result, "notaionTest");
    });

    it("string, camel to pascal", () => {
        const result = changeValueNotation("notaionTest", "pascal");
        assert.equal(result, "NotaionTest");
    });
    it("string, snake to pascal", () => {
        const result = changeValueNotation("notaion_test", "pascal");
        assert.equal(result, "NotaionTest");
    });
    it("string, pascal to pascal", () => {
        const result = changeValueNotation("NotaionTest", "pascal");
        assert.equal(result, "NotaionTest");
    });

    it("string, camel to snake", () => {
        const result = changeValueNotation("notaionTest", "snake");
        assert.equal(result, "notaion_test");
    });
    it("string, snake to snake", () => {
        const result = changeValueNotation("notaion_test", "snake");
        assert.equal(result, "notaion_test");
    });
    it("string, pascal to snake", () => {
        const result = changeValueNotation("NotaionTest", "snake");
        assert.equal(result, "notaion_test");
    });
});
describe("표기법 변환 함수 object", () => {
    it("object, camel to camel", () => {
        const result = changeValueNotation(
            { notaionTest1: 1, notaionTest2: 2, notaionTest3: 3 },
            "camel"
        );
        assert.deepEqual(result, {
            notaionTest1: 1,
            notaionTest2: 2,
            notaionTest3: 3,
        });
    });
    it("object, snake to camel", () => {
        const result = changeValueNotation(
            { notaionTest1: 1, notaion_test2: 2, notaion_test3: 3 },
            "camel"
        );
        assert.deepEqual(result, {
            notaionTest1: 1,
            notaionTest2: 2,
            notaionTest3: 3,
        });
    });
    it("object, pascal to camel", () => {
        const result = changeValueNotation(
            { NotaionTest1: 1, NotaionTest2: 2, notaion_test3: 3 },
            "camel"
        );
        assert.deepEqual(result, {
            notaionTest1: 1,
            notaionTest2: 2,
            notaionTest3: 3,
        });
    });

    it("object, camel to pascal", () => {
        const result = changeValueNotation(
            { notaionTest1: 1, notaionTest2: 2, notaionTest3: 3 },
            "pascal"
        );
        assert.deepEqual(result, {
            NotaionTest1: 1,
            NotaionTest2: 2,
            NotaionTest3: 3,
        });
    });
    it("object, snake to pascal", () => {
        const result = changeValueNotation(
            { notaionTest1: 1, notaion_test2: 2, notaion_test3: 3 },
            "pascal"
        );
        assert.deepEqual(result, {
            NotaionTest1: 1,
            NotaionTest2: 2,
            NotaionTest3: 3,
        });
    });
    it("object, pascal to pascal", () => {
        const result = changeValueNotation(
            { NotaionTest1: 1, NotaionTest2: 2, notaion_test3: 3 },
            "pascal"
        );
        assert.deepEqual(result, {
            NotaionTest1: 1,
            NotaionTest2: 2,
            NotaionTest3: 3,
        });
    });

    it("object, camel to snake", () => {
        const result = changeValueNotation(
            { notaionTest1: 1, notaionTest2: 2, notaionTest3: 3 },
            "snake"
        );
        assert.deepEqual(result, {
            notaion_test1: 1,
            notaion_test2: 2,
            notaion_test3: 3,
        });
    });
    it("object, snake to snake", () => {
        const result = changeValueNotation(
            { notaionTest1: 1, notaion_test2: 2, notaion_test3: 3 },
            "snake"
        );
        assert.deepEqual(result, {
            notaion_test1: 1,
            notaion_test2: 2,
            notaion_test3: 3,
        });
    });
    it("object, pascal to snake", () => {
        const result = changeValueNotation(
            { NotaionTest1: 1, NotaionTest2: 2, notaion_test3: 3 },
            "snake"
        );
        assert.deepEqual(result, {
            notaion_test1: 1,
            notaion_test2: 2,
            notaion_test3: 3,
        });
    });
});
