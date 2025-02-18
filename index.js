const todoTab = document.getElementById('todoTab')
const allTab = document.getElementById('allTab')
const settingsTab = document.getElementById('settingsTab')

document.addEventListener("DOMContentLoaded", function () {
  loadTab('todo/todo.html', document.querySelector('.tab.active'));
});

todoTab.addEventListener('click', () => {
  loadTab('todo/todo.html', todoTab)
})

allTab.addEventListener('click', () => {
  loadTab('all/all.html', allTab)
})

settingsTab.addEventListener('click', () => {
  loadTab('settings/settings.html', settingsTab)
})


const loadTab = (page, tabElement) => {
  fetch(page)
    .then(response => response.text())
    .then(data => {
      document.getElementById('content').innerHTML = data;
    });

  document.querySelectorAll('.active').forEach(tab => {
    tab.classList.remove('active');
  });

  tabElement.classList.add('active');
}
