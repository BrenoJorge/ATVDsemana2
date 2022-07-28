//Validar Placa :
var formValidaPlaca = document.querySelector("#formValidaPlaca")
//Adicionando evento submit ao formulário 
formValidaPlaca.addEventListener("submit", function (e) {
    //puxando as tags do html
    let inputPlacaVeiculo = document.querySelector("#inputPlacaVeiculo")
    let RespostaValidarVeiculo = document.querySelector("#RespostaValidarVeiculo")

    //bloqueia o refresh da página 
    e.preventDefault()

    //chamando a função de verificar para criar o texto
    if (validarPlaca(inputPlacaVeiculo.value)) {
        RespostaValidarVeiculo.innerHTML = "Placa Válida"
        RespostaValidarVeiculo.style.color = "green"
    } else {
        RespostaValidarVeiculo.innerHTML = "Placa inválida"
        RespostaValidarVeiculo.style.color = "red"
    }

})

//adicionando evento keyup para adicionar a pontuação
inputPlacaVeiculo.addEventListener("keyup", () => {
    let inputLength = inputPlacaVeiculo.value.length
    if (inputLength == 3) {
        inputPlacaVeiculo.value += "-"
    }
})

//função que valida a placa e retorna true/false
function validarPlaca(placa) {
    if (isNaN(placa[0]) && isNaN(placa[1]) && isNaN(placa[2])) {
        if (isNaN(placa[4]) == false && isNaN(placa[6]) == false && isNaN(placa[7]) == false) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }

}

//validar CPF :

var inputCpf = document.querySelector("#inputCpf")

inputCpf.addEventListener("keyup", function (e) {

    //bloqueia o refresh da página 
    e.preventDefault()

    let RespostaValidarCpf = document.querySelector("#RespostaValidarCpf")
    if (validaCPF(inputCpf.value)) {
        RespostaValidarCpf.innerHTML = "CPF VÁLIDO"
        RespostaValidarCpf.style.color = "green"
        inputCpf.style.borderColor = "green"
    } else if (inputCpf.value == 0) {
        RespostaValidarCpf.innerHTML = ""
        RespostaValidarCpf.style.color = ""
        inputCpf.style.borderColor = ""
    } else {
        RespostaValidarCpf.innerHTML = "CPF INVÁLIDO"
        RespostaValidarCpf.style.color = "red"
        inputCpf.style.borderColor = "red"
    }

})
//Adicionando evento "paste" para verificar quando ocorrer um "colar"
inputCpf.addEventListener("paste", function (e) {
    //bloqueia o refresh da página 
    e.preventDefault()

    let RespostaValidarCpf = document.querySelector("#RespostaValidarCpf")

    if (validaCPF(inputCpf.value)) {
        RespostaValidarCpf.innerHTML = "CPF VÁLIDO"
        RespostaValidarCpf.style.color = "green"
        inputCpf.style.borderColor = "green"
    } else {
        RespostaValidarCpf.innerHTML = "CPF INVÁLIDO"
        RespostaValidarCpf.style.color = "red"
        inputCpf.style.borderColor = "red"
    }
})

//função que valida a placa e retorna true/false
inputCpf.addEventListener("keyup", () => {
    let inputLength = inputCpf.value.length
    if (inputLength == 3 || inputLength == 7) {
        inputCpf.value += "."
    } else if (inputLength == 11) {
        inputCpf.value += "-"
    }
})
//função de verificar cpf
function validaCPF(cpf) {

    let mult
    let soma = 0
    let indice = 0
    let resto

    //primeira conta   
    for (let i = 10; i >= 2; i--) {
        if (indice == 3 || indice == 7 || indice == 11) {
            indice++
            i++

        } else {
            mult = i * cpf[indice]
            soma += mult
            indice++
        }
    }

    resto = (soma * 10) % 11

    if (resto == 10 || resto == 11) {
        resto = 0
    }

    if (resto != cpf[12]) {
        //console.log("Cpf invalido")
        return false
    } else {

        //segunda conta
        indice = 0
        soma = 0
        for (let i = 11; i >= 2; i--) {

            if (indice == 3 || indice == 7 || indice == 11) {
                indice++
                i++

            } else {
                mult = i * cpf[indice]
                soma += mult
                indice++
            }

        }

        resto = (soma * 10) % 11
        if (resto == cpf[13]) {
            //console.log("Cpf valido")
            return true
        } else {
            //console.log("Cpf invalido")
            return false
        }
    }

}

//gerar telefone
var fomrGerarTelefone = document.querySelector("#formGerarNumber")

//puxando formulário do html
fomrGerarTelefone.addEventListener("submit", function (e) {

    //bloqueia o refresh da página 
    e.preventDefault()

    //puxando as tags
    let inputDDD = document.querySelector("#inputDDD")
    let inputQuantidade = document.querySelector("#inputQuantidade")
    let RespostaGerador = document.querySelector("#RespostaGerador")
    //puxando valor dos inputs
    let telefones = gerarTelefones(inputDDD.value, inputQuantidade.value)

    //limpando o textarea parareceber novos valores
    RespostaGerador.innerHTML = ""

    //mudando a cor da font
    RespostaGerador.style.color = "green"
    //percorrendo o vetor telefones
    telefones.forEach(function (telefone) {
        //Adicionando os numeros gerados no textarea
        RespostaGerador.innerHTML += `${telefone}&#10;`
    })
})

//função gerar telefones aleatorios 
function gerarTelefones(ddd, quantidade) {

    let telefones = []
    for (let i = quantidade; i > 0; i--) {
        let phone = `${ddd}-${Math.floor(Math.random() * (99999 - 11111 + 1)) + 11111}-${Math.floor(Math.random() * (9999 - 1111 + 1)) + 1111}`
        telefones.push(phone)
    }
    return telefones
}

//gerar cpfs :

var formGerarCpf = document.querySelector("#formGerarCpf")

formGerarCpf.addEventListener("submit", function (e) {
    //bloqueia o refresh da página 
    e.preventDefault()

    let inputQuantidadeCpf = document.querySelector("#inputQuantidadeCpf")
    let RespostaGeradorCpf = document.querySelector("#RespostaGeradorCpf")
    let cpfs = gerarCPF(inputQuantidadeCpf.value)

    RespostaGeradorCpf.innerHTML = ""
    cpfs.forEach(function (cpf) {
        RespostaGeradorCpf.innerHTML += `${cpf}&#10;`
    })

})

//função gerar cpfs
function gerarCPF(quantidade) {
    let indice = 0
    var cpfs = []

    while (indice != quantidade) {
        let cpfGerado = `${Math.floor(Math.random() * (999 - 000 + 1) + 000)}.${Math.floor(Math.random() * (999 - 000 + 1) + 000)}.${Math.floor(Math.random() * (999 - 000 + 1) + 000)}-${Math.floor(Math.random() * (99 - 00 + 1) + 00)}`
        if (validaCPF(cpfGerado)) {
            cpfs.push(cpfGerado)
            indice++
        }
    }
    return cpfs
}