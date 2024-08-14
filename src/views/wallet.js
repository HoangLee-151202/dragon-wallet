// ----------- Data --------------- //
const svgBtn = {
  "btn-deposit": `
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9297 2V22" stroke="#EEEEEE" stroke-width="2.5" stroke-linecap="round"
stroke-linejoin="round" />
<path
d="M19 16L14 21.1599C13.7437 21.4336 13.434 21.6519 13.0899 21.801C12.7459 21.9502 12.375 22.0271 12 22.0271C11.625 22.0271 11.2541 21.9502 10.9101 21.801C10.566 21.6519 10.2563 21.4336 10 21.1599L5 16"
stroke="#EEEEEE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
`,
  "btn-withdraw": `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
<path d="M12.0703 22V2" stroke="#EEEEEE" stroke-width="2.5" stroke-linecap="round"
stroke-linejoin="round" />
<path
d="M5 8L10 2.84009C10.2571 2.5677 10.5671 2.35047 10.911 2.20215C11.2549 2.05383 11.6255 1.97754 12 1.97754C12.3745 1.97754 12.7451 2.05383 13.089 2.20215C13.4329 2.35047 13.7429 2.5677 14 2.84009L19 8"
stroke="#EEEEEE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
`,
  "btn-history": `
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
  "btn-order": `
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
  "btn-approved": `
<svg width="20" height="20" viewBox="0 0 512 512" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<style type="text/css">
	.st0{fill:#EEEEEE;}
</style>
<g id="Layer_1"/>
<g id="Layer_2">
<g>
<path class="st0" d="M256,27.5c-61.03,0-118.42,23.77-161.57,66.93C51.27,137.58,27.5,194.97,27.5,256s23.77,118.42,66.93,161.57    C137.58,460.73,194.97,484.5,256,484.5s118.42-23.77,161.57-66.93C460.73,374.42,484.5,317.03,484.5,256    s-23.77-118.42-66.93-161.57C374.42,51.27,317.03,27.5,256,27.5z M256,452.5c-108.35,0-196.5-88.15-196.5-196.5    S147.65,59.5,256,59.5S452.5,147.65,452.5,256S364.35,452.5,256,452.5z"/>
<path class="st0" d="M347.7,131.81c-16.03,0-31.09,6.24-42.43,17.57l-85.16,85.16l-13.39-13.39    c-11.33-11.33-26.4-17.58-42.43-17.58c-16.03,0-31.1,6.24-42.43,17.57c-11.32,11.32-17.56,26.39-17.56,42.43    s6.24,31.1,17.56,42.43l57.17,57.17c10.97,10.97,25.56,17.01,41.08,17.01s30.1-6.04,41.08-17.01l128.94-128.94    c11.32-11.32,17.56-26.39,17.56-42.43c0-16.04-6.24-31.1-17.56-42.42C378.8,138.05,363.73,131.81,347.7,131.81z M367.5,211.61    L238.57,340.55c-4.93,4.93-11.48,7.64-18.45,7.64s-13.52-2.71-18.45-7.64l-57.17-57.17c-5.28-5.28-8.18-12.31-8.18-19.8    s2.91-14.52,8.19-19.8c5.29-5.29,12.32-8.2,19.8-8.2s14.51,2.91,19.8,8.2l24.71,24.7c6.25,6.25,16.38,6.25,22.63,0l96.47-96.47    c5.29-5.29,12.32-8.2,19.8-8.2s14.51,2.91,19.8,8.2c5.28,5.28,8.18,12.31,8.18,19.8S372.78,206.33,367.5,211.61z"/>
</g>
</g>
</svg>
`,
};
const buttonsData = [
  {
    id: "btn-deposit",
    icon: svgBtn["btn-deposit"],
    text: "Deposit",
    role: ["owner"],
  },
  {
    id: "btn-withdraw",
    icon: svgBtn["btn-withdraw"],
    text: "Withdraw",
    role: ["owner"],
  },
  {
    id: "btn-history",
    icon: svgBtn["btn-history"],
    text: "History",
    role: ["owner"],
  },
  {
    id: "btn-order-wait",
    icon: svgBtn["btn-order"],
    text: "Order",
    role: ["owner"],
  },
  {
    id: "btn-order-approved",
    icon: svgBtn["btn-approved"],
    text: "Approved",
    role: ["owner"],
  },
];

var walletTabs = [
  {
    label: "Tokens",
    value: "token",
    selected: true,
  },
  {
    label: "Members",
    value: "member",
    selected: false,
  },
];

const initWithdrawToTabs = [
  {
    label: "User",
    value: "user",
    selected: true,
  },
  {
    label: "Wallet",
    value: "wallet",
    selected: false,
  },
];
var withdrawToTabs = [...initWithdrawToTabs];

var otpSubmit = "";

