class ModalPopup extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
  
      const template = document.createElement('template');
      template.innerHTML = `
        <div class="modal-popup">
          <div class="overlay"></div>
          <div class="content">
            <div class="title">
              <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
              Confirm Approve
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
      const modalPopup = this.shadowRoot.querySelector(".modal-popup");
      const overlay = this.shadowRoot.querySelector(".overlay");
      const btnCancel = this.shadowRoot.querySelector(".btn-cancel");
      const btnOk = this.shadowRoot.querySelector(".btn-ok");

      const notification = this.shadowRoot.querySelector(".notification");
      if (this.id) {
        modalPopup.setAttribute('id', this.id);
      }

      const show = () => {
        modalPopup.classList.add('active');
        document.body.style.overflowY = "hidden";
      }
      this.hide = () => {
        modalPopup.classList.remove("active");
        document.body.style.overflowY = "auto";
        this.remove();
      }
      
      btnCancel?.addEventListener("click", () => {
      if (this.callback) this.callback(false, this.hide);
    });

    btnOk?.addEventListener("click", () => {
      if (!btnOk.classList.contains('disabled')) {
        if (this.callback) this.callback(true, this.hide);
      }
    });

      setTimeout(function () {
        show()
      }, 0);
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
  
  customElements.define('modal-popup', ModalPopup);

  function toggleModalPopup({
    id,
    title,
    content,
    footer,
    textOk,
    textCancel,
    callback
  }) {
    const modalPopup = document.createElement('modal-popup');
    modalPopup.id = id;
    modalPopup.setTitle(title ?? '')
    modalPopup.setBody(content ?? '')
    footer == '' ? modalPopup.setFooter('') : modalPopup.setFooter(footer)
    textOk && modalPopup.setTextOk(textOk)
    textCancel && modalPopup.setTextCancel(textCancel)
    callback && modalPopup.setCallback(callback)
    document.body.appendChild(modalPopup)
    return modalPopup
  }