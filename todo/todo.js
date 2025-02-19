(async () => {
  const contentDiv = document.getElementById('mainContentContainer')
  const allLeets = await chrome.storage.local.get('allLeets');

  const listButton = document.getElementById("listButton")
  listButton.addEventListener("click", () => {
    const textPopupText = document.getElementById("textPopupText")
    textPopupText.innerHTML = "Need some leetcodes to add? Try some of these lists:" 
      + "<br/><br/>" + "<a href='https://leetcode.com/problem-list/oizxjoit/' target='_blank'>Blind 75</a>"
      + "<br/><br/>" + "<a href='https://www.techinterviewhandbook.org/grind75/' target='_blank'>Grind 75</a>"
      + "<br/><br/>" + "<a href='https://leetcode.com/studyplan/leetcode-75/' target='_blank'>LeetCode 75</a>"
      + "<br/><br/>" + "<a href='https://leetcode.com/problem-list/plakya4j/' target='_blank'>NeetCode 150</a>"
      + "<br/><br/>" + "If these aren't to your liking, try filtering LeetCode by companies!"
    const textPopup = document.getElementById("textPopup");
    textPopup.classList.remove('hidden')
  })

  if (!Object.keys(allLeets).length) {
    // first time run
    const introContent = document.createElement('p')
    introContent.classList.add('introContent')
    introContent.innerHTML = "Welcome! This Leetcode tracker is to help you practice leetcodes on a regular basis." 
      + "<br/><br/>" + "When you complete a leetcode, simply add it here, as well as how well you feel like you did on it. The better you did, the longer it will take for it to re-appear on this list for you to do again. The worse you did, the sooner it will re-appear here for you to practice it again!" 
      + "<br/><br/>" + "How long it takes for each rank can be adjusted in the settings. I encourage you to go there now to read an inspirational quote."
      + "<br/><br/>" + "Once you're ready, hit the add button on the bottom to start adding in some leetcodes you've completed! You can also click the List button for a list of suggested leetcodes for you to go through. The 'All' tab will allow you to see all you've completed, when they'll show up again, and allow you to edit them as well."
      + "<br/><br/>" + "Keep at it, you got this!"
    contentDiv.appendChild(introContent)
    return
  }
  

})()
