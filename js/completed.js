if (localStorage.getItem("TODO") == null) {
    var a = document.createElement("div");
    a.classList.add("text-center");
    a.classList.add("p-5");
    a.innerHTML =
        '<h4>You have not any work to do</h4><br><a href="/add.html"><button type="button" class="btn btn-success">Create TODO List</button></a>';
    var b = document.getElementById("container");
    b.appendChild(a);
} else {
    var today = new Date();
    var deadline = new Date();
    var c = localStorage.getItem("TODO");
    var da = JSON.parse(c);
    var Upcoming = [];
    var Completed = [];
    for (k in da) {
        var s = da[k][4];
        var arr = s.split("-");
        var y = Number(arr[0]);
        var m = Number(arr[1]) - 1;
        var d = Number(arr[2]);
        deadline.setFullYear(y, m, d);
        if (deadline >= today) {
            Upcoming.push(da[k]);
        } else {
            Completed.push(da[k]);
        }

    }
    var txt = "<h4>Completed TODO's List:</h4><hr>"
    for (z in Completed) {
        txt += `<div class="card  mb-3" id="${Completed[z][0]}">
        <h5 class="card-header">On ${Completed[z][3]}</h5>
        <div class="card-body">
            <h5 class="card-title">${Completed[z][1]}</h5>
            <p class="card-text">${Completed[z][2]}</p>
            <button type="button" class="btn btn-info">${Completed[z][4]}</button>
        </div></div>`
    }
    document.getElementById("container").innerHTML = txt;

}


function clearList() {
    if (confirm("Do you really want to clear list?")) {
        localStorage.clear();
    }
}