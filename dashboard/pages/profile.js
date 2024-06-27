// pages/profile.js
// const Profile = () => <div>Profile Page</div>;
// export default Profile;
// pages/profile.js
import React from 'react';
import Layout from '../components/Layout';
import Profile from '../components/Profile';

const ProfilePage = () => {
  return (
    <Layout>
      <Profile />
    </Layout>
  );
};

export default ProfilePage;
//pages/profile.js
// import React, { useState } from 'react';
// import Layout from '../components/Layout';
// import styles from '../styles/Profile.module.css';

// const Profile = () => {
//   const [user, setUser] = useState({
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john.doe@example.com',
//     phone: '123-456-7890',
//     jobTitle: 'Software Engineer',
//     company: 'Tech Corp'
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value
//     }));
//   };

//   const handleSave = () => {
//     // Save user information (e.g., send to API)
//     alert('Profile saved!');
//   };

//   return (
//     <Layout>
//       <div className={styles.profile}>
//         <h1>Profile</h1>
//         <div className={styles.profileForm}>
//           <label>
//             First Name:
//             <input
//               type="text"
//               name="firstName"
//               value={user.firstName}
//               onChange={handleChange}
//             />
//           </label>
//           <label>
//             Last Name:
//             <input
//               type="text"
//               name="lastName"
//               value={user.lastName}
//               onChange={handleChange}
//             />
//           </label>
//           <label>
//             Email:
//             <input
//               type="email"
//               name="email"
//               value={user.email}
//               onChange={handleChange}
//             />
//           </label>
//           <label>
//             Phone:
//             <input
//               type="tel"
//               name="phone"
//               value={user.phone}
//               onChange={handleChange}
//             />
//           </label>
//           <label>
//             Job Title:
//             <input
//               type="text"
//               name="jobTitle"
//               value={user.jobTitle}
//               onChange={handleChange}
//             />
//           </label>
//           <label>
//             Company:
//             <input
//               type="text"
//               name="company"
//               value={user.company}
//               onChange={handleChange}
//             />
//           </label>
//           <button onClick={handleSave}>Save</button>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Profile;

// const Profile = () => {
//   return (
//     <div>
//       <h1>Profile</h1>
//       <form>
//         <label>First Name:</label>
//         <input type="text" name="firstName" />
//         <label>Last Name:</label>
//         <input type="text" name="lastName" />
//         <label>Email:</label>
//         <input type="email" name="email" />
//         <label>Phone:</label>
//         <input type="tel" name="phone" />
//         <label>Job Title:</label>
//         <input type="text" name="jobTitle" />
//         <label>Company:</label>
//         <input type="text" name="company" />
//         <button type="submit">Save</button>
//       </form>
//     </div>
//   );
// };

// export default Profile;
