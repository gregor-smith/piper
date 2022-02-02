## Piper

A tiny pair of pipe function for TypeScript.


### Usage
```typescript
import { pipe, asyncPipe } from 'piper'


const a = pipe(
    9000,
    x => x + 1,
    String
)
console.log(a)  // '9001'

const b = await asyncPipe(
    Promise.resolve(9000),
    x => Promise.resolve(x + 1),
    x => Promise.resolve(String(x))
)
console.log(b)  // '9001'
```

### Installation
No NPM package for now, so just install from this repository:
```
$ yarn add https://github.com/gregor-smith/piper.git
```
