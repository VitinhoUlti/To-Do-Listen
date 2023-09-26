const listas = document.getElementById("tarefas");
const botao = document.getElementById("aperte");
const valor = document.getElementById("valor")
let pontos = 0

botao.addEventListener("click", () => {
    const tarefa = document.getElementById("iadicionar").value;
    const tarefabotao = document.getElementById("iadicionar");
    let feitos = 0

    const lista = document.createElement("div");
    const apagar = document.createElement("div");
    const feito = document.createElement("div");
    const pi = document.createElement("p");

    const texto = document.createTextNode(tarefa);
    const textoapag = document.createTextNode("🗑️");
    const textofeito = document.createTextNode("✔️");

    lista.appendChild(texto);
    apagar.appendChild(textoapag);
    feito.appendChild(textofeito);

    pi.appendChild(lista);
    pi.appendChild(apagar);
    pi.appendChild(feito);
    listas.appendChild(pi);

    lista.classList.add("tarefa");
    apagar.classList.add("apagar");
    feito.classList.add("feito");

    tarefabotao.value = '';
    pi.style.display = 'flex';

    apagar.addEventListener("click", () => {
        lista.remove();
        apagar.remove();
        feito.remove();
    })
    feito.addEventListener("click", () => {
        if(feitos==0){
            const textonovo = document.createTextNode('*feito*');
            lista.appendChild(textonovo);
            pontos+=1
            valor.textContent = pontos;
            feitos+=1
        }
        }
    )
})
valor.textContent = pontos
