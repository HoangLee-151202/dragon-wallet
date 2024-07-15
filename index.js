// ---------------------------- Data ------------------------------ //
const buttonsData = [
  {
    id: 'btn-deposit',
    icon: `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9297 2V22" stroke="#EEEEEE" stroke-width="2.5" stroke-linecap="round"
          stroke-linejoin="round" />
        <path
          d="M19 16L14 21.1599C13.7437 21.4336 13.434 21.6519 13.0899 21.801C12.7459 21.9502 12.375 22.0271 12 22.0271C11.625 22.0271 11.2541 21.9502 10.9101 21.801C10.566 21.6519 10.2563 21.4336 10 21.1599L5 16"
          stroke="#EEEEEE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    `,
    text: 'Deposit',
  },
  {
    id: 'btn-withdraw',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12.0703 22V2" stroke="#EEEEEE" stroke-width="2.5" stroke-linecap="round"
          stroke-linejoin="round" />
        <path
          d="M5 8L10 2.84009C10.2571 2.5677 10.5671 2.35047 10.911 2.20215C11.2549 2.05383 11.6255 1.97754 12 1.97754C12.3745 1.97754 12.7451 2.05383 13.089 2.20215C13.4329 2.35047 13.7429 2.5677 14 2.84009L19 8"
          stroke="#EEEEEE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    `,
    text: 'Withdraw',
  },
  {
    id: 'btn-history',
    icon: `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.07 22H7C5.93913 22 4.92178 21.5785 4.17163 20.8284C3.42149 20.0782 3 19.0609 3 18V6C3 4.93913 3.42149 3.92165 4.17163 3.17151C4.92178 2.42136 5.93913 2 7 2H17C18.0609 2 19.0783 2.42136 19.8284 3.17151C20.5786 3.92165 21 4.93913 21 6V12.53"
          stroke="#EEEEEE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M12.17 17H9.85004C9.29329 16.9992 8.74772 16.8436 8.27441 16.5504C7.8011 16.2572 7.41873 15.8381 7.17004 15.34L6.83002 14.6599C6.58134 14.1618 6.19896 13.7428 5.72565 13.4496C5.25234 13.1564 4.70677 13.0008 4.15002 13H3"
          stroke="#EEEEEE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M18.44 21.88C20.3399 21.88 21.88 20.3399 21.88 18.44C21.88 16.5401 20.3399 15 18.44 15C16.5401 15 15 16.5401 15 18.44C15 20.3399 16.5401 21.88 18.44 21.88Z"
          stroke="#EEEEEE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M23.0009 23L20.8809 20.88" stroke="#EEEEEE" stroke-width="2.5" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    `,
    text: 'History',
  },
  {
    id: 'btn-order',
    icon: `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.00001 4.10999C6.14022 4.33198 5.37874 4.83376 4.83558 5.53625C4.29241 6.23875 3.99845 7.10201 4.00001 7.98999V17.99C4.00001 19.0509 4.42149 20.0682 5.17164 20.8184C5.92178 21.5685 6.93914 21.99 8.00001 21.99H16C17.0609 21.99 18.0783 21.5685 18.8284 20.8184C19.5786 20.0682 20 19.0509 20 17.99V7.98999C19.9993 7.10372 19.7044 6.24269 19.1614 5.54224C18.6184 4.84178 17.8581 4.34156 17 4.12"
          stroke="#EEEEEE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M9 5.98999C8.46957 5.98999 7.96089 5.77925 7.58582 5.40417C7.21074 5.0291 7 4.52042 7 3.98999C7 3.45956 7.21074 2.95088 7.58582 2.57581C7.96089 2.20073 8.46957 1.98999 9 1.98999H15C15.5304 1.98999 16.0392 2.20073 16.4142 2.57581C16.7893 2.95088 17 3.45956 17 3.98999C17 4.52042 16.7893 5.0291 16.4142 5.40417C16.0392 5.77925 15.5304 5.98999 15 5.98999H9Z"
          stroke="#EEEEEE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8 16H14" stroke="#EEEEEE" stroke-width="2.5 stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M8 12H16" stroke="#EEEEEE" stroke-width="2.5" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    `,
    text: 'Order',
  }
];

