# xclass

Convert JSON to class

## Installation

```javascript
yarn add xclass

or

npm install xclass
```

## Usage

```javascript
import { toClass } from "xclass";

or;

const { toClass } = require("xclass");
```

## Example

```javascript
class Person {
  lastName: string = "";
  firstName: string = "";
  occupation: string = "";
}

const json = {
  lastName: "Doe",
  firstName: "John",
  bio: {
    occupation: "doctor"
  }
};

const person = toClass(Person).from(json);
```

### Note

- `toClass` return an instance of the class passed.
- `toClass` traverses the entire object to find deeply nested values.

## Methods

| name    | type   | description                                                          |
| ------- | ------ | -------------------------------------------------------------------- |
| exclude | Array  | specify values to be excluded.                                       |
| only    | Array  | specify values to be selected only.                                  |
| pluck   | Array  | specify values to be included along the defaults.                    |
| from    | Object | extracts and returns values from the object into the class instance. |

### Example

```javascript
const person = toClass(Person)
  .only("lastName", "occupation")
  .from(json);
```

**Other methods are optional. But if you need to call any of them, they must be called before calling `.from()`.**
