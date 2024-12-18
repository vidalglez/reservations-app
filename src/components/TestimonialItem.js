import Star from "../assets/images/star.png"

const TestimonialItem = ({ testimonial }) => {
  return (
    <div className="testimonial-item">
      <div className="ratings">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <img key={index} src={Star} alt="star" className="star-icon" />
        ))}
      </div>
      <div className="testimonial-details">
      <img src={require(`../assets/images/${testimonial.imagePath}`)} alt="person" className="testimonial-image-person" />
        <p>{testimonial.name}</p>
      </div>
      <div className="testimonial-review">
        <p>"{testimonial.opinion}"</p>
      </div>
    </div>
  )
}

export default TestimonialItem
