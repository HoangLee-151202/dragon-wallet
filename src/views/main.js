const initMarketTabs = [{
  label: 'Market',
  value: 'market',
  selected: true
}, {
  label: 'Owner',
  value: 'owner',
  selected: false
}, {
  label: 'Transaction',
  value: 'transaction',
  selected: false
}]

const initProfileHistoryTab = [{
  label: 'History coin',
  value: 'history-coin',
  selected: true,
  data: historyCoins
}, {
  label: 'History item',
  value: 'history-item',
  selected: false,
  data: historyItems
}]

const initPurchaseInfo = {
  price: 0,
  amount: 1,
  total: 0
}

var marketFilters = [{
  label: 'All',
  value: 'all',
  selected: true
}, {
  label: 'Dragon egg',
  value: 'egg',
  selected: false
}, {
  label: 'Dragon',
  value: 'dragon',
  selected: false
}]

var marketTabs = [...initMarketTabs]
var profileHistoryTabs = [...initProfileHistoryTab]

var isLoading = false;

document.addEventListener('DOMContentLoaded', () => {
  // Market Button Click 
  const btnMarket = document.querySelector('#btn-market');
  btnMarket.addEventListener('click', (event) => {
    const modalMarket = openMarket()
    const btnBack = modalMarket.shadowRoot.querySelector('.btn-back')
    btnBack?.addEventListener('click', (event) => {
      marketTabs = [...initMarketTabs]
    })

    const marketTab = modalMarket.shadowRoot.querySelector('#tab-slip')
    
    marketTab.addEventListener('option-changed', (event) => {
      marketTabs = event.detail.options
      modalMarket.shadowRoot.querySelectorAll('.list-item').forEach(item => {
        if (item.getAttribute('id') == event.detail.value) {
          item.classList.remove('hidden')
        } else {
          item.classList.add('hidden')
        }
      })
      
      
    })
    modalMarket.shadowRoot.querySelectorAll('.item').forEach(item => {
      item.addEventListener('click', function () {
        const key = this.getAttribute('key');
        const itemClicked = marketsData[key];
        
      });
    });

    modalMarket.shadowRoot.querySelectorAll('#market #btn-purchase').forEach(item => {
      item.addEventListener('click', function () {
        const index = this.getAttribute('key');
        const dataClicked = marketsData?.[index];
        isLoading = false;
        purchaseInfo = {
          ...purchaseInfo,
          amount: 1,
          price: dataClicked?.price,
          total: dataClicked?.price,
          id: dataClicked?.id
        }
        const modalDetailItem = openDetailItemMarket(dataClicked)
        const btnCloseDetailItem = modalDetailItem?.shadowRoot?.querySelector('#btn-close')
        const input = modalDetailItem?.shadowRoot?.querySelector('#market-purchase-amount-input')
        const btnMinus = modalDetailItem?.shadowRoot?.querySelector('#minus')
        const btnPlus = modalDetailItem?.shadowRoot?.querySelector('#plus')
        const btnPurchase = modalDetailItem?.shadowRoot?.querySelector('#btn-ok.btn-purchase')
        
        btnCloseDetailItem?.addEventListener('click', (event) => {
          modalDetailItem.hide()
        })

        input.addEventListener('input', (event) => {
          if (!isLoading) {
          purchaseInfo = {
            ...purchaseInfo,
            amount: event.target.value?.replace(/[^0-9]+/g, '') ?? 0,
            total: (event.target.value?.replace(/[^0-9]+/g, '') ?? 0)* purchaseInfo.price
          }
          handleChangeAmountInput(event.target.value, input, modalDetailItem?.shadowRoot, purchaseInfo)
        }
        })

        btnMinus?.addEventListener('click', (event) => {
          if (!isLoading) {
            const amount = purchaseInfo?.amount == 0 ? 0 : (Number((purchaseInfo?.amount) ?? 0) -1)
            purchaseInfo = {
              ...purchaseInfo,
              amount: amount,
              total: amount*purchaseInfo?.price
            }
            handleChangeAmountInput(amount, input, modalDetailItem?.shadowRoot, purchaseInfo)
          }
        })

        btnPlus?.addEventListener('click', (event) => {
          if (!isLoading) {
          const amount = Number((purchaseInfo?.amount) ?? 0) + 1
          purchaseInfo = {
            ...purchaseInfo,
            amount: amount,
            total: amount*purchaseInfo?.price
          }
          handleChangeAmountInput(amount, input, modalDetailItem?.shadowRoot, purchaseInfo)
        }
        })

        btnPurchase?.addEventListener('click', (event) => {
          isLoading = true
          btnPurchase.setAttribute('loading', true)
          input.setAttribute('disabled', true)
          btnMinus.setAttribute('disabled', true)
          btnPlus.setAttribute('disabled', true)
          btnPurchase.setAttribute('disabled', true)
          handleSubmitPurchase().then(() => {
            modalDetailItem.hide()
            isLoading = false
            toggleNotification({
              id: 'purchase-item-success',
              label: 'Purchase successfull!',
              status: 'success'
            })
          }).catch((error) => {
            isLoading = false
            toggleNotification({
              id: 'purchase-item-failed',
              label: error?.responseJSON?.error,
              status: 'failed'
            })
            btnPurchase.removeAttribute('loading')
          input.removeAttribute('disabled')
          btnMinus.removeAttribute('disabled')
          btnPlus.removeAttribute('disabled')
          btnPurchase.removeAttribute('disabled')
          })
        })
      });
    });

    modalMarket.shadowRoot.querySelectorAll('#owner #btn-sell').forEach(item => {
      item.addEventListener('click', function () {
        const index = this.getAttribute('key');
        const dataClicked = ownersData?.[index];
        console.log('dataClicked: ', dataClicked)
        isLoading = false;
        sellInfo = {
          ...sellInfo,
          amount: 1,
          price: dataClicked?.price,
          total: dataClicked?.price,
          id: dataClicked?.id,
          max: dataClicked?.amount
        }

        const modalDetailItem = openDetailItemOwner(dataClicked)
        const btnCloseDetailItem = modalDetailItem?.shadowRoot?.querySelector('#btn-close')
        const input = modalDetailItem?.shadowRoot?.querySelector('#market-purchase-amount-input')
        const btnMinus = modalDetailItem?.shadowRoot?.querySelector('#minus')
        const btnPlus = modalDetailItem?.shadowRoot?.querySelector('#plus')
        const btnSell = modalDetailItem?.shadowRoot?.querySelector('#btn-ok.btn-sell')
        
        btnCloseDetailItem?.addEventListener('click', (event) => {
          modalDetailItem.hide()
        })

        input.addEventListener('input', (event) => {
          if (!isLoading) {
            sellInfo = {
            ...sellInfo,
            amount: event.target.value?.replace(/[^0-9]+/g, '') ?? 0,
            total: (event.target.value?.replace(/[^0-9]+/g, '') ?? 0)* sellInfo.price
          }
          console.log('sellInfo: ', sellInfo)
          handleChangeAmountInput(event.target.value, input, modalDetailItem?.shadowRoot, sellInfo)
        }
        })

        btnMinus?.addEventListener('click', (event) => {
          if (!isLoading) {
            const amount = sellInfo?.amount == 0 ? 0 : (Number((sellInfo?.amount) ?? 0) -1)
            sellInfo = {
              ...sellInfo,
              amount: amount,
              total: amount*sellInfo?.price
            }
            handleChangeAmountInput(amount, input, modalDetailItem?.shadowRoot, sellInfo)
          }
        })

        btnPlus?.addEventListener('click', (event) => {
          if (!isLoading) {
          const amount = Number((sellInfo?.amount) ?? 0) + 1
          sellInfo = {
            ...sellInfo,
            amount: amount,
            total: amount*sellInfo?.price
          }
          handleChangeAmountInput(amount, input, modalDetailItem?.shadowRoot, sellInfo)
        }
        })
        
        btnSell?.addEventListener('click', (event) => {
          isLoading = true
          btnSell.setAttribute('loading', true)
          input.setAttribute('disabled', true)
          btnMinus.setAttribute('disabled', true)
          btnPlus.setAttribute('disabled', true)
          btnSell.setAttribute('disabled', true)
          handleSubmitSell().then(() => {
            modalDetailItem.hide()
            isLoading = false
            toggleNotification({
              id: 'sell-item-success',
              label: 'Sell successfull!',
              status: 'success'
            })
          }).catch((error) => {
            isLoading = false
            toggleNotification({
              id: 'sell-item-failed',
              label: error?.responseJSON?.error,
              status: 'failed'
            })
            btnSell.removeAttribute('loading')
            input.removeAttribute('disabled')
            btnMinus.removeAttribute('disabled')
            btnPlus.removeAttribute('disabled')
            btnSell.removeAttribute('disabled')
          })
        })
      });
    });

    modalMarket.shadowRoot.querySelectorAll('#transaction .item').forEach(item => {
      item.addEventListener('click', function () {
        const index = this.getAttribute('key');
        const dataClicked = transactionsData?.[index];
        const modalDetailItem = openDetailItemTransaction(dataClicked)
        const btnCloseDetailItem = modalDetailItem?.shadowRoot?.querySelector('#btn-close')
        
        btnCloseDetailItem?.addEventListener('click', (event) => {
          modalDetailItem.hide()
        })
      });
    });
  })

  const btnProfile = document.querySelector('#btn-profile');
  btnProfile.addEventListener('click', (event) => {
    const modalProfile = openProfile()
    const btnClose = modalProfile.shadowRoot.querySelector('.btn-close')
    const btnHistoryCoin = modalProfile.shadowRoot.querySelector('#btn-history-coin')
    const btnHistoryItem = modalProfile.shadowRoot.querySelector('#btn-history-item')
    const btnCopyReflink = modalProfile.shadowRoot.querySelector('#copy-reflink')
    btnCopyReflink?.addEventListener('click', (event) => {
      navigator.clipboard.writeText(infoProfile?.reflink);
      toggleNotification({
        id: 'copy-wallet',
        label: 'Copy successfull!',
        status: 'success'
      })
    })
    btnClose?.addEventListener('click', (event) => {
      modalProfile.hide()
      profileHistoryTabs = [...initProfileHistoryTab]
    })
    btnHistoryCoin?.addEventListener('click', (event) => {
      handleChangeTabHistory('history-coin', modalProfile.shadowRoot)
    })
    btnHistoryItem?.addEventListener('click', (event) => {
      handleChangeTabHistory('history-item', modalProfile.shadowRoot)
    })

    modalProfile.shadowRoot.querySelectorAll('#history-item .item').forEach(item => {
      item.addEventListener('click', function () {
        const index = this.getAttribute('key');
        const data = profileHistoryTabs.find((tab) => tab.selected)?.data
        const dataClicked = data?.[index];
        const modalDetailItem = openDetailItem(dataClicked)
        const btnCloseDetailItem = modalDetailItem.shadowRoot.querySelector('.btn-close')
        btnCloseDetailItem?.addEventListener('click', (event) => {
          modalDetailItem.hide()
        })
      });
    });

    modalProfile.shadowRoot.querySelectorAll('.list-item .item').forEach(item => {
      item.addEventListener('click', function () {
        const index = this.getAttribute('key');
        const data = infoProfile?.items
        const dataClicked = data?.[index];
        const modalDetailItem = dataClicked?.isItem && openDetailItem(dataClicked)
        const btnCloseDetailItem = modalDetailItem?.shadowRoot?.querySelector('.btn-close')
        btnCloseDetailItem?.addEventListener('click', (event) => {
          modalDetailItem.hide()
        })
      });
    });
  })
});

