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

const withdrawPercentOptions = [
{ label: '25%', selected: false },
{ label: '50%', selected: false },
{ label: '75%', selected: false },
{ label: 'MAX', selected: false }
];

const infoWallet = {
  address: '1A1zxawaP...ivfNa'
}

const infoWithdraw = {
  balance: 0,
  subtotal: 0,
  priceImpact: 0,
  miniumReceived: 0,
  total: 0
}

const tokensData = [
  {
      img: './assets/img/gem.png',
      name: 'DGEM',
      balance: 1,
      amount: 0
  },
  {
      img: './assets/img/coin-bnb.png',
      name: 'WBNB',
      balance: -525.39,
      amount: 0
  },{
      img: './assets/img/coin-usdt.png',
      name: 'USDT',
      balance: 0.978108,
      amount: 0
  },{
      img: './assets/img/coin-busd.png',
      name: 'BUSD',
      balance: 0.994094,
      amount: 0
  },{
      img: './assets/img/coin-trx.png',
      name: 'TRX',
      balance: 0.060463,
      amount: 0
  },{
      img: './assets/img/coin-ton.png',
      name: 'TON',
      balance: 3107.52,
      amount: 0
  }
]

const historiesData = [
  {
      img: './assets/img/coin-bnb.png',
      name: 'WBNB',
      status: 'success',
      balance: '-1.231 USD',
      approved: 3,
      totalMember: 5,
      createdTime: '11-07-204 20:27:33',
      expriedTime: '12-07-204 20:27:33'
  },
  {
      img: './assets/img/coin-bnb.png',
      name: 'WBNB',
      status: 'success',
      balance: '-1.231 USD',
      approved: 3,
      totalMember: 5,
      createdTime: '11-07-204 20:27:33',
      expriedTime: '12-07-204 20:27:33'
  },
  {
      img: './assets/img/coin-bnb.png',
      name: 'WBNB',
      status: 'success',
      balance: '-1.231 USD',
      approved: 3,
      totalMember: 5,
      createdTime: '11-07-204 20:27:33',
      expriedTime: '12-07-204 20:27:33'
  },
  {
      img: './assets/img/coin-bnb.png',
      name: 'WBNB',
      status: 'success',
      balance: '-1.231 USD',
      approved: 3,
      totalMember: 5,
      createdTime: '11-07-204 20:27:33',
      expriedTime: '12-07-204 20:27:33'
  },
  {
      img: './assets/img/coin-bnb.png',
      name: 'WBNB',
      status: 'success',
      balance: '-1.231 USD',
      approved: 3,
      totalMember: 5,
      createdTime: '11-07-204 20:27:33',
      expriedTime: '12-07-204 20:27:33'
  },
  {
      img: './assets/img/coin-bnb.png',
      name: 'WBNB',
      status: 'pending',
      balance: '-1.231 USD',
      approved: 3,
      totalMember: 5,
      createdTime: '11-07-204 20:27:33',
      expriedTime: '12-07-204 20:27:33'
  },
  {
      img: './assets/img/coin-bnb.png',
      name: 'WBNB',
      status: 'pending',
      balance: '-1.231 USD',
      approved: 3,
      totalMember: 5,
      createdTime: '11-07-204 20:27:33',
      expriedTime: '12-07-204 20:27:33'
  },
  {
      img: './assets/img/coin-bnb.png',
      name: 'WBNB',
      status: 'refused',
      balance: '-1.231 USD',
      approved: 3,
      totalMember: 5,
      createdTime: '11-07-204 20:27:33',
      expriedTime: '12-07-204 20:27:33'
  },
  {
      img: './assets/img/coin-bnb.png',
      name: 'WBNB',
      status: 'refused',
      balance: '-1.231 USD',
      approved: 3,
      totalMember: 5,
      createdTime: '11-07-204 20:27:33',
      expriedTime: '12-07-204 20:27:33'
  },
  {
      img: './assets/img/coin-bnb.png',
      name: 'WBNB',
      status: 'success',
      balance: '-1.231 USD',
      approved: 3,
      totalMember: 5,
      createdTime: '11-07-204 20:27:33',
      expriedTime: '12-07-204 20:27:33'
  }
]

