import { Route, Routes } from 'react-router-dom';
import './App.css';
import ApiFetch from './Components/ApiFetch';
import Counter from './Components/Counter';
import SearchFilter from './Components/SearchFilter';
import ApiFetchSearch from './Components/ApiFetchSearch';
import DynamicList from './Components/DynamicList';
import DynamicList1 from './Components/DynamicList1';
import SignUp from './Components/SignUp';
import ArraySearch from './Components/ArraySearch';
// import { useContext } from 'react';
// import { ThemeContext } from './Components/ThemeContext';

function App() {

  // const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div className='app'>
    {/* // <div className={`app ${theme}`}>

    //   <div className='app-header'>
    //     <h1>React Theme Switcher</h1>
    //     <button onClick={toggleTheme}>Switch to {theme === "light" ? "Dark" : "Light"} Theme.</button>
    //   </div> */}
      <Routes>
        <Route path='/' element={<ApiFetch/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/search' element={<SearchFilter/>}/>
        <Route path='/apifetchsearch' element={<ApiFetchSearch/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='/dynamicList' element={<DynamicList/>}/>
        <Route path='/dynamicList1' element={<DynamicList1/>}/>
        <Route path='/arraysearch' element={<ArraySearch/>}/>
      </Routes>
    </div>
  );
}

export default App;
