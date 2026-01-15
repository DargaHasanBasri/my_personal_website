import { ReactNode } from "react";

interface HomeLayoutProps {
  sidebar: ReactNode; // Sol tarafı dışarıdan alacağız (Slot pattern)
  children: ReactNode; // Sağ taraf (Ana içerik)
}

export function HomeLayout({ sidebar, children }: HomeLayoutProps) {
  return (
    // h-screen: Tüm ekranı kapla
    // overflow-hidden: Sayfa içinde scroll oluşmasın, paneller kendi içinde scroll etsin
    <div className="flex h-screen w-full overflow-hidden bg-[var(--background)]">
      {/* SOL PANEL (SIDEBAR) ALANI */}
      {/* w-80: Sabit genişlik (yaklaşık 320px) */}
      {/* border-r: Sağ tarafa çizgi çek */}
      <aside className="w-64 h-full flex flex-col border-r border-[var(--border-color)] bg-[var(--sidebar-bg)] transition-colors">
        {sidebar}
      </aside>
      {/* SAĞ PANEL (CONTENT) ALANI */}
      {/* flex-1: Kalan tüm boşluğu doldur (Expanded) */}
      <main className="flex-1 h-full flex flex-col bg-[var(--background)] transition-colors">
        {children}
      </main>      
    </div>
  );
}