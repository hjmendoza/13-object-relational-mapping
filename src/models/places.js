'use strict';

import mongoose from 'mongoose';

const placesSchema = mongoose.Schema({
  name: { type:String, required:true },
  city: { type:String, uppercase:true, required:true },
});

export default mongoose.model('places', placesSchema);