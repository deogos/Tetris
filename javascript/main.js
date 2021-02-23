const canvas = document.getElementById('painel');
const ctx = canvas.getContext('2d');

ctx.canvas.width = COLUNA*TAM_BLOCK;
ctx.canvas.height = LINHA*TAM_BLOCK;

ctx.scale(TAM_BLOCK,TAM_BLOCK);
