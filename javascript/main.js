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

document.addEventListener('keydown',event =>{
    if (movimento[event.keyCode]){
        event.preventDefault();

        let p = movimento[event.keyCode](painel.peca);

        if(painel.validar(p)){
            painel.peca.mover(p);

            ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);

        }
    }

})

let p = movimento [event.keyCode] (painel.peca);

if (event.keyCode === KEY.SPACE) {
    while (painel.validar(p)) {
        painel.peca.mover(p);
        p = movimento[KEY.DOWN] (painel.peca);
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        
        painel.peca.desenho();
    }
    
}

if (painel.validar(p)) {
    painel.peca.mover(p);
}