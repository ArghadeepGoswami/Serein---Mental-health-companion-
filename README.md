# Serein 🌿

**Serein** is a calm, low-pressure entry point into mental wellbeing support. Rather than immediately pushing visitors to book a consultation or create an account, Serein allows them to explore at their own pace.

Users can write freely in a journal, learn about the platform's philosophy, explore consultation options, or simply browse the website before deciding what feels right for them.

This project is a **7-page responsive website** built using plain HTML, CSS, and JavaScript.

> *Sometimes, taking the first step toward feeling better shouldn't feel overwhelming.*

<!-- 🔗 Live Demo: Add your deployed project URL here -->

<!-- 📸 Screenshot: Add a screenshot or preview of the homepage here -->

---

## ✨ Features

### 🏠 Informational Pages

Serein includes several pages that introduce users to the platform and its approach to mental wellbeing:

* **Home** — A welcoming introduction to Serein and its available resources
* **About Us** — The story, philosophy, and values behind the platform
* **Consultation** — Information about available consultation formats and options
* **Media & Awards** — A showcase of media mentions, interviews, and achievements

All pages follow a consistent design language with a shared navigation bar and footer.

### 📓 Personal Journal

The Journal provides a simple space where users can write down their thoughts without needing to create an account.

Users can:

* Add journal entries
* Delete existing entries
* Write freely without format or length restrictions

### 🔐 Client-Side Authentication

Serein includes a basic client-side authentication system powered by `localStorage`.

Users can:

* Create an account
* Log into an existing account
* Log out of their account

Once a user signs in, the navigation bar automatically replaces the **Login** button with an account icon and the user's name.

> ⚠️ This authentication system is designed for demonstration purposes only and should not be used in a production environment.

### 🧭 Consistent Navigation

Every page follows the same navigation and footer structure, creating a seamless browsing experience throughout the website.

### 🚫 No Broken Links

Some planned features are still under development:

* Self Reflection
* Breathe
* Ground Yourself

Instead of leading users to broken pages, these options are intentionally kept inactive until they are fully developed.

---

## 🛠️ Tech Stack

The project was built without frameworks or build tools.

* **HTML5** — Page structure
* **CSS3** — Styling and responsive design
* **Vanilla JavaScript** — Interactive functionality and authentication logic
* **Bootstrap 5** — Grid system, responsive navigation, dropdowns, and UI components
* **Bootstrap Icons** — Website iconography
* **Google Fonts**

  * Playfair Display — Headings
  * Poppins — Body text
* **localStorage** — Client-side storage for accounts and user data

---

## 📁 Project Structure

```text
serein/
│
├── home.html
├── home.css
│
├── about.html
├── about.css
│
├── consult.html
├── consult.css
│
├── media.html
├── media.css
│
├── journal.html
├── journal.css
│
├── login.html
├── login.css
│
├── register.html
├── register.css
│
├── storage.js          # Shared authentication and account logic
│
└── HomeBG.jpeg         # Homepage background image
```

Each page has its own dedicated HTML and CSS file. While the pages are individually structured, they follow a shared design system to maintain visual consistency throughout the website.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/serein.git
```

### 2. Navigate to the Project Folder

```bash
cd serein
```

No additional dependencies or build tools are required.

### Option 1: Open Directly

Simply open `home.html` in your preferred browser.

### Option 2: Use a Local Server

For a more realistic development environment, you can run the project using a local server.

Using `npx`:

```bash
npx serve .
```

Or using Python:

```bash
python -m http.server
```

Then open the local address provided in your terminal and navigate to:

```text
/home.html
```

---

## 📄 Pages Overview

| Page              | File            | Description                                                              |
| ----------------- | --------------- | ------------------------------------------------------------------------ |
| 🏠 Home           | `home.html`     | Landing page introducing Serein, its philosophy, and available resources |
| 🌿 About Us       | `about.html`    | Explains the story, values, and approach behind Serein                   |
| 💬 Consultation   | `consult.html`  | Displays available consultation formats and options                      |
| 📰 Media & Awards | `media.html`    | Highlights media coverage, interviews, and awards                        |
| 📓 Journal        | `journal.html`  | Allows users to create and delete personal journal entries               |
| 🔐 Login          | `login.html`    | Allows existing users to sign into their accounts                        |
| ✨ Register        | `register.html` | Allows new users to create an account                                    |

---

## 🎨 Design System

Serein uses a soft and calming visual identity designed to make the experience feel welcoming rather than clinical.

### Color Palette

| Color             | Hex Code  | Usage                                     |
| ----------------- | --------- | ----------------------------------------- |
| Deep Charcoal     | `#293735` | Primary text and dark backgrounds         |
| Sage Green        | `#6F8F88` | Primary accent, buttons, links, and icons |
| Light Sage        | `#E8EEEB` | Light backgrounds and decorative elements |
| Warm Cream        | `#F7F5F0` | Main page background                      |
| Gold / Terracotta | `#C9A27E` | Decorative accents and highlights         |

### Typography

* **Playfair Display** — Used primarily for headings to create a warm and elegant feel
* **Poppins** — Used for body text to maintain readability and simplicity

---

## ⚠️ Known Limitations

This project is currently a front-end prototype and has several limitations.

### Client-Side Authentication

User credentials are stored directly in `localStorage`.

This means:

* Passwords are not encrypted or hashed
* Accounts only exist in the browser where they were created
* User data is not secure enough for a real production application

### Limited Resource Tools

Out of the planned wellbeing tools, only the **Journal** is currently functional.

The following features are placeholders:

* Self Reflection
* Breathe
* Ground Yourself

### No Backend

Serein currently does not use a database or server.

As a result:

* User accounts cannot be accessed from another device
* Journal entries are stored locally
* Data can be lost if browser storage is cleared

### Placeholder Content

Some content on the **Media & Awards** page, including awards and press mentions, currently uses sample data for demonstration purposes.

---

## 🗺️ Roadmap

Future improvements planned for Serein include:

* [ ] Develop the **Self Reflection** feature
* [ ] Create interactive **Breathing Exercises**
* [ ] Develop the **Ground Yourself** wellbeing tool
* [ ] Add a secure backend for authentication
* [ ] Implement password hashing and secure user authentication
* [ ] Add cloud-based storage for journal entries
* [ ] Replace placeholder media and award content with real information
* [ ] Conduct usability testing to improve the low-pressure user experience
* [ ] Improve accessibility across the website
* [ ] Further optimize the website for mobile devices

---

## 💡 The Idea Behind Serein

Seeking mental wellbeing support can sometimes feel like a major commitment.

Many platforms immediately ask users to:

* Create an account
* Share personal information
* Book a session
* Explain their feelings to someone new

Serein takes a different approach.

The platform is designed around the idea that people should be able to **approach support gradually**. Instead of forcing users into one path, Serein offers multiple low-pressure entry points.

A visitor can simply explore.

They can write.

They can learn.

They can consider their options.

And only when they feel ready do they need to take the next step.

---

## 📜 License

This project currently does not have a license.

You may add an appropriate open-source license, such as the MIT License, in the future.

---

### 🌿 Built with the belief that taking care of your mind should begin with a space that feels safe, calm, and entirely your own.
