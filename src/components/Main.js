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
            <SpecialFoodItem itemPhoto={GreekSalad} />
            <SpecialFoodItem itemPhoto={Pasta} />
            <SpecialFoodItem itemPhoto={Taps} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
