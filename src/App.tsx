/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ShoppingBag, 
  ArrowRight, 
  ArrowLeft, 
  Maximize2, 
  RotateCcw, 
  Play, 
  Camera, 
  Facebook 
} from "lucide-react";
import { useState } from "react";

// --- Components ---

const Header = () => (
  <header className="w-full py-6 px-8 flex justify-between items-center sticky top-0 z-50 bg-background-light/95 backdrop-blur-sm">
    <div className="h-12">
      <img 
        src="https://i.imgur.com/emF6zaN.png" 
        alt="Flaire Logo" 
        className="h-full object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
    <nav className="hidden md:flex bg-white rounded-full px-1 py-1 shadow-sm border border-gray-100">
      <a className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium transition-colors" href="#">Home</a>
      <a className="px-6 py-2 text-sm text-gray-600 hover:text-primary transition-colors" href="#">Sale</a>
      <a className="px-6 py-2 text-sm text-gray-600 hover:text-primary transition-colors" href="#">Contact</a>
    </nav>
    <div className="flex items-center gap-4">
      <button className="p-2 text-gray-600 hover:text-primary transition-colors">
        <ShoppingBag size={20} />
      </button>
      <a className="border border-gray-300 px-5 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-white hover:border-primary transition-colors" href="#">Sign Up</a>
    </div>
  </header>
);

