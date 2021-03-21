import { asyncPipe, pipe } from '../dist/piper.js'


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
        String
    )
    expect(value).toBe('9001')
})


test('async - non-promise initial value', async () => {
    const value = await asyncPipe(
        9000,
        x => x + 1,
        x => Promise.resolve(String(x))
    )
    expect(value).toBe('9001')
})
