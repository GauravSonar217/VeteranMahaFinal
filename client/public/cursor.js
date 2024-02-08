
let sectionName = "cursor-1"
let sectionPrev = ""
let sectionList = [
  "cursor-1"
]
let cursorList = [
  "arrow-pointer"
]
let isShiftDone = false
const btnPrevious = document.querySelector(".btn-previous")
const btnNext = document.querySelector(".btn-next")
const header = document.querySelector("header")
const footer = document.querySelector("footer")
const root = document.querySelector(':root')

window.onload = function () {
  shiftIn()
}

btnPrevious.addEventListener('click', function () {
  if (isShiftDone) {
    location.href = "#" + sectionList[(sectionList.indexOf(sectionName) + sectionList.length - 1) % sectionList.length]
  }
})

btnNext.addEventListener('click', function () {
  if (isShiftDone) {
    location.href = "#" + sectionList[(sectionList.indexOf(sectionName) + 1) % sectionList.length]
  }
})

window.addEventListener('popstate', function () {
  sectionPrev = sectionName
  sectionName = getAnchor()
  this.clearInterval(shiftup)
  pageChange(sectionName, sectionPrev)
})

function shiftIn() {
  anime({
    targets: '.shift-in',
    translateY: ['50px', '0'],
    delay: anime.stagger(100),
    easing: 'easeInOutSine',
    complete: function () {
      isShiftDone = true
    }
  })

  if (sectionName !== "cursor-2") {
    anime({
      targets: '.shift-in',
      color: '#292927',
      delay: anime.stagger(100)
    })
    root.style.setProperty('--curzr-logo-color', '#292927')
  } else {
    anime({
      targets: '.shift-in',
      color: '#e6e6e6',
      delay: anime.stagger(100)
    })
    root.style.setProperty('--curzr-logo-color', '#e6e6e6')
  }
}

function shiftUp(el) {
  anime({
    targets: el,
    translateY: ['0%', '-100%'],
    duration: 500,
    delay: anime.stagger(100),
    easing: 'easeInOutCubic',
    complete: function () {
    }
  })
}

function getAnchor() {
  let anchor = document.URL.split('#')[1]
  return anchor ? anchor : null
}

function pageChange(sectionName, sectionPrev) {
  isShiftDone = false
  let duration = 1000
  let sectionIndex = sectionList.findIndex((section) => section === sectionName)
  changeCursor(sectionIndex)

  document.getElementById(sectionName).style.zIndex = sectionList.length + 2
  document.getElementById(sectionPrev).style.zIndex = sectionList.length

  anime({
    targets: document.getElementById(sectionName),
    translateX: ['-100%', '0%'],
    easing: 'easeInOutCirc'
  })

  anime({
    targets: document.getElementById(sectionPrev),
    translateX: ['0%', '100%'],
    duration: duration,
    easing: 'easeInOutCirc',
    complete: function () {
      document.getElementById(sectionPrev).style.transform = 'translateX(0%)'
      document.getElementById(sectionPrev).style.zIndex = sectionList.length - sectionList.indexOf(sectionPrev)
      shiftup = setInterval(() => {
        shiftUp('.btn-next small.shift-in')
      }, 3000)
    }
  })

  anime({
    targets: [header, footer],
    translateX: ['0%', '50%'],
    duration: duration,
    easing: 'easeInCirc',
    complete: function () {
      document.getElementById(sectionName).style.zIndex = sectionList.length
      header.style.transform = 'translateX(0%)'
      footer.style.transform = 'translateX(0%)'
      shiftIn()
    }
  })
}

function changeCursor(index) {
  cursor.hidden()
  switch (cursorList[index]) {
    case 'arrow-pointer':
      cursor = new ArrowPointer()
      break
  }
}

class ArrowPointer {
  constructor() {
    this.root = document.body
    this.cursor = document.querySelector(".curzr-arrow-pointer")

    this.position = {
      distanceX: 0,
      distanceY: 0,
      distance: 0,
      pointerX: 0,
      pointerY: 0,
    },
      this.previousPointerX = 0
    this.previousPointerY = 0
    this.angle = 0
    this.previousAngle = 0
    this.angleDisplace = 0
    this.degrees = 57.296
    this.cursorSize = 20

    this.cursorStyle = {
      boxSizing: 'border-box',
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '2147483647',
      width: `${this.cursorSize}px`,
      height: `${this.cursorSize}px`,
      transition: '250ms, transform 100ms',
      userSelect: 'none',
      pointerEvents: 'none'
    }

    this.init(this.cursor, this.cursorStyle)
  }

  init(el, style) {
    Object.assign(el.style, style)
    setTimeout(() => {
      this.cursor.removeAttribute("hidden")
    }, 500)
    this.cursor.style.opacity = 1
  }

  move(event) {
    this.previousPointerX = this.position.pointerX
    this.previousPointerY = this.position.pointerY
    this.position.pointerX = event.pageX + this.root.getBoundingClientRect().x
    this.position.pointerY = event.pageY + this.root.getBoundingClientRect().y
    this.position.distanceX = this.previousPointerX - this.position.pointerX
    this.position.distanceY = this.previousPointerY - this.position.pointerY
    this.distance = Math.sqrt(this.position.distanceY ** 2 + this.position.distanceX ** 2)

    this.cursor.style.transform = `translate3d(${this.position.pointerX}px, ${this.position.pointerY}px, 0)`

    if (this.distance > 1) {
      this.rotate(this.position)
    } else {
      this.cursor.style.transform += ` rotate(${this.angleDisplace}deg)`
    }
  }

  rotate(position) {
    let unsortedAngle = Math.atan(Math.abs(position.distanceY) / Math.abs(position.distanceX)) * this.degrees
    let modAngle
    const style = this.cursor.style
    this.previousAngle = this.angle

    if (position.distanceX <= 0 && position.distanceY >= 0) {
      this.angle = 90 - unsortedAngle + 0
    } else if (position.distanceX < 0 && position.distanceY < 0) {
      this.angle = unsortedAngle + 90
    } else if (position.distanceX >= 0 && position.distanceY <= 0) {
      this.angle = 90 - unsortedAngle + 180
    } else if (position.distanceX > 0 && position.distanceY > 0) {
      this.angle = unsortedAngle + 270
    }

    if (isNaN(this.angle)) {
      this.angle = this.previousAngle
    } else {
      if (this.angle - this.previousAngle <= -270) {
        this.angleDisplace += 360 + this.angle - this.previousAngle
      } else if (this.angle - this.previousAngle >= 270) {
        this.angleDisplace += this.angle - this.previousAngle - 360
      } else {
        this.angleDisplace += this.angle - this.previousAngle
      }
    }
    style.left = `${-this.cursorSize / 2}px`
    style.top = `${0}px`
    style.transform += ` rotate(${this.angleDisplace}deg)`
  }

  hidden() {
    this.cursor.style.opacity = 0
    setTimeout(() => {
      this.cursor.setAttribute("hidden", "hidden")
    }, 500)
  }
}

let cursor = new ArrowPointer()
document.onmousemove = function (event) {
  cursor.move(event)
}
document.ontouchmove = function (event) {
  cursor.move(event.touches[0])
}
document.onclick = function () {
  if (typeof cursor.click === 'function') {
    cursor.click()
  }
}

