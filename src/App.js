import Links from "./components/Links";
import Footer from "./footer/Footer";

function App() {
  // console.log(navigator.userAgent)
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    console.log("Вы используете мобильное устройство (телефон или планшет).")
    // document.querySelector('footer').style.height ='70px'
  } else {console.log(5)}
  return (
    <>
    <Links/>
    <Footer/>
    </>
  );
};

export default App;
