// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
// Initialize the app
const app = express();
// mushe-backend 
// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoURI =
  "mongodb+srv://maluwamushem:CRJoHt0ySDU5fe3L@Airbnbapp.eittp.mongodb.net/Airbnbapp?retryWrites=true&w=majority";
mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define Schemas and Models
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
});
const User = mongoose.model("User", userSchema);

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
const Listing = mongoose.model("Listing", listingSchema);

const bookingSchema = new mongoose.Schema({
  listingId: mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId,
  startDate: String,
  endDate: String,
});
const Booking = mongoose.model("Booking", bookingSchema);

// Routes

// User Routes

app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email is already registered." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone
    });
    await newUser.save();

    // Exclude password from response
    const { password: _, ...userWithoutPassword } = newUser.toObject();
    res.status(201).json(userWithoutPassword);
  } catch (err) {
    res.status(500).json({ error: "Failed to register user" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Exclude password from response
    const { password: _, ...userWithoutPassword } = user.toObject();
    res.status(200).json(userWithoutPassword);
  } catch (err) {
    res.status(500).json({ error: "Failed to log in" });
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json(users); // Send the users data as a JSON response
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" }); // Send error response if something goes wrong
  }
});

// Listing Routes
app.get("/api/listings", async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch listings" });
  }
});

app.post("/api/listings", async (req, res) => {
  try {
    const newListing = new Listing(req.body);
    await newListing.save();
    res.status(201).json(newListing);
  } catch (err) {
    res.status(500).json({ error: "Failed to create listing" });
  }
});

// Booking Routes
// app.post("/api/bookings", async (req, res) => {
//   try {
//     const newBooking = new Booking(req.body);
//     await newBooking.save();
//     res.status(201).json(newBooking);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to create booking" });
//   }
// });

// app.get('/api/bookings', async (req, res) => {
//     try {
//         const bookings = await Booking.find().populate('listingId userId');
//         res.json(bookings);
//     } catch (err) {
//         res.status(500).json({ error: 'Failed to fetch bookings' });
//     }
// });

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
