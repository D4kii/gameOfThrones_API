/**********************************************************************************************
 * Objetivo: criar funções para no futuro integra-las a uma API que terá como 
 * objetivo retornar dados de personagens da série Game Of Thrones.
 * Autor: Daniela Lino
 * Data: 05/05/2023
 * Versão: 1.0
 **********************************************************************************************/
//Importando o Json
const casasIntegrantes = require('./json/casas_integrantes.js')

//criando variáveis para receber o caminho feito dentro do JSON
const caminhoCasas = casasIntegrantes.casas;

//Função que recupera uma lista de todas as casas disponíveis no JSON
const getListaCasas = function () {
    const casasArray = caminhoCasas.slice();
    const casasNewJson = {};
    const casasNewArray = [];
    let status = false;

    casasArray.forEach(casas => {
        if (casasArray !== undefined) {
            casas.casas.forEach(element => {

                const dadosCasas = {}

                dadosCasas.id = element.id
                dadosCasas.nome = element.nome
                dadosCasas.lema = element.lema
                dadosCasas.brasao = element.brasao
                dadosCasas.imagem = element.imagem
                dadosCasas.lorde = element.lorde
                dadosCasas.regiao = element.regiao
                dadosCasas.fundacao = element.fundacao

                // casasNewArray.push(dadosCurso);
                casasNewArray.push(dadosCasas)
            });
            status = true;
            casasNewJson.casas = casasNewArray
        } else {
            return status;
        }
    });
    if (status) {
        return casasNewJson;
    } else {
        return status;
    }

};
//Função que recupera uma lista de todos os integrantes de uma casa filtrando pelo nome da casa
const getIntegrantesCasa = function (filtro) {
    const nomeCasa = filtro.toUpperCase()
    const integrantesCasaArray = caminhoCasas.slice();
    const integrantesCasaNewJson = {};
    const integrantesCasaNewArray = [];
    let status = false;

    integrantesCasaArray.forEach(todasCasas => {
        if (integrantesCasaArray !== undefined) {
            todasCasas.casas.forEach(casa => {

                if (casa.nome == nomeCasa) {

                    const dadosIntegrantes = []
                    const dadosCasas = {}

                    dadosCasas.id = casa.id
                    dadosCasas.nome = casa.nome
                    dadosCasas.lema = casa.lema
                    dadosCasas.brasao = casa.brasao
                    dadosCasas.imagem = casa.imagem
                    dadosCasas.lorde = casa.lorde
                    dadosCasas.regiao = casa.regiao
                    dadosCasas.fundacao = casa.fundacao

                    casa.integrantes.forEach(integrantes => {
                        dadosIntegrantes.push(integrantes) 
                    });

                    dadosCasas.integrantes = dadosIntegrantes

                    integrantesCasaNewArray.push(dadosCasas)

                } else {
                    return status
                }

            });
            status = true;
            integrantesCasaNewJson.casas = integrantesCasaNewArray;
        } else {
            return status;
        }
    });
    if (status) {
        return integrantesCasaNewJson;
    } else {
        return status;
    }

};

//Função que recupera uma lista de todas os personagens disponíveis no JSON
const getListaPersonagens = function () {
    const personagensArray = caminhoCasas.slice();
    const personagensNewJson = {};
    const personagensNewArray = [];
    let status = false;

    personagensArray.forEach(todasCasas => {
        if (personagensArray !== undefined) {
            todasCasas.casas.forEach(casa => {

                casa.integrantes.forEach(personagem => {
                    const personagemDados = {}

                    personagemDados.nome = personagem.nome
                    personagemDados.quote = personagem.quote
                    personagemDados.foto_url = personagem.foto_url
                    personagemDados.epoca = personagem.epoca
                    personagemDados.status = personagem.status
                    personagemDados.titulo = personagem.titulo
                    personagemDados.idade = personagem.idade
                    personagemDados.nascimento = personagem.nascimento
                    personagemDados.filhos = personagem.filhos
                    personagemDados.conjuge = personagem.conjuges


                    personagensNewArray.push(personagemDados)

                });
                personagensNewJson.personagens = personagensNewArray

            });
            status = true;
        } else {
            return status;
        }
    });
    if (status) {
        return personagensNewJson;
    } else {
        return status;
    }

};
// console.log(getIntegrantesCasa("LANNISTER"));
// getListaPersonagens()
// getListaCasas()