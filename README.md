# CursoVueJs
Curso Vue.js

## Conteúdos abordados:
- Simulando a instância Vue
- Várias formas de montar a instância Vue, utilizando o método $mount() e componentes
- Atributo 'ref'
- Para que serve o atributo $data
- Criando várias instâncias Vue
- Criando instâncias Vue externamente
- Virtual DOM
- Ciclo de vida da instância Vue

## O que é virtual DOM?
É o espelhamento da DOM física que existe no navegador. A principal utilidade da virtual DOM é garatir maior performance na consulta e atualização de elementos da DOM no âmbito do Javascript. Por exemplo, Se eu tiver uma lista de 1000 elementos numa página e deseja alterar só o 500º elemento, em vez de atualizar toda a lista da DOM para renderizar uma nova lista de 1000 elementos todos novos, ele só monitora e atualiza esse elemento que foi modificado (se necessário) na DOM real. Vuejs possui uma virtual DOM que é uma camada intermediária entre a DOM real e a da instância Vue. O Vue monitora o estado do Vue, ou seja, quais dados tiveram mudanças, e verifica se tais mudanças
impactaram na DOM virtual, que por consequência impactaria na DOM real. Em caso afirmativo, atualiza o dado na DOM
real.
 

