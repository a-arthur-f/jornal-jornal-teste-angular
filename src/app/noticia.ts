export interface Noticia {
    cod_noticia: number;
    titulo: string;
    texto: string;
    resumo: string;
    dt_criacao: string;
    dt_atualizacao: string;
    img_url: string;
}

export interface NoticiasArray {
    noticias: Noticia[];
}