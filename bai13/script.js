function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    setTimeDigit('h1', 'h2', hours);
    setTimeDigit('m1', 'm2', minutes);
    setTimeDigit('s1', 's2', seconds);

    let greeting = "Chào buổi tối";
    if (hours < 12) {
        greeting = "Chào buổi sáng";
    } else if (hours < 18) {
        greeting = "Chào buổi chiều";
    }
    
    document.getElementById('txt-loichao').innerText = greeting;
}

function setTimeDigit(id1, id2, value) {
    const str = value < 10 ? "0" + value : "" + value;
    document.getElementById(id1).src = `images/${str[0]}.gif`;
    document.getElementById(id2).src = `images/${str[1]}.gif`;
}

updateClock();
setInterval(updateClock, 1000);