const openMarket = () => {
  return toggleDrawer({
    id: 'market',
    title: 'Market',
    content: getContentMarket(),
    footer: '',
  });
}

const openProfile = () => {
  return toggleModalPopup({
    id: 'game-profile',
    content: getContentProfile(),
    footer: ''
  });
}

const openDetailItem = (item) => {
  return toggleModalPopup({
    id: 'game-item-detail',
    content: getContentDetailItem(item),
    footer: ''
  });
}

const openDetailItemMarket = (item) => {
  return toggleModalPopup({
    id: 'market-item-detail',
    title: `
        ${item?.name}
          <svg id="btn-close" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g>
<path d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
    `,
    content: getContentDetailItemMarket(item),
    footer: `
      <button id="btn-ok" class="btn-ok btn-purchase">
      <svg class="normal" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 5H18.2768C19.0446 5 19.526 5.82948 19.1451 6.49614L16.5758 10.9923C16.2198 11.6154 15.5571 12 14.8394 12H8M8 12L6.45625 14.47C6.03997 15.136 6.51881 16 7.30425 16H18M8 12L4.05279 4.10557C3.714 3.428 3.02148 3 2.26393 3H2M8 20C8 20.5523 7.55228 21 7 21C6.44772 21 6 20.5523 6 20C6 19.4477 6.44772 19 7 19C7.55228 19 8 19.4477 8 20ZM18 20C18 20.5523 17.5523 21 17 21C16.4477 21 16 20.5523 16 20C16 19.4477 16.4477 19 17 19C17.5523 19 18 19.4477 18 20Z" stroke="#EEEEEE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg class="loading" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <g fill="#EEEEEE" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" opacity=".2"/>
                  <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"/>
                  </g>
                </svg>
      Purchase
      </button>
    `
  });
}

