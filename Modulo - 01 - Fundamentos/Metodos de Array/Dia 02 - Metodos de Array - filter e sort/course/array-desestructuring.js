//Como arrays são objetos iteráveis, que têm algumas similaridades com os objetos em JavaScript, você pode estar se perguntando: será que a desestruturação também se aplica a arrays? 🤔

//Esse questionamento é válido, e a resposta é: SIM! Podemos desestruturar arrays da mesma forma que desestruturamos objetos usando a notação para array destructuring.

//Com a array destructuring, você pode especificar quais elementos do array deseja extrair e criar variáveis correspondentes a esses elementos em uma única linha de código.

//Vejamos o exemplo abaixo, onde temos um esquema de transações bancárias:

// Função para processar uma transação bancária
const processTransaction = (transaction) => {
    const [type, amount] = transaction;
    //console.log(type, amount);
  
    if (type === 'deposit') {
      performDeposit(amount);
    } else if (type === 'withdrawal') {
      performWithdrawal(amount);
    } else {
      console.log('Tipo de transação inválida.');
    }
  };
    
  // Função para realizar um depósito
  const performDeposit = (amount) => {
    console.log(`Depósito de ${amount} realizado com sucesso.`);
  };
  
  // Função para realizar um saque
  const performWithdrawal = (amount) => {
    console.log(`Saque de ${amount} realizado com sucesso.`);
  };
  
  // Chamadas da função processTransaction
  processTransaction(['deposit', 1000]); // Depósito de 1000 realizado com sucesso.
  processTransaction(['withdrawal', 500]); // Saque de 500 realizado com sucesso.
  processTransaction(['golpe', 1000000]); // Tipo de transação inválida.


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const person = {
    name: 'João',
    lastName: 'Cavernoso',
    age: 22,
  };
  
  const { nationality } = person;
  console.log(nationality);


//Essa desestruturação funciona? E se funciona, qual o valor que aparece se fizer console.log(nationality)? Copie esse código e verifique o que será impresso. 😉
//Quando tentamos acessar uma propriedade que não existe, o valor retornado é undefined. E se você quisesse dar um valor padrão para alguma chave, caso essa propriedade não existisse no objeto?
//Você consegue atribuir esse valor padrão utilizando default destructuring, que é mais um recurso do ES6. Veja o exemplo:

const person1 = {
    name: 'João',
    lastName: 'Cavernoso',
    age: 22,
  };
  
const { nationality1 = 'Zimbabwean' } = person1;
console.log(nationality1); // Zimbabwean


