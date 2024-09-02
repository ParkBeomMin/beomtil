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

### masking(target, maskingNum, maskingStart)

-   `target` : (required) variable to mask. allow string.
-   `maskingNum` : (required) number of masking. allow positive integer.
-   `maskingStart` : masking start index. allow positive integer.

```
const beomtil = require('beomtil')

const result = beomtil.masking("mask", 2);
// result = **sk

const result2 = beomtil.masking("mask", 2, 1);
// result2 = m**k

```

### String Utils

#### capitalize(string)

Capitalizes the first letter of the given string.

-   `string` : (required) The string to be capitalized. Allows string.

```
const { capitalize } = require('beomtil');

const result = capitalize('hello');
// result = Hello
```

```
import { capitalize } from 'beomtil';

const result = capitalize('hello');
// result = Hello
```

#### camelToSnake(string)

Converts a camelCase string to snake_case.

-   `string` : (required) The camelCase string to convert. allow string.

```
const { camelToSnake } = require('beomtil');

const result = camelToSnake(beomTil);
// result = beom_til
```

```
import { camelToSnake } from 'beomtil';

const result = camelToSnake(beomTil);
// result = beom_til
```

#### truncate(string, length)

Truncates the given string to the specified length and appends an ellipsis.

-   `string` : (required) The string to be truncated.
-   `length` : (required) The maximum length of the truncated string.

```
const { truncate } = require('beomtil');

const result = truncate('Hello World', 5);
// result = Hello...
```

```
import { truncate } from 'beomtil';

const result = truncate('Hello World', 5);
// result = Hello...
```

## Version

### v1.0.1

-   changeValueNotataion()

### v1.0.2

-   masking()

### v1.0.3

-   compatible esm, cjs ✨
