import BycicleIcon from "../assets/images/bycicle-icon.jpg"

const SpecialFoodItem = ({special}) => {
  return (
    <div className="specials-item">
      <img src={require(`../assets/images/${special.image}`)} alt="" className="specials-item-img" />
      <div className="specials-item-details">
        <div className="specials-item-title-price">
          <h3>{special.title}</h3>
          <p>${special.price}</p>
        </div>
        <p>{special.description}</p>
        <div className="order-delivery">
          <a href="#">Order a delivery</a>
          <img src={BycicleIcon} alt="" className="bycicle-icon" />
        </div>
      </div>
    </div>
  )
}

export default SpecialFoodItem
