class ConformPopup extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
  
      const template = document.createElement('template');
      template.innerHTML = `
        <div class="confirm-popup">
          <div class="overlay"></div>
          <div class="content">
            <div class="title">
              <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
              Confirm Approve
               <span data-confirm="0" class="modal-action" id="modal-close">
              <i class="fa fa-times" aria-hidden="true"></i>
            </span>
            </div>
            <div class="body"></div>
            <div class="footer">
              <button class="btn-cancel"></button>
              <button class="btn-ok btn-common"></button>
            </div>
          </div>
        </div>
      `;

      const styleLink = document.createElement('link');
      styleLink.rel = 'stylesheet';
      styleLink.href = 'index.css';
      shadow.appendChild(styleLink);
      shadow.appendChild(template.content.cloneNode(true));
    }

     connectedCallback() {
      const confirmPopup = this.shadowRoot.querySelector(".confirm-popup");
      const overlay = this.shadowRoot.querySelector(".overlay");
      const btnCancel = this.shadowRoot.querySelector(".btn-cancel");
      const btnOk = this.shadowRoot.querySelector(".btn-ok");

      const show = () => {
        confirmPopup.classList.add('active');
        document.body.style.overflowY = "hidden";
      }
      const hide = () => {
        confirmPopup.classList.remove("active");
        document.body.style.overflowY = "auto";
        this.remove();
      }
      
      overlay.addEventListener("click", hide);
      btnCancel.addEventListener("click", () => {
      if (this.callback) this.callback(false);
      hide();
    });

    btnOk.addEventListener("click", () => {
      if (this.callback) this.callback(true);
      hide();
    });

      setTimeout(function () {
        show()
      }, 100);
    }

    setTitle(innerHTML) {
      const title = this.shadowRoot.querySelector(".title");
      title.innerHTML = innerHTML;
    }

    setBody(innerHTML) {
      const body = this.shadowRoot.querySelector(".body");
      body.innerHTML = innerHTML;
    }
  
    setTextOk(innerHTML) {
      const textOk = this.shadowRoot.querySelector(".btn-ok");
      textOk.innerHTML = innerHTML;
    }

    setTextCancel(innerHTML) {
      const textCancel = this.shadowRoot.querySelector(".btn-cancel");
      textCancel.innerHTML = innerHTML;
    }

    setCallback(callback) {
      this.callback = callback;
    }
  }
  
  customElements.define('confirm-popup', ConformPopup);