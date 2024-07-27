class SelectInput extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
  
      const template = document.createElement('template');
      template.innerHTML = `
        <div class="select-box">
  <div class="select-box__current" tabindex="1">
    <div class="select-box__value">
      <input class="select-box__input" type="radio" id="all" value="all" name="marketFilter" checked="checked">
      <p class="select-box__input-text">All</p>
    </div>
    <div class="select-box__value">
      <input class="select-box__input" type="radio" id="egg" value="egg" name="marketFilter">
      <p class="select-box__input-text">Egg</p>
    </div>
    <div class="select-box__value">
      <input class="select-box__input" type="radio" id="dragon" value="dragon" name="marketFilter">
      <p class="select-box__input-text">Dragon</p>
    </div>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="select-box__icon">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000"/>
    </svg>
  </div>
  <ul class="select-box__list">
    <li>
      <label class="select-box__option" for="all" aria-hidden="aria-hidden">All</label>
    </li>
    <li>
      <label class="select-box__option" for="egg" aria-hidden="aria-hidden">Egg</label>
    </li>
    <li>
      <label class="select-box__option" for="dragon" aria-hidden="aria-hidden">Dragon</label>
    </li>
  </ul>
</div>
      `;
  
      const styleLink = document.createElement('link');
      styleLink.rel = 'stylesheet';
      styleLink.href = 'index.css';
      shadow.appendChild(styleLink);
      shadow.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes() {
      return ['options', 'class'];
    }

    connectedCallback() {
      const selectBox = this.shadowRoot.querySelector(".select-box");
      const selectInput = this.shadowRoot.querySelector(".select-box__current");
      const selectList = this.shadowRoot.querySelector(".select-box__list");
      
      function handleClickOutside(event) {
        if (!selectList.contains(event.target)) {
          console.log("revmove")
          selectList.classList.remove('active')
        }
      }
      
      selectInput.addEventListener("click", (event) => {
        if (!selectList.classList.contains('active')) {
          console.log("add")
          event.stopPropagation()
          selectList.classList.add('active')
        } else {
          selectList.classList.remove('active')
        }
        
      });

      document.addEventListener('click', handleClickOutside);
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'options') {
        console.log("newValue: ", newValue)
        this.renderOptions(JSON.parse(newValue));
      } else if (name === 'class') {
        this.updateClass(newValue);
      }
    }
  
    renderOptions(options) {
      const slipDiv = this.shadowRoot.querySelector('.select-input');
      slipDiv.innerHTML = '';
      options.forEach((option, index) => {
        const div = document.createElement('li');
        div.setAttribute('value', option.value);
        if (option.selected) {
          div.setAttribute('selected', true);
        }
        div.textContent = option.label;
  
        div.addEventListener('click', (e) => {
          this.updateSelected(index);
                });
  
        slipDiv.appendChild(div);
      });
    }
  
    updateClass(className) {
      const slipDiv = this.shadowRoot.querySelector('.select-input');
      slipDiv.className = `select-input ${className}`;
    }

    updateSelected(index) {
      const options = this.options;
      options.forEach((option, i) => {
        option.selected = i === index;
      });
      this.options = options;
      this.dispatchEvent(new CustomEvent('option-changed', {
        detail: {
          value: options[index]?.value,
          options: options
        }
      }));
    }
  
    set options(value) {
      this.setAttribute('options', JSON.stringify(value));
    }

    get options() {
      return JSON.parse(this.getAttribute('options'));
    }
  }
  
  customElements.define('select-input', SelectInput);