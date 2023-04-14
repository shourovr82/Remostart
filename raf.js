const queryData = {
  selectedLanguages: ['English', 'Hindi'],
  locationPreference: 'india',
  softSkills: ['Leader', 'TeamPlayer'],
  selectedSkills: [
    { skillName: 'JavaScript', level: 'Beginner' },
    { skillName: 'Python', level: 'Advance' },
  ],
};
/* eslint-disable new-cap */


// const remoforceSchema = mongoose.Schema({

//     email: {
//         type: String,
//         required: true,
//         unique: true,

//         validate: {
//             validator: allValidator.isEmail,
//             message: (props) => `${props.value} is not valid i.e. not like example@example.com`,
//         },
//         trim: true,
//     },
//     // update profile settings---------------------


//     // skill and job preference---------------------
//     selectedSkills: [
//         {
//             skillName: String,

//             level: {
//                 type: String,

//                 enum: ['Beginner', 'Intermediate', 'Professional'],
//             },
//         },
//     ],
//     softSkills: [String],
//     selectedLanguages: [
//         {
//             language: String,

//             languageLevel: {
//                 type: String,

//                 enum: ['Native Language', 'Advance', 'Intermediate'],
//             },
//         },
//     ],
//     jobPreference: {
//         jobType: {
//             type: String,

//             enum: ['Shadowing', 'Public Job', 'Private Job', 'Internship', 'Gigs', 'Contract'],
//         },
//         jobIndustry: String,
//         jobLevel: {
//             type: String,

//             enum: ['Beginner', 'Intermediate', 'Advance', 'Professional'],
//         },
//         locationPreference: {
//             type: String,

//             enum: ['Work from Home', 'Remote', 'Hybrid', 'Full Time'],
//         },
//     },
//     // education settings---------------

 
//     createdOn: {
//         type: Date,
//         default: Date.now,
//     },
// });
// const User = new mongoose.model('remoforce', remoforceSchema);

// module.exports = User;
