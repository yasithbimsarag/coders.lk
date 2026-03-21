import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, Code2Icon } from 'lucide-react';
const navLinks = [
{
  name: 'Services',
  href: '#services'
},
{
  name: 'Portfolio',
  href: '#portfolio'
},
{
  name: 'Tech Stack',
  href: '#tech'
},
{
  name: 'Testimonials',
  href: '#testimonials'
}];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            aria-label="coders.lk Home">
            
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white shadow-lg shadow-accent-primary/20 group-hover:shadow-accent-primary/40 transition-all">
              <Code2Icon className="w-6 h-6" />
            </div>
            <span className="text-xl font-extrabold text-white tracking-tight">
              coders.lk
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              
                {link.name}
              </a>
            )}
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all hover:border-accent-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary">
              
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu">
            
            {mobileMenuOpen ?
            <XIcon className="w-6 h-6" /> :

            <MenuIcon className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-background-alt border-b border-white/5 overflow-hidden">
          
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-white py-2">
              
                  {link.name}
                </a>
            )}
              <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-5 py-3 rounded-lg bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-center font-medium">
              
                Get Started
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

<<<<<<< HEAD
}
i need to adda image for the logo how can i do it tell me step by step

Nice navbar 🔥 — adding an image logo is very simple. I’ll walk you step by step.

✅ Step 1 — Add your logo image to project
Put your logo file inside your React project:

src/assets/logo.png
(You can name it anything: logo.png, logo.svg, etc.)

✅ Step 2 — Import the image
At the top of your Navbar file, add:

import logo from '../assets/logo.png';
👉 Adjust the path if your folder structure is different.

✅ Step 3 — Replace the icon with image
Find this part:

<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white shadow-lg shadow-accent-primary/20 group-hover:shadow-accent-primary/40 transition-all">
  <Code2Icon className="w-6 h-6" />
</div>
🔁 Replace it with:
<div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg group-hover:shadow-accent-primary/40 transition-all">
  <img 
    src={logo} 
    alt="coders.lk logo" 
    className="w-full h-full object-cover"
  />
</div>
✅ Step 4 — (Optional) Keep icon + image
If you want both logo + icon:

<div className="flex items-center gap-2">
  <img src={logo} alt="logo" className="w-10 h-10 rounded-xl" />
  <Code2Icon className="w-5 h-5 text-white" />
</div>
✅ Step 5 — Run your project
npm run dev
💡 Pro Tips (make it look advanced)
Use SVG logo → better quality

Add hover animation:

className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
If logo has transparent background → looks more premium

🚀 Bonus (cleaner version without background box)
If you want just the image:

<img 
  src={logo} 
  alt="coders.lk logo" 
  className="w-10 h-10"
/>
If you want, I can:

Design a modern logo for coders.lk

Or make your navbar look like premium SaaS level (like Stripe/Vercel) 😎


import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, Code2Icon } from 'lucide-react';
import logo from 'D:\coders.lk\src\logo.png';


const navLinks = [
{
  name: 'Services',
  href: '#services'
},
{
  name: 'Portfolio',
  href: '#portfolio'
},
{
  name: 'Tech Stack',
  href: '#tech'
},
{
  name: 'Testimonials',
  href: '#testimonials'
}];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            aria-label="coders.lk Home">
            
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white shadow-lg shadow-accent-primary/20 group-hover:shadow-accent-primary/40 transition-all">
              <Code2Icon className="w-6 h-6" />
            </div>
            <span className="text-xl font-extrabold text-white tracking-tight">
              coders.lk
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              
                {link.name}
              </a>
            )}
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all hover:border-accent-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary">
              
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu">
            
            {mobileMenuOpen ?
            <XIcon className="w-6 h-6" /> :

            <MenuIcon className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-background-alt border-b border-white/5 overflow-hidden">
          
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-white py-2">
              
                  {link.name}
                </a>
            )}
              <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-5 py-3 rounded-lg bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-center font-medium">
              
                Get Started
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}
is it okay

