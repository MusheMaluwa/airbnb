// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/airbnbClone';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Define Schemas and Models
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
});
const User = mongoose.model('User', userSchema);

const listingSchema = new mongoose.Schema({
    title: String,
    description: String,
    img: String,
    price: String,
    bath_num: Number,
    bed_num: Number,
    zip: Number,
    address: String,
    city: String,
    street: String,
    sq_ft: Number,
    hostEmail: String,
});
const Listing = mongoose.model('Listing', listingSchema);

const bookingSchema = new mongoose.Schema({
    listingId: mongoose.Schema.Types.ObjectId,
    userId: mongoose.Schema.Types.ObjectId,
    startDate: String,
    endDate: String,
});
const Booking = mongoose.model('Booking', bookingSchema);

// Routes

// User Routes
app.post('/api/register', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: 'Failed to register user' });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user && user.password === password) {
            res.json(user);
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to log in' });
    }
});

// Listing Routes
app.get('/api/listings', async (req, res) => {
    try {
        const listings = await Listing.find();
        res.json(listings);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch listings' });
    }
});

app.post('/api/listings', async (req, res) => {
    try {
        const newListing = new Listing(req.body);
        await newListing.save();
        res.status(201).json(newListing);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create listing' });
    }
});

// Booking Routes
app.post('/api/bookings', async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create booking' });
    }
});

app.get('/api/bookings', async (req, res) => {
    try {
        const bookings = await Booking.find().populate('listingId userId');
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch bookings' });
    }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
