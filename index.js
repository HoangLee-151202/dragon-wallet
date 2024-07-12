import { ReactComponent as BackIcon } from './assets/svg/back.svg';

// ---------------------------- Handle Drag Bottom Sheet Deposit ---------------------------------
// Chọn phần tử DOM
const showModalBtnDeposit = document.querySelector(".show-modal-deposit");
const bottomSheetDeposit = document.querySelector("#section-deposit .bottom-sheet");
const sheetOverlayDeposit = bottomSheetDeposit.querySelector("#section-deposit .sheet-overlay");
const sheetContentDeposit = bottomSheetDeposit.querySelector("#section-deposit .content");
const dragIconDeposit = bottomSheetDeposit.querySelector("#section-deposit .drag-icon");

// Biến toàn cục để theo dõi các sự kiện kéo
let isDraggingDeposit = false, startYDeposit, startHeightDeposit;

// Hiển thị Bottom sheet, ẩn thanh cuộn dọc nội dung và gọi updateSheetHeightDeposit
const showBottomSheetDeposit = () => {
    bottomSheetDeposit.classList.add("show");
    document.body.style.overflowY = "hidden";
    updateSheetHeightDeposit(70);
}

const updateSheetHeightDeposit = (height) => {
    sheetContentDeposit.style.height = `${height}vh`; // Cập nhật chiều cao của nội dung Bottom sheet
}

// Ẩn Bottom sheet và hiển thị thanh cuộn dọc nội dung
const hideBottomSheetDeposit = () => {
    bottomSheetDeposit.classList.remove("show");
    document.body.style.overflowY = "auto";
}

// Đặt vị trí kéo ban đầu, chiều cao nội dung Bottom sheet và thêm class kéo vào Bottom sheet
const dragStartDeposit = (e) => {
    isDraggingDeposit = true;
    startYDeposit = e.pageY || e.touches?.[0].pageY;
    startHeightDeposit = parseInt(sheetContentDeposit.style.height);
    bottomSheetDeposit.classList.add("draggingDeposit");
}

// Tính chiều cao mới cho nội dung Bottom sheet và gọi hàm updateSheetHeightDeposit
const draggingDeposit = (e) => {
    if(!isDraggingDeposit) return;
    const delta = startYDeposit - (e.pageY || e.touches?.[0].pageY);
    const newHeight = startHeightDeposit + delta / window.innerHeight * 100;
    updateSheetHeightDeposit(newHeight > 70 ? 70 : newHeight);
}

// Xác định xem nên ẩn hay đặt thành mặc định
// Chiều cao dựa trên chiều cao hiện tại của nội dung Bottom sheet
const dragStopDeposit = () => {
    isDraggingDeposit = false;
    bottomSheetDeposit.classList.remove("draggingDeposit");
    const sheetHeight = parseInt(sheetContentDeposit.style.height);
    sheetHeight < 35 ? hideBottomSheetDeposit() : updateSheetHeightDeposit(70);
}

dragIconDeposit.addEventListener("mousedown", dragStartDeposit);
document.addEventListener("mousemove", draggingDeposit);
document.addEventListener("mouseup", dragStopDeposit);

dragIconDeposit.addEventListener("touchstart", dragStartDeposit);
document.addEventListener("touchmove", draggingDeposit);
document.addEventListener("touchend", dragStopDeposit);

sheetOverlayDeposit.addEventListener("click", hideBottomSheetDeposit);
showModalBtnDeposit.addEventListener("click", showBottomSheetDeposit);

// ---------------------------- Handle Drag Bottom Sheet Withdraw ---------------------------------

// Chọn phần tử DOM
const showModalBtnWithdraw = document.querySelector(".show-modal-withdraw");
const bottomSheetWithdraw = document.querySelector("#section-withdraw .bottom-sheet");
const sheetContentWithdraw = bottomSheetWithdraw.querySelector("#section-withdraw .content");
const closeModalBtnWithdraw = bottomSheetWithdraw.querySelector("#section-withdraw .btn-close");
const cancelModalBtnWithdraw = bottomSheetWithdraw.querySelector("#section-withdraw .btn-cancel");

