import mongoose from 'mongoose'
import { URL } from '../config/env.js'

if (!URL) {
    console.error('Please define the Database URL');
    process.exit(1);
}

const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://akshayguleria700:A1k2s3h4a5y6@cluster0.rmyuwxd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000, // fail after 5 sec if cannot connect
        });
        console.log('✅ Connected to database');
    }
    catch (error) {
        console.error('❌ Database connection error:', error);
        process.exit(1);
    }
}

export default connect;
