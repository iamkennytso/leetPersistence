(async () => {
  const DEFAULT_RANK_TIMES = {
    s: 180,
    a: 15,
    b: 8,
    c: 4,
    d: 2,
    f: 1
  };

  const contentDiv = document.getElementById('mainContentContainer');
  const allLeets = await chrome.storage.local.get('allLeets');
  const { rankSettings } = await chrome.storage.sync.get('rankSettings')

  if (!Object.keys(rankSettings).length) {
    await chrome.storage.sync.set({rankSettings: DEFAULT_RANK_TIMES})
    const rankSettings = await chrome.storage.sync.get({rankSettings})
  }

  const getLeetcodeString = (string, element) => {
    const arr = string.split('/')
    if (arr.length < 4 || arr[2] !== 'leetcode.com' || arr[3] !== 'problems') {
      element.style.color = '#E86726'
      return 'Invalid Leetcode URL'
    }
    const problemSegment = arr[4]
    element.style.color = 'white'
    return problemSegment.split('-').map((word, idx) => {
        const [first, ...rest] = word.split('')
        return `${idx === 0 ? first : first.toUpperCase()}${rest.join('')}`
    }).join('')
  }

  const addButton = document.getElementById("addButton");
  addButton.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    const addPopup = document.getElementById("addPopup");
    addPopup.classList.remove('hidden')
    const leetLinkInput = document.getElementById("leetLink");
    leetLinkInput.addEventListener("input", (e) => {
      e.stopImmediatePropagation();
      const leetcode = document.getElementById("leetcode");

      const leetcodeString = getLeetcodeString(e.target.value, leetcode)
      leetcode.innerHTML = leetcodeString
    })
    const rankButtons = Array.from(document.getElementsByClassName("rankOption"))
    rankButtons.forEach(button => {
      button.addEventListener("click", (e) => {
        e.stopImmediatePropagation();
        const selectedRank = document.getElementsByClassName("selectedRank")[0]
        selectedRank.classList.remove("selectedRank")
        button.classList.add("selectedRank")
      })
    })
  })

  const listButton = document.getElementById("listButton")
  listButton.addEventListener("click", () => {
    const textPopupText = document.getElementById("textPopupText")
    textPopupText.innerHTML = "Need some leetcodes to add? Try some of these lists:" 
      + "<br/><br/>" + "<a href='https://leetcode.com/problem-list/oizxjoit/' target='_blank'>Blind 75</a>"
      + "<br/><br/>" + "<a href='https://www.techinterviewhandbook.org/grind75/' target='_blank'>Grind 75</a>"
      + "<br/><br/>" + "<a href='https://leetcode.com/studyplan/leetcode-75/' target='_blank'>LeetCode 75</a>"
      + "<br/><br/>" + "<a href='https://leetcode.com/studyplan/top-interview-150/' target='_blank'>LeetCode 150</a>"
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
      + "<br/><br/>" + "How long it takes for each rank can be adjusted in the <span class='highlight'>Settings</span> tab. I encourage you to go there now to read an inspirational quote."
      + "<br/><br/>" + "Once you're ready, hit the <span class='highlight'>Add</span> button on the bottom to start adding in some leetcodes you've completed! You can also click the <span class='highlight'>Study Plans</span> button for a list of suggested leetcodes for you to go through. The <span class='highlight'>All</span> tab will allow you to see all you've completed, when they'll show up again, and allow you to edit them as well."
      + "<br/><br/>" + "Keep at it, you got this!"
    contentDiv.appendChild(introContent)
    return
  }
})()