// Biến toàn cục để theo dõi các sự kiện kéo
let isDraggingWithdraw = false, startYWithdraw, startHeightWithdraw;

// Hiển thị Bottom sheet, ẩn thanh cuộn dọc nội dung và gọi updateSheetHeightWithdraw
const showBottomSheetWithdraw = () => {
    bottomSheetWithdraw.classList.add("show");
    document.body.style.overflowY = "hidden";
    updateSheetHeightWithdraw(100);
}

const updateSheetHeightWithdraw = (height) => {
    sheetContentWithdraw.style.height = `${height}vh`; // Cập nhật chiều cao của nội dung Bottom sheet
}

// Ẩn Bottom sheet và hiển thị thanh cuộn dọc nội dung
const hideBottomSheetWithdraw = () => {
    bottomSheetWithdraw.classList.remove("show");
    document.body.style.overflowY = "auto";
}


showModalBtnWithdraw.addEventListener("click", showBottomSheetWithdraw);
closeModalBtnWithdraw.addEventListener("click", hideBottomSheetWithdraw);
cancelModalBtnWithdraw.addEventListener("click", hideBottomSheetWithdraw);

// ---------------------------- Handle Drag Bottom Sheet Select Token ---------------------------------
// Chọn phần tử DOM
const showModalBtnTokens = document.querySelector(".show-modal-tokens");
const bottomSheetTokens = document.querySelector("#section-tokens .bottom-sheet");
const sheetOverlayTokens = bottomSheetTokens.querySelector("#section-tokens .sheet-overlay");
const sheetContentTokens = bottomSheetTokens.querySelector("#section-tokens .content");
const dragIconTokens = bottomSheetTokens.querySelector("#section-tokens .drag-icon");
const closeModalBtnTokens = bottomSheetTokens.querySelector("#section-tokens .btn-cancel");

// Biến toàn cục để theo dõi các sự kiện kéo
let isDraggingTokens = false, startYTokens, startHeightTokens;

// Hiển thị Bottom sheet, ẩn thanh cuộn dọc nội dung và gọi updateSheetHeightTokens
const showBottomSheetTokens = () => {
    bottomSheetTokens.classList.add("show");
    document.body.style.overflowY = "hidden";
    updateSheetHeightTokens(90);
}

const updateSheetHeightTokens = (height) => {
    sheetContentTokens.style.height = `${height}vh`; // Cập nhật chiều cao của nội dung Bottom sheet
}

// Ẩn Bottom sheet và hiển thị thanh cuộn dọc nội dung
const hideBottomSheetTokens = () => {
    bottomSheetTokens.classList.remove("show");
    document.body.style.overflowY = "auto";
}

// Đặt vị trí kéo ban đầu, chiều cao nội dung Bottom sheet và thêm class kéo vào Bottom sheet
const dragStartTokens = (e) => {
    isDraggingTokens = true;
    startYTokens = e.pageY || e.touches?.[0].pageY;
    startHeightTokens = parseInt(sheetContentTokens.style.height);
    bottomSheetTokens.classList.add("draggingTokens");
}

// Tính chiều cao mới cho nội dung Bottom sheet và gọi hàm updateSheetHeightTokens
const draggingTokens = (e) => {
    if(!isDraggingTokens) return;
    const delta = startYTokens - (e.pageY || e.touches?.[0].pageY);
    const newHeight = startHeightTokens + delta / window.innerHeight * 100;
    updateSheetHeightTokens(newHeight > 90 ? 90 : newHeight);
}

// Xác định xem nên ẩn hay đặt thành mặc định
// Chiều cao dựa trên chiều cao hiện tại của nội dung Bottom sheet
const dragStopTokens = () => {
    isDraggingTokens = false;
    bottomSheetTokens.classList.remove("draggingTokens");
    const sheetHeight = parseInt(sheetContentTokens.style.height);
    sheetHeight < 50 ? hideBottomSheetTokens() : updateSheetHeightTokens(90);
}

