import { Schema, model, models } from "mongoose";
const contactSchema = new Schema({
    name: String,
    email: String,
    message: String,
},
    {
        timestamps: true
    }
)
const ContactModel = models.msgs || model("msgs", contactSchema)
export default ContactModel