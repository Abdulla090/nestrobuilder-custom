"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "ku"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// English translations
const enTranslations = {
  // Navbar
  "nav.home": "Home",
  "nav.services": "Services",
  "nav.about": "About",
  "nav.projects": "Projects",
  "nav.contact": "Contact",
  "nav.getStarted": "Get Started",

  // Hero
  "hero.badge": "We're crafting digital experiences",
  "hero.title1": "Building Digital Experiences",
  "hero.title2": "That Matter",
  "hero.description":
    "We specialize in creating websites, web applications, and mobile solutions that transform your ideas into reality with precision and creativity.",
  "hero.cta.start": "Get Started",
  "hero.cta.work": "View Our Work",
  "hero.trustedBy": "Trusted by:",

  // Services
  "services.badge": "Our Expertise",
  "services.title": "Our Services",
  "services.description":
    "We offer a comprehensive range of digital solutions to help your business grow and thrive in the digital landscape",

  "services.website.title": "Website Development",
  "services.website.description":
    "Custom websites that are responsive, fast, and optimized for search engines with modern design principles.",
  "services.website.feature1": "Responsive Design",
  "services.website.feature2": "SEO Optimization",
  "services.website.feature3": "Performance Tuning",
  "services.website.feature4": "Content Management",

  "services.webapp.title": "Web Application",
  "services.webapp.description":
    "Scalable web applications with robust functionality and intuitive interfaces for seamless user experiences.",
  "services.webapp.feature1": "User Authentication",
  "services.webapp.feature2": "Real-time Updates",
  "services.webapp.feature3": "API Integration",
  "services.webapp.feature4": "Data Visualization",

  "services.mobile.title": "Mobile Development",
  "services.mobile.description":
    "Native and cross-platform mobile applications for iOS and Android devices with cutting-edge features.",
  "services.mobile.feature1": "iOS & Android",
  "services.mobile.feature2": "Push Notifications",
  "services.mobile.feature3": "Offline Capability",
  "services.mobile.feature4": "App Store Optimization",

  "services.project.title": "Project Creation",
  "services.project.description":
    "End-to-end project management from concept to deployment and maintenance with agile methodologies.",
  "services.project.feature1": "Requirements Analysis",
  "services.project.feature2": "UI/UX Design",
  "services.project.feature3": "Development",
  "services.project.feature4": "Testing & Deployment",

  // Academic Services - New Section
  "academic.badge": "Academic Excellence",
  "academic.title": "Academic Services",
  "academic.description":
    "Professional academic support services to help students and researchers excel in their educational journey",

  "academic.reports.title": "Academic Reports",
  "academic.reports.description":
    "Professionally structured academic reports with thorough research, clear methodology, and insightful analysis.",
  "academic.reports.feature1": "Literature Review",
  "academic.reports.feature2": "Data Analysis",
  "academic.reports.feature3": "Methodology Development",
  "academic.reports.feature4": "Findings & Recommendations",
  "academic.reports.price": "Starting at $150",
  "academic.reports.timeframe": "3-7 days delivery",

  "academic.presentations.title": "Presentations",
  "academic.presentations.description":
    "Engaging and visually appealing presentations that effectively communicate complex academic concepts.",
  "academic.presentations.feature1": "Professional Slide Design",
  "academic.presentations.feature2": "Visual Data Representation",
  "academic.presentations.feature3": "Speaker Notes",
  "academic.presentations.feature4": "Interactive Elements",
  "academic.presentations.price": "Starting at $100",
  "academic.presentations.timeframe": "2-5 days delivery",

  "academic.posters.title": "Academic Posters",
  "academic.posters.description":
    "Eye-catching academic posters that showcase research findings in a concise and visually compelling format.",
  "academic.posters.feature1": "Research Summary",
  "academic.posters.feature2": "Data Visualization",
  "academic.posters.feature3": "Professional Layout",
  "academic.posters.feature4": "Print-Ready Files",
  "academic.posters.price": "Starting at $120",
  "academic.posters.timeframe": "2-4 days delivery",

  "academic.essays.title": "Essays & Papers",
  "academic.essays.description":
    "Well-researched and properly structured academic essays and papers tailored to your specific requirements.",
  "academic.essays.feature1": "Thesis Development",
  "academic.essays.feature2": "Academic Research",
  "academic.essays.feature3": "Proper Citations",
  "academic.essays.feature4": "Proofreading & Editing",
  "academic.essays.price": "Starting at $80",
  "academic.essays.timeframe": "2-6 days delivery",

  "academic.cta": "Request Academic Service",
  "academic.examples": "View Examples",
  "academic.pricing": "Pricing",
  "academic.timeframe": "Timeframe",
  "academic.features": "What's Included",
  "academic.testimonial.author": "Sarah M.",
  "academic.testimonial.role": "PhD Candidate",
  "academic.testimonial.text":
    "The academic report service was exceptional. The team delivered a thoroughly researched report that exceeded my expectations and helped me advance my research significantly.",

  // About
  "about.badge": "About Us",
  "about.title": "We Build Digital Products That Help Businesses Grow",
  "about.description":
    "We are a team of passionate developers and designers dedicated to creating exceptional digital experiences. With years of industry experience, we bring expertise and innovation to every project.",
  "about.mission.title": "Our Mission",
  "about.mission.description":
    "To help businesses of all sizes establish a strong online presence through custom-built digital solutions that are not only visually appealing but also functional and user-friendly.",
  "about.approach.title": "Our Approach",
  "about.approach.description":
    "We believe in collaborative partnerships with our clients, ensuring that every project we undertake aligns perfectly with their vision and business goals through transparent communication and agile methodologies.",
  "about.stats.projects": "Projects Completed",
  "about.stats.clients": "Happy Clients",
  "about.stats.years": "Years Experience",
  "about.stats.support": "Support",

  // Process
  "process.badge": "How We Work",
  "process.title": "Our Process",
  "process.description":
    "We follow a structured approach to deliver high-quality digital solutions that meet your business needs",

  "process.step1.title": "Discovery",
  "process.step1.description":
    "We start by understanding your business goals, target audience, and project requirements.",

  "process.step2.title": "Design",
  "process.step2.description":
    "Our designers create wireframes and visual designs that align with your brand identity.",

  "process.step3.title": "Development",
  "process.step3.description": "Our developers bring the designs to life with clean, efficient, and scalable code.",

  "process.step4.title": "Testing",
  "process.step4.description": "We thoroughly test all aspects of your project to ensure quality and performance.",

  "process.step5.title": "Deployment",
  "process.step5.description":
    "We launch your project and ensure everything runs smoothly in the production environment.",

  "process.step6.title": "Maintenance",
  "process.step6.description": "We provide ongoing support and updates to keep your digital product running optimally.",

  // Projects
  "projects.badge": "Our Portfolio",
  "projects.title": "Featured Projects",
  "projects.description": "Explore our portfolio of successful projects across various industries and technologies",
  "projects.category.all": "All",
  "projects.category.health": "Health & Wellness",
  "projects.category.communication": "Communication & Learning",
  "projects.category.lifestyle": "Lifestyle & Utilities",
  "projects.viewLive": "View Live",

  // Testimonials
  "testimonials.badge": "Client Feedback",
  "testimonials.title": "What Our Clients Say",
  "testimonials.description": "Don't just take our word for it - hear from some of our satisfied clients",

  // FAQ
  "faq.badge": "Got Questions?",
  "faq.title": "Frequently Asked Questions",
  "faq.description": "Find answers to common questions about our services, process, and more",

  // CTA
  "cta.title": "Ready to Transform Your Digital Presence?",
  "cta.description":
    "Let's collaborate to create a digital solution that elevates your brand and drives your business forward.",
  "cta.button1": "Start Your Project",
  "cta.button2": "Schedule a Consultation",

  // Contact
  "contact.badge": "Get In Touch",
  "contact.title": "Contact Us",
  "contact.description": "Have a project in mind? We'd love to hear from you. Get in touch with our team.",
  "contact.form.name": "Name",
  "contact.form.email": "Email",
  "contact.form.subject": "Subject",
  "contact.form.message": "Message",
  "contact.form.submit": "Send Message",
  "contact.form.sending": "Sending...",
  "contact.form.sent": "Message Sent!",
  "contact.info.title": "Contact Information",
  "contact.info.email": "Email",
  "contact.info.phone": "Phone",
  "contact.info.address": "Address",
  "contact.info.follow": "Follow Us",

  // Footer
  "footer.description":
    "Building digital experiences that matter. We specialize in website, web application, and mobile application development with a focus on quality and innovation.",
  "footer.rights": "All rights reserved.",
  "footer.services": "Services",
  "footer.company": "Company",
  "footer.newsletter": "Subscribe to our newsletter",
  "footer.newsletter.placeholder": "Your email",
  "footer.newsletter.button": "Subscribe",
  "footer.policy.privacy": "Privacy Policy",
  "footer.policy.terms": "Terms of Service",
  "footer.policy.cookie": "Cookie Policy",
  "footer.designed": "Designed with ♥ by Nestro Builder",

  // Language
  "language.en": "English",
  "language.ku": "کوردی",
}

