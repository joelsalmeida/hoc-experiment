import './App.css';
import Comments from './components/Comments';
import HOCList from './components/HOCList';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      {HOCList(Posts, 'posts')}
      {HOCList(Comments, 'comments')}
    </div>
  );
}

export default App;
