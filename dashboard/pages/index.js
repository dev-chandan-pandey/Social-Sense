// import Sidebar from '../components/Sidebar';

// export default function Home() {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-grow p-6">
//         <h1 className="text-4xl">Welcome to the Dashboard</h1>
//         {/* Add other components and layout here */}
//       </div>
//     </div>
//   );
// }
//pages/inbox.js
// const Inbox = () => <div>Inbox Page</div>;
// export default Inbox;
// pages/index.js
// pages/index.js
import React from 'react';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div>
        <h1>Home Page</h1>
        <p>Welcome to the Home Page!</p>
      </div>
    </Layout>
  );
};

export default Home;

