[`core-js-compat` package](https://github.com/zloirock/core-js/packages/core-js-compat) contains data about the necessity of [`core-js`](https://github.com/zloirock/core-js) modules and API for getting a list of required core-js modules by browserslist query.

```js
const {
  list,                  // array of required modules
  targets,               // object with targets for each module
} = require('core-js-compat')({
  targets: '> 2.5%',     // browserslist query
  filter: /^(es|web)\./, // optional filter - string-prefix, regexp or list of modules
});

console.log(targets);
/* =>
{
  'es.symbol.match-all': { ios: '12.2-12.4' },
  'es.array.unscopables.flat': { ios: '12.2-12.4' },
  'es.array.unscopables.flat-map': { ios: '12.2-12.4' },
  'es.math.hypot': { chrome: '77' },
  'es.promise.all-settled': { firefox: '69', ios: '12.2-12.4' },
  'es.promise.finally': { ios: '12.2-12.4' },
  'es.string.match-all': { chrome: '77', firefox: '69', ios: '12.2-12.4' },
  'es.string.replace': { firefox: '69', ios: '12.2-12.4' },
  'es.typed-array.float32-array': { ios: '12.2-12.4' },
  'es.typed-array.float64-array': { ios: '12.2-12.4' },
  'es.typed-array.int8-array': { ios: '12.2-12.4' },
  'es.typed-array.int16-array': { ios: '12.2-12.4' },
  'es.typed-array.int32-array': { ios: '12.2-12.4' },
  'es.typed-array.uint8-array': { ios: '12.2-12.4' },
  'es.typed-array.uint8-clamped-array': { ios: '12.2-12.4' },
  'es.typed-array.uint16-array': { ios: '12.2-12.4' },
  'es.typed-array.uint32-array': { ios: '12.2-12.4' },
  'es.typed-array.from': { ios: '12.2-12.4' },
  'es.typed-array.of': { ios: '12.2-12.4' },
  'web.dom-collections.iterator': { ios: '12.2-12.4' },
  'web.immediate': { chrome: '77', firefox: '69', ios: '12.2-12.4' },
  'web.url': { ios: '12.2-12.4' },
  'web.url.to-json': { ios: '12.2-12.4' },
  'web.url-search-params': { ios: '12.2-12.4' }
}
*/
```

If you want to add new / update data about modules required for target engines, [follow this instruction](https://github.com/zloirock/core-js/blob/master/CONTRIBUTING.md#updating-core-js-compat-data).
