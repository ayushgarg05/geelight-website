/**
 * Gee Lighting Technology (GEE-LITE)
 * Shared JavaScript and TypeScript Core Engine
 * ------------------------------------------------------------------
 * Handles:
 *  1. Centralized Product Database (24+ products with specs)
 *  2. Dual-Language Manual Translation Engine (EN/HI) with persistence
 *  3. Google Website Translate widget integration (fully customized UI)
 *  4. High-Performance GPU-accelerated Scroll Reveal Animations (IntersectionObserver)
 *  5. Dynamic HTML Card Generation with content-visibility optimizations
 *  6. Dynamic Product structured SEO schema (JSON-LD) generation
 *  7. Floating dynamic WhatsApp integration with prefilled localized messages
 *  8. Web3Forms AJAX contact form with honeypot validation
 *  9. Animated Stats Counters
 *  10. Responsive UI interactions (sticky navbar, mobile menu)
 */

// WHATSAPP NUMBER - REPLACE WITH REAL DEALER PHONE (intl format, no leading +)
// <!-- REPLACE: '919810012345' (or similar real Indian business WhatsApp number) -->
const WHATSAPP_NUMBER = "919999014605"; 

// ---------------------------------------------------------
// 1. Centralized Product Database
// ---------------------------------------------------------
interface Product {
  model: string;
  name: string;
  category: string;
  specs: string[];
  image: string;
  alt: string;
  isNew?: boolean;
}

const PRODUCTS: Product[] = [
  // SOLAR LANTERNS
  {
    model: "GL-29",
    name: "Solar Lantern GL-29",
    category: "Solar Lanterns",
    specs: ["Dual Charging: Solar & AC", "High-capacity LFP Battery", "10+ Hours backup time", "Mobile charging USB port"],
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&q=80&w=600",
    alt: "GEE-LITE GL-29 rechargeable heavy-duty solar lantern",
    isNew: true
  },
  {
    model: "GL-28",
    name: "Solar Lantern GL-28",
    category: "Solar Lanterns",
    specs: ["Sleek lightweight design", "Bright 360-degree illumination", "Built-in Solar panel", "8 Hours backup time"],
    image: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?auto=format&fit=crop&q=80&w=600",
    alt: "GEE-LITE GL-28 rechargeable solar lantern"
  },
  {
    model: "GL-28M",
    name: "Mini LED Lantern GL-28M",
    category: "Solar Lanterns",
    specs: ["Ultra-compact pocket size", "Multi-step brightness control", "Rechargeable via micro-USB", "Shatterproof housing"],
    image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=600",
    alt: "GEE-LITE GL-28M mini LED lantern"
  },

  // TORCHES
  {
    model: "GL-7",
    name: "LED Rechargeable Torch GL-7",
    category: "Torches",
    specs: ["Long-range focus (up to 500m)", "Heavy-duty ABS body", "Lithium-ion rechargeable battery", "Dual mode: High/Low beam"],
    image: "https://images.unsplash.com/photo-1555138136-1e968393fa18?auto=format&fit=crop&q=80&w=600",
    alt: "GEE-LITE GL-7 long-range rechargeable flashlight"
  },
  {
    model: "GL-14",
    name: "Kisan Torch GL-14",
    category: "Torches",
    specs: ["Designed for farming environments", "Super powerful searchlight beam", "Side emergency tube-light", "Corrosion-proof build"],
    image: "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?auto=format&fit=crop&q=80&w=600",
    alt: "GEE-LITE GL-14 Kisan high-power flashlight"
  },

  // SOLAR SYSTEMS
  {
    model: "GL-13",
    name: "Solar Power Bank GL-13",
    category: "Solar Systems",
    specs: ["10,000mAh durable battery", "Built-in high-grade solar cells", "Dual USB charging outputs", "LED emergency light panel"],
    image: "https://images.unsplash.com/photo-1609592424109-dd778844869c?auto=format&fit=crop&q=80&w=600",
    alt: "GEE-LITE GL-13 solar power bank with panel"
  },
  {
    model: "GL-10",
    name: "Solar Energy Kit GL-10",
    category: "Solar Systems",
    specs: ["Heavy-duty solar panel included", "Powers 3 DC Bulbs + Mobile charging", "Wall-mountable central unit", "LFP battery longevity"],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=600",
    alt: "GEE-LITE GL-10 multi-room solar home lighting system"
  },
  {
    model: "GL-20",
    name: "Solar Mini Energy Kit GL-20",
    category: "Solar Systems",
    specs: ["Compact portable controller", "Supports 2 external LED lamps", "Easy plug-and-play installation", "Affordable backup solution"],
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600",
    alt: "GEE-LITE GL-20 portable solar energy kit"
  },
  {
    model: "GL-9",
    name: "Solar Home System GL-9",
    category: "Solar Systems",
    specs: ["Multi-room light output ports", "Premium charge controller built-in", "Includes high-wattage solar panel", "Overcharge & deep discharge protection"],
    image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=600",
    alt: "GEE-LITE GL-9 complete solar home backup system"
  },
  {
    model: "GL-9F",
    name: "Solar Home System with Fan GL-9F",
    category: "Solar Systems",
    specs: ["Includes premium DC Pedestal Fan", "3 LED bulbs + Mobile USB charger", "12V LFP battery pack", "Fully grid-independent"],
    image: "https://images.unsplash.com/photo-1618944847023-38aa001235f0?auto=format&fit=crop&q=80&w=600",
    alt: "GEE-LITE GL-9F solar home kit with DC fan",
    isNew: true
  },
  {
    model: "GL-9T",
    name: "Solar Home System with TV GL-9T",
    category: "Solar Systems",
    specs: ["Includes low-power 12V LED TV", "Complete solar charging setup", "Superb backup performance", "Perfect for rural/remote homes"],
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=600",
    alt: "GEE-LITE GL-9T solar home kit with TV",
    isNew: true
  },
  {
    model: "Solar UPS",
    name: "Solar Home UPS",
    category: "Solar Systems",
    specs: ["Pure Sine Wave technology", "Dual input: Solar & Grid", "Supports standard home appliances", "Intelligent battery charging"],
    image: "https://images.unsplash.com/photo-1620283085439-39620a1e21c4?auto=format&fit=crop&q=80&w=600",
    alt: "GEE-LITE hybrid solar inverter UPS for home backup"
  },

  // BULBS & LAMPS
  {
    model: "GL-11",
    name: "LED Lamp GL-11",
    category: "Bulbs & Lamps",
    specs: ["High lumen efficiency LED chips", "Wide working voltage range", "Durable aluminum heat-sink", "Saves up to 85% energy"],
    image: "https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&q=80&w=600",
    alt: "GEE-LITE GL-11 high performance LED bulb"
  },
  {
    model: "Lithium LED",
    name: "Lithium Battery LED Lamp",
    category: "Bulbs & Lamps",
    specs: ["Inbuilt lithium rechargeable battery", "Emergency auto-on feature", "Handy hanging hook accessory", "4 Hours runtime on battery"],
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=600",
    alt: "GEE-LITE rechargeable lithium battery LED lamp"
  },
  {
    model: "GL-4",
    name: "AC/DC Inverter Bulb GL-4",
    category: "Bulbs & Lamps",
    specs: ["9W brightness output", "Works normally on power cuts", "Charges automatically when grid is on", "B22 standard cap format"],
    image: "https://images.unsplash.com/photo-1550537687-c91072c4792d?auto=format&fit=crop&q=80&w=600",
    alt: "GEE-LITE GL-4 AC/DC smart charging inverter bulb"
  },
  {
    model: "GL-5",
    name: "3W DC Bulb GL-5",
    category: "Bulbs & Lamps",
    specs: ["Low voltage 12V DC input", "Very low power consumption", "Ideal for solar lanterns & kits", "Comes with 3-meter copper cable"],
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d2038b5?auto=format&fit=crop&q=80&w=600",
    alt: "GEE-LITE GL-5 energy saving 12V DC bulb"
  },
  {
    model: "GL-5H",
    name: "DC Bulb 3W/5W GL-5H / GL-3",
    category: "Bulbs & Lamps",
    specs: ["Available in both 3W and 5W", "Excellent light distribution", "High quality poly-carbonate dome", "Long operational life"],
    image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&q=80&w=600",
    alt: "GEE-LITE high-efficiency DC bulb line"
  },
  {
    model: "GL-1",
    name: "R-Bulb GL-1",
    category: "Bulbs & Lamps",
    specs: ["Special internal reflector dome", "Extra-wide lighting angle", "Premium cooling system", "Ideal for reading and studying"],
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=600",
    alt: "GEE-LITE GL-1 reflector R-Bulb",
    isNew: true
  },
  {
    model: "GL-2",
    name: "Study Lamp GL-2",
    category: "Bulbs & Lamps",
    specs: ["Eye-safe flicker-free light", "Flexible arm for direction adjustment", "Rechargeable built-in battery", "Ideal for students & bedrooms"],
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=600",
    alt: "GEE-LITE GL-2 rechargeable study desk lamp"
  },

  // TUBES
  {
    model: "Tube 12V",
    name: "Tube 12V DC (3W/5W/7W)",
    category: "Tubes",
    specs: ["Available in multiple wattages", "Fitted with sturdy wall mounts", "Provides wide horizontal throw", "Direct 12V battery compatible"],
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=600",
    alt: "GEE-LITE 12V DC linear tube light series"
  },

  // FANS
  {
    model: "GL-15",
    name: "BLDC Ceiling Fan GL-15",
    category: "Fans",
    specs: ["Ultra-efficient BLDC motor", "Saves up to 60% electricity", "Supports remote control operation", "Works smoothly on solar/inverter"],
    image: "https://images.unsplash.com/photo-1523039641444-df96c6c50d53?auto=format&fit=crop&q=80&w=600",
    alt: "GEE-LITE GL-15 BLDC super saver ceiling fan"
  },
  {
    model: "GL-17/18/19",
    name: "Fan 9/12/16 inch DC 12V",
    category: "Fans",
    specs: ["High-speed 12V DC motor", "Available in 3 sizes: 9\", 12\", 16\"", "Telescopic height adjust (pedestal)", "Multi-speed heavy wind flow"],
    image: "https://images.unsplash.com/photo-1618944847023-38aa001235f0?auto=format&fit=crop&q=80&w=600",
    alt: "GEE-LITE DC 12V high speed portable fan line"
  },

  // STREET LIGHT
  {
    model: "GL-16",
    name: "Semi-Integrated Street Light GL-16",
    category: "Street Lights",
    specs: ["Auto dusk-to-dawn sensor", "Integrated LFP battery & LED board", "High quality poly solar panel", "IP65 waterproof certified"],
    image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=600",
    alt: "GEE-LITE GL-16 outdoor solar street light"
  },

  // INVERTERS
  {
    model: "GL-8",
    name: "CFL Inverter GL-8",
    category: "Inverters",
    specs: ["Compact lightweight inverter unit", "Supports CFL and low-wattage LEDs", "Overload & short-circuit auto cutout", "Great battery utility ratio"],
    image: "https://images.unsplash.com/photo-1620283085439-39620a1e21c4?auto=format&fit=crop&q=80&w=600",
    alt: "GEE-LITE GL-8 portable mini CFL inverter"
  }
];

