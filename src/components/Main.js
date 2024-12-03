import RestauratFood from '../assets/images/restauranfood.jpg'

const Main = () => {
    return (
        <main>
            <section className="hero">
                <article >
                    <h2 className="display-title">Little Lemon</h2>
                    <h3 className="display-sub-title">Chicago</h3>
                    <p className="description-item">
                        We are family owned Mediterranean restaurant, 
                        focused in traditional recipes served with a modern twist.
                    </p>
                    <button>Reserve a Table</button>
                </article>
                <article >
                    <img src={RestauratFood} alt="" className="restaurant-food"/>
                </article>
            </section>
        </main>
    )
}

export default Main