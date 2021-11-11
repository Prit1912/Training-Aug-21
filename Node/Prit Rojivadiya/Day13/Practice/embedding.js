const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground1')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

  const authorSchema = new mongoose.Schema({
    name: String,
    bio: String,
    website: String
  })

const Author = mongoose.model('Author',authorSchema);

/*
const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  author: {
      type: authorSchema,
      required: true
  }
}));

async function createCourse(name, author) {
  const course = new Course({
    name, 
    author
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function updateAuthor(courseId){
    const course = await Course.updateOne({_id: courseId},{
        $set: {'author.name':'Prit Rojivadiya'}
    })
}

async function listCourses() { 
  const courses = await Course.find()
  console.log(courses);
}


// createCourse('React Course', new Author({name: "Man"}));

// updateAuthor('618ca61febf50ca22c03fda2')

listCourses();
*/


// -------------- for multiple authors ------------------------//

const Course = mongoose.model('Course', new mongoose.Schema({
    name: String,
    authors: [authorSchema]
  }));
  
  async function createCourse(name, authors) {
    const course = new Course({
      name, 
      authors
    }); 
    
    const result = await course.save();
    console.log(result);
  }
  
  async function updateAuthor(courseId,authorId){
    const course = await Course.findById(courseId);
    const author = course.authors.id(authorId);
    author.name = 'Prit Rojivadiya';
    // const course = await Course.findOneAndUpdate({$and: [{_id: courseId},{"authors.name": "Prit"}] },{
    //     $set: {"authors.$.name": "Prit R"}
    // })
    // console.log(course);
    course.save()
  }
  
  async function listCourses() { 
    const courses = await Course.find()
    console.log(courses);
  }

  async function addAuthor(courseId,author){
      const course = await Course.findById(courseId);
      course.authors.push(author);
      course.save()
  }
  
  async function removeAuthor(courseId,authorId){
      const course = await Course.findById(courseId);
      const author = course.authors.id(authorId);
      author.remove()
      course.save()
  }

//   updateAuthor('618cb0e4cb9832fae06ac0f3','618cb0e4cb9832fae06ac0f1')

//   removeAuthor('618cb0e4cb9832fae06ac0f3','618cb447088bfec8f51f4f0b')

//   addAuthor('618cb0e4cb9832fae06ac0f3',new Author({name: 'Tirth'}))
  
  
//   createCourse('React Course', [
//       new Author({name: "Prit"}),
//       new Author({name: "Man"})
//     ]);
  
  // updateAuthor('618ca61febf50ca22c03fda2')
  
  listCourses();