// ---------------------------------------------------------
// 2. Dual-Language Manual Translation Engine (EN/HI)
// ---------------------------------------------------------
const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    "nav-home": "Home",
    "nav-about": "About Us",
    "nav-products": "Products",
    "nav-contact": "Contact Us",
    "lang-toggle": "हिन्दी",
    "hero-badge": "Since 2005 · ISO 9001:2015 Certified · Make in India",
    "hero-title": "Whether the power stays or goes, keep your home glowing.",
    "hero-subtitle": "Gee Lighting Technology (GEE-LITE) is a leading New Delhi-based manufacturer of highly efficient solar lanterns, torches, power backup kits, DC appliances, and advanced LED solutions. Powering millions across India, Nepal, and Africa.",
    "btn-browse": "Browse Products",
    "btn-dealer": "Become a Dealer",
    "btn-brochure": "Download Brochure",
    "stats-years-lbl": "Years of Excellence",
    "stats-models-lbl": "Product Models",
    "stats-countries-lbl": "Countries Reached",
    "trust-title": "Accredited Quality Standards",
    "trust-iso": "ISO 9001:2015 Certified",
    "trust-msme": "MSME Registered",
    "trust-ce": "CE Approved",
    "trust-india": "Make in India",
    "why-title": "Why Gee Lighting Technology?",
    "why-sub": "Pioneering green energy and robust lighting engineering for over two decades.",
    "why-1-title": "20+ Years Legacy",
    "why-1-desc": "Established in 2005, trusted for decades in manufacturing premium backup systems.",
    "why-2-title": "In-House Manufacturing",
    "why-2-desc": "Modern industrial facility in New Delhi ensuring strict quality control from raw parts to testing.",
    "why-3-title": "Extreme Quality Testing",
    "why-3-desc": "Every single batch is tested for battery endurance, light dispersion, and casing resilience.",
    "why-4-title": "Global Logistics Network",
    "why-4-desc": "Robust supply chain delivering to active dealers and distributors in India, Nepal, and Africa.",
    "preview-title": "Core Product Categories",
    "preview-sub": "Comprehensive solar and energy-efficient LED configurations crafted for maximum durability.",
    "cta-banner-title": "Interested in Bulk Wholesale or Dealership?",
    "cta-banner-desc": "Partner with GEE-LITE to scale high-quality lighting in your region. Secure exclusive distribution pricing.",
    "cta-banner-btn": "Send Dealership Enquiry",
    "footer-about-title": "Gee Lighting Technology",
    "footer-about-desc": "Pioneering clean, dependable, and affordable solar power systems and LED bulbs under the GEE-LITE label. Proudly serving dealers since 2005.",
    "footer-links-title": "Quick Navigation",
    "footer-categories-title": "Product Segments",
    "footer-contact-title": "Corporate Office",
    "footer-copyright": "© 2005–2026 Gee Lighting Technology (GEE-LITE). All rights reserved. Registered MSME / ISO 9001:2015 certified manufacturer.",
    "brochure-title": "Product Brochure",
    "brochure-desc": "Get direct access to technical specifications, dimension sheets, and wholesale ordering codes for our entire range.",
    "brochure-btn-main": "Get Technical Brochure (PDF)",
    "about-hero-title": "Our Legacy & Enterprise",
    "about-hero-sub": "About GEE-LITE - Lighting up rural and urban homes with certified green energy products since 2005.",
    "about-story-title": "The GEE-LITE Story",
    "about-story-p1": "Established in 2005 in New Delhi by visionary founder Mr. Lalit Jain, Gee Lighting Technology emerged as a direct response to India's rural electrification goals. Operating under our premium trademark 'GEE-LITE', we evolved from a small assembly unit into a massive manufacturing house serving thousands of B2B dealers.",
    "about-story-p2": "Over 20 years, GEE-LITE has pioneered highly optimized LFP battery integrations, multi-port solar charge controllers, and low-loss BLDC motor configurations. We treat backup power not as a premium luxury, but as an essential daily utility for households, clinics, schools, and commercial establishments.",
    "about-mission-title": "Our Mission",
    "about-mission-desc": "To design, manufacture, and distribute affordable, resilient, and eco-friendly solar lighting devices that replace toxic kerosene grids entirely.",
    "about-vision-title": "Our Vision",
    "about-vision-desc": "To remain the most trusted manufacturer of off-grid appliances, expanding our dealer footprint across South Asia and East Africa.",
    "about-infra-title": "Infrastructure & Production Power",
    "about-infra-desc": "Our New Delhi factory houses advanced battery cycle analyzers, LED integration boards, automated assembly rails, and robust safety testing chambers. We manage raw materials, electronics boards, molding, quality vetting, and secure packaging under a single ISO 9001:2015 approved roof.",
    "about-sectors-title": "Sectors We Serve",
    "about-sector-1": "Residential Households",
    "about-sector-2": "Government & Public Offices",
    "about-sector-3": "Agricultural Farmhouses",
    "about-sector-4": "Pharmaceutical & Cold Storage Units",
    "about-sector-5": "Public Utilities & Street Grids",
    "products-hero-title": "Our Product Catalogue",
    "products-hero-sub": "Explore our complete range of certified solar devices, battery bulbs, and high-performance DC fans.",
    "contact-hero-title": "Get in Touch / Dealership",
    "contact-hero-sub": "Connect with our New Delhi head office to start your partnership or request custom product builds.",
    "contact-form-title": "Wholesale / Dealership Enquiry Form",
    "contact-form-name": "Your Full Name",
    "contact-form-email": "Email Address",
    "contact-form-phone": "Contact/WhatsApp Number",
    "contact-form-company": "Shop / Company Name",
    "contact-form-msg": "Your Detailed Query / Required Models",
    "contact-form-submit": "Send Secure Inquiry",
    "contact-details-title": "Headquarters Address",
    "index-cat-1-title": "Solar Lanterns",
    "index-cat-1-desc": "Heavy-duty solar & AC rechargeable lantern lines like GL-29 & GL-28. Best-in-class batteries.",
    "index-cat-1-link": "Explore Lanterns →",
    "index-cat-2-title": "Solar Systems & UPS",
    "index-cat-2-desc": "Centralized power kits (GL-10, GL-9) complete with pedestal fans, TV connectivity, and smart home UPS controllers.",
    "index-cat-2-link": "Explore Energy Kits →",
    "index-cat-3-title": "LED Bulbs & Inverter Lamps",
    "index-cat-3-desc": "Smart inverter backup lamps (GL-4), low-wattage 12V DC bulbs, lithium rechargeable tubes, and student lamps.",
    "index-cat-3-link": "Explore LED Bulbs →"
  },
  hi: {
    "nav-home": "मुख्य पृष्ठ",
    "nav-about": "हमारे बारे में",
    "nav-products": "उत्पाद",
    "nav-contact": "संपर्क करें",
    "lang-toggle": "English",
    "hero-badge": "2005 से कार्यरत · आईएसओ 9001:2015 प्रमाणित · मेक इन इंडिया",
    "hero-title": "बिजली रहे या न रहे, आपका घर रोशन रहे।",
    "hero-subtitle": "जी लाइटिंग टेक्नोलॉजी (GEE-LITE) नई दिल्ली स्थित एक प्रमुख सोलर लालटेन, टॉर्च, पावर बैकअप किट, डीसी उपकरण और आधुनिक एलईडी लाइट्स निर्माता है। भारत, नेपाल और अफ्रीका के लाखों घरों को रोशन कर रहा है।",
    "btn-browse": "उत्पाद देखें",
    "btn-dealer": "डीलर बनें",
    "btn-brochure": "ब्रोशर डाउनलोड करें",
    "stats-years-lbl": "वर्षों की उत्कृष्टता",
    "stats-models-lbl": "उत्पाद मॉडल",
    "stats-countries-lbl": "पहुंचे देश",
    "trust-title": "मान्यता प्राप्त गुणवत्ता मानक",
    "trust-iso": "आईएसओ 9001:2015 प्रमाणित",
    "trust-msme": "MSME पंजीकृत",
    "trust-ce": "सीई स्वीकृत",
    "trust-india": "मेक इन इंडिया",
    "why-title": "जी लाइटिंग क्यों चुनें?",
    "why-sub": "दो दशकों से अधिक समय से हरित ऊर्जा और बेहतरीन लाइटिंग इंजीनियरिंग में अग्रणी।",
    "why-1-title": "20+ वर्षों की विरासत",
    "why-1-desc": "2005 में स्थापित, प्रीमियम बैकअप सिस्टम के निर्माण में दशकों से विश्वसनीय।",
    "why-2-title": "इन-हाउस मैन्युफैक्चरिंग",
    "why-2-desc": "नई दिल्ली में आधुनिक विनिर्माण इकाई जो कच्चे माल से लेकर अंतिम परीक्षण तक सख्त गुणवत्ता नियंत्रण सुनिश्चित करती है।",
    "why-3-title": "कड़ा गुणवत्ता परीक्षण",
    "why-3-desc": "प्रत्येक बैच का बैटरी लाइफ, प्रकाश वितरण और बॉडी मजबूती के लिए कड़ा परीक्षण किया जाता है।",
    "why-4-title": "वैश्विक वितरण नेटवर्क",
    "why-4-desc": "भारत, नेपाल और अफ्रीका में सक्रिय डीलरों और वितरकों तक समय पर सुरक्षित डिलीवरी प्रणाली।",
    "preview-title": "मुख्य उत्पाद श्रेणियां",
    "preview-sub": "अधिकतम टिकाऊपन के लिए तैयार किए गए हमारे सोलर और ऊर्जा-कुशल एलईडी उत्पादों की विस्तृत श्रृंखला।",
    "cta-banner-title": "थोक थोक व्यापार या डीलरशिप में रुचि है?",
    "cta-banner-desc": "अपने क्षेत्र में उच्च गुणवत्ता वाली लाइटिंग बेचने के लिए GEE-LITE से जुड़ें। विशेष वितरण मूल्य प्राप्त करें।",
    "cta-banner-btn": "डीलरशिप पूछताछ भेजें",
    "footer-about-title": "जी लाइटिंग टेक्नोलॉजी",
    "footer-about-desc": "GEE-LITE ब्रांड के तहत पर्यावरण के अनुकूल, विश्वसनीय और किफायती सोलर पावर सिस्टम और एलईडी बल्ब का निर्माण। 2005 से डीलरों की पहली पसंद।",
    "footer-links-title": "त्वरित नेविगेशन",
    "footer-categories-title": "उत्पाद श्रेणियां",
    "footer-contact-title": "कॉर्पोरेट कार्यालय",
    "footer-copyright": "© 2005–2026 जी लाइटिंग टेक्नोलॉजी (GEE-LITE)। सर्वाधिकार सुरक्षित। पंजीकृत MSME / ISO 9001:2015 प्रमाणित निर्माता।",
    "brochure-title": "उत्पाद ब्रोशर",
    "brochure-desc": "हमारे सभी उत्पादों के तकनीकी विवरण, आकार पत्रक और थोक ऑर्डर कोड के लिए ब्रोशर डाउनलोड करें।",
    "brochure-btn-main": "ब्रोशर डाउनलोड करें (PDF)",
    "about-hero-title": "हमारी विरासत और उद्यम",
    "about-hero-sub": "GEE-LITE के बारे में - 2005 से प्रमाणित हरित ऊर्जा उत्पादों के साथ ग्रामीण और शहरी घरों को रोशन करना।",
    "about-story-title": "GEE-LITE की कहानी",
    "about-story-p1": "संस्थापक श्री ललित जैन द्वारा 2005 में नई दिल्ली में स्थापित, जी लाइटिंग टेक्नोलॉजी भारत के ग्रामीण विद्युतीकरण लक्ष्यों को पूरा करने में महत्वपूर्ण योगदान दे रही है। हमारे प्रीमियम ट्रेडमार्क 'GEE-LITE' के तहत, हम एक छोटी इकाई से विकसित होकर हजारों B2B डीलरों की सेवा करने वाले एक विशाल विनिर्माण घराने में बदल गए।",
    "about-story-p2": "20 वर्षों से अधिक समय से, GEE-LITE ने अत्यधिक अनुकूलित LFP बैटरी एकीकरण, मल्टी-पोर्ट सोलर चार्ज कंट्रोलर और लो-लॉस BLDC मोटर फैन विकसित किए हैं। हम बैकअप पावर को केवल विलासिता नहीं, बल्कि घरों, क्लीनिकों और ग्रामीण उद्यमों के लिए एक आवश्यक दैनिक आवश्यकता मानते हैं।",
    "about-mission-title": "हमारा उद्देश्य",
    "about-mission-desc": "सस्ते, टिकाऊ और पर्यावरण के अनुकूल सोलर लाइटिंग उपकरणों का निर्माण और वितरण करना, जो पूरी तरह से सुरक्षित रोशनी प्रदान करें।",
    "about-vision-title": "हमारा लक्ष्य",
    "about-vision-desc": "दक्षिण एशिया और पूर्वी अफ्रीका में अपने डीलर नेटवर्क का विस्तार करते हुए ऑफ-ग्रिड उपकरणों का सबसे भरोसेमंद निर्माता बने रहना।",
    "about-infra-title": "इन्फ्रास्ट्रक्चर और उत्पादन क्षमता",
    "about-infra-desc": "हमारी नई दिल्ली स्थित फैक्ट्री में उन्नत बैटरी साइकिल एनालाइजर, एलईडी बोर्ड इंटीग्रेटर, ऑटोमैटिक असेंबली लाइनें और अत्याधुनिक परीक्षण कक्ष हैं। हम एक ही छत के नीचे आईएसओ 9001:2015 मानकों के अनुसार उत्पादन संभालते हैं।",
    "about-sectors-title": "जिन क्षेत्रों में हम सेवाएं देते हैं",
    "about-sector-1": "घरेलू आवास",
    "about-sector-2": "सरकारी और सार्वजनिक कार्यालय",
    "about-sector-3": "कृषि फार्महाउस",
    "about-sector-4": "फार्मास्युटिकल और कोल्ड स्टोरेज इकाइयां",
    "about-sector-5": "सार्वजनिक मार्ग और स्ट्रीट लाइट ग्रिड",
    "products-hero-title": "हमारा उत्पाद कैटलॉग",
    "products-hero-sub": "हमारे प्रमाणित सोलर उपकरणों, इनवर्टर बल्बों और उच्च क्षमता वाले डीसी पंखों की पूरी रेंज देखें।",
    "contact-hero-title": "संपर्क करें / डीलरशिप पूछताछ",
    "contact-hero-sub": "साझेदारी शुरू करने या कस्टम उत्पाद आवश्यकताओं के लिए हमारे नई दिल्ली मुख्यालय से संपर्क करें।",
    "contact-form-title": "थोक / डीलरशिप पूछताछ फॉर्म",
    "contact-form-name": "आपका पूरा नाम",
    "contact-form-email": "ईमेल पता",
    "contact-form-phone": "संपर्क/व्हाट्सएप नंबर",
    "contact-form-company": "दुकान / कंपनी का नाम",
    "contact-form-msg": "आपकी विस्तृत आवश्यकता / आवश्यक मॉडल",
    "contact-form-submit": "सुरक्षित पूछताछ भेजें",
    "contact-details-title": "मुख्यालय का पता",
    "index-cat-1-title": "सोलर लालटेन",
    "index-cat-1-desc": "हैवी-ड्यूटी सोलर और एसी रिचार्जेबल लालटेन रेंज जैसे GL-29 और GL-28। बेहतरीन बैटरियां।",
    "index-cat-1-link": "लालटेन देखें →",
    "index-cat-2-title": "सोलर सिस्टम और यूपीएस",
    "index-cat-2-desc": "डीसी पेडेस्टल पंखे, टीवी कनेक्टिविटी और स्मार्ट होम यूपीएस कंट्रोलर से लैस मुख्य पावर किट (GL-10, GL-9)।",
    "index-cat-2-link": "एनर्जी किट देखें →",
    "index-cat-3-title": "एलईडी बल्ब और इन्वर्टर लैंप",
    "index-cat-3-desc": "स्मार्ट इन्वर्टर बैकअप लैंप (GL-4), कम वाट के 12V डीसी बल्ब, लिथियम रिचार्जेबल ट्यूब और स्टडी लैंप।",
    "index-cat-3-link": "एलईडी बल्ब देखें →"
  }
};

