import { asyncPipe, pipe } from '../src/piper.js.js'


test('sync', () => {
    const value = pipe(
        9000,
        x => x + 1,
        String
    )
    expect(value).toBe('9001')
})


test('async - promise initial value', async () => {
    const value = await asyncPipe(
        Promise.resolve(9000),
        x => Promise.resolve(x + 1),
        async x => String(x)
    )
    expect(value).toBe('9001')
})


test('async - non-promise initial value', async () => {
    const value = await asyncPipe(
        9000,
        async x => x + 1,
        x => Promise.resolve(String(x))
    )
    expect(value).toBe('9001')
})
