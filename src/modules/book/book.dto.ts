/*
DTO significa Data Transfer Object.
É um padrão de projeto comum usado para transferir dados
entre camadas de um aplicativo, como entre a camada de serviço
e a camada de controller. Ele é geralmente usado para garantir
a integridade dos dados e evitar a exposição de detalhes de implementação desnecessários.
*/
export type BookDTO = {
  id?: string;
  title: string;
  description: string;
  bar_code: string;
};
