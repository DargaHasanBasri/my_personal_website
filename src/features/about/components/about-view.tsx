"use client";

import { MapPin, Briefcase, Mail } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Typewriter from "typewriter-effect";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export function AboutView() {
  return (
    <motion.div
      className="flex flex-col gap-6 p-8 max-w-4xl mx-auto w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Profil Başlık Kartı */}
      <motion.div
        variants={itemVariants}
        className="flex items-start gap-6 p-6 rounded-lg border bg-white dark:bg-[#2B2D30] border-gray-200 dark:border-[#4E5157] shadow-sm"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-sm shrink-0"
        >
          {/* Dosya adını senin yüklediğin isimle güncelledim */}
          <Image
            src="/my_profile.jpeg" 
            alt="Hasan Basri DARGA Profil Resmi"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        
        <div className="flex flex-col gap-2 w-full">
          {/* İsim ve Typewriter Alanı */}
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex flex-wrap gap-2 items-center">
            <span>Merhaba, Ben</span>
            <span className="text-[#3574F0]">
              <Typewriter
                options={{
                  strings: [
                    "Hasan Basri DARGA",
                    "Bilgisayar Mühendisi",
                    "Mobil Uygulama Geliştirici",
                    "Go Meraklısı",
                    "FlutterciDayi"
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 50,
                }}
              />
            </span>
            <span>👋</span>
          </h1>

          {/* --- GÜNCELLENEN KISIM BURASI --- */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed"
          >
            2 yılı aşkın süredir Flutter ekosisteminde kullanıcı odaklı ve yüksek performanslı mobil çözümler üreten bir Bilgisayar Mühendisiyim. 
            Mobil geliştirme tutkumu Go ve Kotlin ile destekleyerek; modern mimariler üzerine kurulu, ölçeklenebilir ve sürdürülebilir sistemler tasarlıyorum.
          </motion.p>
          {/* ---------------------------------- */}
          
          <motion.div 
            className="flex flex-wrap gap-2 mt-2"
            variants={containerVariants}
          >
             <motion.span variants={itemVariants} className="px-2 py-1 text-xs rounded border bg-blue-50 text-blue-700 border-blue-200 dark:bg-[#3574F0]/20 dark:text-blue-200 dark:border-[#3574F0]/50">
               Computer Engineer
             </motion.span>
             <motion.span variants={itemVariants} className="px-2 py-1 text-xs rounded border bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">
               Flutter & Go
             </motion.span>
          </motion.div>
        </div>
      </motion.div>

      {/* Detay Bilgiler (Grid Yapısı) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <motion.div
          variants={itemVariants}
          className="p-5 rounded-lg border bg-white dark:bg-[#2B2D30] border-gray-200 dark:border-[#4E5157]"
        >
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">
            Terminal Info
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-700 dark:text-gray-300">
            {[{ icon: MapPin, text: "Samsun, Türkiye", color: "text-blue-500" }, // CV'ye göre güncel
              { icon: Briefcase, text: "Bilgisayar Mühendisi", color: "text-purple-500" },
              { icon: Mail, text: "dargahasanbasri@gmail.com", color: "text-green-500" }]
              .map((item, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <item.icon size={16} className={item.color} />
                  <span>{item.text}</span>
                </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="p-5 rounded-lg border bg-white dark:bg-[#2B2D30] border-gray-200 dark:border-[#4E5157]"
        >
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">
            Core.sys
          </h3>
            <div className="font-mono text-sm space-y-2 text-gray-600 dark:text-gray-300">
              <p><span className="text-blue-600 dark:text-blue-400">const</span> skills = [</p>
              <motion.div variants={containerVariants}>
                {/* CV'deki yetkinliklerine göre sıraladım */}
                <motion.p variants={itemVariants} className="pl-4">"Flutter", "Dart", "Go", "Kotlin",</motion.p>
                <motion.p variants={itemVariants} className="pl-4">"Clean Architecture", "MVVM", "Bloc-Cubit", "Provider", "ValueNotifier",</motion.p>
              </motion.div>
              <p>];</p>
            </div>
        </motion.div>

      </div>
    </motion.div>
  );
}