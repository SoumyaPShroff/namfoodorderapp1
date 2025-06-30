import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Search from "./Search";
import "./RestaurantCard.css";
import data from "../utils/Data.json"  //data taken from Data.json file

const Body = () => {
    const resList = data.restoList;
    const [filteredResList, setFilteredResList] = useState(resList);
    const [searchText, setSearchText] = useState("");

    const handleFilterRes = (searchstring) => {
        if (!searchstring.trim()) {
            // If search text is empty or just spaces, reset to full list
            setFilteredResList(resList);
        } else {
            const searchRes = resList.filter(res => res.data.name.toLowerCase().includes(searchstring.toLowerCase()));
            setFilteredResList(searchRes);
        }
    }

    // Get unique places for the dropdown
    //spread operator is used to create a new array with unique places
    // Set is used to filter out duplicates - All is also included along with list of current items
    const uniquePlaces = ["All", ...new Set(resList.map(res => res.data.place))];

    // Filter handler
    const handleFilterChange = (searchplace) => {
        if (searchplace === "All") {
            setFilteredResList(resList);
        } else {

            const filtered = resList.filter(res => res.data.place === searchplace);
            setFilteredResList(filtered);
        }
    };

    return (
        <div className="body">
            <div>
                <br>
                </br>
            </div>
            <div style={{ marginBottom: "16px" }}>
                <label>Filter by Place: </label>
                <select onChange={(e) => handleFilterChange(e.target.value)}>
                    {uniquePlaces.map((place, idx) => (
                        <option key={idx} value={place}>
                            {place}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <Search
                    onSearch={handleFilterRes}
                    placeholder="Search for restaurants..."
                />
            </div>

            <div className="res-container">
                {
                    filteredResList.map((restaurant) => (
                        <RestaurantCard key={restaurant.id} resData={restaurant} />
                    )
                    )

                }

            </div>
        </div>
    );
};
export default Body;