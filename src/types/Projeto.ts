export interface Projeto{
    id:number;
    titulo: string;
    categoria: 'Flutter' | "React" | "Vue" | "Html e CSS" | "Figma";
    descricaoCurta: string;
    descricaoDetalhada: string;
    imagem: string[];
    codigoUrl?: string;

}