// ---------------------------- Handle Click ---------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderButtons(buttonsData, document);

  document.getElementById(
    "wallet-balance"
  ).textContent = `$${walletData?.balance?.toLocaleString("en")}`;
  document
    .getElementById("tab-slip")
    .setAttribute("options", JSON.stringify(walletTabs));

  // Render List Token and Member
  const walletList = document.querySelector("#wallet-list");
  walletList.innerHTML = getContentWalletList();

  // Handle Change Wallet Tab
  const walletTab = document.querySelector("#tab-slip");
  walletTab.addEventListener("option-changed", (event) => {
    walletTabs = event.detail.options;
    walletList.innerHTML = getContentWalletList();
    if (event.detail.value == "member") {
      document.querySelectorAll(".btn-delete").forEach((item) => {
        item.addEventListener("click", function () {
          const index = this.getAttribute("index");
          const memberClicked = membersData[index];
          toggleConfirmPopup({
            id: "member-delete-confirm",
            title: "Confirm delete member",
            content: `Do you want to delete member ID is ${memberClicked?.id}?`,
            textOk: "Delete",
            textCancel: "Cancel",
            callback: (e, callback) =>
              handleDeleteMember(memberClicked, e, callback),
          });
        });
      });

      // Handle Click Button Add Member
      const btnAdd = document.querySelector(".btn-add");
      btnAdd.addEventListener("click", function () {
        const bottomSheetAddMember = toggleBottomSheet({
          id: "add-member",
          content: getContentAddMember(),
          footer: getFooterAddMember(),
          attrs: {
            maxHeight: 35,
          },
        });

        const btnSubmitAddMember =
          bottomSheetAddMember.shadowRoot.querySelector("#btn-submit");
        const inputAddMember =
          bottomSheetAddMember.shadowRoot.querySelector("#member-id-input");

        // Handle Change Input User Id
        inputAddMember.addEventListener("input", (event) => {
          const value = event.target.value;
          if (value?.length) {
            btnSubmitAddMember.removeAttribute("disabled");
          } else {
            btnSubmitAddMember.setAttribute("disabled", true);
          }
        });

        // Handle Click Submit Add Member
        btnSubmitAddMember.addEventListener("click", function () {
          const value = inputAddMember.value;
          const callback = bottomSheetAddMember.hide;
          handleAddMember(value, callback);
        });
      });
    }
  });

  // Handle Click Deposit Button
  const buttonDeposit = document.querySelector("#btn-deposit");
  buttonDeposit?.addEventListener("click", (event) => {
    const bottomSheet = toggleBottomSheet({
      id: "section-deposit",
      content: getContentDeposit(),
      footer: getFooterDeposit(),
      attrs: {
        maxHeight: 70,
      },
    });

    var qrcodeWithdraw = new QRCode(
      bottomSheet.shadowRoot.getElementById("qrcode-withdraw"),
      {
        text: getQrSelected()?.address,
        width: 160,
        height: 160,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      }
    );

    const tabSlip = bottomSheet.shadowRoot.querySelector("#tab-slip");
    if (tabSlip) {
      tabSlip.options = qrOptions;

      tabSlip.addEventListener("option-changed", (event) => {
        qrOptions = event.detail.options;
        const walletAddress =
          bottomSheet.shadowRoot.querySelector("#wallet-address");
        walletAddress.textContent = formatStringWalletAddress(
          getQrSelected().address
        );
        qrcodeWithdraw.clear();
        qrcodeWithdraw.makeCode(getQrSelected()?.address);
      });
    }

    const copyButton = bottomSheet.shadowRoot.querySelector(".btn-copy");
    copyButton.addEventListener("click", (event) => {
      navigator.clipboard.writeText(getQrSelected().address);
      toggleNotification({
        id: "copy-wallet",
        label: "Copy successfull!",
        status: "success",
      });
    });
  });

  // Handle Click Withdraw Button
  const buttonWithdraw = document.querySelector("#btn-withdraw");
  buttonWithdraw?.addEventListener("click", (event) => {
    const drawer = toggleDrawer({
      id: "section-withdraw",
      title: "Withdraw",
      content: getContentWithdraw(),
      footer: `
            <button class="btn-withdraw disabled">Withdraw</button>
            <button class="btn-cancel">Cancel</button>
          `,
      backCallback: resetInfoWithdraw,
    });

    const tabSlip = drawer.shadowRoot.querySelector("#tab-slip");
    if (tabSlip) {
      tabSlip.addEventListener("option-changed", (event) => {
        withdrawPercentOptions = event.detail.options;
        handleChangeWithdrawInput(
          (infoWithdraw?.balance * event.detail.value) / 100,
          drawer.shadowRoot
        );
      });
    }

    const input = drawer.shadowRoot.querySelector("#withdraw-input");
    input.addEventListener("input", (event) => {
      const parts = event.target.value?.split(".");
      const value =
        parts?.length > 2
          ? [parts[0]?.replace(/,/g, ""), parts[1]?.replace(/,/g, "")]?.join(
              "."
            )
          : event.target.value?.replace(/,/g, "");
      handleChangeWithdrawInput(value, drawer.shadowRoot);
    });

    const withdrawToSlip = drawer.shadowRoot.querySelector(
      "#tab-slip.tab-slip-withdraw-to"
    );
    const withdrawInput = drawer.shadowRoot.querySelector(
      "#withdraw-to-container"
    );
    if (withdrawToSlip) {
      withdrawToSlip.addEventListener("option-changed", (event) => {
        withdrawToTabs = event.detail.options;
        infoWithdraw.type = event.detail.value;
        withdrawInput.innerHTML = `
          <input 
            type="text"
            id="withdraw-to-input"
            value="" 
            inputmode="decimal" 
            lang="en-US"
            enterkeyhint="done"
            placeholder="Enter ${event.detail.value} id..."
            class="balance-content__input background-input text-left w-full"
            autocapitalize="off"
            autocomplete="off"
          />
        `;
      });
    }

    withdrawInput.addEventListener("input", (event) => {
      infoWithdraw.toId = event.target.value;
    });

    const buttonOk = drawer.shadowRoot.querySelector(".btn-withdraw");
    buttonOk.addEventListener("click", () => {
      if (infoWithdraw.total >= infoWithdraw.miniumReceived) {
        const confirmPopup = toggleConfirmPopup({
          id: "withdraw-confirm",
          title: "Confirm withdraw",
          content: getContentConfirmWithdraw(input.value),
          textOk: "Withdraw",
          textCancel: "Cancel",
          callback: (result, callback) =>
            handleWithdraw(result, callback, drawer.shadowRoot),
        });
        const buttonOk = confirmPopup.shadowRoot.querySelector(".btn-ok");
        buttonOk.classList.add("disabled");

        const observer = new MutationObserver((mutationsList) => {
          for (let mutation of mutationsList) {
            if (mutation.type === "attributes") {
              if (mutation.attributeName === "value") {
                const element = mutation.target;
                otpSubmit = element.getAttribute("value");
                if (element.getAttribute("value")?.length == 6) {
                  buttonOk.classList.remove("disabled");
                } else {
                  buttonOk.classList.add("disabled");
                }
              }
            }
          }
        });

        const config = { attributes: true };
        const otpInput = confirmPopup.shadowRoot.querySelector("otp-input");
        const otpField = otpInput.shadowRoot.querySelector(".otp-field");
        otpSubmit = otpField.getAttribute("value");
        observer.observe(otpField, config);
      }
    });

    const buttonCancel = drawer.shadowRoot.querySelector(".btn-cancel");
    buttonCancel.addEventListener("click", () => {
      drawer.hide();
      resetInfoWithdraw();
    });

    const buttonSelectToken = drawer.shadowRoot.querySelector(
      ".balance-content__select"
    );
    buttonSelectToken.addEventListener("click", (event) => {
      handleClickSelectToken(drawer);
    });
  });

  // Handle Click History Button
  const buttonHistory = document.querySelector("#btn-history");
  buttonHistory?.addEventListener("click", (event) => {
    toggleDrawer({
      id: "section-history",
      title: "History",
      content: getContentHistory(historiesData),
    });
  });

  // Handle Click Order Approve Button
  const buttonOrderApproved = document.querySelector("#btn-order-approved");
  buttonOrderApproved?.addEventListener("click", (event) => {
    const drawer = toggleDrawer({
      id: "section-order-approved",
      title: "Approved",
      content: getContentOrderAppoved(ordersApproveData),
    });
    drawer.shadowRoot
      .querySelectorAll(".list-item__content")
      .forEach((item) => {
        item.addEventListener("click", function () {
          const index = this.getAttribute("index");
          const orderClicked = ordersApproveData[index];
          toggleConfirmPopup({
            id: "order-approved-confirm",
            title: "Confirm approve",
            content: `Do you want to approve withdrawal at ${orderClicked.createdTime} order?`,
            textOk: "Approve",
            textCancel: "Refuse",
            callback: (e, callback) =>
              handleApproveOrder(orderClicked, e, callback),
          });
        });
      });
  });

  // Handle Click Order Wait Button
  const buttonOrderWait = document.querySelector("#btn-order-wait");
  buttonOrderWait?.addEventListener("click", (event) => {
    toggleDrawer({
      id: "section-order-wait",
      title: "Order",
      content: getContentOrderWait(ordersWaitData),
    });
  });

  const buttonSetting = document.querySelector("#btn-setting");
  buttonSetting?.addEventListener("click", (event) => {
    handleOpenSetting();
  });
});

