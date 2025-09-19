require('dotenv').config();

const mongoose = require('mongoose');

const connectDB = async () => {
try {
await mongoose.connect(process.env.MONGODB_URL);
console.log('MongoDB conectado correctamente');
} catch (error) {
console.error('Error conectando a MongoDB:', error.message);
}
};

module.exports = connectDB;