dragIconTokens.addEventListener("mousedown", dragStartTokens);
document.addEventListener("mousemove", draggingTokens);
document.addEventListener("mouseup", dragStopTokens);

dragIconTokens.addEventListener("touchstart", dragStartTokens);
document.addEventListener("touchmove", draggingTokens);
document.addEventListener("touchend", dragStopTokens);

sheetOverlayTokens.addEventListener("click", hideBottomSheetTokens);
closeModalBtnTokens.addEventListener("click", hideBottomSheetTokens);
showModalBtnTokens.addEventListener("click", showBottomSheetTokens);

//
document.getElementById('withdraw-input').addEventListener('input', function (e) {
  let input = e.target;
  let value = input.value;
  console.log('value: ', value)
  // Xóa bỏ tất cả ký tự không phải số và dấu phẩy
  let cleanedValue = value.replace(/[^0-9]/g, '');
  console.log('cleanedValue: ', cleanedValue)
  // Định dạng lại giá trị với dấu phẩy
  let formattedValue = cleanedValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
  console.log('formattedValue: ', formattedValue)
  // Cập nhật lại giá trị trong ô input
  input.value = formattedValue;
});

// ---------------------------- Handle Drag Bottom Sheet History ---------------------------------

// Chọn phần tử DOM
const showModalBtnHistory = document.querySelector(".show-modal-history");
const bottomSheetHistory = document.querySelector("#section-history .bottom-sheet");
const sheetContentHistory = bottomSheetHistory.querySelector("#section-history .content");
const closeModalBtnHistory = bottomSheetHistory.querySelector("#section-history .btn-close");

// Biến toàn cục để theo dõi các sự kiện kéo
let isDraggingHistory = false, startYHistory, startHeightHistory;

// Hiển thị Bottom sheet, ẩn thanh cuộn dọc nội dung và gọi updateSheetHeightHistory
const showBottomSheetHistory = () => {
    bottomSheetHistory.classList.add("show");
    document.body.style.overflowY = "hidden";
    updateSheetHeightHistory(100);
}

const updateSheetHeightHistory = (height) => {
    sheetContentHistory.style.height = `${height}vh`; // Cập nhật chiều cao của nội dung Bottom sheet
}

// Ẩn Bottom sheet và hiển thị thanh cuộn dọc nội dung
const hideBottomSheetHistory = () => {
    bottomSheetHistory.classList.remove("show");
    document.body.style.overflowY = "auto";
}


showModalBtnHistory.addEventListener("click", showBottomSheetHistory);
closeModalBtnHistory.addEventListener("click", hideBottomSheetHistory);

// ---------------------------- Handle Drag Bottom Sheet Order ---------------------------------

// Chọn phần tử DOM
const showModalBtnOrder = document.querySelector(".show-modal-order");
const bottomSheetOrder = document.querySelector("#section-order .bottom-sheet");
const sheetContentOrder = bottomSheetOrder.querySelector("#section-order .content");
const closeModalBtnOrder = bottomSheetOrder.querySelector("#section-order .btn-close");

// Biến toàn cục để theo dõi các sự kiện kéo
let isDraggingOrder = false, startYOrder, startHeightOrder;

// Hiển thị Bottom sheet, ẩn thanh cuộn dọc nội dung và gọi updateSheetHeightOrder
const showBottomSheetOrder = () => {
    bottomSheetOrder.classList.add("show");
    document.body.style.overflowY = "hidden";
    updateSheetHeightOrder(100);
}

const updateSheetHeightOrder = (height) => {
    sheetContentOrder.style.height = `${height}vh`; // Cập nhật chiều cao của nội dung Bottom sheet
}

// Ẩn Bottom sheet và hiển thị thanh cuộn dọc nội dung
const hideBottomSheetOrder = () => {
    bottomSheetOrder.classList.remove("show");
    document.body.style.overflowY = "auto";
}


showModalBtnOrder.addEventListener("click", showBottomSheetOrder);
closeModalBtnOrder.addEventListener("click", hideBottomSheetOrder);

