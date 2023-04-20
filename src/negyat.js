function calculateDiagonal() {
    let side = document.getElementById("side").value;
    let diagonal = Math.sqrt(2 * side * side);
    document.getElementById("result").innerHTML = "A négyzet átlója: " + diagonal.toFixed(2);
}
/* Rátkay Dániel | Szoft, I-2/N | 2023.04.20*/