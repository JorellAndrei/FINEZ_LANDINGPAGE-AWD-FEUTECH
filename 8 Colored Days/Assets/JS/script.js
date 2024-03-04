function myMove2(Day2) {
    const days = new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");
    let i, l;
    for (i = 0, l = days.length; i < l; i++) {
        if (days[i] != Day2) {
            document.getElementById(days[i]).style.top = '-450px';
            document.getElementById(days[i]).style.bottom = '-450px';
            document.getElementById(days[i]).style.transition = 'all 1.5s';
        }
    }
}
let id = null;

function myMove(day) {

    var elem = document.getElementById(day);
    myMove2(day);
    let pos = -450;
    clearInterval(id);
    id = setInterval(frame, 5);

    function frame() {
        if (pos != 160) {
            document.getElementById(day).style.transition = 'all 1s';
            if (day == "Monday") {
                document.getElementById("Monday").style.borderColor = "#A5D7E8";
                document.getElementById("Monday").style.backgroundColor = "#A5D7E8";

            } else if (day == "Tuesday") {
                document.getElementById("Tuesday").style.borderColor = "#FF0000";
                document.getElementById("Tuesday").style.backgroundColor = "#FF0000";
            } else if (day == "Wednesday") {
                document.getElementById("Wednesday").style.borderColor = "purple";
                document.getElementById("Wednesday").style.backgroundColor = "purple";
            } else if (day == "Thursday") {
                document.getElementById("Thursday").style.borderColor = "#519872";
                document.getElementById("Thursday").style.backgroundColor = "#519872";
            } else if (day == "Friday") {
                document.getElementById("Friday").style.borderColor = "#FFC045";
                document.getElementById("Friday").style.backgroundColor = "#FFC045";
            } else if (day == "Saturday") {
                document.getElementById("Saturday").style.borderColor = "#C87941";
                document.getElementById("Saturday").style.backgroundColor = "#C87941";
            } else if (day == "Sunday") {
                document.getElementById("Sunday").style.borderColor = "#8787A3";
                document.getElementById("Sunday").style.backgroundColor = "#8787A3";
            }

            pos++;
            pos++;
            elem.style.top = pos + 'px';
            elem.style.bottom = pos + 'px';
        } else {
            document.getElementById(day).style.backgroundColor = "white";
            clearInterval(id);

        }
    }
}

function toggleBackgroundColor1() {
    var isBackgroundColorChanged = false;
    var defaultBackgroundColor = document.body.style.backgroundColor;

    if (isBackgroundColorChanged) {
        document.body.style.backgroundColor = defaultBackgroundColor;
    } else {

        document.body.style.backgroundColor = '#092635';
    }

    isBackgroundColorChanged = !isBackgroundColorChanged;
}

function toggleBackgroundColor2() {
    var isBackgroundColorChanged = false;
    var defaultBackgroundColor = document.body.style.backgroundColor;

    if (isBackgroundColorChanged) {
        document.body.style.backgroundColor = defaultBackgroundColor;
    } else {

        document.body.style.backgroundColor = '#84142D';
    }

    isBackgroundColorChanged = !isBackgroundColorChanged;
}

function toggleBackgroundColor3() {
    var isBackgroundColorChanged = false;
    var defaultBackgroundColor = document.body.style.backgroundColor;

    if (isBackgroundColorChanged) {
        document.body.style.backgroundColor = defaultBackgroundColor;
    } else {

        document.body.style.backgroundColor = '#382039';
    }

    isBackgroundColorChanged = !isBackgroundColorChanged;
}

function toggleBackgroundColor4() {
    var isBackgroundColorChanged = false;
    var defaultBackgroundColor = document.body.style.backgroundColor;

    if (isBackgroundColorChanged) {
        document.body.style.backgroundColor = defaultBackgroundColor;
    } else {

        document.body.style.backgroundColor = '#062925';
    }

    isBackgroundColorChanged = !isBackgroundColorChanged;
}

function toggleBackgroundColor5() {
    var isBackgroundColorChanged = false;
    var defaultBackgroundColor = document.body.style.backgroundColor;

    if (isBackgroundColorChanged) {
        document.body.style.backgroundColor = defaultBackgroundColor;
    } else {

        document.body.style.backgroundColor = '#FD7014';
    }

    isBackgroundColorChanged = !isBackgroundColorChanged;
}

function toggleBackgroundColor6() {
    var isBackgroundColorChanged = false;
    var defaultBackgroundColor = document.body.style.backgroundColor;

    if (isBackgroundColorChanged) {
        document.body.style.backgroundColor = defaultBackgroundColor;
    } else {

        document.body.style.backgroundColor = '#290001';
    }

    isBackgroundColorChanged = !isBackgroundColorChanged;
}

function toggleBackgroundColor7() {
    var isBackgroundColorChanged = false;
    var defaultBackgroundColor = document.body.style.backgroundColor;

    if (isBackgroundColorChanged) {
        document.body.style.backgroundColor = defaultBackgroundColor;
    } else {

        document.body.style.backgroundColor = '#393232';
    }

    isBackgroundColorChanged = !isBackgroundColorChanged;
}