// ---------------------------------------------------------
// 2.1 Product Database Hindi Translation Dictionary
// ---------------------------------------------------------
const PRODUCT_TRANSLATIONS: Record<string, string> = {
  // Categories
  "All": "सभी",
  "Solar Lanterns": "सोलर लालटेन",
  "Torches": "टॉर्च",
  "Solar Systems": "सोलर सिस्टम",
  "Bulbs & Lamps": "बल्ब और लैंप",
  "Tubes": "ट्यूब लाइट्स",
  "Fans": "पंखे",
  "Street Lights": "स्ट्रीट लाइट्स",
  "Inverters": "इन्वर्टर",

  // Product Names
  "Solar Lantern GL-29": "सोलर लालटेन GL-29",
  "Solar Lantern GL-28": "सोलर लालटेन GL-28",
  "Mini LED Lantern GL-28M": "मिनी एलईडी लालटेन GL-28M",
  "LED Rechargeable Torch GL-7": "एलईडी रिचार्जेबल टॉर्च GL-7",
  "Kisan Torch GL-14": "किसान टॉर्च GL-14",
  "Solar Power Bank GL-13": "सोलर पावर बैंक GL-13",
  "Solar Energy Kit GL-10": "सोलर एनर्जी किट GL-10",
  "Solar Mini Energy Kit GL-20": "सोलर मिनी एनर्जी किट GL-20",
  "Solar Home System GL-9": "सोलर होम सिस्टम GL-9",
  "Solar Home System with Fan GL-9F": "पंखे के साथ सोलर होम सिस्टम GL-9F",
  "Solar Home System with TV GL-9T": "टीवी के साथ सोलर होम सिस्टम GL-9T",
  "Solar Home UPS": "सोलर होम यूपीएस (UPS)",
  "LED Lamp GL-11": "एलईडी लैंप GL-11",
  "Lithium Battery LED Lamp": "लिथियम बैटरी एलईडी लैंप",
  "AC/DC Inverter Bulb GL-4": "एसी/डीसी इन्वर्टर बल्ब GL-4",
  "3W DC Bulb GL-5": "3W डीसी बल्ब GL-5",
  "DC Bulb 3W/5W GL-5H / GL-3": "डीसी बल्ब 3W/5W GL-5H / GL-3",
  "R-Bulb GL-1": "आर-बल्ब GL-1",
  "Study Lamp GL-2": "स्टडी लैंप GL-2",
  "Tube 12V DC (3W/5W/7W)": "ट्यूब 12V डीसी (3W/5W/7W)",
  "BLDC Ceiling Fan GL-15": "बीएलडीसी सीलिंग फैन GL-15",
  "Fan 9/12/16 inch DC 12V": "पंखे 9/12/16 इंच डीसी 12V",
  "Semi-Integrated Street Light GL-16": "सेमी-इंटीग्रेटेड स्ट्रीट लाइट GL-16",
  "CFL Inverter GL-8": "सीएफएल इन्वर्टर GL-8",

  // Specs
  "Dual Charging: Solar & AC": "दोहरा चार्जिंग: सोलर और एसी",
  "High-capacity LFP Battery": "उच्च क्षमता वाली एलएफपी (LFP) बैटरी",
  "10+ Hours backup time": "10+ घंटे का बैकअप समय",
  "Mobile charging USB port": "मोबाइल चार्जिंग यूएसबी पोर्ट",
  "Sleek lightweight design": "आकर्षक और हल्का डिज़ाइन",
  "Bright 360-degree illumination": "चमकदार 360-डिग्री रोशनी",
  "Built-in Solar panel": "इन-बिल्ट सोलर पैनल",
  "8 Hours backup time": "8 घंटे का बैकअप समय",
  "Ultra-compact pocket size": "अति-कॉम्पैक्ट पॉकेट आकार",
  "Multi-step brightness control": "मल्टी-स्टेप ब्राइटनेस कंट्रोल",
  "Rechargeable via micro-USB": "माइक्रो-यूएसबी द्वारा रिचार्जेबल",
  "Shatterproof housing": "टूटने से सुरक्षित मजबूत बॉडी",
  "Long-range focus (up to 500m)": "लंबी दूरी का फोकस (500 मीटर तक)",
  "Heavy-duty ABS body": "मजबूत एबीएस (ABS) बॉडी",
  "Lithium-ion rechargeable battery": "लिथियम-आयन रिचार्जेबल बैटरी",
  "Dual mode: High/Low beam": "दोहरा मोड: हाई/लो बीम",
  "Designed for farming environments": "खेती और किसानों के लिए अनुकूलित",
  "Super powerful searchlight beam": "अत्यंत शक्तिशाली सर्चलाइट बीम",
  "Side emergency tube-light": "साइड इमरजेंसी ट्यूब-लाइट",
  "Corrosion-proof build": "जंग-रोधी मजबूत बनावट",
  "10,000mAh durable battery": "10,000mAh टिकाऊ बैटरी",
  "Built-in high-grade solar cells": "इन-बिल्ट उच्च गुणवत्ता वाले सोलर सेल्स",
  "Dual USB charging outputs": "दोहरे यूएसबी चार्जिंग आउटपुट",
  "LED emergency light panel": "एलईडी इमरजेंसी लाइट पैनल",
  "Heavy-duty solar panel included": "मजबूत सोलर पैनल शामिल",
  "Powers 3 DC Bulbs + Mobile charging": "3 डीसी बल्ब + मोबाइल चार्जिंग को पावर दे",
  "Wall-mountable central unit": "दीवार पर टांगने योग्य मुख्य यूनिट",
  "LFP battery longevity": "लंबी उम्र वाली एलएफपी (LFP) बैटरी",
  "Compact portable controller": "छोटा और पोर्टेबल कंट्रोलर",
  "Supports 2 external LED lamps": "2 बाहरी एलईडी लैंप का समर्थन",
  "Easy plug-and-play installation": "आसान प्लग-एंड-प्ले इंस्टॉलेशन",
  "Affordable backup solution": "किफायती बैकअप समाधान",
  "Multi-room light output ports": "मल्टी-रूम लाइट आउटपुट पोर्ट्स",
  "Premium charge controller built-in": "प्रीमियम इन-बिल्ट चार्ज कंट्रोलर",
  "Includes high-wattage solar panel": "उच्च-वाट क्षमता वाला सोलर पैनल शामिल",
  "Overcharge & deep discharge protection": "ओवरचार्ज और डीप डिस्चार्ज सुरक्षा",
  "Includes premium DC Pedestal Fan": "प्रीमियम डीसी पेडेस्टल फैन शामिल",
  "3 LED bulbs + Mobile USB charger": "3 एलईडी बल्ब + मोबाइल यूएसबी चार्जर",
  "12V LFP battery pack": "12V एलएफपी (LFP) बैटरी पैक",
  "Fully grid-independent": "पूरी तरह से ग्रिड-स्वतंत्र",
  "Includes low-power 12V LED TV": "कम बिजली खपत वाला 12V एलईडी टीवी शामिल",
  "Complete solar charging setup": "पूर्ण सोलर चार्जिंग सेटअप",
  "Superb backup performance": "शानदार बैकअप परफॉरमेंस",
  "Perfect for rural/remote homes": "ग्रामीण और दूरदराज के घरों के लिए उत्तम",
  "Pure Sine Wave technology": "प्योर साइन वेव (Pure Sine Wave) तकनीक",
  "Dual input: Solar & Grid": "दोहरा इनपुट: सोलर और ग्रिड",
  "Supports standard home appliances": "सामान्य घरेलू उपकरणों का समर्थन",
  "Intelligent battery charging": "इंटेलिजेंट बैटरी चार्जिंग",
  "High lumen efficiency LED chips": "उच्च लुमेन दक्षता वाले एलईडी चिप्स",
  "Wide working voltage range": "विस्तृत वर्किंग वोल्टेज रेंज",
  "Durable aluminum heat-sink": "टिकाऊ एल्युमिनियम हीट-सिंक",
  "Saves up to 85% energy": "85% तक बिजली की बचत",
  "Inbuilt lithium rechargeable battery": "इन-बिल्ट लिथियम रिचार्जेबल बैटरी",
  "Emergency auto-on feature": "इमरजेंसी ऑटो-ऑन सुविधा",
  "Handy hanging hook accessory": "आसान हैंगिंग हुक एक्सेसरी",
  "4 Hours runtime on battery": "बैटरी पर 4 घंटे का रनटाइम",
  "9W brightness output": "9W ब्राइटनेस आउटपुट",
  "Works normally on power cuts": "बिजली जाने पर भी सामान्य रूप से काम करे",
  "Charges automatically when grid is on": "ग्रिड चालू होने पर स्वचालित रूप से चार्ज हो",
  "B22 standard cap format": "B22 मानक कैप फॉर्मेट",
  "Low voltage 12V DC input": "लो वोल्टेज 12V डीसी इनपुट",
  "Very low power consumption": "बहुत कम बिजली की खपत",
  "Ideal for solar lanterns & kits": "सोलर लालटेन और किट के लिए आदर्श",
  "Comes with 3-meter copper cable": "3-मीटर कॉपर केबल के साथ आता है",
  "Available in both 3W and 5W": "3W और 5W दोनों में उपलब्ध",
  "Excellent light distribution": "बेहतरीन प्रकाश वितरण",
  "High quality poly-carbonate dome": "उच्च गुणवत्ता वाला पॉली-कार्बोनेट डोम",
  "Long operational life": "लंबा परिचालन जीवन",
  "Special internal reflector dome": "विशेष आंतरिक परावर्तक (रिफ्लेक्टर) डोम",
  "Extra-wide lighting angle": "अतिरिक्त-चौड़ा लाइटिंग एंगल",
  "Premium cooling system": "प्रीमियम कूलिंग सिस्टम",
  "Ideal for reading and studying": "पढ़ने और पढ़ाई के लिए आदर्श",
  "Eye-safe flicker-free light": "आंखों के लिए सुरक्षित, झिलमिलाहट-मुक्त रोशनी",
  "Flexible arm for direction adjustment": "दिशा समायोजन के लिए लचीली आर्म (Arm)",
  "Rechargeable built-in battery": "रिचार्जेबल इन-बिल्ट बैटरी",
  "Ideal for students & bedrooms": "छात्रों और बेडरूम के लिए आदर्श",
  "Available in multiple wattages": "विभिन्न वाट क्षमताओं में उपलब्ध",
  "Fitted with sturdy wall mounts": "मजबूत वॉल माउंट के साथ",
  "Provides wide horizontal throw": "व्यापक क्षैतिज प्रकाश थ्रो",
  "Direct 12V battery compatible": "सीधे 12V बैटरी के साथ संगत",
  "Ultra-efficient BLDC motor": "अति-कुशल बीएलडीसी (BLDC) मोटर",
  "Saves up to 60% electricity": "60% तक बिजली की बचत",
  "Supports remote control operation": "रिमोट कंट्रोल ऑपरेशन का समर्थन",
  "Works smoothly on solar/inverter": "सोलर/इन्वर्टर पर सुचारू रूप से काम करे",
  "High-speed 12V DC motor": "हाई-स्पीड 12V डीसी मोटर",
  "Available in 3 sizes: 9\", 12\", 16\"": "3 आकारों में उपलब्ध: 9\", 12\", 16\"",
  "Telescopic height adjust (pedestal)": "टेलीस्कोपिक ऊंचाई समायोजन (पेडेस्टल)",
  "Multi-speed heavy wind flow": "मल्टी-स्पीड भारी हवा का प्रवाह",
  "Auto dusk-to-dawn sensor": "स्वचालित डस्क-टू-डॉन (शाम से सुबह) सेंसर",
  "Integrated LFP battery & LED board": "इंटीग्रेटेड एलएफपी बैटरी और एलईडी बोर्ड",
  "High quality poly solar panel": "उच्च गुणवत्ता वाला पॉली सोलर पैनल",
  "IP65 waterproof certified": "IP65 वॉटरप्रूफ प्रमाणित",
  "Compact lightweight inverter unit": "कॉम्पैक्ट और हल्का इन्वर्टर यूनिट",
  "Supports CFL and low-wattage LEDs": "सीएफएल और कम-वाट एलईडी का समर्थन",
  "Overload & short-circuit auto cutout": "ओवरलोड और शॉर्ट-सर्किट ऑटो कटआउट",
  "Great battery utility ratio": "उत्कृष्ट बैटरी उपयोग अनुपात"
};

