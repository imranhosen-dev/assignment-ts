"use strict";
const multiplyValue = (value, multiplier) => {
    const result = multiplier === undefined ? 2 : multiplier;
    return value * result;
};
multiplyValue(10, 5);
const processInput = (value) => {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    if (typeof value === 'number') {
        return value * 10;
    }
    if (typeof value === 'boolean') {
        return value ? 'Active' : 'Inactive';
    }
};
processInput(' TypeScript ');
