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

const priceFilterMarket = [{
  label: 'All',
  value: '',
  selected: true,
}, {
  label: 'Increase',
  value: 'asc',
  selected: false,
}, {
  label: 'Decrease',
  value: 'desc',
  selected: false,
}]

const filterTransaction = [{
  label: 'Item',
  value: 'item',
  selected: true,
}, {
  label: 'Swap',
  value: 'swap',
  selected: false,
}]

const sellerFilterMarket = [{
  label: 'All',
  value: '',
  selected: true,
}, {
  label: 'Owner',
  value: 'owner',
  selected: false,
}]

const typeFilterMarket = [{
  label: 'All',
  value: '',
  selected: true,
}, {
  label: 'Egg',
  value: 'egg',
  selected: false,
}, {
  label: 'Dragon Metal',
  value: 'dragon-metal',
  selected: false,
}, {
  label: 'Dragon Wood',
  value: 'dragon-wood',
  selected: false,
}, {
  label: 'Dragon Water',
  value: 'dragon-water',
  selected: false,
}, {
  label: 'Dragon Fire',
  value: 'dragon-fire',
  selected: false,
}, {
  label: 'Dragon Earth',
  value: 'dragon-earth',
  selected: false,
}, {
  label: 'Dragon Vip',
  value: 'dragon-vip',
  selected: false,
}]

const initPurchaseOptions = [
  { label: '25%', selected: false, value: 25 },
  { label: '50%', selected: false, value: 50 },
  { label: '75%', selected: false, value: 75 },
  { label: 'MAX', selected: false, value: 100 }
]

var marketTabs = [...initMarketTabs];
var profileHistoryTabs = [...initProfileHistoryTab];

var purchaseOptions = [...initPurchaseOptions]
var selectedTokenSwap = {
  from: tokenSwapsData[0],
  to: itemSwapsData[0]
}
var isLoading = false;
var isLoadingSeeMore = false;

