"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Yasmeen Sharaf";

  useEffect(() => {
    setIsVisible(true);

    // Typewriter effect for hero title
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-pink-100 w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden w-full">
        {/* Animated gradient background */}
        <div className="absolute inset-0 z-0 w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 via-rose-300/30 to-pink-500/20 animate-gradient-xy"></div>
          <Image
            src="imgs/Theater/cover.jpg"
            alt="Yasmeen Sharaf"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/40 to-rose-900/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center text-white mt-16 px-4 w-full max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 font-serif break-words"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {typedText}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              className="inline-block w-1 h-12 sm:h-16 md:h-20 bg-white ml-2"
            />
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            Multi-talented artist bringing creativity to life through acting,
            singing, theater, and science education
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 sm:px-8 py-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-lg group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              <a
                href="/Resume_JaySharaf.pdf"
                download="Resume_JaySharaf.pdf"
              >
                <span className="text-sm sm:text-base">Download My Resume</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        className="py-20 px-4 w-full overflow-x-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto w-full">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-serif">
              My Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full" />
          </motion.div>

          {/* First Section - Early Life */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mb-20"
            variants={fadeInUp}
          >
            <motion.div
              className="space-y-6 order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 font-serif">
                Background
              </h3>
              <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                Yasmeen graduated Valedictorian of Bishop Kearney High School,
                in N.Y. She then studied Finance & Accounting, in Arab Academy
                for Science, Technology & Maritime Transport, where she also
                graduated as valedictorian.
              </p>
              <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                She worked as a TA for a semester, but felt that her soul was
                craving creativity, freedom, and the courage to break away from
                the mold of perfection.
              </p>
            </motion.div>
            <motion.div
              className="relative max-w-md mx-auto w-full order-1 md:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/imgs/gradution/2.jpg"
                alt="Early career"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full h-64 md:h-80 hover:shadow-2xl transition-shadow duration-300"
              />
            </motion.div>
          </motion.div>

          {/* Second Section - Theater & Performance */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mb-20"
            variants={fadeInUp}
          >
            <motion.div
              className="relative max-w-md mx-auto w-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/imgs/Theater/1.jpg"
                alt="Theater performance"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full h-64 md:h-80 hover:shadow-2xl transition-shadow duration-300"
              />
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 font-serif">
                Beginnings and Experience
              </h3>
              <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                Yasmeen pursued her passion for acting by joining Perform Arts
                in Egypt, completing a six-month course covering acting,
                singing, contemporary dance, capoeira, character building, and
                mask work. Her debut role as Fatma, a farmer girl, involved
                living with farmers to authentically portray their culture on
                stage.
              </p>
              <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                She further explored acting at The Acting Studio in N.Y.,
                mastering the Meisner Technique with a Sanford Meisner student,
                learning to "live truthfully under imaginary circumstances."
                Eager for more, she studied Method Acting at the Lee Strasberg
                Theatre & Film Institute in L.A., experiencing an intense,
                transformative journey that sparked creative euphoria.
              </p>
            </motion.div>
          </motion.div>

          {/* Third Section - Science Education */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center"
            variants={fadeInUp}
          >
            <motion.div
              className="space-y-6 order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 font-serif">
                Edutainment
              </h3>
              <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                Driven by a desire to make a meaningful impact, Yasmeen joined
                Science Street, an edutainment company, performing as the lively
                Professor Whizzy in one-man science shows across Egypt and the
                Gulf Region to make learning exciting for kids. She aspires to
                use acting to connect with audiences, evoke emotions, and
                inspire change, while challenging stereotypes about veiled women
                in the arts.
              </p>
              <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                Yasmeen aims to grow as an artist across various mediums, become
                a role model, and tell impactful stories that ignite
                imaginations, embracing her true calling on stage or camera with
                unwavering passion and a commitment to turning her dreams into
                reality.
              </p>
            </motion.div>
            <motion.div
              className="relative max-w-md mx-auto w-full order-1 md:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/imgs/scienceStreat/1.jpg"
                alt="Science education program"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full h-64 md:h-80 hover:shadow-2xl transition-shadow duration-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-20 px-4 w-full overflow-x-hidden bg-gradient-to-b from-pink-50 to-pink-100"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto w-full">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-serif">
              What People Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto rounded-full" />
            <p className="text-gray-600 text-base lg:text-lg mt-6 max-w-2xl mx-auto">
              Hear from colleagues, directors, and audiences who have experienced my work
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {/* Testimonial 1 */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100"
              variants={fadeInScale}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center mb-6">
                <img src="/imgs/testmonials/1.jpg" alt="" className="w-16 h-16 rounded-full"/>
                
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800 text-lg">Ezzedine Abdelhady</h4>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
              "Jasmine is a joy to capture on film. She understands character depth and it shows in her nuanced performances. She is a great collaborator and brings an enthusiastic energy on set."
              </p>
              <div className="flex text-pink-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100"
              variants={fadeInScale}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center mb-6">
              <img src="/imgs/testmonials/2.jpg" alt="" className="w-16 h-16 rounded-full"/>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800 text-lg">Nadine Alaa Eldin Ibrahim</h4>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                "Working with yasmeen has been an absolute joy. She is not only incredibly talented and naturally beautiful, but she also gives her heart to every role she takes on. Her dedication, kindness, and passion shine through in everything she does — both on and off the stage. A true professional and a genuinely lovely person to be around"
              </p>
              <div className="flex text-pink-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100"
              variants={fadeInScale}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center mb-6">
              <img src="/imgs/testmonials/3.jpg" alt="" className="w-16 h-16 rounded-full"/>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800 text-lg">Vinny leon</h4>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                "I remember her on the first day of our Meisner course in New York. She was definitely a bit nervous and it was clear that coming here had taken her completely out of her comfort zone. 
                She always gave it her all in every exercise no matter how uncomfortable or unfamiliar it was to her. By the end of our time there I remember we were all performing our scenes to the class and our teacher, that we had spent some time working on. She was definitely not the same actor that came on the course at the start. She gave it her all and went full out with emotion and energy, I feel I can still feel my ears ringing to this day after the scream she gave her scene partner."
              </p>
              <div className="flex text-pink-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </motion.div>

            {/* Testimonial 4 */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100"
              variants={fadeInScale}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center mb-6">
              <img src="/imgs/testmonials/4.jpg" alt="" className="w-16 h-16 rounded-full"/>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800 text-lg">Edwin “Jaguar” Borja</h4>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                "Jay Sharaf was a dedicated and supportive classmate of mine in acting class in New York City, always striving to improve and challenge herself, and she was also great to work with on scene studies, consistently pushing both of us to be our best selves. It also very fun and relaxing working environment that it doesn’t feel like your working a scene."
              </p>
              <div className="flex text-pink-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </motion.div>
            {/* Testimonial 5 */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100"
              variants={fadeInScale}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center mb-6">
              <img src="/imgs/testmonials/5.jpg" alt="" className="w-16 h-16 rounded-full"/>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800 text-lg">Asmaa Hassan</h4>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                "Working alongside Yasmeen has been nothing short of inspiring. Her dedication to her craft, emotional depth, and ability to fully inhabit every character she portrays set her apart in every performance. Whether on stage or in front of the camera, she brings an authenticity and presence that captivates audiences and elevates the work of everyone around her. Her talent is matched only by her professionalism and generous spirit—qualities that make her not just an incredible actress, but a joy to collaborate with."
              </p>
              <div className="flex text-pink-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-20 bg-gradient-to-b from-pink-100 via-pink-200 to-rose-300 w-full overflow-x-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="text-center max-w-4xl mx-auto px-4 w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-serif">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-gray-600 text-base lg:text-lg mb-8 leading-relaxed">
            Whether you're looking for a performer, educator, or creative
            collaborator, I'm always excited to explore new opportunities and
            bring fresh perspectives to every project.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 sm:px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl group"
              >
                <span className="text-sm sm:text-base">Get In Touch</span>
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
