class Notification extends HTMLElement {
    constructor() {
      super();

      const existingNotification = document.getElementsByTagName('notification-popup');
      if (existingNotification?.length > 0) {
        existingNotification[0]?.remove()
      }

      const shadow = this.attachShadow({ mode: 'open' });
  
      const template = document.createElement('template');
      template.innerHTML = `
        <div class="notification">
          <div class="icon"></div>
          <div class="label"></div>
        </div>
      `;
      const styleLink = document.createElement('link');
      styleLink.rel = 'stylesheet';
      styleLink.href = 'index.css';
      shadow.appendChild(styleLink);
      shadow.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
      const notification = this.shadowRoot.querySelector(".notification");
      if (this.id) {
        notification.setAttribute('id', this.id);
      }

      if (this.status) {
        notification.setAttribute('status', this.status);
      }

      // Hiển thị Notification
      const showNoti = () => {
        notification.classList.add("show");
        setTimeout(() => {
          hideNoti()
        }, 3000);
      }

      // Ẩn Notification
      const hideNoti = () => {
        notification.classList.remove("show");
        this.remove();
      }

      setTimeout(() => {
        showNoti()
      }, 100)
    }

    setLabel(innerHTML) {
      const label = this.shadowRoot.querySelector(".label");
      label.innerHTML = innerHTML;
    }
  }
  
  customElements.define('notification-popup', Notification);