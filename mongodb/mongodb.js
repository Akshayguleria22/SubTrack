import mongoose from 'mongoose'
import { URL, NODE_ENV } from '../config/env.js'

if (!URL) {
    console.error('Please define the Database URL');
    process.exit(1);
}

const connect = async () => {
    try {
        await mongoose.connect(URL, {
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
