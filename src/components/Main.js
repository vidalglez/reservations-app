import Hero from "./Hero"
import GreekSalad from "../assets/images/greek-salad-med.jpg"
import Pasta from "../assets/images/pasta-medium.jpg"
import Taps from "../assets/images/taps-medium.jpg"
import SpecialFoodItem from "./SpecialFoodItem"

const Main = () => {
  return (
    <main>
      <Hero />
      <section className="highlights-section">
        <div className="highlights">
          <div className="specials-header">
            <h2 className="specials-title">Specials</h2>
            <button className="yellow-button">Online Menu</button>
          </div>
          <div className="specials-content">
            <SpecialFoodItem itemPhoto={GreekSalad} price="12.99" title="Greek Salad" description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>
            <SpecialFoodItem itemPhoto={Pasta} price="5.00" title="Pasta" description="This comes straight from grandma's recipe book, every last ingredient hass been sourced and is as authenthic as can be imagined."/>
            <SpecialFoodItem itemPhoto={Taps} price="5.99" title="Bruchetta" description="Our Bruscheta is made from grilled bread that has been smeared with garlic and seasoned with alt and olive oil."/>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
