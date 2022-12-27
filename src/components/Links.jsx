import { Routes, Route} from "react-router-dom";
import Home from '../main/home/Home';
import Text from '../main/text/Text';
import Code from '../main/code/Code';
import Capcha from '../main/capcha/Capcha';
import Symbols from '../main/symbols/Symbols';
import Courses from '../main/courses/Courses';
import NF404 from '../main/NF404/404';
import Header from "../header/Header";

import Type from "../main/text/type/type";

function Links() {
    return (
        <>
      <Routes>
        <Route path="/" element={<Header/>}>
        <Route index element={<Home/>}></Route>
        <Route path='text' element={<Text/>}></Route>
        <Route path='text/type' element={<Type/>}></Route>
        <Route path="code" element={<Code/>}></Route>
        <Route path="symbols" element={<Symbols/>}></Route>
        <Route path="capcha" element={<Capcha/>}></Route>
        <Route path="courses" element={<Courses/>}></Route>
        <Route path="*" element={<NF404/>}></Route>
        </Route>
      </Routes>
        </>
    );
  }
  
  export default Links;