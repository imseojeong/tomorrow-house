const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')

function closeGnbSearchHistoryOnClickingOutside(e) {
  if (!gnbSearch.contains(e.target)) {
    gnbSearchHistory.classList.remove('is-active')
    window.removeEventListener('click', closeGnbSearchHistoryOnClickingOutside)
  }
}

function openGnbSearchHistory() {
  gnbSearchHistory.classList.add('is-active')
  if (gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchHistoryOnClickingOutside)
  }
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)