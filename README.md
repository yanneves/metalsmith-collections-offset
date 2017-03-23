# metalsmith-collections-offset [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
A plugin to offset items in a Metalsmith collection.

## Features

- removes x items from beginning of collection using `offset`
- removes x items from end of collection using `-offset`

## Installation

```bash
$ npm install --save-dev metalsmith-collections-offset
```

## Usage

### Configure your build

```javascript
import offsetCollections from 'metalsmith-collections-offset'

metalsmith
  .use(collections())
  .use(offsetCollections({
    articles: 1
  }))
```

Remove first n items from collection

```javascript
metalsmith.use(offsetCollections({
  [collectionName]: n
}))
```

Remove last n items from collection

```javascript
metalsmith.use(offsetCollections({
  [collectionName]: -n
}))
```


## CLI Usage

```json
{
  "plugins": {
    "metalsmith-collections-offset": {
      "articles": 1
    }
  }
}
```

## License

MIT License

Copyright (c) 2017 Yann Eves &lt;hello@yanneves.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


[npm-image]: https://badge.fury.io/js/metalsmith-collections-offset.svg
[npm-url]: https://npmjs.org/package/metalsmith-collections-offset
[travis-image]: https://travis-ci.org/yanneves/metalsmith-collections-offset.svg?branch=master
[travis-url]: https://travis-ci.org/yanneves/metalsmith-collections-offset
[daviddm-image]: https://david-dm.org/yanneves/metalsmith-collections-offset.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/yanneves/metalsmith-collections-offset