// --------------------------------- Render Component ----------------------------------
function renderButtons(data, element) {
  const container = element.getElementById("buttons-action");
  data.forEach((item) => {
    if (item.role.includes(walletData.role)) {
      const button = document.createElement("button-action");
      button.id = item.id;

      button.innerHTML = `
  <div slot="icon">${item.icon}</div>
  <div slot="default">${item.text}</div>
`;

      container.appendChild(button);
    }
  });
}

function renderList(items, element) {
  var list = element.querySelector("#listKey");
  list.innerHTML = ""; // Xóa nội dung cũ nếu có

  for (var i = 0; i < items.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = `${i + 1}. ${items[i]}`;
    list.appendChild(listItem);
  }
}

function createOtpInput({ id, callback }) {
  const otpInput = document.createElement("otp-input");
  otpInput.id = id;
  callback && otpInput.setCallback(callback);
  document.body.appendChild(otpInput);
  return otpInput;
}

// ------------------- Get Content ------------------ //
const getContentWalletList = () => {
  let innerHtml = "";
  walletTabs?.find((tab) => {
    if (tab.selected && tab.value == "member") {
      innerHtml = `
  <div class="block-tab-menu block_balance mb-4">
            <div class="pt-1 px-3 portfolio_block">
            <div>
            <div class="flex justify-end">
              <button class="btn-add flex gap-1 align-center">
              <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Stroke 1" fill-rule="evenodd" clip-rule="evenodd" d="M9.92234 21.8083C6.10834 21.8083 2.85034 21.2313 2.85034 18.9213C2.85034 16.6113 6.08734 14.5103 9.92234 14.5103C13.7363 14.5103 16.9943 16.5913 16.9943 18.9003C16.9943 21.2093 13.7573 21.8083 9.92234 21.8083Z" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Stroke 3" fill-rule="evenodd" clip-rule="evenodd" d="M9.92231 11.2159C12.4253 11.2159 14.4553 9.1859 14.4553 6.6829C14.4553 4.1789 12.4253 2.1499 9.92231 2.1499C7.41931 2.1499 5.38931 4.1789 5.38931 6.6829C5.38031 9.1769 7.39631 11.2069 9.89031 11.2159H9.92231Z" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Stroke 5" d="M19.1313 8.12891V12.1389" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Stroke 7" d="M21.1776 10.1338H17.0876" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              Add member</button>
            </div>
            <div class="${
              walletData?.role == "shared" ? "member-grid-2" : "member-grid"
            }">
              <div class="grid-1">ID</div>
              <div class="grid-2 flex justify-center">Join at</div>
              ${
                walletData?.role === "owner"
                  ? `<div class="grid-3 flex justify-center">Action</div>`
                  : ""
              }
            </div>
            ${membersData
              ?.map((member, index) => {
                return `
                <div class="wave">
                  <div class="flex flex-row justify-between items-center flex-1 ${
                    walletData?.role == "shared"
                      ? "member-grid-2"
                      : "member-grid"
                  }">
                      <div class="member-text label_wave font-bold flex grid-1"><p class="member-id">${
                        member?.id
                      }</p> ${
                  member?.isAdmin
                    ? `
                      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.6872 14.0931L19.8706 12.3884C19.9684 11.4789 20.033 10.8783 19.9823 10.4999L20 10.5C20.8284 10.5 21.5 9.82843 21.5 9C21.5 8.17157 20.8284 7.5 20 7.5C19.1716 7.5 18.5 8.17157 18.5 9C18.5 9.37466 18.6374 9.71724 18.8645 9.98013C18.5384 10.1814 18.1122 10.606 17.4705 11.2451L17.4705 11.2451C16.9762 11.7375 16.729 11.9837 16.4533 12.0219C16.3005 12.043 16.1449 12.0213 16.0038 11.9592C15.7492 11.847 15.5794 11.5427 15.2399 10.934L13.4505 7.7254C13.241 7.34987 13.0657 7.03557 12.9077 6.78265C13.556 6.45187 14 5.77778 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 5.77778 10.444 6.45187 11.0923 6.78265C10.9343 7.03559 10.759 7.34984 10.5495 7.7254L8.76006 10.934C8.42056 11.5427 8.25081 11.847 7.99621 11.9592C7.85514 12.0213 7.69947 12.043 7.5467 12.0219C7.27097 11.9837 7.02381 11.7375 6.5295 11.2451C5.88787 10.606 5.46156 10.1814 5.13553 9.98012C5.36264 9.71724 5.5 9.37466 5.5 9C5.5 8.17157 4.82843 7.5 4 7.5C3.17157 7.5 2.5 8.17157 2.5 9C2.5 9.82843 3.17157 10.5 4 10.5L4.01771 10.4999C3.96702 10.8783 4.03162 11.4789 4.12945 12.3884L4.3128 14.0931C4.41458 15.0393 4.49921 15.9396 4.60287 16.75H19.3971C19.5008 15.9396 19.5854 15.0393 19.6872 14.0931Z" fill="#FFD700"/>
<path d="M10.9121 21H13.0879C15.9239 21 17.3418 21 18.2879 20.1532C18.7009 19.7835 18.9623 19.1172 19.151 18.25H4.84896C5.03765 19.1172 5.29913 19.7835 5.71208 20.1532C6.65817 21 8.07613 21 10.9121 21Z" fill="#FFD700"/>
</svg>
                      `
                    : ""
                }</div>
                      <p class="wave_number grid-2 flex justify-center">${
                        member?.joinAt
                      }</p>
                      ${
                        member?.isAdmin || walletData?.role == "shared"
                          ? ""
                          : `<button class="grid-3 btn-delete" index="${index}">
                      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16" stroke="#f44336" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                      </button>`
                      }
                  </div>
                </div>
              `;
              })
              .join("")}
            </div>
          </div>
  `;
    } else {
      innerHtml = `
  <div class="block-tab-menu block_balance mb-4">
            <div class="portfolio_block">
            ${tokensData
              ?.map((token) => {
                return `
                <div class="wave">
                  <img width="36px" height="36px" src="${
                    token?.img
                  }" class="mr-2 icon-wave" alt="">
                  <div class="flex flex-row justify-between items-center flex-1">
                    <div class="">
                      <p class="label_wave font-bold">${token?.name}</p>
                      <p class="wave_number">${token?.balance?.toLocaleString(
                        "en"
                      )} - $${token?.exchangeRate?.toLocaleString("en")}</p>
                    </div>
                  </div>
                </div>
              `;
              })
              .join("")}
            </div>
          </div>
  `;
    }
  });
  return innerHtml;
};

