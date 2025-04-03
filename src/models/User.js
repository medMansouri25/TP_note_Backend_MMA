const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Le nom est obligatoire"] }, // ✅ Message d'erreur ajouté
    email: { type: String, required: [true, "L'email est obligatoire"], unique: true },
    password: { type: String, required: [true, "Le mot de passe est obligatoire"] },
    address: { type: String },
    createdAt: { type: Date, default: Date.now }
}, { collection: "mma-user" }); // ✅ Force le stockage dans la bonne collection

// Hash du mot de passe avant sauvegarde
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Vérification du mot de passe
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);

