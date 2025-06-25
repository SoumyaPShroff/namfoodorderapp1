//we can also write , sending indiviual parameters like below - mulitple parameter kind
//const RestaurantCard = ({ resName, cuisine}) => {
//  const RestaurantCard = (props) => {
// const RestaurantCard = () => {
const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card">
      <img className="res-logo"
        alt="res-logo"
        //below link work hardcoded
        //  src="https://carameltintedlife.com/wp-content/uploads/2022/02/vegetable-pulao-veg-pilaf-4.jpg"/>  
        src=
        {
          resData.data.reslogo

        }
      />

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
      <p>{resData.data.place}</p>
      <h4>{resData.data.rating} stars</h4>  
      {/* <span className="badge">⭐ {resData.rating}</span> */}
    </div>
  );
};
export default RestaurantCard;