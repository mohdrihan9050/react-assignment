import './App.css'
import ListUser from './components/ListUser/ListUser'
// importing json data
import data from './heliverse_mock_data.json'
function App() {
  let domain=[]
  data.forEach((user)=>{
      if (!domain.includes(user.domain)){
        domain.push(user.domain);
      }
  })
  console.log(domain);
  console.log(domain.length);

  return (
    <div className="App">
      <ListUser users={data} domains={domain}/>
    </div>
  )
}

export default App