const qrOptions = [
  { label: 'BEP-20', selected: false },
  { label: 'TRC-20', selected: true },
  { label: 'TON', selected: false }
];

const infoWallet = {
  address: '1A1zxawaP...ivfNa'
}

// ---------------------------- Handle Drag Bottom Sheet Deposit ---------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const buttonDeposit = document.querySelector('#btn-deposit');
  buttonDeposit.addEventListener('button-click', (event) => {
    const bottomSheet = toggleBottomSheet({
      id: 'section-deposit',
      content: `
          <tab-slip id="tab-slip" options=${JSON.stringify(qrOptions)}></tab-slip>
          <div class="mb-1 text-sm">Scan the QR code to deposit</div>
          <div class="background">
            <img width="160px" height="160px" src="./assets/img/qrcode.png" />
          </div>
      `,
      footer: `
        <div class="flex justify-between mt-6 w-full">
          <div>
            <div style="font-size: 12px;">Wallet address</div>
            <div class="font-size: 16px">${infoWallet.address}</div>
          </div>
          <button class="px-8 btn-copy btn-common no-underline mt-auto mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
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
            </svg>
            Copy
          </button>
        </div>
      `
    });
      const tabSlip = bottomSheet.shadowRoot.querySelector('#tab-slip');
      if (tabSlip) {
        tabSlip.options = qrOptions;

        tabSlip.addEventListener('option-changed', (event) => {
          console.log('Change tabs:', event.detail);
        });
      }
      
      const copyButton = bottomSheet.shadowRoot.querySelector('.btn-copy');
      copyButton.addEventListener('click', (event) => {
        navigator.clipboard.writeText(infoWallet.address);
        toggleNotification({
          id: 'copy-wallet',
          label: 'Copy successfull!',
          status: 'success'
        })
      });
  });

  const buttonWithdraw = document.querySelector('#btn-withdraw');
  buttonWithdraw.addEventListener('button-click', (event) => {
    toggleDrawer({
      id: 'section-withdraw',
      slot: `<div>123</div>`
    });
  });


});
// Chọn phần tử DOM
// const showModalBtnDeposit = document.querySelector("#btn-deposit");
// const bottomSheetDeposit = document.querySelector("#section-deposit .bottom-sheet");
// const sheetOverlayDeposit = bottomSheetDeposit.querySelector("#section-deposit .sheet-overlay");
// const sheetContentDeposit = bottomSheetDeposit.querySelector("#section-deposit .content");
// const dragIconDeposit = bottomSheetDeposit.querySelector("#section-deposit .drag-icon");

// // Biến toàn cục để theo dõi các sự kiện kéo
// let isDraggingDeposit = false, startYDeposit, startHeightDeposit;

// // Hiển thị Bottom sheet, ẩn thanh cuộn dọc nội dung và gọi updateSheetHeightDeposit
// const showBottomSheetDeposit = () => {
//   bottomSheetDeposit.classList.add("show");
//   document.body.style.overflowY = "hidden";
//   updateSheetHeightDeposit(70);
// }

// const updateSheetHeightDeposit = (height) => {
//   sheetContentDeposit.style.height = `${height}vh`; // Cập nhật chiều cao của nội dung Bottom sheet
// }

// // Ẩn Bottom sheet và hiển thị thanh cuộn dọc nội dung
// const hideBottomSheetDeposit = () => {
//   bottomSheetDeposit.classList.remove("show");
//   document.body.style.overflowY = "auto";
// }

// // Đặt vị trí kéo ban đầu, chiều cao nội dung Bottom sheet và thêm class kéo vào Bottom sheet
// const dragStartDeposit = (e) => {
//   isDraggingDeposit = true;
//   startYDeposit = e.pageY || e.touches?.[0].pageY;
//   startHeightDeposit = parseInt(sheetContentDeposit.style.height);
//   bottomSheetDeposit.classList.add("draggingDeposit");
// }

