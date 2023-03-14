import mongoose from 'mongoose';
export const PasajeroSchema = new mongoose.Schema({
    nombre:{type:String, require:true},
    email:{type:String, require:true},
})

PasajeroSchema.index({email:1},{unique:true});