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
    updateSheetHeightDeposit(50);
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
    updateSheetHeightDeposit(newHeight > 50 ? 50 : newHeight);
}

// Xác định xem nên ẩn hay đặt thành mặc định
// Chiều cao dựa trên chiều cao hiện tại của nội dung Bottom sheet
const dragStopDeposit = () => {
    isDraggingDeposit = false;
    bottomSheetDeposit.classList.remove("draggingDeposit");
    const sheetHeight = parseInt(sheetContentDeposit.style.height);
    sheetHeight < 25 ? hideBottomSheetDeposit() : updateSheetHeightDeposit(50);
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