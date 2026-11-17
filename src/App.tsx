import { useState } from 'react';
import { MotionConfig, motion } from 'framer-motion';
import {
  Nfc,
  Sun,
  Moon,
  ArrowUpRight,
  Network,
  Cloud,
  Layers,
  ShieldCheck,
  Building2,
  Phone,
  Mail,
  MapPin,
  Download,
} from 'lucide-react';
import portraitWebp from './assets/isfar-portrait.webp';
import portraitJpg from './assets/isfar-portrait.jpg';
import hutchLogoDark from './assets/hutch-logo-dark-theme.png';
import hutchLogoLight from './assets/hutch-logo.png';
import { PROFILE } from './data/profile';
import { ActionDock } from './components/ActionDock';
import { MetalNfcCardPreview } from './components/MetalNfcCardPreview';
import { ExecutiveTimeline } from './components/ExecutiveTimeline';
import { ShareQrModal } from './components/ShareQrModal';
import { StickyNfcBar } from './components/StickyNfcBar';

const PILLAR_ICONS = {
  network: Network,
  cloud: Cloud,
  layers: Layers,
} as const;

export function App() {
  const [isDark, setIsDark] = useState(true);
  const [qrOpen, setQrOpen] = useState(false);
  const [savedToast, setSavedToast] = useState(false);

  const shareUrl =
    typeof window !== 'undefined'
      ? window.location.href
      : 'https://isfar-anwardeen.vercel.app';

  const handleSaveContact = () => {
    setSavedToast(true);
    window.setTimeout(() => setSavedToast(false), 3000);
  };

  const cardSurface = isDark
    ? 'bg-[#111319]/90 border-white/10'
    : 'bg-white border-slate-200 shadow-sm';

  return (
    <MotionConfig reducedMotion="user">
      <div
        className={`min-h-screen transition-colors duration-300 relative ${
          isDark
            ? 'bg-[#090A0E] text-slate-100 bg-telecom-grid-dark'
            : 'bg-[#F8F9FB] text-slate-900 bg-telecom-grid-light'
        }`}
      >
        {/* Ambient Hutch Orange Executive Glow */}
        <div
          className="pointer-events-none fixed inset-x-0 top-0 h-[440px] opacity-80"
          style={{
            background: isDark
              ? 'radial-gradient(60% 55% at 50% 0%, rgba(243, 109, 33, 0.16) 0%, rgba(243, 109, 33, 0.03) 55%, transparent 100%)'
              : 'radial-gradient(60% 55% at 50% 0%, rgba(243, 109, 33, 0.12) 0%, transparent 75%)',
          }}
          aria-hidden="true"
        />

        {/* Top Bar */}
        <header
          className={`sticky top-0 z-30 backdrop-blur-xl border-b transition-colors ${
            isDark
              ? 'bg-[#090A0E]/80 border-white/10'
              : 'bg-white/85 border-slate-200'
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
            <a href="#top" className="flex items-center gap-3 min-w-0">
              <img
                src={isDark ? hutchLogoDark : hutchLogoLight}
                alt="Powered by HUTCH Enterprise"
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </a>

            <nav
              className="hidden md:flex items-center gap-6 text-xs font-medium"
              aria-label="Section navigation"
            >
              {[
                { label: 'Enterprise Mandate', href: '#enterprise' },
                { label: 'Career Highlights', href: '#career' },
                { label: 'Recognition', href: '#awards' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-colors ${
                    isDark
                      ? 'text-slate-300 hover:text-[#F36D21]'
                      : 'text-slate-600 hover:text-[#F36D21]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <span
                className={`hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border ${
                  isDark
                    ? 'bg-[#F36D21]/10 border-[#F36D21]/30 text-[#FF8533]'
                    : 'bg-orange-50 border-orange-200 text-[#F36D21]'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#F36D21] animate-pulse" />
                NFC Card Active
              </span>

              <button
                type="button"
                onClick={() => setIsDark((prev) => !prev)}
                aria-label={isDark ? 'Switch to light theme' : 'Switch to dark metal theme'}
                className={`w-10 h-10 rounded-xl border inline-flex items-center justify-center transition-colors cursor-pointer ${
                  isDark
                    ? 'border-white/10 bg-white/5 hover:bg-white/10 text-slate-200'
                    : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                }`}
              >
                {isDark ? <Sun className="w-4 h-4 text-[#FF8533]" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </header>

        <main id="top" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pb-28 sm:pb-16">
          {/* HERO — GOLDEN ZONE FOR NFC TAP */}
          <section className="pt-7 sm:pt-12 pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Portrait + Identity + Instant Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="lg:col-span-7 space-y-6"
              >
                {/* Executive Identity Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                  {/* Restored Studio Portrait with NFC Ripple Halo */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0">
                    <motion.span
                      animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.12, 0.45] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute -inset-1.5 rounded-3xl border border-[#F36D21]/60 pointer-events-none"
                    />
                    <div className="relative w-full h-full rounded-3xl p-[2px] bg-gradient-to-br from-[#F36D21] via-[#FF8533]/60 to-white/15 shadow-[0_18px_40px_-12px_rgba(243,109,33,0.45)]">
                      <picture>
                        <source srcSet={portraitWebp} type="image/webp" />
                        <img
                          src={portraitJpg}
                          alt="Mr. Isfar Anwardeen — General Manager, Enterprise & Postpaid at HUTCH Sri Lanka"
                          className="w-full h-full object-cover object-top rounded-[22px]"
                        />
                      </picture>
                    </div>
                    <span
                      title="Verified Executive Digital Card"
                      className={`absolute -bottom-1.5 -right-1.5 w-8 h-8 rounded-xl bg-[#F36D21] text-white flex items-center justify-center shadow-lg border-2 ${
                        isDark ? 'border-[#090A0E]' : 'border-white'
                      }`}
                    >
                      <Nfc className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="space-y-1.5 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#F36D21]/15 text-[#F36D21] border border-[#F36D21]/30">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        HUTCH Enterprise Leadership
                      </span>
                      <span
                        className={`text-[11px] font-mono ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        {PROFILE.location}
                      </span>
                    </div>

                    <h1
                      className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {PROFILE.name}
                    </h1>

                    <p className="text-base sm:text-lg font-semibold text-[#F36D21] leading-snug">
                      {PROFILE.role}
                    </p>

                    <div
                      className={`text-xs sm:text-sm space-y-0.5 ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      <p className="font-medium">{PROFILE.company}</p>
                      <p
                        className={`text-xs ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        {PROFILE.parentGroup}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Executive Pitch */}
                <p
                  className={`text-sm sm:text-[15px] leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {PROFILE.executiveSummary}
                </p>

                {/* Primary NFC Actions */}
                <ActionDock
                  isDark={isDark}
                  onSaveContact={handleSaveContact}
                  savedToast={savedToast}
                  onOpenQr={() => setQrOpen(true)}
                />
              </motion.div>

              {/* Right Column: Interactive Metal NFC Card + Key Stats */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="lg:col-span-5 space-y-5"
              >
                <MetalNfcCardPreview isDark={isDark} shareUrl={shareUrl} />

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2.5 max-w-[440px] mx-auto">
                  {PROFILE.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className={`rounded-2xl p-3.5 border ${cardSurface}`}
                    >
                      <div
                        className={`font-display text-xl sm:text-2xl font-extrabold ${
                          metric.accent
                            ? 'text-[#F36D21]'
                            : isDark
                              ? 'text-white'
                              : 'text-slate-900'
                        }`}
                      >
                        {metric.value}
                      </div>
                      <div
                        className={`text-[11px] mt-0.5 leading-tight ${
                          isDark ? 'text-slate-400' : 'text-slate-600'
                        }`}
                      >
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* CURRENT MANDATE — HUTCH ENTERPRISE */}
          <section
            id="enterprise"
            className={`py-10 sm:py-14 border-t ${
              isDark ? 'border-white/10' : 'border-slate-200'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
              <div>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-[#F36D21] mb-2">
                  <Building2 className="w-3.5 h-3.5" />
                  Current Position Spotlight
                </span>
                <h2
                  className={`font-display text-2xl sm:text-3xl font-bold tracking-tight ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Driving Growth at HUTCH Enterprise
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                <a
                  href={PROFILE.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl border transition-colors ${
                    isDark
                      ? 'border-white/10 bg-white/5 hover:border-[#F36D21]/60 text-white'
                      : 'border-slate-200 bg-white hover:border-[#F36D21] text-slate-800'
                  }`}
                >
                  hutch.lk
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#F36D21]" />
                </a>
                <a
                  href={PROFILE.cloudWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl border transition-colors ${
                    isDark
                      ? 'border-white/10 bg-white/5 hover:border-[#F36D21]/60 text-white'
                      : 'border-slate-200 bg-white hover:border-[#F36D21] text-slate-800'
                  }`}
                >
                  hutchcloud.lk
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#F36D21]" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PROFILE.enterprisePillars.map((pillar, index) => {
                const Icon = PILLAR_ICONS[pillar.icon];
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className={`group rounded-3xl p-6 border transition-all ${
                      isDark
                        ? 'bg-[#111319]/90 border-white/10 hover:border-[#F36D21]/50'
                        : 'bg-white border-slate-200 hover:border-[#F36D21] shadow-xs'
                    }`}
                  >
                    <div className="w-11 h-11 rounded-2xl bg-[#F36D21]/15 text-[#F36D21] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-[#F36D21]">
                      {pillar.subtitle}
                    </p>
                    <h3
                      className={`font-display text-lg font-bold mt-1 ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed mt-2 ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {pillar.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {pillar.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[11px] px-2.5 py-0.5 rounded-md border ${
                            isDark
                              ? 'bg-white/[0.03] border-white/10 text-slate-300'
                              : 'bg-slate-50 border-slate-200 text-slate-600'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Core Executive Competencies Strip */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span
                className={`text-xs font-mono uppercase tracking-wider mr-1 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                Core Focus:
              </span>
              {PROFILE.competencies.map((skill) => (
                <span
                  key={skill}
                  className={`text-xs px-3 py-1 rounded-full border ${
                    isDark
                      ? 'bg-[#12141B] border-white/10 text-slate-200'
                      : 'bg-white border-slate-200 text-slate-700'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* CAREER HIGHLIGHTS + AWARDS + EDUCATION */}
          <ExecutiveTimeline isDark={isDark} />

          {/* DIRECT CONTACT CARD FOOTER */}
          <footer id="contact" className="pt-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className={`rounded-3xl p-6 sm:p-8 border overflow-hidden relative ${
                isDark
                  ? 'metal-card-surface border-white/15'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 space-y-3">
                  <img
                    src={isDark ? hutchLogoDark : hutchLogoLight}
                    alt="Powered by HUTCH Enterprise"
                    className="h-7 w-auto object-contain"
                  />
                  <div>
                    <h2
                      className={`font-display text-2xl font-bold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {PROFILE.name}
                    </h2>
                    <p className="text-sm font-semibold text-[#F36D21]">
                      {PROFILE.role}
                    </p>
                    <p
                      className={`text-xs mt-0.5 ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {PROFILE.company} · {PROFILE.parentGroup}
                    </p>
                  </div>

                  <div
                    className={`grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    <a
                      href={`tel:${PROFILE.mobile}`}
                      className="inline-flex items-center gap-2 hover:text-[#F36D21] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#F36D21]" />
                      Mobile: {PROFILE.mobileDisplay}
                    </a>
                    <a
                      href={`tel:${PROFILE.generalLine}`}
                      className="inline-flex items-center gap-2 hover:text-[#F36D21] transition-colors"
                    >
                      <Building2 className="w-3.5 h-3.5 text-[#F36D21]" />
                      General: {PROFILE.generalLineDisplay}
                    </a>
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="inline-flex items-center gap-2 hover:text-[#F36D21] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#F36D21]" />
                      {PROFILE.email}
                    </a>
                    <a
                      href={PROFILE.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-start gap-2 hover:text-[#F36D21] transition-colors sm:col-span-2"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#F36D21] shrink-0 mt-0.5" />
                      <span>{PROFILE.address}</span>
                    </a>
                  </div>
                </div>

                <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-2.5">
                  <a
                    href={PROFILE.vcardPath}
                    download="Isfar-Anwardeen.vcf"
                    onClick={handleSaveContact}
                    className="h-12 px-5 rounded-2xl bg-[#F36D21] hover:bg-[#FF6601] text-white font-semibold text-sm inline-flex items-center justify-center gap-2 shadow-lg shadow-[#F36D21]/25 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download Executive Contact (.vcf)
                  </a>
                  <button
                    type="button"
                    onClick={() => setQrOpen(true)}
                    className={`h-11 px-5 rounded-2xl border font-medium text-sm inline-flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                      isDark
                        ? 'border-white/15 bg-white/5 hover:bg-white/10 text-white'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-900'
                    }`}
                  >
                    <Nfc className="w-4 h-4 text-[#F36D21]" />
                    Open QR &amp; Share Link
                  </button>
                </div>
              </div>
            </motion.div>

            <p
              className={`text-center text-[11px] mt-6 ${
                isDark ? 'text-slate-500' : 'text-slate-400'
              }`}
            >
              © {new Date().getFullYear()} Isfar Anwardeen · {PROFILE.company} · Digital Metal NFC Portfolio
            </p>
          </footer>
        </main>

        <StickyNfcBar
          isDark={isDark}
          onSaveContact={handleSaveContact}
          onOpenQr={() => setQrOpen(true)}
        />

        <ShareQrModal
          open={qrOpen}
          onClose={() => setQrOpen(false)}
          shareUrl={shareUrl}
          isDark={isDark}
        />
      </div>
    </MotionConfig>
  );
}

export default App;
