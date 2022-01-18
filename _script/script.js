function insert (num) {
    var numero = document.getElementById('scratchpad').innerHTML;
    document.getElementById('scratchpad').innerHTML = numero + num;
}

function clean() {
    document.getElementById('scratchpad').innerHTML = "";
}