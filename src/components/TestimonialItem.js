import Star from "../assets/images/star.png"

const TestimonialItem = (props) => {
  return (
    <div className="testimonial-item">
      <div className="ratings">
        {Array.from({ length: props.testimonial.rating }).map((_, index) => (
          <img key={index} src={Star} alt="star" className="star-icon" />
        ))}
      </div>
      <div className="testimonial-details">
      <img src={require(`../assets/images/${props.testimonial.imagePath}`)} alt="person" className="testimonial-image-person" />
        <p>{props.testimonial.name}</p>
      </div>
      <div className="testimonial-review">
        <p>"{props.testimonial.opinion}"</p>
      </div>
    </div>
  )
}

export default TestimonialItem
