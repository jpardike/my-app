import './App.css';
import Navbar from './components/Navbar';
import UserCard from './components/UserCard';
import Post from './components/Post';

function App() {
  const username = 'Johnny';
  const userObj = {
    name: 'John',
    email: 'jdoe@gmail.com',
    date: '1/2/2010',
  }

  const post1 = {
    title: 'React is the ONLY frontend library.... fight me.',
    author: 'John Doe',
    date: '1/2/2010',
    body: 'This is the body for the first post...'
  };
  const post2 = {
    title: 'Angular is the ONLY frontend framework.... fight me.',
    author: 'John Doe',
    date: '1/2/2010',
    body: 'This is the body for the first post...'
  };

  const posts = [
    {
      title: 'React is the ONLY frontend library.... fight me.',
      author: 'John Doe',
      date: '1/2/2010',
      body: 'This is the body for the first post...'
    },
    {
      title: 'Angular is the ONLY frontend framework.... fight me.',
      author: 'John Doe',
      date: '1/2/2010',
      body: 'This is the body for the first post...'
    }
  ];

  const renderPosts = posts.map((postObj, index) => {
    return <Post key={index} post={postObj} />
  });
  
  return (
    <div>
      <Navbar username={username} />
      <div className="container">
        {/* <h1>Users</h1>
        <UserCard user={userObj} /> */}
        {/* <Post post={post1} />
        <Post post={post2} /> */}
        {renderPosts}
      </div>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div>
//       <h1>Welcome to react!</h1>
//       <p>This is awesome!</p>
//     </div>
//   );
// }

