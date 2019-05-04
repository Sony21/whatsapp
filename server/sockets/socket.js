const { io } = require('../server');

io.on('connection', (client) =>{

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta Aplicación'
    });

    client.on('disconnect', ()=>{
        console.log('Usuario desconectado');
    });

    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        //console.log(mensaje);

       /* if(mensaje.usuario){
            callback({
                resp: 'Todo Salio Bien'
            });
        }else{
            callback({
                resp: 'Todo Salio Muy Maaaal'
            });  
        }*/
    })

});