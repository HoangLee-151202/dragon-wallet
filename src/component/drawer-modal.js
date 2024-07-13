class Drawer extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
  
      const template = document.createElement('template');
      template.innerHTML = `
        <div class="drawer">
              <div class="header fixed z-[1]">
                <button class="relative p-4 btn-close">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.9991 19L9.83911 14C9.56672 13.7429 9.34974 13.433 9.20142 13.0891C9.0531 12.7452 8.97656 12.3745 8.97656 12C8.97656 11.6255 9.0531 11.2548 9.20142 10.9109C9.34974 10.567 9.56672 10.2571 9.83911 10L14.9991 5"
                      stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
                <div class="header-balance flex justify-center items-center">
                  <p class="phrase">
                    Withdraw</p>
                </div>
                <button class="relative p-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.9991 19L9.83911 14C9.56672 13.7429 9.34974 13.433 9.20142 13.0891C9.0531 12.7452 8.97656 12.3745 8.97656 12C8.97656 11.6255 9.0531 11.2548 9.20142 10.9109C9.34974 10.567 9.56672 10.2571 9.83911 10L14.9991 5"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
              <div class="content">
                <div>Select token to withdraw</div>
                <div class="balance w-full">
                  <div class="flex gap-2 flex-wrap">
                    <div class="flex items-center w-full gap-2">
                      <div
                        class="balance-content__select items-center justify-between border-common rounded grow-0 show-modal-tokens">
                        <div class="flex gap-1 items-center cursor-pointer fz-16">
                          <img src="./assets/img/gem.png" class="img-icon"><span class="">DGEM</span>
                        </div>
                      </div>
                      <div class="balance-content border-common rounded flex-wrap gap-2 grow">
                        <div class="w-full items-center relative"><input type="text" id="withdraw-input"
                            inputmode="decimal" lang="en-US" enterkeyhint="done" placeholder="0"
                            class="balance-content__input background-input text-left w-full" autocapitalize="off"
                            autocomplete="off"></div>
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-between total">
                    <div>Balance: </div>
                    <div>~ 0 USD</div>
                  </div>
                  <div class="flex justify-between total">
                    <div>Price impact: </div>
                    <div>~ 0 USD</div>
                  </div>
                  <div class="flex justify-between total">
                    <div>Minium Received: </div>
                    <div>~ 0 USD</div>
                  </div>
                  <div class="flex justify-between total">
                    <div>Total: </div>
                    <div>~ 0 USD</div>
                  </div>
                  <div class="footer-button">
                    <button class="btn-withdraw">Withdraw</button>
                    <button class="btn-cancel">Cancel</button>
                  </div>
                </div>
              </div>
      </div>
      `;
  
      const styleLink = document.createElement('link');
      styleLink.rel = 'stylesheet';
      styleLink.href = 'index.css';
      shadow.appendChild(styleLink);
      shadow.appendChild(template.content.cloneNode(true));

  // Hiển thị Bottom sheet, ẩn thanh cuộn dọc nội dung và gọi updateSheetHeight\
  const drawer = shadow.querySelector('.drawer')
  const btnClose = shadow.querySelector('.btn-close')

  const showDrawer = () => {
    drawer.classList.add("show");
  }

  const hiddenDrawer = () => {
    drawer.classList.remove("show");
  }

  showDrawer();
  btnClose.addEventListener('click', () => {
    hiddenDrawer()
  });
}
  
  }
  
  customElements.define('drawer-modal', Drawer);