import { menuItems } from './header.js';

export function createDialogNav() {
    const template = `
    <dialog>
        <p class="close">
            <button class="fa-solid fa-xmark"></button>
        </p>
        <nav class="h5">
            <ul>${menuItems}</ul>
        </nav>
        </dialog>
    `;
    return template;
}