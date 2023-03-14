import * as mongoose from 'mongoose';
export const VuelosSchema = new mongoose.Schema(
  {
    piloto: { type: String, require: true },
    avion: { type: String, require: true },
    destino: { type: String, require: true },
    fecha: { type: Date, require: true }
   
  },
  {
    timestamps: true,
  },
);