// ---------------------------- Handle Drag Bottom Sheet Setting ---------------------------------

// Chọn phần tử DOM
const showModalBtnSetting = document.querySelector(".show-modal-setting");
const bottomSheetSetting = document.querySelector("#section-setting .bottom-sheet");
const sheetContentSetting = bottomSheetSetting.querySelector("#section-setting .content");
const closeModalBtnSetting = bottomSheetSetting.querySelector("#section-setting .btn-close");

// Biến toàn cục để theo dõi các sự kiện kéo
let isDraggingSetting = false, startYSetting, startHeightSetting;

// Hiển thị Bottom sheet, ẩn thanh cuộn dọc nội dung và gọi updateSheetHeightSetting
const showBottomSheetSetting = () => {
    bottomSheetSetting.classList.add("show");
    document.body.style.overflowY = "hidden";
    updateSheetHeightSetting(100);
}

const updateSheetHeightSetting = (height) => {
    sheetContentSetting.style.height = `${height}vh`; // Cập nhật chiều cao của nội dung Bottom sheet
}

// Ẩn Bottom sheet và hiển thị thanh cuộn dọc nội dung
const hideBottomSheetSetting = () => {
    bottomSheetSetting.classList.remove("show");
    document.body.style.overflowY = "auto";
}


showModalBtnSetting.addEventListener("click", showBottomSheetSetting);
closeModalBtnSetting.addEventListener("click", hideBottomSheetSetting);
// ---------------------------- Handle Open popconfirm ---------------------------------

document.getElementById('approved-order').addEventListener('click', function(e) {
  e.preventDefault(); 
  
  var userResult = function(result) {
      if (result === 1) {
          document.getElementById('approved').textContent = 'Approved';
      } else {
          document.getElementById('approved').textContent = 'Refused';
      }
  };
  
  toggleModal('Do you want to approve this withdrawal order?', userResult);
});

function toggleModal(text, callback) {
  var wrapper = document.createElement('div');
  wrapper.id = 'modal-wrapper';
  document.body.appendChild(wrapper);
  var modal = document.createElement('div');
  modal.id = 'modal-confirmation';
  modal.innerHTML = '<div id="modal-header"><div class="title"><i class="fa fa-exclamation-circle" aria-hidden="true"></i> Confirm Approve</div><span data-confirm="0" class="modal-action" id="modal-close"><i class="fa fa-times" aria-hidden="true"></i></span></div><div id="modal-content"><div class="content">' + text + '</div></div><div id="modal-buttons"><button class="modal-action" data-confirm="0" id="modal-button-no">Refuse</button><button class="modal-action" data-confirm="1" id="modal-button-yes">Approve</button></div>';
  wrapper.appendChild(modal);
  
  setTimeout(function() {
      wrapper.classList.add('active');
  }, 100);
  
  Array.from(wrapper.getElementsByClassName('modal-action')).forEach(function(element) {
      element.addEventListener('click', function() {
          var result = this.getAttribute('data-confirm');
          wrapper.classList.remove('active');
          setTimeout(function() {
              document.body.removeChild(wrapper);
              callback(parseInt(result, 10));
          }, 500);
      });
  });
}

// -------------------------------- Render List In Setting -------------------------------------
function renderList(items, listId) {
  var list = document.getElementById(listId);
  list.innerHTML = ''; // Xóa nội dung cũ nếu có

  for (var i = 0; i < items.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = `${i+1}. ${items[i]}`;
      list.appendChild(listItem);
  }
}

var items = ['galaxy', 'river', 'elephant', 'sunshine', 'quantum', 'velvet', 'horizon', 'whisper', 'dragon', 'mystic', 'labyrinth', 'eclipse', 'phoenix', 'crystal', 'nebula', 'harmony', 'voyage', 'ember', 'glacier', 'thunder'];
renderList(items, 'listKey');

// ----------------------------- Bottom sheet ------------------------------
document.getElementById('btn-deposit').addEventListener('click', function(e) {
  e.preventDefault(); 
  
  toggleBottomSheet({
    header: {
      left: <BackIcon/>,
      title: 'Withdraw',
    }, 
  });
});

