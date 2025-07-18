import { useState, useEffect } from "react";
import {
  MessageCircle,
  ExternalLink,
  Linkedin,
  Twitter,
  Menu,
  ChevronDown,
  Code,
  Palette,
  Rocket,
  Facebook,
  Instagram,
  Youtube,
  X,
  LayoutDashboard,
  Mail,
  Phone,
  Globe,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      id: 1,
      title: "Virtual India",
      description:
        "Virtual India is an accounting and compliance service provider offering solutions like bookkeeping, taxation, and business registration.",
      image: "/projects/vi.avif",
      tags: ["Reactjs", "Tailwind", "Framer", "React Router"],
      category: "Accounting",
      link: "https://www.virtualindia.co.in/",
    },
    {
      id: 2,
      title: "Spin Drive",
      description:
        "SpinDrive Cars offers premium self-drive car rental services for a hassle-free travel experience. We built a modern, mobile-friendly website.",
      image: "/projects/spindrive.avif",
      tags: ["Reactjs", "Tailwind", "Framer", "React Router"],
      category: "Travels",
      link: "https://www.spindrivecars.com/",
    },
    {
      id: 3,
      title: "Pinnacle",
      description:
        "Pinnacle is a finance consultancy firm specializing in investment planning, tax solutions, and business advisory services.",
      image: "/projects/pinnacle.avif",
      tags: ["Reactjs", "Tailwind", "Framer", "React Router"],
      category: "Finance",
      link: "https://pinnacle-client.vercel.app/",
    },
    {
      id: 4,
      title: "Sri Sai Brindavanam Foundation",
      description:
        "Sri Sai Brindhavan Foundation is a spiritual and charitable trust dedicated to community service, devotion, and social welfare initiatives.",
      image: "/projects/ssbf.avif",
      tags: ["Reactjs", "Tailwind", "Framer", "React Router"],
      category: "Spiritual",
      link: "https://www.saibrindhavanam.com/",
    },
    {
      id: 5,
      title: "Jaikosha Foundation",
      description:
        "Jai Kosha Foundation is a non-profit organization focused on education, empowerment, and sustainable community development.",
      image: "/projects/jaikosha.avif",
      tags: ["Reactjs", "Tailwind", "Framer", "React Router"],
      category: "Spiritual",
      link: "https://www.jaikosha.com/",
    },
    {
      id: 6,
      title: "Piller",
      description:
        "Piller Real Estate is a property solutions platform offering listings, project showcases, and real estate consulting services.",
      image: "/projects/piller.avif",
      tags: ["Reactjs", "Tailwind", "Framer", "React Router"],
      category: "Real Estate",
      link: "https://piller-template.vercel.app/",
    },
    {
      id: 7,
      title: "MiCare",
      description:
        "Micare is a healthcare and wellness platform providing diagnostic services, health checkups, and personalized medical care.",
      image: "/projects/micare.avif",
      tags: ["Reactjs", "Tailwind", "Framer", "React Router"],
      category: "Healthcare",
      link: "https://micare-template.vercel.app/",
    },
    {
      id: 8,
      title: "Novo",
      description:
        "Nova Photography is a creative studio specializing in weddings, portraits, events, and commercial photography.",
      image: "/projects/novo.avif",
      tags: ["Reactjs", "Tailwind", "Framer", "React Router"],
      category: "Photography",
      link: "https://novo-website-kappa.vercel.app/",
    },
    {
      id: 9,
      title: "Eduor",
      description:
        "Eduor is a learning platform offering online courses, educational resources, and interactive learning experiences.",
      image: "/projects/eduor.avif",
      tags: ["Reactjs", "Tailwind", "Framer", "React Router"],
      category: "Education",
      link: "https://education-website-zeta-ruddy.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-black to-violet-900/10"></div>
        <div
          className="absolute w-96 h-96 bg-violet-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919566863602"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-3 group"
      >
        <MessageCircle size={28} className="group-hover:animate-bounce" />
      </a>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrollY > 50
            ? "bg-black/90 backdrop-blur-xl border-b border-black/70"
            : "bg-transparent"
        }`}
      >
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div className="w-20">
              <img
                src="/madadz.png"
                alt="Madadz"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              {["Home", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="relative group text-gray-300 hover:text-white transition-all duration-300 font-medium"
                >
                  {item}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-violet-400 group-hover:w-full transition-all duration-300"></div>
                </button>
              ))}
              <button
                onClick={() =>
                  window.open(
                    "https://calendly.com/madadzindia/30min",
                    "_blank"
                  )
                }
                className="relative bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 px-8 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25 group overflow-hidden"
              >
                <span className="relative z-10">Book Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-700 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 hover:bg-violet-900/30 rounded-xl transition-all duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-6 py-6 bg-gradient-to-r from-violet-900/20 to-violet-800/20 backdrop-blur-xl rounded-2xl border border-violet-500/20">
              <div className="flex flex-col space-y-6 px-6">
                {["Home", "Projects", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-left hover:text-violet-400 transition-colors font-medium"
                  >
                    {item}
                  </button>
                ))}
                <button
                  onClick={() =>
                    window.open("https://calendly.com/madadz", "_blank")
                  }
                  className="bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 px-6 py-3 rounded-2xl transition-all duration-300 text-center font-semibold"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center py-24"
      >
        <div className="container relative z-10 text-center px-6">
          <h1 className="text-center uppercase font-black text-3xl md:text-4xl lg:text-5xl text-white mt-10 mb-4 leading-24">
            Empowering Ideas. <br /> Delivering Results.
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We craft extraordinary digital experiences that push boundaries and
            redefine what's possible in the modern web.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 px-12 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/30 overflow-hidden"
            >
              <span className="relative z-10">View Our Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-700 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="group relative border-2 border-violet-500 hover:border-violet-400 hover:bg-violet-500/10 px-12 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Get In Touch
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-violet-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </button>
          </div>

          {/* Services Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Code,
                title: "Development",
                desc: "Full-stack solutions",
              },
              {
                icon: LayoutDashboard,
                title: "Design",
                desc: "Beautiful interfaces",
              },
              {
                icon: Rocket,
                title: "Strategy",
                desc: "Digital transformation",
              },
              { icon: Palette, title: "Creatives", desc: "Content Creation" },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900/50 to-violet-900/20 backdrop-blur-sm rounded-2xl p-6 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-violet-700 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300 mx-auto">
                  <service.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-[49%] transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-violet-400" />
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-gradient-to-br from-gray-900/30 to-black relative z-10"
      >
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-violet-300 bg-clip-text text-transparent">
              Our Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our portfolio of innovative digital solutions that have
              transformed businesses and delighted users worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-gradient-to-br from-gray-900/80 to-violet-900/20 backdrop-blur-sm rounded-3xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 shadow-2xl border border-violet-500/20 hover:border-violet-400/40"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-violet-600/90 to-violet-700/90 backdrop-blur-sm rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <div className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ExternalLink size={18} className="text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-violet-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-violet-600/20 to-violet-700/20 border border-violet-500/30 rounded-full text-sm text-violet-300 hover:bg-violet-600/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center space-x-2 text-violet-400 hover:text-violet-300 transition-colors group-hover:translate-x-2 transform duration-300 font-medium relative z-50"
                  >
                    <span>View Project</span>
                    <ExternalLink size={16} />
                  </a>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 to-violet-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-violet-300 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your vision to life? Let's discuss how we can
              create something extraordinary together.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900/80 to-violet-900/20 backdrop-blur-sm rounded-3xl p-6 md:p-12 border border-violet-500/20">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-violet-300 bg-clip-text text-transparent">
                    Get In Touch
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-violet-700 rounded-xl flex items-center justify-center">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Email</p>
                        <a
                          href="mailto:support@madadz.co"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          support@madadz.co
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-violet-700 rounded-xl flex items-center justify-center">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Mobile</p>
                        <a
                          href="https://wa.me/919566863602"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          +91 9566863602
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-violet-700 rounded-xl flex items-center justify-center">
                        <Globe size={20} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Website</p>
                        <a
                          href="https://www.madadz.co/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          www.madadz.co
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-xl font-semibold mb-4 text-violet-400">
                      Follow Us
                    </h4>
                    <div className="flex space-x-4">
                      {[
                        {
                          icon: Facebook,
                          color: "hover:bg-blue-600",
                          link: "https://www.facebook.com/profile.php?id=61566842134668",
                          title: "Facebook",
                        },
                        {
                          icon: Instagram,
                          color: "hover:bg-pink-600",
                          link: "https://www.instagram.com/madadz__/",
                          title: "Instagram",
                        },
                        {
                          icon: Linkedin,
                          color: "hover:bg-blue-500",
                          link: "https://www.linkedin.com/in/mad-adz-india/",
                          title: "Linkedin",
                        },
                        {
                          icon: Youtube,
                          color: "hover:bg-red-700",
                          link: "https://www.youtube.com/@madadz-india",
                          title: "Youtube",
                        },
                        {
                          icon: Twitter,
                          color: "hover:bg-black",
                          link: "https://x.com/madadzindia",
                          title: "Twitter(X)",
                        },
                      ].map((social, index) => (
                        <a
                          key={index}
                          href={social.link}
                          target="_blank"
                          className={`size-8 md:size-12 bg-gray-800/50 ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110`}
                        >
                          <social.icon size={20} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <form className="space-y-6">
                    <div>
                      <input
                        type="text"
                        className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-2xl focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 text-white transition-all duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-2xl focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 text-white transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <textarea
                        rows={4}
                        className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-2xl focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 text-white resize-none transition-all duration-300"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25"
                    >
                      Send Message
                    </button>
                  </form>

                  {/* <div className="mt-6">
                    <button
                      onClick={() =>
                        window.open("https://calendly.com/madadzindia/30min", "_blank")
                      }
                      className="w-full flex items-center justify-center space-x-3 border-2 border-violet-500 hover:border-violet-400 hover:bg-violet-500/10 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 group"
                    >
                      <span>Schedule Meeting</span>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900/30 to-violet-900/30 py-12 border-t border-violet-500/20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="relative mb-6 flex items-center justify-center gap-4">
              <div className="w-20">
                <img src="/madadz.png" alt="" />
              </div>
            </div>
            <p className="text-gray-400 mb-6 text-lg">
              Crafting extraordinary digital experiences.
            </p>
            <p className="text-gray-500">© 2025 MADADZ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