const ordersData = [
  {
      img: './assets/img/coin-bnb.png',
      name: 'WBNB',
      balance: '-1.231 USD',
      approved: true,
      createdTime: '11-07-204 20:27:33',
      expriedTime: '12-07-204 20:27:33'
  },
  {
      img: './assets/img/coin-bnb.png',
      name: 'WBNB',
      balance: '-1.231 USD',
      approved: true,
      createdTime: '11-07-204 20:27:33',
      expriedTime: '12-07-204 20:27:33'
  },{
      img: './assets/img/coin-bnb.png',
      name: 'WBNB',
      balance: '-1.231 USD',
      approved: true,
      createdTime: '11-07-204 20:27:33',
      expriedTime: '12-07-204 20:27:33'
  },{
      img: './assets/img/coin-bnb.png',
      name: 'WBNB',
      balance: '-1.231 USD',
      approved: true,
      createdTime: '11-07-204 20:27:33',
      expriedTime: '12-07-204 20:27:33'
  },{
      img: './assets/img/coin-bnb.png',
      name: 'WBNB',
      balance: '-1.231 USD',
      approved: true,
      createdTime: '11-07-204 20:27:33',
      expriedTime: '12-07-204 20:27:33'
  },
]

var selectedToken = tokensData[0]
// ---------------------------- Handle Click ---------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Wallet button
  const wallet = document.querySelector('#btn-wallet');
  wallet.addEventListener('click', (event) => {
      const drawer = toggleDrawer({
        id: 'section-wallet',
        title: 'Wallet',
        content: getContentWallet()
      });

      renderButtons(buttonsData, drawer.shadowRoot);
      
      // Handle Click Deposit Button
      const buttonDeposit = drawer.shadowRoot.querySelector('#btn-deposit');
        buttonDeposit?.addEventListener('click', (event) => {
          const bottomSheet = toggleBottomSheet({
              id: 'section-deposit',
              content: getContentDeposit(qrOptions),
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
        `,
              attrs: {
                  maxHeight: 70
              }
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

      // Handle Click Withdraw Button
      const buttonWithdraw = drawer.shadowRoot.querySelector('#btn-withdraw');
      buttonWithdraw?.addEventListener('click', (event) => {
        const drawer = toggleDrawer({
          id: 'section-withdraw',
          title: 'Withdraw',
          content: getContentWithdraw(infoWithdraw, selectedToken),
          footer: `
            <button class="btn-withdraw">Withdraw</button>
            <button class="btn-cancel">Cancel</button>
          `
        });

        const input = drawer.shadowRoot.querySelector('#withdraw-input');
        input.addEventListener('input', (event) => {
          input.value = formattedNumber(event.target.value)
        })        

        const buttonOk = drawer.shadowRoot.querySelector('.btn-withdraw');
          buttonOk.addEventListener('click', () => {
            toggleConfirmPopup({
              id: 'withdraw-confirm',
              title: 'Confirm withdraw',
              content: getContentConfirmWithdraw(input.value),
              textOk: 'Withdraw',
              textCancel: 'Cancel',
              callback: handleWithdraw
            });
          })

        const buttonCancel = drawer.shadowRoot.querySelector('.btn-cancel');
          buttonCancel.addEventListener('click', () => {
            drawer.hide();
          })

        let buttonSelectToken = drawer.shadowRoot.querySelector('.balance-content__select');
        const observer = new MutationObserver((mutationsList) => {
          for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
              buttonSelectToken = drawer.shadowRoot.querySelector('.balance-content__select');
              if (buttonSelectToken) {
                buttonSelectToken.addEventListener('click', (event) => {
                  handleClickSelectToken(drawer)
                });
              }
            }
          }
        });
        
        observer.observe(drawer.shadowRoot, { childList: true, subtree: true });
        buttonSelectToken.addEventListener('click', (event) => {
            handleClickSelectToken(drawer)
        });
      });
      // Handle Click History Button
      const buttonHistory = drawer.shadowRoot.querySelector('#btn-history');
      buttonHistory?.addEventListener('click', (event) => {
        toggleDrawer({
            id: 'section-history',
            title: 'History',
            content: getContentHistory(historiesData)
      });
    })

      // Handle Click Order Button
      const buttonOrder = drawer.shadowRoot.querySelector('#btn-order');
      buttonOrder?.addEventListener('click', (event) => {
        const drawer = toggleDrawer({
            id: 'section-order',
            title: 'Order',
            content: getContentOrder(ordersData)
        });
        drawer.shadowRoot.querySelectorAll('.list-item__content').forEach(item => {
            item.addEventListener('click', function() {
                const index = this.getAttribute('index');
                const orderClicked = ordersData[index];
                toggleConfirmPopup({
                    id: 'order-confirm',
                    title: 'Confirm approve',
                    content: `Do you want to approve withdrawal at ${orderClicked.createdTime} order?`,
                    textOk: 'Approve',
                    textCancel: 'Refuse',
                    callback: handleOrder
                });
            });
        });
    })
  })
});

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
function renderButtons(data, element) {
  const container = element.getElementById('buttons-action');
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

// ---------------------------- Handle Open Confirm Popup ------------------------------ //
function toggleConfirmPopup({
                              id,
                              title,
                              content,
                              textOk,
                              textCancel,
                              callback
                          }) {
  const confirmPopup = document.createElement('confirm-popup');
  confirmPopup.id = id;
  title && confirmPopup.setTitle(title)
  content && confirmPopup.setBody(content)
  textOk && confirmPopup.setTextOk(textOk)
  textCancel && confirmPopup.setTextCancel(textCancel)
  callback && confirmPopup.setCallback(callback)
  document.body.appendChild(confirmPopup)
  return confirmPopup
}

// ---------------------------- Handle Open Bottom Sheet ------------------------------ //
function toggleBottomSheet({
                             id,
                             title,
                             content,
                             footer,
                             attrs: {
                                 maxHeight
                             }
                         }) {
  const bottomSheet = document.createElement('bottom-sheet');
  bottomSheet.id = id;
  bottomSheet.setAttribute('max-height', maxHeight);
  title && bottomSheet.setTitle(title)
  content && bottomSheet.setBody(content)
  footer && bottomSheet.setFooter(footer)
  document.body.appendChild(bottomSheet)
  return bottomSheet
}

function toggleDrawer({
                        id,
                        title,
                        content,
                        footer
                    }) {
  let drawer = document.createElement('drawer-modal');
  drawer.id = id;
  title && drawer.setTitle(title)
  content && drawer.setBody(content)
  footer && drawer.setFooter(footer)
  document.body.appendChild(drawer);
  return drawer
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

const handleWithdraw = (result) => {
if (result) {
  console.log("Withdraw")
} else {
  console.log("Cancel")
};
}

const handleOrder = (result) => {
if (result) {
  console.log("Appreved")
} else {
console.log("Refused")
};
}

const handleClickSelectToken = (drawer) => {
const bottomSheet = toggleBottomSheet({
  id: 'section-tokens',
  title: 'Tokens',
  content: getContentToken(tokensData),
  footer: `<button class="btn-cancel">Cancel</button>`,
  attrs: {
      maxHeight: 90
  }
});

bottomSheet.shadowRoot.querySelectorAll('.select-option__content').forEach(item => {
item.addEventListener('click', function() {
    const index = this.getAttribute('index');
    selectedToken = tokensData[index];
    const imgToken = drawer.shadowRoot.querySelector('.balance-content__select img')
    if (imgToken) {
      imgToken.src = selectedToken.img
      imgToken.nextElementSibling = selectedToken.name 
    }
    drawer.setBody(getContentWithdraw(infoWithdraw, selectedToken))
    bottomSheet.hide();
});
});

const buttonCancel = bottomSheet.shadowRoot.querySelector('.btn-cancel');
buttonCancel.addEventListener('click', () => {
bottomSheet.hide();
})
}

const handleOtpWithdraw = (otp) => {
console.log('otp: ', otp)
}
// ----------------------------------- Function Ultis -------------------------------- //
const formattedNumber = (value) => {
newValue = value?.replace(/[^\d]/g, '');
const formattedNumber = newValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
return formattedNumber;
}

const getContentWallet = () => {
return `
          <div class="w-full flex flex-col items-center justify-between gap-2">
            <div class="flex w-full justify-between items-center mt-10">
              <p class="total-balance text-center">$5.210,5</p>
            </div>
          </div>
          <div class="block_balance">
            <div class="flex w-full justify-between items-center flex-col">
              <div class="mt-1 w-full flex justify-around items-center">
                <div id="buttons-action"></div>
              </div>
            </div>
          </div>
          <div class="block-tab-menu block_balance mb-4">
          <div class="block-title flex flex-row justify-between items-center">
            <p class="portfolio">Tokens</p>
          </div>
          <div class="portfolio_block">
          ${tokensData.map((token) => {
            return `
              <div class="wave">
                <img width="36px" height="36px" src="${token.img}" class="mr-2 icon-wave" alt="">
                <div class="flex flex-row justify-between items-center flex-1">
                  <div class="">
                    <p class="label_wave font-bold">${token.name}</p>
                    <p class="wave_number">${token.amount} - $${token.balance}</p>
                  </div>
                </div>
              </div>
            `
          }).join('')}
          </div>
        </div>
    `
}

const getContentDeposit = (options) => {
return `
            <tab-slip id="tab-slip" options=${JSON.stringify(options)}></tab-slip>
            <div class="mb-1 text-sm">Scan the QR code to deposit</div>
            <div class="background">
              <img width="160px" height="160px" src="./assets/img/qrcode.png" />
            </div>
        `
}

const getContentWithdraw = (info, selected) => {
return `
        <div class="text-md mb-1">Select token to withdraw</div>
        <tab-slip id="tab-slip" options=${JSON.stringify(withdrawPercentOptions)}></tab-slip>
          <div class="balance w-full">
            <div class="flex gap-2 flex-wrap">
              <div class="flex items-center w-full gap-2">
                <div
                  class="balance-content__select items-center justify-between border-common rounded grow-0 show-modal-tokens">
                  <div class="flex gap-1 items-center fz-16">
                    <img width="24px" height="24px" src="${selected.img}" class="img-icon"><div>${selected.name}</div>
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
              <div>~ ${info.balance} USD</div>
            </div>
            <div class="flex justify-between total">
              <div>Subtotal: </div>
              <div>~ ${info.subtotal} USD</div>
            </div>
            <div class="flex justify-between total">
              <div>Price impact: </div>
              <div>~ ${info.priceImpact} USD</div>
            </div>
            <div class="flex justify-between total">
              <div>Minium Received: </div>
              <div>~ ${info.miniumReceived} USD</div>
            </div>
            <div class="flex justify-between total">
              <div>Total: </div>
              <div>~ ${info.total} USD</div>
          </div>
        </div>
          `
}

const getContentToken = (tokens) => {
return `
                <div class="flex flex-col gap-5 w-full">
                  <div class="flex flex-col items-center gap-2">
                    <div class="w-full flex-wrap select-option">
                    ${tokens.map((token, index) => {
                      return `
                        <div class="select-option__content" index="${index}">
                          <div class="flex items-center gap-2"><img width="24px" height="24px" src="${token.img}" class="img-icon"
                              alt="">${token.name}</div>
                          <div class="flex gap-2 items-center text-sm">
                            <div>~${token.balance} USD</div>
                          </div>
                        </div>
                      `
                }).join('')}
                    </div>
                  </div>
                </div>
        `
}

const getContentHistory = (histories) => {
return `
        <div class="w-full flex-wrap list-item">
        ${histories.map((history) => {
                return `
            <div class="list-item__content w-full justify-between">
              <div class="flex align-center justify-between">
                <div>${history.createdTime}</div>
                <div class="flex items-center gap-1">
                  <img height="20px" width="20px" src="${history.img}" class="img-icon" alt="">
                  WBNB
                </div>
              </div>
              <div class="flex align-center justify-between">
                <div>Status</div>
                <div class="${history.status === 'success' ? 'text-success' : history.status === 'failed' ? 'text-failed' : ''}">${history.status}</div>
              </div>
              <div class="flex align-center justify-between">
                <div>Balance</div>
                <div class="${history.balance >= 0 ? 'text-success' : 'text-failed'}">${history.balance} USD</div>
              </div>
              <div class="flex align-center justify-between">
                <div>Approved</div>
                <div>${history.approved}/${history.totalMember}</div>
              </div>
              <div class="flex align-center justify-between">
                <div>Expried</div>
                <div>${history.expriedTime}</div>
              </div>
            </div>
          `
            }).join('')}
        </div>
        `
}

const getContentOrder = (orders) => {
return `
        <div class="w-full flex-wrap list-item">
        ${orders.map((order, index) => {
                return `
            <div id="approved-order" class="list-item__content w-full justify-between" index="${index}">
              <div class="flex align-center justify-between">
                <div>${order.createdTime}</div>
                <div class="flex items-center gap-1">
                  <img width="20px" height="20px" src="${order.img}" class="img-icon" alt="">
                  WBNB
                </div>
              </div>
              <div class="flex align-center justify-between">
                <div>Balance</div>
                <div class="text-failed">${order.balance} USD</div>
              </div>
              <div class="flex align-center justify-between">
                <div>Approved</div>
                <div id="approved">${order.approved === undefined ? '---' : order.approved}</div>
              </div>
              <div class="flex align-center justify-between">
                <div>Expried</div>
                <div>${order.expriedTime}</div>
              </div>
            </div>
          `
            }).join('')}
        </div>
      `
}

const getContentConfirmWithdraw = (value) => {
const container = document.createElement('div');
container.innerHTML = `
  <div>Want to place a withdrawal order of ${value} USD?</div>
  <otp-input/>
`
const otpInput = container.querySelector('otp-input');
otpInput.id = 'otp-withdraw';
otpInput.setCallback(handleOtpWithdraw)

return container.innerHTML
}