Not quite — there’s one important mistake that will break your app ❌

❌ Problem
This line is wrong:

import logo from 'D:\coders.lk\src\logo.png';
👉 React (Vite) does NOT support absolute Windows paths like that.

✅ Fix it (Step by Step)
✅ Step 1 — Move your image properly
Put your image inside:

src/assets/logo.png
(Create assets folder if it doesn't exist)

✅ Step 2 — Correct import
Now change this line:

import logo from '../assets/logo.png';
👉 Adjust ../ depending on your file location:

Your file location	Correct import
src/components/Navbar.jsx	../assets/logo.png
src/Navbar.jsx	./assets/logo.png
✅ Step 3 — Use the image (replace icon)
Replace this:

<Code2Icon className="w-6 h-6" />
🔁 With this:
<img 
  src={logo} 
  alt="coders.lk logo" 
  className="w-full h-full object-cover"
/>
🔥 Final Logo Section (Clean Version)
<div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg group-hover:shadow-accent-primary/40 transition-all">
  <img 
    src={logo} 
    alt="coders.lk logo" 
    className="w-full h-full object-cover"
  />
</div>
💡 Alternative (EASIER method)
If you don’t want imports, you can do this:

Step 1
Put image in:

public/logo.png
Step 2
Use directly:

<img src="/logo.png" alt="logo" className="w-10 h-10" />
🚨 Why your current code fails
D:\... is a local system path

Browser cannot access your PC filesystem

Vite only works with:

relative imports (../assets/...)

or public folder (/logo.png)

✅ After fixing
Run:

npm run dev
If you want next level 🔥
I can:

Make your navbar look like Apple / Stripe level UI

Add animated logo hover

Or design a professional logo for coders.lk

Just tell me 👍


import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, Code2Icon } from 'lucide-react';
import logo from '../assets/logo.png ';


const navLinks = [
{
  name: 'Services',
  href: '#services'
},
{
  name: 'Portfolio',
  href: '#portfolio'
},
{
  name: 'Tech Stack',
  href: '#tech'
},
{
  name: 'Testimonials',
  href: '#testimonials'
}];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            aria-label="coders.lk Home">
            
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white shadow-lg shadow-accent-primary/20 group-hover:shadow-accent-primary/40 transition-all">
              <Code2Icon className="w-6 h-6" />
            </div>
            <span className="text-xl font-extrabold text-white tracking-tight">
              coders.lk
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              
                {link.name}
              </a>
            )}
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all hover:border-accent-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary">
              
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu">
            
            {mobileMenuOpen ?
            <XIcon className="w-6 h-6" /> :

            <MenuIcon className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-background-alt border-b border-white/5 overflow-hidden">
          
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-white py-2">
              
                  {link.name}
                </a>
            )}
              <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-5 py-3 rounded-lg bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-center font-medium">
              
                Get Started
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}

You’re very close 🔥 — just 2 small issues left.

❌ Issue 1 (IMPORTANT)
This line has a space at the end:

import logo from '../assets/logo.png ';
👉 That space breaks the import.

✅ Fix it
import logo from '../assets/logo.png';
❌ Issue 2
You are still using the icon instead of the image 👇

<Code2Icon className="w-6 h-6" />
✅ Replace it with your logo
🔁 Change this whole block:
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white shadow-lg shadow-accent-primary/20 group-hover:shadow-accent-primary/40 transition-all">
  <Code2Icon className="w-6 h-6" />
</div>
🚀 To THIS:
<div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg group-hover:shadow-accent-primary/40 transition-all">
  <img 
    src={logo} 
    alt="coders.lk logo" 
    className="w-full h-full object-cover"
  />
</div>
✅ Final Checklist
✔ Image inside src/assets/logo.png
✔ Correct import (no spaces)
✔ Replaced <Code2Icon /> with <img />

💥 If still not working
Check these:

