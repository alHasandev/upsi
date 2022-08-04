// Sidebar
const sidebar = document.querySelector('.sidebar')
const sidebarToggler = document.querySelectorAll('.sidebar-toggler');

sidebarToggler.forEach(toggler => {
  toggler.addEventListener('click', () => sidebar.classList.toggle('collapse'))
})

// Tab
const tabs = document.querySelectorAll('.tabs')

tabs.forEach(tabContainer => initTabs(tabContainer))

function initTabs(tabContainer) {
  const tabButtons = tabContainer.querySelector('.tab-buttons')
  const tabContents = tabContainer.querySelector('.tab-contents')

  // Tab buttons on click
  tabButtons.querySelectorAll('[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.querySelectorAll('[data-tab]').forEach(btn => btn.classList.remove('active'))
      btn.classList.add('active')
      toggleTab(tabContents, btn.dataset.tab)
    })
  })
}

function toggleTab(tabContents, tabId) {
  tabContents.querySelectorAll(':scope > .tab-page').forEach(tab => tab.classList.remove('active'))
  tabContents.querySelector(`#${tabId}`)?.classList.toggle('active')
}