// // Tính chiều cao mới cho nội dung Bottom sheet và gọi hàm updateSheetHeightDeposit
// const draggingDeposit = (e) => {
//   if (!isDraggingDeposit) return;
//   const delta = startYDeposit - (e.pageY || e.touches?.[0].pageY);
//   const newHeight = startHeightDeposit + delta / window.innerHeight * 100;
//   updateSheetHeightDeposit(newHeight > 70 ? 70 : newHeight);
// }

// // Xác định xem nên ẩn hay đặt thành mặc định
// // Chiều cao dựa trên chiều cao hiện tại của nội dung Bottom sheet
// const dragStopDeposit = () => {
//   isDraggingDeposit = false;
//   bottomSheetDeposit.classList.remove("draggingDeposit");
//   const sheetHeight = parseInt(sheetContentDeposit.style.height);
//   sheetHeight < 35 ? hideBottomSheetDeposit() : updateSheetHeightDeposit(70);
// }

// dragIconDeposit.addEventListener("mousedown", dragStartDeposit);
// document.addEventListener("mousemove", draggingDeposit);
// document.addEventListener("mouseup", dragStopDeposit);

// dragIconDeposit.addEventListener("touchstart", dragStartDeposit);
// document.addEventListener("touchmove", draggingDeposit);
// document.addEventListener("touchend", dragStopDeposit);

// sheetOverlayDeposit.addEventListener("click", hideBottomSheetDeposit);
// showModalBtnDeposit.addEventListener("click", showBottomSheetDeposit);

// // ---------------------------- Handle Drag Bottom Sheet Withdraw ---------------------------------

// // Chọn phần tử DOM
// const showModalBtnWithdraw = document.querySelector(".show-modal-withdraw");
// const bottomSheetWithdraw = document.querySelector("#section-withdraw .bottom-sheet");
// const sheetContentWithdraw = bottomSheetWithdraw.querySelector("#section-withdraw .content");
// const closeModalBtnWithdraw = bottomSheetWithdraw.querySelector("#section-withdraw .btn-close");
// const cancelModalBtnWithdraw = bottomSheetWithdraw.querySelector("#section-withdraw .btn-cancel");

// // Biến toàn cục để theo dõi các sự kiện kéo
// let isDraggingWithdraw = false, startYWithdraw, startHeightWithdraw;

// // Hiển thị Bottom sheet, ẩn thanh cuộn dọc nội dung và gọi updateSheetHeightWithdraw
// const showBottomSheetWithdraw = () => {
//   bottomSheetWithdraw.classList.add("show");
//   document.body.style.overflowY = "hidden";
//   updateSheetHeightWithdraw(100);
// }

// const updateSheetHeightWithdraw = (height) => {
//   sheetContentWithdraw.style.height = `${height}vh`; // Cập nhật chiều cao của nội dung Bottom sheet
// }

// // Ẩn Bottom sheet và hiển thị thanh cuộn dọc nội dung
// const hideBottomSheetWithdraw = () => {
//   bottomSheetWithdraw.classList.remove("show");
//   document.body.style.overflowY = "auto";
// }


// showModalBtnWithdraw.addEventListener("click", showBottomSheetWithdraw);
// closeModalBtnWithdraw.addEventListener("click", hideBottomSheetWithdraw);
// cancelModalBtnWithdraw.addEventListener("click", hideBottomSheetWithdraw);

// // ---------------------------- Handle Drag Bottom Sheet Select Token ---------------------------------
// // Chọn phần tử DOM
// const showModalBtnTokens = document.querySelector(".show-modal-tokens");
// const bottomSheetTokens = document.querySelector("#section-tokens .bottom-sheet");
// const sheetOverlayTokens = bottomSheetTokens.querySelector("#section-tokens .sheet-overlay");
// const sheetContentTokens = bottomSheetTokens.querySelector("#section-tokens .content");
// const dragIconTokens = bottomSheetTokens.querySelector("#section-tokens .drag-icon");
// const closeModalBtnTokens = bottomSheetTokens.querySelector("#section-tokens .btn-cancel");

