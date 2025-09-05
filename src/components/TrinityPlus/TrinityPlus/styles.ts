export const style = `
@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.129 0.042 264.695);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.129 0.042 264.695);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.129 0.042 264.695);
  --primary: oklch(0.208 0.042 265.755);
  --primary-foreground: oklch(0.984 0.003 247.858);
  --secondary: oklch(0.968 0.007 247.896);
  --secondary-foreground: oklch(0.208 0.042 265.755);
  --muted: oklch(0.968 0.007 247.896);
  --muted-foreground: oklch(0.554 0.046 257.417);
  --accent: oklch(0.968 0.007 247.896);
  --accent-foreground: oklch(0.208 0.042 265.755);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.929 0.013 255.508);
  --input: oklch(0.929 0.013 255.508);
  --ring: oklch(0.704 0.04 256.788);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.984 0.003 247.858);
  --sidebar-foreground: oklch(0.129 0.042 264.695);
  --sidebar-primary: oklch(0.208 0.042 265.755);
  --sidebar-primary-foreground: oklch(0.984 0.003 247.858);
  --sidebar-accent: oklch(0.968 0.007 247.896);
  --sidebar-accent-foreground: oklch(0.208 0.042 265.755);
  --sidebar-border: oklch(0.929 0.013 255.508);
  --sidebar-ring: oklch(0.704 0.04 256.788);
}

.dark {
  --background: oklch(0.129 0.042 264.695);
  --foreground: oklch(0.984 0.003 247.858);
  --card: oklch(0.208 0.042 265.755);
  --card-foreground: oklch(0.984 0.003 247.858);
  --popover: oklch(0.208 0.042 265.755);
  --popover-foreground: oklch(0.984 0.003 247.858);
  --primary: oklch(0.929 0.013 255.508);
  --primary-foreground: oklch(0.208 0.042 265.755);
  --secondary: oklch(0.279 0.041 260.031);
  --secondary-foreground: oklch(0.984 0.003 247.858);
  --muted: oklch(0.279 0.041 260.031);
  --muted-foreground: oklch(0.704 0.04 256.788);
  --accent: oklch(0.279 0.041 260.031);
  --accent-foreground: oklch(0.984 0.003 247.858);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.551 0.027 264.364);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.208 0.042 265.755);
  --sidebar-foreground: oklch(0.984 0.003 247.858);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.984 0.003 247.858);
  --sidebar-accent: oklch(0.279 0.041 260.031);
  --sidebar-accent-foreground: oklch(0.984 0.003 247.858);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.551 0.027 264.364);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}

layer utilities {
  /* Reusable gradient base */
  .gradient-brand {
    @apply bg-gradient-to-r from-blue-600 to-purple-600;
  }

  /* Text gradient helper */
  .gradient-text {
    @apply bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent;
  }
}

/* styles/globals.css */
/* styles/globals.css */
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  animation: gradientShift 8s ease infinite;
}

/* styles/globals.css */
.animation-delay-2000 {
  animation-delay: 2s;
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.6;
  }
}
.animate-pulse-slow {
  animation: pulse-slow 6s ease-in-out infinite;
}
@keyframes pulseSlow {
  0%,
  100% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.6;
  }
}
.animate-pulse-slow {
  animation: pulseSlow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.hero-title {
  background-size: 200% auto;
  animation: textShine 5s ease-in-out infinite alternate;
}
@keyframes textShine {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
@keyframes pulseSlow {
  0%,
  100% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.6;
  }
}
.animate-pulse-slow {
  animation: pulseSlow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.hero-title {
  background-size: 200% auto;
  animation: textShine 5s ease-in-out infinite alternate;
}
@keyframes textShine {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

@tailwind utilities;

/* Definition of the design system. All colors, gradients, fonts, etc should be defined here. 
All colors MUST be HSL.
*/

@layer base {
  :root {
    /* Minimalist color palette */
    --background: 0 0% 98%;
    --foreground: 0 0% 8%;

    --card: 0 0% 100%;
    --card-foreground: 0 0% 8%;

    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 8%;

    --primary: 0 0% 8%;
    --primary-foreground: 0 0% 98%;

    --secondary: 0 0% 94%;
    --secondary-foreground: 0 0% 8%;

    --muted: 0 0% 94%;
    --muted-foreground: 0 0% 45%;

    --accent: 270 95% 85%;
    --accent-foreground: 0 0% 8%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;

    --border: 0 0% 90%;
    --input: 0 0% 90%;
    --ring: 0 0% 8%;

    /* Design tokens */
    --gradient-subtle: linear-gradient(
      135deg,
      hsl(0 0% 100%) 0%,
      hsl(0 0% 96%) 100%
    );
    --gradient-accent: linear-gradient(
      135deg,
      hsl(270 95% 90%) 0%,
      hsl(280 90% 85%) 100%
    );
    --shadow-elegant: 0 4px 20px -4px hsl(0 0% 0% / 0.08);
    --shadow-hover: 0 8px 30px -8px hsl(0 0% 0% / 0.15);
    --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    --radius: 0.75rem;

    --sidebar-background: 0 0% 98%;

    --sidebar-foreground: 240 5.3% 26.1%;

    --sidebar-primary: 240 5.9% 10%;

    --sidebar-primary-foreground: 0 0% 98%;

    --sidebar-accent: 240 4.8% 95.9%;

    --sidebar-accent-foreground: 240 5.9% 10%;

    --sidebar-border: 220 13% 91%;

    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;

    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;

    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;

    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;

    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;

    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;

    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
}

/* main.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  background: #fff;
  color: #0f172a;
  overflow-x: hidden;
  line-height: 1.6;
}

:root {
  --primary-from: #409aff;
  --primary-to: #6e3ef4;
  --primary-hover: #5b2cc3;
}

/* Background Effects */
.bg-gradient {
  position: fixed;
  inset: 0;
  /* background: linear-gradient(135deg, #0a0e27 0%, #000 40%, #1a0b2e 100%); */
  opacity: 0.9;
  /* z-index: 0; */
}

.animated-gradient {
  position: fixed;
  inset: 0;
  opacity: 0.1;
  animation: gradientShift 15s ease infinite;
}

.dna-strand {
  position: fixed;
  width: 200%;
  height: 200%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="1" fill="%23a855f7" opacity="0.3"/><circle cx="80" cy="80" r="1" fill="%2306b6d4" opacity="0.3"/><circle cx="50" cy="50" r="1" fill="%23ec4899" opacity="0.3"/></svg>')
    repeat;
  animation: float 20s linear infinite;
  opacity: 0.5;
}

@keyframes gradientShift {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(-20px, -20px) rotate(90deg);
  }
  50% {
    transform: translate(-40px, 20px) rotate(180deg);
  }
  75% {
    transform: translate(20px, -40px) rotate(270deg);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) rotate(15deg);
  }
  50% {
    transform: translate(-10px, -10px) rotate(20deg);
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
}

@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

/* Navigation */
xw

/* Ensure nav text has contrast on white backgrounds */
nav .logo,
nav .logo span {
  color: #0f172a;
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.logo-icon {
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, #06b6d4, #a855f7, #ec4899, #10b981);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  animation: pulse 3s ease-in-out infinite;
}

.plus-badge {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 2px 8px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: bold;
  margin-left: 0.5rem;
  animation: shimmer 3s linear infinite;
  background-size: 200% 100%;
}

/* Buttons */
.btn {
  padding: 0.875rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  border: none;
  font-size: 1rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-from), var(--primary-to));
  color: #fff;
  box-shadow: 0 4px 15px rgba(110, 62, 244, 0.3);
}

.btn-primary:hover {
  box-shadow: 0 8px 30px rgba(110, 62, 244, 0.45);
  transform: translateY(-2px);
  background: linear-gradient(135deg, var(--primary-hover), var(--primary-to));
}

.btn-success {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
}

.btn-success:hover {
  box-shadow: 0 8px 30px rgba(16, 185, 129, 0.5);
  transform: translateY(-2px);
}

.btn-warning {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
}

/* Content */
.content {
  position: relative;
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 6rem;
  text-align: center;
  position: relative;
}

.hero-content {
  max-width: 1200px;
}

.new-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: linear-gradient(
    135deg,
    rgba(64, 154, 255, 0.15),
    rgba(110, 62, 244, 0.15)
  );
  border: 1px solid rgba(110, 62, 244, 0.4);
  border-radius: 50px;
  margin-bottom: 2rem;
  color: #5b2cc3;
  font-size: 0.875rem;
  font-weight: 600;
  animation: pulse 2s ease-in-out infinite;
}

h1 {
  font-size: clamp(2.5rem, 7vw, 6rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.gradient-text {
  background: linear-gradient(135deg, var(--primary-from), var(--primary-to));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 200%;
  animation: gradientShift 5s ease infinite;
}

.hero p {
  font-size: 1.5rem;
  color: #64748b;
  margin-bottom: 3rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

/* Countdown Timer */
.countdown {
  background: linear-gradient(
    135deg,
    rgba(64, 154, 255, 0.08),
    rgba(110, 62, 244, 0.08)
  );
  backdrop-filter: blur(20px);
  border: 2px solid rgba(110, 62, 244, 0.15);
  border-radius: 24px;
  padding: 3rem;
  margin: 3rem auto;
  max-width: 700px;
  box-shadow: 0 20px 60px rgba(110, 62, 244, 0.1);
  position: relative;
  overflow: hidden;
}

.countdown::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-from), var(--primary-to));
}

.countdown-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, var(--primary-from), var(--primary-to));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  font-size: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.countdown-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.countdown-item {
  text-align: center;
}

.countdown-value {
  font-size: 3.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--primary-from), var(--primary-to));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 20px rgba(110, 62, 244, 0.3);
}

.countdown-label {
  font-size: 0.875rem;
  color: #5b2cc3;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 0.5rem;
  font-weight: 600;
}

/* Pricing Tiers */
.pricing-tiers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 3rem auto;
  max-width: 800px;
  padding: 0;
}

.tier {
  text-align: center;
  padding: 2rem 1.5rem;
  background: linear-gradient(
    135deg,
    rgba(64, 154, 255, 0.05),
    rgba(110, 62, 244, 0.05)
  );
  border: 2px solid rgba(110, 62, 244, 0.1);
  border-radius: 20px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.tier::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-from), var(--primary-to));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.tier:hover::before {
  transform: scaleX(1);
}

.tier:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(110, 62, 244, 0.15);
  border-color: rgba(110, 62, 244, 0.25);
}

.tier.active {
  background: linear-gradient(
    135deg,
    rgba(64, 154, 255, 0.1),
    rgba(110, 62, 244, 0.1)
  );
  border: 2px solid rgba(110, 62, 244, 0.3);
  box-shadow: 0 10px 30px rgba(110, 62, 244, 0.2);
  position: relative;
}

.tier.active::before {
  transform: scaleX(1);
}

.tier.active::after {
  content: "🔥 HOT DEAL";
  position: absolute;
  top: 0px;
  right: -9px;
  background: linear-gradient(135deg, var(--primary-from), var(--primary-to));
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 12px;
  transform: rotate(15deg);
  box-shadow: 0 4px 12px rgba(110, 62, 244, 0.3);
  white-space: nowrap;
}

.tier-price {
  font-size: 2.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--primary-from), var(--primary-to));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  line-height: 1;
}

.tier-label {
  color: #5b2cc3;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Systems Section */
.section {
  padding: 2rem 2rem;
  position: relative;
}

.section-alt {
  background: linear-gradient(
    180deg,
    transparent,
    rgba(168, 85, 247, 0.02),
    transparent
  );
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.section-label {
  background: linear-gradient(135deg, var(--primary-from), var(--primary-to));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
  animation: shimmer 3s linear infinite;
}

h2 {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 900;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
}

.section-header p {
  font-size: 1.5rem;
  color: #475569;
  max-width: 1000px;
  margin: 0 auto;
  line-height: 1.6;
}

.systems-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 1100px) {
  .systems-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.system-card {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95),
    rgba(255, 255, 255, 0.98)
  );
  backdrop-filter: blur(20px);
  border: 2px solid rgba(110, 62, 244, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(110, 62, 244, 0.08);
  display: flex;
  flex-direction: column;
  height: fit-content;
}

.system-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(64, 154, 255, 0.02),
    rgba(110, 62, 244, 0.02)
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.system-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--card-color),
    transparent
  );
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.system-card:hover::before {
  transform: translateX(100%);
}

.system-card:hover {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.98),
    rgba(255, 255, 255, 1)
  );
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 30px 80px rgba(110, 62, 244, 0.15);
  border-color: rgba(110, 62, 244, 0.3);
}

.system-card:hover::after {
  opacity: 1;
}

.system-card:hover .system-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
}

/* Card Structure */
.card-header {
  text-align: center;
  margin-bottom: 2rem;
}

.card-description {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-top: 1rem;
}

.card-features {
  flex: 1;
  margin-bottom: 2rem;
}

.card-pricing {
  margin-top: auto;
}

.pricing-section {
  margin-bottom: 1.5rem;
}

.pricing-section:last-child {
  margin-bottom: 0;
}

.system-card:hover h3 {
  background: linear-gradient(135deg, var(--primary-from), var(--primary-to));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.system-card.featured {
  border: 2px solid rgba(110, 62, 244, 0.25);
  background: linear-gradient(
    135deg,
    rgba(110, 62, 244, 0.04),
    rgba(64, 154, 255, 0.04)
  );
  position: relative;
  animation: featuredPulse 3s ease-in-out infinite;
}

@keyframes featuredPulse {
  0%,
  100% {
    box-shadow: 0 20px 60px rgba(110, 62, 244, 0.08);
  }
  50% {
    box-shadow: 0 20px 60px rgba(110, 62, 244, 0.15);
  }
}

.system-icon {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  background: linear-gradient(
    135deg,
    var(--card-color),
    var(--card-color-dark)
  );
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.system-icon::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transform: rotate(45deg) translateX(-100%);
  transition: transform 0.6s ease;
}

.system-card:hover .system-icon::before {
  transform: rotate(45deg) translateX(100%);
}

.system-card h3 {
  font-size: 2.25rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  transition: all 0.3s ease;
}

.system-card p {
  color: #475569;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.feature-list {
  list-style: none;
  margin-bottom: 2rem;
}

.feature-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: #475569;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 8px;
}

.feature-list li:hover {
  background: rgba(110, 62, 244, 0.05);
  transform: translateX(8px);
  color: #5b2cc3;
}

.feature-list li:hover .check-icon {
  transform: scale(1.2);
  color: var(--primary-to);
}

.check-icon {
  color: #10b981;
  flex-shrink: 0;
  margin-top: 2px;
  transition: all 0.3s ease;
  font-weight: bold;
}

/* Pricing breakdown */
.price-breakdown {
  border-top: 2px solid rgba(110, 62, 244, 0.1);
  padding-top: 2rem;
  margin-top: 2rem;
  background: linear-gradient(
    135deg,
    rgba(110, 62, 244, 0.02),
    rgba(64, 154, 255, 0.02)
  );
  border-radius: 16px;
  padding: 2rem;
  margin-top: 2rem;
}

.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  padding: 0.75rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.price-row:hover {
  background: rgba(110, 62, 244, 0.05);
  transform: translateX(4px);
}

.price-row.total {
  border-top: 2px solid rgba(110, 62, 244, 0.2);
  padding-top: 1.5rem;
  margin-top: 1rem;
  font-weight: bold;
  background: rgba(110, 62, 244, 0.08);
  border-radius: 12px;
}

.price-label {
  color: #94a3b8;
  font-size: 0.95rem;
}

.price-value {
  font-weight: 600;
  color: #0f172a;
}

.price-value.highlight {
  background: linear-gradient(135deg, #10b981, #059669);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.25rem;
}

/* Bundle Section */
.bundle-highlight {
  background: linear-gradient(
    135deg,
    rgba(64, 154, 255, 0.08),
    rgba(110, 62, 244, 0.08)
  );
  border: 2px solid rgba(110, 62, 244, 0.2);
  border-radius: 28px;
  padding: 4rem;
  margin: 5rem auto;
  max-width: 1200px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 25px 80px rgba(110, 62, 244, 0.1);
}

.bundle-highlight::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-from), var(--primary-to));
}

.bundle-highlight::after {
  content: "🎯";
  position: absolute;
  top: -15px;
  right: -15px;
  font-size: 3rem;
  opacity: 0.1;
  transform: rotate(15deg);
}

/* Bundle Systems Grid */
.bundle-systems {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.bundle-system {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.bundle-system:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

/* Bundle Pricing */
.bundle-pricing {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  margin-top: 2rem;
}

.bundle-options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.bundle-option {
  background: rgba(255, 255, 255, 0.03);
  padding: 1.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.bundle-option.ecommerce {
  border: 1px solid rgba(6, 182, 212, 0.2);
}

.bundle-option.storefront {
  background: rgba(245, 158, 11, 0.05);
  border: 1px solid rgba(245, 158, 11, 0.2);
}

.bundle-option:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.bundle-price {
  font-size: 2rem;
  font-weight: bold;
  background: linear-gradient(135deg, #10b981, #059669);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.bundle-option.storefront .bundle-price {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.bundle-period {
  color: #64748b;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.bundle-tiers {
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #94a3b8;
}

.bundle-savings {
  color: #10b981;
  margin: 1rem 0;
  font-weight: 600;
}

/* Trinity Core Link */
.trinity-core-banner {
  background: linear-gradient(
    135deg,
    rgba(64, 154, 255, 0.12),
    rgba(110, 62, 244, 0.12),
    rgba(16, 185, 129, 0.08)
  );
  border: 2px solid rgba(110, 62, 244, 0.25);
  border-radius: 24px;
  padding: 3rem;
  margin: 4rem auto;
  max-width: 1200px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(110, 62, 244, 0.1);
  transition: all 0.4s ease;
}

.trinity-core-banner::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #409aff, #6e3ef4, #10b981);
}

.trinity-core-banner::after {
  content: "⚡";
  position: absolute;
  top: -20px;
  right: -20px;
  font-size: 4rem;
  opacity: 0.1;
  transform: rotate(15deg);
  animation: float 6s ease-in-out infinite;
}

.trinity-core-banner:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 80px rgba(110, 62, 244, 0.15);
  border-color: rgba(110, 62, 244, 0.4);
}

.trinity-core-banner:hover::after {
  animation: float 3s ease-in-out infinite;
}

.trinity-core-banner h3 {
  background: linear-gradient(135deg, #409aff, #6e3ef4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2rem;
  font-weight: 800;
}

.trinity-core-banner p {
  color: #475569;
  font-size: 1.125rem;
  line-height: 1.6;
}

/* Setup Requirements */
.setup-note {
  background: linear-gradient(
    135deg,
    rgba(245, 158, 11, 0.15),
    rgba(217, 119, 6, 0.1)
  );
  border: 2px solid rgba(245, 158, 11, 0.4);
  border-radius: 16px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  position: relative;
  box-shadow: 0 8px 25px rgba(245, 158, 11, 0.15);
  backdrop-filter: blur(10px);
}

.setup-note::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #f59e0b, #d97706);
  border-radius: 16px 16px 0 0;
}

.setup-note-title {
  color: #f59e0b;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.setup-note-text {
  color: #1e293b;
  font-size: 0.95rem;
  line-height: 1.6;
  font-weight: 500;
}

.setup-note-text strong {
  color: #d97706;
  font-weight: 700;
}

/* Responsive */
@media (max-width: 768px) {
  .section {
    padding: 1rem 1.5rem;
  }

  .hero h1 {
    font-size: clamp(2rem, 7vw, 3rem);
    line-height: 1.2;
    font-weight: 900;
  }

  .hero {
    padding-bottom: 5rem;
  }

  .section-alt {
    padding-bottom: 2rem;
  }

  .hero p {
    font-size: 1.125rem;
    line-height: 1.5;
  }

  .new-badge {
    font-size: 0.75rem;
    padding: 0.5rem 0.75rem;
  }

  .countdown {
    padding: 2rem 1.5rem;
    margin: 2rem auto;
  }

  .countdown-value {
    font-size: 2.5rem;
  }

  .countdown-header {
    font-size: 1rem;
  }

  .pricing-tiers {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    padding: 1rem;
  }

  .tier-price {
    font-size: 1.25rem;
  }

  .tier-label {
    font-size: 0.7rem;
  }

  .btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }

  .systems-grid {
    grid-template-columns: 1fr;
  }

  .countdown-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .system-card {
    padding: 2rem 1.5rem;
  }

  .bundle-highlight {
    padding: 3rem 1.5rem;
    margin: 4rem 1rem;
  }

  .bundle-options {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .bundle-systems {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }

  .trinity-core-banner {
    padding: 2.5rem 1.5rem;
    margin: 3rem 1rem;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 5rem 1rem;
    padding-top: 1px;
  }

  .hero {
    padding-bottom: 5rem;
  }

  .section-alt {
    padding-bottom: 2rem;
  }

  .hero h1 {
    font-size: clamp(1.75rem, 6vw, 2.5rem);
    font-weight: 900;
  }

  .hero p {
    font-size: 1rem;
  }

  .countdown {
    padding: 1.5rem 1rem;
  }

  .countdown-value {
    font-size: 2rem;
  }

  .btn {
    padding: 0.625rem 1.25rem;
    font-size: 0.8rem;
  }

  .system-card {
    padding: 1.5rem 1rem;
  }

  .bundle-highlight {
    padding: 2.5rem 1rem;
    margin: 3rem 0.5rem;
  }

  .bundle-systems {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }

  .bundle-options {
    gap: 1rem;
  }

  .trinity-core-banner {
    padding: 2rem 1rem;
    margin: 2.5rem 0.5rem;
  }
}

/* Pricing Cards Layout */
.pricing-section-wrapper {
  margin: 4rem 0;
  text-align: center;
}

.system-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, var(--primary-from), var(--primary-to));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.system-subtitle {
  font-size: 1.25rem;
  color: #64748b;
  margin-bottom: 3rem;
  font-weight: 500;
}

.pricing-cards {
  display: flex;
  align-items: stretch; /* This makes all cards stretch to same height */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: start;
}

.pricing-card {
  background: white;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: fit-content;
}

.pricing-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
}

.pricing-card.popular {
  transform: scale(1.05);
  border: 2px solid rgba(110, 62, 244, 0.2);
  box-shadow: 0 15px 50px rgba(110, 62, 244, 0.15);
}

.pricing-card.popular:hover {
  transform: scale(1.05) translateY(-8px);
}

.popular-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, var(--primary-from), var(--primary-to));
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(110, 62, 244, 0.3);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  justify-content: center;
}

.tier-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
}

.tier-dot.beta {
  background: #a855f7;
}

.tier-dot.early {
  background: #06b6d4;
}

.tier-dot.post {
  background: #a855f7;
}

.card-header h4 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.price {
  font-size: 2.5rem;
  font-weight: 800;
  color: #06b6d4;
  margin-bottom: 0.5rem;
  line-height: 1;
}

.access-text {
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.offer-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 2rem;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
}

.offer-pill.beta {
  background: rgba(168, 85, 247, 0.1);
  color: #7c3aed;
}

.offer-pill.early {
  background: rgba(6, 182, 212, 0.1);
  color: #0891b2;
}

.offer-pill.post {
  background: rgba(168, 85, 247, 0.1);
  color: #7c3aed;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  flex: 1;
}

.features-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.5;
}

.features-list .check {
  color: #10b981;
  font-weight: bold;
  font-size: 1rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.cta-button {
  background: linear-gradient(135deg, var(--primary-from), var(--primary-to));
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: auto;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(110, 62, 244, 0.3);
}

/* Disabled CTA style */
.cta-button.disabled,
.cta-button:disabled {
  background: #e2e8f0;
  color: #94a3b8;
  cursor: not-allowed;
  box-shadow: none;
}

.cta-button.disabled:hover,
.cta-button:disabled:hover {
  transform: none;
  box-shadow: none;
}

/* Responsive Design */
@media (max-width: 1100px) {
  .pricing-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .pricing-card.popular {
    grid-column: span 2;
    order: -1;
  }
}

@media (max-width: 768px) {
  .pricing-cards {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .pricing-card.popular {
    grid-column: span 1;
    transform: scale(1);
  }

  .pricing-card.popular:hover {
    transform: translateY(-8px);
  }

  .system-title {
    font-size: 2rem;
  }

  .system-subtitle {
    font-size: 1.125rem;
  }

  .pricing-card {
    padding: 2rem 1.5rem;
  }

  .price {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .pricing-section-wrapper {
    margin: 3rem 0;
  }

  .system-title {
    font-size: 1.75rem;
  }

  .system-subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .pricing-card {
    padding: 1.5rem 1rem;
  }

  .price {
    font-size: 1.75rem;
  }

  .cta-button {
    padding: 0.875rem 1.5rem;
    font-size: 0.9rem;
  }
}

/* Bundle Systems Grid - Clean Design */
.bundle-systems-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 3rem 0;
  flex-wrap: wrap;
}

.bundle-system-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  min-width: 120px;
}

.bundle-system-item:hover {
  transform: translateY(-4px);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15),
    rgba(255, 255, 255, 0.08)
  );
  border-color: rgba(110, 62, 244, 0.3);
  box-shadow: 0 10px 30px rgba(110, 62, 244, 0.15);
}

.bundle-system-item .system-icon {
  font-size: 2.5rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.bundle-system-item .system-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: #1e293b;
  text-align: center;
  line-height: 1.3;
}

/* Responsive for bundle systems */
@media (max-width: 768px) {
  .bundle-systems-grid {
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .bundle-system-item {
    padding: 1rem;
    min-width: 100px;
  }

  .bundle-system-item .system-icon {
    font-size: 2rem;
  }

  .bundle-system-item .system-name {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .bundle-systems-grid {
    gap: 1rem;
    margin: 1.5rem 0;
  }

  .bundle-system-item {
    padding: 0.75rem;
    min-width: 80px;
  }

  .bundle-system-item .system-icon {
    font-size: 1.75rem;
  }

  .bundle-system-item .system-name {
    font-size: 0.75rem;
  }
}

/* Stats Section - Fantastic Design */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  /* margin-top: 3rem; */
  position: relative;
  /* z-index: 2; */
  padding-bottom: 85px;
}

.stat-card {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95),
    rgba(255, 255, 255, 0.98)
  );
  backdrop-filter: blur(20px);
  border: 2px solid rgba(110, 62, 244, 0.1);
  border-radius: 20px;
  padding: 1.5rem 1.5rem 2rem 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 15px 50px rgba(110, 62, 244, 0.08);
}

.stat-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(64, 154, 255, 0.05),
    rgba(110, 62, 244, 0.05)
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.stat-card:hover::before {
  opacity: 1;
}

.stat-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 25px 80px rgba(110, 62, 244, 0.15);
  border-color: rgba(110, 62, 244, 0.3);
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
  animation: bounce 2s ease-in-out infinite;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.stat-value {
  font-size: 2.75rem;
  font-weight: 900;
  background: linear-gradient(135deg, #409aff, #6e3ef4, #10b981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  animation: shimmer 3s linear infinite;
  background-size: 200% 100%;
}

.stat-label {
  font-size: 1rem;
  font-weight: 600;
  color: #475569;
  margin-bottom: 0.5rem;
}

.stat-sparkle {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  font-size: 1.25rem;
  animation: sparkle 2s ease-in-out infinite;
  opacity: 0.7;
}

/* Animated Blobs */
.blob-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* z-index: 1; */
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.3;
  animation: float 6s ease-in-out infinite;
}

.blob-1 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #409aff, #6e3ef4);
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.blob-2 {
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, #10b981, #06b6d4);
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.blob-3 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #f59e0b, #ec4899);
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

.blob-4 {
  width: 180px;
  height: 180px;
  background: linear-gradient(135deg, #8b5cf6, #06b6d4);
  top: 30%;
  right: 30%;
  animation-delay: 1s;
}

/* Additional themed blobs for hero */
.blob-5 {
  width: 260px;
  height: 260px;
  background: linear-gradient(135deg, #06b6d4, #409aff);
  bottom: 10%;
  right: 15%;
  animation-delay: 3s;
}

.blob-6 {
  width: 220px;
  height: 220px;
  background: linear-gradient(135deg, #6e3ef4, #a855f7);
  top: 15%;
  left: 35%;
  animation-delay: 5s;
}

/* Animations */
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

@keyframes sparkle {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.2) rotate(180deg);
    opacity: 1;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(-20px, -20px) rotate(90deg);
  }
  50% {
    transform: translate(-40px, 20px) rotate(180deg);
  }
  75% {
    transform: translate(20px, -40px) rotate(270deg);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .stat-card {
    padding: 1.25rem 1.25rem 1.75rem 1.25rem;
  }

  .stat-icon {
    font-size: 2rem;
  }

  .stat-value {
    font-size: 2.25rem;
  }

  .stat-label {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .stat-card {
    padding: 1rem 1rem 1.5rem 1rem;
  }

  .stat-icon {
    font-size: 1.75rem;
  }

  .stat-value {
    font-size: 1.75rem;
  }

  .stat-label {
    font-size: 0.85rem;
  }
}

/* Enhanced Learn More button styles */
.btn-secondary {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  color: #475569;
  border: 2px solid rgba(102, 126, 234, 0.3);
  border-radius: 50px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  z-index: 1;
}

.btn-secondary::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.btn-secondary:hover {
  transform: translateY(-3px) scale(1.02);
  color: white;
  border-color: rgba(102, 126, 234, 0.5);
  box-shadow: 0 12px 32px rgba(102, 126, 234, 0.3);
}

.btn-secondary:hover::before {
  opacity: 1;
}

.btn-secondary:active {
  transform: translateY(-1px) scale(1);
}

/* Add a subtle shine effect on hover */
.btn-secondary::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: rotate(30deg);
  transition: all 0.5s ease;
  opacity: 0;
}

.btn-secondary:hover::after {
  opacity: 1;
  left: 100%;
}

/* Add animation to make it more attention-grabbing */
@keyframes subtlePulse {
  0%, 100% {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
  50% {
    box-shadow: 0 4px 16px rgba(102, 126, 234, 0.2);
  }
}

.btn-secondary {
  animation: subtlePulse 3s ease-in-out infinite;
}

/* Pricing card button spacing */
.pricing-card .btn-secondary {
  margin-bottom: 0.75rem;
  width: 100%;
}

/* System card button spacing */
.system-card .btn-secondary {
  margin-top: 0.75rem;
  width: 100%;
}

/* If you need specific styles for disabled state */
.cta-button.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Ensure proper button hierarchy in pricing cards */
.pricing-card .btn-secondary + .cta-button {
  margin-top: 0;
}


`;
