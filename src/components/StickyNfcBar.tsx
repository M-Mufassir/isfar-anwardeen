import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Phone, MessageCircle, QrCode } from 'lucide-react';
import { PROFILE } from '../data/profile';

interface StickyNfcBarProps {
  isDark: boolean;
  onSaveContact: () => void;
  onOpenQr: () => void;
}

/**
 * Floating thumb-friendly bottom dock that appears on scroll so visitors
 * can save Isfar's contact or dial immediately from anywhere on the page.
 */
export function StickyNfcBar({
  isDark,
  onSaveContact,
  onOpenQr,
}: StickyNfcBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 420);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 280, damping: 26 }}
          className="fixed bottom-4 left-0 right-0 z-40 px-4 pointer-events-none"
        >
          <div
            className={`max-w-md mx-auto pointer-events-auto rounded-2xl p-2 border backdrop-blur-xl shadow-2xl flex items-center gap-2 ${
              isDark
                ? 'bg-[#111319]/90 border-white/15'
                : 'bg-white/95 border-slate-200'
            }`}
          >
            <a
              href={PROFILE.vcardPath}
              download="Isfar-Anwardeen.vcf"
              onClick={onSaveContact}
              className="flex-1 h-11 px-4 rounded-xl bg-[#F36D21] hover:bg-[#FF6601] text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-md shadow-[#F36D21]/30 transition-colors"
            >
              <Download className="w-4 h-4" />
              Save Contact
            </a>

            <a
              href={`tel:${PROFILE.mobile}`}
              aria-label="Call Mobile"
              className={`w-11 h-11 rounded-xl border inline-flex items-center justify-center transition-colors ${
                isDark
                  ? 'border-white/10 bg-white/5 hover:bg-white/10 text-white'
                  : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
              }`}
            >
              <Phone className="w-4 h-4 text-[#F36D21]" />
            </a>

            <a
              href={PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Chat"
              className={`w-11 h-11 rounded-xl border inline-flex items-center justify-center transition-colors ${
                isDark
                  ? 'border-white/10 bg-white/5 hover:bg-white/10 text-white'
                  : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
              }`}
            >
              <MessageCircle className="w-4 h-4 text-[#F36D21]" />
            </a>

            <button
              type="button"
              onClick={onOpenQr}
              aria-label="Show QR Code"
              className={`w-11 h-11 rounded-xl border inline-flex items-center justify-center transition-colors cursor-pointer ${
                isDark
                  ? 'border-white/10 bg-white/5 hover:bg-white/10 text-white'
                  : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
              }`}
            >
              <QrCode className="w-4 h-4 text-[#F36D21]" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
