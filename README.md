# Iconv-Wordwrap

[![NPM version](https://img.shields.io/npm/v/iconv-wordwrap.svg?style=flat)](https://www.npmjs.com/package/iconv-wordwrap)

### A wordwrap function for Iconv and Iconv-lite Buffers.

## Installing

Using npm:

```bash
$ npm install iconv-wordwrap
```

using bun:

```bash
$ bun add iconv-wordwrap
```

Using yarn:

```bash
$ yarn add iconv-wordwrap
```

Using pnpm:

```bash
$ pnpm add iconv-wordwrap
```

Once the package is installed, you can import the library using default import:

```js
import IconvWrap from "iconv-wordwrap";
```

## Options

An options object can be passed to the function to 

### options.width

Type: `Number`

Default: `50`

The width of the text before wrapping to a new line.

**Example:**

```js
wrap(str, {width: 60});
```

### options.newline

Type: `Number or String`

Default: `\n` (two spaces)

The char to use at the end of each line.

**Example:**

```js
wrap(str, {indent: '\n'});
```
or
```js
wrap(str, {newline: 23});
```

### options.space

Type: `String or Number`

Default: `' '`

The preferred character to break lines at.

**Example:**

```js
wrap(str, {space: '.'});
```

This project was created using `bun init` in bun v1.0.1. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
