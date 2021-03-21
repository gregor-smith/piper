export function pipe(value) {
    for (let i = 1; i < arguments.length; i++)
        value = arguments[i](value);
    return value;
}


export async function asyncPipe(value) {
    value = await value;
    for (let i = 1; i < arguments.length; i++)
        value = await arguments[i](value);
    return value;
}
