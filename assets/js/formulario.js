
const formulario = document.querySelector('.formulario')
const validaFormulario = document.querySelectorAll('.validar')

formulario.addEventListener('submit', e=>{
    this.handleSubmit(e)
})
function handleSubmit(e){
    e.preventDefault()
    const camposValidados = checaCampos();
    const senhasValidadas = senhasValidas();
    console.log(senhasValidadas)
    if(camposValidados && senhasValidadas){
        alert('Formulario enviado')
        
        formulario.submit()
    }
}
function senhasValidas(){
    let valid = true

    const senha = formulario.querySelector('.senha')
    const repetirSenha = formulario.querySelector('.repetirSenha')

    if(senha.value !== repetirSenha.value){
        valid = false
        criaErro(senha, 'Campos senha e repetir senha precisam ser iguais')
    }
    if(senha.value.length < 6 || senha.value.length > 12){
        valid = false
        criaErro(senha, 'Senha tem de estar entre 6 e 12 caracteres')
    }

    return valid
}

function checaCampos(){
    let valid = true
    
    for(let errorText of formulario.querySelectorAll('.error-text')){
        errorText.remove()
    }
    for(let campo of validaFormulario){
        const label = campo.previousElementSibling.innerText;
        if(!campo.value){
            criaErro(campo, `Campo ${label} não pode estar em branco`)
            valid = false
        }
        if(campo.classList.contains('cpf')){
            if(!validaCPF(campo)) valid = false
        }
        if(campo.classList.contains('usuario')){
            if(!validaUsuario(campo)) valid = false
        }
    }
    return valid
}
function validaUsuario(campo){
    const usuario = campo.value
    let valid = true
    if(usuario.length > 12 || usuario.length < 3){
        this.criaErro(campo, 'Usuario precisa ter entre 3 e 12 caracteres')
        valid = false
    }
    if(!usuario.match(/[a-zA-Z0-9]+/g)){
        this.criaErro(campo, 'Nome de usuario contem apenas letras ou numeros')
        valid = false
    }
    return true
}
function validaCPF(campo){
    const cpf = new ValidaCPF(campo.value)
    console.log(cpf)

    if(!cpf.valida()){
        this.criaErro(campo, 'CPF invalido')
        return false;
    }
    return true
}
function criaErro(campo, msg){
    const div = document.createElement('div')
    div.innerHTML = msg
    div.classList.add('error-text')
    campo.insertAdjacentElement('afterend', div)
}

const nome = document.querySelector('.nome').value
const sobreNome = document.querySelector('.sobrenome').value
const cpf = document.querySelector('.cpf').value
const senha = document.querySelector('.senha').value
const repetirSenha = document.querySelector('.repetirSenha').value



