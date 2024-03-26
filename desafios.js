const questaoDesafio = prompt('Digite a questão (1 a 11) do desafio: ');

switch (questaoDesafio) {
   case "1":
      alert('Escreva um programa que receba as notas, faça o cálculo da média e imprima o resultado final da média.');

      //declara as variáveis das notas, recebendo elas como números reais.
      var primeiraNota = parseFloat(prompt('Digite a primeira nota (formato: XX.XX): '));
      var segundaNota = parseFloat(prompt('Digite a segunda nota (formato: XX.XX): '));
      var terceiraNota = parseFloat(prompt('Digite a terceira nota (formato: XX.XX): '));


      //calcula e exibe a média das notas.
      var mediaNotas = ((primeiraNota + segundaNota + terceiraNota) / 3).toFixed(2);
      console.log(mediaNotas);
      alert(`A media aritmetica das notas ${primeiraNota}, ${segundaNota} e ${terceiraNota} é ${mediaNotas} .`);

      break;

   case "2":
      alert('Escreva um programa que faça a lógica de programação para organização dos números, receba os números da lista e imprima na tela o menor número digitado e o maior número digitado.');

      //verifica a quantidade de numeros da aposta.
      var quantidadeNumeros = prompt('Digite a quantidade de números para a aposta: ');
      const vetorNumeros = [];

      //alimenta o vetor vetorNumeros com os numeros informados pelo usuario.
      for (let i = 0; i < quantidadeNumeros; i++) {
         let numeroAposta = prompt('Digite o número: ')
         vetorNumeros.push(numeroAposta);
      }

      //ordena os numeros do vetor de forma crescente  e seleciona o menor e o maior numero.
      vetorNumeros.sort((a, b) => a - b); 

      var numeroMenor = vetorNumeros[0];
      var numeroMaior = vetorNumeros[quantidadeNumeros - 1];

      alert(`O menor número é ${numeroMenor} e o maior número é ${numeroMaior} .`);

      break;

   case "3":
      alert('Escreva um programa que faça a ordenação dos frascos de forma crescente.');

      //verifica a quantidade de frascos.
      var quantidadeFrascos = prompt('Digite a quantidade de frascos: ');
      const vetorFrascos = [];

      //alimenta o vetor vetorfrascos com os numeros informados pelo usuario.
      for (let i = 0; i < quantidadeFrascos; i++) {
         let numeroFrasco = prompt('Digite o número do frasco: ')
         vetorFrascos.push(numeroFrasco);
      }

      //ordena os numeros do vetor de forma crescente.
      vetorFrascos.sort((a, b) => a - b);

      alert(`A ordem dos frascos é ${vetorFrascos} .`);

      break;

   case "4":

      alert('Em uma pequena vila, o fazendeiro precisa separar os números primos para determinar quantos novos campos plantar. Ele pede sua ajuda para identificar esses números criando um algoritmo. ');

      //verifica a quantidade de numeros a serem testados.
      var quantidadePrimos = parseInt(prompt('Digite a quantidade de números a serem verificados: '));
      const vetorPrimos = [];

      //alimenta o vetor vetorPrimos com os numeros primos entres os digitados.
      for (let i = 0; i < quantidadePrimos; i++) {
         var numeroPrimo = parseInt(prompt('Digite o número: '));

         if (verificaPrimo(numeroPrimo)) {
            vetorPrimos.push(numeroPrimo);
         }

      }

      //verifica se o numero e primo usando a funcao de modulo.
      function verificaPrimo(numeroPrimo) {
         for (let i = 2; i < numeroPrimo; i++) {
            if (numeroPrimo % i === 0) {
               return false;
            };

         }
         return true;
      }

      alert(`Os números primos sao ${vetorPrimos} .`);

      break;

   case "5":
      alert('Escreva um programa que conte o número de palavras em uma frase fornecida pelo usuário.');

      //recebe o texto digitado e separa em elementos de um vetor por meio do espaco.
      var textoFrase = prompt('Digite o texto: ');
      const palavrasTexto = textoFrase.split(" ");

      alert(`A quantidade de palavras é ${palavrasTexto.length} .`);

      break;

   case "6":
      alert('Escreva um programa para encontrar o fatorial de um número.');

      var numeroFatorial = parseInt(prompt('Digite o número a ser aplicado o fatorial: '));
      var resultado = 1;

      //calcula o fatorial usando um loop para multiplicar do 1 ao numero.
      for (let i = 1; i <= numeroFatorial; i++) {
         resultado = resultado * i;

      }

      alert(`O fatorial de ${numeroFatorial} é ${resultado} .`);

      break;

   case "7":
      alert('Em uma loja de conveniência, um cliente comprou alguns itens e precisa calcular o total da compra. Crie um algoritmo que retorne o valor total');

      //verifica a quantidade de itens.
      var quantidadeItens = prompt('Digite a quantidade de itens: ');
      var valorTotal = 0;
      
      //calcula o valor total usando um loop para percorrer a quantidade itens.
      for (let i = 1; i <= quantidadeItens; i++) {
         let valorItem = prompt(`Digite o valor do item ${i} (formato: XX.XX): `);
         valorTotal = parseFloat(valorTotal) + parseFloat(valorItem);
      }
      

      alert(`O valor total da compra é R$${(valorTotal).toFixed(2)} .`);

      break; 

   case "8":
      alert('Em um sistema de biblioteca, é necessário calcular a multa a ser paga por um usuário que atrasou a devolução de um livro. A multa é de R$ 0,50 por dia de atraso. Crie um algoritmo que faça o cálculo total que o aluno deverá pagar a biblioteca.');

      //recebe o numero de dias e multplica pelo preco da multa.
      var numeroDias = parseInt(prompt('Digite o número de dias de atraso: '));
      var valorMulta = (numeroDias * 0.5).toFixed(2);

      alert(`O valor da multa após ${numeroDias} dias de atraso é de R$${valorMulta} .`);

      break;

   case "9":
      alert('Em um jogo de RPG, o personagem do jogador possui pontos de vida (HP) que são reduzidos quando ele sofre danos dos inimigos. Seu personagem começa com 100 pontos de vida e sofre danos de 20 pontos em um ataque. Crie um algoritmo informando quantos pontos de vida restarão após alguns ataques?');
      
      //recebe o numero de ataques e calcula o HP final.
      var numeroAtaques = parseInt(prompt('Digite o número de ataques recebidos: '));
      var valorVida = 100 - (20 * numeroAtaques);
      
      //verifica se o personagem ainda tem HP suficiente ou se morreu.
      if (valorVida > 0) {
         alert(`A quantidade de vida após ${numeroAtaques} ataques  é de ${valorVida}HP. Continue a campanha, jovem guerreiro!`);
      } else {
         alert(`A quantidade de vida após ${numeroAtaques} ataques  é de 0HP. Voce foi de base, jovem guerreiro!`);
      }

      break;

   case "10":
      alert('Desenvolver um programa para contar o número de letras maiúsculas de uma string.');

      var textoMaiusculas = prompt('Digite o texto: ');
      const verificadorMaiusculas = /[A-Z]/;
      var quantidadeMaiusculas = 0;
      
      //verifica a capitalizacao da letra usando um loop para percorrer a string e comparando a letra com a expressao regular das letras maisuculas.
      for (let i = 0; i < textoMaiusculas.length; i++) {
         if (textoMaiusculas[i].match(/[A-Z]/)) {
            quantidadeMaiusculas = quantidadeMaiusculas + 1;
         };
         
      }

      alert(`A quantidade de letras maiusculas é ${quantidadeMaiusculas} .`);

      break;

   case "11":
      alert('Crie uma lógica para calcular a idade de uma pessoa. Essa lógica deverá receber um valor de ano de nascimento no formato “yyyy-MM-dd” e deverá retornar o número da idade da pessoa como resultado.');

      //separa os itens da data de nascimento.
      const dataNascimento = prompt('Digite a data de nascimento (formato: AAAA-MM-DD): ');
      var vetorData = dataNascimento.split("-");
      const anoNascimento = vetorData[0];
      const mesNascimento = vetorData[1];
      const diaNascimento = vetorData[2];
      
      //separa os itens da data atual.
      const dataAtual = new Date();
      const anoAtual = dataAtual.getFullYear();
      const mesAtual = dataAtual.getMonth() + 1;
      const diaAtual = dataAtual.getDate();

      var idade = 0;

      //calcula a idade comaparando os itens da data atual com a data de nascimento.
      if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
         idade = anoAtual - anoNascimento - 1;
      } else {
         idade = anoAtual - anoNascimento;
      }

      alert(`A idade é ${idade} anos.`);

      break;

   default:
      alert('O termo digitado não corresponde a nenhuma das questoes.');

      break;

}
