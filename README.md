A **SFX Dashboard UI** built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Lucide React Icons**.  
This project showcases a dashboard layout design, reusable components, and a responsive structure, all of which contribute to a production-ready interface.

---

##  Features

- 📊 **Responsive Dashboard Layout** (Sidebar, Topbar, and Message Panel)
- 💬 **Interactive Message List Component**
- 🧱 **Modular Folder Structure using Next.js App Router**
- 🎨 **Tailwind CSS for Styling**
- 🧩 **Lucide React for Icons**
- ⚡ **Fast Rendering with React Server Components**
- 🧭 **Automatic Redirect to `/dashboard` route on app load**
- 🧱 **Fully Componentized UI (Sidebar, MessageList, Layouts, etc.)**

---

## 🛠️ Tech Stack

| Tool | Description |
|------|--------------|
| [Next.js 14](https://nextjs.org/) | React framework for production apps |
| [React 18](https://react.dev/) | UI library |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework |
| [Lucide React](https://lucide.dev/) | Beautiful open-source icons |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| [Vercel](https://vercel.com/) | Hosting and deployment |


 Library                                                                   |
 **lucide-react**                  
 **react-icons**                  
 **recharts**                     
 **clsx**                         
 **class-variance-authority**     
 **tailwind-merge**              
 **@radix-ui/react-avatar**       
 **@radix-ui/react-dialog**        
 **@radix-ui/react-dropdown-menu** 
 **@radix-ui/react-progress**      
 **@radix-ui/react-slot**         
 **@radix-ui/react-switch**       
 **tw-animate-css**                

---

## 🧩 Project Structure
app/
├── dashboard/
│ ├── page.tsx # Main dashboard page
│ ├── components/
│ │ ├── Sidebar.tsx
│ │ ├── MessageList.tsx
│ │ └── Tobbar.tsx 
│
├── dashboard/Layout.tsx # Dashboard wrapper layout
├── page.tsx # Redirects to /dashboard
├── globals.css # Tailwind base styles
├── layout.tsx # Root layout


---

## ⚙️ Setup Instructions

### 1 Clone the repository
in terminal 
git clone https://github.com/CODSHOTX/sfx_dashboard.git
cd sfx_dashboard

### 2 Install dependencies
Make sure you have Node.js ≥ 18 installed.
npm install

### Run the development server
npm run dev
Then visit 👉 http://localhost:3000

### Assumptions Made
I assumed the following while building:
I am building an analytics dashboard that can work on mobile and large screen devices
The message tab is fixed on the right side of the screen
The charts should use dynamic values
the drop down buttons should be functional
the icons shouldn't be 100% matching
