function agregarTarea() {
    const input = document.getElementById('tareaInput');
    const tareaTexto = input.value.trim();

    if (tareaTexto === '') {
        alert("Por favor escribe una tarea.");
        return;
    }

    const lista = document.getElementById('listaTareas');

    const li = document.createElement('li');
    li.textContent = tareaTexto;

    const botonOk = document.createElement('button');
    botonOk.textContent = 'Ok';
    botonOk.className = 'ok-btn';
    botonOk.onclick = () => {
        lista.removeChild(li);
    };

    li.appendChild(botonOk);
    lista.appendChild(li);

    input.value = '';
}
