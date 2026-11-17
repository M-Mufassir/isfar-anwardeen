import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Copy, Share2, X, Nfc } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { PROFILE } from '../data/profile';

interface ShareQrModalProps {
  open: boolean;
  onClose: () => void;
  shareUrl: string;
  isDark: boolean;
}

/**
 * Modal displaying a scannable QR code backup for the Metal NFC Card URL,
 * plus one-tap link copy and native OS share sheet support.
 */
export function ShareQrModal({ open, onClose, shareUrl, isDark }: ShareQrModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${PROFILE.name} — ${PROFILE.role}`,
          text: `${PROFILE.name}, ${PROFILE.role} at ${PROFILE.company}`,
          url: shareUrl,
        });
      } catch {
        // User cancelled native share sheet
      }
    } else {
      await handleCopy();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Share or Scan Digital Contact Card"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-w-sm rounded-3xl p-6 border shadow-2xl ${
              isDark
                ? 'bg-[#12141B] border-white/15 text-white'
                : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close QR dialog"
              className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                isDark
                  ? 'bg-white/5 hover:bg-white/15 text-slate-300'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center space-y-2 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-[#F36D21]/15 text-[#F36D21]">
                <Nfc className="w-3.5 h-3.5" />
                QR &amp; NFC Link
              </span>
              <h3 className="font-display text-xl font-bold">{PROFILE.name}</h3>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Scan to open this portfolio or share directly
              </p>
            </div>

            <div className="mx-auto w-fit p-4 rounded-2xl bg-white shadow-lg border border-slate-200 mb-5">
              <QRCodeSVG
                value={shareUrl}
                size={196}
                bgColor="#FFFFFF"
                fgColor="#0B0C10"
                level="H"
              />
            </div>

            <div
              className={`rounded-xl px-3 py-2 text-xs font-mono truncate mb-4 border ${
                isDark
                  ? 'bg-black/40 border-white/10 text-slate-300'
                  : 'bg-slate-50 border-slate-200 text-slate-600'
              }`}
            >
              {shareUrl}
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={handleCopy}
                className={`h-11 rounded-xl font-medium text-sm inline-flex items-center justify-center gap-2 border transition-colors cursor-pointer ${
                  isDark
                    ? 'border-white/15 bg-white/5 hover:bg-white/10 text-white'
                    : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-900'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy URL
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleNativeShare}
                className="h-11 rounded-xl font-semibold text-sm inline-flex items-center justify-center gap-2 bg-[#F36D21] hover:bg-[#FF6601] text-white transition-colors cursor-pointer shadow-lg shadow-[#F36D21]/25"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
