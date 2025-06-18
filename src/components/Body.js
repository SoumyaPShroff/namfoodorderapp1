import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      {/* <div className="Search">Search</div> */}
      <div className="filter-btn">
          <button className="filter-btn" onClick={() => console.log("Filter")}>  
            Top Rated Restaurants
          </button>
      </div>

      <div className="res-container">
        {/* <RestaurantCard 
             resName = "Meghana Foods" 
             cuisine="Biryani, North Indian"
        />   
        <RestaurantCard resName = "KFC" cuisine="Burger, Fast Food"/>   
        {/*  dynamic data pass  = resobk - array of data to pass which include name,cusine etc */}

        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} /> */}
        {
          // for each restaurant in RestaurantCard we are looping and returning the card component diplay
          //each loop should have key to make it unique hence pass (unique id ex: here we have id as key)
          // Note : if suppose no id, then react will not know which id has newmly come or listed new, hence it will again relaod all cards 
          // and thus more load on DOM. If id there then only the new card render along with others, loading only new card,other reain same
          //performance improve
          resList.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData={restaurant} />
          )
          )
//                               OR index not recommended, but use specify table array key

          // resList.map((restaurant, index) => (
          //   <RestaurantCard key={index} resData={restaurant} />
          // )
          // )
        }

      </div>
    </div>
  );
};
export default Body;