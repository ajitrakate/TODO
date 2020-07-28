var sr_no;

function newItem() {
    var newjson
    var work = document.getElementById("TODO").value;
    var desc = document.getElementById("desc").value;
    var start = document.getElementById("start").value;
    var deadline = document.getElementById("deadline").value;
    if (localStorage.getItem("TODO") == null) {
        sr_no = 1;
        var newitem = [];
        var new1 = [sr_no, work, desc, start, deadline];
        newitem.push(new1);
        newjson = JSON.stringify(newitem);
        localStorage.setItem("TODO", newjson);
        localStorage.getItem("TODO");
    } else {
        var k = localStorage.getItem("TODO");
        var l = JSON.parse(k);
        var x = l.length - 1;
        sr_no = l[x][0] + 1;
        var new1 = [sr_no, work, desc, start, deadline];
        l.push(new1);
        for (x in l) { console.log(l[x]); }
        newjson = JSON.stringify(l);
        localStorage.setItem("TODO", newjson);
        localStorage.getItem("TODO");
    }
    showSuc(sr_no);
}

function showSuc(no) {
    var x = document.getElementById("suc");
    x.classList.remove("d-none");
    document.getElementById("sr").innerHTML = no;
}

function closed() {
    var x = document.getElementById("suc");
    x.classList.add("d-none");
    document.getElementById("TODO").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("start").value = "";
    document.getElementById("deadline").value = "";
}

function clearList() {
    if (confirm("Do you really want to clear list?")) {
        localStorage.clear();
    }
}