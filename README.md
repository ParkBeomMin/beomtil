# beomtil

#### Useful Util Function

## Installation

`npm install beomtil`

## Documentation

### changeValueNotation(value, notation)

-   `value` : variable to change. allow string or object type.
-   `notation` : 'camel' | 'pascal' | 'snake'

> commonJS

```
const { changeValueNotation } = require('beomtil');

const result = changeValueNotation("notaionTest", "pascal");
// result = NotationTest

const result2 = changeValueNotation({ notaionTest1: 1,notaion_test2: 2, notaion_test3: 3 }, "camel");
// result2 = {notaionTest1: 1, notationTest2: 2, notationTest3: 3}

```

> ES6

```
import beomtil from 'beomtil';

const result = beomtil.changeValueNotation("notaionTest", "pascal");
// result = NotationTest

const result2 = beomtil.changeValueNotation({ notaionTest1: 1,notaion_test2: 2, notaion_test3: 3 }, "camel");
// result2 = {notaionTest1: 1, notationTest2: 2, notationTest3: 3}

```

### masking(target, maskingNum, maskingStart)

-   `target` : (required) variable to mask. allow string.
-   `maskingNum` : (required) number of masking. allow positive integer.
-   `maskingStart` : masking start index. allow positive integer.

> commonJS

```
const { masking } = require('beomtil');

const result = masking("mask", 2);
// result = **sk

const result2 = masking("mask", 2, 1);
// result2 = m**k

```

> ES6

```
import beomtil from 'beomtil';

const result = beomtil.masking("mask", 2);
// result = **sk

const result2 = beomtil.masking("mask", 2, 1);
// result2 = m**k

```

## Version

### v1.0.1

-   changeValueNotataion()

### v1.0.2

-   masking()
