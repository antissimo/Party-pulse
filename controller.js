fetch("data.json")
.then(response => response.json())
.then(data => {
    let s = "";
    for (var i = 0; i <data.clubs.length; i++){
        s += "<b>";
        s += data.clubs[i].name;
        s += "<br>";
    }
    document.getElementById("myData").innerHTML = s;
})