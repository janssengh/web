const alerta_erro = (msg) => {
    // recupera div alerta
    const alerta = document.getElementById('alerta');
    alerta.className = 'alert alert-danger'
    alerta.innerHTML = msg;

    setTimeout(() => {
        alerta.className = '';
        alerta.innerHTML = '';
    }, 5000);
}