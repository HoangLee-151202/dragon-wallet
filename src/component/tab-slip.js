class TabSlip extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
  
      const template = document.createElement('template');
      template.innerHTML = `
        <div class="tab-slip"></div>
      `;
  
      const styleLink = document.createElement('link');
      styleLink.rel = 'stylesheet';
      styleLink.href = 'index.css';
      shadow.appendChild(styleLink);
      shadow.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes() {
      return ['options'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'options') {
        this.renderOptions(JSON.parse(newValue));
      }
    }
  
    renderOptions(options) {
      const slipDiv = this.shadowRoot.querySelector('.tab-slip');
      slipDiv.innerHTML = '';
  
      options.forEach((option, index) => {
        const div = document.createElement('div');
        div.className = 'option';
        if (option.selected) {
          div.classList.add('selected');
        }
        div.textContent = option.label;
  
        div.addEventListener('click', () => {
          this.updateSelected(index);
        });
  
        slipDiv.appendChild(div);
      });
    }
  
    updateSelected(index) {
      const options = this.options;
      options.forEach((option, i) => {
        option.selected = i === index;
      });
      this.options = options;
      this.dispatchEvent(new CustomEvent('option-changed', {
        detail: options[index]?.label
      }));
    }
  
    set options(value) {
      this.setAttribute('options', JSON.stringify(value));
    }
  
    get options() {
      return JSON.parse(this.getAttribute('options'));
    }
  }
  
  customElements.define('tab-slip', TabSlip);