import { useState } from 'react'
import logo from './assets/logo.png';
import img from './assets/i.png';
import plane from './assets/p.png';
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from "framer-motion";
import { Twitter, Instagram, Facebook } from "lucide-react";
import emailjs from "emailjs-com";





function App() {
  return (
    <div 
      className="min-h-screen bg-gray-900 text-white overflow-x-hidden"
      style={{
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        width: '98.8vw',
        position: 'relative'
      }}
    >
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

// Header & Navigation
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className="bg-indigo/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo + Title */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-lg sm:text-xl font-bold">
                <LazyLoadImage src={logo} />
              </div>
            </div>
            <div className="font-bold italic text-gray-300 text-sm sm:text-base truncate">
              DIDAN TECH
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm">
            <a href="#hero" className="text-gray-300 hover:text-indigo-700 hover:underline transition-colors py-2">
              Home
            </a>
            <a href="#services" className="text-gray-300 hover:text-indigo-700 hover:underline transition-colors py-2">
              Services
            </a>
            <a href="#about" className="text-gray-300 hover:text-indigo-700 hover:underline transition-colors py-2">
              About
            </a>
            <a href="#contact" className="text-gray-300 hover:text-indigo-700 hover:underline transition-colors py-2">
              Contact
            </a>
            <a 
              href="#contact" 
              className="ml-2 xl:ml-4 px-3 xl:px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-sm hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu" 
              className="p-2 sm:p-3 rounded-md border border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors touch-manipulation"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <motion.div
            className="lg:hidden border-t border-gray-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="px-2 pt-2 pb-4 space-y-1">
              <a href="#hero" className="block px-3 py-3 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
              <a href="#services" className="block px-3 py-3 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Services
              </a>
              <a href="#about" className="block px-3 py-3 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
              <a href="#contact" className="block px-3 py-3 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
              <a href="#contact" className="block mx-3 mt-4 px-4 py-3 bg-indigo-600 text-white rounded-lg text-center hover:bg-indigo-700 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Get Started
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

// HERO Section
function Hero() {
  return (
    <motion.section 
      id="hero" 
      className="bg-indigo/95 py-12 sm:py-16 lg:py-24"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="text-indigo-600 font-medium mb-3 sm:mb-4 text-sm sm:text-base">
              Registered Tech Agency
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300 leading-tight mb-4 sm:mb-6">
              Your Go-To Partner for Web & Software
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              We craft modern websites, sleek designs, powerful web apps, and intelligent
              AI solutions like machine learning models and custom chatbots to help businesses grow smarter 
              and faster.
              Our team brings a unique blend of technical expertise, design thinking, and real-world problem-solving to every project. We believe that technology should not only function seamlessly but also inspire and simplify life.

            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-5 sm:px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors font-medium text-center touch-manipulation"
              >
                Get a Free Consultation
              </a>

              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-5 sm:px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors font-medium text-center touch-manipulation"
              >
                Our Services
              </a>
            </div>

            {/* list of services */}
            <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 flex-shrink-0"></span>
                <span>Custom Websites & Web Apps</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 flex-shrink-0"></span>
                <span>AI-Powered Solutions</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 flex-shrink-0"></span>
                <span>Machine Learning Models</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 flex-shrink-0"></span>
                <span>Specialized Chatbots</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 flex-shrink-0"></span>
                <span>Creative UI/UX & Graphics</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 flex-shrink-0"></span>
                <span>End-to-End Tech Support</span>
              </li>
            </ul>
          </div>

          {/* Responsive Image (hidden on mobile) */}
          <div className="order-1 lg:order-2 items-center justify-center hidden sm:flex">
            <div className="text-center py-8 lg:py-0">
              <div className="mb-3 filter drop-shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <LazyLoadImage 
                  src={img} 
                  alt="Hero illustration"
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-400 max-w-xs mx-auto px-4">
                {/* optional text */}
              </p>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}


// ABOUT Section
function About() {
  return (
    <motion.section
      id="about"
      className="bg-gray-800 py-12 sm:py-16 lg:py-24"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold border-b border-gray-200 text-gray-300 mb-4 sm:mb-6">
              About Didan Tech
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 italic">
              Founded: May 2025
              <br></br>
              Didan Tech was established in May 2025 with a vision to transform the way technology 
              connects people, businesses, and opportunities. From the beginning, our mission has 
              been to deliver innovative, reliable, and user-centered tech solutions that empower 
              individuals and organizations to thrive in a digital world.

            </p>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 italic">
              What sets Didan Tech apart from other tech agencies is our personalized approach, ethical standards, and focus on results that truly matter. 
              Every project is treated as a partnership, from understanding the client’s goals to executing a solution that exceeds expectations.
              Our team is composed of skilled developers, designers, and digital strategists who are aligned with our core values of integrity, innovation, and impact. We approach each project with clarity, creativity, and a commitment to excellence, ensuring that clients not only get a product but also a strategic advantage in their industry.
              Choosing Didan Tech means choosing a trusted partner who will guide your tech journey with vision, precision, and dedication, helping you achieve your goals and make a lasting digital impression.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 text-center">
              <motion.div
                className="bg-white border border-gray-200 rounded-lg p-4"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-1 sm:mb-2">
                  [+]
                </div>
                <div className="text-gray-500 text-sm sm:text-base">
                  Projects Completed
                </div>
              </motion.div>
              <motion.div
                className="bg-white border border-gray-200 rounded-lg p-4"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-1 sm:mb-2">
                  [2+]
                </div>
                <div className="text-gray-500 text-sm sm:text-base">
                  Years Experience
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center py-8 lg:py-0">
              <div className="text-6xl sm:text-7xl lg:text-8xl mb-4">
                <LazyLoadImage
                  src={plane}
                  className="w-24 h-24 sm:w-40 sm:h-40 lg:w-50 lg:h-50 mx-auto"
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-400 max-w-xs mx-auto px-4">
                {/* optional tagline or fun fact */}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// SERVICES Section
function Services() {
  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom websites, web applications, e-commerce solutions, and more.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'User interface design, user experience optimization, branding, etc.'
    },
    {
      icon: '🤖',
      title: 'AI Solutions',
      description: 'Machine learning models, chatbots, automation, data analysis, and more.'
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'iOS, Android, and cross-platform mobile app solutions.'
    },
    {
      icon: '☁️',
      title: 'Cloud Services',
      description: 'Deployment, hosting, server management, scalability, etc.'
    },
    {
      icon: '🔧',
      title: 'Tech Support',
      description: 'Maintenance, updates, troubleshooting, and consultation.'
    }
  ];

  return (
    <motion.section 
      id="services" 
      className="bg-indigo/95 py-12 sm:py-16 lg:py-24"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300 mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto px-4">
            We provide modern solutions tailored to your business needs with innovation and excellence.
          </p>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto px-4">
            Driven by a passion for creativity, efficiency and meaningful impact.

          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="cursor-pointer border border-gray-200 rounded-lg p-4 sm:p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-200 hover:transform hover:scale-105 touch-manipulation"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-400 mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-gray-200 leading-relaxed text-sm sm:text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a 
            href="#contact" 
            className="inline-flex items-center px-5 sm:px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors font-medium touch-manipulation"
          >
            Get a Custom Quote
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}


// CONTACT Section
function Contact() {
  return (
    <motion.section
      id="contact"
      className="bg-indigo/95 py-12 sm:py-16 lg:py-24"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
            }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300 mb-4 sm:mb-6"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              Get In Touch With Us
            </motion.h2>

            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: "📧", text: "Oyedotunadewumi@gmail.com" },
                { icon: "📱", text: "+234 8125449875" },
                { icon: "📍", text: "Ibadan, Nigeria" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border border-gray-200 rounded-lg"
                  variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }}
                >
                  <div className="text-xl sm:text-2xl flex-shrink-0">{item.icon}</div>
                  <div className="min-w-0">
                    <div className="text-gray-500 text-sm sm:text-base">{item.text}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form - For Client's Email */}
          <motion.form
            action="https://formsubmit.co/d3d246db8d4de9afaac1172ada12f221"
            method="POST"
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* FormSubmit Configuration - Simplified for better reliability */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Contact Form Submission - Website" />

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                className="w-full px-3 sm:px-4 py-3 bg-gray-700 border border-gray-300 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors text-base"
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-3 sm:px-4 py-3 bg-gray-700 border border-gray-300 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors text-base"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Phone (Optional)</label>
              <input
                type="tel"
                name="phone"
                className="w-full px-3 sm:px-4 py-3 bg-gray-700 border border-gray-300 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors text-base"
                placeholder="+234 xxx xxx xxxx"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                rows={4}
                className="w-full px-3 sm:px-4 py-3 bg-gray-700 border border-gray-300 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none text-base"
                placeholder="Tell us about your project..."
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-4 sm:px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors font-medium touch-manipulation"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}

// FOOTER Section
function Footer() {
  return (
    <motion.footer
      className="bg-indigo/95 border-t border-gray-200 py-8 sm:py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {/* Logo + About */}
          <motion.div
            className="sm:col-span-2"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-sm sm:text-lg font-bold text-white">
                <LazyLoadImage src={logo} />
              </div>
              <div className="font-bold italic text-gray-300 text-sm sm:text-base">
                DIDAN TECH
              </div>
            </div>
            <p className="text-blue-300 italic mb-3 sm:mb-4 max-w-md text-sm sm:text-base">
              Your Go-To Partner for Web & Software
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {[ 
                { icon: Twitter, href: "https://twitter.com/therealprofwiz", label: "Twitter" },
                { icon: Instagram, href: "https://instagram.com/therealprofwiz", label: "Instagram" },
                { icon: Facebook, href: "https://linkedin.com/in/therealprofwiz", label: "LinkedIn" }
                ].map( 
              ({ icon: Icon, href, label }, i) => ( 
             <motion.a 
              key={i} 
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-gray-800/50 touch-manipulation" 
              whileHover={{ scale: 1.1, y: -2 }} 
              aria-label={label}
             > 
            <Icon size={20} className="sm:w-6 sm:h-6" />
            </motion.a> 
                )
              )}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          >
            <h3 className="text-gray-300 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Services
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
              <li>
                <a
                  href="#services"
                  className="hover:text-gray-300 transition-colors touch-manipulation"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-gray-300 transition-colors touch-manipulation"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-gray-300 transition-colors touch-manipulation"
                >
                  AI Solutions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-gray-300 transition-colors touch-manipulation"
                >
                  Mobile Apps
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          >
            <h3 className="text-gray-300 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Company
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
              <li>
                <a
                  href="#about"
                  className="hover:text-gray-300 transition-colors touch-manipulation"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-gray-300 transition-colors touch-manipulation"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors touch-manipulation"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors touch-manipulation"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-200 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2024 Didan Tech. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default App;