// This is basically a model for the cards that we are saving
// This is sort of what an Entity Framework model would look like.

import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    _id: Object,
    path: String
})

// mongoose.model(tableName, schema from above) 
export default mongoose.model('polly-picker', cardSchema);