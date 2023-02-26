function certificado(){
    var nombre = document.getElementById("nombre").value;
    var edad=parseInt (document.getElementById("edad").value);
    var sexo=document.getElementById("sexo").value;
    var fecha=document.getElementById("fecha").value;
    var peso=parseFloat (document.getElementById("peso").value);
    var talla=parseFloat (document.getElementById("talla").value);
    var fc=parseInt (document.getElementById("fc").value);
    var fr=parseInt (document.getElementById("fr").value);
    var tc=parseFloat (document.getElementById("tc").value);
    var ta=document.getElementById("ta").value;
    var glucosa= parseInt(document.getElementById("glucosa").value);
    var spo2=parseInt (document.getElementById("spo2").value);
    var alergias= document.getElementById("alergias").value;
    var dx=document.getElementById("dx").value;
    var medicamento=document.getElementById("medicamento").value;
    var presentacion=parseInt (document.getElementById("presentacion").value);
    var dias=parseInt (document.getElementById("dias").value);
    var lapso=parseInt (document.getElementById("lapso").value);
    var nota=document.getElementById("nota").value;

    console.log("Nombre:"+nombre);
    console.log("Edad:"+edad);
    console.log("Sexo:"+sexo);
    console.log("Fecha:"+fecha);
    console.log("Peso:"+peso);
    console.log("Talla:"+talla);
    console.log("FC:"+fc);
    console.log("FR:"+fr);
    console.log("Tc:"+tc);
    console.log("TA:"+ta);
    console.log("Glucosa:"+glucosa);
    console.log("SpO2:"+spo2);
    console.log("Alergia:"+alergias);
    console.log("dx:"+dx);
    console.log("Medicamento:"+medicamento); 
    console.log("Presentacion:"+presentacion);
    console.log("Lapso:"+lapso); 
    console.log("Dias:"+dias); 
    console.log("Nota:"+nota);

    var estandar = .15;
    var  dosis = estandar *peso*lapso*presentacion/24000;
    console.log("Dosis:"+dosis);

    var cer = "Receta:\n"
    +"Dr:\nMedico Especializado\nCedula profesional:\nDatos del paciente\n"+
    "Nombre: "+nombre+" Edad: "+edad+"\n"+
    "Sexo: "+sexo+" Fecha: "+fecha+"\n"+
    "FC: "+fc+" FR: "+fr+" Tc: "+tc+" Peso: "+peso+" Talla: "+talla+" TA: "+ta+"\n"+
    "Glucosa: "+glucosa+" SpO2: "+spo2+" Alergias: "+alergias+"\n"+
    "Dx: "+dx +"\n"+
    "Tratamiento:"+"\n"+
    medicamento+" "+presentacion+" "+"via oral"+", "+dosis+" cada "+lapso+"hrs por "+dias+" dias\n"+
    "Notas:"+"\n"+
    nota;
    document.getElementById("respuesta").innerHTML=cer;
    document.getElementById("btn_descargar").disabled = false;

}
