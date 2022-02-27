const orderCta = document.querySelector('.order-cta')
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

function openOrderModal() {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}

orderCtaBuyButton.addEventListener('click', openOrderModal)

function closeOrderModal() {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
}

orderModalOverlay.addEventListener('click', closeOrderModal)

function toggleOrderCtaBookmark() {
  const [icon, countSpan] = this.children
  const count = Number(countSpan.innerText.replaceAll(',', ''))
  let newCount = count
  this.classList.toggle('is-active')
  this.classList.contains('is-active') ? (newCount += 1) : (newCount -= 1)
  countSpan.innerText = newCount.toLocaleString()
  countSpan.setAttribute('aria-label', `북마크 ${newCount.toLocaleString()}회`)
  icon.classList.toggle('ic-bookmark')
  icon.classList.toggle('ic-bookmark-filled')
}

orderCtaBookmarkButton.addEventListener('click', toggleOrderCtaBookmark)
