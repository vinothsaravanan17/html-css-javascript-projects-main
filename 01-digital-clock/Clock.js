
function UpdateTime(){
    const clock = document.getElementById('clock');
    let now = new Date()
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ambm = hours >= 12 ? 'BM' : "AM"
 

    hours = hours % 12
    hours = hours ? hours : 12

    const formattedHours = String(hours).padStart(2, '0')
    const formattedminutes = String(minutes).padStart(2, '0')
    const formattedseconds = String(seconds).padStart(2, '0')

    clock.textContent = `${formattedHours}:${formattedminutes}:${formattedseconds} ${ambm}`

}

UpdateTime()


setInterval(UpdateTime, 1000)