const openDetailItemOwner = (item) => {
  return toggleModalPopup({
    id: 'owner-item-detail',
    title: `
        ${item?.name}
          <svg id="btn-close" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g>
<path d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
    `,
    content: getContentDetailItemOwner(item),
    footer: `
      <button id="btn-ok" class="btn-ok btn-sell">
      <svg class="normal" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 5H18.2768C19.0446 5 19.526 5.82948 19.1451 6.49614L16.5758 10.9923C16.2198 11.6154 15.5571 12 14.8394 12H8M8 12L6.45625 14.47C6.03997 15.136 6.51881 16 7.30425 16H18M8 12L4.05279 4.10557C3.714 3.428 3.02148 3 2.26393 3H2M8 20C8 20.5523 7.55228 21 7 21C6.44772 21 6 20.5523 6 20C6 19.4477 6.44772 19 7 19C7.55228 19 8 19.4477 8 20ZM18 20C18 20.5523 17.5523 21 17 21C16.4477 21 16 20.5523 16 20C16 19.4477 16.4477 19 17 19C17.5523 19 18 19.4477 18 20Z" stroke="#EEEEEE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg class="loading" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <g fill="#EEEEEE" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" opacity=".2"/>
                  <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"/>
                  </g>
                </svg>
      Sell
      </button>
    `
  });
}

