import { ListaItem } from './lista-item';
export class Lista {
    id: number;
    title: string;
    creadaEn: Date;
    finalizadaEn: Date;
    terminada: boolean;
    items: ListaItem[];

    constructor( title: string ){
        this.title = title;
        this.creadaEn = new Date();
        this.terminada = false;
        this.items = [];
        this.id = this.creadaEn.getTime();
    }
}