const getContentWallet = (balance) => {
  return `
            <div class="w-full flex flex-col items-center justify-between gap-2">
              <div class="flex w-full justify-between items-center mt-10">
                <p class="total-balance text-center">$${balance?.toLocaleString(
                  "en"
                )}</p>
              </div>
            </div>
            <div class="block_balance mb-4">
              <div class="flex w-full justify-between items-center flex-col">
                <div class="mt-1 w-full flex justify-around items-center">
                  <div id="buttons-action"></div>
                </div>
              </div>
            </div>
            <tab-slip id="tab-slip" options=${JSON.stringify(
              walletTabs
            )}></tab-slip>
            <div id="wallet-list"></div>
      `;
};

const getContentDeposit = () => {
  return `
              <tab-slip id="tab-slip" options=${JSON.stringify(
                qrOptions
              )}></tab-slip>
              <div class="mb-1 text-sm">Scan the QR code to deposit</div>
              <div class="background">
                <div id="qrcode-withdraw"></div>
              </div>
          `;
};

const getContentAddMember = () => {
  return `
    <div id="add-member-input" class="w-full">
      Enter the user id to invite to join your wallet
      <input
        id="member-id-input"
        type="text"
        class="w-full"
        inputmode="decimal"
        lang="en-US"
        enterkeyhint="done"
        placeholder="Enter user id..."
        autocapitalize="off"
        autocomplete="off"
      />
    </div>
  `;
};