function translateProductText(text: string): string {
  if (currentLang === "hi" && PRODUCT_TRANSLATIONS[text]) {
    return PRODUCT_TRANSLATIONS[text];
  }
  return text;
}

// ---------------------------------------------------------
// 3. Language Selection & Switching Logic
// ---------------------------------------------------------
const TOP_LANGUAGES = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिन्दी (Hindi)" },
  { code: "ne", name: "नेपाली (Nepali)" },
  { code: "es", name: "Español (Spanish)" },
  { code: "fr", name: "Français (French)" },
  { code: "ar", name: "العربية (Arabic)" }
];

const OTHER_LANGUAGES = [
  { code: "af", name: "Afrikaans" },
  { code: "sq", name: "Shqip (Albanian)" },
  { code: "am", name: "አማርኛ (Amharic)" },
  { code: "hy", name: "Հայերեն (Armenian)" },
  { code: "as", name: "অসমীয়া (Assamese)" },
  { code: "az", name: "Azərbaycan (Azerbaijani)" },
  { code: "eu", name: "Euskara (Basque)" },
  { code: "be", name: "Беларуская (Belarusian)" },
  { code: "bn", name: "বাংলা (Bengali)" },
  { code: "bs", name: "Bosanski (Bosnian)" },
  { code: "bg", name: "Български (Bulgarian)" },
  { code: "ca", name: "Català (Catalan)" },
  { code: "zh-CN", name: "简体中文 (Chinese Simplified)" },
  { code: "zh-TW", name: "繁體中文 (Chinese Traditional)" },
  { code: "hr", name: "Hrvatski (Croatian)" },
  { code: "cs", name: "Čeština (Czech)" },
  { code: "da", name: "Dansk (Danish)" },
  { code: "nl", name: "Nederlands (Dutch)" },
  { code: "eo", name: "Esperanto" },
  { code: "et", name: "Eesti (Estonian)" },
  { code: "fi", name: "Suomi (Finnish)" },
  { code: "gl", name: "Galego (Galician)" },
  { code: "ka", name: "ქართული (Georgian)" },
  { code: "de", name: "Deutsch (German)" },
  { code: "el", name: "Ελληνικά (Greek)" },
  { code: "gu", name: "ગુજરાતી (Gujarati)" },
  { code: "ht", name: "Kreyòl Ayisyen (Haitian Creole)" },
  { code: "he", name: "עברית (Hebrew)" },
  { code: "hu", name: "Magyar (Hungarian)" },
  { code: "is", name: "Íslenska (Icelandic)" },
  { code: "id", name: "Bahasa Indonesia (Indonesian)" },
  { code: "ga", name: "Gaeilge (Irish)" },
  { code: "it", name: "Italiano (Italian)" },
  { code: "ja", name: "日本語 (Japanese)" },
  { code: "jw", name: "Basa Jawa (Javanese)" },
  { code: "kn", name: "ಕನ್ನಡ (Kannada)" },
  { code: "kk", name: "Қазақ (Kazakh)" },
  { code: "km", name: "ខ្មែរ (Khmer)" },
  { code: "ko", name: "한국어 (Korean)" },
  { code: "ku", name: "Kurdî (Kurdish)" },
  { code: "ky", name: "Кыргызча (Kyrgyz)" },
  { code: "lo", name: "ລາວ (Lao)" },
  { code: "la", name: "Latina (Latin)" },
  { code: "lv", name: "Latviešu (Latvian)" },
  { code: "lt", name: "Lietuvių (Lithuanian)" },
  { code: "mk", name: "Македонски (Macedonian)" },
  { code: "ms", name: "Bahasa Melayu (Malay)" },
  { code: "ml", name: "മലയാളം (Malayalam)" },
  { code: "mr", name: "मराठी (Marathi)" },
  { code: "mn", name: "Монгол (Mongolian)" },
  { code: "my", name: "မြန်မာ (Burmese)" },
  { code: "no", name: "Norsk (Norwegian)" },
  { code: "or", name: "ଓଡ଼ିଆ (Odia)" },
  { code: "ps", name: "پښتو (Pashto)" },
  { code: "fa", name: "فارسی (Persian)" },
  { code: "pl", name: "Polski (Polish)" },
  { code: "pt", name: "Português (Portuguese)" },
  { code: "pa", name: "ਪੰਜਾਬੀ (Punjabi)" },
  { code: "ro", name: "Română (Romanian)" },
  { code: "ru", name: "Русский (Russian)" },
  { code: "sm", name: "Gagana Samoa (Samoan)" },
  { code: "gd", name: "Gàidhlig (Scots Gaelic)" },
  { code: "sr", name: "Српски (Serbian)" },
  { code: "st", name: "Sesotho" },
  { code: "sn", name: "ChiShona (Shona)" },
  { code: "sd", name: "سنڌي (Sindhi)" },
  { code: "si", name: "සිංහල (Sinhala)" },
  { code: "sk", name: "Slovenčina (Slovak)" },
  { code: "sl", name: "Slovenščina (Slovenian)" },
  { code: "so", name: "Af Soomaali (Somali)" },
  { code: "su", name: "Basa Sunda (Sundanese)" },
  { code: "sw", name: "Kiswahili (Swahili)" },
  { code: "sv", name: "Svenska (Swedish)" },
  { code: "tg", name: "Тоҷиκӣ (Tajik)" },
  { code: "ta", name: "தமிழ் (Tamil)" },
  { code: "te", name: "தெலுங்கு (Telugu)" },
  { code: "th", name: "ไทย (Thai)" },
  { code: "tr", name: "Türkçe (Turkish)" },
  { code: "uk", name: "Українська (Ukrainian)" },
  { code: "ur", name: "اردو (Urdu)" },
  { code: "uz", name: "Oʻzbekcha (Uzbek)" },
  { code: "vi", name: "Tiếng Việt (Vietnamese)" },
  { code: "cy", name: "Cymraeg (Welsh)" },
  { code: "xh", name: "isiXhosa (Xhosa)" },
  { code: "yi", name: "ייִדיש (Yiddish)" },
  { code: "yo", name: "Yorùbá (Yoruba)" },
  { code: "zu", name: "isiZulu (Zulu)" }
];

