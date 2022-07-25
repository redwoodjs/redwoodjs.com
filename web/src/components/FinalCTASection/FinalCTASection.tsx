import { testimonials } from 'src/data/testimonials'

const FinalCtaSection = () => {
  return (
    <div style={{ marginTop: 0 }}>
      <section
        className="bg-cover bg-bottom px-4 py-12 md:py-32"
        style={{
          backgroundImage:
            'url(/images/adventure.svg), linear-gradient(to bottom right, #A4DBE1, #5398B0)',
        }}
      >
        <ul className="mx-auto mb-12 grid gap-3 sm:grid-cols-2 md:mb-32 lg:max-w-5xl">
          {testimonials.slice(2, 4).map((testimonial) => (
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
        <section className="flex flex-col items-center justify-center py-32">
          <h3 className="mb-12 space-y-12 px-4 text-center font-serif text-2xl font-bold sm:text-2xl md:mb-24 md:text-4xl lg:text-6xl lg:leading-tight">
            Ready to start your own <br />
            Redwood adventure?
          </h3>
          <a
            href="https://redwoodjs.com/docs/tutorial"
            className="button bg-rw-500 px-9 text-white hover:bg-rw-700"
          >
            Start the Tutorial
          </a>
        </section>
      </section>
    </div>
  )
}

export default FinalCtaSection
