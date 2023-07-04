const assert = require("assert");
const { masking } = require("./masking");
describe("마스킹", () => {
    it("string", () => {
        const result = masking("notaionTest");
        assert.equal(result, "***aionTest");
    });
    it("object", () => {
        const result = masking({});
        assert.equal(result, "");
    });
    it("number", () => {
        const result = masking(23435);
        assert.equal(result, "");
    });

    it("array", () => {
        const result = masking([]);
        assert.equal(result, "");
    });
    it("over masking", () => {
        const result = masking("mask", 5);
        assert.equal(result, "****");
    });
    it("masking 2, start 1", () => {
        const result = masking("mask", 2, 1);
        assert.equal(result, "m**k");
    });
    it("masking 2, start over", () => {
        const result = masking("mask", 2, 3);
        assert.equal(result, "mas*");
    });
    it("masking 3, over starting", () => {
        const result = masking("mask", 3, 4);
        assert.equal(result, "mask");
    });
    it("all masking", () => {
        const result = masking("mask", 4);
        assert.equal(result, "****");
    });
    it("masking 4, start 1", () => {
        const result = masking("mask", 4, 1);
        assert.equal(result, "m***");
    });
    it("masking negative integer", () => {
        const result = masking("mask", -1);
        assert.equal(result, "mask");
    });
    it("start negative integer", () => {
        const result = masking("mask", 1, -1);
        assert.equal(result, "mask");
    });
    it("masking not integer", () => {
        const result = masking("mask", 1.5);
        assert.equal(result, "mask");
    });
    it("start not integer", () => {
        const result = masking("mask", 1, 3.5);
        assert.equal(result, "mask");
    });
});
