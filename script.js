const date = new Date
const year = date.getFullYear()
const hours = date.getHours()
const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()]
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Aug", "Oct", "Nov", "Dec"][date.getMonth()]
const textHours = (hours <= 2 || hours >= 20) ? "Malam" : (hours <= 9) ? "Pagi" : (hours <= 14) ? "Siang" : "Sore"
const inputUser = ""//prompt("Name:")
const user = document.querySelector(".user")
const events = document.querySelector(".events")
const eventCount = [...document.querySelectorAll(".event")].length
let move = 340
let counterEvent = 1

console.log(events)
//console.log(eventCount)
let isTouch = false


//([...document.querySelectorAll(".years")].forEach(el => el.textContent = year))
//document.querySelector(".hour").textContent = textHours

//textContent *
replaceAll("years", year)
replaceAll("hour", textHours)
replaceAll("day", day)
replaceAll("date", date.getDate())
replaceAll("month", month)
// *

 events.addEventListener("mouseover", function(){
    isTouch = true
 })
 events.addEventListener("mouseout", function(){
    isTouch = false
 })
setInterval(() => {
  if(counterEvent === eventCount){
    move *= -1
    counterEvent = 1
  }
  if(!isTouch){
    events.scrollBy({
      left: move,
      behavior: "smooth"
    })
    counterEvent += 1
  }
  console.log(counterEvent)
  //console.log(events)
  //console.log(isTouch)
}, 3500)


function replaceAll(element, content){
  {[...document.querySelectorAll(`.${element}`)].forEach(el => el.textContent = content)}
}

//console.log(date.getHours())