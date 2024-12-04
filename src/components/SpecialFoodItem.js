import BycicleIcon from "../assets/images/bycicle-icon.jpg"

const SpecialFoodItem = (props) => {
  return (
    <div className="specials-item">
      <img src={props.itemPhoto} alt="" className="specials-item-img" />
      <div className="specials-item-details">
        <div className="specials-item-title-price">
          <h3>{props.title}</h3>
          <p>${props.price}</p>
        </div>
        <p>{props.description}</p>
        <div className="order-delivery">
          <a href="#">Order a delivery</a>
          <img src={BycicleIcon} alt="" className="bycicle-icon" />
        </div>
      </div>
    </div>
  )
}

export default SpecialFoodItem
