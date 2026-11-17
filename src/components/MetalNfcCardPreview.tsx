import { useState, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Nfc, RotateCw, Mail, Phone, MapPin } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import hutchLogoDark from '../assets/hutch-logo-dark-theme.png';
import { PROFILE } from '../data/profile';

interface MetalNfcCardPreviewProps {
  isDark: boolean;
  shareUrl: string;
}

/**
 * Interactive 3D-tilting Metal NFC Card simulation connecting the physical tap card
 * aesthetic to the digital web portfolio.
 */
export function MetalNfcCardPreview({ isDark, shareUrl }: MetalNfcCardPreviewProps) {
  const [flipped, setFlipped] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 220,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 220,
    damping: 24,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (flipped) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="w-full max-w-[440px] mx-auto">
      <div className="flex items-center justify-between mb-2.5 px-1">
        <span
          className={`inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          <Nfc className="w-3.5 h-3.5 text-[#F36D21]" />
          Metal NFC Card Edition
        </span>
        <button
          type="button"
          onClick={() => {
            mouseX.set(0);
            mouseY.set(0);
            setFlipped((prev) => !prev);
          }}
          className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border transition-colors cursor-pointer ${
            isDark
              ? 'border-white/10 bg-white/5 text-slate-300 hover:border-[#F36D21]/60 hover:text-white'
              : 'border-slate-200 bg-white text-slate-700 hover:border-[#F36D21] hover:text-[#F36D21]'
          }`}
        >
          <RotateCw className="w-3 h-3" />
          {flipped ? 'View Front' : 'Flip Back'}
        </button>
      </div>

      <div
        className="relative w-full aspect-[1.586/1]"
        style={{ perspective: 1100 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 180, damping: 22 }}
          style={{
            transformStyle: 'preserve-3d',
            rotateX: flipped ? 0 : rotateX,
            rotateY: flipped ? 180 : rotateY,
          }}
          className="relative w-full h-full cursor-pointer"
          onClick={() => setFlipped((prev) => !prev)}
          role="button"
          tabIndex={0}
          aria-label="Interactive Metal NFC Card Preview — click to flip"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setFlipped((prev) => !prev);
            }
          }}
        >
          {/* FRONT OF METAL CARD */}
          <div
            className="absolute inset-0 rounded-2xl p-5 sm:p-6 flex flex-col justify-between metal-card-surface border border-white/15 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.65)] overflow-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            {/* Orange edge laser accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F36D21] to-transparent opacity-80" />
            <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-[#F36D21]/15 blur-2xl pointer-events-none" />

            <div className="flex items-start justify-between gap-3 relative z-10">
              <img
                src={hutchLogoDark}
                alt="Powered by HUTCH Enterprise"
                className="h-7 sm:h-8 w-auto object-contain select-none"
              />
              <div className="flex items-center gap-2">
                <div className="w-8 h-6 rounded border border-[#F36D21]/40 bg-gradient-to-br from-amber-200/20 via-amber-500/10 to-transparent flex items-center justify-center">
                  <div className="w-4 h-3 border border-amber-300/35 rounded-[2px]" />
                </div>
                <Nfc className="w-5 h-5 text-[#F36D21]" />
              </div>
            </div>

            <div className="relative z-10 space-y-1">
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#FF8533]">
                Executive Leadership · NFC Enabled
              </p>
              <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
                {PROFILE.name}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-200">
                {PROFILE.role}
              </p>
              <p className="text-[11px] text-slate-400">{PROFILE.company}</p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 relative z-10">
              <span className="text-[10px] tracking-wide text-slate-400">
                {PROFILE.parentGroup}
              </span>
              <span className="font-mono text-[10px] text-slate-500">
                TAP TO CONNECT
              </span>
            </div>
          </div>

          {/* BACK OF METAL CARD */}
          <div
            className="absolute inset-0 rounded-2xl p-5 sm:p-6 flex flex-col justify-between metal-card-surface border border-white/15 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.65)] overflow-hidden"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-2 text-left min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF8533]">
                  Direct Executive Desk
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Phone className="w-3.5 h-3.5 text-[#F36D21] shrink-0" />
                  <span className="truncate">{PROFILE.mobileDisplay}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">Gen: {PROFILE.generalLineDisplay}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Mail className="w-3.5 h-3.5 text-[#F36D21] shrink-0" />
                  <span className="truncate">{PROFILE.email}</span>
                </div>
                <div className="flex items-start gap-2 text-[11px] text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-[#F36D21] shrink-0 mt-0.5" />
                  <span className="leading-snug line-clamp-2">{PROFILE.address}</span>
                </div>
              </div>

              <div className="shrink-0 bg-white p-2 rounded-xl shadow-inner">
                <QRCodeSVG
                  value={shareUrl}
                  size={84}
                  bgColor="#FFFFFF"
                  fgColor="#0B0C10"
                  level="M"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <span className="text-[10px] text-slate-400">
                QR Backup · NFC Tag NDEF URL
              </span>
              <span className="text-[10px] font-medium text-[#F36D21]">
                hutch.lk
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
