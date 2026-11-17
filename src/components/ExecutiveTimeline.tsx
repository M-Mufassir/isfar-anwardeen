import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ChevronDown, MapPin, Sparkles, Briefcase } from 'lucide-react';
import awardPhoto from '../assets/isfar-award.jpg';
import { PROFILE } from '../data/profile';

interface ExecutiveTimelineProps {
  isDark: boolean;
}

/**
 * Concise executive career history placing primary weight on Isfar's current
 * HUTCH Enterprise & Postpaid GM mandate while highlighting past milestones.
 */
export function ExecutiveTimeline({ isDark }: ExecutiveTimelineProps) {
  const [expandedId, setExpandedId] = useState<string | null>('airtel');

  const cardSurface = isDark
    ? 'bg-[#111319]/90 border-white/10'
    : 'bg-white border-slate-200 shadow-sm';

  return (
    <section id="career" className="py-12 sm:py-16">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-[#F36D21] mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            Career Trajectory
          </span>
          <h2
            className={`font-display text-2xl sm:text-3xl font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            25+ Years of Telecom Leadership
          </h2>
        </div>
        <p
          className={`text-sm max-w-md ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          From building foundational B2B channels in Sri Lanka and Canada to leading HUTCH Enterprise &amp; Postpaid nationwide.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left/Main Column: Career Timeline */}
        <div className="lg:col-span-7 relative space-y-4">
          <div
            className={`hidden sm:block absolute left-[19px] top-6 bottom-6 w-[2px] ${
              isDark ? 'bg-white/10' : 'bg-slate-200'
            }`}
            aria-hidden="true"
          />

          {PROFILE.careerTimeline.map((item, idx) => {
            const hasSubRoles = Boolean(item.subRoles && item.subRoles.length > 0);
            const isExpanded = expandedId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className="relative sm:pl-12"
              >
                {/* Timeline node */}
                <span
                  className={`hidden sm:flex absolute left-[9px] top-6 w-[22px] h-[22px] rounded-full items-center justify-center border-2 ${
                    item.isCurrent
                      ? 'bg-[#F36D21] border-[#FF8533] shadow-[0_0_18px_rgba(243,109,33,0.7)]'
                      : isDark
                        ? 'bg-[#111319] border-white/25'
                        : 'bg-white border-slate-300'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      item.isCurrent
                        ? 'bg-white animate-pulse'
                        : isDark
                          ? 'bg-slate-400'
                          : 'bg-slate-400'
                    }`}
                  />
                </span>

                <div
                  className={`rounded-2xl p-5 border transition-colors ${
                    item.isCurrent
                      ? isDark
                        ? 'bg-gradient-to-br from-[#F36D21]/14 via-[#12141B] to-[#111319] border-[#F36D21]/45'
                        : 'bg-gradient-to-br from-orange-50/90 via-white to-white border-[#F36D21]/50 shadow-sm'
                      : cardSurface
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span
                      className={`font-mono text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full ${
                        item.isCurrent
                          ? 'bg-[#F36D21] text-white'
                          : isDark
                            ? 'bg-white/8 text-slate-300'
                            : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {item.shortTag}
                    </span>
                    <span
                      className={`font-mono text-xs ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      {item.period} · {item.duration}
                    </span>
                  </div>

                  <h3
                    className={`font-display text-lg font-bold leading-snug ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {item.headlineRole}
                  </h3>
                  <p
                    className={`text-sm font-medium mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 ${
                      item.isCurrent
                        ? 'text-[#F36D21]'
                        : isDark
                          ? 'text-slate-300'
                          : 'text-slate-700'
                    }`}
                  >
                    <span>{item.company}</span>
                    <span className="inline-flex items-center gap-1 text-xs opacity-75">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  </p>

                  <p
                    className={`mt-2.5 text-sm leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {item.summary}
                  </p>

                  {/* Sub-roles toggle for multi-tier tenures */}
                  {hasSubRoles && (
                    <div className="mt-3">
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedId(isExpanded ? null : item.id)
                        }
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold cursor-pointer transition-colors ${
                          isDark
                            ? 'text-[#FF8533] hover:text-white'
                            : 'text-[#F36D21] hover:text-[#d45208]'
                        }`}
                      >
                        <span>
                          {isExpanded ? 'Hide role progression' : 'View role progression'}
                        </span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div
                              className={`mt-3 pt-3 border-t space-y-2.5 ${
                                isDark ? 'border-white/10' : 'border-slate-200'
                              }`}
                            >
                              {item.subRoles?.map((sub) => (
                                <div key={`${sub.title}-${sub.period}`} className="text-xs">
                                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                                    <span
                                      className={`font-semibold ${
                                        isDark ? 'text-slate-200' : 'text-slate-800'
                                      }`}
                                    >
                                      {sub.title}
                                    </span>
                                    <span
                                      className={`font-mono text-[11px] ${
                                        isDark ? 'text-slate-400' : 'text-slate-500'
                                      }`}
                                    >
                                      {sub.period}
                                    </span>
                                  </div>
                                  {sub.highlight && (
                                    <p
                                      className={`mt-0.5 leading-relaxed ${
                                        isDark ? 'text-slate-400' : 'text-slate-600'
                                      }`}
                                    >
                                      {sub.highlight}
                                    </p>
                                  )}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {item.badges.map((badge) => (
                      <span
                        key={badge}
                        className={`text-[11px] px-2.5 py-0.5 rounded-md border ${
                          isDark
                            ? 'bg-white/[0.03] border-white/10 text-slate-300'
                            : 'bg-slate-50 border-slate-200 text-slate-600'
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Column: Award Recognition Feature + Education */}
        <div id="awards" className="lg:col-span-5 space-y-5 lg:sticky lg:top-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className={`rounded-3xl overflow-hidden border ${cardSurface}`}
          >
            <div className="relative aspect-[4/4.4] overflow-hidden bg-slate-900">
              <img
                src={awardPhoto}
                alt="Isfar Anwardeen receiving CLA Great Manager Award 2020"
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
              <div className="absolute top-3.5 left-3.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#F36D21] text-white shadow-lg">
                  <Award className="w-3.5 h-3.5" />
                  National Leadership Honor
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#FF8533]">
                  {PROFILE.award.issuer}
                </p>
                <h3 className="font-display text-xl font-bold mt-0.5">
                  {PROFILE.award.title}
                </h3>
                <p className="text-xs text-slate-200 mt-0.5">
                  {PROFILE.award.category}
                </p>
              </div>
            </div>

            <div className="p-5">
              <p
                className={`text-sm leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {PROFILE.award.description}
              </p>
            </div>
          </motion.div>

          {/* Education & Credentials Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`rounded-3xl p-5 border ${cardSurface}`}
          >
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#F36D21] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Academic &amp; Executive Credentials
            </span>
            <div className="space-y-4">
              {PROFILE.education.map((edu) => (
                <div
                  key={edu.degree}
                  className={`pb-3.5 last:pb-0 border-b last:border-b-0 ${
                    isDark ? 'border-white/10' : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <h4
                      className={`font-display font-bold text-sm ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {edu.degree}
                    </h4>
                    <span
                      className={`font-mono text-[11px] shrink-0 ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-[#F36D21] mt-0.5">
                    {edu.institution}
                  </p>
                  <p
                    className={`text-xs mt-1 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {edu.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
