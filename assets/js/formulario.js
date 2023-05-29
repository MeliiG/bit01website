'use strict'
 window.addEventListener('load', function(){ 

    console.log("DOM cargado");

    var incorrecto =document.querySelector(".incorrecto");
    var formu=document.querySelector("#formu");
    var box_dashed=document.querySelector(".dashed");
    var error = this.document.querySelector("#error")
    error.style.color='rgb(139, 15, 15)';
    box_dashed.style.display="none";

    var MensajeError=[];

    


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
            Nombres: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // 
            Apellidos: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // 
            Correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            Celular: /^\d{10,13}$/ // 
        }
        console.log(nombres);

      
        
    
        if(nombres.trim()==null|| nombres.trim().length==0||expresiones.Nombres.test(nombres)==false){
        
                   /*  alert("El campo Nombre es INCORRECTO, favor Digitarlo NUEVAMENTE"); */
                  MensajeError.push('El campo Nombre es INCORRECTO, favor Digitarlo NUEVAMENTE '); 
                     document.querySelector("#nombres").style.boxShadow="0 0 7px red";
                     error.innerHTML= MensajeError.join(', ');
                    
                    return false;
                } else if(apellidos.trim()==null|| apellidos.trim().length==0||expresiones.Apellidos.test(apellidos)==false){
        
                       MensajeError.push("El campo Apellidos es INCORRECTO, favor Digitarlo NUEVAMENTE"); 
                        document.querySelector("#apellidos").style.boxShadow="0 0 7px red";
                        error.innerHTML= MensajeError.join(', ');
                        return false;


                 } else if(correo == null ||expresiones.Correo.test(correo)==false){
                            MensajeError.push('El campo correo es INCORRECTO, favor Digitarlo NUEVAMENTE'); 
                            document.querySelector("#correo").style.boxShadow="0 0 7px red";
                            error.innerHTML= MensajeError.join(', ');
                            return false;

                    } else if(celular.trim()==null|| celular<=-1||celular.trim().length==0||expresiones.Celular.test(celular)==false){
                        MensajeError.push('El campo celular es INCORRECTO, favor Digitarlo NUEVAMENTE debe contener 10 digitos'); 
                        document.querySelector("#celular").style.boxShadow="0 0 7px red";
                        error.innerHTML= MensajeError.join(', ');
                        return false;
                        
                    } else if(especialistas.trim()==null|| especialistas.trim()=="Seleccione al especialista"){
                            MensajeError.push('El campo Especialistas es INCORRECTO, favor Seleccionar NUEVAMENTE '); 
                            document.querySelector("#especialistas").style.boxShadow="0 0 7px red";
                            error.innerHTML= MensajeError.join(', ');
                            return false;
                        
                            
        }/*  else if(MensajeError== ){

        } */
        else {
           
            document.querySelector("#nombres").style.boxShadow="0 0 7px green";            
            document.querySelector("#apellidos").style.boxShadow="0 0 7px green";
            document.querySelector("#correo").style.boxShadow="0 0 7px green";
            document.querySelector("#celular").style.boxShadow="0 0 7px green";
            document.querySelector("#especialistas").style.boxShadow="0 0 7px green";
        }

                           /*  box_dashed.style.display="block";
                            var MensajeError=[nombres,apellidos,correo,celular,especialistas,fecha];
                            console.log(MensajeError);
                            var indice;
                            for(indice in MensajeError){
                                var parrafo= document.createElement("p");
                                parrafo.append(`El campo ${MensajeError[indice]}es INCORRECTO, favor Digitarlo NUEVAMENTE `);
                                box_dashed.append(parrafo);
                            } */

        

        box_dashed.style.display="block";
        var datos=[nombres,apellidos,correo,celular,especialistas,fecha];
        console.log(datos);
        var indice;
        for(indice in datos){
            var parrafo= document.createElement("p");
            parrafo.append(datos[indice]);
            box_dashed.append(parrafo);
            error.innerHTML= MensajeError.splice(1); 
        }

    }); 

    formu.addEventListener('input',function(e){
        console.log("EVENTO SUBMIT CAPTURADO 2 change");
        e.preventDefault();
        
        if(nombres!==null||expresiones.Nombres.test(nombres)==true){
            document.querySelector("#nombres").style.boxShadow="0 0 7px green";
            /* MensajeError.delete; */
            error.innerHTML= MensajeError.splice(1); 
            
        }

        if(apellidos!=null||expresiones.Apellidos.test(apellidos)==true){
            document.querySelector("#apellidos").style.boxShadow="0 0 7px green";
            /* MensajeError.delete; */
            error.innerHTML= MensajeError.pop(1); 
            
        }

        if(correo!=null||expresiones.Correo.test(correo)==true){
            document.querySelector("#correo").style.boxShadow="0 0 7px green";
            /* MensajeError.delete; */
            error.innerHTML= MensajeError.pop(1); 
            
        }

        if(celular!=null||expresiones.Celular.test(celular)==true){
            document.querySelector("#celular").style.boxShadow="0 0 7px green";
            /* MensajeError.delete; */
            error.innerHTML= MensajeError.pop(1); 
            
        }

        if(especialistas!=null|| especialistas!="Seleccione al especialista"){
            document.querySelector("#especialistas").style.boxShadow="0 0 7px green";
            /* MensajeError.delete; */
            error.innerHTML= MensajeError.pop(1); 
            
        }
        
    
    });

 }); 