import { faker } from '@faker-js/faker';

export function gerarDadosUsuario() {
  const nomeCompleto = faker.person.fullName(); // Nome completo
  const primeiroNome = nomeCompleto.split(" ")[0]; // Primeiro nome
  const email = `${primeiroNome}${Math.floor(Math.random() * 1000)}@teste.com.br`; // Email único
  const senha = "123456";
  const admin = "true";

  return { nomeCompleto, email, senha, admin };
}


export function gerarDadosProduto(nomeFixo = '') {
  const nome = nomeFixo || `Produto-${faker.commerce.productName()}`;
  const preco = faker.number.int({ min: 1, max: 1000 });
  const descricao = faker.commerce.productDescription();
  const quantidade = faker.number.int({ min: 1, max: 100 });

  return { nome, preco, descricao, quantidade };
}