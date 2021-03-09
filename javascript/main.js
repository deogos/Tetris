const canvas = document.getElementById('painel');
const ctx = canvas.getContext('2d');

ctx.canvas.width = COLUNA*TAM_BLOCK;
ctx.canvas.height = LINHA*TAM_BLOCK;

ctx.scale(TAM_BLOCK,TAM_BLOCK);

let painel = new PAINEL()

function play(){
    painel.reset();
    console.table(painel.grid);
    let peca = new Peca(ctx);
    peca.desenho();

    painel.peca = peca;
    console.table(painel.grid);

}
