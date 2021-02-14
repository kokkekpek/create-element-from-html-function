# README

## Build demo
```sh
cd /path/to/project
yarn install
yarn webpack
```

## Use
```sh
yarn add kokkekpek/create-element-from-html-function
```

```ts
import createElementFromHTML from 'create-element-from-html-function'

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