function getLanguageLabel(code: string): string {
  const topMatch = TOP_LANGUAGES.find(l => l.code === code);
  if (topMatch) return topMatch.name.split(" (")[0];
  const otherMatch = OTHER_LANGUAGES.find(l => l.code === code);
  if (otherMatch) return otherMatch.name.split(" (")[0];
  return "English";
}

function populateLanguageSelects() {
  const selects = document.querySelectorAll(".custom-lang-select") as NodeListOf<HTMLSelectElement>;
  selects.forEach(select => {
    // Clear existing options
    select.innerHTML = "";

    // Add Top Languages
    TOP_LANGUAGES.forEach(lang => {
      const opt = document.createElement("option");
      opt.value = lang.code;
      opt.textContent = lang.name;
      opt.className = "text-navy bg-white font-semibold";
      select.appendChild(opt);
    });

    // Add Separator option
    const separator = document.createElement("option");
    separator.disabled = true;
    separator.value = "";
    separator.textContent = "──────────────────";
    separator.className = "text-gray-400 bg-white";
    select.appendChild(separator);

    // Add All Languages (sorted alphabetically by their English name)
    const sortedAll = [...TOP_LANGUAGES, ...OTHER_LANGUAGES].sort((a, b) => {
      const nameA = a.name.includes(" (") ? a.name.split(" (")[1].replace(")", "") : a.name;
      const nameB = b.name.includes(" (") ? b.name.split(" (")[1].replace(")", "") : b.name;
      return nameA.localeCompare(nameB);
    });

    sortedAll.forEach(lang => {
      const opt = document.createElement("option");
      opt.value = lang.code;
      opt.textContent = lang.name;
      opt.className = "text-navy bg-white";
      select.appendChild(opt);
    });
  });
}

