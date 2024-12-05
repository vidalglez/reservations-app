import Star from '../assets/images/star.png'
import Person1 from '../assets/images/person1.jpg'
const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="testimonials">
                <h1 >Testimonials</h1>
                <div className="testimonials-content">
                    <div className="testimonial-item">
                        <div className='ratings'>
                            <img src={Star} alt="" className="star-icon"/>
                            <img src={Star} alt="" className="star-icon"/>
                            <img src={Star} alt="" className="star-icon"/>
                            <img src={Star} alt="" className="star-icon"/>
                            <img src={Star} alt="" className="star-icon"/>
                        </div>
                        <div className='testimonial-details'>
                            <img src={Person1} alt="" className="testimonial-image-person"/>
                            <p>Max R.</p>
                        </div>
                        <div className='testimonial-review'>
                            <p>"Really enjoyed the atmosphere."</p>
                        </div>
                    </div>
                    <div className="testimonial-item"></div>
                    <div className="testimonial-item"></div>
                    <div className="testimonial-item"></div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials