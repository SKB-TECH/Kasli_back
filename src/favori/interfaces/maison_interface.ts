import { mezon, parcel } from "../favori_enum/favori_enum";

export interface mainson {
  type: mezon;
  datails?: {
    chambre?: number;
    salon?: number;
    cuisine?: number;
    toilette?: string;
  };
  adresse?: {
    ville?: string;
    commune?: string;
    quartier?: string;
    avenue?: string;
    numero?: string;
  };
  mesure?: {
    type: parcel;
    largeur?: number;
    longeur?: number;
  };
  prix: string;
}
