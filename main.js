const botoes= document.querySelectorAll(".botao");
const texto = document.querySelectorAll(".aba-conteudo")

for(let i=0; i <botoes.length;i++){
       botoes[i].onclick=function(){
          for(let j=0;j<botoes.length;j++){
             botoes[j].classList.remove("ativo");
             texto[j].classList.remove("ativo");
            }
            botoes[i].classList.add("ativo");
            texto[i].classList.add("ativo");
        }
    }
    const contadores = document.querySelectorAll(".contador");
    const tempoObjetivo1 = new Date("2024-12-31t00:00:00");
    let tempoAtual = new Date();
    
    //contadores[0].textContent = tempoObjetivo1 - tempoAtual;
     
    //function calculaTempo(tempoObjetivo) 
        let tempoAtual = new Date();
        let tempoFinal = tempoObjetivo - tempoAtual;
        let segundos = math.floor(tempoFinal/1000);
        let minutos = Math.floor(segundos/60);
        let horas = Math.floor(minutos/60);
        let dias = Math.floor(horas/24);

    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
