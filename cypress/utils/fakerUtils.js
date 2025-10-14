import { faker } from '@faker-js/faker';

export function gerarDadosUsuario() {
  const nomeCompleto = faker.person.fullName(); // Nome completo
  const primeiroNome = nomeCompleto.split(" ")[0]; // Primeiro nome
  const email = `${primeiroNome}${Math.floor(Math.random() * 1000)}@teste.com.br`; // Email único
  const senha = "123456";
  const admin = "true";

  return { nomeCompleto, email, senha, admin };
}


