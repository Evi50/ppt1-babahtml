import React, {Component} from 'react';
import '../style/style.css';

class App extends Component{
  render (){
    return(
      <div className="wrapper">
        <div className="header">
          <div className="navbar">
            <div className="logo">
              <img className="imgfluid" src={require('../logo/babastudio-logo.png')}/>
            </div>
            <div className="menu">
              <ul>
                <li><a>Home</a></li>
                <li><a>Blogs</a></li>
                <li><a>Gallery</a></li>
                <li><a>Kontak</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* {End Header} */}
        <div className="slider">
          <div className="slidercontent">
            <img className="imagesslider" src={require('../images/banner-desktop.jpg')} />
          </div>
        </div>
        {/* {End slider} */}
        <h2 className="dataprestasi">
          <div className="content">
            <div className="content-gambar">
              <div className="image">
                <img className="imageslider" src={require('../images/21cineplex.jpg')}  />
                <div className="contentimage">
                  <h2 className="fontimage">www.21cineplex</h2>
                </div>
              </div>
              <div className="image">
                <img className="imageslider" src={require('../images/bpn.jpg')} />
                <div className="contentimage">
                  <h2 className="fontimage">www.bpn.go.id</h2>
                </div>
              </div>
              <div className="image">
                <img className="imageslider" src={require('../images/republika.jpg')} />
                <div className="contentimage">
                  <h2 className="fontimage">www.republika.co.id</h2>
                </div>
              </div>
            </div>
            {/* {End of content-gambar} */}
            <div className="content-gambar">
              <h2 className="dataprestasi">Tempat Kursus Babastudio</h2>
              <div className="content-youtube">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k1OWLK0Yhc8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscape; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className="content-map">
                <iframe src="https://www.google.co.id/maps/place/Kampus+Babastudio+Permata+Hijau/@-6.2214465,106.7792426,16z/data=!4m8!1m2!2m1!1sbabastudio+itc+permata+hijau!3m4!1s0x0:0x1f5fa010fece9b0b!8m2!3d-6.220776!4d106.7830713?hl=id" width="550" height="300" frameborder="0" allowfullscreen=""></iframe>
              </div>           
            </div>
          </div>

        </h2>
      </div> 
    )
  }
}
export default App;


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


