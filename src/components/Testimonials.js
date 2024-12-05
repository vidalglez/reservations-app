import TestimonialItem from './TestimonialItem'

const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            name: 'Max Kenneth',
            rating: 5,
            opinion: 'Really enjoyed the atmosphere.',
            imagePath: 'person1.jpg'
        },
        {
            id: 2,
            name: 'Kelly Smith',
            rating: 3,
            opinion: 'Place is good, but there was an issue while booking table',
            imagePath: 'person2.jpg'
        },
        {
            id: 3,
            name: 'Brandon Clagget',
            rating: 4,
            opinion: 'You have to try the Greek Salad!',
            imagePath: 'person3.jpg'
        },
        {
            id:4,
            name: 'Robert Rodriguez',
            rating: 5,
            opinion: 'Awesome place peaceful atmosphere with delicious food',
            imagePath: 'person4.jpg'
        }
    ]

    return (
        <section className="testimonials-section">
            <div className="testimonials">
                <h1 >Testimonials</h1>
                <div className="testimonials-content">
                    {
                        testimonials.map(testimonialItem => <TestimonialItem testimonial={testimonialItem} key={testimonialItem.id}/>)
                    }
                </div>
            </div>
        </section>
    )
}

export default Testimonials