const openDetailItemTransaction = (item) => {
  return toggleModalPopup({
    id: 'transaction-item-detail',
    title: `
        ${item?.name}
          <svg id="btn-close" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g>
<path d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
    `,
    content: getContentDetailItemTransaction(item),
    footer: ''
  });
}

const getContentMarket = () => {
  return `
    <tab-slip id="tab-slip" options=${JSON.stringify(marketTabs)}></tab-slip>
    <div id="tab-content">
      ${getListMarket()}
      ${getListOwner()}
      ${getListTransaction()}
    </div>
  `
}

const getListMarket = () => {
  return `
  <div id="market" class="list-item" >
  ${marketsData?.map((item, index) => {
    return `
            <div class="item" key=${index}>
            <div class="flex justify-between">
              <div class="flex gap-2">
              <div class="img">
                <img src="${item.img}" />
              </div>
              <div class="info">
                <p class="name">${item?.name}</p>
                ${item?.game ? `<p class="game">${item?.game}</p>` : ''}
              </div>
              </div>
              <div>
              <div class="price">
                <p class="purchase">${formattedNumber(item?.price)}$</p>
                <button id="btn-purchase" key="${index}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 5H18.2768C19.0446 5 19.526 5.82948 19.1451 6.49614L16.5758 10.9923C16.2198 11.6154 15.5571 12 14.8394 12H8M8 12L6.45625 14.47C6.03997 15.136 6.51881 16 7.30425 16H18M8 12L4.05279 4.10557C3.714 3.428 3.02148 3 2.26393 3H2M8 20C8 20.5523 7.55228 21 7 21C6.44772 21 6 20.5523 6 20C6 19.4477 6.44772 19 7 19C7.55228 19 8 19.4477 8 20ZM18 20C18 20.5523 17.5523 21 17 21C16.4477 21 16 20.5523 16 20C16 19.4477 16.4477 19 17 19C17.5523 19 18 19.4477 18 20Z" stroke="#EEEEEE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Purchase</button>
              </div>
              </div>
              </div>
              <p class="description">${item?.description}</p>
            </div>
          `
  }).join('')}
  </div>
  `
}