function toggleBottomSheet(props) {
  var drawer = document.createElement('section');
  drawer.id = 'section-setting';
  modal.innerHTML = `<section id="section-deposit">
      <div class="bottom-sheet">
        <div class="sheet-overlay"></div>
        <div class="content">
          <div class="header">
            <div class="drag-icon"><span></span></div>
          </div>
          <div class="body">
            <div class="slippage flex justify-around w-full gap-2 mb-2 justify-end">
              <div class="slippage__content cursor-pointer">BEP-20</div>
              <div class="slippage__content cursor-pointer selected">TRC-20</div>
              <div class="slippage__content cursor-pointer">TON</div>
            </div>
            <div class="mb-1 text-sm">Scan the QR code to deposit</div>
            <div class="background">
              <img width="160px" height="160px" src="./assets/img/qrcode.png" />
            </div>
            <div class="flex justify-between mt-6 w-full">
              <div>
                <div style="font-size: 12px;">Wallet address</div>
                <div class="font-size: 16px">1A1zxawaP...ivfNa</div>
              </div>
              <button class="px-8 btn-copy btn-common button-action no-underline mt-auto mb-1 cursor-pointer"><svg
                  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clip-path="url(#clip0_712_3570)">
                    <path
                      d="M17.6291 2.72667L15.7258 0.760833C15.492 0.520805 15.2127 0.329867 14.9042 0.199218C14.5957 0.0685687 14.2642 0.000838693 13.9291 0L9.99996 0C9.03979 0.0012121 8.10939 0.333408 7.36558 0.940598C6.62178 1.54779 6.11004 2.39284 5.91663 3.33333H5.83329C4.72863 3.33466 3.66959 3.77407 2.88848 4.55518C2.10736 5.3363 1.66795 6.39534 1.66663 7.5V15.8333C1.66795 16.938 2.10736 17.997 2.88848 18.7782C3.66959 19.5593 4.72863 19.9987 5.83329 20H10.8333C11.938 19.9987 12.997 19.5593 13.7781 18.7782C14.5592 17.997 14.9986 16.938 15 15.8333V15.75C15.9405 15.5566 16.7855 15.0449 17.3927 14.301C17.9999 13.5572 18.3321 12.6268 18.3333 11.6667V4.46667C18.3345 3.81701 18.0819 3.1926 17.6291 2.72667ZM10.8333 18.3333H5.83329C5.17025 18.3333 4.53437 18.0699 4.06553 17.6011C3.59669 17.1323 3.33329 16.4964 3.33329 15.8333V7.5C3.33329 6.83696 3.59669 6.20107 4.06553 5.73223C4.53437 5.26339 5.17025 5 5.83329 5V11.6667C5.83462 12.7713 6.27403 13.8304 7.05514 14.6115C7.83626 15.3926 8.8953 15.832 9.99996 15.8333H13.3333C13.3333 16.4964 13.0699 17.1323 12.6011 17.6011C12.1322 18.0699 11.4963 18.3333 10.8333 18.3333ZM14.1666 14.1667H9.99996C9.33692 14.1667 8.70103 13.9033 8.23219 13.4344C7.76335 12.9656 7.49996 12.3297 7.49996 11.6667V4.16667C7.49996 3.50363 7.76335 2.86774 8.23219 2.3989C8.70103 1.93006 9.33692 1.66667 9.99996 1.66667H13.3333V3.33333C13.3333 3.77536 13.5089 4.19928 13.8215 4.51184C14.134 4.82441 14.5579 5 15 5H16.6666V11.6667C16.6666 12.3297 16.4032 12.9656 15.9344 13.4344C15.4656 13.9033 14.8297 14.1667 14.1666 14.1667Z"
                      fill="#ffffff"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_712_3570">
                      <rect width="20" height="20" fill="#ffffff"></rect>
                    </clipPath>
                  </defs>
                </svg> Copy</button>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  document.body.appendChild(drawer);
}