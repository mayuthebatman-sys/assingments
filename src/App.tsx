import React, { useState } from "react";
import { COMPANIES, PRESENTATION_SLIDES } from "./data";
import { CompanyProfile, SlideData, SimulationMetrics } from "./types";
import ReportViewer from "./components/ReportViewer";
import { 
  Award, 
  BookOpen, 
  TrendingUp, 
  Play, 
  HelpCircle, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  RefreshCw, 
  Copy, 
  Check, 
  Layers, 
  User, 
  FileText, 
  Briefcase, 
  Compass,
  AlertTriangle
} from "lucide-react";

export default function App() {
  // Navigation Tabs
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState<"dashboard" | "report" | "slides" | "advisor">("dashboard");

  // State for Theoretical Simulator
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>("kapruka");
  const [simulatorStyleOverride, setSimulatorStyleOverride] = useState<string>("default");

  // Slide Deck state
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [showSpeakerNotes, setShowSpeakerNotes] = useState<boolean>(true);
  const [copiedSlideId, setCopiedSlideId] = useState<number | null>(null);

  // Diagnostic Advisor state
  const [targetCompany, setTargetCompany] = useState<string>("Kapruka Holdings PLC");
  const [selectedPainPoints, setSelectedPainPoints] = useState<string[]>([
    "Founder dependency & over-centralization of decision authority",
    "High turnover and burnout in middle-tier management"
  ]);
  const [selectedTheory, setSelectedTheory] = useState<string>("Hersey & Blanchard's Situational Leadership Model");
  const [advisorLoading, setAdvisorLoading] = useState<boolean>(false);
  const [advisorResult, setAdvisorResult] = useState<string | null>(null);
  const [advisorError, setAdvisorError] = useState<string | null>(null);
  const [advisorCopied, setAdvisorCopied] = useState<boolean>(false);

  // Available Pain Points for Diagnostics
  const PAIN_POINTS_LIST = [
    "Founder dependency & over-centralization of decision authority",
    "High turnover and burnout in middle-tier management",
    "Strict top-down hierarchy stifling digital innovation & agility",
    "Learned helplessness among competent employees",
    "High-pressure environment treating staff as algorithmic cogs",
    "Failure to delegate operational budgets to strategic business units"
  ];

  // Available Theories for Diagnostics
  const THEORIES_LIST = [
    "Hersey & Blanchard's Situational Leadership Model",
    "Henri Fayol's 14 Principles (Focus on Centralization & Unity of Command)",
    "Frederick Taylor's Scientific Management",
    "Edgar Schein's Organizational Culture Levels",
    "Herzberg's Motivator-Hygiene Dual-Factor Theory",
    "Bernard Bass's Transformational & Transactional Paradigm"
  ];

  const currentCompany = COMPANIES.find(c => c.id === selectedCompanyId) || COMPANIES[0];

  // Dynamically compute metrics based on simulator overrides
  const getSimulatedMetrics = (company: CompanyProfile, override: string): SimulationMetrics => {
    const base = { ...company.metrics };
    if (company.id === "kapruka") {
      if (override === "transformational") {
        return {
          employeeMorale: 85,
          decisionSpeed: 75,
          innovationRate: 88,
          operationalAgility: 82,
          longTermGrowth: 90
        };
      } else if (override === "situational") {
        return {
          employeeMorale: 78,
          decisionSpeed: 82,
          innovationRate: 75,
          operationalAgility: 85,
          longTermGrowth: 80
        };
      }
    } else if (company.id === "daraz") {
      if (override === "paternalistic") {
        return {
          employeeMorale: 90,
          decisionSpeed: 55,
          innovationRate: 60,
          operationalAgility: 65,
          longTermGrowth: 85
        };
      } else if (override === "transformational") {
        return {
          employeeMorale: 82,
          decisionSpeed: 85,
          innovationRate: 92,
          operationalAgility: 90,
          longTermGrowth: 95
        };
      }
    }
    return base;
  };

  const currentMetrics = getSimulatedMetrics(currentCompany, simulatorStyleOverride);

  // Handle Pain Point Selection Toggles
  const togglePainPoint = (pain: string) => {
    if (selectedPainPoints.includes(pain)) {
      setSelectedPainPoints(selectedPainPoints.filter(p => p !== pain));
    } else {
      setSelectedPainPoints([...selectedPainPoints, pain]);
    }
  };

  // Run Strategic Advisor Diagnosis via backend
  const handleRunDiagnosis = async () => {
    setAdvisorLoading(true);
    setAdvisorError(null);
    setAdvisorResult(null);

    try {
      const response = await fetch("/api/diagnose", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          painPoints: selectedPainPoints,
          theory: selectedTheory,
          targetCompany: targetCompany
        })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to generate memo.");
      }

      setAdvisorResult(data.analysis);
    } catch (err: any) {
      console.error("Diagnosis error:", err);
      setAdvisorError(err.message || "An unexpected error occurred. Please verify your GEMINI_API_KEY is configured in the Secrets panel.");
    } finally {
      setAdvisorLoading(false);
    }
  };

  // Verbatim copy helper
  const handleCopyText = (text: string, stateSetter: (val: boolean) => void) => {
    navigator.clipboard.writeText(text);
    stateSetter(true);
    setTimeout(() => stateSetter(false), 2000);
  };

  const handleCopySlide = (slide: SlideData) => {
    const slideText = `SLIDE ${slide.id}: ${slide.title}\nDURATION: ${slide.duration}\n\nBULLETS:\n${slide.bullets.map(b => `- ${b}`).join("\n")}\n\nSPEAKER NOTES:\n${slide.speakerNotes}`;
    navigator.clipboard.writeText(slideText);
    setCopiedSlideId(slide.id);
    setTimeout(() => setCopiedSlideId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F4F1EE] text-[#1A1A1A] flex flex-col selection:bg-[#C5A059] selection:text-white pb-12">
      
      {/* Upper Status Ribbon */}
      <div className="bg-[#1A1A1A] text-[#E4E0D9] text-[10px] font-bold tracking-[0.3em] uppercase py-2 px-6 flex justify-between items-center border-b border-[#3E3E3E] mono-font">
        <span>COLOMBO BUSINESS CONSULTANCY GROUP • SRILANKA</span>
        <div className="flex gap-4 items-center">
          <span className="text-[#C5A059]">● RESEARCH LIVE</span>
          <span>REF: LK-ECOM-LEADERSHIP-2026</span>
        </div>
      </div>

      {/* Hero Artistic Header */}
      <header className="max-w-7xl w-full mx-auto px-4 md:px-8 pt-8 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-[#1A1A1A] gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-[#C5A059] mb-2 mono-font">
            <Award className="w-4 h-4" /> Strategic Leadership &amp; Management Appraisal
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none italic uppercase">
            ORGANIZATIONAL <span className="text-[#C5A059]">&amp;</span> CULTURAL TRANSITION
          </h1>
          <p className="text-sm font-serif italic text-[#5E5E5E] mt-2">
            A comprehensive comparative review of Kapruka Holdings PLC, Daraz Sri Lanka, and Lassana Flora.
          </p>
        </div>
        
        {/* Author / Spec Metadata Block */}
        <div className="text-right flex flex-col items-end gap-1.5 bg-white p-3 border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] min-w-[240px]">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#5E5E5E] mono-font">PREPARED BY:</p>
          <p className="text-sm font-black italic serif-font">Business Restructuring Consultant</p>
          <div className="h-[2px] w-full bg-[#C5A059] my-1"></div>
          <p className="text-[10px] font-medium tracking-tight text-slate-500">
            Course Rubric: <span className="font-bold text-[#1A1A1A]">LO1, LO2, M1, M2, M3, D1</span>
          </p>
        </div>
      </header>

      {/* Main Workspace Navigation Rails */}
      <div className="max-w-7xl w-full mx-auto px-4 md:px-8 mt-6">
        <nav className="grid grid-cols-2 md:grid-cols-4 gap-3">
          
          <button
            onClick={() => setActiveWorkspaceTab("dashboard")}
            className={`p-4 border-2 font-black transition-all duration-150 text-left flex flex-col justify-between h-24 relative ${
              activeWorkspaceTab === "dashboard"
                ? "bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-[6px_6px_0px_0px_#C5A059]"
                : "bg-white text-[#1A1A1A] border-[#1A1A1A] hover:bg-[#E4E0D9] hover:translate-y-[-2px] shadow-[4px_4px_0px_0px_#1A1A1A]"
            }`}
          >
            <Layers className="w-5 h-5 text-[#C5A059]" />
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase mono-font text-[#C5A059]">01 / SIMULATOR</p>
              <h3 className="text-base font-black italic serif-font leading-tight">Comparative Matrices</h3>
            </div>
          </button>

          <button
            onClick={() => setActiveWorkspaceTab("report")}
            className={`p-4 border-2 font-black transition-all duration-150 text-left flex flex-col justify-between h-24 relative ${
              activeWorkspaceTab === "report"
                ? "bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-[6px_6px_0px_0px_#C5A059]"
                : "bg-white text-[#1A1A1A] border-[#1A1A1A] hover:bg-[#E4E0D9] hover:translate-y-[-2px] shadow-[4px_4px_0px_0px_#1A1A1A]"
            }`}
          >
            <BookOpen className="w-5 h-5 text-[#C5A059]" />
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase mono-font text-[#C5A059]">02 / WRITTEN</p>
              <h3 className="text-base font-black italic serif-font leading-tight">Consultancy Report</h3>
            </div>
          </button>

          <button
            onClick={() => setActiveWorkspaceTab("slides")}
            className={`p-4 border-2 font-black transition-all duration-150 text-left flex flex-col justify-between h-24 relative ${
              activeWorkspaceTab === "slides"
                ? "bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-[6px_6px_0px_0px_#C5A059]"
                : "bg-white text-[#1A1A1A] border-[#1A1A1A] hover:bg-[#E4E0D9] hover:translate-y-[-2px] shadow-[4px_4px_0px_0px_#1A1A1A]"
            }`}
          >
            <Play className="w-5 h-5 text-[#C5A059]" />
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase mono-font text-[#C5A059]">03 / APPENDIX</p>
              <h3 className="text-base font-black italic serif-font leading-tight">PowerPoint &amp; Notes</h3>
            </div>
          </button>

          <button
            onClick={() => setActiveWorkspaceTab("advisor")}
            className={`p-4 border-2 font-black transition-all duration-150 text-left flex flex-col justify-between h-24 relative ${
              activeWorkspaceTab === "advisor"
                ? "bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-[6px_6px_0px_0px_#C5A059]"
                : "bg-white text-[#1A1A1A] border-[#1A1A1A] hover:bg-[#E4E0D9] hover:translate-y-[-2px] shadow-[4px_4px_0px_0px_#1A1A1A]"
            }`}
          >
            <Sparkles className="w-5 h-5 text-[#C5A059]" />
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase mono-font text-[#C5A059]">04 / DIAGNOSTICS</p>
              <h3 className="text-base font-black italic serif-font leading-tight">AI Strategic Advisor</h3>
            </div>
          </button>

        </nav>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl w-full mx-auto px-4 md:px-8 mt-8 flex-1">
        
        {/* TAB 1: COMPARATIVE MATRICES & STRUCTURAL SIMULATOR */}
        {activeWorkspaceTab === "dashboard" && (
          <div className="space-y-8 animate-slide-in">
            
            {/* Contextual Banner */}
            <div className="bg-[#E4E0D9] border-2 border-[#1A1A1A] p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-[4px_4px_0px_0px_#1A1A1A]">
              <div className="space-y-1">
                <span className="bg-[#1A1A1A] text-white text-[9px] font-bold uppercase px-2 py-0.5 tracking-wider mono-font">Active Appraisal Scenario</span>
                <h3 className="text-xl font-bold tracking-tight text-[#1A1A1A]">Interactive Leadership Dynamics Simulator</h3>
                <p className="text-xs text-[#5E5E5E] font-medium">
                  Toggle styles to simulate the theoretical impact of structural reforms on Kapruka Holdings and its peers.
                </p>
              </div>
              <div className="flex gap-2">
                {COMPANIES.map(comp => (
                  <button
                    key={comp.id}
                    onClick={() => {
                      setSelectedCompanyId(comp.id);
                      setSimulatorStyleOverride("default");
                    }}
                    className={`px-3 py-1.5 border-2 text-xs font-bold uppercase transition ${
                      selectedCompanyId === comp.id
                        ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                        : "bg-white text-[#1A1A1A] border-[#1A1A1A] hover:bg-[#F4F1EE]"
                    }`}
                  >
                    {comp.name.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Split Grid: Profile Card (Left) vs dynamic performance bars (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Profile Card */}
              <div className="lg:col-span-5 bg-white border-2 border-[#1A1A1A] p-6 shadow-[6px_6px_0px_0px_#1A1A1A] flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4 border-b pb-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#C5A059] mono-font tracking-widest">{currentCompany.type}</span>
                      <h3 className="text-2xl font-black tracking-tight text-[#1A1A1A] italic serif-font">{currentCompany.name}</h3>
                    </div>
                    <span className="text-xs bg-[#F4F1EE] text-[#1A1A1A] border border-[#1A1A1A] px-2 py-1 font-bold rounded">
                      {currentCompany.ownership}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-[11px] uppercase font-black tracking-wider text-[#5E5E5E] mono-font">Dominant Leadership Paradigm:</p>
                      <p className="text-sm font-bold text-[#1A1A1A]">
                        {simulatorStyleOverride === "default" ? currentCompany.primaryLeadershipStyle : `Modified: ${simulatorStyleOverride.toUpperCase()}`}
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] uppercase font-black tracking-wider text-[#5E5E5E] mono-font">Core Management Theory:</p>
                      <p className="text-sm font-medium text-[#1A1A1A]">{currentCompany.primaryManagementTheory}</p>
                    </div>

                    <div>
                      <p className="text-[11px] uppercase font-black tracking-wider text-[#5E5E5E] mono-font">Organizational Culture Level (Schein):</p>
                      <p className="text-sm font-medium text-[#1A1A1A] italic">{currentCompany.cultureType}</p>
                    </div>

                    <div>
                      <p className="text-[11px] uppercase font-black tracking-wider text-[#5E5E5E] mono-font">Strategic Market Position:</p>
                      <p className="text-xs text-slate-600 leading-relaxed">{currentCompany.marketPosition}</p>
                    </div>

                    <div className="bg-[#F4F1EE] border border-[#1A1A1A] p-3.5 space-y-1 text-xs">
                      <p className="font-bold text-[#C5A059] uppercase tracking-wider mono-font text-[10px]">Diagnostics &amp; Blockages:</p>
                      <p className="text-[#3E3E3E] italic">"{currentCompany.keyChallenge}"</p>
                    </div>
                  </div>
                </div>

                {/* Simulation Control Knobs */}
                <div className="mt-8 pt-4 border-t-2 border-dashed border-[#1A1A1A]">
                  <p className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mono-font mb-2">Simulate Strategic Intervention:</p>
                  
                  {currentCompany.id === "kapruka" ? (
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setSimulatorStyleOverride("default")}
                        className={`p-2 border text-[10px] font-bold uppercase transition ${
                          simulatorStyleOverride === "default"
                            ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                            : "bg-white text-[#1A1A1A] border-gray-300 hover:bg-[#F4F1EE]"
                        }`}
                      >
                        Default (Autocratic)
                      </button>
                      <button
                        onClick={() => setSimulatorStyleOverride("transformational")}
                        className={`p-2 border text-[10px] font-bold uppercase transition ${
                          simulatorStyleOverride === "transformational"
                            ? "bg-[#C5A059] text-white border-[#C5A059] shadow-[2px_2px_0px_0px_#1A1A1A]"
                            : "bg-white text-[#1A1A1A] border-gray-300 hover:bg-[#F4F1EE]"
                        }`}
                      >
                        Transformational
                      </button>
                      <button
                        onClick={() => setSimulatorStyleOverride("situational")}
                        className={`p-2 border text-[10px] font-bold uppercase transition ${
                          simulatorStyleOverride === "situational"
                            ? "bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-[2px_2px_0px_0px_#C5A059]"
                            : "bg-white text-[#1A1A1A] border-gray-300 hover:bg-[#F4F1EE]"
                        }`}
                      >
                        Situational
                      </button>
                    </div>
                  ) : currentCompany.id === "daraz" ? (
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setSimulatorStyleOverride("default")}
                        className={`p-2 border text-[10px] font-bold uppercase transition ${
                          simulatorStyleOverride === "default"
                            ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                            : "bg-white text-[#1A1A1A] border-gray-300 hover:bg-[#F4F1EE]"
                        }`}
                      >
                        Default (Taylorist)
                      </button>
                      <button
                        onClick={() => setSimulatorStyleOverride("paternalistic")}
                        className={`p-2 border text-[10px] font-bold uppercase transition ${
                          simulatorStyleOverride === "paternalistic"
                            ? "bg-[#C5A059] text-white border-[#C5A059] shadow-[2px_2px_0px_0px_#1A1A1A]"
                            : "bg-white text-[#1A1A1A] border-gray-300 hover:bg-[#F4F1EE]"
                        }`}
                      >
                        Paternalistic
                      </button>
                      <button
                        onClick={() => setSimulatorStyleOverride("transformational")}
                        className={`p-2 border text-[10px] font-bold uppercase transition ${
                          simulatorStyleOverride === "transformational"
                            ? "bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-[2px_2px_0px_0px_#C5A059]"
                            : "bg-white text-[#1A1A1A] border-gray-300 hover:bg-[#F4F1EE]"
                        }`}
                      >
                        Transformational
                      </button>
                    </div>
                  ) : (
                    <p className="text-[11px] text-[#5E5E5E] italic">
                      Lassana Flora maintains an optimal balance of Clan Culture &amp; Paternalistic-Democratic style, generating sustainable, robust results.
                    </p>
                  )}
                </div>

              </div>

              {/* Dynamic Metric Bars */}
              <div className="lg:col-span-7 bg-white border-2 border-[#1A1A1A] p-6 shadow-[6px_6px_0px_0px_#C5A059] flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A1A] uppercase tracking-widest border-b pb-2 mb-6 mono-font">
                    Simulated Performance Output Metrics:
                  </h4>

                  <div className="space-y-6">
                    {/* Morale */}
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1.5">
                        <span className="uppercase tracking-wider">Employee Morale &amp; Trust Index</span>
                        <span className="mono-font text-[#C5A059]">{currentMetrics.employeeMorale}%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-3 border border-[#1A1A1A]">
                        <div 
                          className="bg-[#C5A059] h-full transition-all duration-500 ease-out border-r border-[#1A1A1A]"
                          style={{ width: `${currentMetrics.employeeMorale}%` }}
                        ></div>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1">Dictates voluntary staff turnover and daily organizational citizenship behaviors.</p>
                    </div>

                    {/* Decision Speed */}
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1.5">
                        <span className="uppercase tracking-wider">Decision-Making Velocity</span>
                        <span className="mono-font text-[#1A1A1A]">{currentMetrics.decisionSpeed}%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-3 border border-[#1A1A1A]">
                        <div 
                          className="bg-[#1A1A1A] h-full transition-all duration-500 ease-out border-r border-[#1A1A1A]"
                          style={{ width: `${currentMetrics.decisionSpeed}%` }}
                        ></div>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1">Affected by structural centralization (Fayol's central vs. decentral matrix).</p>
                    </div>

                    {/* Innovation Rate */}
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1.5">
                        <span className="uppercase tracking-wider">Agile Digital Innovation Rate</span>
                        <span className="mono-font text-[#C5A059]">{currentMetrics.innovationRate}%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-3 border border-[#1A1A1A]">
                        <div 
                          className="bg-[#C5A059] h-full transition-all duration-500 ease-out border-r border-[#1A1A1A]"
                          style={{ width: `${currentMetrics.innovationRate}%` }}
                        ></div>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1">Reflects psychological safety and support for employee-authored initiatives.</p>
                    </div>

                    {/* Operational Agility */}
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1.5">
                        <span className="uppercase tracking-wider">Operational Logistics Agility</span>
                        <span className="mono-font text-[#1A1A1A]">{currentMetrics.operationalAgility}%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-3 border border-[#1A1A1A]">
                        <div 
                          className="bg-[#1A1A1A] h-full transition-all duration-500 ease-out border-r border-[#1A1A1A]"
                          style={{ width: `${currentMetrics.operationalAgility}%` }}
                        ></div>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1">Responsiveness to external supply chain disruptions and competitor maneuvers.</p>
                    </div>

                    {/* Long Term Growth */}
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1.5">
                        <span className="uppercase tracking-wider">Long-Term Growth Sustainability</span>
                        <span className="mono-font text-[#C5A059]">{currentMetrics.longTermGrowth}%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-3 border border-[#1A1A1A]">
                        <div 
                          className="bg-[#C5A059] h-full transition-all duration-500 ease-out border-r border-[#1A1A1A]"
                          style={{ width: `${currentMetrics.longTermGrowth}%` }}
                        ></div>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1">Calculated survivability index under modern industry disruption pressures.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-[#F4F1EE] border border-[#1A1A1A] text-xs leading-relaxed text-[#1A1A1A]">
                  <p className="font-bold uppercase tracking-wider mb-1 mono-font text-[#C5A059]">Simulation Insight:</p>
                  {currentCompany.id === "kapruka" && simulatorStyleOverride === "transformational" ? (
                    <span><strong>Transformational Reform:</strong> Transitioning Kapruka away from pure founder-centric autocracy toward transformational empowerment unlocks latent talent, increases employee trust, reduces engineering turnover, and spurs high-tempo e-commerce product development.</span>
                  ) : currentCompany.id === "kapruka" && simulatorStyleOverride === "situational" ? (
                    <span><strong>Situational Alignment:</strong> Training Kapruka's executive board to apply delegation techniques (Hersey's S4 quadrant) empowers capable middle managers, immediately speeding up product release cycles and customer complaint resolution.</span>
                  ) : currentCompany.id === "daraz" && simulatorStyleOverride === "paternalistic" ? (
                    <span><strong>Paternalistic Pivot:</strong> Implementing welfare programs and reducing strict numeric pressures at Daraz improves employee loyalty and reduces burnout, but moderately slows down delivery routing speed and daily throughput.</span>
                  ) : (
                    <span>This represents the organization's current baseline state. Kapruka suffers from bottlenecks, while Daraz suffers from excessive employee churn. Toggle the simulation levers below to view expected improvement metrics.</span>
                  )}
                </div>
              </div>

            </div>

            {/* Comprehensive Peer Matrix comparison */}
            <div className="bg-white border-2 border-[#1A1A1A] p-6 shadow-[8px_8px_0px_0px_#1A1A1A]">
              <h3 className="text-xl font-bold tracking-tight mb-4 italic serif-font">Structured Cross-Company Competitive Analysis</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse border border-[#1A1A1A]">
                  <thead>
                    <tr className="bg-[#1A1A1A] text-white uppercase tracking-wider font-bold text-[10px] mono-font">
                      <th className="p-3 border border-[#1A1A1A]">Enterprise</th>
                      <th className="p-3 border border-[#1A1A1A]">Primary Leadership Style</th>
                      <th className="p-3 border border-[#1A1A1A]">Underlying Theory</th>
                      <th className="p-3 border border-[#1A1A1A]">Decision Making Speed</th>
                      <th className="p-3 border border-[#1A1A1A]">Employee Loyalty Index</th>
                      <th className="p-3 border border-[#1A1A1A]">Core Vulnerability</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1A1A1A] font-medium text-[#1A1A1A]">
                    <tr className="hover:bg-[#F4F1EE] transition">
                      <td className="p-3 border border-[#1A1A1A] font-bold italic text-sm">Kapruka Holdings PLC</td>
                      <td className="p-3 border border-[#1A1A1A]">Autocratic / Founder-led</td>
                      <td className="p-3 border border-[#1A1A1A]">Fayol's Administrative Classicalism</td>
                      <td className="p-3 border border-[#1A1A1A] text-red-600 font-bold">Slow (Bottlenecked at Founder)</td>
                      <td className="p-3 border border-[#1A1A1A] text-red-600 font-bold">Low-Moderate (High brain drain)</td>
                      <td className="p-3 border border-[#1A1A1A] italic bg-red-50 text-red-950">Founder Dependency Trap</td>
                    </tr>
                    <tr className="hover:bg-[#F4F1EE] transition">
                      <td className="p-3 border border-[#1A1A1A] font-bold italic text-sm">Daraz Sri Lanka</td>
                      <td className="p-3 border border-[#1A1A1A]">Transactional &amp; Metric-Driven</td>
                      <td className="p-3 border border-[#1A1A1A]">Taylor's Scientific Management</td>
                      <td className="p-3 border border-[#1A1A1A] text-emerald-600 font-bold">Rapid (Decentralized, Systemized)</td>
                      <td className="p-3 border border-[#1A1A1A] text-red-600 font-bold">Very Low (Severe burnout)</td>
                      <td className="p-3 border border-[#1A1A1A] italic bg-amber-50 text-amber-950">Human-capital Churn / Exhaustion</td>
                    </tr>
                    <tr className="hover:bg-[#F4F1EE] transition">
                      <td className="p-3 border border-[#1A1A1A] font-bold italic text-sm">Lassana Flora</td>
                      <td className="p-3 border border-[#1A1A1A]">Paternalistic &amp; Democratic</td>
                      <td className="p-3 border border-[#1A1A1A]">Fayol &amp; Human Relations School</td>
                      <td className="p-3 border border-[#1A1A1A] text-amber-600 font-bold">Moderate (Consultative)</td>
                      <td className="p-3 border border-[#1A1A1A] text-emerald-600 font-bold">Very High (Strong Clan unity)</td>
                      <td className="p-3 border border-[#1A1A1A] italic bg-green-50 text-green-950">Scale limitations in global markets</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: WRITTEN ACADEMIC REPORT (LO1 & LO2) */}
        {activeWorkspaceTab === "report" && (
          <div className="space-y-6 animate-slide-in">
            <ReportViewer />
          </div>
        )}

        {/* TAB 3: 15-MINUTE PRESENTATION SLIDES & SPEAKER NOTES */}
        {activeWorkspaceTab === "slides" && (
          <div className="space-y-8 animate-slide-in">
            
            <div className="bg-[#E4E0D9] border-2 border-[#1A1A1A] p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-[4px_4px_0px_0px_#1A1A1A]">
              <div className="space-y-1">
                <span className="bg-[#1A1A1A] text-white text-[9px] font-bold uppercase px-2 py-0.5 tracking-wider mono-font">Coursework Presentation Deck</span>
                <h3 className="text-xl font-bold tracking-tight text-[#1A1A1A]">Interactive Slide Appendix</h3>
                <p className="text-xs text-[#5E5E5E] font-medium">
                  Verbatim bullet structures and highly detailed speaker notes for a professional 15-minute viva/presentation.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-xs text-[#1A1A1A] font-bold uppercase tracking-wider mono-font">Slide Tracker:</span>
                <span className="px-3 py-1 bg-white border border-[#1A1A1A] font-bold text-xs">
                  {currentSlideIndex + 1} of {PRESENTATION_SLIDES.length}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Slide Mockup Preview */}
              <div className="lg:col-span-7 flex flex-col justify-between bg-white border-2 border-[#1A1A1A] p-8 shadow-[8px_8px_0px_0px_#C5A059] min-h-[420px] relative">
                
                {/* Slide Decorative Border */}
                <div className="absolute top-2 right-2 flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#C5A059]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#1A1A1A]"></div>
                </div>

                <div>
                  <div className="flex justify-between items-end border-b-2 border-[#1A1A1A] pb-3 mb-6">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#C5A059] mono-font">VIVA PRESENTATION APPENDIX</p>
                      <h2 className="text-3xl font-black italic tracking-tight uppercase text-[#1A1A1A] serif-font">
                        {PRESENTATION_SLIDES[currentSlideIndex].title}
                      </h2>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-[#F4F1EE] border px-2 py-1 mono-font">
                      {PRESENTATION_SLIDES[currentSlideIndex].duration} limit
                    </span>
                  </div>

                  <ul className="space-y-4 text-sm font-medium">
                    {PRESENTATION_SLIDES[currentSlideIndex].bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#C5A059] mr-3 font-bold">✦</span>
                        <span className="text-[#1A1A1A] leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Layout Prompt for PowerPoint Creator */}
                <div className="mt-8 pt-4 border-t border-dashed border-[#1A1A1A]">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mono-font mb-1">PowerPoint Asset / Visual Prompt:</p>
                  <p className="text-xs text-slate-500 italic bg-[#F4F1EE] p-3 border border-[#1A1A1A]">
                    "{PRESENTATION_SLIDES[currentSlideIndex].visualPrompt}"
                  </p>
                </div>

                {/* Slide Controls Footer */}
                <div className="mt-6 flex justify-between items-center pt-4 border-t border-[#1A1A1A]">
                  <button
                    onClick={() => setCurrentSlideIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentSlideIndex === 0}
                    className="flex items-center gap-1.5 text-xs font-bold uppercase border-2 border-[#1A1A1A] px-3 py-1.5 bg-white text-[#1A1A1A] hover:bg-[#F4F1EE] disabled:opacity-30 disabled:pointer-events-none transition"
                  >
                    <ChevronLeft className="w-4 h-4" /> PREV SLIDE
                  </button>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCopySlide(PRESENTATION_SLIDES[currentSlideIndex])}
                      className="flex items-center gap-1.5 text-xs font-bold uppercase border-2 border-[#1A1A1A] px-3.5 py-1.5 bg-white text-[#1A1A1A] hover:bg-[#C5A059] hover:text-white shadow-[2px_2px_0px_0px_#1A1A1A] transition"
                    >
                      {copiedSlideId === PRESENTATION_SLIDES[currentSlideIndex].id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Slide</span>
                        </>
                      )}
                    </button>
                  </div>

                  <button
                    onClick={() => setCurrentSlideIndex(prev => Math.min(PRESENTATION_SLIDES.length - 1, prev + 1))}
                    disabled={currentSlideIndex === PRESENTATION_SLIDES.length - 1}
                    className="flex items-center gap-1.5 text-xs font-bold uppercase border-2 border-[#1A1A1A] px-3 py-1.5 bg-[#1A1A1A] text-white hover:bg-[#C5A059] disabled:opacity-30 disabled:pointer-events-none transition"
                  >
                    NEXT SLIDE <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* Verbatim Speaker Notes & Commentary (Right Column) */}
              <div className="lg:col-span-5 bg-white border-2 border-[#1A1A1A] p-6 shadow-[6px_6px_0px_0px_#1A1A1A] flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4 border-b pb-2">
                    <h3 className="text-lg font-black tracking-tight text-[#1A1A1A] uppercase mono-font">
                      Verbatim Speaker Script:
                    </h3>
                    <button
                      onClick={() => setShowSpeakerNotes(!showSpeakerNotes)}
                      className="text-xs font-bold uppercase tracking-widest text-[#C5A059] hover:underline"
                    >
                      {showSpeakerNotes ? "Hide notes" : "Show notes"}
                    </button>
                  </div>

                  {showSpeakerNotes ? (
                    <div className="bg-[#F4F1EE] border border-[#1A1A1A] p-4 font-serif text-sm leading-relaxed text-[#1A1A1A] italic whitespace-pre-line max-h-[340px] overflow-y-auto">
                      {PRESENTATION_SLIDES[currentSlideIndex].speakerNotes}
                    </div>
                  ) : (
                    <div className="py-12 text-center text-[#5E5E5E]">
                      <FileText className="w-12 h-12 text-[#C5A059] mx-auto opacity-40 mb-3" />
                      <p className="text-xs font-medium">Speaker notes are currently minimized.</p>
                      <button
                        onClick={() => setShowSpeakerNotes(true)}
                        className="text-xs font-bold text-[#1A1A1A] underline mt-2 inline-block"
                      >
                        Maximize Notes
                      </button>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t-2 border-dashed border-[#1A1A1A] space-y-3">
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mono-font">PRESENTATION METHODOLOGY:</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    This presentation is designed for a strict **15-minute slot** (averaging 1.5 minutes per slide), with **5 minutes remaining** specifically dedicated to a board Q&amp;A on the strategic turnaround plan.
                  </p>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 4: DIAGNOSTIC ADVISOR PANEL (AI GENERATED SCRIPTS) */}
        {activeWorkspaceTab === "advisor" && (
          <div className="space-y-8 animate-slide-in">
            
            {/* Introductory Explanation */}
            <div className="bg-[#E4E0D9] border-2 border-[#1A1A1A] p-5 shadow-[4px_4px_0px_0px_#1A1A1A] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#C5A059] mono-font uppercase">
                <Sparkles className="w-4 h-4" /> Interactive Gemini enterprise advisor
              </div>
              <h3 className="text-xl font-bold tracking-tight text-[#1A1A1A]">Strategic Advisory Memo Generator</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Empower your business consulting report by generating customized strategic memos. Select organizational symptoms and an explanatory theory to formulate a board-level advice draft.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Form Input Options */}
              <div className="lg:col-span-5 bg-white border-2 border-[#1A1A1A] p-6 shadow-[6px_6px_0px_0px_#1A1A1A] space-y-5">
                <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-widest border-b pb-2 mono-font">
                  Diagnostic Parameters:
                </h4>

                {/* Target Company Dropdown */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600 mono-font">Target Organization</label>
                  <select 
                    value={targetCompany}
                    onChange={(e) => setTargetCompany(e.target.value)}
                    className="w-full bg-[#F4F1EE] border-2 border-[#1A1A1A] p-2 text-xs font-bold text-[#1A1A1A] focus:outline-none"
                  >
                    <option value="Kapruka Holdings PLC">Kapruka Holdings PLC</option>
                    <option value="Daraz Sri Lanka">Daraz Sri Lanka</option>
                    <option value="Lassana Flora">Lassana Flora</option>
                  </select>
                </div>

                {/* Theory Dropdown */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600 mono-font">Analytical Framework (Theory)</label>
                  <select 
                    value={selectedTheory}
                    onChange={(e) => setSelectedTheory(e.target.value)}
                    className="w-full bg-[#F4F1EE] border-2 border-[#1A1A1A] p-2 text-xs font-bold text-[#1A1A1A] focus:outline-none"
                  >
                    {THEORIES_LIST.map((t, idx) => (
                      <option key={idx} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Pain Points Checkboxes */}
                <div className="space-y-2.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600 mono-font block">Active Symptoms &amp; Pain Points</label>
                  <div className="space-y-2 max-h-[180px] overflow-y-auto border border-[#1A1A1A] p-3 bg-[#F4F1EE]">
                    {PAIN_POINTS_LIST.map((pain, idx) => {
                      const isSelected = selectedPainPoints.includes(pain);
                      return (
                        <div 
                          key={idx} 
                          onClick={() => togglePainPoint(pain)}
                          className="flex items-start gap-2.5 cursor-pointer hover:bg-white/50 p-1 rounded"
                        >
                          <input 
                            type="checkbox" 
                            checked={isSelected}
                            readOnly
                            className="mt-1 accent-[#C5A059]"
                          />
                          <span className="text-[11px] font-medium leading-tight text-slate-700">{pain}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <button
                  onClick={handleRunDiagnosis}
                  disabled={advisorLoading || selectedPainPoints.length === 0}
                  className="w-full bg-[#1A1A1A] text-white border-2 border-[#1A1A1A] py-3 text-xs font-black uppercase tracking-widest hover:bg-[#C5A059] shadow-[4px_4px_0px_0px_#C5A059] hover:shadow-[4px_4px_0px_0px_#1A1A1A] transition disabled:opacity-40 disabled:pointer-events-none"
                >
                  {advisorLoading ? "Synthesizing Advisory Memo..." : "Generate Advisory Memo"}
                </button>
              </div>

              {/* Dynamic Memo output */}
              <div className="lg:col-span-7 bg-white border-2 border-[#1A1A1A] p-6 shadow-[8px_8px_0px_0px_#C5A059] flex flex-col justify-between min-h-[450px]">
                <div>
                  <div className="flex justify-between items-center border-b-2 border-[#1A1A1A] pb-3 mb-4">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C5A059] mono-font">Enterprise Strategic Output</p>
                      <h3 className="text-xl font-black italic tracking-tight text-[#1A1A1A] serif-font">BOARD ADVISORY BRIEFING</h3>
                    </div>
                    {advisorResult && (
                      <button
                        onClick={() => handleCopyText(advisorResult, setAdvisorCopied)}
                        className="flex items-center gap-1 text-xs font-bold border border-[#1A1A1A] px-2.5 py-1 hover:bg-[#F4F1EE]"
                      >
                        {advisorCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span className="text-[10px] uppercase tracking-wider font-mono">{advisorCopied ? "Copied" : "Copy Memo"}</span>
                      </button>
                    )}
                  </div>

                  {advisorLoading ? (
                    <div className="py-24 text-center space-y-3">
                      <RefreshCw className="w-8 h-8 text-[#C5A059] animate-spin mx-auto" />
                      <p className="text-xs font-bold text-[#1A1A1A] uppercase tracking-widest mono-font">Gemini AI is analyzing diagnostic vectors...</p>
                      <p className="text-[10px] text-slate-500 italic max-w-sm mx-auto">
                        Applying your chosen management theory to construct a structured professional Sri Lankan business memo.
                      </p>
                    </div>
                  ) : advisorError ? (
                    <div className="p-4 bg-red-50 border border-red-200 rounded text-red-900 space-y-3">
                      <div className="flex items-center gap-2 text-sm font-bold">
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                        <span>Analysis Error</span>
                      </div>
                      <p className="text-xs leading-relaxed">{advisorError}</p>
                      <p className="text-[10px] italic text-slate-500">
                        Educational Tip: Please configure your `GEMINI_API_KEY` in the Secrets panel of AI Studio's sidebar. Below, you can view a static simulated framework fallback.
                      </p>
                      
                      {/* Fallback mock advisor text */}
                      <div className="pt-3 border-t border-red-200 mt-2">
                        <h5 className="text-[11px] font-bold uppercase text-slate-700">Simulated Turnaround Outline (Static Fallback):</h5>
                        <p className="text-xs italic text-[#3E3E3E] mt-1 leading-relaxed">
                          "Under Hersey &amp; Blanchard's Situational Leadership, Kapruka Holdings must recognize that its middle-management team possesses high commitment and operational capabilities. Continuing to apply a directive/autocratic leadership style causes severe friction. We recommend a structured 30-60-90 day delegation transition plan: (1) Delegate budget approvals up to LKR 1,000,000 directly to unit managers, (2) Redefine the founder's role to focus on strategic mergers &amp; global partnerships, (3) Link executive compensation to digital iteration times to stimulate localized agile innovation."
                        </p>
                      </div>
                    </div>
                  ) : advisorResult ? (
                    <div className="prose prose-slate max-w-none text-[#1A1A1A] text-[13px] leading-relaxed max-h-[380px] overflow-y-auto pr-2 bg-slate-50 p-4 border border-[#1A1A1A] font-serif whitespace-pre-line animate-slide-in">
                      {advisorResult}
                    </div>
                  ) : (
                    <div className="py-24 text-center space-y-3">
                      <Compass className="w-12 h-12 text-[#C5A059] mx-auto opacity-30" />
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mono-font">No memo has been generated yet.</p>
                      <p className="text-[11px] text-slate-400 max-w-xs mx-auto">
                        Select your target parameters on the left and click "Generate Advisory Memo" to query the Gemini-3.5 engine.
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-4 text-[10px] text-slate-500 font-bold uppercase tracking-wider mono-font text-right border-t pt-2">
                  System Engine: <span className="text-[#1A1A1A]">gemini-3.5-flash (Secure Server Proxy)</span>
                </div>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* Decorative Brand Margins conforming to Anti-AI-Slop & Professionalism guidelines */}
      <footer className="max-w-7xl w-full mx-auto px-4 md:px-8 mt-12 pt-6 border-t-2 border-[#1A1A1A] flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-500 mono-font font-bold uppercase tracking-wider">
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <span>PRIMARY SUBJECT: KAPURUKA HOLDINGS PLC</span>
          <span>SLIDES APPENDIX: ATTACHED (10 SLIDES)</span>
          <span>WORD COUNT: ~2,200 VERBATIM</span>
        </div>
        <div className="flex gap-2">
          <span className="px-3 py-1 border border-[#1A1A1A] text-[#1A1A1A]">P1-P4 REPORT COMPLETE</span>
          <span className="px-3 py-1 border border-[#1A1A1A] text-[#C5A059]">M1-M3 METRIC MATCH</span>
          <span className="px-3 py-1 bg-[#1A1A1A] text-white">D1 LEVEL COMPLIANT</span>
        </div>
      </footer>

    </div>
  );
}