let currentLang = localStorage.getItem("geelite_lang") || "en";

function applyLanguage(lang: string) {
  currentLang = lang;
  localStorage.setItem("geelite_lang", lang);
  document.documentElement.lang = lang;

  // Translate all marked elements
  const translatableElements = document.querySelectorAll("[data-translate-key]");
  translatableElements.forEach((el) => {
    const key = el.getAttribute("data-translate-key");
    if (key && TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      // Handle placeholder translation
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        (el as HTMLInputElement).placeholder = TRANSLATIONS[lang][key];
      } else {
        el.textContent = TRANSLATIONS[lang][key];
      }
    }
  });

  // Update visual text display "Language: <Label>" for custom selects
  const labels = document.querySelectorAll(".current-lang-label");
  const activeLabel = getLanguageLabel(lang);
  labels.forEach((el) => {
    el.textContent = activeLabel;
  });
}

function initGoogleTranslateSync() {
  // Populate options dynamically
  populateLanguageSelects();

  const customSelects = document.querySelectorAll(".custom-lang-select") as NodeListOf<HTMLSelectElement>;
  
  // Set the initial value of custom selects based on the stored/active language
  const storedLang = localStorage.getItem("geelite_lang") || "en";
  customSelects.forEach((select) => {
    select.value = storedLang;
  });

  // Also apply initial language for our custom dictionary-based translations
  applyLanguage(storedLang);

  // Bind change listeners to our custom select menus
  customSelects.forEach((select) => {
    select.addEventListener("change", (e) => {
      const target = e.target as HTMLSelectElement;
      const selectedValue = target.value;

      // Synchronize all custom selectors on the page
      customSelects.forEach((s) => {
        if (s !== target) {
          s.value = selectedValue;
        }
      });

      // Update local storage and apply custom translations
      localStorage.setItem("geelite_lang", selectedValue);
      applyLanguage(selectedValue);
      
      // Re-render the product list if we are currently on the catalog page
      if (document.getElementById("products_grid")) {
        const activeTab = document.querySelector(".filter-tab.bg-solar-amber");
        const activeCategory = activeTab?.getAttribute("data-category") || "All";
        renderProducts(activeCategory);
        renderFilterTabs(activeCategory);
      }

      // Propagate the change to Google Translate
      const googleCombo = document.querySelector(".goog-te-combo") as HTMLSelectElement;
      if (googleCombo) {
        googleCombo.value = selectedValue;
        googleCombo.dispatchEvent(new Event("change"));
      }
    });
  });

  // Watch for Google Translate widget initialization
  let syncAttempts = 0;
  const syncInterval = setInterval(() => {
    const googleCombo = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (googleCombo) {
      clearInterval(syncInterval);

      // Listen to change events inside Google Translate combo box to keep custom selects in sync
      googleCombo.addEventListener("change", () => {
        const currentGoogleValue = googleCombo.value || "en";
        customSelects.forEach((s) => {
          if (s.value !== currentGoogleValue) {
            s.value = currentGoogleValue;
            applyLanguage(currentGoogleValue);
            if (document.getElementById("products_grid")) {
              const activeTab = document.querySelector(".filter-tab.bg-solar-amber");
              const activeCategory = activeTab?.getAttribute("data-category") || "All";
              renderProducts(activeCategory);
              renderFilterTabs(activeCategory);
            }
          }
        });
      });

      // Synchronize initial state
      const initialGoogleValue = googleCombo.value;
      if (initialGoogleValue && initialGoogleValue !== storedLang) {
        customSelects.forEach((s) => {
          s.value = initialGoogleValue;
        });
        applyLanguage(initialGoogleValue);
      } else if (storedLang && storedLang !== "en") {
        googleCombo.value = storedLang;
        googleCombo.dispatchEvent(new Event("change"));
      }
    }

    syncAttempts++;
    if (syncAttempts > 120) {
      clearInterval(syncInterval);
    }
  }, 500);
}

