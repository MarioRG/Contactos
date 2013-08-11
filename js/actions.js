$(function (){
    document.addEventListener("deviceready",function(){
        $('#cBtn').tap(function(){
        var nom = $('#cName').val();
        var ema = $('#cMail').val();
        var tel = $('#cTel').val();
        
        if(nom != '' && ema != '' && tel != '')
            crearContacto(nom,ema,tel);
      });
    $('#btnListar').tap(function (){
    listarContactos();
    });
    },false);
});

function listarContactos(){
    function onSuccess(contacts){
        $('#lista').html('');
        for(1=0;i<contacts.length;i++){
        $('<li class="forward"><a href="Tel://'+contacts[i].phoneNumbers[0].value+'">'
          +contacts[i].name.formatted+'</a></li>').appendTo(('#lista');
        }
    };
    
    function onError(contactError){
        alert('onError!');
    };
    
    // find all contacts with 'Bob' in any name field
    var options = new ContactFindOptions();
    options.filter="";
    options.multiple=true; 
    var fields = ["*"];
    navigator.contacts.find(fields, onSuccess, onError, options);
    }


function crearContacto(nom,ema,tel){
    // creamos un contacto
    var myContact = navigator.contacts.create();
    // asignar un nombre para mostrar
    myContact.displayName = nom;
    myContact.nickname = nom;
    // Asignar nombre del contacto
    var nombre  = new ConctactName();
    nombre.givenName = nom;
    myContact.name= nombre;
    //Asignar email del contacto
    var email = [];
    email[0] = new
    ContactField("home", ema,true),
        email[1] = new
    ContactField("work","ejemplo@algo.com",false);
    myContact.emails = email;
    //Asignar telefono de contacto
    var telefono = [];
    telefono[0] = new
    ContactField("work","222-2222",true);
	myContact.phoneNumbers = telefono;
    //Guardar contacto
    myContact.save(function(){
        $('#cName').val('');
        $('#cMail').val('');
        $('#cTel').val('');
        navigator.notification.alert("Contacto creado satisfactoriamente",
                                     function(){window.location.href="#home";
        },"Felicidades","Aceptar");
    },function(err){
    alert(err.code);
    });
}