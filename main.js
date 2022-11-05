var obj = document.querySelectorAll(".slider")
obj.forEach(element => {
    var i = 0
    setInterval(function () {
        if (i <= element.offsetWidth * 3) {
            i += (element.offsetWidth)
            element.scroll(i, 0);
        }
        else {
            i = 0
            element.scroll(i, 0);
        }
    }, 2000);
});