const getListOwner = () => {
  return `
  <div id="owner" class="list-item hidden">
  ${ownersData?.map((item, index) => {
    return `
            <div class="item" key=${index}>
            <div class="flex justify-between">
              <div class="flex gap-2">
              <div class="img">
                <img src="${item.img}" />
                <span class="amount">${item?.amount}</span>
              </div>
              <div class="info">
                <p class="name">${item?.name}</p>
                ${item?.game ? `<p class="game">${item?.game}</p>` : ''}
              </div>
              </div>
              <div>
              <div class="price">
                <p class="sell">${formattedNumber(item?.price)}$</p>
                <button id="btn-sell" key=${index}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 5H18.2768C19.0446 5 19.526 5.82948 19.1451 6.49614L16.5758 10.9923C16.2198 11.6154 15.5571 12 14.8394 12H8M8 12L6.45625 14.47C6.03997 15.136 6.51881 16 7.30425 16H18M8 12L4.05279 4.10557C3.714 3.428 3.02148 3 2.26393 3H2M8 20C8 20.5523 7.55228 21 7 21C6.44772 21 6 20.5523 6 20C6 19.4477 6.44772 19 7 19C7.55228 19 8 19.4477 8 20ZM18 20C18 20.5523 17.5523 21 17 21C16.4477 21 16 20.5523 16 20C16 19.4477 16.4477 19 17 19C17.5523 19 18 19.4477 18 20Z" stroke="#EEEEEE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Sell</button>
              </div>
              </div>
              </div>
              <p class="description">${item?.description}</p>
            </div>
          `
  }).join('')}
  </div>
  `
}

const getListTransaction = () => {
  return `
  <div id="transaction" class="list-item hidden">
  ${transactionsData?.map((item, index) => {
    return `
            <div class="item" key=${index}>
            <div class="flex justify-between">
              <div class="flex gap-2">
              <div class="img">
                <img src="${item.img}" />
                <span class="amount">${item?.amount}</span>
              </div>
              <div class="info">
                  <p class="name">${item?.name}</p>
                ${item?.game ? `<p class="game">${item?.game}</p>` : ''}
              </div>
              </div>
              <div>
              <div class="price">
              <p class="time">${item?.time}</p>
                <p class="total ${item?.total < 0 ? 'sell' : 'purchase'}">${item?.total < 0 ? `-${formattedNumber(item?.total)}` : `+${formattedNumber(item?.total)}`}$</p>
              </div>
              </div>
              </div>
            </div>
          `
  }).join('')}
  </div>
  `
}

