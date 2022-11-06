# beomtil

#### Useful Util Function

## Installation

`npm install beomtil`

## Documentation

### changeValueNotation(value, notation)

-   `value` : variable to change. allow string or object type.
-   `notation` : 'camel' | 'pascal' | 'snake'

```
const beomtil = require('beomtil')

const result = changeValueNotation("notaionTest", "pascal");
// result = NotationTest

const result2 = changeValueNotation({ notaionTest1: 1,notaion_test2: 2, notaion_test3: 3 }, "camel");
// result2 = {notaionTest1: 1, notationTest2: 2, notationTest3: 3}

```

## Version

### v1.0.1

-   changeValueNotataion()
