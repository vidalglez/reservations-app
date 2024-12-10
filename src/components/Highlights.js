import GreekSalad from "../assets/images/greek-salad-med.jpg"
import Pasta from "../assets/images/pasta-medium.jpg"
import Bruschetta from "../assets/images/taps-medium.jpg"
import SpecialFoodItem from "./SpecialFoodItem"

const Highlights = () => {
  const specials = [
    {
      id: '1',
      title: "Greek Salad",
      price: "12.99",
      image: 'greek-salad-med.jpg',
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      id: '2',
      title: "Pasta",
      price: "5.00",
      image: 'pasta-medium.jpg',
      description:
        "This comes straight from grandma's recipe book, every last ingredient hass been sourced and is as authenthic as can be imagined.",
    },
    {
      id: '3',
      title: "Bruchetta",
      price: "5.99",
      image: 'taps-medium.jpg',
      description:
        "Our Bruscheta is made from grilled bread that has been smeared with garlic and seasoned with alt and olive oil.",
    },
  ]

  return (
    <section className="highlights-section">
      <div className="highlights">
        <div className="specials-header">
          <h2 className="specials-title">Specials</h2>
          <div className="yellow-button">
            <a href="#">Online Menu</a>
          </div>
        </div>
        <div className="specials-content">
          {specials.map(special => <SpecialFoodItem special={special} key={special.id} />)}
        </div>
      </div>
    </section>
  )
}

export default Highlights
