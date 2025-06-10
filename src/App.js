import React from 'react';
//import ReactDOM from 'react-dom/client';

/**
 * Header 
*  -logo
* - nav items
* body
*  - search
* restaurant conatiner
- restaurant card
* -img
* - Name of the Res, Start rising,cuisine, delivery etc
* footer
* copyright'
* links
* address
* contact

*/

// logo and Home,about us etc header
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="data:image/png;base64,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" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//we can also write , sending indiviual parameters like below - mulitple parameter kind
 //const RestaurantCard = ({ resName, cuisine}) => {
//  const RestaurantCard = (props) => {
 // const RestaurantCard = () => {
   const RestaurantCard = ({resData}) => {
  return (
    <div className="res-card">
      <img className="res-logo"
       alt="res-logo"
      src="https://carameltintedlife.com/wp-content/uploads/2022/02/vegetable-pulao-veg-pilaf-4.jpg"/>  
      {/* <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4> */}
{/* // if ur sedning separate muliplt paraters then used 
   <h3>{resName}</h3>
      <h4>{cuisine}</h4> */}
      {/* <h3>Meghana Foods</h3>
       <h4>Biryani, North India..</h4>
      <h4>4.4 stars</h4>
       <h4>38 mins</h4>   */}
       <h3>{resData.data.name}</h3>
       <h4>{resData.data.cuisine.join(", ")}</h4>
       <h4>{resData.data.deliverytime}</h4>
       <h4>{resData.data.place}</h4>
    </div>
  );
};

const resObj = {
  type: "restaurant",
  data: {
    type: "M",
    id:"1",
    name: "Meghana Foods",
    cuisine: ["Biryani","Snacks","Burger","French Fries"],
    deliverytime: "30 mins",
    place: "Bengaluru"
  },
  // data: {
  //   type: "K",
  //   id:"2",
  //   name: "KFC",
  //   cuisine: ["Burger","French Fries"],
  //   deliverytime: "35 mins",
  //   place: "Bengaluru-Kormangala"
  // }
}

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        {/* <RestaurantCard 
             resName = "Meghana Foods" 
             cuisine="Biryani, North Indian"
        />   
        <RestaurantCard resName = "KFC" cuisine="Burger, Fast Food"/>   
        <RestaurantCard resName = "Mc Donald" cuisine="French Fries, Fast Food"/>    */}

        {/*  dynamic data pass  = resobk - array of data to pass which include name,cusine etc */}
       <RestaurantCard resData = {resObj}/>

       
      </div>
    </div>
  );
};


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />)

export default AppLayout;

// function App() {
//   // React.createElement syntax example:
//   const heading = React.createElement(
//     "h1",
//     { id: "heading" },
//     "Namaste React"
//   );

//   // JSX syntax example:
//   const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;

//   // React Function Component (can be used inside App)
//   const HeadingComponent = () => {
//     return (
//       <div id="container">
//         <h1 className="heading">Namaste React using Function Component - Test</h1>
//       </div>
//     );
//   };

//   // You must return a single element here, e.g. a React fragment wrapping these:
//   return (
//     <>
//       {/* Render React.createElement heading */}
//       {heading}

//       {/* Render JSX heading */}
//       {jsxHeading}

//       {/* Render the functional component */}
//       <HeadingComponent />
//     </>
//   );
// }

// export default App;

