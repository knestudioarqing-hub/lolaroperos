/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowLeft,
  Maximize2,
  RotateCcw,
  Play,
  Camera,
  Facebook
} from "lucide-react";
import { useState } from "react";

const translations = {
  en: {
    nav: { home: "Home", sale: "Sale", contact: "Contact", signUp: "Sign Up" },
    hero: {
      title: "Where Image **Becomes** Influence.",
      subtitle: "We create unforgettable looks for celebrities, TV programs, and commercial productions.\nFrom concept to camera-ready styling, we craft wardrobes that command attention and define presence.",
      cta: "Contact our specialist team"
    },
    collab: {
      presence: "Industry Presence",
      title: "Collaborating with **Global Icons**",
      desc: "From major TV productions to international advertising campaigns, we bring world-class styling to the industry's biggest names."
    },
    carousel: {
      new: "New",
      premium: "Premium Selection",
      from: "Starting from"
    },
    about: {
      title: "CEO of Lola Roperos",
      bio1: "Fashion Designer with over 10 years of experience specializing in creative direction and collection development for international fashion brands.",
      bio2: "I can implement effective design strategies at both local and global levels. My greatest strength is strong market awareness, which enables me to consistently create collections that align with brand identity, consumer behavior, and emerging trends while optimizing production processes and visual storytelling.",
      location: "Florida, Orlando"
    },
    grid: { title: "Professional Stills", gallery: "Our Work" },
    stats: {
      sat: "Complete customer satisfaction",
      inn: "Innovation and valuable insight",
      fin: "Highly efficient financial strategies",
      use: "Users worldwide, providing them with"
    },
    contact: {
      title: "Contact me",
      hours: "Office hours",
      days: "Monday - Friday",
      name: "Name (required)",
      first: "First Name",
      last: "Last Name",
      service: "Service",
      web: "Web Design",
      dev: "Development",
      cons: "Consulting",
      email: "Email (required)",
      news: "Sign up for news and updates",
      desc: "Project description",
      submit: "Submit"
    },
    footer: {
      hello: "Say hello",
      work: "Work with us",
      policy: "Privacy Policy",
      copy: "Template by"
    }
  },
  es: {
    nav: { home: "Inicio", sale: "Venta", contact: "Contacto", signUp: "Registrarse" },
    hero: {
      title: "Donde la Imagen **se Convierte en** Influencia.",
      subtitle: "Creamos looks inolvidables para celebridades, programas de TV y producciones comerciales.\nDesde el concepto hasta el estilismo final, diseñamos vestuarios que captan la atención y definen presencia.",
      cta: "Contacta a nuestro equipo especialista"
    },
    collab: {
      presence: "Presencia en la Industria",
      title: "Colaborando con **Iconos Globales**",
      desc: "Desde grandes producciones de TV hasta campañas publicitarias internacionales, aportamos un estilismo de clase mundial a los nombres más grandes de la industria."
    },
    carousel: {
      new: "Nuevo",
      premium: "Selección Premium",
      from: "Desde"
    },
    about: {
      title: "Directora Ejecutiva de Lola Roperos",
      bio1: "Diseñadora de moda con más de 10 años de experiencia especializada en dirección creativa y desarrollo de colecciones para marcas de moda internacionales.",
      bio2: "Puedo implementar estrategias de diseño efectivas tanto a nivel local como global. Mi mayor fortaleza es la fuerte conciencia de mercado, que me permite crear constantemente colecciones que se alinean con la identidad de la marca y el comportamiento del consumidor.",
      location: "Florida, Orlando"
    },
    grid: { title: "Tomas Profesionales", gallery: "Nuestro Trabajo" },
    stats: {
      sat: "Satisfacción total del cliente",
      inn: "Innovación y visión valiosa",
      fin: "Estrategias financieras eficientes",
      use: "Usuarios en todo el mundo, brindándoles"
    },
    contact: {
      title: "Contáctame",
      hours: "Horario de oficina",
      days: "Lunes - Viernes",
      name: "Nombre (obligatorio)",
      first: "Nombre",
      last: "Apellido",
      service: "Servicio",
      web: "Diseño Web",
      dev: "Desarrollo",
      cons: "Consultoría",
      email: "Email (obligatorio)",
      news: "Suscríbete para noticias y actualizaciones",
      desc: "Descripción del proyecto",
      submit: "Enviar"
    },
    footer: {
      hello: "Di Hola",
      work: "Trabaja con nosotros",
      policy: "Política de Privacidad",
      copy: "Plantilla de"
    }
  }
};