const getFooterAddMember = () => {
  return `
            <button id="btn-submit" class="px-8 btn-add btn-common no-underline mt-auto mb-1" disabled>
              Add
            </button>
        `;
};

const getFooterDeposit = () => {
  return `
          <div class="flex justify-between mt-6 w-full">
            <div>
              <div style="font-size: 12px;">Wallet address</div>
              <div id="wallet-address" class="font-size: 16px">${formatStringWalletAddress(
                getQrSelected().address
              )}</div>
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
        `;
};

const getContentWithdraw = () => {
  return `
          <div class="text-md mb-1">Select token to withdraw</div>
          <tab-slip id="tab-slip" options=${JSON.stringify(
            withdrawPercentOptions
          )}></tab-slip>
          <div class="balance w-full">
            <div class="flex gap-2 flex-wrap">
              <div class="flex items-center w-full gap-2">
                <div class="balance-content__select items-center justify-between border-common rounded grow-0 show-modal-tokens">
                  <div class="flex gap-2 items-center fz-16">
                    <img width="24px" height="24px" src="${
                      selectedToken.img
                    }" class="img-icon">
                    <div>${selectedToken.name}</div>
                  </div>
                </div>
                <div class="balance-content border-common rounded flex-wrap gap-2 grow">
                  <div class="w-full items-center relative">
                    <input type="text" id="withdraw-input" ${
                      infoWithdraw?.amountToken != undefined
                        ? `value=${formattedNumber(infoWithdraw?.amountToken)}`
                        : ""
                    } inputmode="decimal" lang="en-US"
                      enterkeyhint="done" placeholder="0" class="balance-content__input background-input text-left w-full"
                      autocapitalize="off" autocomplete="off" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-between total mt-8">
              <div class="flex align-center">To: </div>
              <div class="flex gap-1">
                <tab-slip id="tab-slip" class="tab-slip-withdraw-to" options=${JSON.stringify(
                  withdrawToTabs
                )}></tab-slip>
              </div>
            </div>
            <div id="withdraw-to-container" class="flex justify-between mb-8">
              <input type="text" id="withdraw-to-input" ${
                infoWithdraw?.amountToken != undefined
                  ? `value=${formattedNumber(infoWithdraw?.amountToken)}`
                  : ""
              } inputmode="decimal" lang="en-US"
                      enterkeyhint="done" placeholder="Enter user id..." class="balance-content__input background-input text-left w-full"
                      autocapitalize="off" autocomplete="off" />
            </div>
            <div class="flex justify-between total">
              <div class="flex gap-1">Balance: <div id="withdraw-balance">
                  ${
                    handleChangeInputNumber(
                      infoWithdraw?.balance?.toLocaleString("en")
                    ) ?? 0
                  }</div>
              </div>
              <div class="flex gap-1">~ <div id="withdraw-subtotal">${
                infoWithdraw?.subtotal ?? 0
              }</div> USD</div>
            </div>
            <div class="flex justify-between total">
              <div>Price impact: </div>
              <div class="flex gap-1">
                <div id="withdraw-priceImpact">${
                  infoWithdraw.priceImpact
                }</div> USD
              </div>
            </div>
            <div class="flex justify-between total">
              <div>Minium Received: </div>
              <div class="flex gap-1">
                <div id="withdraw-miniumReceived">${
                  infoWithdraw.miniumReceived
                }</div> USD
              </div>
            </div>
            <div class="flex justify-between total">
              <div>Total: </div>
              <div class="flex gap-1">~ <div id="withdraw-total">${
                infoWithdraw.total
              }</div> USD</div>
            </div>
          </div>
          `;
};