1. File exists?
src/assets/logo.png
2. File name EXACT?
logo.png ≠ Logo.png

3. Restart dev server
npm run dev
🔥 Pro upgrade (optional – looks premium)
Add hover zoom:

className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
If you want next step:
👉 I can upgrade your whole navbar to modern SaaS style (glass + blur + animation)
👉 Or design a clean professional logo for coders.lk

Just tell me 👍


import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, Code2Icon } from 'lucide-react';
import logo from '../assets/logo.png';


const navLinks = [
{
  name: 'Services',
  href: '#services'
},
{
  name: 'Portfolio',
  href: '#portfolio'
},
{
  name: 'Tech Stack',
  href: '#tech'
},
{
  name: 'Testimonials',
  href: '#testimonials'
}];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            aria-label="coders.lk Home">
            
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white shadow-lg shadow-accent-primary/20 group-hover:shadow-accent-primary/40 transition-all">
              <Code2Icon className="w-6 h-6" />
            </div>
            <span className="text-xl font-extrabold text-white tracking-tight">
              coders.lk
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              
                {link.name}
              </a>
            )}
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all hover:border-accent-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary">
              
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu">
            
            {mobileMenuOpen ?
            <XIcon className="w-6 h-6" /> :

            <MenuIcon className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-background-alt border-b border-white/5 overflow-hidden">
          
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-white py-2">
              
                  {link.name}
                </a>
            )}
              <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-5 py-3 rounded-lg bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-center font-medium">
              
                Get Started
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}

Almost perfect 👍 — your import is now correct ✅
But you still didn’t replace the icon with the image, so your logo won’t show yet.

❌ Current problem
You still have this:

<Code2Icon className="w-6 h-6" />
So React is showing the icon instead of your image.

✅ Final fix (DO THIS)
🔁 Replace this block:
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white shadow-lg shadow-accent-primary/20 group-hover:shadow-accent-primary/40 transition-all">
  <Code2Icon className="w-6 h-6" />
</div>
🚀 With THIS:
<div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg group-hover:shadow-accent-primary/40 transition-all">
  <img 
    src={logo} 
    alt="coders.lk logo" 
    className="w-full h-full object-cover"
  />
</div>
🔥 Cleaner + More Premium Version
If you don’t want the gradient background:

<img 
  src={logo} 
  alt="coders.lk logo" 
  className="w-10 h-10 rounded-xl object-cover"
/>
💡 Optional (VERY NICE effect)
Add hover animation:

className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
✅ After this
Run:

npm run dev
🚨 If image still not showing
Check:

File exists → src/assets/logo.png

Correct name (case-sensitive)

Restart dev server

If you want next level 🔥
I can:

Turn your navbar into a glassmorphism + blur + animation UI

Add active link indicator (like modern SaaS sites)

Or redesign your whole portfolio to look like parthsharma.me level

Just tell me 👍


[plugin:vite:import-analysis] Failed to resolve import "../assets/logo.png" from "src/components/Navbar.tsx". Does the file exist?
D:/coders.lk/src/components/Navbar.tsx:4:17
19 |  import { motion, AnimatePresence } from "framer-motion";
20 |  import { MenuIcon, XIcon } from "lucide-react";
21 |  import logo from "../assets/logo.png";
   |                    ^
22 |  const nav

Good — now the error is clear 👍
This is NOT a React problem, it’s a file path issue.

❌ Error meaning
Failed to resolve import "../assets/logo.png"
👉 Vite is saying:

“I can’t find your image in that location”

✅ Fix it step by step
✅ Step 1 — Check your folder structure
Go to your project and make sure it looks like this:

src/
 ├── assets/
 │    └── logo.png   ✅ MUST be here
 ├── components/
 │    └── Navbar.tsx
❗ If assets folder DOESN’T exist
👉 Create it:

Right click src

New Folder → assets

Move your logo.png inside it

✅ Step 2 — Confirm file name EXACTLY
Make sure:

logo.png
❌ Not:

