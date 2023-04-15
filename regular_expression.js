function matchesPattern(input) {
    const pattern = /^abc([A-Z]|[0-9]+)&([XYZ]|[xyz])$/;
    return pattern.test(input);
}

console.log(matchesPattern("abc123XYZ")); // true
console.log(matchesPattern("abcXYZ")); // true
console.log(matchesPattern("abcXYZ123")); // false
console.log(matchesPattern("abcXYZ123XYZ")); // true
console.log(matchesPattern("abcXyZ")); // true
console.log(matchesPattern("xyz")); // false
