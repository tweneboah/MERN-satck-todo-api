const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    const connected = await mongoose.connect(
      'mongodb+srv://todo:Kcu63T1skcAZAg0G@todo-mern.jndha.mongodb.net/todo-mern?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    );
    console.log(`MongoDb Connected successfully`);
  } catch (error) {
    console.log(`Error occurred, ${error.message}`);
  }
};

module.exports = { dbConnect };
