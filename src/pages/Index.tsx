import { useState } from "react";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import { projects, skills } from "@/data/projects";
import { Mail, MapPin, Send, ArrowDown } from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderimi burada işlenecek
    alert("Mesajınız gönderildi! Teşekkürler.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center py-20">
          <div className="space-y-6 max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase animate-slide-down">
              Merhaba, ben
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] animate-slide-up">
              Ayşenur Avşar
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl animate-slide-up stagger-1">
              Bilgisayar Mühendisi. Yapay Zeka, Bilgisayar Görü ve Web Geliştirme konularında uzmanlaşmış yazılım geliştirici.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground animate-slide-up stagger-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                Ankara, Türkiye
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4" />
                avsraysenur@gmail.com
              </span>
            </div>
            <div className="pt-6 animate-slide-up stagger-3">
              <a
                href="#projeler"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all"
              >
                Projelerimi Gör
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Hakkımda */}
        <section className="py-20">
          <div className="rounded-3xl bg-card p-10 md:p-14 animate-scale-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Hakkımda</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Kırıkkale Üniversitesi Bilgisayar Mühendisliği bölümü öğrencisiyim. Yapay Zeka, Bilgisayar Görü ve Web Geliştirme konularına tutkuyla bağlıyım.
                </p>
                <p>
                  Internship deneyimlerimde seri haberleşme protokolleri, Web API geliştirme ve derin öğrenme modellemeleri üzerinde çalıştım.
                  Her projede temiz kod, veri güvenliği ve performans prensiplerine bağlı kalıyorum.
                </p>
              </div>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">%{skill.level}</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projeler */}
        <section id="projeler" className="py-20">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Projelerim</h2>
            <span className="text-sm text-muted-foreground">
              {projects.length} proje
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={project.id} className={`animate-slide-up stagger-${Math.min(index + 1, 6)}`}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>

        {/* İletişim */}
        <section id="iletisim" className="py-20">
          <div className="rounded-3xl bg-card p-10 md:p-14">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">İletişime Geçin</h2>
              <p className="text-muted-foreground text-lg">
                Bir proje fikriniz mi var? Birlikte çalışmak ister misiniz? Bana yazın.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-10 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Adınız"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-5 py-3.5 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                />
                <input
                  type="email"
                  placeholder="E-posta"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-5 py-3.5 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                />
              </div>
              <textarea
                placeholder="Mesajınız"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full px-5 py-3.5 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-[1.02] transition-all"
              >
                <Send className="w-4 h-4" />
                Gönder
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ad Soyad. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
