import React from 'react'

function Home() {
    return (
        <div className="jumbotron">
            <h1 className="display-3">CRUD!</h1>
            <p className="lead">
                Sistema realiza as 4 operaçãoes do CRUD, criação, atualização visualização, e remoção do produto levando em consideração o SKU como "chave primaria" não sendo possivel alteração do mesmo. Projeto realizado para 2º Bimestre do 6º Semestre do Curso de Análise e desenvolvimento de sistemas.
            </p>
            <p>
                Para realizar o cadastro basta clicar em 'Cadastro' na navbar, para visualização remoção ou atualização do produto bastar ir em 'Consulta'. Dados ficam salvos no localStorage do navegador.
            </p>
            <p>
                Nome: Matheus Oliveira Moizeis
            </p>
            <hr className="my-4" />
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Cadastrar</a>
            </p>
        </div>
    )
}

export default Home