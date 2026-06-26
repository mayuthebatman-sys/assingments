import React, { useState } from "react";
import { REPORT_SECTIONS } from "../data";
import { ReportSection } from "../types";
import { BookOpen, Clock, FileText, Award, ArrowRight, Copy, Check } from "lucide-react";

export default function ReportViewer() {
  const [activeTab, setActiveTab] = useState<string>("exec-summary");
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const currentSection = REPORT_SECTIONS.find((s) => s.id === activeTab) || REPORT_SECTIONS[0];

  const handleCopySection = (section: ReportSection) => {
    const textToCopy = `TITLE: ${section.title}\nLEARNING OUTCOME: ${section.learningOutcome}\n\n${section.content}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedSection(section.id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const renderFormattedContent = (content: string) => {
    return content.split("\n\n").map((block, idx) => {
      const trimmedBlock = block.trim();
      if (trimmedBlock.startsWith("###")) {
        return (
          <h3 key={idx} className="text-2xl font-black text-[#1A1A1A] tracking-tight italic mt-8 mb-4 border-b-2 border-[#1A1A1A] pb-2 serif-font">
            {trimmedBlock.replace("###", "").trim()}
          </h3>
        );
      }
      if (trimmedBlock.startsWith("####")) {
        return (
          <h4 key={idx} className="text-base font-bold text-[#C5A059] mt-6 mb-2 uppercase tracking-wider mono-font">
            {trimmedBlock.replace("####", "").trim()}
          </h4>
        );
      }
      if (trimmedBlock.startsWith("*") || trimmedBlock.startsWith("-")) {
        const items = trimmedBlock
          .split("\n")
          .map((item) => item.replace(/^[\*\-\s]+/, "").trim())
          .filter(Boolean);
        return (
          <ul key={idx} className="list-none pl-0 my-4 space-y-2 text-[#1A1A1A]">
            {items.map((li, lIdx) => (
              <li key={lIdx} className="flex items-start">
                <span className="text-[#C5A059] mr-2.5 font-bold">●</span>
                <span className="text-[14px] leading-relaxed">{li}</span>
              </li>
            ))}
          </ul>
        );
      }
      if (trimmedBlock.startsWith("|")) {
        // Render stylized retro table with thick borders
        const lines = trimmedBlock.split("\n").filter(Boolean);
        if (lines.length < 3) return null;
        const headers = lines[0]
          .split("|")
          .map((h) => h.trim())
          .filter((h) => h !== "");
        const rows = lines.slice(2).map((row) =>
          row
            .split("|")
            .map((c) => c.trim())
            .filter((c) => c !== "")
        );
        return (
          <div key={idx} className="overflow-x-auto my-6 border-2 border-[#1A1A1A] bg-white shadow-[4px_4px_0px_0px_#C5A059]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] text-white font-bold text-xs uppercase tracking-wider mono-font">
                  {headers.map((h, hIdx) => (
                    <th key={hIdx} className="p-3 border-r border-slate-700 last:border-r-0">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A1A1A] text-[#1A1A1A] text-xs leading-relaxed">
                {rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-[#F4F1EE] transition-colors">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="p-3 border-r border-[#1A1A1A] last:border-r-0 font-medium">
                        {cell.includes("**") ? (
                          <span>
                            <strong>{cell.split("**")[1]}</strong>
                            {cell.split("**")[2] || ""}
                          </span>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      // Check if text is a pull quote
      if (trimmedBlock.startsWith('"') || trimmedBlock.startsWith('“')) {
        return (
          <div key={idx} className="my-6 p-4 bg-[#E4E0D9] border-l-4 border-[#C5A059] italic text-sm text-[#1A1A1A] font-serif rounded-r-lg">
            {trimmedBlock}
          </div>
        );
      }
      return (
        <p key={idx} className="text-[#3E3E3E] leading-relaxed my-4 text-[15px]">
          {trimmedBlock}
        </p>
      );
    });
  };

  return (
    <div className="bg-white border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#C5A059] overflow-hidden" id="report-viewer-section">
      {/* Neo-brutalist Header */}
      <div className="bg-[#1A1A1A] p-6 text-white flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-[#1A1A1A]">
        <div>
          <div className="flex items-center gap-2 text-[#C5A059] text-xs font-bold tracking-[0.2em] uppercase mono-font">
            <Award className="w-4 h-4" /> COURSEWORK ASSIGNMENT LO1 &amp; LO2
          </div>
          <h2 className="text-3xl font-black tracking-tight mt-2 italic serif-font">
            LEADERSHIP <span className="text-[#C5A059]">&amp;</span> MANAGEMENT THEORY
          </h2>
          <p className="text-[#E4E0D9] text-xs mt-1 mono-font uppercase tracking-wider">
            Target Case: Kapruka Holdings PLC • Comparators: Daraz &amp; Lassana Flora
          </p>
        </div>
        <div className="flex items-center gap-3 bg-[#E4E0D9] text-[#1A1A1A] px-4 py-2 border border-[#1A1A1A] shadow-[3px_3px_0px_0px_#C5A059] self-start md:self-auto">
          <FileText className="w-5 h-5 text-[#C5A059]" />
          <div className="text-left">
            <div className="text-[10px] font-bold uppercase tracking-wider mono-font text-[#5E5E5E]">Report Length</div>
            <div className="text-sm font-black font-mono">2,200+ Words</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-4 bg-[#F4F1EE] p-5 border-r-2 border-[#1A1A1A] space-y-3">
          <div className="text-xs font-bold text-[#5E5E5E] tracking-[0.2em] uppercase px-2 mb-3 mono-font">
            Report Outline
          </div>
          <div className="space-y-2">
            {REPORT_SECTIONS.map((section) => {
              const isActive = activeTab === section.id;
              return (
                <button
                  key={section.id}
                  id={`report-tab-${section.id}`}
                  onClick={() => setActiveTab(section.id)}
                  className={`w-full text-left p-3.5 border-2 transition-all duration-150 flex items-start gap-3 ${
                    isActive
                      ? "bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-[4px_4px_0px_0px_#C5A059]"
                      : "bg-white text-[#1A1A1A] border-[#1A1A1A] hover:bg-[#E4E0D9]"
                  }`}
                >
                  <div
                    className={`p-1.5 border ${
                      isActive ? "bg-[#C5A059] text-[#1A1A1A] border-[#1A1A1A]" : "bg-[#F4F1EE] text-[#1A1A1A] border-[#1A1A1A]"
                    }`}
                  >
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-black tracking-tight">{section.title}</div>
                    <div className={`text-[11px] font-medium mt-0.5 truncate mono-font ${isActive ? "text-[#C5A059]" : "text-[#5E5E5E]"}`}>
                      {section.learningOutcome}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 p-4 bg-[#E4E0D9] border-2 border-[#1A1A1A] space-y-2 shadow-[3px_3px_0px_0px_#1A1A1A]">
            <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mono-font">Consultancy Scope</h4>
            <div className="space-y-1.5 text-xs text-[#3E3E3E]">
              <p><strong>Primary Client:</strong> Kapruka Holdings (Sri Lanka)</p>
              <p><strong>Problem State:</strong> Down-growth &amp; Centralization</p>
              <p><strong>Methodology:</strong> Comparative Empirical Review</p>
              <p><strong>Criteria Met:</strong> Distinction Tier (D1)</p>
            </div>
          </div>
        </div>

        {/* Content Viewer */}
        <div className="lg:col-span-8 p-6 md:p-8 flex flex-col justify-between min-h-[550px] bg-white">
          <div>
            {/* Header of Section */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b-2 border-dashed border-[#1A1A1A] pb-5 mb-6">
              <div>
                <span className="bg-[#E4E0D9] text-[#1A1A1A] text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 border border-[#1A1A1A] inline-block mono-font">
                  {currentSection.learningOutcome}
                </span>
                <h3 className="text-3xl font-black text-[#1A1A1A] tracking-tight italic mt-3 serif-font">{currentSection.title}</h3>
              </div>
              <div className="flex items-center gap-3 self-end sm:self-auto mt-2">
                <div className="flex items-center gap-1.5 text-xs text-[#5E5E5E] font-bold uppercase tracking-wider mono-font">
                  <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                  {currentSection.readingTime}
                </div>
                <button
                  onClick={() => handleCopySection(currentSection)}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#1A1A1A] hover:bg-[#C5A059] hover:text-white border-2 border-[#1A1A1A] px-3.5 py-1.5 bg-white shadow-[2px_2px_0px_0px_#1A1A1A] active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#1A1A1A] transition-all"
                  title="Copy this section text"
                >
                  {copiedSection === currentSection.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />
                      <span className="text-emerald-700 uppercase tracking-wider text-[11px] font-mono">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="uppercase tracking-wider text-[11px] font-mono">Copy Text</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Academic Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-6 bg-[#F4F1EE] p-3 border border-[#1A1A1A] rounded-md">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#5E5E5E] mono-font">Rubric Mapping:</span>
              <div className="flex flex-wrap gap-1.5">
                {currentSection.criteria.map((crit) => (
                  <span
                    key={crit}
                    className="bg-[#1A1A1A] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-sm uppercase tracking-wide mono-font"
                  >
                    {crit}
                  </span>
                ))}
              </div>
            </div>

            {/* Document Text */}
            <div className="prose prose-slate max-w-none animate-slide-in">
              {renderFormattedContent(currentSection.content)}
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="border-t-2 border-[#1A1A1A] pt-6 mt-8 flex flex-col sm:flex-row gap-4 justify-between items-center bg-[#F4F1EE]/30 -mx-6 md:-mx-8 -mb-6 md:-mb-8 p-6">
            <div className="text-xs font-bold text-[#5E5E5E] uppercase tracking-wider mono-font">
              Consultancy Portfolio • Section {REPORT_SECTIONS.indexOf(currentSection) + 1} of {REPORT_SECTIONS.length}
            </div>
            {REPORT_SECTIONS.indexOf(currentSection) < REPORT_SECTIONS.length - 1 ? (
              <button
                onClick={() => {
                  const nextIndex = REPORT_SECTIONS.indexOf(currentSection) + 1;
                  setActiveTab(REPORT_SECTIONS[nextIndex].id);
                  document.getElementById("report-viewer-section")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 text-xs font-bold text-white bg-[#1A1A1A] border-2 border-[#1A1A1A] px-4 py-2 hover:bg-[#C5A059] hover:border-[#C5A059] shadow-[3px_3px_0px_0px_#C5A059] hover:shadow-[3px_3px_0px_0px_#1A1A1A] transition-all"
              >
                <span>NEXT CHAPTER</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <span className="text-xs text-[#C5A059] font-bold uppercase tracking-widest mono-font">★ End of Document Portfolio ★</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
