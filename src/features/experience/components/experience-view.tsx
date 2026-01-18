"use client";

import { Briefcase, Calendar, MapPin, Building2 } from "lucide-react";
import { motion, Variants } from "framer-motion";

// --- Verileri Buraya Tanımladım ---
const experiences = [
  {
    id: 1,
    role: "Jr. Flutter Developer",
    company: "Naylalabs: Creative Software Development Agency",
    location: "Samsun, Türkiye (Ofis)",
    date: "Haz 2023 - Kas 2023",
    description: "Naylalabs'ta 6 ay boyunca Flutter Developer olarak tam zamanlı (ofis) çalıştım. Bu süre zarfında ekip işbirliklerine aktif olarak katıldım ve önemli projelerde yer aldım. Bu sorumluluklar sayesinde ekip çalışması dinamiklerini anlama ve büyük projelerde yer alma konusunda deneyim kazandım.",
    achievements: [
      "Responsive mobil uygulama arayüzleri geliştirilmesi.",
      "REST API ve Firebase entegrasyonlarının yapılması.",
      "Provider ve ValueNotifier ile gelişmiş State Management yönetimi.",
      "Ekip içi kod incelemeleri ve dinamik işbirlikleri."
    ],
    techStack: ["Flutter", "Dart", "Provider", "Firebase", "REST API", "Git"]
  },
  {
    id: 2,
    role: "Intern Flutter Developer",
    company: "isTechSoft Yazılım & Yapay Zeka Çözümleri",
    location: "Samsun Teknopark",
    date: "Ara 2022 - May 2023",
    description: "isTechSoft Yazılım Bilişim Big Data Samsun Teknopark'ta ve Yapay Zeka Çözümleri Ltd.Şti'de gönüllü staj deneyimim bulunmaktadır. Bu şirkette ağırlıklı olarak mobil programlama alanında çeşitli projeler yürütülmektedir. Frontend ve bazı backend yapılarında görev aldım. Ayrıca bu gönüllü staj, kendimi bu alana ait hissetmem konusunda önemli bir yol kat etmemi sağladı.",
    achievements: [
      "Mobil uygulama geliştirme süreçlerine giriş ve adaptasyon.",
      "Frontend ve temel Backend mimarilerinin öğrenilmesi.",
      "Proje tabanlı öğrenme ile sektörel deneyim kazanımı."
    ],
    techStack: ["Flutter", "Dart", "Mobile Dev", "Frontend Basics"]
  }
];

// --- Animasyon Ayarları ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 }
};

export function ExperienceView() {
  return (
    <motion.div 
      // DEĞİŞİKLİK BURADA:
      // 'h-full' kaldırıldı (Scroll taşması için serbest bıraktık).
      // 'pb-24' eklendi (Alt tarafa ~96px boşluk, SizedBox(height: 96) etkisi).
      className="max-w-4xl mx-auto w-full p-8 pb-24 flex flex-col gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* --- BAŞLIK --- */}
      <div className="flex items-center gap-3 mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
        <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
          <Briefcase size={28} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Work Experience</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Profesyonel iş geçmişim ve projelerim</p>
        </div>
      </div>

      {/* --- TIMELINE LISTESİ --- */}
      <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-4 space-y-12">
        
        {experiences.map((exp) => (
          <motion.div key={exp.id} variants={itemVariants} className="relative pl-8 group">
            
            {/* Timeline Noktası */}
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-purple-500 border-4 border-white dark:border-[#1E1F22] group-hover:scale-125 transition-transform duration-300 shadow-sm" />
            
            <div className="flex flex-col gap-4">
              
              {/* Üst Bilgiler (Rol, Şirket, Tarih) */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-lg text-gray-600 dark:text-gray-300 font-medium mt-1">
                    <Building2 size={18} className="text-purple-500" />
                    {exp.company}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
                    <MapPin size={14} />
                    {exp.location}
                  </div>
                </div>
                
                <div className="flex items-center gap-1.5 text-sm font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded whitespace-nowrap h-fit">
                  <Calendar size={14} />
                  {exp.date}
                </div>
              </div>

              {/* Açıklama ve Maddeler */}
              <div className="p-5 rounded-lg bg-gray-50 dark:bg-[#2B2D30] border border-gray-200 dark:border-gray-700 hover:border-purple-400/50 transition-colors">
                 <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm leading-relaxed whitespace-pre-line">
                   {exp.description}
                 </p>
                 <ul className="space-y-2 mb-4">
                   {exp.achievements.map((item, index) => (
                     <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                       <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0" />
                       {item}
                     </li>
                   ))}
                 </ul>

                 {/* Tech Stack Rozetleri */}
                 <div className="flex flex-wrap gap-2 border-t border-gray-200 dark:border-gray-600 pt-3">
                    {exp.techStack.map((tech, index) => (
                      <span key={index} className="px-2 py-1 text-xs font-medium rounded border 
                        bg-white text-gray-600 border-gray-200 
                        dark:bg-[#1E1F22] dark:text-gray-300 dark:border-gray-600">
                        {tech}
                      </span>
                    ))}
                 </div>
              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </motion.div>
  );
}