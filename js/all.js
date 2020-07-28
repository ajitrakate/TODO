if (localStorage.getItem("TODO") == null) {
    var a = document.createElement("div");
    a.classList.add("text-center");
    a.classList.add("p-5");
    a.innerHTML =
        '<h4>You have not any work to do</h4><br><a href="/add.html"><button type="button" class="btn btn-success">Create TODO List</button></a>';
    var b = document.getElementById("container");
    b.appendChild(a);
} else {
    var x = localStorage.getItem("TODO");
    var l = "Ongoing";
    var y = JSON.parse(x);
    var txt = '<h4 class="mr-100">Your TODO List<span id="tot"></span>:</h4><hr>';
    var h = document.getElementById("tot");
    //console.log(h);

    for (k in y) {
        txt += `<div class="card  mb-3">
        <h5 class="card-header">On ${y[k][3]}</h5>
        <div class="card-body">
            <h5 class="card-title">${y[k][1]}</h5>
            <p class="card-text">${y[k][2]}</p>
            <button type="button" class="btn btn-info">${y[k][4]}</button>
            <button type="button" class="btn btn-info">${l}</button>
        </div></div>`
    }
    document.getElementById("container").innerHTML = txt;

}

function clearList() {
    if (confirm("Do you really want to clear list?")) {
        localStorage.clear();
    }
}