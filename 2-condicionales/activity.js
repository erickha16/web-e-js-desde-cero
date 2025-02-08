let calificacion = prompt("Ingresa una calificación válida entre 0 y 100: ");
let desempeño;

if (calificacion >= 90) {
  desempeño = "Excelente";
  confirm("APROBADO. Desempeño: " + desempeño);
} else if (calificacion <= 89 && calificacion >= 75) {
  desempeño = "Bueno";
  confirm("APROBADO. Desempeño: " + desempeño);
} else if (calificacion <= 74 && calificacion >= 60) {
  desempeño = "Suficiente";
  confirm("APROBADO. Desempeño: " + desempeño);
} else {
  desempeño = "Medicore";
  confirm("REPROBADO. Desempeño: " + desempeño);
}
