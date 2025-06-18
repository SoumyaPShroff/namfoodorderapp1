import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import RestaurantCard from './components/RestaurantCard';
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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
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

