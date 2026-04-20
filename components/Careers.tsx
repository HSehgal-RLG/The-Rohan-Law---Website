export default function Careers() {
  return (
    <section id="careers" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left decorative column */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-4">
            <div className="h-1 w-16 bg-maroon" />
            <div className="h-1 w-10 bg-navy/20" />
            <div className="h-1 w-8 bg-navy/10" />
          </div>

          {/* Right content column */}
          <div className="lg:col-span-8">
            <p className="text-maroon text-xs uppercase tracking-widest font-sans mb-4">
              Join Our Team
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-navy leading-tight mb-6">
              Grow Your Career at Rohan Law
            </h2>
            <div className="space-y-4 text-navy/70 font-sans text-sm leading-relaxed mb-8">
              <p>
                We are a small firm that values talent, dedication, and
                intellectual curiosity. Whether you are an experienced
                attorney, a paralegal, or a law student eager to develop your
                practice, we welcome conversations with driven professionals
                who share our commitment to client service.
              </p>
              <p>
                Our Albany office offers a collaborative environment where your
                contributions are visible and valued. We are particularly
                interested in individuals with backgrounds in technology law,
                data privacy, or real estate transactions as we continue to
                expand our practice into new areas.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-maroon hover:bg-maroon-dark text-white px-8 py-3 text-xs uppercase tracking-widest transition-colors duration-200 font-sans"
            >
              Express Your Interest
            </a>
            <p className="mt-4 text-navy/40 font-sans text-xs">
              Send us a message and we&apos;ll be in touch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
