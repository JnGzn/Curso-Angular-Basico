export interface FileItem {
  archivo: File;
  nombreArchivo: string;
  url?: string;
  isSubiendo?: boolean;
  progreso?: number;
}
