//ENDPOINT: https://dev4humans.com.mx/api/Clases/ventas_libros

const tbody = document.getElementById('tbody');

fetch("https://dev4humans.com.mx/api/Clases/ventas_libros")
  .then(response => response.json())
  .then(datosApi => {
   console.log(datosApi);
    const ctx = document.getElementById('myChart');

    const labels = datosApi.data.labels;
    const data =datosApi.data.data;

    // creacion de grafica
   new Chart(ctx, {
      type: 'bar',
      data: {
       labels: labels,
        datasets: [{
          label: 'Promedio de Ventas diarias',
          data: data,
          borderWidth: 1
        }]
      },
      options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
      }
  });

  //creacion de datos de tabla
  tbody.innerHTML= "";
  labels.forEach((label,index) => {
   console.log(label);
   tbody.innerHTML += `
    <tr>
      <th >${index + 1}</th>
      <td>${label}</td>
      <td>${data[index]}</td>                  
   </tr>
    `;
});


});



