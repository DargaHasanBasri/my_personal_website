"use client";

import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check, Loader2, Terminal, AlertCircle } from "lucide-react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

// --- İletişim Bilgileri ---
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "dargahasanbasri@gmail.com",
    // DEĞİŞİKLİK 1: 'mailto:' yerine direkt Gmail Web Linki koyduk.
    // Bu link tıklandığında direkt senin mail adresine gönderim ekranını açar.
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=dargahasanbasri@gmail.com",
    color: "text-green-500"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+90 534 059 43 31",
    href: "tel:+905340594331",
    color: "text-purple-500"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Atakum / Samsun",
    href: null,
    color: "text-blue-500"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/DargaHasanBasri",
    href: "https://github.com/DargaHasanBasri",
    color: "text-gray-700 dark:text-gray-300"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/hasan-basri-darga",
    href: "https://www.linkedin.com/in/hasan-basri-darga-5240651b4/",
    color: "text-blue-600"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export function ContactView() {
  const [copied, setCopied] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSend = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Lütfen tüm alanları doldurun (Variables cannot be null!)");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("Env variables are missing!");
      setStatus("error");
      setErrorMessage("Sistem hatası: API anahtarları bulunamadı.");
      return;
    }

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      if (response.status === 200) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 8000);
      } else {
        throw new Error("Beklenmedik bir hata oluştu.");
      }

    } catch (error) {
      console.error("Email Error:", error);
      setStatus("error");
      setErrorMessage("Bağlantı hatası: Mail sunucusuna erişilemedi.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <motion.div 
      className="max-w-5xl mx-auto w-full p-8 pb-24 flex flex-col gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center gap-3 mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
        <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
          <Send size={28} className="-ml-1 translate-x-0.5" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Contact Me</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Projeleriniz veya işbirlikleri için iletişime geçin</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* --- SOL KOLON --- */}
        <div className="space-y-4">
           {contactInfo.map((info, index) => {
             const isLink = !!info.href;
             const ContentWrapper = isLink ? "a" : "div";
             
             const wrapperProps = isLink ? {
                href: info.href || undefined,
                // DEĞİŞİKLİK 2: Email için de artık yeni sekme (_blank) açmasına izin veriyoruz.
                // Sadece "Phone" hariç hepsi yeni sekmede açılacak.
                target: info.label !== "Phone" ? "_blank" : undefined,
                rel: "noopener noreferrer",
                className: "flex items-center gap-4 flex-1 min-w-0 cursor-pointer"
             } : {
                className: "flex items-center gap-4 flex-1 min-w-0"
             };

             return (
               <motion.div 
                 key={index}
                 variants={itemVariants}
                 className="group flex items-center justify-between p-4 rounded-lg bg-white dark:bg-[#2B2D30] border border-gray-200 dark:border-gray-700 hover:border-blue-400/50 transition-all shadow-sm"
               >
                 <ContentWrapper {...wrapperProps}>
                   <div className={`p-2.5 rounded-md bg-gray-50 dark:bg-[#1E1F22] ${info.color}`}>
                     <info.icon size={20} />
                   </div>
                   <div className="flex flex-col min-w-0">
                     <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                       {info.label}
                     </span>
                     <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate group-hover:text-blue-500 transition-colors">
                       {info.value}
                     </span>
                   </div>
                 </ContentWrapper>

                 <button 
                   onClick={(e) => {
                     e.stopPropagation();
                     handleCopy(info.value, info.label);
                   }}
                   className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity ml-2"
                   title="Kopyala"
                 >
                   {copied === info.label ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                 </button>
               </motion.div>
             );
           })}
        </div>

        {/* --- SAĞ KOLON (IDE Form) --- */}
        <motion.div variants={itemVariants} className="flex flex-col h-full">
           <div className="flex-1 p-6 rounded-lg bg-gray-50 dark:bg-[#1E1F22] border border-gray-200 dark:border-gray-700 flex flex-col gap-4 relative overflow-hidden">
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                 <span className="text-blue-500">function</span> sendMessage() {'{'}
              </h3>
              
              <div className="space-y-3 pl-4 border-l-2 border-gray-200 dark:border-gray-700 ml-2">
                
                <div className="group">
                   <label className="text-xs text-gray-500 block mb-1">var name: String</label>
                   <input 
                     type="text" 
                     value={formData.name}
                     onChange={(e) => setFormData({...formData, name: e.target.value})}
                     disabled={status === "loading"}
                     placeholder='"Adınız Soyadınız"'
                     className="w-full bg-white dark:bg-[#2B2D30] border border-gray-300 dark:border-gray-600 rounded px-3 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500 transition-colors font-mono disabled:opacity-50"
                   />
                </div>

                <div className="group">
                   <label className="text-xs text-gray-500 block mb-1">var email: String</label>
                   <input 
                     type="email" 
                     value={formData.email}
                     onChange={(e) => setFormData({...formData, email: e.target.value})}
                     disabled={status === "loading"}
                     placeholder='"email@example.com"'
                     className="w-full bg-white dark:bg-[#2B2D30] border border-gray-300 dark:border-gray-600 rounded px-3 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500 transition-colors font-mono disabled:opacity-50"
                   />
                </div>

                <div className="group">
                   <label className="text-xs text-gray-500 block mb-1">var message: String</label>
                   <textarea 
                     rows={4}
                     value={formData.message}
                     onChange={(e) => setFormData({...formData, message: e.target.value})}
                     disabled={status === "loading"}
                     placeholder='"Mesajınızı buraya yazın..."'
                     className="w-full bg-white dark:bg-[#2B2D30] border border-gray-300 dark:border-gray-600 rounded px-3 py-2 text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500 transition-colors font-mono resize-none disabled:opacity-50"
                   />
                </div>

              </div>

              <div className="flex items-center gap-2 mt-2">
                <span className="text-gray-500">{'}'}</span>
                
                <button 
                  onClick={handleSend}
                  disabled={status === "loading"}
                  className={`ml-auto px-6 py-2 text-sm font-medium rounded shadow-sm transition-all flex items-center gap-2
                    ${status === "success" 
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : status === "error"
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "bg-[#3574F0] hover:bg-[#3069D9] text-white"
                    } disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <>
                      <Check size={14} />
                      Sent!
                    </>
                  ) : status === "error" ? (
                    <>
                      <AlertCircle size={14} />
                      Error
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Run (Send)
                    </>
                  )}
                </button>
              </div>

              {/* --- SUCCESS OUTPUT --- */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-black text-green-400 p-3 rounded text-xs font-mono mt-2 border-t-2 border-green-500/30"
                  >
                    <div className="flex items-center gap-2 mb-1 opacity-70">
                      <Terminal size={12} />
                      <span>Console Output:</span>
                    </div>
                    <p>{`> Connecting to SMTP server... OK`}</p>
                    <p>{`> Sending data packet... OK`}</p>
                    <p className="text-white font-bold">{`> Email sent successfully to dargahasanbasri@gmail.com`}</p>
                    <p className="text-gray-500 mt-1">{`> Process finished with exit code 0`}</p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* --- ERROR OUTPUT --- */}
              <AnimatePresence>
                {status === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-black text-red-400 p-3 rounded text-xs font-mono mt-2 border-t-2 border-red-500/30"
                  >
                    <div className="flex items-center gap-2 mb-1 opacity-70">
                      <Terminal size={12} />
                      <span>Console Output:</span>
                    </div>
                    <p>{`> Error: ${errorMessage}`}</p>
                    <p className="text-gray-500 mt-1">{`> Process finished with exit code 1`}</p>
                  </motion.div>
                )}
              </AnimatePresence>

           </div>
        </motion.div>

      </div>
    </motion.div>
  );
}