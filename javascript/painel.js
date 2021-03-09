class PAINEL{
    reset(){
        this.grid = this.getPainelVazio();

    }
}
getPainelVazio(){
    return Array.from(
      {lenght:LINHA}, () => Array(COLUNA).fill(0)
    );
}

