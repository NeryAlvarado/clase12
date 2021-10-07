function validarUsuario(){
    let user=document.forms("formulario")("usuario").value;
    let psw=document.forms("Contraceña")("Contraceña").value;
    if (user=="nery" && psw=="examen") {
        sessionStorage.setItem("ingresoCorrecto", "true")
        return true; 
    }

    sessionStorage.setItem("ingresoCorrecto", "false")
    alert("usuario o contraceña incorrecta")
    return false;
}