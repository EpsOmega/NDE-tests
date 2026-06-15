class JimHelloWorldAddon extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        alert("Hello World");
    }
}
customElements.define('jim-hello-world', JimHelloWorldAddon);
