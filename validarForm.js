document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var fecha = document.getElementById('fecha');
    var nombre = document.getElementById('nombre');
    var apellidos = document.getElementById('apellidos');
    var dni = document.getElementById('dni');
    var nacimiento = document.getElementById('nacimiento');
    var telf = document.getElementById('telf');
    var email = document.getElementById('email');
  
    if (!fecha.value) {
      alert('Por favor, introduce una fecha.');
      return false;
    }
  
    if (!nombre.value || nombre.value.length < 3) {
      alert('Por favor, introduce un nombre válido.');
      return false;
    }
  
    if (!apellidos.value || apellidos.value.length < 3) {
      alert('Por favor, introduce apellidos válidos.');
      return false;
    }
  
    var dniPattern = /^\d{8}[A-Za-z]$/;
    if (!dniPattern.test(dni.value)) {
      alert('Por favor, introduce un DNI válido.');
      return false;
    }
  
    if (!nacimiento.value) {
      alert('Por favor, introduce tu año de nacimiento.');
      return false;
    }
  
    var telfPattern = /^\d{9}$/;
    if (!telfPattern.test(telf.value)) {
      alert('Por favor, introduce un número de teléfono válido.');
      return false;
    }
  
    var emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
      alert('Por favor, introduce un email válido.');
      return false;
    }
  
    alert('Formulario enviado correctamente');
    return true;
  });