# README

## Build demo
```sh
cd /path/to/project
yarn install
yarn webpack
```

## Use
```ts
import 'demo-css'
import createElementFromHTML from '../'

const element: HTMLElement = createElementFromHTML(
    `<div>
        <h1>Title</h1>
        <p>Text</p>
    </div>`
)
document.getElementById('js').appendChild(element)
```

## Limits
Parent tag must be only single.

**VALID:**
```html
<div>
    <h1>Title</h1>
    <p>Text</p>
</div>
```

**INVALID:**
```html
<h1>Title</h1>
<p>Text</p>
```