import { pipe } from '../dist'


it('works', () => {
    const value = pipe(
        9000,
        x => x + 1,
        String
    )
    expect(value).toBe('9001')
})
