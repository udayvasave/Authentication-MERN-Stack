import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username : {type: String, required: true},
    email : { type: String, required:true, unique :true},
    password: {type: String, required: true }
})

const UserModel = mongoose.model("user", userSchema)

export {UserModel as User}


// Line 1: This line imports the Mongoose library, allowing the code to use Mongoose's functionality for interacting
//  with MongoDB databases.

// Line 3-7: Here, a Mongoose schema is defined for a user document. The schema specifies the structure of the
//  document, including the fields username, email, and password, each with their respective data types (String),
//   and additional properties such as required (which ensures these fields must be present) and unique
//    (which ensures each value in these fields is unique within the collection).

// Line 9:This line creates a Mongoose model named UserModel based on the userSchema schema. The model 
// represents a collection in the MongoDB database. In this case, it represents a collection named "user".