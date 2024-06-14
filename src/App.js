import { useEffect, useState } from 'react';
import './App.css';

const Loader = ({fullScreen}) => {
  console.log(document.getElementsByClassName("loader"))
  return(
    <div className={fullScreen ? "fullscreen" : "loader-area"}>
      <div className='loader'></div>

    </div>
  )

}

function App() {
  const [isLoading, setIsLoading ] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    }, 5000)
  }, [])

  return (
    <div className="App">
      <h1>Loader</h1>
      { isLoading ? 
      (<Loader fullScreen={false}/>) : 
      (<div>Type something to see the magic</div>)}


    </div>
  );
}


export default App;
