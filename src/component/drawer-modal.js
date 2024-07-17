class Drawer extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML =`
      <div class="drawer">
        <div class="header fixed z-[1]">
          <button class="relative p-4 btn-back">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.9991 19L9.83911 14C9.56672 13.7429 9.34974 13.433 9.20142 13.0891C9.0531 12.7452 8.97656 12.3745 8.97656 12C8.97656 11.6255 9.0531 11.2548 9.20142 10.9109C9.34974 10.567 9.56672 10.2571 9.83911 10L14.9991 5"
                stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <div class="title"></div>
           <button class="relative p-4 btn-next">
            <div class="btn-right flex"></div>
          </button>
        </div>
        <div class="body"></div>
        <div class="footer"></div>
      </div>
    `;

    const styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.href = 'index.css';
    shadow.appendChild(styleLink);
    shadow.appendChild(template.content.cloneNode(true));

    // Hiển thị Bottom sheet, ẩn thanh cuộn dọc nội dung và gọi updateSheetHeight\
    const drawer = shadow.querySelector('.drawer')
    const btnBack = shadow.querySelector('.btn-back')
    const btnNext = shadow.querySelector('.btn-next')

    const show = () => {
      drawer.classList.add("show");
    }

    this.hide = () => {
      drawer.classList.remove("show");
      setTimeout(() => {
        this.remove()
      }, 3000)
      
    }

    setTimeout(() => {
      show();
    }, 100)

    btnBack.addEventListener('click', () => {
      this.hide();
    });

    btnNext.addEventListener('click', () => {
      this.nextCallBack();
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'title') {
      this._title = newValue;
    } else if (name === 'body') {
      this._body = newValue;
    } else if (name === 'text-ok') {
      this._textOk = newValue;
    } else if (name === 'text-cancel') {
      this._textCancel = newValue;
    }
    this._updateUI();
  }
  setTitle(innerHTML) {
    const title = this.shadowRoot.querySelector(".title");
    title.innerHTML = innerHTML;
  }

  setBody(innerHTML) {
    const body = this.shadowRoot.querySelector(".body");
    body.innerHTML = innerHTML;
  }

  setFooter(innerHTML) {
    const footer = this.shadowRoot.querySelector(".footer");
    footer.innerHTML = innerHTML;
  }

  setBtnRight(innerHTML) {
    const extraRight = this.shadowRoot.querySelector(".btn-right");
    extraRight.innerHTML = innerHTML;
  }

  setCallBack(callback) {
    this.nextCallBack = callback
  }
}

customElements.define('drawer-modal', Drawer);