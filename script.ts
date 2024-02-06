document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm") as HTMLFormElement;
    
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      
      const username = (document.getElementById("username") as HTMLInputElement).value;
      const password = (document.getElementById("password") as HTMLInputElement).value;
      
      // Aquí puedes realizar la lógica de autenticación
      // Por ejemplo, enviar los datos al servidor para validarlos
      
      console.log("Usuario:", username);
      console.log("Contraseña:", password);
    });
  });
  