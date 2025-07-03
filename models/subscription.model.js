import mongoose from 'mongoose'
const subSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Name is Required'],
        trim: true,
        minLength: 3,
        maxLength:100
    },
    price: {
        type: Number,
        required: [true, 'Subscription price is required'],
        min: [0, 'Price must be greater than 0']
    },
    currency : {
        type: String,
        enum: ['USD', 'INR', 'EUR'],
        default:'INR'
    },
    frequency: {
        type: String,
        enum: ['daily', 'weekly', 'monthly','yearly'],
    },
    category: {
        type: String,
        enum: ['sports', 'news', 'entertainment', 'lifestyle', 'technology', 'finance', 'politics', 'other'],
        required:true
    },
    paymentMethod: {
        type: String,
        required: true,
        trim:true
    },
    status: {
        type: String,
        enum: ['active', 'cancelled', 'expired'],
        default:'active'
    },
    startDate: {
        type: Date,
        required: true,
        validate: {
            validator: (value) => value <= new Date(),
            message: "Start date must be in the past"
        }
    },
    renewalDate: {
        type: Date,

        validate: {
            validator: function (value) {
                value > this.startDate
            },
            message:'Renewal date must be after the start date'
        }
    },
    //taking user as a reference
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index:true,
    }

}, { timestamps: true })


//auto calculate renewal date if missing
subSchema.pre('save', function (next){
    if (!this.renewalDate) {
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 38,
            yearly: 365,
        };
        //suppose january month is going on 1st jan sub is started...so from this logic monthly renewal date would be 31st
        this.renewalDate = new Date(this.startDate)
        const daysToAdd = renewalPeriods[this.frequency] || 30;
        this.renewalDate.setDate(this.renewalDate.getDate() + daysToAdd);
    }
    if (this.renewalDate < new Date()) {
        this.status='expired'
    }
    next()
})


const subscriptions= mongoose.model('Subscriptions', subSchema);
export default subscriptions;
