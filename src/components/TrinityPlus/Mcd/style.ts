export const styles = `
@import "tailwindcss";
@keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(-30px, -30px) scale(1.02); }
    66% { transform: translate(20px, -20px) scale(0.98); }
}

@keyframes pulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
}

@keyframes fadeInUp {
    from {
    opacity: 0;
    transform: translateY(30px);
    }
    to {
    opacity: 1;
    transform: translateY(0);
    }
}

.bg-gradient-radial {
    background: radial-gradient(ellipse at top right, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                radial-gradient(ellipse at bottom left, rgba(168, 85, 247, 0.15) 0%, transparent 50%);
}

.gradient-text {
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.gradient-border {
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
}

.scroll-reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

.hero-fade-1 { animation: fadeInUp 0.8s ease; }
.hero-fade-2 { animation: fadeInUp 0.8s ease 0.2s; animation-fill-mode: both; }
.hero-fade-3 { animation: fadeInUp 0.8s ease 0.4s; animation-fill-mode: both; }
.hero-fade-4 { animation: fadeInUp 0.8s ease 0.6s; animation-fill-mode: both; }

.floating-shape {
    position: absolute;
    border-radius: 50%;
    filter: blur(40px);
    animation: float 20s ease-in-out infinite;
}

.shape-1 {
    width: 400px;
    height: 400px;
    background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
    top: -200px;
    right: -100px;
    opacity: 0.3;
}

.shape-2 {
    width: 300px;
    height: 300px;
    background: linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%);
    bottom: -150px;
    left: -100px;
    opacity: 0.3;
    animation-delay: -10s;
}

.shape-3 {
    width: 250px;
    height: 250px;
    background: linear-gradient(135deg, #ec4899 0%, #f472b6 100%);
    top: 50%;
    left: 50%;
    opacity: 0.2;
    animation-delay: -5s;
}

.card-hover {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-hover:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.glow-effect {
    box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1),
                0 0 20px rgba(59, 130, 246, 0.05),
                0 0 40px rgba(59, 130, 246, 0.02);
}

.glow-effect:hover {
    box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.2),
                0 0 30px rgba(59, 130, 246, 0.1),
                0 0 60px rgba(59, 130, 246, 0.05);
}
`