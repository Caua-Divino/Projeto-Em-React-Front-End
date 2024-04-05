import service from "./service"

// Create
function adicionar(produto){
    return new Promise((resolve, reject) => {
        service.post('/produtos', produto)
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}

// Read
function obter(){
    return new Promise((resolve, reject) => {
        service.get('/produtos')
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}

// Update
function atualizar(produto){
    return new Promise((resolve, reject) => {
        service.put(`/produtos/${produto.id}`, produto)
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}

// Delete
function excluir(id){
    return new Promise((resolve, reject) => {
        service.delete(`/produtos/${id}`)
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}

export default {
    adicionar,
    obter,
    atualizar,
    excluir
}