document.addEventListener('DOMContentLoaded', () => {
  // Market Button Click 
  const btnMarket = document.querySelector('#btn-market');

  btnMarket.addEventListener('click', (event) => {
    const modalMarket = openMarket()
    const btnBack = modalMarket.shadowRoot.querySelector('.btn-back')
    const btnPurchaseGem = modalMarket.shadowRoot.querySelector('#market #btn-purchase-gem');
    const marketTab = modalMarket.shadowRoot.querySelector('#tab-slip')
    const marketFilterPrice = modalMarket.shadowRoot.querySelector('#market-filter-price')
    const marketFilterType = modalMarket.shadowRoot.querySelector('#market-filter-type')
    const marketFilterSeller = modalMarket.shadowRoot.querySelector('#market-filter-seller')
    const marketListItemAllSeller = modalMarket.shadowRoot.querySelector('.list-item.seller-all')
    const marketListItemOwnerSeller = modalMarket.shadowRoot.querySelector('.list-item.seller-owner')
    const ownerListItem = modalMarket.shadowRoot.querySelector('#owner.list-item')
    const filterTransaction = modalMarket.shadowRoot.querySelector('#transaction-filter')
    const transactionListItem = modalMarket.shadowRoot.querySelector('.list-item.item')
    const transactionListSwap = modalMarket.shadowRoot.querySelector('.list-item.swap')
    marketListItemAllSeller.addEventListener('scroll', () => handleMarketScroll(marketListItemAllSeller, modalMarket))
    marketListItemOwnerSeller.addEventListener('scroll', () => handleMarketScroll(marketListItemOwnerSeller, modalMarket))
    ownerListItem.addEventListener('scroll', () => handleOwnerScroll(ownerListItem, modalMarket))
    transactionListItem.addEventListener('scroll', () => handleTransactionItemsScroll(transactionListItem, modalMarket))
    transactionListSwap.addEventListener('scroll', () => handleTransactionSwapsScroll(transactionListSwap, modalMarket))

    marketFilterPrice.addEventListener('option-changed', (event) => {
      marketFilter.type = event.detail.value
      pagination.market = 1
      getMarketItems(marketFilter)
    })
    marketFilterType.addEventListener('option-changed', (event) => {
      marketFilter.type = event.detail.value
      pagination.market = 1
      getMarketItems(marketFilter)
    })
    marketFilterSeller.addEventListener('option-changed', (event) => {
      marketFilter.seller = event.detail.value
      pagination.market = 1
      getMarketItems(marketFilter)
      if (event.detail.value == '') {
        marketListItemAllSeller.classList.remove('hidden');
        marketListItemOwnerSeller.classList.add('hidden');
      } else {
        marketListItemAllSeller.classList.add('hidden');
        marketListItemOwnerSeller.classList.remove('hidden');
      }
    })
    btnBack?.addEventListener('click', (event) => {
      marketTabs = [...initMarketTabs]
      pagination = { ...initPagination }
    })

    marketTab.addEventListener('option-changed', (event) => {
      marketTabs = event.detail.options


      modalMarket.shadowRoot.querySelectorAll('.container').forEach(item => {
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

    modalMarket.shadowRoot.querySelectorAll('#market #btn-user').forEach(item => {
      item.addEventListener('click', function () {
        const index = this.getAttribute('key');
        const dataClicked = marketsData?.[index];
        navigator.clipboard.writeText(dataClicked?.userId);
        toggleNotification({
          id: 'copy-userId',
          label: 'Copied user!',
          status: 'success'
        })
      })
    })

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
            const amount = (event.target.value?.replace(/[^0-9]+/g, '') ?? 0) > dataClicked?.amount ? dataClicked?.amount : (event.target.value?.replace(/[^0-9]+/g, '') ?? 0)
            purchaseInfo = {
              ...purchaseInfo,
              amount: amount,
              total: amount * purchaseInfo.price
            }
            handleChangeAmountInput(amount, input, modalDetailItem?.shadowRoot, purchaseInfo)
            if (amount == dataClicked?.amount) {
              btnPlus.setAttribute('disabled', true)
            } else {
              btnPlus.removeAttribute('disabled', true)
            }

            if (amount > 0) {
              btnMinus.removeAttribute('disabled', true)
            } else {
              btnMinus.setAttribute('disabled', true)
            }
          }
        })

        btnMinus?.addEventListener('click', (event) => {
          if (!isLoading) {
            const amount = purchaseInfo?.amount == 0 ? 0 : (Number((purchaseInfo?.amount) ?? 0) - 1)
            purchaseInfo = {
              ...purchaseInfo,
              amount: amount,
              total: amount * purchaseInfo?.price
            }
            handleChangeAmountInput(amount, input, modalDetailItem?.shadowRoot, purchaseInfo)
            if (purchaseInfo?.amount == 0) {
              btnMinus.setAttribute('disabled', true)
            }
            btnPlus.removeAttribute('disabled')
          }
        })

        btnPlus?.addEventListener('click', (event) => {
          if (!isLoading) {
            const amount = Number((purchaseInfo?.amount) ?? 0) + 1
            purchaseInfo = {
              ...purchaseInfo,
              amount: amount,
              total: amount * purchaseInfo?.price
            }
            handleChangeAmountInput(amount, input, modalDetailItem?.shadowRoot, purchaseInfo)
            if (purchaseInfo?.amount == dataClicked?.amount) {
              btnPlus.setAttribute('disabled', true)
            }
            btnMinus.removeAttribute('disabled')
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

    modalMarket.shadowRoot.querySelectorAll('#market #btn-edit').forEach(item => {
      item.addEventListener('click', function () {
        const index = this.getAttribute('key');
        const dataClicked = marketOwnersData?.[index];
        isLoading = false;
        sellInfo = {
          ...sellInfo,
          amount: dataClicked?.currentAmount,
          price: dataClicked?.price,
          total: dataClicked?.price,
          id: dataClicked?.id,
          max: dataClicked?.amount
        }

        const modalDetailItem = openEditItemOwner(dataClicked)
        const btnCloseDetailItem = modalDetailItem?.shadowRoot?.querySelector('#btn-close')
        const input = modalDetailItem?.shadowRoot?.querySelector('#market-purchase-amount-input')
        const priceInput = modalDetailItem?.shadowRoot?.querySelector('#market-sell-price-input')
        const btnMinus = modalDetailItem?.shadowRoot?.querySelector('#minus')
        const btnPlus = modalDetailItem?.shadowRoot?.querySelector('#plus')
        const btnPriceMinus = modalDetailItem?.shadowRoot?.querySelector('#minus-price')
        const btnPricePlus = modalDetailItem?.shadowRoot?.querySelector('#plus-price')
        const btnSell = modalDetailItem?.shadowRoot?.querySelector('#btn-ok.btn-sell')

        btnCloseDetailItem?.addEventListener('click', (event) => {
          modalDetailItem.hide()
        })

        input.addEventListener('input', (event) => {
          if (!isLoading) {
            const amount = (event.target.value?.replace(/[^0-9]+/g, '') ?? 0) > dataClicked?.amount ? dataClicked?.amount : (event.target.value?.replace(/[^0-9]+/g, '') ?? 0)

            sellInfo = {
              ...sellInfo,
              amount: amount ?? 0,
              total: amount * sellInfo.price
            }
            handleChangeAmountInput(amount, input, modalDetailItem?.shadowRoot, sellInfo)
            if (amount == dataClicked?.amount) {
              btnPlus.setAttribute('disabled', true)
            } else {
              btnPlus.removeAttribute('disabled', true)
            }

            if (amount > 0) {
              btnMinus.removeAttribute('disabled', true)
            } else {
              btnMinus.setAttribute('disabled', true)
            }
          }
        })

        btnMinus?.addEventListener('click', (event) => {
          if (!isLoading) {
            const amount = sellInfo?.amount == 0 ? 0 : (Number((sellInfo?.amount) ?? 0) - 1)
            sellInfo = {
              ...sellInfo,
              amount: amount,
              total: amount * sellInfo?.price
            }
            handleChangeAmountInput(amount, input, modalDetailItem?.shadowRoot, sellInfo)
            if (sellInfo?.amount == 0) {
              btnMinus.setAttribute('disabled', true)
            }
            btnPlus.removeAttribute('disabled')
          }
        })

        btnPlus?.addEventListener('click', (event) => {
          if (!isLoading) {
            const amount = Number((sellInfo?.amount) ?? 0) + 1
            sellInfo = {
              ...sellInfo,
              amount: amount,
              total: amount * sellInfo?.price
            }
            handleChangeAmountInput(amount, input, modalDetailItem?.shadowRoot, sellInfo)
            if (sellInfo?.amount == dataClicked?.amount) {
              btnPlus.setAttribute('disabled', true)
            }
            btnMinus.removeAttribute('disabled')
          }
        })

        priceInput.addEventListener('input', (event) => {
          if (!isLoading) {
            const parts = event.target.value?.split('.')
            const value = parts?.length > 2 ? [parts[0]?.replace(/,/g, ''), parts[1]?.replace(/,/g, '')]?.join('.') : event.target.value?.replace(/,/g, '')
            handleChangePriceInput(value, priceInput, modalDetailItem?.shadowRoot, sellInfo)
            if (value == 0) {
              btnPriceMinus.setAttribute('disabled', true)
              btnSell.setAttribute('disabled', true)
            } else {
              btnPriceMinus.removeAttribute('disabled')
            }
          }
        })

        btnPriceMinus?.addEventListener('click', (event) => {
          if (!isLoading) {
            const price = (Number((sellInfo?.price) ?? 0) - 1) < 0 ? 0 : Number((sellInfo?.price) ?? 0) - 1
            sellInfo = {
              ...sellInfo,
              price: price,
              total: price * sellInfo?.amount
            }
            handleChangePriceInput(price, priceInput, modalDetailItem?.shadowRoot, sellInfo)
            if (price == 0) {
              btnPriceMinus.setAttribute('disabled', true)
            }
          }
        })

        btnPricePlus?.addEventListener('click', (event) => {
          if (!isLoading) {
            const price = Number((sellInfo?.price) ?? 0) + 1
            sellInfo = {
              ...sellInfo,
              price: price,
              total: price * sellInfo?.amount
            }
            handleChangePriceInput(price, priceInput, modalDetailItem?.shadowRoot, sellInfo)
            btnPriceMinus.removeAttribute('disabled')
          }
        })

        btnSell?.addEventListener('click', (event) => {
          isLoading = true
          btnSell.setAttribute('loading', true)
          input.setAttribute('disabled', true)
          btnMinus.setAttribute('disabled', true)
          btnPlus.setAttribute('disabled', true)
          priceInput.setAttribute('disabled', true)
          btnPriceMinus.setAttribute('disabled', true)
          btnPricePlus.setAttribute('disabled', true)
          btnSell.setAttribute('disabled', true)
          handleSubmitEditItem().then(() => {
            modalDetailItem.hide()
            isLoading = false
            toggleNotification({
              id: 'edit-item-success',
              label: 'Edit successfull!',
              status: 'success'
            })
          }).catch((error) => {
            isLoading = false
            toggleNotification({
              id: 'edit-item-failed',
              label: error?.responseJSON?.error ?? 'Edit failed',
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

    modalMarket.shadowRoot.querySelectorAll('#market #btn-delete').forEach(item => {
      item.addEventListener('click', function () {
        const index = this.getAttribute('key');
        const dataClicked = marketOwnersData?.[index];
        isLoading = false;

        toggleConfirmPopup({
          id: 'item-delete-confirm',
          title: 'Confirm delete item',
          content: `Do you want to delete item ${dataClicked?.name} is selling?`,
          textOk: 'Delete',
          textCancel: 'Cancel',
          callback: (e, callback) => handleDeleteItem(dataClicked, e, callback)
        });

      });
    });

    modalMarket.shadowRoot.querySelectorAll('#owner #btn-sell').forEach(item => {
      item.addEventListener('click', function () {
        const index = this.getAttribute('key');
        const dataClicked = ownersData?.[index];
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
        const priceInput = modalDetailItem?.shadowRoot?.querySelector('#market-sell-price-input')
        const btnMinus = modalDetailItem?.shadowRoot?.querySelector('#minus')
        const btnPlus = modalDetailItem?.shadowRoot?.querySelector('#plus')
        const btnPriceMinus = modalDetailItem?.shadowRoot?.querySelector('#minus-price')
        const btnPricePlus = modalDetailItem?.shadowRoot?.querySelector('#plus-price')
        const btnSell = modalDetailItem?.shadowRoot?.querySelector('#btn-ok.btn-sell')

        btnCloseDetailItem?.addEventListener('click', (event) => {
          modalDetailItem.hide()
        })

        input.addEventListener('input', (event) => {
          if (!isLoading) {
            const amount = (event.target.value?.replace(/[^0-9]+/g, '') ?? 0) > dataClicked?.amount ? dataClicked?.amount : (event.target.value?.replace(/[^0-9]+/g, '') ?? 0)

            sellInfo = {
              ...sellInfo,
              amount: amount ?? 0,
              total: amount * sellInfo.price
            }
            handleChangeAmountInput(amount, input, modalDetailItem?.shadowRoot, sellInfo)
            if (amount == dataClicked?.amount) {
              btnPlus.setAttribute('disabled', true)
            } else {
              btnPlus.removeAttribute('disabled', true)
            }

            if (amount > 0) {
              btnMinus.removeAttribute('disabled', true)
            } else {
              btnMinus.setAttribute('disabled', true)
            }
          }
        })

        btnMinus?.addEventListener('click', (event) => {
          if (!isLoading) {
            const amount = sellInfo?.amount == 0 ? 0 : (Number((sellInfo?.amount) ?? 0) - 1)
            sellInfo = {
              ...sellInfo,
              amount: amount,
              total: amount * sellInfo?.price
            }
            handleChangeAmountInput(amount, input, modalDetailItem?.shadowRoot, sellInfo)
            if (sellInfo?.amount == 0) {
              btnMinus.setAttribute('disabled', true)
            }
            btnPlus.removeAttribute('disabled')
          }
        })

        btnPlus?.addEventListener('click', (event) => {
          if (!isLoading) {
            const amount = Number((sellInfo?.amount) ?? 0) + 1
            sellInfo = {
              ...sellInfo,
              amount: amount,
              total: amount * sellInfo?.price
            }
            handleChangeAmountInput(amount, input, modalDetailItem?.shadowRoot, sellInfo)
            if (sellInfo?.amount == dataClicked?.amount) {
              btnPlus.setAttribute('disabled', true)
            }
            btnMinus.removeAttribute('disabled')
          }
        })

        priceInput.addEventListener('input', (event) => {
          if (!isLoading) {
            const parts = event.target.value?.split('.')
            const value = parts?.length > 2 ? [parts[0]?.replace(/,/g, ''), parts[1]?.replace(/,/g, '')]?.join('.') : event.target.value?.replace(/,/g, '')
            handleChangePriceInput(value, priceInput, modalDetailItem?.shadowRoot, sellInfo)
            if (value == 0) {
              btnPriceMinus.setAttribute('disabled', true)
              btnSell.setAttribute('disabled', true)
            } else {
              btnPriceMinus.removeAttribute('disabled')
            }
          }
        })

        btnPriceMinus?.addEventListener('click', (event) => {
          if (!isLoading) {
            const price = (Number((sellInfo?.price) ?? 0) - 1) < 0 ? 0 : Number((sellInfo?.price) ?? 0) - 1
            sellInfo = {
              ...sellInfo,
              price: price,
              total: price * sellInfo?.amount
            }
            handleChangePriceInput(price, priceInput, modalDetailItem?.shadowRoot, sellInfo)
            if (price == 0) {
              btnPriceMinus.setAttribute('disabled', true)
            }
          }
        })

        btnPricePlus?.addEventListener('click', (event) => {
          if (!isLoading) {
            const price = Number((sellInfo?.price) ?? 0) + 1
            sellInfo = {
              ...sellInfo,
              price: price,
              total: price * sellInfo?.amount
            }
            handleChangePriceInput(price, priceInput, modalDetailItem?.shadowRoot, sellInfo)
            btnPriceMinus.removeAttribute('disabled')
          }
        })

        btnSell?.addEventListener('click', (event) => {
          isLoading = true
          btnSell.setAttribute('loading', true)
          input.setAttribute('disabled', true)
          btnMinus.setAttribute('disabled', true)
          btnPlus.setAttribute('disabled', true)
          priceInput.setAttribute('disabled', true)
          btnPriceMinus.setAttribute('disabled', true)
          btnPricePlus.setAttribute('disabled', true)
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
              label: error?.responseJSON?.error ?? 'Sell failed',
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

    filterTransaction.addEventListener('option-changed', (event) => {
      if (event.detail.value == 'item') {
        transactionListItem.classList.remove('hidden');
        transactionListSwap.classList.add('hidden');
      } else {
        transactionListItem.classList.add('hidden');
        transactionListSwap.classList.remove('hidden');
      }
    })

    modalMarket.shadowRoot.querySelectorAll('#transaction .item').forEach(item => {
      item.addEventListener('click', function () {
        const index = this.getAttribute('key');
        const dataClicked = transactionsItemData?.[index];
        const modalDetailItem = dataClicked && openDetailItemTransaction(dataClicked)
        const btnCloseDetailItem = modalDetailItem?.shadowRoot?.querySelector('#btn-close')

        btnCloseDetailItem?.addEventListener('click', (event) => {
          modalDetailItem.hide()
        })
      });
    });

    btnPurchaseGem.addEventListener('click', (event) => {
      const modalPurchaseGem = openPurchaseGem()
      const buttonSelectFrom = modalPurchaseGem.shadowRoot.querySelector('.balance-from__select.from-select');
      const buttonSelectTo = modalPurchaseGem.shadowRoot.querySelector('.balance-to__select.to-select');
      const tabSlip = modalPurchaseGem.shadowRoot.querySelector('#tab-slip');
      const inputFrom = modalPurchaseGem.shadowRoot.querySelector('#swap-from-input');
      const inputTo = modalPurchaseGem.shadowRoot.querySelector('#swap-to-input');
      const btnSwap = modalPurchaseGem.shadowRoot.querySelector('#btn-swap');
      const btnSubmit = modalPurchaseGem.shadowRoot.querySelector('#btn-ok');
      btnSubmit.addEventListener('click', (event) => {
        btnSubmit.setAttribute('disabled', true)
        handleSubmitSwapGem().then(() => {
          modalPurchaseGem?.hide()
          btnSubmit.removeAttribute('disabled')
          toggleNotification({
            id: 'swap-success',
            label: 'Swap successfull!',
            status: 'success'
          })
        }).catch((error) => {
          btnSubmit.removeAttribute('disabled')
          toggleNotification({
            id: 'swap-failed',
            label: error?.responseJSON?.error ?? 'Swap failed!',
            status: 'failed'
          })
        })

      })
      inputFrom.addEventListener('input', (event) => {
        const parts = event.target.value?.split('.')
        const value = parts?.length > 2 ? [parts[0]?.replace(/,/g, ''), parts[1]?.replace(/,/g, '')]?.join('.') : event.target.value?.replace(/,/g, '')
        const tokenChange = {
          token: purchaseGemInfo?.from?.token,
          amount: value
        }
        purchaseGemInfo.from.amountToken = value
        handleChangeSwapInput(value, modalPurchaseGem.shadowRoot, tokenChange)
      })
      inputTo.addEventListener('input', (event) => {
        const parts = event.target.value?.split('.')
        const value = parts?.length > 2 ? [parts[0]?.replace(/,/g, ''), parts[1]?.replace(/,/g, '')]?.join('.') : event.target.value?.replace(/,/g, '')
        const tokenChange = {
          token: purchaseGemInfo?.to?.token,
          amount: value
        }
        purchaseGemInfo.to.amountToken = value
        handleChangeSwapInput(value, modalPurchaseGem.shadowRoot, tokenChange)
      })
      btnSwap?.addEventListener('click', (event) => {
        selectedTokenSwap = {
          from: selectedTokenSwap.to,
          to: selectedTokenSwap.from
        }
        purchaseGemInfo = {
          swapTo: purchaseGemInfo?.swapTo == 'token' ? 'item' : 'token',
          from: purchaseGemInfo?.to,
          to: purchaseGemInfo?.from
        }
        const tokenChange = {
          token: purchaseGemInfo?.from?.token,
          amount: purchaseGemInfo?.from?.amountToken
        }
        inputFrom.value = purchaseGemInfo?.from?.amountToken == '' ? '' : handleChangeInputNumber(purchaseGemInfo?.from?.amountToken?.toLocaleString('en'))
        const imgFrom = modalPurchaseGem.shadowRoot.querySelector('.balance-from__select img')
        if (imgFrom) {
          imgFrom.src = selectedTokenSwap?.from?.img
          imgFrom.nextElementSibling.textContent = selectedTokenSwap?.from?.name
          selectedTokenSwap.from.token = selectedTokenSwap?.from?.name
        }
        const imgTo = modalPurchaseGem.shadowRoot.querySelector('.balance-to__select img')
        if (imgTo) {
          imgTo.src = selectedTokenSwap?.to?.img
          imgTo.nextElementSibling.textContent = selectedTokenSwap?.to?.name
          selectedTokenSwap.to.token = selectedTokenSwap?.to?.name
        }
        handleChangeSwapInput(purchaseGemInfo?.from?.amount, modalPurchaseGem.shadowRoot, tokenChange)
      })
      if (tabSlip) {
        tabSlip.addEventListener('option-changed', (event) => {
          purchaseOptions = event.detail.options
          const value = purchaseGemInfo?.from?.balance * event.detail.value / 100
          inputFrom.value = value == '' ? '' : handleChangeInputNumber(value?.toLocaleString('en'))
          const tokenChange = {
            token: purchaseGemInfo?.from?.token,
            amount: value
          }
          purchaseGemInfo.from.amountToken = value
          handleChangeSwapInput(value, modalPurchaseGem.shadowRoot, tokenChange)
        });
      }
      buttonSelectFrom.addEventListener('click', (event) => {
        handleClickSelectFrom(modalPurchaseGem, purchaseGemInfo?.swapTo == 'token' ? 'item' : 'token')
      });
      buttonSelectTo.addEventListener('click', (event) => {
        handleClickSelectTo(modalPurchaseGem, purchaseGemInfo?.swapTo)
      });
      const btnClose = modalPurchaseGem?.shadowRoot?.querySelector('#btn-close')
      btnClose?.addEventListener('click', (event) => {
        modalPurchaseGem?.hide()
        purchaseOptions = [...initPurchaseOptions]
        purchaseGemInfo = { ...initPurchaseGemInfo }
      })
    })
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
        const modalDetailItem = openDetailItemGameTransaction(dataClicked)
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
        const modalDetailItem = openDetailItem(dataClicked)
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

const openDetailItemGameTransaction = (item) => {
  return toggleModalPopup({
    id: 'game-item-detail',
    content: getContentDetailItemGameTransaction(item),
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

const openEditItemOwner = (item) => {
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
      Edit
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

const openPurchaseGem = () => {
  return toggleModalPopup({
    id: 'purchase-gem-detail',
    title: `
          <svg id="btn-close" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g>
<path d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
    `,
    content: getContentPurchaseGem(),
    footer: `
      <button id="btn-ok" class="btn-ok btn-sell disabled">
      <svg class="normal" xmlns="http://www.w3.org/2000/svg" fill="#EEEEEE" width="16" height="16" viewBox="0 0 24 24"><path d="M21.49 13.926l-3.273 2.48c.054-.663.116-1.435.143-2.275.04-.89.023-1.854-.043-2.835-.043-.487-.097-.98-.184-1.467-.077-.485-.196-.982-.31-1.39-.238-.862-.535-1.68-.9-2.35-.352-.673-.786-1.173-1.12-1.462-.172-.144-.31-.248-.414-.306l-.153-.093c-.083-.05-.187-.056-.275-.003-.13.08-.175.252-.1.388l.01.02s.11.198.258.54c.07.176.155.38.223.63.08.24.14.528.206.838.063.313.114.66.17 1.03l.15 1.188c.055.44.106.826.13 1.246.03.416.033.85.026 1.285.004.872-.063 1.76-.115 2.602-.062.853-.12 1.65-.172 2.335 0 .04-.004.073-.005.11l-.115-.118-2.996-3.028-1.6.454 5.566 6.66 6.394-5.803-1.503-.677z"/><path d="M2.503 9.48L5.775 7c-.054.664-.116 1.435-.143 2.276-.04.89-.023 1.855.043 2.835.043.49.097.98.184 1.47.076.484.195.98.31 1.388.237.862.534 1.68.9 2.35.35.674.785 1.174 1.12 1.463.17.145.31.25.413.307.1.06.152.093.152.093.083.05.187.055.275.003.13-.08.175-.252.1-.388l-.01-.02s-.11-.2-.258-.54c-.07-.177-.155-.38-.223-.63-.082-.242-.14-.528-.207-.84-.064-.312-.115-.658-.172-1.027-.046-.378-.096-.777-.15-1.19-.053-.44-.104-.825-.128-1.246-.03-.415-.033-.85-.026-1.285-.004-.872.063-1.76.115-2.603.064-.853.122-1.65.174-2.334 0-.04.004-.074.005-.11l.114.118 2.996 3.027 1.6-.454L7.394 3 1 8.804l1.503.678z"/></svg
                <svg class="loading" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <g fill="#EEEEEE" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" opacity=".2"/>
                  <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"/>
                  </g>
                </svg>
      Swap
      </button>
    `
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
  <div id="market" class="container">
    <div class="banner">
      <div class="flex justify-between align-center">
        <div class="flex gap-2">
          <div class="img">
            <img src="./assets/img/gem.png">
          </div>
          <div class="info">
            <p class="name">Gem</p>
          </div>
        </div>
        <div>
          <div class="price">
            <button id="btn-purchase-gem">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#e86734" width="16" height="16" viewBox="0 0 24 24"><path d="M21.49 13.926l-3.273 2.48c.054-.663.116-1.435.143-2.275.04-.89.023-1.854-.043-2.835-.043-.487-.097-.98-.184-1.467-.077-.485-.196-.982-.31-1.39-.238-.862-.535-1.68-.9-2.35-.352-.673-.786-1.173-1.12-1.462-.172-.144-.31-.248-.414-.306l-.153-.093c-.083-.05-.187-.056-.275-.003-.13.08-.175.252-.1.388l.01.02s.11.198.258.54c.07.176.155.38.223.63.08.24.14.528.206.838.063.313.114.66.17 1.03l.15 1.188c.055.44.106.826.13 1.246.03.416.033.85.026 1.285.004.872-.063 1.76-.115 2.602-.062.853-.12 1.65-.172 2.335 0 .04-.004.073-.005.11l-.115-.118-2.996-3.028-1.6.454 5.566 6.66 6.394-5.803-1.503-.677z"></path><path d="M2.503 9.48L5.775 7c-.054.664-.116 1.435-.143 2.276-.04.89-.023 1.855.043 2.835.043.49.097.98.184 1.47.076.484.195.98.31 1.388.237.862.534 1.68.9 2.35.35.674.785 1.174 1.12 1.463.17.145.31.25.413.307.1.06.152.093.152.093.083.05.187.055.275.003.13-.08.175-.252.1-.388l-.01-.02s-.11-.2-.258-.54c-.07-.177-.155-.38-.223-.63-.082-.242-.14-.528-.207-.84-.064-.312-.115-.658-.172-1.027-.046-.378-.096-.777-.15-1.19-.053-.44-.104-.825-.128-1.246-.03-.415-.033-.85-.026-1.285-.004-.872.063-1.76.115-2.603.064-.853.122-1.65.174-2.334 0-.04.004-.074.005-.11l.114.118 2.996 3.027 1.6-.454L7.394 3 1 8.804l1.503.678z"></path></svg>
              Swap
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="filter">
      <div class="field">
        <div>Price:</div>
        <select-input id="market-filter-price" options=${encodeURIComponent(JSON.stringify(priceFilterMarket))}></select-input>
      </div>
      <div class="field">
        <div>Item:</div>
        <select-input id="market-filter-type" options=${encodeURIComponent(JSON.stringify(typeFilterMarket))}></select-input>
      </div>
      <div class="field">
        <div>Seller:</div>
        <select-input id="market-filter-seller" options=${encodeURIComponent(JSON.stringify(sellerFilterMarket))}></select-input>
      </div>
    </div>
  <div class="list-item seller-all">
  ${marketsData?.map((item, index) => {
    return `
            <div class="item" key=${index}>
            <div class="flex justify-between">
              <div class="flex gap-4 align-center">
              <div class="img">
                <img src="${item?.img}" />
                <span class="amount">${item?.amount}</span>
              </div>
              <div class="info">
                <p class="name">${item?.name}</p>
                ${item?.game ? `<p class="game">${item?.game}</p>` : ''}
                <p class="user" id="btn-user" key=${index}>${item?.userId}</p>
              </div>
              </div>
              <div class="flex align-center">
              <div class="price">
                <p class="purchase">${formattedNumber(item?.price)} DGEM</p>
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
  <div id="loading-market-all" class="flex justify-center loading-see-more hidden">
    <svg class="loading" width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <g fill="#EEEEEE" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" opacity=".2"/>
                  <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"/>
                  </g>
                </svg>
  </div>
  </div>
  <div class="list-item seller-owner hidden">
  ${marketOwnersData?.map((item, index) => {
    return `
            <div class="item" key=${index}>
            <div class="flex justify-between">
              <div class="flex gap-4 align-center">
              <div class="img">
                <img src="${item?.img}" />
                <span class="amount">${item?.currentAmount}</span>
              </div>
              <div class="info">
                <p class="name">${item?.name}</p>
                ${item?.game ? `<p class="game">${item?.game}</p>` : ''}
              </div>
              </div>
              <div class="flex align-center">
              <div class="price edit">
              <button id="btn-delete" key="${index}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12V17" stroke="#f44336" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14 12V17" stroke="#f44336" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M4 7H20" stroke="#f44336" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#f44336" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#f44336" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Delete</button>
              <div>
                <p class="purchase">${formattedNumber(item?.price)} DGEM</p>
                
                <button id="btn-edit" key="${index}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.4445 19.6875H20.9445M14.4443 5.68747L5.44587 14.6859C4.78722 15.3446 4.26719 16.1441 4.10888 17.062C3.94903 17.9888 3.89583 19.139 4.44432 19.6875C4.99281 20.236 6.14299 20.1828 7.0698 20.0229C7.98772 19.8646 8.78722 19.3446 9.44587 18.6859L18.4443 9.68747M14.4443 5.68747C14.4443 5.68747 17.4443 2.68747 19.4443 4.68747C21.4443 6.68747 18.4443 9.68747 18.4443 9.68747M14.4443 5.68747L18.4443 9.68747" stroke="#EEEEEE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Edit</button>
                </div>
              </div>
              </div>
              </div>
              <p class="description">${item?.description}</p>
            </div>
          `
  }).join('')}
  <div id="loading-market-owner" class="flex justify-center loading-see-more hidden">
    <svg class="loading" width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <g fill="#EEEEEE" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" opacity=".2"/>
                  <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"/>
                  </g>
                </svg>
  </div>
  </div>
  </div>
  `
}

const getListOwner = () => {
  return `
  <div id="owner" class="container list-item hidden">
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
                <p class="sell">${formattedNumber(item?.price)} DGEM</p>
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
  <div id="loading-owner" class="flex justify-center loading-see-more hidden">
    <svg class="loading" width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <g fill="#EEEEEE" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" opacity=".2"/>
                  <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"/>
                  </g>
                </svg>
  </div>
  
  </div>
  `
}

const getListTransaction = () => {
  return `
  <div id="transaction" class="container hidden">
  <div class="filter"><select-input id="transaction-filter" options=${encodeURIComponent(JSON.stringify(filterTransaction))}></select-input></div>
  <div class="list-item item">
  ${transactionsItemData?.map((item, index) => {
    return `
            <div class="item" key=${index}>
            <div class="flex justify-between">
              <div class="flex gap-4 align-center">
              <div class="img">
                <img src="${item.img}" />
                <span class="amount">${item?.amount}</span>
              </div>
              <div class="info">
                  <p class="name">${item?.name}</p>
                ${item?.game ? `<p class="game">${item?.game}</p>` : ''}
                <p class="user" id="btn-user" key=${index}>${item?.userId}</p>
              </div>
              </div>
              <div>
              <div class="price">
              <p class="time">${item?.time}</p>
                <p class="total ${item?.total < 0 ? 'sell' : 'purchase'} transaction">${item?.total < 0 ? `-${formattedNumber(item?.total)}` : `+${formattedNumber(item?.total)}`} DGEM</p>
              </div>
              </div>
              </div>
            </div>
          `
  }).join('')}
  <div id="loading-transaction-item" class="flex justify-center loading-see-more hidden">
    <svg class="loading" width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <g fill="#EEEEEE" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" opacity=".2"/>
                  <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"/>
                  </g>
                </svg>
  </div>
  </div>
  <div class="list-item swap hidden">
  ${transactionsSwapData?.map((item, index) => {
    return `
            <div class="item">
            <p class="time">${item?.time}</p>
            <div class="flex justify-between">
              <div>Status:</div>
              <div class="${item.status === 'success' ? 'text-success' : item.status === 'failed' ? 'text-failed' : ''}">${capitalizeFirstLetter(item?.status)}</div>
              </div>
              <div class="flex justify-between">
              <div >
                <div class="flex align-center gap-1">From: <img src="${item?.fromToken?.img}"/>${item?.fromToken?.name}</div>
                <div>Amount: ${item?.fromToken?.amount?.toLocaleString('en')}</div>
              </div>
              <div>
                <div class="flex align-center gap-1">To: <img src="${item?.toToken?.img}"/>${item?.toToken?.name}</div>
                <div>Amount: ${item?.toToken?.amount?.toLocaleString('en')}</div>
              </div>
              </div>
            </div>
          `
  }).join('')}
    <div id="loading-transaction-swap" class="flex justify-center loading-see-more hidden">
    <svg class="loading" width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <g fill="#EEEEEE" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" opacity=".2"/>
                  <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"/>
                  </g>
                </svg>
  </div>
  </div>
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
            <div class="flex gap-1">Coin: ${infoProfile?.gem}</div>
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
                  <div class="item-coin" key="${idx}">
                    <div>${item?.time}</div>
                    <div class="amount-of-money ${item?.amountOfMoney > 0 ? 'text-success' : 'text-failed'}">${item?.amountOfMoney > 0 ? `+${formattedNumber(item?.amountOfMoney)}` : `-${formattedNumber(item?.amountOfMoney)}`} DGEM</div>
                  </div>
                `
      }).join('') : '<div class="item-empty">No data</div>'}
            </div>
            <div class="items" id="${profileHistoryTabs[1]?.value}">
              ${profileHistoryTabs[1]?.data ?
      profileHistoryTabs[1]?.data?.map((item, idx) => {
        return `
                  <div class="item" key="${idx}">
                  <div class="flex gap-2 align-center">
                    <div class="img">
                      <img src="${item?.img}"/>
                    </div>
                    <div>
                    <div class="name">${item?.name}</div>
                    <div class="amount">Amount: ${item?.amount}</div>
                    </div>
                  </div>
                  <div>
                    <div>${item?.time}</div>
                    <div class="amount-of-money ${item?.amountOfMoney > 0 ? 'text-success' : 'text-failed'}">${item?.amountOfMoney > 0 ? `+${formattedNumber(item?.amountOfMoney)}` : `-${formattedNumber(item?.amountOfMoney)}`} DGEM</div>
                  </div>
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

const getContentDetailItemGameTransaction = (item) => {
  return `
  <div class="detail-item">
    <div class="title">
      ${item?.name}
      <img class="btn-close" src="./assets/img/btn_close.png"/>
    </div>
    <div class="body">
      <div class="flex justify-center">
        <div class="img-container">
          <img src="${item?.img}"/>
        </div>
      </div>
      <div class="price">${item?.price} DGEM</div>
      <div class="description ${item?.time ? '' : 'max'}">
        <p>${item?.description}</p>
      </div>
      <div class="info">
        <div class="time ${item?.time ? '' : 'hidden'}">
        <div>Time: </div>
        <div>${item?.time}</div>
      </div>
      <div class="amount">
        <div>Amount: </div>
        <div>${formattedNumber(item?.amount)}</div>
      </div>
      <div class="total">
        <div>Total: </div>
        <div class="flex gap-1 align-center ${item?.amountOfMoney > 0 ? 'text-success' : 'text-failed'}">
        ${item?.time ?
      item?.amountOfMoney > 0 ? `+${formattedNumber(item?.amountOfMoney)}` : `-${formattedNumber(item?.amountOfMoney)}`
      : formattedNumber(item?.amountOfMoney)}
          DGEM
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
        <div class="img-container">
          <img src="${item?.img}"/>
        </div>
      </div>
      <div class="description full">
        <p>${item?.description}</p>
      </div>
      <div class="amount-input">
        <div>${formattedNumber(item?.amount)}</div>
      </div>
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
        <div class="flex align-center gap-1">${formattedNumber(purchaseInfo?.price)} DGEM</div>
      </div>
      <div class="amount">
        <div class="input">
          <button id="minus" class="minus">-</button>
          <input id="market-purchase-amount-input" value="${purchaseInfo?.amount}" type="text"/>
          <button id="plus" class="plus">+</button>
        </div>
        <div class="amount-max">Max: ${item?.amount}</div>
      </div>
      <div id="total" class="total">${formattedNumber(purchaseInfo?.total)} DGEM
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
      <div class="amount">
        <div class="flex">
          <div class="label">Amount:</div>
          <div class="input">
          <button id="minus" class="minus">-</button>
          <input id="market-purchase-amount-input" value="${sellInfo?.amount}" type="text"/>
          <button id="plus" class="plus">+</button>
        </div>
        </div>
        <div class="amount-max">Max: ${item?.amount}</div>
      </div>
      <div class="price-input">
        <div class="flex">
          <div class="label">Price:</div>
          <div class="input">
          <button id="minus-price" class="minus">-</button>
          <input id="market-sell-price-input" value="${formattedNumber(sellInfo?.price)}" type="text"/>
          <button id="plus-price" class="plus">+</button>
        </div>
        </div>
        <div class="unit">Unit: DGEM</div>
      </div>
      
      
      <div class="total">
        <div class="label">Total</div>
        <div id="total">${formattedNumber(sellInfo?.total)} DGEM
      </div>
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
        <div>${formattedNumber(item?.price)} DGEM</div>
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
          <div class="${item?.total > 0 ? 'text-success' : 'text-failed'}">${item?.total > 0 ? `+${formattedNumber(item?.total)}` : `-${formattedNumber(item?.total)}`} DGEM</div>
        </div>
        </div>
      </div>
    </div>
  </div>
  `
}

const getContentPurchaseGem = () => {
  return `
  <div class="detail-item">
    <div class="body">
      <div class="text-md mb-1">Select token to swap</div>
      <tab-slip id="tab-slip" options=${JSON.stringify(purchaseOptions)}></tab-slip>
          <div class="balance w-full">
            <div class="flex gap-2 flex-wrap">
              <div class="flex items-center w-full gap-2">
                <div class="balance-from__select from-select items-center justify-between border-common rounded grow-0 show-modal-tokens">
                  <div class="flex gap-2 items-center fz-16">
                    <img width="24px" height="24px" src="${selectedTokenSwap?.from?.img}" class="img-icon">
                    <div>${selectedTokenSwap?.from?.name}</div>
                  </div>
                </div>
                <div class="balance-content border-common rounded flex-wrap gap-2 grow">
                  <div class="w-full items-center relative">
                    <input type="text" id="swap-from-input" ${purchaseGemInfo?.from?.amountToken != undefined ?
      `value=${formattedNumber(purchaseGemInfo?.from?.amountToken)}` : ''} inputmode="decimal" lang="en-US"
                      enterkeyhint="done" placeholder="0" class="balance-from__input background-input text-left w-full"
                      autocapitalize="off" autocomplete="off" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-between total">
              <div class="flex gap-1">Balance: <div id="purchase-gem-balance">
                  ${handleChangeInputNumber(purchaseGemInfo?.from?.balance?.toLocaleString('en')) ?? 0}</div>
              </div>
              <div class="flex gap-1">~ <div id="purchase-gem-subtotal">${purchaseGemInfo?.from?.subtotal ?? 0}</div> USD</div>
            </div>
            <div class="flex justify-center">
                <div id="btn-swap" class="swap-icon">
                <svg class="normal" xmlns="http://www.w3.org/2000/svg" fill="#EEEEEE" width="32" height="32" viewBox="0 0 24 24"><path d="M21.49 13.926l-3.273 2.48c.054-.663.116-1.435.143-2.275.04-.89.023-1.854-.043-2.835-.043-.487-.097-.98-.184-1.467-.077-.485-.196-.982-.31-1.39-.238-.862-.535-1.68-.9-2.35-.352-.673-.786-1.173-1.12-1.462-.172-.144-.31-.248-.414-.306l-.153-.093c-.083-.05-.187-.056-.275-.003-.13.08-.175.252-.1.388l.01.02s.11.198.258.54c.07.176.155.38.223.63.08.24.14.528.206.838.063.313.114.66.17 1.03l.15 1.188c.055.44.106.826.13 1.246.03.416.033.85.026 1.285.004.872-.063 1.76-.115 2.602-.062.853-.12 1.65-.172 2.335 0 .04-.004.073-.005.11l-.115-.118-2.996-3.028-1.6.454 5.566 6.66 6.394-5.803-1.503-.677z"/><path d="M2.503 9.48L5.775 7c-.054.664-.116 1.435-.143 2.276-.04.89-.023 1.855.043 2.835.043.49.097.98.184 1.47.076.484.195.98.31 1.388.237.862.534 1.68.9 2.35.35.674.785 1.174 1.12 1.463.17.145.31.25.413.307.1.06.152.093.152.093.083.05.187.055.275.003.13-.08.175-.252.1-.388l-.01-.02s-.11-.2-.258-.54c-.07-.177-.155-.38-.223-.63-.082-.242-.14-.528-.207-.84-.064-.312-.115-.658-.172-1.027-.046-.378-.096-.777-.15-1.19-.053-.44-.104-.825-.128-1.246-.03-.415-.033-.85-.026-1.285-.004-.872.063-1.76.115-2.603.064-.853.122-1.65.174-2.334 0-.04.004-.074.005-.11l.114.118 2.996 3.027 1.6-.454L7.394 3 1 8.804l1.503.678z"/></svg
                <svg class="loading" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <g fill="#EEEEEE" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" opacity=".2"/>
                  <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"/>
                  </g>
                </svg>
                </div>
            </div>
            <div class="flex gap-2 flex-wrap">
              <div class="flex items-center w-full gap-2">
                <div class="balance-to__select to-select items-center justify-between border-common rounded grow-0 show-modal-tokens">
                  <div class="flex gap-2 items-center fz-16">
                    <img width="24px" height="24px" src="${selectedTokenSwap?.to?.img}" class="img-icon">
                    <div>${selectedTokenSwap?.to?.name}</div>
                  </div>
                </div>
                <div class="balance-content border-common rounded flex-wrap gap-2 grow">
                  <div class="w-full items-center relative">
                    <input type="text" id="swap-to-input" ${purchaseGemInfo?.to?.amountToken != undefined ?
      `value=${formattedNumber(purchaseGemInfo?.to?.amountToken)}` : ''} inputmode="decimal" lang="en-US"
                      enterkeyhint="done" placeholder="0" class="balance-to__input background-input text-left w-full"
                      autocapitalize="off" autocomplete="off" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-between total">
              <div class="flex gap-1">Balance: <div id="purchase-gem-balance">
                  ${handleChangeInputNumber(purchaseGemInfo?.to?.balance?.toLocaleString('en')) ?? 0}</div>
              </div>
            </div>
            <div class="flex justify-between total">
              <div>Price impact: </div>
              <div class="flex gap-1">
                <div id="purchase-gem-priceImpact">${purchaseGemInfo?.from?.priceImpact}</div> USD
              </div>
            </div>
            <div class="flex justify-between total mb-8">
              <div>Minium Received: </div>
              <div class="flex gap-1">
                <div id="purchase-gem-miniumReceived">${purchaseGemInfo?.to?.miniumReceived}</div> ${selectedTokenSwap?.to?.name}
              </div>
            </div>
          </div>
    </div>
  </div>
  `
}

const getContentToken = (tokens) => {
  return `
                  <div class="flex flex-col gap-5 w-full">
                    <div class="flex flex-col items-center gap-2">
                    <div class="select-container">
                      <div class="w-full flex-wrap select-option">
                      ${tokens.map((token, index) => {
    return `
                          <div class="select-option__content" index="${index}">
                            <div class="flex items-center gap-2"><img width="24px" height="24px" src="${token.img}" class="img-icon"
                                alt="">${token.name}</div>
                            <div class="flex gap-2 items-center text-sm">
                              <div>~${token.exchangeRate} USD</div>
                            </div>
                          </div>
                        `
  }).join('')}
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

  const _value = typeof value == 'number' ? value.toString() : value
  const totalElement = element?.querySelector('#total')
  const btnPurchase = element?.querySelector('#btn-ok')
  input.value = Number(_value?.replace(/[^0-9]+/g, '') ?? 0)?.toLocaleString('en')
  totalElement.innerHTML = `${formattedNumber(data?.total)} DGEM`
  if (!data?.total || (data?.max && _value > data?.max)) {
    btnPurchase.setAttribute('disabled', true)
  } else {
    btnPurchase.removeAttribute('disabled')
  }
}

const handleChangePriceInput = (value, input, element, data) => {

  sellInfo = {
    ...sellInfo,
    price: value ?? 0,
    total: sellInfo?.amount * value
  }
  const btnPurchase = element?.querySelector('#btn-ok')
  if (!sellInfo?.total) {
    btnPurchase.setAttribute('disabled', true)
  } else {
    btnPurchase.removeAttribute('disabled')
  }
  const totalElement = element?.querySelector('#total')
  input.value = handleChangeInputNumber(value?.toLocaleString('en'))
  totalElement.innerHTML = `${sellInfo?.total?.toLocaleString('en')} DGEM`
}

const handleDeleteItem = (orderClicked, value, callback) => {
  if (!value) {
    callback()
    return
  }

  handleSubmitDeleteItem(orderClicked?.id).then(() => {
    callback()
    toggleNotification({
      id: 'item-delete-success',
      label: 'Delete successfull!',
      status: 'success'
    })
  }).catch((error) => {
    toggleNotification({
      id: 'item-delete-failed',
      label: error?.responseJSON?.error ?? 'Delete failed!',
      status: 'failed'
    })
  })
}

const handleChangeSwapInput = async (value, element, tokenChange) => {
  const tabSlip = element.querySelector('#tab-slip');
  const options = tabSlip.shadowRoot.querySelectorAll('.option');
  const optionsArray = Array.from(options);
  if (value == purchaseGemInfo?.from?.balance * 25 / 100) {
    optionsArray?.map((option) => {
      option.classList.remove('selected')
    })
    const targetOption = optionsArray.find(option => option.getAttribute('value') == 25);
    targetOption.classList.add('selected')
  } else if (value == purchaseGemInfo?.from?.balance * 50 / 100) {
    optionsArray?.map((option) => {
      option.classList.remove('selected')
    })
    const targetOption = optionsArray.find(option => option.getAttribute('value') == 50);
    targetOption.classList.add('selected')
  } else if (value == purchaseGemInfo?.from?.balance * 75 / 100) {
    optionsArray?.map((option) => {
      option.classList.remove('selected')
    })
    const targetOption = optionsArray.find(option => option.getAttribute('value') == 75);
    targetOption.classList.add('selected')
  } else if (value == purchaseGemInfo?.from?.balance) {
    optionsArray?.map((option) => {
      option.classList.remove('selected')
    })
    const targetOption = optionsArray.find(option => option.getAttribute('value') == 100);
    targetOption.classList.add('selected')
  } else {
    const optionSelected = tabSlip.shadowRoot.querySelector('.option.selected');
    optionSelected?.classList.remove("selected");
  }

  const res = await handleCalculateSwap(tokenChange)
  if (res) {
    purchaseGemInfo = res
  }

  const inputFrom = element.querySelector('#swap-from-input');
  const inputTo = element.querySelector('#swap-to-input');
  const subTotalFrom = element.querySelector('#purchase-gem-subtotal');
  const priceImpact = element.querySelector('#purchase-gem-priceImpact');
  const miniumReceived = element.querySelector('#purchase-gem-miniumReceived');

  inputFrom.value = purchaseGemInfo?.from?.amountToken == '' ? '' : handleChangeInputNumber(purchaseGemInfo?.from?.amountToken?.toLocaleString('en'))
  subTotalFrom.textContent = purchaseGemInfo?.from?.subTotal?.toLocaleString('en') ?? 0
  inputTo.value = purchaseGemInfo?.to?.amountToken == '' ? '' : handleChangeInputNumber(purchaseGemInfo?.to?.amountToken?.toLocaleString('en'))
  priceImpact.textContent = purchaseGemInfo?.to?.priceImpact?.toLocaleString('en') ?? 0
  miniumReceived.textContent = purchaseGemInfo?.to?.miniumReceived?.toLocaleString('en') ?? 0

  const btnSwap = element.querySelector('.btn-ok')
  if (purchaseGemInfo?.to?.amountToken >= purchaseGemInfo?.to?.miniumReceived) {
    btnSwap.classList.remove('disabled')
  } else {
    btnSwap.classList.add('disabled')
  }
}

const handleClickSelectFrom = (modal, type) => {
  const bottomSheet = toggleBottomSheet({
    id: 'section-tokens',
    title: 'Tokens',
    content: getContentToken(type == 'token' ? tokenSwapsData : itemSwapsData),
    footer: `<button class="btn-cancel">Cancel</button>`,
    attrs: {
      maxHeight: 90
    }
  });

  bottomSheet.shadowRoot.querySelectorAll('.select-option__content').forEach(item => {
    item.addEventListener('click', function () {
      const index = this.getAttribute('index');
      selectedTokenSwap.from = (type == 'token' ? tokenSwapsData : itemSwapsData)[index];
      const imgToken = modal.shadowRoot.querySelector('.balance-from__select img')
      if (imgToken) {
        imgToken.src = selectedTokenSwap?.from?.img
        imgToken.nextElementSibling.textContent = selectedTokenSwap?.from?.name
        selectedTokenSwap.from.token = selectedTokenSwap?.from?.name
      }

      bottomSheet.hide();

      selectedTokenSwap.from.balance = selectedTokenSwap?.from?.balance
      const balance = modal.shadowRoot.querySelector('#purchase-gem-balance');
      const inputFrom = modal.shadowRoot.querySelector('#swap-from-input');
      purchaseGemInfo = {
        ...purchaseGemInfo?.to,
        from: {
          balance: selectedTokenSwap?.from?.balance ?? 0,
          amountToken: undefined,
          miniumReceived: 10,
          token: selectedTokenSwap?.from?.name,
          priceImpact: 1,
          total: 0,
          subTotal: 0
        },
      }

      balance.textContent = handleChangeInputNumber(purchaseGemInfo.from.balance?.toLocaleString('en'))
      inputFrom.value = purchaseGemInfo?.from?.amountToken == '' ? '' : handleChangeInputNumber(purchaseGemInfo?.from?.amountToken?.toLocaleString('en'))

      const tokenChange = {
        token: purchaseGemInfo?.from?.token,
        amount: 0
      }
      handleChangeSwapInput('', modal.shadowRoot, tokenChange)
      const tabSlip = modal.shadowRoot.querySelector('#tab-slip');
      const optionSelected = tabSlip.shadowRoot.querySelector('.option.selected');
      optionSelected?.classList.remove("selected");
    });
  });

  const buttonCancel = bottomSheet.shadowRoot.querySelector('.btn-cancel');
  buttonCancel.addEventListener('click', () => {
    bottomSheet.hide();
  })
}

const handleClickSelectTo = (modal, type) => {
  const bottomSheet = toggleBottomSheet({
    id: 'section-tokens',
    title: 'Tokens',
    content: getContentToken(type == 'token' ? tokenSwapsData : itemSwapsData),
    footer: `<button class="btn-cancel">Cancel</button>`,
    attrs: {
      maxHeight: 90
    }
  });

  bottomSheet.shadowRoot.querySelectorAll('.select-option__content').forEach(item => {
    item.addEventListener('click', function () {
      const index = this.getAttribute('index');
      selectedTokenSwap.to = (type == 'token' ? tokenSwapsData : itemSwapsData)[index];
      const imgToken = modal.shadowRoot.querySelector('.balance-to__select img')
      if (imgToken) {
        imgToken.src = selectedTokenSwap?.to?.img
        imgToken.nextElementSibling.textContent = selectedTokenSwap?.to?.name
        selectedTokenSwap.to.token = selectedTokenSwap?.to?.name
      }

      bottomSheet.hide();

      selectedTokenSwap.to.balance = selectedTokenSwap?.to?.balance
      const balance = modal.shadowRoot.querySelector('#purchase-gem-balance');
      const inputFrom = modal.shadowRoot.querySelector('#swap-to-input');
      purchaseGemInfo = {
        ...purchaseGemInfo?.from,
        to: {
          balance: selectedTokenSwap?.to?.balance ?? 0,
          amountToken: undefined,
          miniumReceived: 10,
          token: selectedTokenSwap?.to?.name,
          priceImpact: 1,
          total: 0,
          subTotal: 0
        },
      }

      balance.textContent = handleChangeInputNumber(purchaseGemInfo.to.balance?.toLocaleString('en'))
      inputFrom.value = purchaseGemInfo?.to?.amountToken == '' ? '' : handleChangeInputNumber(purchaseGemInfo?.to?.amountToken?.toLocaleString('en'))

      const tokenChange = {
        token: purchaseGemInfo?.to?.token,
        amount: 0
      }
      handleChangeSwapInput('', modal.shadowRoot, tokenChange)
      const tabSlip = modal.shadowRoot.querySelector('#tab-slip');
      const optionSelected = tabSlip.shadowRoot.querySelector('.option.selected');
      optionSelected?.classList.remove("selected");
    });
  });

  const buttonCancel = bottomSheet.shadowRoot.querySelector('.btn-cancel');
  buttonCancel.addEventListener('click', () => {
    bottomSheet.hide();
  })
}

function handleMarketScroll(element, modalMarket) {
  if ((element.scrollTop + element.clientHeight >= element.scrollHeight - 10) && !isLoadingSeeMore) {
    isLoadingSeeMore = true
    pagination.market = pagination.market + 1
    const loading = modalMarket.shadowRoot.querySelector('#loading-market-all')
    loading.classList.remove('hidden')
    getMarketItems().then(() => {
      isLoadingSeeMore = false
      loading.classList.add('hidden')
    });
  }
}

function handleOwnerScroll(element, modalMarket) {
  if ((element.scrollTop + element.clientHeight >= element.scrollHeight - 10) && !isLoadingSeeMore) {
    isLoadingSeeMore = true
    pagination.owner = pagination.owner + 1
    const loading = modalMarket.shadowRoot.querySelector('#loading-owner')
    loading.classList.remove('hidden')
    getOwnerItems().then(() => {
      isLoadingSeeMore = false
      loading.classList.add('hidden')
    });
  }
}

function handleTransactionItemsScroll(element, modalMarket) {
  if ((element.scrollTop + element.clientHeight >= element.scrollHeight - 10) && !isLoadingSeeMore) {
    isLoadingSeeMore = true
    pagination.transactionItem = pagination.transactionItem + 1
    const loading = modalMarket.shadowRoot.querySelector('#loading-transaction-item')
    loading.classList.remove('hidden')
    getTransactionItems().then(() => {
      isLoadingSeeMore = false
      loading.classList.add('hidden')
    });
  }
}

function handleTransactionSwapsScroll(element, modalMarket) {
  if ((element.scrollTop + element.clientHeight >= element.scrollHeight - 10) && !isLoadingSeeMore) {
    isLoadingSeeMore = true
    pagination.transactionSwap = pagination.transactionSwap + 1
    const loading = modalMarket.shadowRoot.querySelector('#loading-transaction-swap')
    loading.classList.remove('hidden')
    getTransactionSwaps().then(() => {
      isLoadingSeeMore = false
      loading.classList.add('hidden')
    });
  }
}