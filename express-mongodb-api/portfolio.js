const mongoose = require('mongoose');

// MongoDB connection
mongoose.connect('mongodb+srv://tuffourjoel1:dnJvdIjI8sQPh8hg@portfolio.tfibyki.mongodb.net/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Define schema and model
const AboutSchema = new mongoose.Schema({
  name: String,
  description: String,
  background: {
    education: [
      {
        degree: String,
        field: String,
        institution: String
      }
    ],
    current_studies: String
  }
});

const About = mongoose.model('About', AboutSchema);

// Add document
const addAboutData = async () => {
  try {
    await About.deleteMany(); // Clear existing data
    await About.create({
      name: "Portfolio About",
      description: "I'm a web developer and designer. I love building apps that solve real-world problems and are delightful to use. My specialties include JavaScript, TypeScript, Tailwind, and CSS.",
      background: {
        education: [
          {
            degree: "Bachelor's Degree",
            field: "Information Technology",
            institution: "Kwame Nkrumah University of Science and Technology"
          },
          {
            degree: "Graduate Certificate",
            field: "Web Development",
            institution: "Humber College"
          }
        ],
        current_studies: "Pursuing a graduate certificate in web development at Humber College"
      }
    });
    console.log('About data added successfully');
  } catch (err) {
    console.error('Error adding about data', err);
  }
};

addAboutData();