const getContentToken = (tokens) => {
  return `
                  <div class="flex flex-col gap-5 w-full">
                    <div class="flex flex-col items-center gap-2">
                    <div class="select-container">
                      <div class="w-full flex-wrap select-option">
                      ${tokens
                        .map((token, index) => {
                          return `
                          <div class="select-option__content" index="${index}">
                            <div class="flex items-center gap-2"><img width="24px" height="24px" src="${token.img}" class="img-icon"
                                alt="">${token.name}</div>
                            <div class="flex gap-2 items-center text-sm">
                              <div>~${token.exchangeRate} USD</div>
                            </div>
                          </div>
                        `;
                        })
                        .join("")}
                      </div>
                      </div>
                    </div>
                  </div>
          `;
};

const getContentHistory = (histories) => {
  return `
          <div class="w-full flex-wrap list-item">
          ${histories
            .map((history) => {
              return `
              <div class="list-item__content w-full justify-between">
                <div class="flex align-center justify-between">
                  <div>${history.createdTime}</div>
                  <div class="flex items-center gap-1">
                    <img height="20px" width="20px" src="${
                      history.img
                    }" class="img-icon" alt="">
                    WBNB
                  </div>
                </div>
                <div class="flex align-center justify-between">
                  <div>Status</div>
                  <div class="${
                    history.status === "success"
                      ? "text-success"
                      : history.status === "refused"
                      ? "text-failed"
                      : ""
                  }">${capitalizeFirstLetter(history.status)}</div>
                </div>
                <div class="flex align-center justify-between">
                  <div>Balance</div>
                  <div class="${
                    history.balance >= 0 ? "text-success" : "text-failed"
                  }">${history.balance?.toLocaleString("en")} USD</div>
                </div>
                <div class="flex align-center justify-between">
                  <div>Approved</div>
                  <div>${history.approved?.toLocaleString(
                    "en"
                  )}/${history.totalMember?.toLocaleString("en")}</div>
                </div>
              </div>
            `;
            })
            .join("")}
          </div>
          `;
};

const getContentOrderAppoved = (orders) => {
  return `
          <div class="w-full flex-wrap list-item">
          ${orders
            .map((order, index) => {
              return `
              <div id="approved-order" class="list-item__content w-full justify-between" index="${index}">
                <div class="flex align-center justify-between">
                  <div>${order.createdTime}</div>
                  <div class="flex items-center gap-1">
                    <img width="20px" height="20px" src="${
                      order.img
                    }" class="img-icon" alt="">
                    WBNB
                  </div>
                </div>
                <div class="flex align-center justify-between">
                  <div>Balance</div>
                  <div class="text-failed">${order.balance?.toLocaleString(
                    "en"
                  )} USD</div>
                </div>
                <div class="flex align-center justify-between">
                  <div>Expried</div>
                  <div>${order.expriedTime}</div>
                </div>
              </div>
            `;
            })
            .join("")}
          </div>
        `;
};

const getContentOrderWait = (orders) => {
  return `
          <div class="w-full flex-wrap list-item">
          ${orders
            .map((order, index) => {
              return `
              <div id="approved-order" class="list-item__content w-full justify-between" index="${index}">
                <div class="flex align-center justify-between">
                  <div>${order.createdTime}</div>
                  <div class="flex items-center gap-1">
                    <img width="20px" height="20px" src="${
                      order.img
                    }" class="img-icon" alt="">
                    WBNB
                  </div>
                </div>
                <div class="flex align-center justify-between">
                  <div>Balance</div>
                  <div class="text-failed">${order.balance?.toLocaleString(
                    "en"
                  )} USD</div>
                </div>
                <div class="flex align-center justify-between">
                  <div>Approved</div>
                  <div>${order.approved?.toLocaleString(
                    "en"
                  )}/${order.total?.toLocaleString("en")}</div>
                </div>
                <div class="flex align-center justify-between">
                  <div>Expried</div>
                  <div>${order.expriedTime}</div>
                </div>
              </div>
            `;
            })
            .join("")}
          </div>
        `;
};

const getContentConfirmWithdraw = (value) => {
  const container = document.createElement("div");
  container.innerHTML = `
    <div>Want to place a withdrawal order of ${value} USD?</div>
    <otp-input/>
  `;
  const otpInput = container.querySelector("otp-input");
  otpInput.id = "otp-withdraw";

  return container.innerHTML;
};

const getContentSetting = () => {
  const container = document.createElement("div");
  container.innerHTML = `
                <div class="text-sm mb-1">You can save your private key</div>
                <div class="private-key-bg mb-4">
                  <div class="private-key">${walletKey.privateKey}</div>
                  <svg
                  id="copy-private"
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
                </svg>
                </div>
                <div class="text-sm mb-1">Or write down these words in order and store them in a safe way</div>
                <div class="icon-save-key">
                  <svg
                  id="copy-phase"
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
                </svg>
                    <svg id="download-phase" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.2798 22H7.00977C5.9489 22 4.93148 21.5785 4.18134 20.8284C3.43119 20.0782 3.00977 19.0609 3.00977 18V14.89C3.00977 11.4713 4.36781 8.19273 6.78516 5.77539C9.2025 3.35805 12.4811 2 15.8998 2H17.0098C18.0706 2 19.0881 2.42142 19.8382 3.17157C20.5883 3.92172 21.0098 4.93913 21.0098 6V11.4399" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M3 15.06C3 9.9 8.50004 14.0599 11.73 10.8199C14.96 7.57995 10.83 2 15.98 2" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M18.1895 15V23" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M21.1895 20L18.1895 23" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M15.1895 20L18.1895 23" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                </div>
                <ul id="listKey"></ul>
              </div>
  `;

  renderList(walletKey.phaseKey, container);
  return container.innerHTML;
};
// ----------------- Function Call API ----------------- //
const handleAddMember = (id, callback) => {
  handleSubmitAddMember(id)
    .then(() => {
      callback();
      toggleNotification({
        id: "member-add-success",
        label: "Add successfull!",
        status: "success",
      });
      getMembers();
    })
    .catch((error) => {
      toggleNotification({
        id: "member-add-failed",
        label: error?.responseJSON?.error,
        status: "failed",
      });
    });
};

