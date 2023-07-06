const enddate = "7 july 2023 9:00 PM"
document.getElementById("enddate").innerHTML = enddate
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(enddate)
    const now = new Date()
    // console.log(end,now)
    const diff = (end - now) / 1000
    // console.log(diff)
    inputs[0].value = Math.floor(diff / 3600 / 24)
    // console.log(days)
    inputs[1].value = Math.floor(diff / 3600) % 24
    inputs[2].value = Math.floor(diff / 60) % 60
    inputs[3].value = Math.floor(diff%60)
}
clock()
setInterval(
  function(){
        clock()
    },1000
)