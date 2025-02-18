// chrome.storage.sync.set({ key: 'yo' }).then(() => {
//   console.log("Value is set");
// });

// chrome.storage.sync.get(["key"]).then((result) => {
//   console.log("Value is " + result.key);
// });

console.log('all hello');

(function() {
  const DEMO_LEETS = [
    {
      url: "https://leetcode.com/problems/contains-duplicate",
      rank: "S",
      lastTry: "2024-08-31",
      tags: ["Bl, BnB"]
    },
    {
      url: "https://leetcode.com/problems/missing-number/",
      rank: "S",
      lastTry: "2023-08-31",
      tags: []
    },
  ]
  
  const tableBody = document.getElementById('tableBody')
  
  DEMO_LEETS.forEach(leet => {
    const row = tableBody.insertRow()
    const urlCell = row.insertCell()
    const rankCell = row.insertCell()
    const lastTryCell = row.insertCell()
    const tagsCell = row.insertCell()
    urlCell.innerHTML = leet.url
    rankCell.innerHTML = leet.rank
    lastTryCell.innerHTML = leet.lastTry
    tagsCell.innerHTML = leet.tags.join(' ')
  })
})()