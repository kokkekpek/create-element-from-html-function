/**
 * @param html Example:
 *     '<h1>Hello</h1>'
 * @returns {HTMLElement}
 */
export default function createElementFromHTML(html: string): HTMLElement {
    const div = document.createElement('div')
    div.innerHTML = html.trim()
    return div.firstChild as HTMLElement
}