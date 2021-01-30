
import Header from './components/header/Header';
import SearchBox from './components/search/Search';
import Card from './components/cards/Card';


function App() {
  var rows = [];
  for (var i = 0; i < 10; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(<Card key={i} />);
}
  
  return (
    <div className="App">
      
        <Header/>
        <SearchBox/>
        
        {rows}
        
    </div>
  );
}

export default App;
