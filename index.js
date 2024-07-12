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
  console.log('document: ', document)
  var modal = document.createElement('div');
  modal.id = 'modal-confirmation';
  modal.innerHTML = '<div id="modal-header"><div class="title"><i class="fa fa-exclamation-circle" aria-hidden="true"></i> Confirm Delete</div><span data-confirm="0" class="modal-action" id="modal-close"><i class="fa fa-times" aria-hidden="true"></i></span></div><div id="modal-content"><div class="content">' + text + '</div></div><div id="modal-buttons"><button class="modal-action" data-confirm="0" id="modal-button-no">Refuse</button><button class="modal-action" data-confirm="1" id="modal-button-yes">Approve</button></div>';
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
