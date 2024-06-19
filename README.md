## Inicialización de Datos:

Al cargar la página, se hace una solicitud fetch para obtener los datos de animales.json. Estos datos se utilizan para crear instancias de las clases de animales (Leon, Lobo, Oso, Aguila, Serpiente), las cuales se almacenan en un arreglo animales.

## Selección de Animal:

Cuando el usuario selecciona un animal del menú desplegable, se actualiza una vista previa de la imagen del animal seleccionado.

## Registro de Animal:

Al hacer clic en el botón "Registrar", se validan los campos del formulario. Si los campos están completos y el animal no ha sido registrado previamente, se guarda la edad y los comentarios del animal y se añade una tarjeta con la imagen del animal a la lista de animales registrados. Luego, se resetea el formulario.

## Visualización del Modal:

Al hacer clic en la imagen de un animal registrado, se muestra un modal con más información sobre el animal (imagen, edad, comentarios) y se reproduce el sonido del animal.