const getContentProfile = () => {
  return `
  <div class="profile">
    <div class="title">
      PROFILE
      <img class="btn-close" src="./assets/img/btn_close.png"/>
    </div>
    <div class="body">
      <div class="info">
        <div class="rank">
          <img src="./assets/img/rank_diamond.png"/>
          <div class="label">Level</div>
        </div>
        <div class="name">
          <div>
            <div>ID: ${infoProfile?.userId}</div>
            <div>${infoProfile?.name}</div>
          </div>
          <div class="flex">
          <div class="reflink">${infoProfile?.reflink}</div>
          <img id="copy-reflink" src="./assets/img/copy_btn.png"/>
          </div>
          
        </div>
      </div>
      <div class="list-item">
      ${infoProfile?.items?.map((item, idx) => {
        return `
          <div class="item" key="${idx}">
            <img src="${item.img}"/>
            <div class="label">${formattedNumber(item.amount)}</div>
          </div>
        `
      }).join('')}
      </div>
      <div class="history">
          <div class="tab">
          ${profileHistoryTabs.map((tab) => {
            return `<button id="btn-${tab.value}" value="${tab.value}" active="${tab.selected}">${tab.label}</button>`
          }).join('')}
          </div>
          <div class="items-container">
            <div class="items" id="${profileHistoryTabs[0]?.value}">
              ${profileHistoryTabs[0]?.data ? 
                profileHistoryTabs[0]?.data.map((item, idx) => {
                return `
                  <div class="item" key="${idx}">
                    <img src="${item?.img}"/>
                    <div class="name">${item?.name}</div>
                    <div>${item?.time}</div>
                    <div class="amount-of-money ${item?.amountOfMoney > 0 ? 'text-success' : 'text-failed'}">${item?.amountOfMoney > 0 ? `+${formattedNumber(item?.amountOfMoney)}` : `-${formattedNumber(item?.amountOfMoney)}`}$</div>
                  </div>
                `
              }).join(''): '<div class="item-empty">No data</div>'}
            </div>
            <div class="items" id="${profileHistoryTabs[1]?.value}">
              ${profileHistoryTabs[1]?.data?
                profileHistoryTabs[1]?.data?.map((item, idx) => {
                return `
                  <div class="item" key="${idx}">
                    <img src="${item?.img}"/>
                    <div class="name">${item?.name}</div>
                    <div>${item?.time}</div>
                    <div class="amount-of-money ${item?.amountOfMoney > 0 ? 'text-success' : 'text-failed'}">${item?.amountOfMoney > 0 ? `+${formattedNumber(item?.amountOfMoney)}` : `-${formattedNumber(item?.amountOfMoney)}`}$</div>
                  </div>
                `
              }).join('') : '<div class="item-empty">No data</div>'
                }
            </div>
          </div>
      </div>
    </div>
  </div>
  `
}

const getContentDetailItem = (item) => {
  return `
  <div class="detail-item">
    <div class="title">
      ${item?.name}
      <img class="btn-close" src="./assets/img/btn_close.png"/>
    </div>
    <div class="body">
      <div class="flex justify-center">
        <img src="${item?.img}"/>
      </div>
      <div class="price">${item?.price}$</div>
      <div class="description">
        <div class="label">Description</div>
        <p>${item?.description}</p>
      </div>
      <div class="amount">${item?.amount}</div>
      <div class="amount-of-money ${item?.amountOfMoney > 0 ? 'text-success' : 'text-failed'}">${item?.amountOfMoney > 0 ? `+${formattedNumber(item?.amountOfMoney)}` : `-${formattedNumber(item?.amountOfMoney)}`}$</div>
    </div>
  </div>
  `
}
const getContentDetailItemMarket = (item) => {
  return `
  <div class="detail-item">
    <div class="body">
      <div class="flex justify-center">
        <img src="${item?.img}"/>
      </div>
        <div class="description">${item?.description}</div>
      <div class="purchase-info">
        <div class="price">
        <div>Price: </div>
        <div>${formattedNumber(purchaseInfo?.price)}$</div>
      </div>
      <div class="amount">
        <div class="input">
          <button id="minus" class="minus">-</button>
          <input id="market-purchase-amount-input" value="${purchaseInfo?.amount}" type="text"/>
          <button id="plus" class="plus">+</button>
        </div>
      </div>
      <div id="total" class="total">${formattedNumber(purchaseInfo?.total)}$
      </div>
      </div>
    </div>
  </div>
  `
}

