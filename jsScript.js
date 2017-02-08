var pageVisit = parseInt(window.localStorage.getItem('pageVisit'))
if (isNaN(pageVisit)) {
  pageVisit = 1
} else {
  pageVisit += 1
}

var pageVisitDiv = document.getElementById('pageVisit')
pageVisitDiv.innerHTML = pageVisit


window.localStorage.setItem('pageVisit', pageVisit)

function themeChange () {
  var button = document.getElementById('searchButton')

  var theme = window.localStorage.getItem('theme')
  if (theme === null || theme === 'day-theme') {
    theme = 'night-theme'
    button.style.background = 'gray'
    button.style.color = '#acb2ef'
  } else if (theme === 'night-theme') {
    theme = 'day-theme'
    button.style.background = 'white'
    button.style.color = '#6772e5'
  }

  var bodyTag = document.getElementsByTagName('Body')[0]
  bodyTag.className = theme

  window.localStorage.setItem('theme', theme)
}

var button = document.getElementById('searchButton')

var theme = window.localStorage.getItem('theme')
if (theme === null || theme === 'day-theme') {
  theme = 'day-theme'
  button.style.background = 'white'
  button.style.color = '#6772e5'
} else if (theme === 'night-theme') {
  theme = 'night-theme'
  button.style.background = 'gray'
  button.style.color = '#acb2ef'
}

var bodyTag = document.getElementsByTagName('Body')[0]
bodyTag.className = theme

window.localStorage.setItem('theme', theme)
