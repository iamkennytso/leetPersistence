(async () => {
  const { rankSettings } = await chrome.storage.sync.get('rankSettings')
  const rankInputArray = ['s','a','b','c','d','f'].map(rank => document.getElementById(`${rank}Input`))
  rankInputArray.forEach(rankElement => {
    const rank = rankElement.getAttribute('id')[0]
    rankElement.value = rankSettings[rank]
  })
  const saveButton = document.getElementById('saveButton')
  saveButton.addEventListener('click', async (e) => {
    e.stopImmediatePropagation();
    const newRankSettings = rankInputArray.reduce((accu, rankElement) => {
      const rank = rankElement.getAttribute('id')[0]
      accu[rank] = rankElement.value
      return accu
    }, {})
    saveButton.disabled = true
    await chrome.storage.sync.set({rankSettings: newRankSettings})
    saveButton.disabled = false
  })
})()