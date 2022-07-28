import { testimonials } from 'src/data/testimonials'
const TestimonialSection = () => {
  return (
    <div style={{ marginTop: 0 }}>
      <section
        className="px-4 py-32 md:py-60"
        style={{
          backgroundImage:
            'url(/images/tree-pattern.svg), linear-gradient(to bottom right, #A4DBE1, #5398B0)',
        }}
      >
        <ul className="mx-auto grid gap-3 sm:grid-cols-2 lg:max-w-6xl">
          {testimonials.slice(0, 2).map((testimonial) => (
            <li
              key={testimonial.name}
              className="col-span-1 space-y-4 rounded-xl bg-white p-4"
            >
              <div className="flex lg:-mt-16 lg:flex-col lg:items-center lg:justify-center">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={testimonial.optimizedImage}
                  />
                  <source type="image/jpeg" srcSet={testimonial.image} />
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="mr-4 h-12 w-12 rounded-full lg:h-28 lg:w-28"
                  />
                </picture>
                <div>
                  <div className="text-lg font-bold">{testimonial.name}</div>
                  <div className="text-xs font-light text-gray-600">
                    {testimonial.subtext}
                  </div>
                </div>
              </div>

              <div className="relative font-serif">
                <span className="absolute text-6xl font-bold text-gray-400">
                  “
                </span>
                <blockquote className="pt-8 text-xl">
                  {testimonial.quote}
                </blockquote>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col items-center justify-center space-y-8 bg-neutral-900 py-24">
        <h3 className="space-y-12 px-4 text-center font-serif text-xl text-white sm:text-2xl md:text-4xl lg:text-6xl lg:leading-tight">
          Ready to start your own <br />
          Redwood adventure?
        </h3>
        <a href="https://redwoodjs.com/docs/tutorial" className="button">
          Start the Tutorial
        </a>
      </section>
    </div>
  )
}

export default TestimonialSection
