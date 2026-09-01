import { useEffect, useState } from 'react';
import {
   AlertCircle,
   ArrowUp,
   Bug,
   Check,
   CheckCircle2,
   ChevronDown,
   ChevronUp,
   Code2,
   Compass,
   Copy,
   ExternalLink,
   GraduationCap,
   Info,
   Key,
   ShieldCheck,
   Terminal,
   User,
   UserCheck,
} from 'lucide-react';
import { STUDENT_ID, STUDENT_NAME } from '../../lib/constants';
import { BUG_SOLUTIONS_CONTENT } from '../../lib/content';

export function PageFooter() {
   const [showScrollTop, setShowScrollTop] = useState(false);
   const [showQaMetadata, setShowQaMetadata] = useState(false);
   const [copiedValue, setCopiedValue] = useState<string | null>(null);

   useEffect(() => {
      const handleScroll = () => {
         setShowScrollTop(window.scrollY > 400);
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   const handleCopyTestValue = (val: string) => {
      navigator.clipboard.writeText(val).then(() => {
         setCopiedValue(val);
         setTimeout(() => setCopiedValue(null), 2500);
      });
   };

   return (
      <>
         <footer className="mt-14 bg-white/80 backdrop-blur-sm border-t border-sky-100 text-slate-600 text-xs no-print">
            <div className="page-container py-10 space-y-8">
               {/* Section 1: Application UI Info */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-sky-100/80">
                  {/* App Overview */}
                  <div>
                     <div className="flex items-center gap-2.5 mb-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 to-blue-700 text-white shadow-xs">
                           <Compass className="h-4 w-4" />
                        </div>
                        <span className="font-bold text-slate-900 text-sm">Eldoria Expedition 2026</span>
                     </div>
                     <p className="text-slate-500 text-xs leading-relaxed max-w-md">
                        ระบบลงทะเบียนทีมสำรวจดินแดนโบราณเอลโดเรีย พัฒนาขึ้นสำหรับการฝึกปฏิบัติการทดสอบเว็บฟอร์มและการตรวจสอบข้อมูล (QA & Form Testing Practice)
                     </p>
                     <div className="mt-3">
                        <a
                           href="https://www.realbugz.com/en/task-form"
                           target="_blank"
                           rel="noreferrer"
                           className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-800 font-medium hover:underline text-[11px]">
                           <span>เว็บอ้างอิงต้นฉบับ Realbugz Task Form</span>
                           <ExternalLink className="h-3 w-3" />
                        </a>
                     </div>
                  </div>

                  {/* Architecture Tech Stack */}
                  <div>
                     <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <Code2 className="h-4 w-4 text-sky-600" />
                        เทคโนโลยีและสถาปัตยกรรม
                     </h4>
                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 text-[11px]">
                        <li className="flex items-center gap-1.5 bg-sky-50/60 p-2 rounded-lg border border-sky-100">
                           <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                           <span>React 19 & TypeScript 5</span>
                        </li>
                        <li className="flex items-center gap-1.5 bg-sky-50/60 p-2 rounded-lg border border-sky-100">
                           <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                           <span>Tailwind CSS v4 Clean UI</span>
                        </li>
                        <li className="flex items-center gap-1.5 bg-sky-50/60 p-2 rounded-lg border border-sky-100">
                           <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                           <span>Lucide Icons & Strict TSX</span>
                        </li>
                        <li className="flex items-center gap-1.5 bg-sky-50/60 p-2 rounded-lg border border-sky-100">
                           <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                           <span>Responsive Desktop / Mobile</span>
                        </li>
                     </ul>
                  </div>
               </div>

               {/* Section 2: Collapsible Developer & Academic Submission Metadata (รวมข้อมูลผู้พัฒนา & เฉลย Bug) */}
               <div className="bg-sky-50/60 border border-sky-100 rounded-2xl overflow-hidden shadow-2xs">
                  <button
                     type="button"
                     onClick={() => setShowQaMetadata((prev) => !prev)}
                     className="w-full px-4 sm:px-5 py-3.5 flex items-center justify-between text-left hover:bg-sky-100/50 transition-colors cursor-pointer">
                     <div className="flex items-center gap-2.5">
                        <div className="h-7 w-7 rounded-lg bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                           <UserCheck className="h-4 w-4" />
                        </div>
                        <div>
                           <div className="flex items-center gap-2">
                              <span className="text-slate-900 font-bold text-xs sm:text-sm">Developer & Academic Submission Metadata</span>
                              <span className="bg-sky-100 text-sky-800 text-[10px] font-bold px-2 py-0.5 rounded font-mono">Work 1</span>
                           </div>
                           <p className="text-[11px] text-slate-500 mt-0.5">ข้อมูลผู้พัฒนาและเฉลยจุดบกพร่องสำหรับผู้ตรวจประเมินและ Tester</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-1.5 text-xs text-sky-800 font-semibold shrink-0">
                        <span>{showQaMetadata ? 'ซ่อนข้อมูล' : 'แสดงข้อมูลผู้พัฒนา'}</span>
                        {showQaMetadata ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                     </div>
                  </button>

                  {showQaMetadata && (
                     <div className="px-4 sm:px-6 pb-6 pt-3 border-t border-sky-100 bg-white/95 space-y-6 animate-fade-up">
                        {/* 1. Student Developer Identification Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                           <div className="bg-sky-50/70 p-3.5 rounded-xl border border-sky-100">
                              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                                 <User className="h-3.5 w-3.5 text-sky-600" />
                                 <span>รหัสนักศึกษา</span>
                              </p>
                              <p className="font-mono font-bold text-sky-700 text-base">{STUDENT_ID}</p>
                           </div>
                           <div className="bg-sky-50/70 p-3.5 rounded-xl border border-sky-100">
                              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                                 <GraduationCap className="h-3.5 w-3.5 text-sky-600" />
                                 <span>ชื่อ-นามสกุล</span>
                              </p>
                              <p className="font-bold text-slate-900 text-base">{STUDENT_NAME}</p>
                           </div>
                           <div className="bg-sky-50/70 p-3.5 rounded-xl border border-sky-100">
                              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                                 <Info className="h-3.5 w-3.5 text-sky-600" />
                                 <span>กิจกรรม / รายวิชา</span>
                              </p>
                              <p className="font-semibold text-slate-800 text-xs leading-relaxed">Work 1: พัฒนาหน้าเว็บไซต์ลงทะเบียน (10 คะแนนจริง)</p>
                           </div>
                        </div>

                        {/* 2. Bug Solution Key Header & Summary */}
                        <div className="pt-2 border-t border-slate-100 space-y-4">
                           <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                                 <Key className="h-4 w-4 text-amber-600" />
                                 <span>{BUG_SOLUTIONS_CONTENT.sectionTitle}</span>
                              </div>
                              <span className="text-[10px] font-mono font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded">2 BUGS KEY</span>
                           </div>

                           <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
                              <Info className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                              <p className="leading-relaxed">{BUG_SOLUTIONS_CONTENT.summary}</p>
                           </div>

                           {/* 3. Bug Cards Grid */}
                           <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-xs">
                              {BUG_SOLUTIONS_CONTENT.bugs.map((bug) => (
                                 <div key={bug.id} className="bg-slate-50/90 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3.5 flex flex-col justify-between">
                                    <div>
                                       {/* Bug Header */}
                                       <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
                                          <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                                             <Bug className="h-4 w-4 text-amber-600" />
                                             <span>{bug.title}</span>
                                          </span>
                                          <span className="font-mono text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded">{bug.id}</span>
                                       </div>

                                       {/* How to Reproduce */}
                                       <div className="mt-3 space-y-2.5">
                                          <div className="bg-white p-3 rounded-lg border border-sky-200 shadow-2xs">
                                             <p className="font-bold text-sky-900 text-[11px] flex items-center gap-1.5 mb-1">
                                                <Terminal className="h-3.5 w-3.5 text-sky-600" />
                                                <span>วิธีใส่ข้อมูลให้ติด Bug (How to Reproduce):</span>
                                             </p>
                                             <p className="text-slate-700 leading-relaxed text-[11px]">{bug.howToReproduce}</p>
                                             {/* Copyable Test Values */}
                                             <div className="mt-2.5 flex flex-wrap gap-1.5 items-center">
                                                <span className="text-[10px] font-semibold text-slate-500">คลิกเพื่อคัดลอกค่าทดสอบ:</span>
                                                {bug.testValues.map((val) => (
                                                   <button
                                                      key={val}
                                                      type="button"
                                                      onClick={() => handleCopyTestValue(val)}
                                                      className="inline-flex items-center gap-1 font-mono text-[11px] bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-300 px-2 py-0.5 rounded cursor-pointer transition-colors shadow-2xs"
                                                      title="คลิกเพื่อคัดลอกค่านี้ไปวางทดสอบในฟอร์ม">
                                                      {copiedValue === val ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3 text-sky-600" />}
                                                      <span>{val}</span>
                                                   </button>
                                                ))}
                                             </div>
                                          </div>

                                          {/* Actual vs Expected */}
                                          <div className="space-y-1.5 pt-0.5">
                                             <div className="p-2.5 rounded-lg bg-emerald-50/80 border border-emerald-200 flex items-start gap-2">
                                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                                <div>
                                                   <p className="font-bold text-emerald-900 text-[11px]">ผลที่พบปัจจุบัน (Actual Result):</p>
                                                   <p className="text-emerald-800 text-[11px] mt-0.5">{bug.actualResult}</p>
                                                </div>
                                             </div>
                                             <div className="p-2.5 rounded-lg bg-rose-50/80 border border-rose-200 flex items-start gap-2">
                                                <AlertCircle className="h-3.5 w-3.5 text-rose-600 shrink-0 mt-0.5" />
                                                <div>
                                                   <p className="font-bold text-rose-900 text-[11px]">ผลที่ถูกต้องควรเป็น (Expected Result):</p>
                                                   <p className="text-rose-800 text-[11px] mt-0.5">{bug.expectedResult}</p>
                                                </div>
                                             </div>
                                          </div>

                                          {/* Root Cause */}
                                          <div className="p-2.5 rounded-lg bg-slate-100/80 border border-slate-200/80">
                                             <p className="font-bold text-slate-700 text-[11px] flex items-center gap-1.5">
                                                <Code2 className="h-3.5 w-3.5 text-slate-600" />
                                                <span>สาเหตุในโค้ด (Root Cause):</span>
                                             </p>
                                             <p className="text-slate-600 text-[11px] mt-1 leading-relaxed">{bug.rootCause}</p>
                                          </div>
                                       </div>
                                    </div>

                                    {/* Code Fix */}
                                    <div className="pt-2.5 border-t border-slate-200">
                                       <p className="font-bold text-slate-700 text-[10px] uppercase tracking-wider mb-1 flex items-center gap-1">
                                          <ShieldCheck className="h-3 w-3 text-emerald-600" />
                                          <span>แนวทางแก้ไข (Code Fix):</span>
                                       </p>
                                       <pre className="bg-slate-900 text-sky-300 p-2.5 rounded-lg text-[10px] font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed">{bug.codeFix}</pre>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  )}
               </div>

               {/* Bottom Copyright */}
               <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
                  <p>© 2569 Eldoria Expedition Registration Form. Built for Academic Assessment.</p>
               </div>
            </div>
         </footer>

         {/* Floating Back to Top Button */}
         {showScrollTop && (
            <button
               type="button"
               onClick={scrollToTop}
               className="scroll-to-top no-print fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white shadow-md transition-all duration-200 cursor-pointer animate-fade-up border border-sky-500 hover:scale-105 active:scale-95"
               title="เลื่อนกลับขึ้นด้านบนสุด (Scroll to Top)"
               aria-label="Back to top">
               <ArrowUp className="h-5 w-5" />
            </button>
         )}
      </>
   );
}
