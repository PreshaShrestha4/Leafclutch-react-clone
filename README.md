# Leafclutch EdTech React Clone

## Project Overview

This project is a **React.js clone** of the Leafclutch EdTech website.  
The goal was to rebuild the original HTML/CSS/JS website using a **modern React component-based architecture**, while keeping the **same design, layout, and functionality**.

The project demonstrates:

- Component reusability
- Routing with React Router
- State management for dynamic content (e.g., courses)
- Responsive and modular design

---

## Tech Stack

- **React.js** – Frontend framework
- **React Router** – SPA navigation
- **JavaScript (ES6)** – Logic & interactivity
- **HTML5 & CSS3** – Structure and styling
- **Optional**: React Icons for icons

---

## Pages Implemented

1. **Home** – Landing page with hero, featured courses, and CTA sections
2. **About** – Company overview and mission
3. **Courses** – List of courses with details and cards
4. **Contact** – Contact form and company info

> Blog page is **not implemented**, as per the assignment instructions.

---

## Folder Structure

leafclutch-react-clone/
│
├── public/
│ └── index.html
│
├── src/
│ ├── components/
│ │ ├── AboutHowItWorks.js
│ │ ├── AboutSection.js
│ │ ├── ComplectionPerks.js
│ │ ├── Contactform.js
│ │ ├── ContactHero.js
│ │ ├── ContactSection.js
│ │ ├── CourseBreadcrumb.js
│ │ ├── CourseHero.js
│ │ ├── CoursesSection.js
│ │ ├── CTASection.js
│ │ ├── EnrollPerks.js
│ │ ├── FAQSection.js
│ │ ├── Footer.js
│ │ ├── HeroSection.js
│ │ ├── MembershipSection.js
│ │ ├── Navbar.js
│ │ ├── PageHero.js
│ │ ├── ProgramBenefits.js
│ │ ├── ProgramOverview.js
│ │ ├── ProgramTimeline.js
│ │ ├── StatsSection.js
│ │ ├── TechTracks.js
│ │ ├── TestimonialsSection.js
│ │ ├── WhatsAppFloat.js
│ │ └── WhyChooseUs.js
│ │
│ ├── data/
│ │ └── coursesData.js
│ │
│ ├── pages/
│ │ ├── About.js
│ │ ├── AiMachineLearningPage.js
│ │ ├── Contact.js
│ │ ├── CoursePage.js
│ │ ├── CyberSecurityPage.js
│ │ ├── DataScience.js
│ │ ├── Enroll.js
│ │ ├── GraphicDesigning.js
│ │ ├── Home.js
│ │ ├── UIUXPage.js
│ │ └── WebDevPage.js
│ │
│ ├── App.js
│ ├── index.css
│ └── index.js
│
├── .gitignore
├── package-lock.json
├── package.json
└── README.md

## Steps to Run Locally

1. **Clone the repository**

```bash
git clone https://github.com/PreshaShrestha4/Leafclutch-react-clone.git
```

2. **Navigate to project folder**

```bash
cd Leafclutch-react-clone
```

3. **Install dependencies**

```bash
npm install
```

4. **Start the development server**

```bash
npm start
```

## Development Approach

1. **Component-based architecture**

- All reusable UI parts like Navbar, Footer, HeroSection, CourseBreadcrumb, Testimonials, etc. are separate components.

2. **Dynamic course pages**

- Course data is stored in src/data/coursesData.js and rendered in individual course pages.

3. **Routing with React Router**

- All pages are connected via SPA routing (Home, About, Courses, Contact).

4. **Styling**

- CSS modules and consistent class names were used to match the reference website.

5. **Direct image links**

- All images are loaded via URLs to reduce local assets.

## Deployment

The project is deployed on:
hosted link:
https://leafclutch-react-clone.vercel.app/

## Possible Improvements

- Make the site fully mobile responsive

- Fetch course data from an API instead of static file

- Add form validation in the Contact form

- Implement dark mode toggle

- Add animations for better user experience

## Author

Presha Shrestha – Intern & Frontend Developer
Email: preshashrestha041@gmail.com
