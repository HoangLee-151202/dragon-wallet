class BottomSheet extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
  
      const template = document.createElement('template');
      template.innerHTML = `
        <div class="bottom-sheet">
          <div class="overlay"></div>
          <div class="content">
            <div class="header">
              <div class="drag-icon"><span></span></div>
              <div class="title"></div>
            </div>
            <div class="body"></div>
            <div class="footer"></div>
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
      const bottomSheet = this.shadowRoot.querySelector(".bottom-sheet");
      const overlay = this.shadowRoot.querySelector(".overlay");
      const content = this.shadowRoot.querySelector(".content");
      const dragIcon = this.shadowRoot.querySelector(".drag-icon");
      const maxHeight = this.getAttribute('max-height');

      if (this.id) {
        bottomSheet.setAttribute('id', this.id);
      }

      // Biến toàn cục để theo dõi các sự kiện kéo
      let isDragging = false, startY, startHeight;
      
      // Hiển thị Bottom sheet, ẩn thanh cuộn dọc nội dung và gọi updateSheetHeight
      const show = () => {
        bottomSheet.classList.add("show");
        document.body.style.overflowY = "hidden";
        updateSheetHeight(maxHeight);
      }

      const updateSheetHeight = (height) => {
        content.style.height = `${height}vh`; // Cập nhật chiều cao của nội dung Bottom sheet
      }

      // Ẩn Bottom sheet và hiển thị thanh cuộn dọc nội dung
      this.hide = () => {
        bottomSheet.classList.remove("show");
        document.body.style.overflowY = "auto";
        setTimeout(() => {
          this.remove();
        }, 100)
      }

      // Đặt vị trí kéo ban đầu, chiều cao nội dung Bottom sheet và thêm class kéo vào Bottom sheet
      const dragStart = (e) => {
        isDragging = true;
        startY = e.pageY || e.touches?.[0].pageY;
        startHeight = parseInt(content.style.height);
        bottomSheet.classList.add("dragging");
      }

      // Tính chiều cao mới cho nội dung Bottom sheet và gọi hàm updateSheetHeight
      const dragging = (e) => {
        if (!isDragging) return;
        const delta = startY - (e.pageY || e.touches?.[0].pageY);
        const newHeight = startHeight + delta / window.innerHeight * 100;
        updateSheetHeight(newHeight > maxHeight ? maxHeight : newHeight);
      }

      // Xác định xem nên ẩn hay đặt thành mặc định
      // Chiều cao dựa trên chiều cao hiện tại của nội dung Bottom sheet
      const dragStop = () => {
        isDragging = false;
        dragIcon.classList.remove("dragging");
        const sheetHeight = parseInt(content.style.height);
        sheetHeight < (maxHeight/2) ? this.hide() : updateSheetHeight(maxHeight);
      }
      
      dragIcon.addEventListener("mousedown", dragStart);
      document.addEventListener("mousemove", dragging);
      document.addEventListener("mouseup", dragStop);

      dragIcon.addEventListener("touchstart", dragStart);
      document.addEventListener("touchmove", dragging);
      document.addEventListener("touchend", dragStop);

      overlay.addEventListener("click", this.hide);
      
      setTimeout(() => {
        show()
      }, 100)
    }

    setTitle(innerHTML) {
      console.log('this.shadowRoot: ', this.shadowRoot)
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
  }
  
  customElements.define('bottom-sheet', BottomSheet);