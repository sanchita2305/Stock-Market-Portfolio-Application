// // src/Home.jsx

// import React from 'react';
// import './Home.css';
// import Footer from './footer/Footer'; 
// import image1 from './Home/image1.jpg';
// import image2 from './Home/image2.jpg';
// import image3 from './Home/image3.jpg';
// import image4 from './Home/image4.jpg';

// const Home = () => {
//   return (

//     <>
//     <div className="home-container">
//       <h1>Welcome to Your Stock Market Portfolio</h1>
//       {/* <img src="/src/to/Home/footer/Image.jpg" className="home-image" /> */}
//       <p>Track your stocks, manage your portfolio, and analyze market trends.</p>
//     </div>

//     <div className="image-grid">
//           <img src={image1} alt="Image 1" />
//           <img src={image2} alt="Image 2" />
//           <img src={image3} alt="Image 3" />
//           <img src={image4} alt="Image 4" />
//         </div>

//           <Footer /> 

//    </>

//   );
// };

// export default Home;


// src/Home.jsx

import React from 'react';
import './Home.css';
import Footer from './footer/Footer'; 
import newImage1 from '../Home/newImage1.jpg';
import newImage2 from '../Home/newImage2.jpg';
import newImage3 from '../Home/newImage3.jpg';
import newImage4 from '../Home/newImage4.jpg';
import newImage5 from '../Home/newImage5.jpg';
import newImage6 from '../Home/newImage6.jpg';



const Home = () => {
  return (
    <>
      <div className="home-container">
        <h1 className="typing-effect">Welcome to Our Stock Market Portfolio</h1>
        <h2>Embark on Your Stock Investment Journey</h2>
      </div>
      

      <div className="image-grid">
        <img src={newImage1} alt="New Image 1" />
        <img src={newImage2} alt="New Image 2" />
        <img src={newImage3} alt="New Image 3" />
        <img src={newImage6} alt="New Image 4" />
        <img src={newImage4} alt="New Image 4" />
        <img src={newImage5} alt="New Image 4" />
      </div>

      <div className="home-container1">
        {/* <h1>Welcome to Our Stock Market Portfolio</h1> */}
        <p><b> Track your stocks, manage your portfolio, and analyze market trends. Our platform offers real-time updates, detailed
           performance analytics, and personalized insights to help you make informed investment decisions. Stay ahead of the market with our advanced charting tools, news updates, and expert recommendations. Whether you're a seasoned investor or just getting started, 
          our comprehensive tools and resources are designed to help you achieve your financial goals.</b></p>
      </div>
      <Footer /> 
    </>
  );
};

export default Home;
