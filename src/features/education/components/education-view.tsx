"use client";

// 1. ExternalLink ikonunu import et
import { GraduationCap, BookOpen, Calendar, MapPin, ExternalLink } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 }
};

export function EducationView() {
  return (
    <motion.div 
      className="max-w-4xl mx-auto w-full p-8 flex flex-col gap-8 h-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center gap-3 mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
          <GraduationCap size={28} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Education History</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Akademik geçmişim ve başarılarım</p>
        </div>
      </div>

      <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-4 space-y-12">
        
        {/* --- YÜKSEK LİSANS --- */}
        <motion.div variants={itemVariants} className="relative pl-8 group">
          <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-[#3574F0] border-4 border-white dark:border-[#1E1F22] group-hover:scale-125 transition-transform duration-300" />
          
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                M.Sc. Computer Engineering
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200">Current</span>
              </h3>
              <div className="flex flex-col mt-1">
                <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">Ondokuz Mayıs University</p>
                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                   <MapPin size={14} />
                   <span>Samsun, Türkiye</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-sm font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">
              <Calendar size={14} />
              2025 - Present
            </div>
          </div>
          
          <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
            Bilgisayar Mühendisliği alanında ileri düzey araştırmalar ve çalışmalar yapmaktayım.
          </p>
        </motion.div>

        {/* --- LİSANS --- */}
        <motion.div variants={itemVariants} className="relative pl-8 group">
          <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gray-400 dark:bg-gray-600 border-4 border-white dark:border-[#1E1F22] group-hover:bg-[#3574F0] transition-colors duration-300" />
          
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
             <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">B.Sc. Computer Engineering</h3>
              <div className="flex flex-col mt-1">
                <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">Ondokuz Mayıs University</p>
                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                   <MapPin size={14} />
                   <span>Samsun, Türkiye</span>
                </div>
              </div>
              <p className="text-sm text-[#3574F0] font-semibold mt-2">GPA: 2.91</p>
            </div>
            <div className="flex items-center gap-1.5 text-sm font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">
              <Calendar size={14} />
              2020 - 2024
            </div>
          </div>

          {/* Tez Kartı */}
          <div className="mt-4 p-4 rounded-lg bg-gray-50 dark:bg-[#2B2D30] border border-gray-200 dark:border-gray-700 hover:border-[#3574F0]/50 transition-colors">
            <div className="flex gap-3">
              <BookOpen className="shrink-0 text-[#3574F0] mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm">Graduation Thesis (NLP & AI)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 italic">
                  "Duygu analizinde metin temsil yöntemlerinin makine ve derin öğrenme modellerindeki sınıflandırma başarımına etkisi."
                </p>
                
                {/* --- 2. Linki Buraya Ekledik --- */}
                <a 
                  href="https://dergipark.org.tr/tr/pub/kfbd/article/1536270" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-[#3574F0] hover:underline transition-all"
                >
                  <ExternalLink size={12} />
                  Yayını İncele (DergiPark)
                </a>
                
                <div className="mt-3 flex gap-2">
                   <span className="text-[10px] px-2 py-1 rounded border border-gray-200 dark:border-gray-600 text-gray-500">Python</span>
                   <span className="text-[10px] px-2 py-1 rounded border border-gray-200 dark:border-gray-600 text-gray-500">Deep Learning</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}