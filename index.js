const todoTab = document.getElementById('todoTab')
const allTab = document.getElementById('allTab')

document.addEventListener("DOMContentLoaded", function () {
  loadTab('todo.html', document.querySelector('.tab.active'));
});

todoTab.addEventListener('click', () => {
  loadTab('todo.html', todoTab)
})

allTab.addEventListener('click', () => {
  loadTab('all.html', allTab)
})

function loadTab(page, tabElement) {
  fetch(page)
    .then(response => response.text())
    .then(data => {
      document.getElementById("content").innerHTML = data;
    });


  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });

  tabElement.classList.add('active');
}
