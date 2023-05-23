'use strict'
window.addEventListener('load', function(){

    /* const formulario=document.getElementById('formulario');
    const nombres= document.getElementById('nombres');
    const apellidos= document.getElementById('apellidos');
    const correo= document.getElementById('correo');
    const celular= document.getElementById('celular');
    
    

    function chequeoInputs(){
        const nombresvalue=nombres.Value.trim();
        const apellidosvalue=apellidos.nodeName.trim();
        const correovalue=cooreo.value.trim();
        const celularvalue=celular.value.trim();

        if(nombresvalue===''){
            setErrorFor(nombres, 'No puede dejar el usuairo en blanco');
        } else {
            setSuccessFor(nombres);
        }
    }
    
    function Error(input,message){
        const box_input=input.parentElement;
        const small = box_input.querySelector('small');
        box_input.className='box_input_error';
        small.innerText=message;
    }

    function todook(input){
        const box_input=input.parentElement;
        box_input.className='box_input_todook';
    }

    function isEmail(correo){

        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correo);
    } */


    var incorrecto =document.querySelector(".incorrecto");
    var formu=document.querySelector(".formu");
    var box_dashed=document.querySelector(".dashed");
    box_dashed.style.display="none";

   /*  const formulario={
        nombres:null,
    };

    formu.nombres.addEventListener('input',(e)=>{
        formulario.nombres= e.target.value;
        console.log(nombres);
    });

    formu.addEventListener('click',(e)=>{
        e.preventDefault();
        if(formulario.nombres!=null){
            formu.nombres.style.color ="green";
        }else{
            formu.nombres.style.color="red";
            nombres.innerHTML="Por favor ingresa bn el nombre";
        }

    }); */



    formu.addEventListener('submit',function(e){
        console.log("EVENTO SUBMIT CAPTURADO");
        e.preventDefault();
        console.log(formu);

        var nombres= document.querySelector("#nombres").value;
        var apellidos= document.querySelector("#apellidos").value;
        var correo= document.querySelector("#correo").value;
        var celular= document.querySelector("#celular").value;
        var especialistas= document.querySelector("#especialistas").value;
        var fecha= document.querySelector("#fecha").value;

               
         if(nombres.trim()==null|| nombres.trim().length==0){

           
            alert('El nombre no es valido');
            return false;
        } 

        if(apellidos.trim()==null|| apellidos.trim().length==0){
            alert('los apellidos no son valido');
            
            return false;
        }

        if(correo.trim()==null|| correo.trim().length==0){
            alert('el correo es invalido');
            
            return false;
        }

        if(celular.trim()==null|| celular<=-1||celular.trim().length==0){
            alert('el celular es invalido');
            
            return false;
        }
        if(correo == null ){
            alert('el correo no es valido');
            return false;
        }

        if(especialistas.trim()==null|| especialistas.trim().length==0){
            alert('elije un especialista');
            return false;
        } 

        box_dashed.style.display="block";
        var datos=[nombres,apellidos,correo,celular,especialistas,fecha];
        console.log(datos);
        var indice;
        for(indice in datos){
            var parrafo= document.createElement("p");
            parrafo.append(datos[indice]);
            box_dashed.append(parrafo);
        }

    });

});