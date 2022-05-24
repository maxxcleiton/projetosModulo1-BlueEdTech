//Tenho que obedecer ao CRUD

// R - READ =>
// <Função de lista de Paletas>
const baseUrl = "https://el-geladon-backend-by-ip.herokuapp.com/paletas";

async function findAllPaletas() {
  const response = await fetch(`${baseUrl}/find-paletas`);

  const paletas = await response.json();
  console.log('paletas do findallpaletas', paletas)

  paletas.forEach((paleta) => {
    let isEdit = true
    document.getElementById("paletaList").insertAdjacentHTML(
      "beforeend",
      `<div class="PaletaListaItem" id="PaletaListaItem_${paleta._id}"><div>

            <div class="PaletaListaItem__sabor">${paleta.sabor}</div>
            <div class="PaletaListaItem__preco">R$ ${paleta.preco.toFixed(
              2
            )}</div>
            <div class="PaletaListaItem__descricao">${paleta.descricao}</div>

          <div class="PaletaListaItem__acoes Acoes">
          <i id=${paleta._id} onclick="abrirModal(${isEdit})">editar</i>
            <button class="Acoes__deletar" id=${paleta._id} onclick="deletePaleta()">deletar</button>
        </div>
            <img class="PaletaListaItem__foto" src=${
              paleta.foto
            } alt=${`Paleta de ${paleta.sabor}`} />
        </div>`
    );
  });
};

findAllPaletas();
// </Função de lista de Paletas>
// </= R - READ 


// SEARCH =>
// <Função de procura de Paletas pelo ID>
// Aqui será acionada pelo botão
const findPaletaById = async () => {
    const id = document.getElementById("idPaleta").value;
    console.log('id do findPaletaById : ', id)
    const response = await fetch(`${baseUrl}/find-paleta/${id}`);
    const paleta = await response.json();
    console.log('paleta do findPaletaById: ', paleta)
    let isEdit = true
    const paletaEscolhidaDiv = document.getElementById("paletaEscolhida");
  
    paletaEscolhidaDiv.innerHTML = `<div class="PaletaListaItem" id="PaletaListaItem_${paleta._id}"><div>
      
        <div class="PaletaCardItem__sabor">${paleta.sabor}</div>
        <div class="PaletaCardItem__preco">R$ ${paleta.preco.toFixed(2)}</div>
        <div class="PaletaCardItem__descricao">${paleta.descricao}</div>
      <div class="PaletaListaItem__acoes Acoes">
        <button class="Acoes__editar fa-solid fa-pen-to-square"id=${paleta._id}onclick="abrirModalCadastro(${isEdit})">editar</button>
        <button class="Acoes__deletar" onclick="deletePaleta(${paleta._id})">deletar</button>
        </div>
        <img class="PaletaCardItem__foto" src=${
          paleta.foto
        } alt=${`Paleta de ${paleta.sabor}`} />
    </div>`;
  };
  // </Função de procura de Paletas pelo ID>
// </= SEARCH

// C - CREATE =>
// Modal Open and Close = CREATE
async function abrirModalCadastro(isEdit = false) {
if(isEdit){
  document.querySelector("#title-header-modal").innerText = "Atualizar uma paleta"
  document.querySelector("#button-form-modal").innerText = "Atualizar"
  
  // console.log("event.target", event.target.id) // identificar o id da paleta => explico melhor segunda sobre eventos. 
  // console.log("isEdit", isEdit)

  const id =   event.target.id
  // console.log("id", id)
  
  const response = await fetch(`${baseUrl}/find-paleta/${id}`);
  const paleta = await response.json();

  document.querySelector("#id").value = paleta._id;
  document.querySelector("#sabor").value = paleta.sabor;
  document.querySelector("#preco").value = paleta.preco;
  document.querySelector("#descricao").value = paleta.descricao;
  document.querySelector("#foto").value = paleta.foto;
} 
else {
  document.querySelector("#title-header-modal").innerText = "Cadastrar uma paleta"
  document.querySelector("#button-form-modal").innerText = "Cadastrar"

}
document.querySelector(".modal-overlay").style.display = "flex";
}

function fecharModalCadastro() {
document.querySelector(".modal-overlay").style.display = "none";

// Zerar campos após fechar (ou antes)
document.querySelector("#sabor").value = "";
document.querySelector("#preco").value = 0;
document.querySelector("#descricao").value = "";
document.querySelector("#foto").value = "";
// // Zerar campos após fechar (ou antes)
}
// //Modal Open and Close
// </= C - CREATE

// function fecharModalUpdate() {
//   document.querySelector("#overlay-update").style.display = "none";

//   // Zerar campos após fechar (ou antes)
//   document.querySelector("#sabor").value = "";
//   document.querySelector("#preco").value = 0;
//   document.querySelector("#descricao").value = "";
//   document.querySelector("#foto").value = "";
//   // // Zerar campos após fechar (ou antes)

// }
// //Modal Open and Close = UPDATE


// Cadastrar paleta no modal
  async function createPaleta() {
    const id = document.getElementById("id").value;
    const sabor = document.querySelector("#sabor").value;
    const preco = document.querySelector("#preco").value;
    const descricao = document.querySelector("#descricao").value;
    const foto = document.querySelector("#foto").value;
  
    const paleta = {
      id,
      sabor,
      preco,
      descricao,
      foto,
    };
    

// Fetch do response
const modoEdicaoAtivado = !!id

const endpoint = baseUrl + (modoEdicaoAtivado ? `/update/${id}` : '/create');

    const response = await fetch(endpoint, {

        method: modoEdicaoAtivado ? "put" : "post",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(paleta),
      });
    
      const novaPaleta = await response.json();

let isEdit = true
  const html = `<div class="PaletaListaItem" id="PaletaListaItem_${paleta._id}"><div>


  <div class="PaletaListaItem__sabor">${novaPaleta.sabor}</div>
  <div class="PaletaListaItem__preco">R$ ${novaPaleta.preco.toFixed(2)}</div>
  <div class="PaletaListaItem__descricao">${novaPaleta.descricao}</div>
<div class="PaletaListaItem__acoes Acoes">
<i class="Acoes__editar fa-solid fa-pen-to-square"id=${paleta._id} onclick="abrirModal(${isEdit})"></i>
<button class="Acoes__deletar" id=${paleta._id} onclick="deletePaleta()">deletar</button>
</div>
</div>
<img class="PaletaListaItem__foto" src=${
    novaPaleta.foto
  } alt=${`Paleta de ${novaPaleta.sabor}`} />
</div>`;
// <Se o modoEdicaoAtivado for false>
    if (modoEdicaoAtivado) {
    document.getElementById(`PaletaListaItem_${id}`).outerHTML = html;
  } else {
    document.getElementById("paletaList").insertAdjacentHTML("beforeend", html);
  }
// <//Se o modoEdicaoAtivado for false>

document.getElementById("id").value = "";

// Fecha o modal e zera os campos
fecharModalCadastro()
// //Fecha o modal e zera os campos
document.location.reload(true)

};
// //Cadastrar paleta no modal

const deletePaleta = async () => {
    const id =   event.target.id  
    console.log("id", id)
  // const id = document.getElementById("idPaleta").value;
  // console.log(id)
  // const response = await fetch(`${baseUrl}/find-paleta/${paleta.id}`);
  // const paleta = await response.json();


    const response = await fetch(`${baseUrl}/delete/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    });
    const result = await response.json();
    alert(result.message)
    document.getElementById("paletaList").innerHTML = ""
    document.location.reload(true)
  };