let permissao //comum, gerente, diretor
permissao = 'gerente'//aqui muda, um dos 3: comum, gerente, diretor
switch (permissao) {
    case 'comum' :
    console.log('usuario comum')
    break

    case 'gerente' :
    console.log('usuario gerente')
    break

    case 'diretor' :
    console.log('usuario diretor')
    break

    default:
    console.log('Usuário não reconhecido!')
}