function pipe(value) {
    for (var i = 1; i < arguments.length; i++)
        value = arguments[i](value);
    return value
}
exports.pipe = pipe
