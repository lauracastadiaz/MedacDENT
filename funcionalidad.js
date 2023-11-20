document.addEventListener('DOMContentLoaded', function () {

    // Definición de la clase Cita
    class Cita {
      constructor(nombre, apellidos, fecha, dni, nacimiento, telf, email, observaciones, timestamp) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fecha = fecha;
        this.dni = dni;
        this.nacimiento = nacimiento;
        this.telf = telf;
        this.email = email;
        this.observaciones = observaciones;
        this.timestamp = timestamp;
      }
    }
  
    // Cargar citas almacenadas en localStorage al cargar la página
    cargarCitas();
  
    // Función para manejar el envío del formulario
    document.getElementById('form').addEventListener('submit', function (e) {
      e.preventDefault(); // Evitar el comportamiento predeterminado del formulario
  
      // Obtener los valores del formulario
      let fecha = document.getElementById('fecha').value;
      let nombre = document.getElementById('nombre').value;
      let apellidos = document.getElementById('apellidos').value;
      let dni = document.getElementById('dni').value;
      let nacimiento = document.getElementById('nacimiento').value;
      let telf = document.getElementById('telf').value;
      let email = document.getElementById('email').value;
      let observaciones = document.getElementById('observaciones').value;
  
      // Crear un nuevo objeto Cita
      let cita = new Cita(nombre, apellidos, fecha, dni, nacimiento, telf, email, observaciones, Date.now());
  
      // Convertir el objeto cita a una cadena JSON
      let citaJSON = JSON.stringify(cita);
  
      // Almacenar la cita en localStorage
      localStorage.setItem('cita', citaJSON);
  
      citaJSON = localStorage.getItem('cita');
  
      // Convertir la cadena JSON a un objeto
      let citaObjeto = JSON.parse(citaJSON);
  
      // Imprimir la cita en la consola
      console.log(citaObjeto);
  
      // Obtener las citas almacenadas en localStorage
      let citas = JSON.parse(localStorage.getItem('citas')) || [];
  
      // Agregar la nueva cita a la lista de citas
      citas.push(citaObjeto);
  
      // Guardar la lista actualizada en localStorage
      localStorage.setItem('citas', JSON.stringify(citas));
  
      // Mostrar las citas en la tabla
      cargarCitas();
  
      
      document.getElementById('form').reset();
    });
  
    function cargarCitas() {
      // Obtener la tabla
      let tabla = document.getElementById('tablaCitas');
  
      // Limpiar la tabla antes de cargar las citas
      tabla.innerHTML = '<tr><th>ND</th><th>FULL NAME</th><th>FECHA DE LA CITA</th><th>TELÉFONO</th><th>MODIFICAR</th><th>DELETE</th></tr>';
  
      // Obtener las citas almacenadas en localStorage
      let citas = JSON.parse(localStorage.getItem('citas')) || [];

      //comprobar si hay datos en la tabla para que si no hay que ponga un mensaje de datos vacíos
      if (citas.length === 0) {
        // Insertar una fila en la tabla con el mensaje 'No hay citas disponibles'
        let fila = tabla.insertRow();
        let celda = fila.insertCell();
        celda.textContent = 'No hay citas disponibles';
        celda.colSpan = 6; // Para que la celda ocupe toda la fila
      } else {
        // Iterar sobre cada cita y agregarla a la tabla
        citas.forEach(function (cita, index) {
          // ... el resto de tu código ...
        });
      };



  
      // Iterar sobre cada cita cuando está lleno y agregarla a la tabla
      citas.forEach(function (cita, index) {
        let fila = tabla.insertRow();
        fila.id = 'cita' + (index + 1);
  
        let celdaND = fila.insertCell();
        celdaND.textContent = cita.timestamp;
  
        let celdaNombre = fila.insertCell();
        celdaNombre.textContent = cita.nombre + ' ' + cita.apellidos;
  
        let celdaFecha = fila.insertCell();
        celdaFecha.textContent = cita.fecha;
  
        let celdaTelefono = fila.insertCell();
        celdaTelefono.textContent = cita.telf;
  
        //modificar cita
        let celdaModificar = fila.insertCell();
        let modificarBtn= document.createElement('button');
        modificarBtn.classList.add("fas", "fa-calendar-days");
        modificarBtn.addEventListener('click', function(){
          modificarCita(index);
        });
        celdaModificar.appendChild(modificarBtn);
  
        //eliminar cita
        let celdaEliminar = fila.insertCell();
        let eliminarBtn = document.createElement('button'); //crear botón eliminar
        eliminarBtn.classList.add("fas", "fa-times"); // Agregar las clases al botón
        eliminarBtn.addEventListener('click', function() {
        eliminarCita(index);
        });
        celdaEliminar.appendChild(eliminarBtn);
      });
    }

    //función eliminar

    function eliminarCita(index){

         // Obtener las citas almacenadas en localStorage
      let citas= JSON.parse(localStorage.getItem('citas')) || [];

        // Eliminar la cita del array
      citas.splice(index, 1);

       // Actualizar localStorage 
      localStorage.setItem('citas', JSON.stringify(citas));

      //cargar citas
      cargarCitas();
    }

    //función modificar

    function modificarCita(index){

      //obtener las citas

      let citas= JSON.parse(localStorage.getItem('citas')) || [];

      //obtener cita selecionada

      let cita= citas[index];

      //llenar de nuevo el formulario con los nuevos datos
    document.getElementById('fecha').value = cita.fecha;
    document.getElementById('nombre').value = cita.nombre;
    document.getElementById('apellidos').value = cita.apellidos;
    document.getElementById('dni').value = cita.dni;
    document.getElementById('nacimiento').value = cita.nacimiento;
    document.getElementById('telf').value = cita.telf;
    document.getElementById('email').value = cita.email;
    document.getElementById('observaciones').value = cita.observaciones;

     // Eliminar la cita del array
     citas.splice(index, 1);

    // Guardar el array actualizado en localStorage
    localStorage.setItem('citas', JSON.stringify(citas));

    // Recargar las citas en la tabla
      cargarCitas();

    };

    

      
    
  
  });
  







 

 
