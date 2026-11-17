import {
  Download,
  Phone,
  MessageCircle,
  Mail,
  Building2,
  MapPin,
  QrCode,
  CheckCircle2,
} from 'lucide-react';
import { PROFILE } from '../data/profile';

interface ActionDockProps {
  isDark: boolean;
  onSaveContact: () => void;
  savedToast: boolean;
  onOpenQr: () => void;
}

/**
 * Mobile-first thumb-zone CTA hub optimized for post-NFC tap conversion:
 * primary Save Contact (.vcf) button plus high-intent quick action tiles.
 */
export function ActionDock({
  isDark,
  onSaveContact,
  savedToast,
  onOpenQr,
}: ActionDockProps) {
  const quickActions = [
    {
      label: 'Mobile',
      sub: PROFILE.mobileDisplay,
      href: `tel:${PROFILE.mobile}`,
      icon: Phone,
      external: false,
    },
    {
      label: 'WhatsApp',
      sub: 'Direct Chat',
      href: PROFILE.whatsappUrl,
      icon: MessageCircle,
      external: true,
    },
    {
      label: 'Email',
      sub: 'isfara@hutchison.lk',
      href: `mailto:${PROFILE.email}`,
      icon: Mail,
      external: false,
    },
    {
      label: 'General Line',
      sub: PROFILE.generalLineDisplay,
      href: `tel:${PROFILE.generalLine}`,
      icon: Building2,
      external: false,
    },
  ];

  const tileBase = isDark
    ? 'bg-white/[0.04] hover:bg-white/[0.08] border-white/10 hover:border-[#F36D21]/60 text-white'
    : 'bg-white hover:bg-orange-50/50 border-slate-200 hover:border-[#F36D21] text-slate-900 shadow-xs';

  return (
    <div className="space-y-3">
      {/* Primary Golden-Zone Action Row */}
      <div className="flex flex-col sm:flex-row gap-2.5">
        <a
          href={PROFILE.vcardPath}
          download="Isfar-Anwardeen.vcf"
          onClick={onSaveContact}
          className="flex-1 min-h-12 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#F36D21] to-[#FF6601] hover:brightness-110 active:scale-[0.99] text-white font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2.5 shadow-[0_12px_30px_-8px_rgba(243,109,33,0.6)] transition-all"
        >
          {savedToast ? (
            <>
              <CheckCircle2 className="w-5 h-5" />
              Contact Ready (.vcf)
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              Save to Contacts
            </>
          )}
        </a>

        <button
          type="button"
          onClick={onOpenQr}
          className={`min-h-12 px-4 py-3 rounded-2xl border font-medium text-sm inline-flex items-center justify-center gap-2 transition-all cursor-pointer ${tileBase}`}
        >
          <QrCode className="w-4 h-4 text-[#F36D21]" />
          <span>Share / QR</span>
        </button>
      </div>

      {/* Tactile 2x2 Quick Action Grid */}
      <div className="grid grid-cols-2 gap-2.5">
        {quickActions.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className={`min-h-[54px] px-3.5 py-2.5 rounded-2xl border flex items-center gap-3 transition-all active:scale-[0.99] ${tileBase}`}
            >
              <span className="w-9 h-9 rounded-xl bg-[#F36D21]/12 text-[#F36D21] flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4" />
              </span>
              <span className="min-w-0 text-left">
                <span className="block text-xs font-semibold leading-tight">
                  {item.label}
                </span>
                <span
                  className={`block text-[11px] truncate mt-0.5 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  {item.sub}
                </span>
              </span>
            </a>
          );
        })}
      </div>

      {/* HQ Office Address Strip */}
      <a
        href={PROFILE.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full min-h-[48px] px-3.5 py-2.5 rounded-2xl border flex items-center justify-between gap-3 transition-all ${tileBase}`}
      >
        <span className="flex items-center gap-3 min-w-0">
          <span className="w-8 h-8 rounded-xl bg-[#F36D21]/12 text-[#F36D21] flex items-center justify-center shrink-0">
            <MapPin className="w-4 h-4" />
          </span>
          <span
            className={`text-xs truncate ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {PROFILE.address}
          </span>
        </span>
        <span className="text-[11px] font-medium text-[#F36D21] shrink-0">
          Map →
        </span>
      </a>
    </div>
  );
}
