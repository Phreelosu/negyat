function calculateDiagonal() {
    let side = document.getElementById("side").value;
    let diagonal = Math.sqrt(2 * side * side);
    document.getElementById("result").innerHTML = "A négyzet átlója: " + diagonal.toFixed(2);
}