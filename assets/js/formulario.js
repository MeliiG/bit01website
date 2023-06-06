'use strict'
 window.addEventListener('load', function(){ 

    // console.log("DOM cargado");

    // var incorrecto =document.querySelector(".incorrecto");
    // var formu=document.querySelector("#formu");
    // var box_dashed=document.querySelector(".dashed");
    // var error = this.document.querySelector("#error")
    // error.style.color='rgb(139, 15, 15)';
    // box_dashed.style.display="none";

    // var MensajeError=[];

    


    // formu.addEventListener('submit',function(e){
    //     console.log("EVENTO SUBMIT CAPTURADO");
    //     e.preventDefault();
        

    //     var nombres= document.querySelector("#nombres").value;
    //     var apellidos= document.querySelector("#apellidos").value;
    //     var correo= document.querySelector("#correo").value;
    //     var celular= document.querySelector("#celular").value;
    //     var especialistas= document.querySelector("#especialistas").value;
    //     var fecha= document.querySelector("#fecha").value;
        


    //     const expresiones = {
    //         Nombres: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // 
    //         Apellidos: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // 
    //         Correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    //         Celular: /^\d{10,13}$/ // 
    //     }
    //     console.log(nombres);

      
        
    
    //     if(nombres.trim()==null|| nombres.trim().length==0||expresiones.Nombres.test(nombres)==false){
        
    //                /*  alert("El campo Nombre es INCORRECTO, favor Digitarlo NUEVAMENTE"); */
    //               MensajeError.push('El campo Nombre es INCORRECTO, favor Digitarlo NUEVAMENTE '); 
    //                  document.querySelector("#nombres").style.boxShadow="0 0 7px red";
    //                  error.innerHTML= MensajeError.join(', ');
                    
    //                 return false;
    //             } else if(apellidos.trim()==null|| apellidos.trim().length==0||expresiones.Apellidos.test(apellidos)==false){
        
    //                    MensajeError.push("El campo Apellidos es INCORRECTO, favor Digitarlo NUEVAMENTE"); 
    //                     document.querySelector("#apellidos").style.boxShadow="0 0 7px red";
    //                     error.innerHTML= MensajeError.join(', ');
    //                     return false;


    //              } else if(correo == null ||expresiones.Correo.test(correo)==false){
    //                         MensajeError.push('El campo correo es INCORRECTO, favor Digitarlo NUEVAMENTE'); 
    //                         document.querySelector("#correo").style.boxShadow="0 0 7px red";
    //                         error.innerHTML= MensajeError.join(', ');
    //                         return false;

    //                 } else if(celular.trim()==null|| celular<=-1||celular.trim().length==0||expresiones.Celular.test(celular)==false){
    //                     MensajeError.push('El campo celular es INCORRECTO, favor Digitarlo NUEVAMENTE debe contener 10 digitos'); 
    //                     document.querySelector("#celular").style.boxShadow="0 0 7px red";
    //                     error.innerHTML= MensajeError.join(', ');
    //                     return false;
                        
    //                 } else if(especialistas.trim()==null|| especialistas.trim()=="Seleccione al especialista"){
    //                         MensajeError.push('El campo Especialistas es INCORRECTO, favor Seleccionar NUEVAMENTE '); 
    //                         document.querySelector("#especialistas").style.boxShadow="0 0 7px red";
    //                         error.innerHTML= MensajeError.join(', ');
    //                         return false;
                        
                            
    //     }/*  else if(MensajeError== ){

    //     } */
    //     else {
           
    //         document.querySelector("#nombres").style.boxShadow="0 0 7px green";            
    //         document.querySelector("#apellidos").style.boxShadow="0 0 7px green";
    //         document.querySelector("#correo").style.boxShadow="0 0 7px green";
    //         document.querySelector("#celular").style.boxShadow="0 0 7px green";
    //         document.querySelector("#especialistas").style.boxShadow="0 0 7px green";
    //     }

    //                        /*  box_dashed.style.display="block";
    //                         var MensajeError=[nombres,apellidos,correo,celular,especialistas,fecha];
    //                         console.log(MensajeError);
    //                         var indice;
    //                         for(indice in MensajeError){
    //                             var parrafo= document.createElement("p");
    //                             parrafo.append(`El campo ${MensajeError[indice]}es INCORRECTO, favor Digitarlo NUEVAMENTE `);
    //                             box_dashed.append(parrafo);
    //                         } */

        

    //     box_dashed.style.display="block";
    //     var datos=[nombres,apellidos,correo,celular,especialistas,fecha];
    //     console.log(datos);
    //     var indice;
    //     for(indice in datos){
    //         var parrafo= document.createElement("p");
    //         parrafo.append(datos[indice]);
    //         box_dashed.append(parrafo);
    //         error.innerHTML= MensajeError.splice(1); 
    //     }

    // }); 

    // formu.addEventListener('input',function(e){
    //     console.log("EVENTO SUBMIT CAPTURADO 2 change");
    //     e.preventDefault();
        
    //     if(nombres!==null||expresiones.Nombres.test(nombres)==true){
    //         document.querySelector("#nombres").style.boxShadow="0 0 7px green";
    //         /* MensajeError.delete; */
    //         error.innerHTML= MensajeError.splice(1); 
            
    //     }

    //     if(apellidos!=null||expresiones.Apellidos.test(apellidos)==true){
    //         document.querySelector("#apellidos").style.boxShadow="0 0 7px green";
    //         /* MensajeError.delete; */
    //         error.innerHTML= MensajeError.pop(1); 
            
    //     }

    //     if(correo!=null||expresiones.Correo.test(correo)==true){
    //         document.querySelector("#correo").style.boxShadow="0 0 7px green";
    //         /* MensajeError.delete; */
    //         error.innerHTML= MensajeError.pop(1); 
            
    //     }

    //     if(celular!=null||expresiones.Celular.test(celular)==true){
    //         document.querySelector("#celular").style.boxShadow="0 0 7px green";
    //         /* MensajeError.delete; */
    //         error.innerHTML= MensajeError.pop(1); 
            
    //     }

    //     if(especialistas!=null|| especialistas!="Seleccione al especialista"){
    //         document.querySelector("#especialistas").style.boxShadow="0 0 7px green";
    //         /* MensajeError.delete; */
    //         error.innerHTML= MensajeError.pop(1); 
            
    //     }
        
    
    // });

    const expresiones = {
                Nombres: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // 
                Apellidos: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // 
                Correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                Celular: /^\d{10,13}$/ // 
            }

    const formulario={
        nombre:"",
        apellido:"",
        correo:"",
        celular:"",
        especialistas:"",
        fecha:""
    }
    const nombres = document.getElementById('nombres');
    const aceptar = document.getElementById('aceptar');
    const error = document.getElementById('error1')
    nombres.addEventListener('input',(e)=>{
        formulario.nombre=e.target.value
    })    

    const validacionNombre=()=>{
        if (!formulario.nombre||expresiones.Nombres.test(formulario.nombre)==false) {
        
        error.innerHTML="Nombre vacio o mal escrito";
        nombres.style.boxShadow="0 0 7px red";
        console.log(expresiones.Nombres.test(formulario.nombre));
        return false;            
        }
        if(formulario.nombre!=null||expresiones.Nombres.test(formulario.nombre)==true){

            error.style.display ="none";
            nombres.style.boxShadow="0 0 7px green";
            
            return true;
        }
       
    }


    const apellidos = document.getElementById('apellidos');
    const error2 = document.getElementById('error2')
    apellidos.addEventListener('input',(e)=>{
        
        formulario.apellido=e.target.value
    })

    const validacionApellido=()=>{
        
        if (!formulario.apellido||expresiones.Apellidos.test(formulario.apellido)==false) {
        
        error2.innerHTML="Apellido vacio o mal escrito";
        apellidos.style.boxShadow="0 0 7px red";
        console.log(expresiones.Apellidos.test(formulario.apellido));
        return false;            
        }
        if(formulario.apellido!=null||expresiones.Apellidos.test(formulario.apellido)==true){

            error2.style.display ="none";
            apellidos.style.boxShadow="0 0 7px green";
            
            return true;
        }
       
    }

    const correo = document.getElementById('correo');
    const error3 = document.getElementById('error3')
    correo.addEventListener('input',(e)=>{
        
        formulario.correo=e.target.value
    })


    const validacionCorreo=()=>{
        
        if (!formulario.correo||expresiones.Correo.test(formulario.correo)==false) {
        
        error3.innerHTML="Correo vacio o mal escrito";
        correo.style.boxShadow="0 0 7px red";
        console.log(expresiones.Correo.test(formulario.correo));
        return false;            
        }
        if(formulario.correo!=null||expresiones.Correo.test(formulario.correo)==true){

            error3.style.display ="none";
            correo.style.boxShadow="0 0 7px green";
            
            return true;
        }
       
    }

    const celular = document.getElementById('celular');
    const error4 = document.getElementById('error4')
    celular.addEventListener('input',(e)=>{
        
        formulario.celular=e.target.value
    })


    const validacionCelular=()=>{
        
        if (!formulario.celular||expresiones.Celular.test(formulario.celular)==false) {
        
        error4.innerHTML="Celular vacio o mal escrito";
        celular.style.boxShadow="0 0 7px red";
        console.log(expresiones.Celular.test(formulario.celular));
        return false;            
        }
        if(formulario.celular!=null||expresiones.Celular.test(formulario.celular)==true){

            error4.style.display ="none";
            celular.style.boxShadow="0 0 7px green";
            
            return true;
        }
       
    }


    const especialistas = document.getElementById('especialistas');
    const error5 = document.getElementById('error5');
    especialistas.addEventListener('input',(e)=>{
        
        formulario.especialistas=e.target.value
        console.log(formulario.especialistas);
    })


    const validacionEspecialistas=()=>{
        
        if (formulario.especialistas=="") {
        error5.innerHTML="Seleccione especialista";
        especialistas.style.boxShadow="0 0 7px red";
        console.log(formulario.especialistas);
        // especialistas.trim()=="Seleccione al especialista"
        return false;            
        }
        if(formulario.especialistas!="Seleccione al especialista"){

            error5.style.display ="none";
            especialistas.style.boxShadow="0 0 7px green";
            
            return true;
        }
       
    }

    const fecha = document.getElementById('fecha');
    const error6 = document.getElementById('error6');
    fecha.addEventListener('input',(e)=>{
        
        formulario.fecha=e.target.value
        console.log(formulario.fecha);
    })

    const validacionFecha=()=>{
        
        if (formulario.fecha=="") {
       
        error6.innerHTML="Seleccione fecha";
        fecha.style.boxShadow="0 0 7px red";
        console.log(formulario.fecha);
        // especialistas.trim()=="Seleccione al especialista"
        return false;            
        }
        if(formulario.fecha!=""){

            error6.style.display ="none";
            fecha.style.boxShadow="0 0 7px green";
            
            return true;
        }
       
    }



    aceptar.addEventListener('click',(e)=>{
        e.preventDefault();
        validacionNombre(),
        validacionApellido(),
        validacionCorreo(),
        validacionCelular(),
        validacionEspecialistas(),
        validacionFecha()
        // &&formulario.apellido==true&&formulario.correo==true&&formulario.celular==true&&formulario.especialistas!=""&&formulario.fecha!="")
        // if(formulario.nombre==true){


            //  const box_dashed=document.querySelector(".dashed");
            //  const parrafo= document.createElement('p');
            //  const respuesta1=document.createTextNode(formulario.nombre);
            //  const respuesta2=document.createTextNode(formulario.apellido);
          

            // box_dashed.appendChild(parrafo);          
            // box_dashed.appendChild( respuesta1);
            // box_dashed.appendChild( respuesta2);



        // };
    })

         var box_dashed=document.querySelector(".dashed");
        box_dashed.style.display="block";
        var datos=formulario.nombre;
        
        // var indice;
        // for(indice in datos){
            var parrafo= document.createElement("p");
            parrafo.appendChild(datos);
            box_dashed.appendChild(parrafo); 
            /* error.innerHTML= MensajeError.splice(1);  */
        

 }); 