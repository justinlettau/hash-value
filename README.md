[![NPM Version](https://badge.fury.io/js/hash-value.svg)](https://badge.fury.io/js/hash-value)
[![Build Status](https://travis-ci.org/justinlettau/hash-value.svg?branch=master)](https://travis-ci.org/justinlettau/hash-value)
[![Dev Dependency Status](https://david-dm.org/justinlettau/hash-value/dev-status.svg)](https://david-dm.org/justinlettau/hash-value?type=dev)

# Hash Value

Get a consistent value from an array based on a string value.

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
  - [Material UI Avatar](#material-ui-avatar)
- [Development](#development)

# Installation

```bash
npm install hash-value --save
```

# Usage

```js
import hashValue from 'hash-value';

// colors from https://www.materialui.co/flatuicolors
const colors = [
  '#1abc9c', // Turquoise
  '#2ecc71', // Emerald
  '#3498db', // Peterriver
  '#9b59b6', // Amethyst
  '#34495e', // Wetasphalt
  '#f1c40f', // Sunflower
  '#e67e22', // Carrot
  '#e74c3c', // Alizarin
];

hashValue('Luke Skywalker', colors);
// => #3498db
```

# Example

## Material UI Avatar

```js
import Avatar from '@material-ui/core/Avatar';
import {
  blue,
  green,
  orange,
  purple,
  red,
  teal,
} from '@material-ui/core/colors';
import hashValue from 'hash-value';

const colors = [
  blue[500],
  green[500],
  orange[500],
  purple[500],
  red[500],
  teal[500],
];

function ColorAvatar(props) {
  const { name } = props;
  const bg = hashValue(name, colors);

  return <Avatar style={{ backgroundColor: bg }}>{name.charAt(0)}</Avatar>;
}
```

# Development

```
npm install
npm run build
```
