class Button extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
  
      const template = document.createElement('template');
      template.innerHTML = `
        <button class="button-action">
          <div class="icon">
            <slot name="icon"></slot>
          </div>
          <div class="text">
            <slot name="default"></slot>
          </div>
        </button>
      `;
  
      const styleLink = document.createElement('link');
      styleLink.rel = 'stylesheet';
      styleLink.href = 'index.css';
      shadow.appendChild(styleLink);
      shadow.appendChild(template.content.cloneNode(true));
    }
  
    connectedCallback() {
      const button = this.shadowRoot.querySelector('button');
      if (this.id) {
        button.setAttribute('id', this.id);
      }
  
      button.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('button-click', {
          detail: { id: this.id },
          bubbles: true,
          composed: true
        }));
      });
    }
  }
  
  customElements.define('button-action', Button);