// // Biến toàn cục để theo dõi các sự kiện kéo
// let isDraggingTokens = false, startYTokens, startHeightTokens;

// // Hiển thị Bottom sheet, ẩn thanh cuộn dọc nội dung và gọi updateSheetHeightTokens
// const showBottomSheetTokens = () => {
//   bottomSheetTokens.classList.add("show");
//   document.body.style.overflowY = "hidden";
//   updateSheetHeightTokens(90);
// }

// const updateSheetHeightTokens = (height) => {
//   sheetContentTokens.style.height = `${height}vh`; // Cập nhật chiều cao của nội dung Bottom sheet
// }

// // Ẩn Bottom sheet và hiển thị thanh cuộn dọc nội dung
// const hideBottomSheetTokens = () => {
//   bottomSheetTokens.classList.remove("show");
//   document.body.style.overflowY = "auto";
// }

// // Đặt vị trí kéo ban đầu, chiều cao nội dung Bottom sheet và thêm class kéo vào Bottom sheet
// const dragStartTokens = (e) => {
//   isDraggingTokens = true;
//   startYTokens = e.pageY || e.touches?.[0].pageY;
//   startHeightTokens = parseInt(sheetContentTokens.style.height);
//   bottomSheetTokens.classList.add("draggingTokens");
// }

// // Tính chiều cao mới cho nội dung Bottom sheet và gọi hàm updateSheetHeightTokens
// const draggingTokens = (e) => {
//   if (!isDraggingTokens) return;
//   const delta = startYTokens - (e.pageY || e.touches?.[0].pageY);
//   const newHeight = startHeightTokens + delta / window.innerHeight * 100;
//   updateSheetHeightTokens(newHeight > 90 ? 90 : newHeight);
// }

// // Xác định xem nên ẩn hay đặt thành mặc định
// // Chiều cao dựa trên chiều cao hiện tại của nội dung Bottom sheet
// const dragStopTokens = () => {
//   isDraggingTokens = false;
//   bottomSheetTokens.classList.remove("draggingTokens");
//   const sheetHeight = parseInt(sheetContentTokens.style.height);
//   sheetHeight < 50 ? hideBottomSheetTokens() : updateSheetHeightTokens(90);
// }

// dragIconTokens.addEventListener("mousedown", dragStartTokens);
// document.addEventListener("mousemove", draggingTokens);
// document.addEventListener("mouseup", dragStopTokens);

// dragIconTokens.addEventListener("touchstart", dragStartTokens);
// document.addEventListener("touchmove", draggingTokens);
// document.addEventListener("touchend", dragStopTokens);

// sheetOverlayTokens.addEventListener("click", hideBottomSheetTokens);
// closeModalBtnTokens.addEventListener("click", hideBottomSheetTokens);
// showModalBtnTokens.addEventListener("click", showBottomSheetTokens);

// //
// document.getElementById('withdraw-input').addEventListener('input', function (e) {
//   let input = e.target;
//   let value = input.value;
//   console.log('value: ', value)
//   // Xóa bỏ tất cả ký tự không phải số và dấu phẩy
//   let cleanedValue = value.replace(/[^0-9]/g, '');
//   console.log('cleanedValue: ', cleanedValue)
//   // Định dạng lại giá trị với dấu phẩy
//   let formattedValue = cleanedValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
//   console.log('formattedValue: ', formattedValue)
//   // Cập nhật lại giá trị trong ô input
//   input.value = formattedValue;
// });

// // ---------------------------- Handle Drag Bottom Sheet History ---------------------------------

// // Chọn phần tử DOM
// const showModalBtnHistory = document.querySelector(".show-modal-history");
// const bottomSheetHistory = document.querySelector("#section-history .bottom-sheet");
// const sheetContentHistory = bottomSheetHistory.querySelector("#section-history .content");
// const closeModalBtnHistory = bottomSheetHistory.querySelector("#section-history .btn-close");

// // Biến toàn cục để theo dõi các sự kiện kéo
// let isDraggingHistory = false, startYHistory, startHeightHistory;

