import Image from "next/image"

interface Testimonial {
  name: string
  company: string
  text: string
  avatar: string
  size?: "large" | "medium" | "small"
}

const testimonials: Testimonial[] = [
  {
    name: "Sebastian Speier",
    company: "Shop",
    text: "Mobbin is a great resource and it always comes in handy to see what the best practices or standards are for mobile patterns in our current landscape.",
    avatar: "/profile.webp",
    size: "medium",
  },
  {
    name: "Meng To",
    company: "DesignCode",
    text: "Mobbin is a game-changer for designers looking to step up their understanding of UX and UI design patterns. It's so massive, meticulously organized, has deep user flows and even a figma plugin! It's indispensable in the modern designer's toolbox.",
    avatar: "/profile.webp",
    size: "large",
  },
  {
    name: "Marco Cornacchia",
    company: "Figma",
    text: 'Mobbin is one of my favorite resources for product design and ui inspo. I love having access to a ton of "real world examples" to see how different apps and companies handle specific UI patterns and flows.',
    avatar: "/profile.webp",
    size: "small",
  },
  {
    name: "Daryl Ginn",
    company: "Endless",
    text: "Mobbin has quickly become our favourite inspiration resource for designing mobile apps at endless.design, their advanced filtering is unmatched in the inspiration space.",
    avatar: "/profile.webp",
    size: "medium",
  },
  {
    name: "Taha Hossain",
    company: "Daybreak",
    text: "We can't imagine a product design process without Mobbin. The quality, clarity and precision it provides make it just as valuable as it is intuitive.",
    avatar: "/profile.webp",
    size: "small",
  },
  {
    name: "Haerin Song",
    company: "Klarna",
    text: "By using the Mobbin app, I save both my research time and space in my photo galleries filled with random screenshots. I love how easy it is to search for different patterns and copy and paste flows into Figma. It is a wonderful design tool you cannot live without!",
    avatar: "/profile.webp",
    size: "large",
  },
  {
    name: "John Bai",
    company: "Plaid",
    text: "All my homies love Mobbin. I mean that. I finally deleted that folder of 1,866 unorganized screenshots and haven't looked back since. Shoutout to Jiho and the team for doing God's work.",
    avatar: "/profile.webp",
    size: "medium",
  },
  {
    name: "Axel Lindmarker",
    company: "Light",
    text: "Mobbin is one of my main tools for finding flows to gain UX and UI insights from. Going there saves me a lot of time from having to do it myself.",
    avatar: "/profile.webp",
    size: "small",
  },
  {
    name: "Josiah Golden",
    company: "Compound Labs",
    text: "Mobbin is one of the best ways to stay on top of the latest patterns, modalities, and visual trends in mobile product design... it's an essential resource for my team.",
    avatar: "/profile.webp",
    size: "large",
  },
  {
    name: "Bobby Giangeruso",
    company: "HeartHands, Inc",
    text: "Mobbin is one of those tabs I never close. It's the largest up-to-date library of app screens.",
    avatar: "/profile.webp",
    size: "medium",
  },
  {
    name: "Rachel How",
    company: "",
    text: "Mobbin is my go-to reference for app & web design. Apart from saving countless hours, it gives me insights on the design patterns, copywriting, and user flows of world-class products. A must-have for creative inspiration and efficiency!",
    avatar: "/profile.webp",
    size: "small",
  },
  {
    name: "Oykun Yilmaz",
    company: "",
    text: "Designing feasible solutions based on real-world products is crucial for our design careers. Mobbin provides the best resources for this approach. I use it daily!",
    avatar: "/profile.webp",
    size: "large",
  },
]

export default function TestimonialsGrid() {
  return (
    <div className="min-h-screen bg-transparent px-4 ">
      <h1 className="text-center text-4xl font-bold mb-16 md:text-5xl text-white">What others say about Me!</h1>
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`
                relative bg-gray-900/50 rounded-xl border border-gray-800 
                transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm
                overflow-hidden group
                ${testimonial.size === "large" ? "p-8 md:row-span-2" : testimonial.size === "medium" ? "p-6" : "p-5"}
              `}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-gray-700">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={`${testimonial.name}'s avatar`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                    {testimonial.company && <p className="text-sm text-gray-400">{testimonial.company}</p>}
                  </div>
                </div>
                <p
                  className={`text-gray-300 leading-relaxed ${testimonial.size === "small" ? "text-sm" : "text-base"}`}
                >
                  {testimonial.text}
                </p>
              </div>

              {/* Gradient highlight effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-500/10" />

              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-purple-500/20" />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none" />
      </div>
    </div>
  )
}

