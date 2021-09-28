import Navbar from './components/Navbar/Navbar';
import './App.css';
import TextForm from "./components/TextForm";



function App() {
  return (
    <>
    
    <Navbar title="TextUtils" home="Home"/>
    {/* <Navbar /> */}
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below"/>
    </div>
    
    </>

  );
}

export default App;