const handleDeleteMember = (orderClicked, value, callback) => {
  if (!value) {
    callback();
    return;
  }

  handleSubmitDeleteMember(orderClicked, value)
    .then(() => {
      callback();
      getMembers();
      toggleNotification({
        id: "member-delete-success",
        label: "Delete successfull!",
        status: "success",
      });
    })
    .catch(() => {
      toggleNotification({
        id: "member-delete-failed",
        label: "Delete failed!",
        status: "failed",
      });
    });
};

const handleApproveOrder = (orderClicked, value, callback) => {
  handleSubmitApproveOrder(orderClicked, value)
    .then(() => {
      callback();
      if (value) {
        toggleNotification({
          id: "order-approved-success",
          label: "Approved successfull!",
          status: "success",
        });
      } else {
        toggleNotification({
          id: "order-refused-success",
          label: "Refused successfull!",
          status: "success",
        });
      }
    })
    .catch(() => {
      if (value) {
        toggleNotification({
          id: "order-approved-failed",
          label: "Approved failed!",
          status: "failed",
        });
      } else {
        toggleNotification({
          id: "order-refused-failed",
          label: "Refused failed!",
          status: "failed",
        });
      }
    });
};
// ----------------- Function Wallet ----------------- //
const formatStringWalletAddress = (string) => {
  if (string.length <= 10) {
    return string;
  }

  let start = string.slice(0, 9);
  let end = string.slice(-5);

  return `${start}...${end}`;
};

const getQrSelected = () => {
  return qrOptions?.find((item) => item.selected);
};

const resetInfoWithdraw = () => {
  infoWithdraw = { ...initInfoWithdraw };
  withdrawPercentOptions = initWithdrawOptions;
  withdrawToTabs = initWithdrawToTabs;
  selectedToken = tokensData[0];
};

const handleChangeWithdrawInput = (value, element) => {
  infoWithdraw.amountToken = value;
  infoWithdraw.subtotal =
    selectedToken?.exchangeRate * (value == "" ? 0 : value);
  infoWithdraw.total =
    infoWithdraw.subtotal - infoWithdraw.priceImpact < 0
      ? 0
      : infoWithdraw.subtotal - infoWithdraw.priceImpact;

  const input = element.querySelector("#withdraw-input");
  const subtotal = element.querySelector("#withdraw-subtotal");
  const total = element.querySelector("#withdraw-total");

  input.value =
    infoWithdraw.amountToken == ""
      ? ""
      : handleChangeInputNumber(value?.toLocaleString("en"));
  subtotal.textContent = infoWithdraw.subtotal?.toLocaleString("en") ?? 0;
  total.textContent = infoWithdraw.total?.toLocaleString("en") ?? 0;

  const tabSlip = element.querySelector("#tab-slip");
  const options = tabSlip.shadowRoot.querySelectorAll(".option");
  const optionsArray = Array.from(options);

  if (value == (infoWithdraw.balance * 25) / 100) {
    optionsArray?.map((option) => {
      option.classList.remove("selected");
    });
    const targetOption = optionsArray.find(
      (option) => option.getAttribute("value") == 25
    );
    targetOption.classList.add("selected");
  } else if (value == (infoWithdraw.balance * 50) / 100) {
    optionsArray?.map((option) => {
      option.classList.remove("selected");
    });
    const targetOption = optionsArray.find(
      (option) => option.getAttribute("value") == 50
    );
    targetOption.classList.add("selected");
  } else if (value == (infoWithdraw.balance * 75) / 100) {
    optionsArray?.map((option) => {
      option.classList.remove("selected");
    });
    const targetOption = optionsArray.find(
      (option) => option.getAttribute("value") == 75
    );
    targetOption.classList.add("selected");
  } else if (value == infoWithdraw.balance) {
    optionsArray?.map((option) => {
      option.classList.remove("selected");
    });
    const targetOption = optionsArray.find(
      (option) => option.getAttribute("value") == 100
    );
    targetOption.classList.add("selected");
  } else {
    const optionSelected = tabSlip.shadowRoot.querySelector(".option.selected");
    optionSelected?.classList.remove("selected");
  }

  const btnWithdraw = element.querySelector(".btn-withdraw");
  if (infoWithdraw.total >= infoWithdraw.miniumReceived) {
    btnWithdraw.classList.remove("disabled");
  } else {
    btnWithdraw.classList.add("disabled");
  }
};

