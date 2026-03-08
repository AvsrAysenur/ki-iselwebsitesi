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
    title: "Bitki Hastalığı Tespiti",
    description: "Deep Learning ile bitki yapraklarından hastalık sınıflandırması.",
    longDescription: "TensorFlow ve Keras kullanarak geliştirdiğim CNN tabanlı model, bitki yapraklarından hastalıkları tespit eder. Transfer learning, veri augmentasyonu ve OpenCV ile normalizasyon uygulanmıştır.",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80",
    tags: ["TensorFlow", "Keras", "OpenCV", "Python", "Deep Learning"],
    githubUrl: "https://github.com/AvsrAysenur",
    year: "2024",
  },
  {
    id: "2",
    title: "Retinal Hastalık Tespiti",
    description: "OCT görüntülerinden retinal hastalık sınıflandırması ve açıklanabilir AI.",
    longDescription: "TensorFlow ve PyTorch kullanarak OCT veri setlerinde retinal hastalık tespit modelleri geliştirdim. EfficientNet, DenseNet ve ResNet mimarilerini birleştiren Soft Ensemble modeli tasarladım. XAI teknikler ile model kararlarını yorumladım.",
    image: "https://images.unsplash.com/photo-1576091160550-112173f31c77?w=800&q=80",
    tags: ["TensorFlow", "PyTorch", "XAI", "Medical Imaging", "Deep Learning"],
    year: "2024",
  },
  {
    id: "3",
    title: "Metin Özetleme (NLP)",
    description: "Otomatik metin özetleme için deep learning modelleri.",
    longDescription: "Natural Language Processing (NLP) kullanarak otomatik metin özetleme modelleri eğittim. Sequence modeling ve derin öğrenme tekniklerini uyguladım.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    tags: ["Python", "NLP", "Deep Learning", "Sequence Modeling"],
    year: "2023",
  },
  {
    id: "4",
    title: "Gerçek Zamanlı Şekil Tespiti",
    description: "Geometrik nesneleri algılayan bilgisayar görü sistemi.",
    longDescription: "MATLAB kullanarak gerçek zamanlı renk ve şekil tespiti sistemi geliştirdim. Segmentasyon, morfolojik işlemler ve kontur analizi uyguladım.",
    image: "https://images.unsplash.com/photo-1635776999291-326558bba348?w=800&q=80",
    tags: ["MATLAB", "Computer Vision", "Image Processing"],
    year: "2023",
  },
  {
    id: "5",
    title: "Web API - CRUD Operasyonları",
    description: "PostgreSQL ile C# ASP.NET MVC API geliştirme.",
    longDescription: "BAŞARSOFT'ta CRUD operasyonları için Web API geliştirdim. Entity Framework, Interface ve Unit of Work pattern kullanarak profesyonel mimari oluşturdum. Swagger ile dokümantasyon sağladım.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    tags: ["C#", "ASP.NET MVC", "PostgreSQL", "Entity Framework"],
    year: "2023",
  },
  {
    id: "6",
    title: "Seri Haberleşme Projeleri",
    description: "RS-232, RS-422, RS-485 ve Modbus TCP/IP uygulamaları.",
    longDescription: "İNDES Mühendislik'te seri haberleşme protokolleri üzerine çalıştım. RS-232/RS-422/RS-485 cihazlarla iletişim kurdum, checksum doğrulamalı commander-soldier projesi geliştirdim. Modbus TCP/IP protokolü ve KepServerEx entegrasyonu yaptım.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    tags: ["Embedded Systems", "RS-232", "Modbus TCP/IP", "Protocol"],
    year: "2024",
  },
];

export const skills = [
  { name: "Python", level: 95 },
  { name: "C#", level: 75 },
  { name: "Deep Learning (TensorFlow/PyTorch)", level: 85 },
  { name: "ASP.NET MVC", level: 75 },
  { name: "PostgreSQL", level: 80 },
  { name: "Computer Vision (OpenCV)", level: 85 },
  { name: "Streamlit", level: 90 },
  { name: "Entity Framework", level: 80 },
];