const Hero = () => (
  <section className="flex flex-col items-center text-center pt-16 pb-24 px-4">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight"
    >
      <span className="block text-gray-900 uppercase">Where Image <span className="text-primary italic font-light">Becomes</span></span>
      <span className="block text-primary font-light uppercase">Influence.</span>
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="max-w-3xl text-gray-500 text-sm md:text-base mb-10 leading-relaxed whitespace-pre-line"
    >
      We create unforgettable looks for celebrities, TV programs, and commercial productions.
      From concept to camera-ready styling, we craft wardrobes that command attention and define presence.
      {"\n\n"}
      In front of millions, every detail matters.
      Step into the spotlight with confidence.
    </motion.p>
    <motion.a 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group bg-white border border-gray-200 rounded-full pl-6 pr-2 py-2 flex items-center gap-3 shadow-md hover:shadow-lg transition-all" 
      href="#"
    >
      <span className="font-medium text-sm">New Collection</span>
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

const ProductCarousel = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 relative flex items-center justify-center">
        <button className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800 hover:text-primary transition-colors border border-gray-100">
          <ArrowLeft size={20} />
        </button>
        
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-8 w-full justify-start md:justify-center">
          {/* Left Item */}
          <div className="min-w-[200px] md:min-w-[240px] opacity-60 scale-90 transition-all duration-300">
            <div className="bg-[#Fdf8f4] rounded-3xl p-4 h-[300px] flex items-center justify-center relative">
              <img alt="Yellow Shirt" className="h-full object-contain mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC83KPMsbf607PEcCA7oX_XLpBZddzKkoJSJAiLQ5aKJxxCJLrUrXFf1yMJEjtuiBKPzG_4yuiqVlrU97JOu3xHOcUg6U-mMVQ3W_kZzmvCu_1k9kBoVk3EruvH4n24AuKKehjDC13h6VdW8Hd-5hgNavVFx9Z7rWlxuBJCoPhO9lC-Qo7bD4udhV1hQF-2ydxEgNDuwR_RpJ_9qfyJGXwiTnUZeur2EVdcWXZ2b6Zff7aT51qD_rjhoTHaSxz5y8XeTeeF5gJ5bQ" referrerPolicy="no-referrer" />
            </div>
          </div>

          {/* Secondary Item */}
          <div className="min-w-[250px] md:min-w-[280px] bg-white rounded-3xl p-4 shadow-sm border border-gray-100 h-[380px] flex flex-col items-center justify-center">
            <img alt="Grey Shorts" className="h-64 object-contain mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRl6C9cSRsRcMLKbDwHTwJ_nJfMAvfsw3QdIdDUlbSzuf3YeSwuv8WLJnL9UgFtUH1N2FbSHAQKwOZf0ew5V25S2cLbn5zfZambJ_6G622qII8gOmVBZGiFDhci3E0bqVJ5-XtbBxVRifHomwDwuYxZ9cByQntmaPLKTnRi3PH-N2qoQ4icN1ViX3w11hXdxVTT5SzS589npg-povDItyLmLFfU0-Lf5sUPbEN5a0IvhEBndqFR6udzdCK_NdYGuhO7O0t79PwDA" referrerPolicy="no-referrer" />
          </div>

          {/* Featured Item */}
          <div className="min-w-[300px] md:min-w-[340px] bg-white rounded-[2rem] shadow-2xl z-10 transform scale-105 border border-gray-100 relative flex flex-col">
            <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-gray-800 shadow-sm">New</div>
            <div className="absolute top-1/2 right-[-2rem] transform -rotate-90 origin-left text-xs tracking-[0.3em] text-gray-400 uppercase hidden md:block">Quick/Formal Edition</div>
            <div className="h-[400px] p-4 flex items-center justify-center bg-gray-50 rounded-t-[2rem]">
              <img alt="Formal Outfit" className="h-full object-contain mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAembO7wB_MfuHNQC_YLlicK43cTdMXUuUi-SWYanlyPuQxkMutQj6_fhpLGfo27Jw7Lnfl69Oo9DukxHP_Gv1w6_OgTscZs2jc1wxwDa7xPi1e8qoslYBtv5GDVqU8zn97Ce9GPHWE7AGZyg4VMZ3tSXcK-hYfZSRiEMat7vS4fj8l1b292mnv4IfbijJ_HOULs8-TnTKkcjL9GqKwnYp_LYLjn1OIu2twpdKvne0O0kzzWCkSiD3FFe0A__s6mhCnGa09Llhqg" referrerPolicy="no-referrer" />
            </div>
            <div className="p-6 text-center relative bg-white rounded-b-[2rem]">
              <button className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary transition-colors">
                <ShoppingBag size={18} />
              </button>
              <p className="text-xs text-gray-500 mt-4 mb-1">Starting from</p>
              <p className="text-lg font-bold text-gray-900">130.00 <span className="text-xs align-top">USD</span></p>
            </div>
          </div>

          {/* Secondary Item Right */}
          <div className="min-w-[250px] md:min-w-[280px] bg-white rounded-3xl p-4 shadow-sm border border-gray-100 h-[380px] flex flex-col items-center justify-center">
            <img alt="Brown Sweater Outfit" className="h-64 object-contain mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9b1LJqYo2D95z6udOUpvTNLSDY-JVKSQCPV1OQNtuU_tEvxQY7wbOjYJGLKDtQV5qFi6ManKLXgTaTxGVRnUYyA0r3Jg2PASLpxidoZVTojMr6uVXpyG0dNzEB-b4ZHDglbFak7i-FWnkcnDIKIhSj0g2IIA3mC7Gg6Bwe3s_IbpbTTN7toQIBgce9FVeZaQQr6TJEFpS1me1DxjbWY-zGRRWNrWjaXLLNPPPiFoQC1g6oVpuijledeXH0P_w-BAuY8yk4xB5Cg" referrerPolicy="no-referrer" />
          </div>

          {/* Right Item */}
          <div className="min-w-[200px] md:min-w-[240px] opacity-60 scale-90">
            <div className="bg-gray-100 rounded-3xl p-4 h-[300px] flex items-center justify-center">
              <img alt="Jacket" className="h-full object-contain mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6tvXTUvjEeY05-sdsYzpm8ZvErJfsEkhmQMbkIjRXjt6IyemjkWb9LhO6HPVLHSdX4C19Po83TeHxGyM6aWkRwV3x7CUDzgmowxx0Z_XU_RhD_ZjeejQTzd1ambSF56HlwM78pyWbHfDXITycMskCqc2cT3QB94IS1hp2TCR6mpUdNq7j9Bu4BoYT_T7xPALDMJBNVv7x9mAMpsd3E3ZWNtalPadqTuwDqxO_DvqKDLgMLSEAlsyAf6Y7ikNLPPaWKWlmYfR85w" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>

        <button className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800 hover:text-primary transition-colors border border-gray-100">
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section className="bg-background-dark text-white overflow-hidden min-h-[600px] flex items-center">
    <div className="container mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-12 items-center py-16">
      <div className="max-w-lg">
        <h2 className="text-3xl font-display font-bold mb-2 tracking-wider uppercase">About</h2>
        <p className="text-gray-400 text-sm mb-12">j.martin@uptowork.com</p>
        <div className="space-y-6 text-gray-300 font-light leading-relaxed">
          <p>Fashion Designer with over 10 years of experience specializing in creative direction and collection development for international fashion brands.</p>
          <p>I can implement effective design strategies at both local and global levels. My greatest strength is strong market awareness, which enables me to consistently create collections that align with brand identity, consumer behavior, and emerging trends while optimizing production processes and visual storytelling.</p>
        </div>
        <div className="mt-20 border-t border-gray-700 pt-6 inline-block">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Florida, Orlando</p>
          <p className="text-xs text-gray-500">12529 State Road 535</p>
        </div>
      </div>
      <div className="flex justify-center items-center h-full">
        <motion.img 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          alt="Portrait" 
          className="max-h-[550px] w-auto object-contain rounded-lg shadow-2xl" 
          src="https://i.imgur.com/bYAU924.png" 
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </section>
);

