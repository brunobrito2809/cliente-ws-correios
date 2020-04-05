const soap = require('soap')

const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl'

soap.createClient(url, (err, client) => {
    if(err){
        console.log(err)
    }else{
        client.consultaCEP({
            cep: '56700000'
        },(err, res) => {
            console.log(res)
        })
    }
})