// Kurdish Sorani translations
const kuTranslations = {
  // Navbar
  "nav.home": "سەرەکی",
  "nav.services": "خزمەتگوزاریەکان",
  "nav.about": "دەربارە",
  "nav.projects": "پڕۆژەکان",
  "nav.contact": "پەیوەندی",
  "nav.getStarted": "دەست پێبکە",

  // Hero
  "hero.badge": "ئێمە ئەزموونی دیجیتاڵی دروست دەکەین",
  "hero.title1": "دروستکردنی ئەزموونی دیجیتاڵی",
  "hero.title2": "کە گرنگە",
  "hero.description":
    "ئێمە پسپۆڕین لە دروستکردنی ماڵپەڕ، ئەپڵیکەیشنی وێب، و چارەسەری مۆبایل کە بیرۆکەکانت دەگۆڕن بۆ ڕاستی بە وردی و داهێنان.",
  "hero.cta.start": "دەست پێبکە",
  "hero.cta.work": "کارەکانمان ببینە",
  "hero.trustedBy": "متمانەی پێکراوە لەلایەن:",

  // Services
  "services.badge": "شارەزاییەکانمان",
  "services.title": "خزمەتگوزاریەکانمان",
  "services.description":
    "ئێمە کۆمەڵێک چارەسەری دیجیتاڵی پێشکەش دەکەین بۆ یارمەتیدانی کاروبارەکەت بۆ گەشەکردن و گەشەسەندن لە دنیای دیجیتاڵدا",

  "services.website.title": "پەرەپێدانی ماڵپەڕ",
  "services.website.description":
    "ماڵپەڕی تایبەت کە وەڵامدەرەوەن، خێران، و باشکراون بۆ سێرچ ئینجنەکان بە پرەنسیپی دیزاینی مۆدێرن.",
  "services.website.feature1": "دیزاینی وەڵامدەر",
  "services.website.feature2": "باشکردنی SEO",
  "services.website.feature3": "باشکردنی کارایی",
  "services.website.feature4": "بەڕێوەبردنی ناوەڕۆک",

  "services.webapp.title": "ئەپڵیکەیشنی وێب",
  "services.webapp.description":
    "ئەپڵیکەیشنی وێبی گەشەپێدراو بە فەنکشناڵیتی بەهێز و ڕووکاری ئاسان بۆ ئەزموونی بەکارهێنەری بێ کێشە.",
  "services.webapp.feature1": "ڕەسەنایەتی بەکارهێنەر",
  "services.webapp.feature2": "نوێکردنەوەی ڕاستەوخۆ",
  "services.webapp.feature3": "یەکخستنی API",
  "services.webapp.feature4": "وێناکردنی داتا",

  "services.mobile.title": "پەرەپێدانی مۆبایل",
  "services.mobile.description":
    "ئەپڵیکەیشنی مۆبایلی ڕەسەن و کڕۆس-پلاتفۆرم بۆ ئامێرەکانی iOS و Android بە تایبەتمەندی پێشکەوتوو.",
  "services.mobile.feature1": "iOS و Android",
  "services.mobile.feature2": "ئاگادارکردنەوەکان",
  "services.mobile.feature3": "توانای ئۆفلاین",
  "services.mobile.feature4": "باشکردنی ئەپ ستۆر",

  "services.project.title": "دروستکردنی پڕۆژە",
  "services.project.description": "بەڕێوەبردنی پڕۆژەی تەواو لە چەمکەوە بۆ دامەزراندن و پاراستن بە میتۆدۆلۆژیای ئاجایل.",
  "services.project.feature1": "شیکردنەوەی پێداویستیەکان",
  "services.project.feature2": "دیزاینی UI/UX",
  "services.project.feature3": "پەرەپێدان",
  "services.project.feature4": "تاقیکردنەوە و دامەزراندن",

  // Academic Services - New Section
  "academic.badge": "باشترین خزمەتگوزاری ئەکادیمی",
  "academic.title": "خزمەتگوزاریە ئەکادیمیەکان",
  "academic.description":
    "خزمەتگوزاری پشتگیری ئەکادیمی پیشەیی بۆ یارمەتیدانی خوێندکاران و توێژەران بۆ سەرکەوتن لە گەشتی خوێندنیاندا",

  "academic.reports.title": "ڕاپۆرتی ئەکادیمی",
  "academic.reports.description":
    "ڕاپۆرتی ئەکادیمی پێکهاتەیی پیشەیی بە توێژینەوەی وردەکاری، میتۆدۆلۆژیای ڕوون، و شیکردنەوەی بەسوود.",
  "academic.reports.feature1": "پێداچوونەوەی ئەدەبیات",
  "academic.reports.feature2": "شیکردنەوەی داتا",
  "academic.reports.feature3": "پەرەپێدانی میتۆدۆلۆژیا",
  "academic.reports.feature4": "دۆزینەوەکان و ڕاسپاردەکان",
  "academic.reports.price": "دەستپێدەکات لە $١٥٠",
  "academic.reports.timeframe": "گەیاندن لە ٣-٧ ڕۆژدا",

  "academic.presentations.title": "پێشکەشکردنەکان",
  "academic.presentations.description":
    "پێشکەشکردنی ڕاکێشەر و جوان کە بە شێوەیەکی کاریگەر چەمکە ئەکادیمیە ئاڵۆزەکان دەگەیەنێت.",
  "academic.presentations.feature1": "دیزاینی سلایدی پیشەیی",
  "academic.presentations.feature2": "نواندنی داتای بینراو",
  "academic.presentations.feature3": "تێبینیەکانی قسەکەر",
  "academic.presentations.feature4": "توخمە کارلێکەرەکان",
  "academic.presentations.price": "دەستپێدەکات لە $١٠٠",
  "academic.presentations.timeframe": "گەیاندن لە ٢-٥ ڕۆژدا",

  "academic.posters.title": "پۆستەری ئەکادیمی",
  "academic.posters.description":
    "پۆستەری ئەکادیمی سەرنجڕاکێش کە دۆزینەوەکانی توێژینەوە بە فۆرماتێکی کورت و بینراوی کاریگەر پیشان دەدات.",
  "academic.posters.feature1": "پوختەی توێژینەوە",
  "academic.posters.feature2": "وێناکردنی داتا",
  "academic.posters.feature3": "پێکهاتەی پیشەیی",
  "academic.posters.feature4": "فایلی ئامادە بۆ چاپکردن",
  "academic.posters.price": "دەستپێدەکات لە $١٢٠",
  "academic.posters.timeframe": "گەیاندن لە ٢-٤ ڕۆژدا",

  "academic.essays.title": "وتار و پەیپەر",
  "academic.essays.description": "وتار و پەیپەری ئەکادیمی باش توێژراو و پێکهاتەیی گونجاو بۆ پێداویستیە تایبەتەکانت.",
  "academic.essays.feature1": "پەرەپێدانی تێز",
  "academic.essays.feature2": "توێژینەوەی ئەکادیمی",
  "academic.essays.feature3": "ئاماژەپێدانی گونجاو",
  "academic.essays.feature4": "پێداچوونەوە و دەستکاری",
  "academic.essays.price": "دەستپێدەکات لە $٨٠",
  "academic.essays.timeframe": "گەیاندن لە ٢-٦ ڕۆژدا",

  "academic.cta": "داواکردنی خزمەتگوزاری ئەکادیمی",
  "academic.examples": "بینینی نموونەکان",
  "academic.pricing": "نرخاندن",
  "academic.timeframe": "کات",
  "academic.features": "چی لەخۆدەگرێت",
  "academic.testimonial.author": "سارا م.",
  "academic.testimonial.role": "کاندیدی دکتۆرا",
  "academic.testimonial.text":
    "خزمەتگوزاری ڕاپۆرتی ئەکادیمی نایاب بوو. تیمەکە ڕاپۆرتێکی بە وردی توێژراوی پێشکەش کرد کە لە چاوەڕوانیەکانم زیاتر بوو و یارمەتی دام بۆ پێشخستنی توێژینەوەکەم بە شێوەیەکی بەرچاو.",

  // About
  "about.badge": "دەربارەی ئێمە",
  "about.title": "ئێمە بەرهەمی دیجیتاڵی دروست دەکەین کە یارمەتی کاروبارەکان دەدات بۆ گەشەکردن",
  "about.description":
    "ئێمە تیمێکین لە پەرەپێدەر و دیزاینەری پڕ جۆش کە تەرخانکراوین بۆ دروستکردنی ئەزموونی دیجیتاڵی نایاب. بە ساڵانێک ئەزموونی پیشەسازی، ئێمە شارەزایی و داهێنان دەهێنینە هەموو پڕۆژەیەک.",
  "about.mission.title": "ئامانجی ئێمە",
  "about.mission.description":
    "یارمەتیدانی کاروبارەکان لە هەموو قەبارەیەک بۆ دامەزراندنی ئامادەبوونێکی بەهێزی ئۆنلاین لە ڕێگەی چارەسەری دیجیتاڵی تایبەتەوە کە نەک تەنها لە ڕووی دیزاینەوە ڕاکێشەرن بەڵکو کارایی و دۆستانەن بۆ بەکارهێنەر.",
  "about.approach.title": "ڕێبازی ئێمە",
  "about.approach.description":
    "ئێمە باوەڕمان بە هاوبەشی هاوکاری لەگەڵ کڕیارەکانماندا هەیە، دڵنیابوون لەوەی کە هەر پڕۆژەیەک کە دەستی پێدەکەین بە تەواوی لەگەڵ دیدگا و ئامانجەکانی کاروباریاندا دەگونجێت لە ڕێگەی پەیوەندی شەفاف و میتۆدۆلۆژیای ئاجایلەوە.",
  "about.stats.projects": "پڕۆژە تەواوکراوەکان",
  "about.stats.clients": "کڕیاری دڵخۆش",
  "about.stats.years": "ساڵی ئەزموون",
  "about.stats.support": "پشتگیری",

  // Process
  "process.badge": "چۆن کار دەکەین",
  "process.title": "پرۆسەی ئێمە",
  "process.description":
    "ئێمە ڕێبازێکی پێکهاتەیی پەیڕەو دەکەین بۆ پێشکەشکردنی چارەسەری دیجیتاڵی بەرزی کوالیتی کە پێداویستیەکانی کاروبارەکەت دابین دەکات",

  "process.step1.title": "دۆزینەوە",
  "process.step1.description":
    "ئێمە دەست پێدەکەین بە تێگەیشتن لە ئامانجەکانی کاروبارەکەت، ئامانجی بینەران، و پێداویستیەکانی پڕۆژە.",

  "process.step2.title": "دیزاین",
  "process.step2.description":
    "دیزاینەرەکانمان وایەرفرەیم و دیزاینی بینراو دروست دەکەن کە لەگەڵ ناسنامەی براندەکەت دەگونجێن.",

  "process.step3.title": "پەرەپێدان",
  "process.step3.description": "پەرەپێدەرەکانمان دیزاینەکان دەهێننە ژیان بە کۆدی پاک، کارا، و گەشەپێدراو.",

  "process.step4.title": "تاقیکردنەوە",
  "process.step4.description":
    "ئێمە بە وردی هەموو لایەنەکانی پڕۆژەکەت تاقی دەکەینەوە بۆ دڵنیابوون لە کوالیتی و کارایی.",

  "process.step5.title": "دامەزراندن",
  "process.step5.description":
    "ئێمە پڕۆژەکەت دەخەینە کار و دڵنیا دەبین کە هەموو شتێک بە باشی کار دەکات لە ژینگەی بەرهەمهێناندا.",

  "process.step6.title": "پاراستن",
  "process.step6.description":
    "ئێمە پشتگیری بەردەوام و نوێکردنەوە دابین دەکەین بۆ هێشتنەوەی بەرهەمە دیجیتاڵیەکەت بە باشترین شێوە.",

  // Projects
  "projects.badge": "پۆرتفۆلیۆی ئێمە",
  "projects.title": "پڕۆژە تایبەتەکان",
  "projects.description": "پۆرتفۆلیۆی پڕۆژە سەرکەوتووەکانمان بگەڕێ لە پیشەسازی و تەکنەلۆژیای جیاوازدا",
  "projects.category.all": "هەموو",
  "projects.category.health": "تەندروستی و چاکبوون",
  "projects.category.communication": "پەیوەندی و فێربوون",
  "projects.category.lifestyle": "شێوازی ژیان و یوتیلیتی",
  "projects.viewLive": "بینینی زیندوو",

  // Testimonials
  "testimonials.badge": "فیدباکی کڕیار",
  "testimonials.title": "کڕیارەکانمان چی دەڵێن",
  "testimonials.description": "تەنها قسەی ئێمە وەرمەگرە - گوێ لە هەندێک لە کڕیارە ڕازیەکانمان بگرە",

  // FAQ
  "faq.badge": "پرسیارت هەیە؟",
  "faq.title": "پرسیارە دووبارەبووەکان",
  "faq.description": "وەڵامی پرسیارە باوەکان بدۆزەرەوە دەربارەی خزمەتگوزاریەکانمان، پرۆسە، و زیاتر",

  // CTA
  "cta.title": "ئامادەی بۆ گۆڕینی ئامادەبوونی دیجیتاڵیت؟",
  "cta.description":
    "با پێکەوە هاوکاری بکەین بۆ دروستکردنی چارەسەرێکی دیجیتاڵی کە براندەکەت بەرز دەکاتەوە و کاروبارەکەت بەرەو پێشەوە دەبات.",
  "cta.button1": "پڕۆژەکەت دەست پێبکە",
  "cta.button2": "ڕاوێژکاریەک دیاری بکە",

  // Contact
  "contact.badge": "پەیوەندیمان پێوە بکە",
  "contact.title": "پەیوەندی",
  "contact.description": "پڕۆژەیەکت لە مێشکدایە؟ ئێمە حەز دەکەین لێت ببیستین. پەیوەندی بکە بە تیمەکەمانەوە.",
  "contact.form.name": "ناو",
  "contact.form.email": "ئیمەیڵ",
  "contact.form.subject": "بابەت",
  "contact.form.message": "پەیام",
  "contact.form.submit": "پەیام بنێرە",
  "contact.form.sending": "دەنێردرێت...",
  "contact.form.sent": "پەیام نێردرا!",
  "contact.info.title": "زانیاری پەیوەندی",
  "contact.info.email": "ئیمەیڵ",
  "contact.info.phone": "تەلەفۆن",
  "contact.info.address": "ناونیشان",
  "contact.info.follow": "فۆڵۆمان بکە",

  // Footer
  "footer.description":
    "دروستکردنی ئەزموونی دیجیتاڵی کە گرنگە. ئێمە پسپۆڕین لە پەرەپێدانی ماڵپەڕ، ئەپڵیکەیشنی وێب، و ئەپڵیکەیشنی مۆبایل بە فۆکەسێک لەسەر کوالیتی و داهێنان.",
  "footer.rights": "هەموو مافەکان پارێزراون.",
  "footer.services": "خزمەتگوزاریەکان",
  "footer.company": "کۆمپانیا",
  "footer.newsletter": "بەشداری لە نیوزلەتەرەکەمان بکە",
  "footer.newsletter.placeholder": "ئیمەیڵەکەت",
  "footer.newsletter.button": "بەشداری بکە",
  "footer.policy.privacy": "سیاسەتی تایبەتمەندی",
  "footer.policy.terms": "مەرجەکانی خزمەتگوزاری",
  "footer.policy.cookie": "سیاسەتی کووکی",
  "footer.designed": "دیزاین کراوە بە ♥ لەلایەن نێسترۆ بیڵدەر",

  // Language
  "language.en": "English",
  "language.ku": "کوردی",
}

const translations = {
  en: enTranslations,
  ku: kuTranslations,
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en")
  const [forceUpdate, setForceUpdate] = useState(0) // Add a state to force re-renders

  useEffect(() => {
    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ku")) {
      setLanguageState(savedLanguage)
    }

    // Set the dir attribute on the html element
    document.documentElement.dir = language === "ku" ? "rtl" : "ltr"
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    document.documentElement.dir = lang === "ku" ? "rtl" : "ltr"
    setForceUpdate((prev) => prev + 1) // Force a re-render when language changes
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {/* Add key to force re-render of all children when language changes */}
      <div key={`lang-${language}-${forceUpdate}`}>{children}</div>
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
