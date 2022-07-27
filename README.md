

### API documentation
The `with-memoize` is a simple wrapper for cache a component. 
that cache the most recent result. However, this cache can be destroyed by React when it wants to

The `with-memoize` function accepts the properties `Component` and `callback` the callback is optional. If you don't give the callback then dependancy will be props values

```
yarn add with-memoize
# or
npm install with-memoize --save
```


## Usage

```js
import { FC } from "react"; 
import withMemo from "with-memoize";

const Example: FC<{count: number }> = ({ count }) => (
  <div>{count}</div>
);

export default withMemo(Example, (props) => {
  // do somthing
  return [props.count]
});

```


