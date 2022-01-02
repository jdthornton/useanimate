# @jdthornton/useanimate

[![npm (scoped)](https://img.shields.io/npm/v/@jdthornton/useanimate.svg)](https://www.npmjs.com/package/@jdthornton/useanimate)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@jdthornton/useanimate.svg)](https://www.npmjs.com/package/@jdthornton/useanimate)

React animation hook.

## Install

```
$ npm install @jdthornton/useanimate
```

## Usage

```js
import useAnimate from "@jdthornton/useanimate";

function App({ isActive }){

  cosnt { isAnimated, elementProps } = useAnimate(isActive);

  return(
    <div {...elementProps} className={isAnimated ? 'animated' : undefined}>
      Animated
    </div>
  )
}
```
