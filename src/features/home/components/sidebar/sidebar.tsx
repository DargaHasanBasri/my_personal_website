export function Sidebar() {
  return (
    <div className="p-4 h-full flex flex-col gap-2">
      {/* Logo Alanı */}
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="h-8 w-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
          AS
        </div>
        <div>
          <h1 className="font-semibold text-lg leading-none tracking-tight">Android Studio</h1>
          <span className="text-xs text-gray-500 dark:text-gray-400">Meerkat | 2024.3.1</span>
        </div>
      </div>

      {/* Menü */}
      <nav className="flex flex-col gap-1">
        
        {/* Aktif Olan Menü Elemanı (Mavi) */}
        <button className="text-left px-4 py-2 rounded text-sm font-medium transition-colors
          bg-[#3574F0] text-white shadow-md">
          About Me
        </button>

        {/* Pasif Elemanlar */}
        <button className="text-left px-4 py-2 rounded text-sm font-medium transition-colors
          text-gray-600 hover:bg-gray-200 
          dark:text-gray-300 dark:hover:bg-[#393B40]">
          Experience
        </button>
        
        <button className="text-left px-4 py-2 rounded text-sm font-medium transition-colors
          text-gray-600 hover:bg-gray-200 
          dark:text-gray-300 dark:hover:bg-[#393B40]">
          Projects
        </button>
        
        <button className="text-left px-4 py-2 rounded text-sm font-medium transition-colors
          text-gray-600 hover:bg-gray-200 
          dark:text-gray-300 dark:hover:bg-[#393B40]">
          Contact
        </button>
      </nav>
      
      {/* En alttaki Ayarlar İkonu (Opsiyonel) */}
      <div className="mt-auto px-4 py-2">
        <button className="text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors">
           {/* İkon buraya */}
           ⚙️
        </button>
      </div>
    </div>
  );
}