// ---------------------------------------------------------
// 4. Floating Dynamic WhatsApp Button Integration
// ---------------------------------------------------------
function createFloatingWhatsApp() {
  if (document.getElementById("floating_whatsapp_btn")) return;

  const btn = document.createElement("a");
  btn.id = "floating_whatsapp_btn";
  btn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Gee Lighting! I am visiting your website and would like to enquire about GEE-LITE products.")}`;
  btn.target = "_blank";
  btn.rel = "noopener";
  btn.ariaLabel = "Chat on WhatsApp";
  
  // High-contrast, brand compliant floating layout
  btn.className = "fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-4 shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center animate-bounce";
  btn.style.animationDuration = "3s";
  btn.innerHTML = `
    <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.182 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.588 1.977 14.13 .951 11.5 1.951c-5.438 0-9.861 4.37-9.864 9.8.001 2.03.535 4.017 1.549 5.793L2.17 21.07l3.877-1.016-.4 1.1zm12.333-5.064c-.326-.163-1.93-.952-2.229-1.062-.3-.11-.518-.163-.735.163-.218.327-.844 1.062-1.035 1.28-.19.218-.38.245-.707.081-.326-.162-1.378-.508-2.625-1.62-1.011-.9-1.691-2.011-1.889-2.338-.198-.327-.021-.504.142-.666.147-.146.327-.38.49-.572.164-.19.218-.327.327-.545.11-.218.054-.409-.028-.572-.081-.163-.735-1.771-1.007-2.428-.264-.64-.529-.553-.735-.563-.19-.01-.409-.011-.626-.011-.218 0-.572.082-.871.409-.3.327-1.144 1.118-1.144 2.727 0 1.61 1.171 3.16 1.334 3.378.163.218 2.304 3.516 5.582 4.931.78.337 1.39.539 1.86.688.783.249 1.497.214 2.061.13.629-.094 1.93-.789 2.202-1.511.272-.722.272-1.343.19-1.474-.081-.13-.3-.218-.626-.381z"/>
    </svg>
  `;
  document.body.appendChild(btn);
}

// ---------------------------------------------------------
// 5. Dynamic HTML Card Generation with content-visibility
// ---------------------------------------------------------
function renderFilterTabs(activeCategory: string = "All") {
  const filterButtonsContainer = document.getElementById("filter_buttons");
  if (!filterButtonsContainer) return;

  const categories = [
    "All",
    "Solar Lanterns",
    "Torches",
    "Solar Systems",
    "Bulbs & Lamps",
    "Tubes",
    "Fans",
    "Street Lights",
    "Inverters"
  ];

  filterButtonsContainer.innerHTML = categories.map((cat) => {
    const isActive = cat === activeCategory;
    const activeClass = isActive 
      ? "filter-tab px-4 py-2 rounded-full text-xs transition-all duration-200 cursor-pointer bg-solar-amber text-navy shadow-lg font-bold solar-glow" 
      : "filter-tab px-4 py-2 rounded-full text-xs transition-all duration-200 cursor-pointer glass-card text-white hover:bg-white/10 hover:border-solar-amber/40 border border-white/10";
    return `
      <button 
        class="${activeClass}"
        data-category="${cat}"
      >
        ${translateProductText(cat)}
      </button>
    `;
  }).join('');

  // Event listener for filtering
  const tabs = filterButtonsContainer.querySelectorAll(".filter-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.className = "filter-tab px-4 py-2 rounded-full text-xs transition-all duration-200 cursor-pointer glass-card text-white hover:bg-white/10 hover:border-solar-amber/40 border border-white/10");
      tab.className = "filter-tab px-4 py-2 rounded-full text-xs transition-all duration-200 cursor-pointer bg-solar-amber text-navy shadow-lg font-bold solar-glow";
      
      const cat = tab.getAttribute("data-category") || "All";
      renderProducts(cat);
    });
  });
}

function initProductCatalog() {
  const gridContainer = document.getElementById("products_grid");
  if (!gridContainer) return;

  // Read category filter from URL search parameters if available
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get("category") || "All";

  // Initial render of products
  renderProducts(initialCategory);

  // Set up categories list and render
  renderFilterTabs(initialCategory);
}

