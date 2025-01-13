import mongoose from 'mongoose';

// Connect to MongoDB
const uri = 'mongodb://localhost:27017/delplata';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define a schema for properties
const propertySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true }
});

// Create a model for properties
const Property = mongoose.model('Property', propertySchema);

export default Property;
