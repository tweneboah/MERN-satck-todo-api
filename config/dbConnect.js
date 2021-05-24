const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    const connected = await mongoose.connect(
      'mongodb+srv://church:JOPFomdqwf3F9wM8@my-church-demo.1rtsv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    );

    console.log(`MongoDB Connected ${connected.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = { dbConnect };
