function request(type, prefab, container, flag) {
    var keysArray = addSliderIDKeys;   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = xhttp.responseText;
            if (flag) {
                for (var key in keysArray) {
                    var oldKey = regex[key];
                    var newKey = keysArray[key] + "_" + keys();
                    data = data.replace(oldKey, newKey);
                }
                container.innerHTML += data;                
            }

        }
    }
    xhttp.open(type, prefab, flag);
    xhttp.send();
}

function keys() {
    if (sessionStorage.i) {
        sessionStorage.i = Number(sessionStorage.i) + 1;
    } else {
        sessionStorage.i = 0;
    }
    return sessionStorage.i;
}