Logo.png

logo.PNG

logo (1).png

👉 File names are case-sensitive

✅ Step 3 — Correct import (you already did right)
Since your file is:

src/components/Navbar.tsx
This is correct:

import logo from '../assets/logo.png';
❗ Step 4 — If still error
Try this trick (very common fix):

🔁 Restart Vite server
npm run dev
or stop and start again:

Ctrl + C
npm run dev
🔥 Alternative (EASIEST method – no import issues)
Step 1
Move image to:

public/logo.png
Step 2
Use directly:

<img src="/logo.png" alt="logo" className="w-10 h-10" />
👉 This method NEVER fails 💯

🚨 Most likely your issue
👉 Your file is NOT in:

src/assets/logo.png
✅ Quick checklist
✔ src/assets/logo.png exists
✔ file name is correct
✔ no spelling mistakes
✔ server restarted

If you want, send me a screenshot of your folder structure
I’ll point out the exact problem in 5 seconds 👌


[plugin:vite:import-analysis] Failed to resolve import "../assets/logo.png" from "src/components/Navbar.tsx". Does the file exist?
D:/coders.lk/src/components/Navbar.tsx:4:17
19 |  import { motion, AnimatePresence } from "framer-motion";
20 |  import { MenuIcon, XIcon } from "lucide-react";
21 |  import logo from "../assets/logo.png";
   |                    ^
