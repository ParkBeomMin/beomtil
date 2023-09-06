export const masking = (target, maskingNum = 3, maskingStart = 0) => {
    if (typeof target !== "string") {
        console.error("only string type");
        return "";
    }
    if (
        maskingNum < 0 ||
        maskingStart < 0 ||
        !Number.isInteger(maskingNum) ||
        !Number.isInteger(maskingStart)
    ) {
        console.error("maskingNum and maskingStart are only positive integer");
        return target;
    }
    let masking = "*".repeat(maskingNum);
    if (target.length < maskingNum) {
        console.warn("maskingNum longer than target length");
        masking = "*".repeat(target.length);
        return masking;
    }
    if (target.length <= maskingStart) {
        console.warn("maskingStart longer than target length");
        return target;
    }

    if (target.length < maskingStart + maskingNum) {
        console.log("!!");
        maskingNum = target.length - maskingStart;
    }
    console.log("maskigNumb", maskingNum);
    masking = "*".repeat(maskingNum);

    const left = target.substring(0, maskingStart);
    const right = target.substring(maskingStart + maskingNum);
    console.log(left, right);
    // if (masking.length + right.length < maskingNum) {
    //     masking = "*".repeat(right.length);
    // }
    return left + masking + right;
};

