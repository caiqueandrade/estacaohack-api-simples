const fs = require('fs');

exports.listar = (req, res) => {
    console.log('Acessei a rota /clientes');
    res.send('Ok');
}

exports.criar = (req, res) => {
    let cliente = req.body;

    cliente.status = 'Criado';
    cliente.data = new Date;

    res.send(cliente);
    console.log('Processando requisição de um novo cliente.');
}