const ImageGrid = () => (
  <section className="bg-white">
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="relative min-h-[500px]">
        <img alt="Fashion Group" className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDrbxbfdmVj6crrfUddpSpWx8gRmEZLFQMt-2piMDbfbpM7X2hhSi9IkAGZOWcxquvHt0X4SKNfhgaCNBbWRnbhAaB69Thv6_nskMhQaNhA61ALFAGeNmnh0tdrjaJYecZVGlyn3OdX3riBy9Cl2qhM9zE_PtbEZfzemr_Kz34Qyjyf5nN9Vra9k0je3dVAQmyzyOyX34fP_RI-0rbHZk0wGYoBKjVCd2EJyDtUM5C03YRXBSB6qmEiuBKCeQrMkM9YtPC68sEMw" referrerPolicy="no-referrer" />
      </div>
      <div className="flex flex-col">
        <div className="h-[400px]">
          <img alt="Smiling Woman" className="w-full h-full object-cover object-top" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZQWP-GBVM8tZCXxyLSJhbiLtdl7JltfJAH82MWXlgciEzHZFSMUbJd_De8_rXGTOqCiOP9GRJCtEaJUwk9y1PUlwt_-y9WE78fml655WWUio7BS6aOoLMO6IrJRXe_8SFnyLyIlWhVvqWLCT2xjqfWWVdGuPihhtq3Aj9Wj7nwhGQEneLAU85EpDGCNRbt7XgSg0_woJk02Pl1GkijBGNBrZrLPucha_gdTqMxV6NYr_a9JVDvkhqU1hwlLHrMYuxCKtjTveiXw" referrerPolicy="no-referrer" />
        </div>
        <div className="bg-background-light py-12 text-center">
          <h2 className="font-display text-4xl uppercase tracking-widest text-gray-800 mb-8">Lorem Ipsum</h2>
        </div>
      </div>
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

const StatsSection = () => (
  <section className="py-24 bg-white border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
        <div className="p-4">
          <p className="text-5xl font-display font-medium text-gray-900 mb-2">95%</p>
          <p className="text-xs text-gray-500 uppercase tracking-wide leading-relaxed">Complete customer<br/>satisfaction</p>
        </div>
        <div className="p-4">
          <p className="text-5xl font-display font-medium text-gray-900 mb-2">10+</p>
          <p className="text-xs text-gray-500 uppercase tracking-wide leading-relaxed">Innovation and valuable<br/>insight</p>
        </div>
        <div className="p-4">
          <p className="text-5xl font-display font-medium text-gray-900 mb-2">$10m</p>
          <p className="text-xs text-gray-500 uppercase tracking-wide leading-relaxed">Highly efficient financial<br/>strategies</p>
        </div>
        <div className="p-4">
          <p className="text-5xl font-display font-medium text-gray-900 mb-2">50m</p>
          <p className="text-xs text-gray-500 uppercase tracking-wide leading-relaxed">Users worldwide,<br/>providing them with</p>
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="py-24 bg-white relative">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <h2 className="font-display font-bold text-7xl md:text-9xl tracking-tighter text-center mb-24 text-gray-900">
        Contact me
      </h2>
      <div className="grid md:grid-cols-12 gap-16">
        <div className="md:col-span-4 space-y-12">
          <div>
            <h4 className="font-bold text-gray-900 mb-1">Manhattan, New York</h4>
            <p className="text-sm text-gray-500">2023</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">Office hours</h4>
            <p className="text-sm text-gray-500">Monday - Friday<br/>11 AM - 2 PM</p>
          </div>
        </div>
        <div className="md:col-span-8">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-4">Name (required)</label>
              <div className="grid grid-cols-2 gap-8">
                <div className="relative border-b border-gray-300 focus-within:border-black transition-colors">
                  <input className="w-full bg-transparent border-none p-2 text-sm focus:ring-0 placeholder-gray-400" placeholder="First Name" type="text" />
                </div>
                <div className="relative border-b border-gray-300 focus-within:border-black transition-colors">
                  <input className="w-full bg-transparent border-none p-2 text-sm focus:ring-0 placeholder-gray-400" placeholder="Last Name" type="text" />
                </div>
              </div>
            </div>
            <div className="relative border-b border-gray-300 focus-within:border-black transition-colors">
              <select className="w-full bg-transparent border-none p-2 pl-0 text-sm focus:ring-0 text-gray-500">
                <option>Service</option>
                <option>Web Design</option>
                <option>Development</option>
                <option>Consulting</option>
              </select>
            </div>
            <div className="relative border-b border-gray-300 focus-within:border-black transition-colors">
              <input className="w-full bg-transparent border-none p-2 pl-0 text-sm focus:ring-0 placeholder-gray-500" placeholder="Email (required)" type="email" />
            </div>
            <div className="flex items-center gap-3 py-2">
              <input className="rounded-full border-gray-300 text-black focus:ring-black" id="newsletter" type="checkbox" />
              <label className="text-xs text-gray-500" htmlFor="newsletter">Sign up for news and updates</label>
            </div>
            <div className="relative border-b border-gray-300 focus-within:border-black transition-colors pt-4">
              <textarea className="w-full bg-transparent border-none p-2 pl-0 text-sm focus:ring-0 placeholder-gray-500 resize-none" placeholder="Project description" rows={1}></textarea>
            </div>
            <div className="pt-8">
              <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-primary transition-colors" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
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
            <p className="text-gray-900 font-bold mb-1">Office hours</p>
            <p>Monday - Friday 11 AM - 2 PM</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span>Say hello</span>
          <a className="border-b border-gray-400 hover:border-black text-gray-900 transition-colors" href="#">Work with us</a>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-gray-400">© 2023 Template by <a className="underline" href="#">Produlis Studio</a> | Photos from pexels.com</p>
        <div className="flex items-center gap-6">
          <a className="text-gray-600 hover:text-black font-bold text-sm" href="#">Bē</a>
          <a className="text-gray-600 hover:text-black" href="#">
            <Camera size={18} />
          </a>
          <a className="text-gray-600 hover:text-black" href="#">
            <Facebook size={18} />
          </a>
          <a className="text-[10px] text-gray-500 hover:text-black ml-4" href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ArchGallery />
        <ProductCarousel />
        <AboutSection />
        <ImageGrid />
        <StatsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
