const SpecialFoodItem = (props) => {
    return (<div className="specials-item">
        <img src={props.itemPhoto} alt="" className="specials-item-img" />
        <div className="specials-item-details">
          <div className="specials-item-title-price">
            <h3>Title</h3>
            <p>$12.99</p>
          </div>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and
            our Chicago style feta cheese, garnished with crunchy garlic
            and rosemary croutons.
          </p>
        </div>
      </div>)
}

export default SpecialFoodItem