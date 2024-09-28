document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  
    // Obtener los valores de los campos
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Validar el email y la contraseña específicos
    const validEmail = 'mateusdavid417@gmail.com';
    const validPassword = '120202';
  
    if (email === validEmail && password === validPassword) {
        window.location.href ='Register.html';
      // Aquí puedes proceder a la acción siguiente, como redireccionar
    } else {
      alert('Correo o contraseña incorrectos');
    }
  });
  