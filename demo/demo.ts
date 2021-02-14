import 'demo-css'
import createElementFromHTML from '../'

const element: HTMLElement = createElementFromHTML(
    `<div>
        <h1>Title</h1>
        <p>Text</p>
    </div>`
)
document.getElementById('js').appendChild(element)