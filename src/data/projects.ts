export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Ticaret Platformu",
    description: "Modern bir alışveriş deneyimi sunan full-stack e-ticaret uygulaması.",
    longDescription: "React ve Node.js kullanarak geliştirdiğim bu platform, ödeme entegrasyonu, ürün yönetimi, sepet sistemi ve kullanıcı paneli içermektedir. Responsive tasarımıyla tüm cihazlarda mükemmel çalışır.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2025",
  },
  {
    id: "2",
    title: "Görev Yönetim Uygulaması",
    description: "Takımlar için gerçek zamanlı görev takip ve proje yönetim aracı.",
    longDescription: "Kanban board, zaman takibi ve raporlama özellikleriyle ekiplerin verimliliğini artıran bir proje yönetim uygulaması. Gerçek zamanlı güncellemeler ve bildirimler içerir.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    tags: ["TypeScript", "Next.js", "Supabase", "Tailwind"],
    liveUrl: "https://example.com",
    year: "2025",
  },
  {
    id: "3",
    title: "Hava Durumu Uygulaması",
    description: "Konum bazlı hava durumu tahminleri ve görselleştirmeler.",
    longDescription: "OpenWeather API entegrasyonu ile anlık hava durumu, 7 günlük tahmin ve interaktif harita içeren modern bir hava durumu uygulaması. PWA desteği ile çevrimdışı da kullanılabilir.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
    tags: ["React", "API", "PWA", "Chart.js"],
    githubUrl: "https://github.com",
    year: "2024",
  },
  {
    id: "4",
    title: "Blog & CMS Sistemi",
    description: "Markdown destekli, SEO dostu içerik yönetim sistemi.",
    longDescription: "İçerik oluşturucular için geliştirilmiş bu CMS, Markdown editör, otomatik SEO optimizasyonu, resim yönetimi ve analitik dashboard içerir. Headless CMS olarak da kullanılabilir.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    tags: ["Next.js", "MDX", "PostgreSQL", "Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2024",
  },
  {
    id: "5",
    title: "Sosyal Medya Dashboard",
    description: "Birden fazla platformu tek panelden yöneten analitik aracı.",
    longDescription: "Instagram, Twitter ve YouTube gibi platformlardaki verileri tek bir dashboardda birleştiren analitik uygulama. Detaylı grafikler, karşılaştırma araçları ve otomatik raporlama sunar.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["React", "D3.js", "Python", "FastAPI"],
    year: "2024",
  },
  {
    id: "6",
    title: "Portfolyo Web Sitesi",
    description: "Minimalist ve modern kişisel portfolyo sitesi.",
    longDescription: "Performans odaklı, animasyonlu ve tamamen responsive bir portfolyo sitesi. Framer Motion animasyonları, dark mode desteği ve SEO optimizasyonu içerir.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80",
    tags: ["React", "Tailwind", "Framer Motion", "Vite"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2023",
  },
];

export const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Next.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "PostgreSQL", level: 78 },
  { name: "Git", level: 88 },
];