// --- Components ---

const BrandTicker = () => {
  const brands = ["LOLA ROPEROS", "NOIR", "SILK", "IVORY", "LOLA ROPEROS", "NOIR", "SILK", "IVORY"];
  return (
    <div className="w-full bg-white py-12 border-y border-gray-100 overflow-hidden">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex gap-24 items-center whitespace-nowrap min-w-max px-12"
      >
        {brands.map((brand, i) => (
          <span key={i} className="text-2xl md:text-3xl font-display font-bold tracking-[0.2em] text-gray-300 hover:text-primary transition-colors cursor-default">
            {brand}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {brands.map((brand, i) => (
          <span key={`dup-${i}`} className="text-2xl md:text-3xl font-display font-bold tracking-[0.2em] text-gray-300 hover:text-primary transition-colors cursor-default">
            {brand}
          </span>
        ))}
      </motion.div>
    </div>
  );
};


const Header = ({ lang, setLang, t }) => (
  <header className="w-full py-5 px-8 flex flex-row justify-between items-center sticky top-0 z-50 bg-background-light/95 backdrop-blur-sm border-b border-gray-100 relative">
    {/* Logo — left */}
    <div className="h-14 md:h-16 flex-shrink-0 z-10">
      <img
        src="https://i.imgur.com/emF6zaN.png"
        alt="Lola Roperos Logo"
        className="h-full object-contain"
        referrerPolicy="no-referrer"
      />
    </div>

    {/* Nav — truly centered via absolute */}
    <nav className="hidden md:flex bg-white rounded-full px-1 py-1 shadow-md border border-gray-100 absolute left-1/2 -translate-x-1/2">
      <a className="bg-primary text-white px-8 py-2.5 rounded-full text-sm font-medium transition-all" href="#">{t.nav.home}</a>
      <a className="px-8 py-2.5 text-sm text-gray-600 hover:text-primary transition-colors font-medium" href="#">{t.nav.sale}</a>
      <a className="px-8 py-2.5 text-sm text-gray-600 hover:text-primary transition-colors font-medium" href="#">{t.nav.contact}</a>
    </nav>

    {/* Controls — right */}
    <div className="flex items-center gap-3 z-10">
      <div className="flex bg-gray-100 rounded-full p-1">
        <button
          onClick={() => setLang('en')}
          className={`px-4 py-1.5 text-[11px] rounded-full transition-all ${lang === 'en' ? 'bg-white shadow-sm font-bold text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
        >EN</button>
        <button
          onClick={() => setLang('es')}
          className={`px-4 py-1.5 text-[11px] rounded-full transition-all ${lang === 'es' ? 'bg-white shadow-sm font-bold text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
        >ES</button>
      </div>
      <a className="hidden lg:block border border-gray-300 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary hover:text-white hover:border-primary transition-colors" href="#">{t.nav.signUp}</a>
    </div>
  </header>
);

const Hero = ({ t }) => (
  <section className="flex flex-col items-center text-center pt-16 pb-24 px-4">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight max-w-6xl"
    >
      <span className="text-gray-900 uppercase tracking-tight">
        {t.hero.title.split('**')[0]}
        <span className="text-primary italic font-light lowercase"> {t.hero.title.split('**')[1]} </span>
        {t.hero.title.split('**')[2]}
      </span>
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="max-w-3xl text-gray-500 text-sm md:text-base mb-10 leading-relaxed whitespace-pre-line"
    >
      {t.hero.subtitle}
    </motion.p>
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group bg-white border border-gray-200 rounded-full pl-6 pr-2 py-2 flex items-center gap-3 shadow-md hover:shadow-lg transition-all"
      href="#"
    >
      <span className="font-medium text-sm">{t.hero.cta}</span>
      <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-primary transition-colors">
        <ArrowRight size={14} className="transform -rotate-45 group-hover:rotate-0 transition-transform" />
      </div>
    </motion.a>
  </section>
);

const ArchGallery = () => {
  const images = [
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCY4ecDLXY44XRo0WWWSZFK5baQs73j_Be80iK-ZhQwaiZJs-HUHhaQdjX9Ylhz1yWCx0uPRg7OL1IC16Fh7IqRI5V4CeZ8dfD-GA5EWHWYaWjU4W_ef2vjg95tf9BcYoZHA5bjvIxBmPILk906J8j_4h8-zGm2HMpQD-p7Ca_MoI065HLWoGcomoVGb_SR_TkM-eQ9DftDvrase0_-RPxXCC7n6_5Fgk7-3tsfcqy0fgRtJM5NcKWx4JkhmZrW1d2qWN1jM689Gg", alt: "White shirt", bg: "bg-custom-gray/30" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDf2MAm9zNSFp1XHIq17vlActhgV6u6dQWqkMAXnEix9WVxTwzSsykQgGizJCRjqBJlzrCqbT-kAx0im1jPVq-8wFTzA8VX0ao8fJy-pGjD5cu0enMNBppGs4k6pewbBGXPhq77ejj6RPcMfP-D5jDGHCPX_XD0u-bc-49OC9KwxcYojzni-thC6I9l6EoYKfwqojPW3FoMYehFSVGh9hWVX1Ozezw_Tn8F02XzTOzyd96j5AudYXeqeobvmgMMALNXIwaC1TBe2A", alt: "Leather jacket", bg: "bg-custom-gray/30" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuArPxud33WN8l5hSzM3MQCJLC0gDS_9SITGCWxeL2AFQpvcWqVPaCSbPMwDelkjyzSYJ4J4rOxWktmGF-tvoHmSM0TYi8aL25WY5jNvpHH33eG1xaSGX-1t-JbS4GYe1VEOx3x_6ISp7NNVDtHMbF1Ow6WF4MMjHVzJlCXdxa8VPZ6ikHMMfwdpgIm0J8Cn5PUIFK291nOxp2pj4upbAf8TEAj0B5cHcCa3DbX7uiF2OdY_EDwOrQoNrjYfDZnLqogpqZT1__j7Sw", alt: "Black dress", bg: "bg-accent-light/30", featured: true },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnRV6HF8aiSRN9FROfm9Zm-AsPQ4gjMRzIMXXgVccOCEmq-HnSusw_zturOltdl-gLfXXffODimIrjMhsmS2UHmQOsPbd4FFOpGhKqHzk_VBXunRoIK3DzMZwRCVmMAjzMc3lKzhY42ICkxZwrBjqMNUAW0yDC23_cjlHdqbVIAniA7fe6V6AFIIE39h520Vwr2oBhXjPgjecKI8J2oJ5iDDEjiS-2GlMcau82r9PffWzZ3X8BVmhY93HTB7M6kd220l_2tkYVfA", alt: "Brown suit", bg: "bg-accent/30" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdnli3xuu3iBvrvibLaJZthpW_3o8pZVsa9G1aVPy1kjioCSiXABiP053r_uqyUzaTFZ2aF_rnzf0rCUOJ-Mq2i7mNMD6d93zF3IjGK98lsNeJ5vs59AmpFAuuEpRNbsqQW3FlZ0NxIbXh_Zjqm6RwFthdWCEuiLpv4yAgoysL9Lg_yB085NxMFOpcJr1y44AwH0ABfzxj6vdVIdIHSf4m-gAwF1u0v2rdDAVoLq7vrlYSOcVoXGtCM3whs1n_zfTzn2TQX2xSjQ", alt: "Blue suit", bg: "bg-custom-mauve/30" }
  ];

  return (
    <section className="px-4 pb-24 overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 items-end max-w-7xl mx-auto">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`relative group ${img.featured ? 'h-80 md:h-[28rem] rounded-t-[120px]' : 'h-64 md:h-80 rounded-t-[100px]'} overflow-hidden ${img.bg}`}
          >
            <img
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={img.src}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ProductCarousel = ({ t }) => {
  const [activeIndex, setActiveIndex] = useState(2);

  const products = [
    { id: 1, name: "Yellow Shirt", price: "85.00", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC83KPMsbf607PEcCA7oX_XLpBZddzKkoJSJAiLQ5aKJxxCJLrUrXFf1yMJEjtuiBKPzG_4yuiqVlrU97JOu3xHOcUg6U-mMVQ3W_kZzmvCu_1k9kBoVk3EruvH4n24AuKKehjDC13h6VdW8Hd-5hgNavVFx9Z7rWlxuBJCoPhO9lC-Qo7bD4udhV1hQF-2ydxEgNDuwR_RpJ_9qfyJGXwiTnUZeur2EVdcWXZ2b6Zff7aT51qD_rjhoTHaSxz5y8XeTeeF5gJ5bQ", bg: "bg-[#Fdf8f4]" },
    { id: 2, name: "Grey Shorts", price: "60.00", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRl6C9cSRsRcMLKbDwHTwJ_nJfMAvfsw3QdIdDUlbSzuf3YeSwuv8WLJnL9UgFtUH1N2FbSHAQKwOZf0ew5V25S2cLbn5zfZambJ_6G622qII8gOmVBZGiFDhci3E0bqVJ5-XtbBxVRifHomwDwuYxZ9cByQntmaPLKTnRi3PH-N2qoQ4icN1ViX3w11hXdxVTT5SzS589npg-povDItyLmLFfU0-Lf5sUPbEN5a0IvhEBndqFR6udzdCK_NdYGuhO7O0t79PwDA", bg: "bg-white" },
    { id: 3, name: "Formal Outfit", price: "130.00", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAembO7wB_MfuHNQC_YLlicK43cTdMXUuUi-SWYanlyPuQxkMutQj6_fhpLGfo27Jw7Lnfl69Oo9DukxHP_Gv1w6_OgTscZs2jc1wxwDa7xPi1e8qoslYBtv5GDVqU8zn97Ce9GPHWE7AGZyg4VMZ3tSXcK-hYfZSRiEMat7vS4fj8l1b292mnv4IfbijJ_HOULs8-TnTKkcjL9GqKwnYp_LYLjn1OIu2twpdKvne0O0kzzWCkSiD3FFe0A__s6mhCnGa09Llhqg", bg: "bg-gray-50", featured: true },
    { id: 4, name: "Brown Sweater", price: "95.00", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9b1LJqYo2D95z6udOUpvTNLSDY-JVKSQCPV1OQNtuU_tEvxQY7wbOjYJGLKDtQV5qFi6ManKLXgTaTxGVRnUYyA0r3Jg2PASLpxidoZVTojMr6uVXpyG0dNzEB-b4ZHDglbFak7i-FWnkcnDIKIhSj0g2IIA3mC7Gg6Bwe3s_IbpbTTN7toQIBgce9FVeZaQQr6TJEFpS1me1DxjbWY-zGRRWNrWjaXLLNPPPiFoQC1g6oVpuijledeXH0P_w-BAuY8yk4xB5Cg", bg: "bg-white" },
    { id: 5, name: "Jacket", price: "150.00", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6tvXTUvjEeY05-sdsYzpm8ZvErJfsEkhmQMbkIjRXjt6IyemjkWb9LhO6HPVLHSdX4C19Po83TeHxGyM6aWkRwV3x7CUDzgmowxx0Z_XU_RhD_ZjeejQTzd1ambSF56HlwM78pyWbHfDXITycMskCqc2cT3QB94IS1hp2TCR6mpUdNq7j9Bu4BoYT_T7xPALDMJBNVv7x9mAMpsd3E3ZWNtalPadqTuwDqxO_DvqKDLgMLSEAlsyAf6Y7ikNLPPaWKWlmYfR85w", bg: "bg-gray-100" },
  ];

  const next = () => setActiveIndex((prev) => (prev + 1) % products.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + products.length) % products.length);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 relative flex flex-col items-center">
        <div className="flex items-center justify-center w-full gap-4 mb-12">
          <button
            onClick={prev}
            className="z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800 hover:text-primary transition-all border border-gray-100 hover:scale-110 active:scale-95"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            onClick={next}
            className="z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800 hover:text-primary transition-all border border-gray-100 hover:scale-110 active:scale-95"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="relative w-full h-[550px] flex items-center justify-center">
          <div className="flex gap-8 items-center justify-center">
            {products.map((product, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === (activeIndex - 1 + products.length) % products.length;
              const isNext = index === (activeIndex + 1) % products.length;

              if (!isActive && !isPrev && !isNext) return null;

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isActive ? 1 : 0.5,
                    scale: isActive ? 1.05 : 0.85,
                    x: isActive ? 0 : isPrev ? -40 : 40,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`${isActive ? 'z-20' : 'z-10'} relative`}
                >
                  <div className={`
                    ${isActive ? 'w-[320px] md:w-[400px] shadow-2xl' : 'w-[240px] md:w-[280px] shadow-sm'} 
                    bg-white rounded-[2rem] border border-gray-100 overflow-hidden transition-all duration-500
                  `}>
                    {product.featured && isActive && (
                      <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-gray-800 shadow-sm z-20">{t.carousel.new}</div>
                    )}
                    <div className={`h-[350px] md:h-[400px] p-4 flex items-center justify-center ${product.bg}`}>
                      <img
                        alt={product.name}
                        className="h-full object-contain mix-blend-multiply"
                        src={product.src}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-6 text-center bg-white">
                      <p className="text-xs text-gray-400 mb-1 uppercase tracking-widest">{isActive ? t.carousel.premium : ""}</p>
                      <p className="text-sm font-medium text-gray-600">{product.name}</p>
                      <p className="text-lg font-bold text-gray-900 mt-1">{product.price} <span className="text-xs align-top">USD</span></p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const CollaborationHeader = ({ t }) => (
  <section className="bg-white pt-32 pb-16 text-center px-4">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-6 block">{t.collab.presence}</span>
      <h2 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-[0.1em] text-gray-900 leading-[0.9]">
        {t.collab.title.split('**')[0]} <br />
        <span className="italic font-light"> {t.collab.title.split('**')[1]} </span>
      </h2>
      <p className="mt-8 text-gray-500 max-w-2xl mx-auto text-sm md:text-base font-light">
        {t.collab.desc}
      </p>
    </motion.div>
  </section>
);

const AboutSection = ({ t }) => (
  <section className="bg-background-dark text-white overflow-hidden min-h-[600px] flex items-center">
    <div className="container mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-12 items-center py-16">
      <div className="max-w-lg">
        <h2 className="text-3xl font-display font-medium mb-2 tracking-[0.2em] uppercase">{t.about.title}</h2>
        <p className="text-gray-400 text-sm mb-12">j.martin@uptowork.com</p>
        <div className="space-y-6 text-gray-300 font-light leading-relaxed">
          <p>{t.about.bio1}</p>
          <p>{t.about.bio2}</p>
        </div>
        <div className="mt-20 border-t border-gray-700 pt-6 inline-block">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{t.about.location}</p>
          <p className="text-xs text-gray-500">12529 State Road 535</p>
        </div>
      </div>
      <div className="flex justify-center items-center h-full">
        <motion.img
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          alt="Lola Roperos Work"
          className="max-h-[550px] w-auto object-contain rounded-lg shadow-2xl"
          src="https://i.imgur.com/V1PN5Qh.png"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </section>
);

const ImageGrid = ({ t }) => (
  <section className="bg-white">
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="relative min-h-[500px]">
        <img alt="Fashion Models" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://i.imgur.com/DoLAvug.png" referrerPolicy="no-referrer" />
      </div>
      <div className="flex flex-col">
        <div className="h-[400px]">
          <img alt="Professional Work" className="w-full h-full object-cover object-top" src="https://i.imgur.com/VDUj1Km.png" referrerPolicy="no-referrer" />
        </div>
        <div className="bg-background-light py-12 text-center">
          <h2 className="font-display text-4xl uppercase tracking-[0.3em] font-light text-gray-800 mb-8">{t.grid.title}</h2>
        </div>
      </div>
    </div>
    <div className="bg-background-light border-t border-gray-200 py-14 text-center">
      <span className="text-primary text-xs font-bold uppercase tracking-[0.4em] mb-3 block">{t.grid.gallery}</span>
      <h2 className="font-display text-5xl md:text-6xl uppercase tracking-[0.15em] font-light text-gray-800">{t.grid.title}</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
      <div className="aspect-square relative group overflow-hidden">
        <img alt="Grid image 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://i.imgur.com/7tRSEEJ.png" referrerPolicy="no-referrer" />
        <div className="absolute inset-4 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
      <div className="aspect-square relative group overflow-hidden">
        <img alt="Grid image 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://i.imgur.com/DN8P5be.png" referrerPolicy="no-referrer" />
      </div>
      <div className="aspect-square relative group overflow-hidden">
        <img alt="Grid image 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://i.imgur.com/wVff3hN.png" referrerPolicy="no-referrer" />
      </div>
    </div>
  </section>
);

const StatsSection = ({ t }) => (
  <section className="py-24 bg-white border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
        <div className="p-4">
          <p className="text-5xl font-display font-medium text-gray-900 mb-2">95%</p>
          <p className="text-xs text-gray-500 uppercase tracking-wide leading-relaxed">{t.stats.sat.split('customer')[0]}<br />{t.stats.sat.split('Complete ')[1] || t.stats.sat}</p>
        </div>
        <div className="p-4">
          <p className="text-5xl font-display font-medium text-gray-900 mb-2">10+</p>
          <p className="text-xs text-gray-500 uppercase tracking-wide leading-relaxed">{t.stats.inn.split('valuable')[0]}<br />{t.stats.inn.split('Innovation and ')[1] || t.stats.inn}</p>
        </div>
        <div className="p-4">
          <p className="text-5xl font-display font-medium text-gray-900 mb-2">$10m</p>
          <p className="text-xs text-gray-500 uppercase tracking-wide leading-relaxed">{t.stats.fin.split('financial')[0]}<br />{t.stats.fin.split('Highly efficient ')[1] || t.stats.fin}</p>
        </div>
        <div className="p-4">
          <p className="text-5xl font-display font-medium text-gray-900 mb-2">50m</p>
          <p className="text-xs text-gray-500 uppercase tracking-wide leading-relaxed">{t.stats.use.split('providing')[0]}<br />{t.stats.use.split('worldwide, ')[1] || t.stats.use}</p>
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = ({ t }) => (
  <section className="py-24 bg-white relative">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <h2 className="font-display font-light text-7xl md:text-9xl tracking-[0.05em] uppercase text-center mb-24 text-gray-900">
        {t.contact.title}
      </h2>
      <div className="grid md:grid-cols-12 gap-16">
        <div className="md:col-span-4 space-y-12">
          <div>
            <h4 className="font-bold text-gray-900 mb-1">Manhattan, New York</h4>
            <p className="text-sm text-gray-500">2023</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">{t.contact.hours}</h4>
            <p className="text-sm text-gray-500">{t.contact.days}<br />11 AM - 2 PM</p>
          </div>
        </div>
        <div className="md:col-span-8">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-4">{t.contact.name}</label>
              <div className="grid grid-cols-2 gap-8">
                <div className="relative border-b border-gray-300 focus-within:border-black transition-colors">
                  <input className="w-full bg-transparent border-none p-2 text-sm focus:ring-0 placeholder-gray-400" placeholder={t.contact.first} type="text" />
                </div>
                <div className="relative border-b border-gray-300 focus-within:border-black transition-colors">
                  <input className="w-full bg-transparent border-none p-2 text-sm focus:ring-0 placeholder-gray-400" placeholder={t.contact.last} type="text" />
                </div>
              </div>
            </div>
            <div className="relative border-b border-gray-300 focus-within:border-black transition-colors">
              <select className="w-full bg-transparent border-none p-2 pl-0 text-sm focus:ring-0 text-gray-500">
                <option>{t.contact.service}</option>
                <option>{t.contact.web}</option>
                <option>{t.contact.dev}</option>
                <option>{t.contact.cons}</option>
              </select>
            </div>
            <div className="relative border-b border-gray-300 focus-within:border-black transition-colors">
              <input className="w-full bg-transparent border-none p-2 pl-0 text-sm focus:ring-0 placeholder-gray-500" placeholder={t.contact.email} type="email" />
            </div>
            <div className="flex items-center gap-3 py-2">
              <input className="rounded-full border-gray-300 text-black focus:ring-black" id="newsletter" type="checkbox" />
              <label className="text-xs text-gray-500" htmlFor="newsletter">{t.contact.news}</label>
            </div>
            <div className="relative border-b border-gray-300 focus-within:border-black transition-colors pt-4">
              <textarea className="w-full bg-transparent border-none p-2 pl-0 text-sm focus:ring-0 placeholder-gray-500 resize-none" placeholder={t.contact.desc} rows={1}></textarea>
            </div>
            <div className="pt-8">
              <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-primary transition-colors" type="submit">
                {t.contact.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = ({ t }) => (
  <footer className="bg-background-light pt-16 pb-8 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
        <h3 className="font-display font-bold text-3xl md:text-4xl text-gray-900 tracking-tight">
          contact@studio.com
        </h3>
        <h3 className="font-display font-bold text-3xl md:text-4xl text-gray-900 tracking-tight">
          (+48) 762 864 075
        </h3>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-end md:items-end gap-8 text-xs text-gray-500 font-medium">
        <div className="flex flex-col md:flex-row gap-8 md:gap-24">
          <div>
            <p className="text-gray-900 font-bold mb-1">Manhattan, New York</p>
            <p>2023</p>
          </div>
          <div>
            <p className="text-gray-900 font-bold mb-1">{t.contact.hours}</p>
            <p>{t.contact.days} 11 AM - 2 PM</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span>{t.footer.hello}</span>
          <a className="border-b border-gray-400 hover:border-black text-gray-900 transition-colors" href="#">{t.footer.work}</a>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-gray-400">© 2023 {t.footer.copy} <a className="underline" href="#">Produlis Studio</a> | Photos from pexels.com</p>
        <div className="flex items-center gap-6">
          <a className="text-gray-600 hover:text-black font-bold text-sm" href="#">Bē</a>
          <a className="text-gray-600 hover:text-black" href="#">
            <Camera size={18} />
          </a>
          <a className="text-gray-600 hover:text-black" href="#">
            <Facebook size={18} />
          </a>
          <a className="text-[10px] text-gray-500 hover:text-black ml-4" href="#">{t.footer.policy}</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [lang, setLang] = useState('es');
  const t = translations[lang];

  return (
    <div className="min-h-screen">
      <Header lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <BrandTicker />
        <CollaborationHeader t={t} />
        <ArchGallery />
        <ProductCarousel t={t} />
        <AboutSection t={t} />
        <ImageGrid t={t} />
        <StatsSection t={t} />
        <ContactSection t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
