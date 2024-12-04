import GreekSalad from "../assets/images/greek-salad-med.jpg"
import Pasta from "../assets/images/pasta-medium.jpg"
import Bruschetta from "../assets/images/taps-medium.jpg"
import SpecialFoodItem from "./SpecialFoodItem"

const Highlights = () => {
    const specials = [
        {
            title: 'Greek Salad',
            price: '12.99',
            description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
        },
        {
            title: 'Pasta',
            price: '5.00',
            description: 'This comes straight from grandma\'s recipe book, every last ingredient hass been sourced and is as authenthic as can be imagined.'
        },
        {
            title: 'Bruchetta',
            price: '5.99',
            description: 'Our Bruscheta is made from grilled bread that has been smeared with garlic and seasoned with alt and olive oil.'
        }
    ]

    return (
        <section className="highlights-section">
        <div className="highlights">
          <div className="specials-header">
            <h2 className="specials-title">Specials</h2>
            <button className="yellow-button">Online Menu</button>
          </div>
          <div className="specials-content">
            <SpecialFoodItem itemPhoto={GreekSalad} special={specials[0]} />
            <SpecialFoodItem itemPhoto={Pasta} special={specials[1]} />
            <SpecialFoodItem itemPhoto={Bruschetta} special={specials[2]} />
          </div>
        </div>
      </section>
    )
}

export default Highlights