// // Hiển thị Bottom sheet, ẩn thanh cuộn dọc nội dung và gọi updateSheetHeightHistory
// const showBottomSheetHistory = () => {
//   bottomSheetHistory.classList.add("show");
//   document.body.style.overflowY = "hidden";
//   updateSheetHeightHistory(100);
// }

// const updateSheetHeightHistory = (height) => {
//   sheetContentHistory.style.height = `${height}vh`; // Cập nhật chiều cao của nội dung Bottom sheet
// }

// // Ẩn Bottom sheet và hiển thị thanh cuộn dọc nội dung
// const hideBottomSheetHistory = () => {
//   bottomSheetHistory.classList.remove("show");
//   document.body.style.overflowY = "auto";
// }


// showModalBtnHistory.addEventListener("click", showBottomSheetHistory);
// closeModalBtnHistory.addEventListener("click", hideBottomSheetHistory);

// // ---------------------------- Handle Drag Bottom Sheet Order ---------------------------------

// // Chọn phần tử DOM
// const showModalBtnOrder = document.querySelector(".show-modal-order");
// const bottomSheetOrder = document.querySelector("#section-order .bottom-sheet");
// const sheetContentOrder = bottomSheetOrder.querySelector("#section-order .content");
// const closeModalBtnOrder = bottomSheetOrder.querySelector("#section-order .btn-close");

// // Biến toàn cục để theo dõi các sự kiện kéo
// let isDraggingOrder = false, startYOrder, startHeightOrder;

// // Hiển thị Bottom sheet, ẩn thanh cuộn dọc nội dung và gọi updateSheetHeightOrder
// const showBottomSheetOrder = () => {
//   bottomSheetOrder.classList.add("show");
//   document.body.style.overflowY = "hidden";
//   updateSheetHeightOrder(100);
// }

// const updateSheetHeightOrder = (height) => {
//   sheetContentOrder.style.height = `${height}vh`; // Cập nhật chiều cao của nội dung Bottom sheet
// }

// // Ẩn Bottom sheet và hiển thị thanh cuộn dọc nội dung
// const hideBottomSheetOrder = () => {
//   bottomSheetOrder.classList.remove("show");
//   document.body.style.overflowY = "auto";
// }


// showModalBtnOrder.addEventListener("click", showBottomSheetOrder);
// closeModalBtnOrder.addEventListener("click", hideBottomSheetOrder);

// // ---------------------------- Handle Drag Bottom Sheet Setting ---------------------------------

// // Chọn phần tử DOM
// const showModalBtnSetting = document.querySelector(".show-modal-setting");
// const bottomSheetSetting = document.querySelector("#section-setting .bottom-sheet");
// const sheetContentSetting = bottomSheetSetting.querySelector("#section-setting .content");
// const closeModalBtnSetting = bottomSheetSetting.querySelector("#section-setting .btn-close");

// // Biến toàn cục để theo dõi các sự kiện kéo
// let isDraggingSetting = false, startYSetting, startHeightSetting;

// // Hiển thị Bottom sheet, ẩn thanh cuộn dọc nội dung và gọi updateSheetHeightSetting
// const showBottomSheetSetting = () => {
//   bottomSheetSetting.classList.add("show");
//   document.body.style.overflowY = "hidden";
//   updateSheetHeightSetting(100);
// }

// const updateSheetHeightSetting = (height) => {
//   sheetContentSetting.style.height = `${height}vh`; // Cập nhật chiều cao của nội dung Bottom sheet
// }

// // Ẩn Bottom sheet và hiển thị thanh cuộn dọc nội dung
// const hideBottomSheetSetting = () => {
//   bottomSheetSetting.classList.remove("show");
//   document.body.style.overflowY = "auto";
// }


// showModalBtnSetting.addEventListener("click", showBottomSheetSetting);
// closeModalBtnSetting.addEventListener("click", hideBottomSheetSetting);
// ---------------------------- Handle Open popconfirm ---------------------------------

