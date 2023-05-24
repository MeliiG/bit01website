'use strict'
 window.addEventListener('load', function(){ 

    console.log("DOM cargado");

    var incorrecto =document.querySelector(".incorrecto");
    var formu=document.querySelector("#formu");
    var box_dashed=document.querySelector(".dashed");
    box_dashed.style.display="none";




    formu.addEventListener('submit',function(e){
        console.log("EVENTO SUBMIT CAPTURADO");
        e.preventDefault();
        

        var nombres= document.querySelector("#nombres").value;
        var apellidos= document.querySelector("#apellidos").value;
        var correo= document.querySelector("#correo").value;
        var celular= document.querySelector("#celular").value;
        var especialistas= document.querySelector("#especialistas").value;
        var fecha= document.querySelector("#fecha").value;
        


        const expresiones = {
            Nombres: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // 
            Apellidos: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // 
            Correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            Celular: /^\d{10,13}$/ // 
        }
        console.log(nombres);
    
        if(nombres.trim()==null|| nombres.trim().length==0||expresiones.Nombres.test(nombres)==false){
        
                    alert("El campo Nombre es INCORRECTO, favor Digitarlo NUEVAMENTE");
                    document.querySelector("#nombres").style.boxShadow="0 0 7px red";
                    return false;
                }else  if(apellidos.trim()==null|| apellidos.trim().length==0||expresiones.Apellidos.test(apellidos)==false){
        
                        alert("El campo Apellidos es INCORRECTO, favor Digitarlo NUEVAMENTE");
                        document.querySelector("#apellidos").style.boxShadow="0 0 7px red";
                        return false;


                 } else if(correo == null ||expresiones.Correo.test(correo)==false){
                            alert('El campo correo es INCORRECTO, favor Digitarlo NUEVAMENTE');
                            document.querySelector("#correo").style.boxShadow="0 0 7px red";
                            return false;

                    } else if(celular.trim()==null|| celular<=-1||celular.trim().length==0||expresiones.Celular.test(celular)==false){
                        alert('El campo celular esta incompleto, favor Digitarlo');
                        document.querySelector("#celular").style.boxShadow="0 0 7px red";
                        return false;
                        
                    } else if(especialistas.trim()==null|| especialistas.trim()=="Seleccione al especialista"){
                            alert('elije un especialista');
                            document.querySelector("#especialistas").style.boxShadow="0 0 7px red";
                            return false;
                        
        }else {
            document.querySelector("#nombres").style.boxShadow="0 0 7px green";
            document.querySelector("#apellidos").style.boxShadow="0 0 7px green";
            document.querySelector("#correo").style.boxShadow="0 0 7px green";
            document.querySelector("#celular").style.boxShadow="0 0 7px green";
            document.querySelector("#especialistas").style.boxShadow="0 0 7px green";
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