22 |  const navLinks = [
23 |    {
    at TransformPluginContext._formatError (file:///D:/coders.lk/node_modules/vite/dist/node/chunks/dep-BK3b2jBa.js:49258:41)
    at TransformPluginContext.error (file:///D:/coders.lk/node_modules/vite/dist/node/chunks/dep-BK3b2jBa.js:49253:16)
    at normalizeUrl (file:///D:/coders.lk/node_modules/vite/dist/node/chunks/dep-BK3b2jBa.js:64307:23)
    at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
    at async file:///D:/coders.lk/node_modules/vite/dist/node/chunks/dep-BK3b2jBa.js:64439:39
    at async Promise.all (index 6)
    at async TransformPluginContext.transform (file:///D:/coders.lk/node_modules/vite/dist/node/chunks/dep-BK3b2jBa.js:64366:7)
    at async PluginContainer.transform (file:///D:/coders.lk/node_modules/vite/dist/node/chunks/dep-BK3b2jBa.js:49099:18)
    at async loadAndTransform (file:///D:/coders.lk/node_modules/vite/dist/node/chunks/dep-BK3b2jBa.js:51978:27)
    at async viteTransformMiddleware (file:///D:/coders.lk/node_modules/vite/dist/node/chunks/dep-BK3b2jBa.js:62106:24
Click outside, press Esc key, or fix the code to dismiss.

Alright — this error is 100% about your folder structure, not your code.

Let’s fix it properly 👇

🔍 What’s happening
Your file is here:

src/components/Navbar.tsx
And you wrote:

import logo from '../assets/logo.png';
👉 This means Vite is looking for:

src/assets/logo.png
👉 BUT it cannot find it → that’s the error

✅ FIX (choose ONE method)
✅ ✅ METHOD 1 (Recommended)
Step 1 — Create correct folder
Inside src, create:

assets
Step 2 — Move your image
Move your logo here:

src/assets/logo.png
Step 3 — Keep your import SAME
import logo from '../assets/logo.png';
Step 4 — Restart server
npm run dev
✅ ✅ METHOD 2 (Easiest – no import headaches)
Step 1 — Move image to:
public/logo.png
Step 2 — Use directly:
<img src="/logo.png" alt="logo" className="w-10 h-10" />
👉 No import needed
👉 Works instantly 💯

🚨 Common mistakes (you likely did one of these)
❌ File is in wrong place:

src/components/logo.png   ← WRONG
❌ File name mismatch:

Logo.png  ❌
logo.PNG  ❌
logo.png  ✅
❌ Hidden extension:

logo.png.png ❌
🔥 Quick test (IMPORTANT)
Go to your project folder and check:

👉 Can you manually open this?

D:\coders.lk\src\assets\logo.png
If NO → file is not there

If YES → restart Vite

💬 If still not working
Send me a screenshot of:

src/
 ├── components/
 ├── ??? (where your logo is)
I’ll find the exact issue instantly 👍


tell me the correct way but step by step or i will be mad at this

Got it 😤 — we’ll do this step by step, no shortcuts, so your logo will work in React + Vite. Follow exactly.

✅ Step 1 — Check your folder structure
Open your project folder D:\coders.lk\.
Inside, make sure you have:

coders.lk/
 ├── src/
 │    ├── components/
 │    │    └── Navbar.tsx
 │    └── assets/          ← create this if it doesn't exist
 │         └── logo.png    ← your logo file goes here
 └── public/
Important:

File name must be exactly logo.png (lowercase).

No spaces, no .PNG, no extra extensions.

✅ Step 2 — Move your image
Move your logo file into src/assets/:

D:\coders.lk\src\assets\logo.png
✅ Step 3 — Import the image in Navbar.tsx
Open Navbar.tsx and replace your current import with:

import logo from '../assets/logo.png';
Explanation:

.. = go up one folder from components → src

assets/logo.png = the path to your logo

✅ Step 4 — Replace the icon with your image
Find this block in your Navbar:

<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white shadow-lg shadow-accent-primary/20 group-hover:shadow-accent-primary/40 transition-all">
  <Code2Icon className="w-6 h-6" />
</div>
Replace it entirely with:

<div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg group-hover:shadow-accent-primary/40 transition-all">
  <img 
    src={logo} 
    alt="coders.lk logo" 
    className="w-full h-full object-cover"
  />
</div>
✅ Step 5 — Restart Vite server
After saving your changes, stop the server and restart:

Ctrl + C  # stop server
npm run dev  # start server again
✅ Step 6 — Check in browser
Open your site → top left logo should now show your image instead of the icon.

💡 Optional pro tip
If you want a smoother hover effect:

<img 
  src={logo} 
  alt="coders.lk logo" 
  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
/>
This makes your logo slightly zoom on hover, looks professional.

If you want, I can rewrite your full Navbar.tsx ready-to-copy with the image logo working perfectly and mobile menu intact — no errors.

Do you want me to do that?


should i give something inside src={logo} in here

Yes ✅ — in React, when you import an image like this:

import logo from '../assets/logo.png';
Then logo already holds the path to your image. So in your <img> tag, you just use it directly:

<img src={logo} alt="coders.lk logo" className="w-full h-full object-cover" />
Do NOT put quotes like '../assets/logo.png' here — that will break it.

Do NOT add D:\... or any absolute path. React/Vite can’t read your local disk.

✅ Correct way:

<div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg transition-all">
  <img src={logo} alt="coders.lk logo" className="w-full h-full object-cover" />
</div>
If you want, I can give you a full working Navbar.tsx with the image logo ready to paste — zero path errors, mobile menu working, scroll effect intact.

Do you want me to do that?


ok

Perfect! Here’s a full working Navbar.tsx with your image logo integrated, mobile menu, scroll effect, and smooth hover animations. Just copy and paste it.

Make sure your logo file is at:

src/assets/logo.png
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import logo from '../assets/logo.png'; // Make sure this path matches your folder structure

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Tech Stack', href: '#tech' },
  { name: 'Testimonials', href: '#testimonials' }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" aria-label="coders.lk Home">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg group-hover:shadow-accent-primary/40 transition-all">
              <img
                src={logo}
                alt="coders.lk logo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-xl font-extrabold text-white tracking-tight">coders.lk</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all hover:border-accent-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background-alt border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-300 hover:text-white py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-5 py-3 rounded-lg bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-center font-medium"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}




=======
}
>>>>>>> parent of 15bb6c9 (logo update)
