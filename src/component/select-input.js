class SelectInput extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
        <div class="select-box">
  <div class="select-box__current"></div>
  <ul class="select-box__list"></ul>
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

    if (this.id) {
      selectBox.setAttribute('id', this.id);
    }

    function handleClickOutside(event) {
      if (!selectList.contains(event.target)) {
        selectList.classList.remove('active')
      }
    }

    selectInput.addEventListener("click", (event) => {
      if (!selectList.classList.contains('active')) {
        const elementParent = selectList.getRootNode().host.getRootNode()
        const selectInputs = elementParent.querySelectorAll('select-input')
        selectInputs.forEach((selectInput) => {
          const listItem = selectInput.shadowRoot.querySelector(".select-box__list")
          if (selectInput.getAttribute('id') == this.id) {
            selectList.classList.add('active')
          } else {
            listItem.classList.remove('active')
          }
        });
        event.stopPropagation()
      } else {
        selectList.classList.remove('active')
      }

    });

    document.addEventListener('click', handleClickOutside);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'options') {
      this.renderOptions(JSON.parse(decodeURIComponent(newValue)));
    } else if (name === 'class') {
      this.updateClass(newValue);
    }
  }

  renderOptions(options) {
    const listDiv = this.shadowRoot.querySelector('.select-box__list');
    const currentDiv = this.shadowRoot.querySelector('.select-box__current');
    listDiv.innerHTML = '';
    currentDiv.innerHTML = '';
    options.forEach((option, index) => {
      // ------------ Views ---------- //
      const div = document.createElement('div');
      div.classList.add("select-box__value")
      div.innerHTML = `
          <input class="select-box__input" type="radio" id="${option?.value}" value="${option?.value}" ${option?.selected ? 'checked' : ''}>
          <p class="select-box__input-text">${option?.label}</p>
        `
      currentDiv.appendChild(div)
      // ------------ Options ---------- //
      const li = document.createElement('li');
      const label = document.createElement('label');
      label.classList.add("select-box__option");
      label.setAttribute("for", option?.value)
      label.setAttribute("aria-hidden", "aria-hidden")
      if (option?.selected) {
        label.setAttribute("checked", option?.selected)
      }
      label.textContent = option?.label
      li.appendChild(label)
      li.addEventListener('click', (e) => {
        this.updateSelected(index);
      });
      listDiv.appendChild(li);
    });
    if (!currentDiv.querySelector('svg')) {
      currentDiv.insertAdjacentHTML('afterbegin', `
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="select-box__icon">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000"/>
        </svg>
      `)
    }
  }

  updateClass(className) {
    const selectBox = this.shadowRoot.querySelector('.select-box');
    selectBox.className = `select-box ${className}`;
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
    this.setAttribute('options', encodeURIComponent(JSON.stringify(value)));
  }

  get options() {
    return JSON.parse(decodeURIComponent(this.getAttribute('options')));
  }
}

customElements.define('select-input', SelectInput);