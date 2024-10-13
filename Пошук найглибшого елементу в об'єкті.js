function findDeepest(firstObject) {
    let deepestObject = null;
    let maxDepth = 0;

    function recurse(object, depth) {
        for (let key in object) {
            const value = object[key];

            if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                recurse(value, depth + 1);
            } else {
                if (depth > maxDepth) {
                    maxDepth = depth;
                    deepestObject = value;
                }
            }
        }
    }

    recurse(firstObject, 0);
    return deepestObject;
}

console.log (findDeepest({ a: 1, b: { c: { d: 4, e: { f: 5 } } } }));
console.log (findDeepest({ a: { b: 1 }, c: 2 }));
console.log (findDeepest({ a: null }));
console.log (findDeepest({}));
console.log (findDeepest({ a: { b: { c: { d: { e: { f: {} } } } } } }));