// document.getElementById('approved-order').addEventListener('click', function (e) {
//   e.preventDefault();

//   var userResult = function (result) {
//     if (result === 1) {
//       document.getElementById('approved').textContent = 'Approved';
//     } else {
//       document.getElementById('approved').textContent = 'Refused';
//     }
//   };

//   toggleModal('Do you want to approve this withdrawal order?', userResult);
// });

function toggleModal(text, callback) {
  var wrapper = document.createElement('div');
  wrapper.id = 'modal-wrapper';
  document.body.appendChild(wrapper);
  var modal = document.createElement('div');
  modal.id = 'modal-confirmation';
  modal.innerHTML = '<div id="modal-header"><div class="title"><i class="fa fa-exclamation-circle" aria-hidden="true"></i> Confirm Approve</div><span data-confirm="0" class="modal-action" id="modal-close"><i class="fa fa-times" aria-hidden="true"></i></span></div><div id="modal-content"><div class="content">' + text + '</div></div><div id="modal-buttons"><button class="modal-action" data-confirm="0" id="modal-button-no">Refuse</button><button class="modal-action" data-confirm="1" id="modal-button-yes">Approve</button></div>';
  wrapper.appendChild(modal);

  setTimeout(function () {
    wrapper.classList.add('active');
  }, 100);

  Array.from(wrapper.getElementsByClassName('modal-action')).forEach(function (element) {
    element.addEventListener('click', function () {
      var result = this.getAttribute('data-confirm');
      wrapper.classList.remove('active');
      setTimeout(function () {
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
    listItem.textContent = `${i + 1}. ${items[i]}`;
    list.appendChild(listItem);
  }
}

var items = ['galaxy', 'river', 'elephant', 'sunshine', 'quantum', 'velvet', 'horizon', 'whisper', 'dragon', 'mystic', 'labyrinth', 'eclipse', 'phoenix', 'crystal', 'nebula', 'harmony', 'voyage', 'ember', 'glacier', 'thunder'];
// renderList(items, 'listKey');

// --------------------------------- Render List Button Action ----------------------------------


// Hàm để render danh sách các button
function renderButtons(data) {
  const container = document.getElementById('buttons-action');
  data.forEach(item => {
    // Tạo một instance của MyButton
    const button = document.createElement('button-action');
    button.id = item.id;

    // Thêm nội dung vào các slot
    button.innerHTML = `
      <div slot="icon">${item.icon}</div>
      <div slot="default">${item.text}</div>
    `;

    // Thêm button vào container
    container.appendChild(button);
  });
}

// Gọi hàm để render các button
renderButtons(buttonsData);

// ---------------------------- Handle Open Bottom Sheet ------------------------------ //

function toggleBottomSheet({
  id,
  title,
  content,
  footer
}) {
  const bottomSheet = document.createElement('bottom-sheet');
  bottomSheet.id = id;
  title && bottomSheet.setTitle(title)
  content && bottomSheet.setBody(content)
  footer && bottomSheet.setFooter(footer)
  document.body.appendChild(bottomSheet)
  return bottomSheet
}

function toggleDrawer({
  id,
  slot
}) {
  // Tạo section
  let section = document.createElement('section');
  section.id = id;
  // document.body.appendChild(section);

  // Tạo drawer
  let drawer = document.createElement('div');
  drawer.innerHTML = `<drawer-modal/>`;
  document.body.appendChild(drawer);

  // Ẩn Bottom sheet và hiển thị thanh cuộn dọc nội dung
  const hideBottomSheet = () => {
    drawer.classList.remove("show");
    document.body.style.overflowY = "auto";
  }

}

// ------------------------------------ Handle Open Notification ----------------------- //
function toggleNotification({
  id,
  label = 'Thông báo',
  status
}) {
  const notification = document.createElement('notification-popup');
  notification.id = id;
  notification.status = status;
  notification.setLabel(label)
  document.body.appendChild(notification)
  return notification
}

// ------------------------------------ Handle Table Change ---------------------------- //
const handleDepositTabChange = (value) => {
  console.log('value: ', value)
}