const getContentDetailItemOwner = (item) => {
  return `
  <div class="detail-item">
    <div class="body">
      <div class="flex justify-center">
        <img src="${item?.img}"/>
      </div>
        <div class="description">${item?.description}</div>
      <div class="purchase-info">
        <div class="price">
        <div>Price: </div>
        <div>${formattedNumber(sellInfo?.price)}$</div>
      </div>
      <div class="amount">
        <div class="input">
          <button id="minus" class="minus">-</button>
          <input id="market-purchase-amount-input" value="${sellInfo?.amount}" type="text"/>
          <button id="plus" class="plus">+</button>
        </div>
        <div class="amount-max">Max: ${item?.amount}</div>
      </div>
      
      <div id="total" class="total">${formattedNumber(sellInfo?.total)}$
      </div>
      </div>
    </div>
  </div>
  `
}

const getContentDetailItemTransaction = (item) => {
  return `
  <div class="detail-item">
    <div class="body">
      <div class="flex justify-center">
        <img src="${item?.img}"/>
      </div>
        <div class="description">${item?.description}</div>
      <div class="purchase-info">
        <div class="price">
        <div>Price: </div>
        <div>${formattedNumber(item?.price)}$</div>
      </div>
      <div class="transaction-info">
        <div class="flex justify-between">
          <div>Time: </div>
          <div>${item?.time}</div>
        </div>
        <div class="flex justify-between">
          <div>Amout: </div>
          <div>${formattedNumber(item?.amount)}</div>
        </div>
        <div class="flex justify-between">
          <div>Total: </div>
          <div class="${item?.total > 0 ? 'text-success' : 'text-failed'}">${item?.total > 0 ? `+${formattedNumber(item?.total)}` : `-${formattedNumber(item?.total)}`}$</div>
        </div>
        </div>
      </div>
    </div>
  </div>
  `
}

const handleChangeTabHistory = (value, element) => {
  profileHistoryTabs = profileHistoryTabs.map((tab) => {
    if (tab.value == value) {
      return {
        ...tab,
        selected: true
      }
    }
    return {
      ...tab,
      selected: false
    }
  })
  const itemsContainer = element.querySelector('.items-container')
  const idxActive = profileHistoryTabs.findIndex(tab => tab.selected)
  itemsContainer.style.transform = `translateX(calc(${idxActive}*(-50% - 0.75rem)))`
  const buttons = element.querySelectorAll('.history .tab button')
  buttons.forEach(button => {
    if (button.getAttribute('id') == `btn-${value}`) {
      button.setAttribute('active', true)
    } else {
      button.setAttribute('active', false)
    }
  })
}

const handleChangeAmountInput = (value, input, element, data) => {
  
  const _value = typeof value == 'number' ? value.toString() :  value
  console.log('data?.max && _value > data?.max: ', data?.max && _value > data?.max, data, _value)
  const totalElement = element?.querySelector('#total')
        const btnPurchase = element?.querySelector('#btn-ok')
          input.value = Number(_value?.replace(/[^0-9]+/g, '') ?? 0)?.toLocaleString('en')
          totalElement.innerHTML = `${formattedNumber(data?.total)}$`
          if (!data?.total || (data?.max && _value > data?.max)) {
            btnPurchase.setAttribute('disabled', true)
          } else {
            btnPurchase.removeAttribute('disabled')
          }
}