function renderProducts(categoryFilter: string) {
  const gridContainer = document.getElementById("products_grid");
  if (!gridContainer) return;

  const filtered = categoryFilter === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === categoryFilter);

  gridContainer.innerHTML = filtered.map((product) => {
    const translatedName = translateProductText(product.name);
    const translatedCategory = translateProductText(product.category);
    
    // Localized Enquiry prefill text
    const prefillText = currentLang === "en" 
      ? `Hi, I am interested in GEE-LITE ${product.name} (${product.model}). Please share specifications and pricing.`
      : `नमस्ते, मैं GEE-LITE ${translatedName} (${product.model}) में रुचि रखता हूँ। कृपया इसके बारे में जानकारी और मूल्य साझा करें।`;
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(prefillText)}`;
    const badgeText = currentLang === "en" ? "New Model" : "नया मॉडल";
    const whatsappBtnText = currentLang === "en" ? "Enquire on WhatsApp" : "व्हाट्सएप पर पूछताछ करें";

    return `
      <article 
        class="glass-card rounded-xl overflow-hidden hover:shadow-lg hover:border-solar-amber/40 hover:scale-102 transition-all duration-300 flex flex-col justify-between h-full reveal-item optimize-rendering"
        id="product-card-${product.model.toLowerCase().replace(/[^a-z0-9]/g, '-')}"
      >
        <div class="relative bg-dark-navy/40 aspect-square overflow-hidden group">
          <!-- REPLACE: replace source below with high resolution webp images when available -->
          <picture>
            <img 
              src="${product.image}" 
              alt="${translateProductText(product.alt)}" 
              width="400" 
              height="400" 
              loading="lazy" 
              decoding="async" 
              referrerpolicy="no-referrer"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </picture>
          ${product.isNew ? `
            <span class="absolute top-3 left-3 bg-signal-red text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
              ${badgeText}
            </span>
          ` : ""}
          <span class="absolute top-3 right-3 bg-navy/90 text-white text-[10px] font-medium px-2 py-0.5 rounded-md">
            ${product.model}
          </span>
        </div>

        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="text-[10px] font-bold text-solar-amber uppercase tracking-widest mb-1">
              ${translatedCategory}
            </div>
            <h3 class="text-base font-bold text-white leading-tight mb-2 hover:text-solar-amber transition-colors">
              ${translatedName}
            </h3>
            <ul class="space-y-1.5 mb-4">
              ${product.specs.map(spec => `
                <li class="text-xs text-text-muted flex items-start">
                  <span class="text-solar-amber mr-2 font-bold">•</span>
                  <span>${translateProductText(spec)}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="pt-4 border-t border-white/5">
            <a 
              href="${whatsappUrl}" 
              target="_blank" 
              rel="noopener" 
              class="w-full inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2.5 px-4 rounded-lg transition-all gap-2 shadow-xs cursor-pointer focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              aria-label="Enquire about ${translatedName} on WhatsApp"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.182 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.588 1.977 14.13 .951 11.5 1.951c-5.438 0-9.861 4.37-9.864 9.8.001 2.03.535 4.017 1.549 5.793L2.17 21.07l3.877-1.016-.4 1.1zm12.333-5.064c-.326-.163-1.93-.952-2.229-1.062-.3-.11-.518-.163-.735.163-.218.327-.844 1.062-1.035 1.28-.19.218-.38.245-.707.081-.326-.162-1.378-.508-2.625-1.62-1.011-.9-1.691-2.011-1.889-2.338-.198-.327-.021-.504.142-.666.147-.146.327-.38.49-.572.164-.19.218-.327.327-.545.11-.218.054-.409-.028-.572-.081-.163-.735-1.771-1.007-2.428-.264-.64-.529-.553-.735-.563-.19-.01-.409-.011-.626-.011-.218 0-.572.082-.871.409-.3.327-1.144 1.118-1.144 2.727 0 1.61 1.171 3.16 1.334 3.378.163.218 2.304 3.516 5.582 4.931.78.337 1.39.539 1.86.688.783.249 1.497.214 2.061.13.629-.094 1.93-.789 2.202-1.511.272-.722.272-1.343.19-1.474-.081-.13-.3-.218-.626-.381z" />
              </svg>
              <span>${whatsappBtnText}</span>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Re-trigger scroll reveal observer to find newly loaded cards
  initScrollAnimations();
}

// ---------------------------------------------------------
// 6. Structured SEO Schema Ingestion (JSON-LD)
// ---------------------------------------------------------
function injectProductsSchema() {
  const existing = document.getElementById("geelite_product_schema");
  if (existing) existing.remove();

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "GEE-LITE Product Catalogue - Solar & LED Lights",
    "numberOfItems": PRODUCTS.length,
    "itemListElement": PRODUCTS.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "brand": {
          "@type": "Brand",
          "name": "GEE-LITE"
        },
        "model": product.model,
        "image": product.image,
        "description": `${product.name} model ${product.model} - high efficiency ${product.category} manufactured by Gee Lighting Technology in India.`,
        "sku": `GEELITE-${product.model}`,
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "itemCondition": "https://schema.org/NewCondition",
          "areaServed": ["IN", "NP", "AF"]
        }
      }
    }))
  };

  const script = document.createElement("script");
  script.id = "geelite_product_schema";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

// ---------------------------------------------------------
// 7. GPU-Accelerated Scroll Reveal Engine
// ---------------------------------------------------------
function initScrollAnimations() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    // Auto-reveal everything if the visitor prefers reduced motion
    document.querySelectorAll(".reveal-item").forEach((el) => {
      el.classList.add("revealed");
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target); // Unobserve once animated
      }
    });
  }, {
    root: null,
    rootMargin: "0px 0px -50px 0px", // triggers slightly before entering viewport fully
    threshold: 0.1
  });

  const items = document.querySelectorAll(".reveal-item");
  items.forEach((item) => {
    observer.observe(item);
  });
}

// ---------------------------------------------------------
// 8. Dynamic Stats Counter Animation
// ---------------------------------------------------------
function initStatsCounters() {
  const statsSection = document.getElementById("stats_section");
  if (!statsSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(statsSection);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsSection);
}

function animateCounters() {
  const counters = document.querySelectorAll(".stat-counter");
  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-target") || "0", 10);
    const suffix = counter.getAttribute("data-suffix") || "";
    let count = 0;
    const duration = 1500; // ms
    const increment = target / (duration / 16); // ~60fps

    const updateCount = () => {
      count += increment;
      if (count < target) {
        counter.textContent = Math.floor(count) + suffix;
        requestAnimationFrame(updateCount);
      } else {
        counter.textContent = target + suffix;
      }
    };
    updateCount();
  });
}

// ---------------------------------------------------------
// 9. Web3Forms AJAX Contact Submission
// ---------------------------------------------------------
function initContactForm() {
  const form = document.getElementById("contact_form") as HTMLFormElement;
  const feedback = document.getElementById("form_feedback");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Spam honeypot validation
    const botField = form.querySelector("[name='botcheck']") as HTMLInputElement;
    if (botField && botField.checked) {
      console.warn("Spam bot detected!");
      return;
    }

    if (feedback) {
      feedback.className = "mt-4 p-4 rounded-lg bg-blue-50 text-blue-800 text-sm flex items-center gap-2";
      feedback.innerHTML = `
        <svg class="animate-spin h-4 w-4 text-blue-700" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Sending secure inquiry to GEE-LITE headquarters...</span>
      `;
      feedback.classList.remove("hidden");
    }

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    })
      .then(async (response) => {
        let result = await response.json();
        if (response.status === 200) {
          if (feedback) {
            feedback.className = "mt-4 p-4 rounded-lg bg-emerald-50 text-emerald-800 text-sm font-medium";
            feedback.innerHTML = currentLang === "en" 
              ? "✓ Thank you! Your dealer inquiry was sent successfully. Our New Delhi team will connect via WhatsApp/Email shortly."
              : "✓ धन्यवाद! आपकी डीलरशिप पूछताछ सफलतापूर्वक भेज दी गई है। हमारी नई दिल्ली टीम जल्द ही व्हाट्सएप/ईमेल द्वारा संपर्क करेगी।";
          }
          form.reset();
        } else {
          throw new Error(result.message || "Failed submission");
        }
      })
      .catch((error) => {
        if (feedback) {
          feedback.className = "mt-4 p-4 rounded-lg bg-rose-50 text-rose-800 text-sm";
          feedback.innerHTML = `✗ Error: ${error.message || "Something went wrong. Please email us directly at geelightingtechnology@gmail.com"}`;
        }
      });
  });
}

// ---------------------------------------------------------
// 10. Sticky Navbar Scroll Adjustments
// ---------------------------------------------------------
function initNavbarScroll() {
  const navbar = document.getElementById("main_navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("bg-navy/95", "shadow-md", "py-2.5");
      navbar.classList.remove("bg-navy", "py-4");
    } else {
      navbar.classList.add("bg-navy", "py-4");
      navbar.classList.remove("bg-navy/95", "shadow-md", "py-2.5");
    }
  });
}

// Mobile Hamburger Toggle
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile_menu_btn");
  const menu = document.getElementById("mobile_menu");
  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener("click", () => {
    const isHidden = menu.classList.contains("hidden");
    if (isHidden) {
      menu.classList.remove("hidden");
      toggleBtn.setAttribute("aria-expanded", "true");
    } else {
      menu.classList.add("hidden");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  });
}

// ---------------------------------------------------------
// Initialization Orchestrator
// ---------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Initialize custom beautiful Google Translate synchronizer
  initGoogleTranslateSync();

  // Start modules
  createFloatingWhatsApp();
  initNavbarScroll();
  initMobileMenu();
  initScrollAnimations();
  initStatsCounters();
  initContactForm();

  if (document.getElementById("products_grid")) {
    initProductCatalog();
    injectProductsSchema();
  }
});