const downloadPhaseKey = (arrWords) => {
  const textContent = arrWords.join(" ");

  const blob = new Blob([textContent], { type: "text/plain" });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "words.txt";
  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const handleWithdraw = (result, callback, element) => {
  if (result) {
    handleSubmitWithdraw(otpSubmit)
      .then(() => {
        callback();
        handleChangeWithdrawInput("", element);
        toggleNotification({
          id: "withdraw-submit-success",
          label: "Submit successfull!",
          status: "success",
        });
      })
      .catch(() => {
        toggleNotification({
          id: "withdraw-submit-error",
          label: "Submit failed!",
          status: "failed",
        });
      });
  } else {
    callback();
  }
};

const handleClickSelectToken = (drawer) => {
  const bottomSheet = toggleBottomSheet({
    id: "section-tokens",
    title: "Tokens",
    content: getContentToken(tokensData),
    footer: `<button class="btn-cancel">Cancel</button>`,
    attrs: {
      maxHeight: 90,
    },
  });

  bottomSheet.shadowRoot
    .querySelectorAll(".select-option__content")
    .forEach((item) => {
      item.addEventListener("click", function () {
        const index = this.getAttribute("index");
        selectedToken = tokensData[index];
        const imgToken = drawer.shadowRoot.querySelector(
          ".balance-content__select img"
        );
        if (imgToken) {
          imgToken.src = selectedToken.img;
          imgToken.nextElementSibling.textContent = selectedToken.name;
          infoWithdraw.token = selectedToken.name;
        }

        bottomSheet.hide();

        infoWithdraw.balance = selectedToken?.balance;
        const balance = drawer.shadowRoot.querySelector("#withdraw-balance");
        balance.textContent = handleChangeInputNumber(
          infoWithdraw.balance?.toLocaleString("en")
        );
        handleChangeWithdrawInput("", drawer.shadowRoot);
        const tabSlip = drawer.shadowRoot.querySelector("#tab-slip");
        const optionSelected =
          tabSlip.shadowRoot.querySelector(".option.selected");
        optionSelected?.classList.remove("selected");
      });
    });

  const buttonCancel = bottomSheet.shadowRoot.querySelector(".btn-cancel");
  buttonCancel.addEventListener("click", () => {
    bottomSheet.hide();
  });
};

const handleOpenSetting = () => {
  const drawer = toggleDrawer({
    id: "section-setting",
    title: "Setting",
    content: getContentSetting(),
    footer: `<button class="btn-withdraw">I recorded it</button>`,
  });

  const buttonOk = drawer.shadowRoot.querySelector(".btn-withdraw");
  buttonOk.addEventListener("click", () => {
    drawer.hide();
  });

  const copyPrivate = drawer.shadowRoot.querySelector("#copy-private");
  copyPrivate.addEventListener("click", (event) => {
    navigator.clipboard.writeText(walletKey?.privateKey);
    toggleNotification({
      id: "copy-private-key",
      label: "Copy successfull!",
      status: "success",
    });
  });

  const copyPhase = drawer.shadowRoot.querySelector("#copy-phase");
  copyPhase.addEventListener("click", (event) => {
    navigator.clipboard.writeText(walletKey?.phaseKey?.join(" "));
    toggleNotification({
      id: "copy-phase-key",
      label: "Copy successfull!",
      status: "success",
    });
  });

  const downloadPhase = drawer.shadowRoot.querySelector("#download-phase");
  downloadPhase.addEventListener("click", (event) => {
    downloadPhaseKey(walletKey.phaseKey);
  });
};

// ----------- Function Toggle ------------------ //
function toggleBottomSheet({
  id,
  title,
  content,
  footer,
  attrs: { maxHeight },
}) {
  const bottomSheet = document.createElement("bottom-sheet");
  bottomSheet.id = id;
  bottomSheet.setAttribute("max-height", maxHeight);
  title && bottomSheet.setTitle(title);
  content && bottomSheet.setBody(content);
  footer && bottomSheet.setFooter(footer);
  document.body.appendChild(bottomSheet);
  return bottomSheet;
}

function toggleConfirmPopup({
  id,
  title,
  content,
  textOk,
  textCancel,
  callback,
}) {
  const confirmPopup = document.createElement("confirm-popup");
  confirmPopup.id = id;
  title && confirmPopup.setTitle(title);
  content && confirmPopup.setBody(content);
  textOk && confirmPopup.setTextOk(textOk);
  textCancel && confirmPopup.setTextCancel(textCancel);
  callback && confirmPopup.setCallback(callback);
  document.body.appendChild(confirmPopup);
  return confirmPopup;
}

function toggleDrawer({
  id,
  title,
  content,
  footer,
  btnRight,
  nextCallback,
  backCallback,
}) {
  let drawer = document.createElement("drawer-modal");
  drawer.id = id;
  title && drawer.setTitle(title);
  content && drawer.setBody(content);
  footer && drawer.setFooter(footer);
  btnRight && drawer.setBtnRight(btnRight);
  nextCallback && drawer.setCallBack(nextCallback);
  backCallback && drawer.setBackCallBack(backCallback);
  document.body.appendChild(drawer);
  return drawer;
}

function toggleNotification({ id, label = "Notification", status }) {
  const notification = document.createElement("notification-popup");
  notification.id = id;
  notification.status = status;
  notification.setLabel(label);
  document.body.appendChild(notification);
  return notification;
}

function capitalizeFirstLetter(string) {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}
