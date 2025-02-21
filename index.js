const todoTab = document.getElementById('todoTab')
const allTab = document.getElementById('allTab')
const settingsTab = document.getElementById('settingsTab')

const TAB_SCRIPT = 'TAB_SCRIPT'
const TAB_STYLE  = 'TAB_STYLE'

document.addEventListener("DOMContentLoaded", function () {
  loadTab('todo', todoTab);
});

todoTab.addEventListener('click', () => {
  loadTab('todo', todoTab)
})

allTab.addEventListener('click', () => {
  loadTab('all', allTab)
})

settingsTab.addEventListener('click', () => {
  loadTab('settings', settingsTab)
})


const loadTab = (tab, tabElement) => {
  document.querySelectorAll('.active').forEach(tab => {
    tab.classList.remove('active');
  });

  fetch(`${tab}/${tab}.html`)
    .then(response => response.text())
    .then(data => {
      document.getElementById('content').innerHTML = data;

      // remove old .js and old .css
      const prevScript = document.getElementById(TAB_SCRIPT)
      if (prevScript) {
        prevScript.remove()
      }
      const prevStyle = document.getElementById(TAB_STYLE)
      if (prevStyle) {
        prevStyle.remove()
      }

      // add .js and .css
      const script = document.createElement('script')
      script.src = `${tab}/${tab}.js`
      script.id = TAB_SCRIPT
      document.body.appendChild(script)

      const style = document.createElement("link");
      style.rel = "stylesheet";
      style.href = `${tab}/${tab}.css`;
      style.id = TAB_STYLE
      document.head.appendChild(style);
    });

  tabElement.classList.add('active');
}

window.onclick = function (event) {
  const { target } = event
  const textPopup = document.getElementById("textPopup");
  const addPopup = document.getElementById("addPopup")
  if (target === textPopup) {
    textPopup.classList.add("hidden");
  }
  if (target === addPopup) {
    addPopup.classList.add("hidden");
  }
};