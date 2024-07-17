class OtpInput extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
  
      const template = document.createElement('template');
      template.innerHTML = `
        <div class="otp-field">
          <input type="text" maxlength="1" />
          <input type="text" maxlength="1" />
          <input class="space" type="text" maxlength="1" />
          <input type="text" maxlength="1" />
          <input type="text" maxlength="1" />
          <input type="text" maxlength="1" />
        </div>
      `;
      const styleLink = document.createElement('link');
      styleLink.rel = 'stylesheet';
      styleLink.href = 'index.css';
      shadow.appendChild(styleLink);
      shadow.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
      const handleOtp = (e, input) => {
        let value = e.target.value;
        let isValidInput = value.match(/[0-9a-z]/gi);
        input.value = "";
        input.value = isValidInput ? value[0] : "";
        let fieldIndex = input.dataset.index;
        if (fieldIndex < inputs.length - 1 && isValidInput) {
            input.nextElementSibling.focus();
        }
        if (e.key === "Backspace" && fieldIndex > 0) {
            input.previousElementSibling.focus();
        }
        if (fieldIndex == inputs.length - 1 && isValidInput) {
            submit();
        }
      }
      const handleOnPasteOtp = (e) => {
        const data = e.clipboardData.getData("text");
        const value = data.split("");
        if (value.length === inputs.length) {
            inputs.forEach((input, index) => (input.value = value[index]));
            submit();
        }
      }
      const submit = () => {
        let otp = "";
        inputs.forEach((input) => {
            otp += input.value;
        });
        if (this.callback) this.callback(otp);
      }

      const inputs = this.shadowRoot.querySelectorAll(".otp-field input");
      inputs.forEach((input, index) => {
        input.dataset.index = index;
        input.addEventListener("keyup", (e) => handleOtp(e, input));
        input.addEventListener("paste", handleOnPasteOtp);
      });
    }

    setCallback = (callback) => {
      this.callback = callback;
    }
  }
  
  customElements.define('otp-input', OtpInput);