# Himanshu Raj – Personal Portfolio

A modern, responsive React portfolio showcasing Himanshu's web design and development work.  
The site features a clean UI, smooth scrolling navigation, and a contact form powered by **EmailJS**.

## ✨ Features

- **Responsive Design** – Works on desktop, tablet, and mobile.
- **Smooth Scrolling** – Implemented with `react-scroll`.
- **Contact Form** – Sends emails directly via EmailJS (no backend required).
- **Animated Navigation** – Desktop and mobile menu variants.
- **Showcase Section** – Portfolio images displayed in a flexible grid.
- **Skills Section** – Highlights UI/UX, website, and app design expertise.

## 🛠️ Tech Stack

| Technology | Version |
|------------|---------|
| React      | 19.1.0 |
| React‑DOM  | 19.1.0 |
| React‑Scripts | 5.0.1 |
| EmailJS (`@emailjs/browser`) | ^4.4.1 |
| React‑Scroll | ^1.9.3 |
| Testing Library (jest, dom, user‑event) | ^10.4.0 / ^6.6.3 / ^16.3.0 |
| CSS (custom) | – |
| Vercel (deployment) | – |

## 🚀 Getting Started

### Prerequisites

- **Node.js** (>= 18.x) and **npm** (or Yarn) installed.
- An **EmailJS** account (for the contact form). Replace the service/template IDs in `src/components/Contact/contact.js` with your own.

### Installation

```bash
# Clone the repository
git clone https://github.com/im-Vengeance0/portfolio.git
cd portfolio

# Install dependencies
npm install
# or with yarn
# yarn install
```

### Development

```bash
npm start
# or
# yarn start
```

Open <http://localhost:3000> in your browser. The app will auto‑reload as you edit source files.

### Build for Production

```bash
npm run build
# or
# yarn build
```

The optimized production build will be output to the `build/` folder.

### Deployment

The project includes a `vercel.json` that rewrites all routes to `index.html`, making it ready for Vercel hosting:

```bash
# Deploy with the Vercel CLI
vercel --prod
```

> **Tip:** If you’re using another static‑site host (Netlify, GitHub Pages, etc.), simply serve the contents of the `build/` directory.

## 📂 Project Structure

```
portfolio/
├── .gitignore
├── README.md          ← (this file)
├── package.json
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   └── style.css
├── src/
│   ├── App.js
│   ├── assets/        ← images & icons
│   ├── components/
│   │   ├── Contact/
│   │   │   ├── contact.js
│   │   │   └── contact.css
│   │   ├── Footer/
│   │   │   ├── footer.js
│   │   │   └── footer.css
│   │   ├── Intro/
│   │   │   ├── intro.js
│   │   │   └── intro.css
│   │   ├── NavBar/
│   │   │   ├── NavBar.js
│   │   │   └── NavBar.css
│   │   ├── Skills/
│   │   │   ├── skills.js
│   │   │   └── skills.css
│   │   └── Works/
│   │       ├── works.js
│   │       └── works.css
│   └── index.js
└── vercel.json
```

## 📧 Contact Form Setup

The contact component uses EmailJS:

```js
emailjs.sendForm(
  'service_w6e5s89',      // replace with your EmailJS service ID
  'template_yri6pra',     // replace with your EmailJS template ID
  form.current,
  { publicKey: 'qoG_aLtK7aaZSkFm9' } // replace with your public key
)
```

1. Sign up at <https://www.emailjs.com/>.
2. Create a **service**, **template**, and obtain the **public key**.
3. Update the values in `src/components/Contact/contact.js`.

## 🎨 Customization

- **Images:** Replace any file in `src/assets/` with your own graphics (logo, portfolio screenshots, client logos, etc.).
- **Colors & Fonts:** Edit `public/style.css` or component‑specific CSS files.
- **Content:** Update text in each component (`Intro`, `Skills`, `Works`, `Contact`, `Footer`) to reflect your own experience and branding.

## 📄 License

This project is open source and free to use. Feel free to fork, modify, and deploy it as your own portfolio.

---

*Built with ❤️ by Himanshu Raj *  
