// SarkariAI Central Recruitment & Exam Database
// Fast, lightweight, zero dependencies

const SARKARI_DATA = {
  trending: [
    {
      id: "ssc-cgl-2026",
      title: "SSC CGL 2026 Recruitment",
      subtitle: "Combined Graduate Level Exam",
      vacancies: "17,727 Posts",
      qualification: "Graduate",
      category: "Graduate",
      badge: "Apply Online",
      badgeColor: "bg-emerald-500",
      gradient: "from-blue-600 to-indigo-700",
      lastDate: "24-Jul-2026",
      urgentText: "Ends in 4 Days",
      icon: "graduation-cap",
      link: "post-template.html?post=ssc-cgl-2026"
    },
    {
      id: "rrb-ntpc-2026",
      title: "Railway RRB NTPC 2026",
      subtitle: "Non-Technical Popular Categories",
      vacancies: "11,558 Posts",
      qualification: "12th / Graduate",
      category: "12th Pass",
      badge: "City Slip Live",
      badgeColor: "bg-amber-500",
      gradient: "from-emerald-600 to-teal-800",
      lastDate: "18-Aug-2026",
      urgentText: "Exam City Intimation",
      icon: "train",
      link: "post-template.html?post=rrb-ntpc-2026"
    },
    {
      id: "up-police-si-2026",
      title: "UP Police Sub Inspector SI",
      subtitle: "Civil Police & Platoon Commander",
      vacancies: "4,210 Posts",
      qualification: "Police / Defense",
      category: "Police / Defense",
      badge: "PST / PET Dates",
      badgeColor: "bg-rose-500",
      gradient: "from-orange-600 to-red-700",
      lastDate: "30-Jul-2026",
      urgentText: "Physical Standards Live",
      icon: "shield",
      link: "post-template.html?post=up-police-si-2026"
    },
    {
      id: "ibps-po-2026",
      title: "IBPS Bank PO / MT XIV",
      subtitle: "Probationary Officer 11 Banks",
      vacancies: "4,455 Posts",
      qualification: "Graduate",
      category: "Graduate",
      badge: "Mains Scorecard",
      badgeColor: "bg-purple-500",
      gradient: "from-purple-600 to-indigo-800",
      lastDate: "12-Aug-2026",
      urgentText: "Result Declared",
      icon: "landmark",
      link: "post-template.html?post=ibps-po-2026"
    },
    {
      id: "ssc-gd-constable",
      title: "SSC GD Constable 2026",
      subtitle: "BSF, CISF, CRPF, ITBP, SSB",
      vacancies: "39,481 Posts",
      qualification: "10th Pass",
      category: "10th Pass",
      badge: "Answer Key Out",
      badgeColor: "bg-cyan-500",
      gradient: "from-rose-600 to-pink-700",
      lastDate: "15-Aug-2026",
      urgentText: "Objection Window Open",
      icon: "crosshair",
      link: "post-template.html?post=ssc-gd-constable"
    },
    {
      id: "upsc-cse-2026",
      title: "UPSC Civil Services (IAS)",
      subtitle: "Indian Administrative Service",
      vacancies: "1,056 Posts",
      qualification: "Graduate",
      category: "Graduate",
      badge: "Final Marks Out",
      badgeColor: "bg-blue-500",
      gradient: "from-slate-700 to-slate-900",
      lastDate: "05-Sep-2026",
      urgentText: "Cutoff Analysis",
      icon: "award",
      link: "post-template.html?post=upsc-cse-2026"
    },
    {
      id: "airforce-agniveer-2026",
      title: "Airforce Agniveer Vayu 01/2026",
      subtitle: "Indian Air Force Intake",
      vacancies: "3,500+ Posts",
      qualification: "12th Pass",
      category: "12th Pass",
      badge: "Form Open",
      badgeColor: "bg-emerald-500",
      gradient: "from-sky-600 to-blue-800",
      lastDate: "28-Jul-2026",
      urgentText: "Male & Female Both",
      icon: "plane",
      link: "post-template.html?post=airforce-agniveer-2026"
    },
    {
      id: "bpsc-tre-teaching",
      title: "BPSC Teacher TRE 4.0",
      subtitle: "Primary, TGT, PGT Teachers",
      vacancies: "87,000+ Posts",
      qualification: "Teaching",
      category: "Teaching",
      badge: "New Vacancy",
      badgeColor: "bg-green-500",
      gradient: "from-emerald-700 to-teal-900",
      lastDate: "10-Aug-2026",
      urgentText: "B.Ed / D.El.Ed Special",
      icon: "book-open",
      link: "post-template.html?post=bpsc-tre-teaching"
    }
  ],

  results: [
    {
      id: "res-1",
      title: "SSC CGL 2025 Final Result & Department Allocation",
      date: "25-Jul-2026",
      badge: "Final Merit List",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      qualification: "Graduate",
      link: "post-template.html?post=ssc-cgl-2026"
    },
    {
      id: "res-2",
      title: "UPSC Civil Services IAS 2025 Reserve List Marks",
      date: "24-Jul-2026",
      badge: "Cutoff Released",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
      qualification: "Graduate",
      link: "post-template.html?post=upsc-cse-2026"
    },
    {
      id: "res-3",
      title: "IBPS RRB Officer Scale I & Office Assistant Mains Scorecard",
      date: "23-Jul-2026",
      badge: "Scorecard Out",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
      qualification: "Graduate",
      link: "post-template.html?post=ibps-po-2026"
    },
    {
      id: "res-4",
      title: "UP Police Constable 60,244 Posts Written Exam Final Result",
      date: "22-Jul-2026",
      badge: "Normalized Score",
      badgeColor: "bg-red-100 text-red-800 border-red-300",
      qualification: "Police / Defense",
      link: "post-template.html?post=up-police-si-2026"
    },
    {
      id: "res-5",
      title: "Railway RRB ALP Stage-1 CBT Score & Shortlist for CBT-2",
      date: "21-Jul-2026",
      badge: "CBT-1 Qualified",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
      qualification: "B.Tech / Engineering",
      link: "post-template.html?post=rrb-ntpc-2026"
    },
    {
      id: "res-6",
      title: "CTET July 2026 Marksheet & Digital Certificate on DigiLocker",
      date: "20-Jul-2026",
      badge: "Certificate Out",
      badgeColor: "bg-teal-100 text-teal-800 border-teal-300",
      qualification: "Teaching",
      link: "post-template.html?post=bpsc-tre-teaching"
    },
    {
      id: "res-7",
      title: "NTA NEET UG 2026 Revised Merit List & AIQ Rank Card",
      date: "19-Jul-2026",
      badge: "Rank Card",
      badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-300",
      qualification: "12th Pass",
      link: "post-template.html?post=ssc-cgl-2026"
    },
    {
      id: "res-8",
      title: "SBI Junior Associate (Clerk) Prelims 2026 Declared",
      date: "18-Jul-2026",
      badge: "Direct Link",
      badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-300",
      qualification: "Graduate",
      link: "post-template.html?post=ibps-po-2026"
    }
  ],

  admitCards: [
    {
      id: "adm-1",
      title: "SSC CGL 2026 Tier-I Exam City Intimation & Date Slip",
      date: "25-Jul-2026",
      badge: "Exam City Live",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
      qualification: "Graduate",
      link: "post-template.html?post=ssc-cgl-2026"
    },
    {
      id: "adm-2",
      title: "Railway RRB NTPC Non-Technical CBT-1 Call Letter",
      date: "24-Jul-2026",
      badge: "Hall Ticket",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
      qualification: "12th Pass",
      link: "post-template.html?post=rrb-ntpc-2026"
    },
    {
      id: "adm-3",
      title: "UP Police SI & ASI Document Verification & PST Admit Card",
      date: "23-Jul-2026",
      badge: "PET / PST Slip",
      badgeColor: "bg-rose-100 text-rose-800 border-rose-300",
      qualification: "Police / Defense",
      link: "post-template.html?post=up-police-si-2026"
    },
    {
      id: "adm-4",
      title: "UPSC CDS II & NDA II 2026 E-Admit Card Download",
      date: "22-Jul-2026",
      badge: "Available Now",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
      qualification: "12th Pass",
      link: "post-template.html?post=upsc-cse-2026"
    },
    {
      id: "adm-5",
      title: "IBPS Clerk XIV Preliminary Online Exam Call Letter",
      date: "21-Jul-2026",
      badge: "Live Link",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      qualification: "Graduate",
      link: "post-template.html?post=ibps-po-2026"
    },
    {
      id: "adm-6",
      title: "Indian Airforce Agniveer Vayu Phase-I Hall Ticket",
      date: "20-Jul-2026",
      badge: "Shift & Venue",
      badgeColor: "bg-sky-100 text-sky-800 border-sky-300",
      qualification: "12th Pass",
      link: "post-template.html?post=airforce-agniveer-2026"
    },
    {
      id: "adm-7",
      title: "BPSC Headmaster & Teacher TRE 3.0 Re-Exam Admit Card",
      date: "19-Jul-2026",
      badge: "Roll No Wise",
      badgeColor: "bg-green-100 text-green-800 border-green-300",
      qualification: "Teaching",
      link: "post-template.html?post=bpsc-tre-teaching"
    },
    {
      id: "adm-8",
      title: "SSC CHSL 10+2 Tier-II Descriptive Paper Hall Ticket",
      date: "18-Jul-2026",
      badge: "Tier-2 Ticket",
      badgeColor: "bg-red-100 text-red-800 border-red-300",
      qualification: "12th Pass",
      link: "post-template.html?post=ssc-cgl-2026"
    }
  ],

  latestJobs: [
    {
      id: "job-1",
      title: "SSC Combined Graduate Level (CGL) 2026 Online Form",
      vacancies: "17,727 Posts",
      lastDate: "24-Jul-2026",
      countdown: "4 Days Left",
      badge: "Apply Online",
      badgeColor: "bg-emerald-600 text-white",
      qualification: "Graduate",
      link: "post-template.html?post=ssc-cgl-2026"
    },
    {
      id: "job-2",
      title: "UP Police Sub Inspector (SI) & Platoon Commander 2026",
      vacancies: "4,210 Posts",
      lastDate: "30-Jul-2026",
      countdown: "10 Days Left",
      badge: "High Salary",
      badgeColor: "bg-rose-600 text-white",
      qualification: "Police / Defense",
      link: "post-template.html?post=up-police-si-2026"
    },
    {
      id: "job-3",
      title: "Railway RRB NTPC Graduate & Undergraduate Recruitment",
      vacancies: "11,558 Posts",
      lastDate: "18-Aug-2026",
      countdown: "New Notice",
      badge: "Central Govt",
      badgeColor: "bg-blue-600 text-white",
      qualification: "12th Pass",
      link: "post-template.html?post=rrb-ntpc-2026"
    },
    {
      id: "job-4",
      title: "IBPS Probationary Officer (PO / MT) XIV Application Form",
      vacancies: "4,455 Posts",
      lastDate: "12-Aug-2026",
      countdown: "Banking Job",
      badge: "11 Banks",
      badgeColor: "bg-purple-600 text-white",
      qualification: "Graduate",
      link: "post-template.html?post=ibps-po-2026"
    },
    {
      id: "job-5",
      title: "SSC GD Constable in CAPFs, NIA, SSF & Assam Rifles",
      vacancies: "39,481 Posts",
      lastDate: "15-Aug-2026",
      countdown: "Mega Drive",
      badge: "10th Pass",
      badgeColor: "bg-amber-600 text-white",
      qualification: "10th Pass",
      link: "post-template.html?post=ssc-gd-constable"
    },
    {
      id: "job-6",
      title: "BPSC Bihar Teacher Recruitment (TRE 4.0) Shikshak Bharti",
      vacancies: "87,000+ Posts",
      lastDate: "10-Aug-2026",
      countdown: "State Quota",
      badge: "Teaching",
      badgeColor: "bg-teal-600 text-white",
      qualification: "Teaching",
      link: "post-template.html?post=bpsc-tre-teaching"
    },
    {
      id: "job-7",
      title: "Indian Army Technical Graduate Course (TGC-141) Jan 2027",
      vacancies: "30 Posts",
      lastDate: "08-Aug-2026",
      countdown: "B.Tech Required",
      badge: "Engineering",
      badgeColor: "bg-indigo-600 text-white",
      qualification: "B.Tech / Engineering",
      link: "post-template.html?post=ssc-cgl-2026"
    },
    {
      id: "job-8",
      title: "India Post GDS Gramin Dak Sevak 44,228 Posts",
      vacancies: "44,228 Posts",
      lastDate: "05-Aug-2026",
      countdown: "Direct Merit",
      badge: "No Exam",
      badgeColor: "bg-green-700 text-white",
      qualification: "10th Pass",
      link: "post-template.html?post=ssc-cgl-2026"
    }
  ],

  answerKeys: [
    {
      title: "SSC GD Constable 2026 Final Answer Key & Question Paper PDF",
      date: "24-Jul-2026",
      badge: "Final Key",
      qualification: "10th Pass",
      link: "post-template.html?post=ssc-gd-constable"
    },
    {
      title: "UPSC CDS II 2026 Unofficial Answer Key with Expert Solutions",
      date: "23-Jul-2026",
      badge: "Set A, B, C, D",
      qualification: "Graduate",
      link: "post-template.html?post=upsc-cse-2026"
    },
    {
      title: "CTET July 2026 Provisional Key & Candidate Objection Link",
      date: "21-Jul-2026",
      badge: "Challenge Active",
      qualification: "Teaching",
      link: "post-template.html?post=bpsc-tre-teaching"
    },
    {
      title: "NTA UGC NET June 2026 Answer Key & Recorded Responses",
      date: "19-Jul-2026",
      badge: "Subject Wise",
      qualification: "Graduate",
      link: "post-template.html?post=ssc-cgl-2026"
    }
  ],

  syllabus: [
    {
      title: "SSC CGL 2026 Tier 1 & Tier 2 Detailed Syllabus & Topic-Wise Weightage",
      date: "24-Jul-2026",
      badge: "PDF Download",
      qualification: "Graduate",
      link: "post-template.html?post=ssc-cgl-2026"
    },
    {
      title: "UP Police Sub Inspector (SI) Hindi, Law & Reasoning Exam Blueprint",
      date: "22-Jul-2026",
      badge: "New Pattern",
      qualification: "Police / Defense",
      link: "post-template.html?post=up-police-si-2026"
    },
    {
      title: "Railway RRB NTPC Stage 1 & 2 CBT Negative Marking & Scheme",
      date: "20-Jul-2026",
      badge: "Gazette Copy",
      qualification: "12th Pass",
      link: "post-template.html?post=rrb-ntpc-2026"
    },
    {
      title: "IBPS PO 2026 Mains Descriptive English & Interview Criteria",
      date: "18-Jul-2026",
      badge: "Official Notice",
      qualification: "Graduate",
      link: "post-template.html?post=ibps-po-2026"
    }
  ],

  admissions: [
    {
      title: "JoSAA 2026 IIT / NIT Round 5 Seat Allotment & Document Verification",
      date: "25-Jul-2026",
      badge: "Round 5 Live",
      qualification: "12th Pass",
      link: "post-template.html?post=rrb-ntpc-2026"
    },
    {
      title: "NEET UG 2026 All India Quota (AIQ) 15% Medical Counselling Registration",
      date: "24-Jul-2026",
      badge: "MCC Portal",
      qualification: "12th Pass",
      link: "post-template.html?post=ssc-cgl-2026"
    },
    {
      title: "UP B.Ed JEE 2026 State Counselling Schedule & College Choice Filling",
      date: "22-Jul-2026",
      badge: "Phase 1 Open",
      qualification: "Teaching",
      link: "post-template.html?post=bpsc-tre-teaching"
    },
    {
      title: "IGNOU July 2026 Session Fresh Admission & Re-Registration Extension",
      date: "20-Jul-2026",
      badge: "Till 31 July",
      qualification: "Graduate",
      link: "post-template.html?post=ssc-cgl-2026"
    }
  ],

  // Detailed exam profiles for the post-template.html interactive page
  examProfiles: {
    "ssc-cgl-2026": {
      title: "SSC Combined Graduate Level (CGL) 2026 Recruitment",
      org: "Staff Selection Commission (SSC, Govt of India)",
      advtNo: "Advt No. HQ-PPII03(2)/1/2026-PP_II",
      vacancies: "17,727 Posts",
      status: "Application Active",
      lastDate: "2026-07-24T23:00:00",
      displayLastDate: "24 July 2026 (11:00 PM)",
      qualification: "Bachelor's Degree in any discipline",
      ageCutoffDate: "2026-08-01",
      minAge: 18,
      maxAge: 32,
      posts: [
        { name: "Assistant Section Officer (CSS)", count: 692, age: "20 - 30 Yrs", qual: "Bachelor Degree" },
        { name: "Inspector of Income Tax (CBDT)", count: 460, age: "18 - 30 Yrs", qual: "Bachelor Degree" },
        { name: "Inspector Central Excise (CBIC)", count: 2754, age: "18 - 30 Yrs", qual: "Bachelor Degree + Physical" },
        { name: "Sub Inspector (CBI)", count: 120, age: "20 - 30 Yrs", qual: "Bachelor Degree + Vision" },
        { name: "Junior Statistical Officer (JSO)", count: 714, age: "18 - 32 Yrs", qual: "Degree with 60% Maths in 12th" },
        { name: "Auditor (CAG / CGDA)", count: 1480, age: "18 - 27 Yrs", qual: "Bachelor Degree" },
        { name: "Tax Assistant (CBDT / CBIC)", count: 3120, age: "18 - 27 Yrs", qual: "Degree + 8000 KDPH Typing" },
        { name: "Other Group B & C Positions", count: 8387, age: "18 - 27 / 30 Yrs", qual: "Bachelor Degree" }
      ],
      fees: {
        urObcEws: "₹100/-",
        scStPwd: "₹0/- (Exempted)",
        female: "₹0/- (Exempted All Categories)",
        correction1: "₹200/- (First Correction)",
        correction2: "₹500/- (Second Correction)",
        modes: "UPI (Google Pay, PhonePe, Paytm), Net Banking, Debit/Credit Cards"
      },
      dates: [
        { label: "Notification Released", val: "24 June 2026", status: "Done" },
        { label: "Online Application Starts", val: "24 June 2026", status: "Active" },
        { label: "Last Date for Registration", val: "24 July 2026 (23:00)", status: "Urgent", highlight: true },
        { label: "Last Date Online Fee Payment", val: "25 July 2026 (23:00)", status: "Upcoming" },
        { label: "Form Correction Window", val: "10 - 11 August 2026", status: "Upcoming" },
        { label: "Tier-I Computer Based Exam (CBT)", val: "September - October 2026", status: "Upcoming" },
        { label: "Tier-II Computer Based Exam", val: "December 2026 (Tentative)", status: "Upcoming" }
      ],
      aiBrief: {
        pattern: {
          tier1: "100 Multiple Choice Questions (200 Marks) across 4 sections: General Intelligence & Reasoning (25Q/50M), General Awareness (25Q/50M), Quantitative Aptitude (25Q/50M), English Comprehension (25Q/50M). Duration: 60 Minutes.",
          negativeMarking: "⚠️ -0.50 Marks penalty for each wrong answer in Tier 1. In Tier 2, -1.0 Mark penalty for Section 1, 2 and 3.",
          tier2: "Paper 1 is compulsory for all posts (Mathematical Abilities, Reasoning, English Language, General Awareness, and Computer Knowledge Module + 15 min Data Entry Speed Test).",
          normalization: "Equi-percentile equi-variance formula across multi-shift papers."
        },
        physical: {
          male: {
            height: "157.5 cm minimum (Relaxable by 5 cm for Garhwalis, Assamese, Gorkhas and ST)",
            chest: "81 cm unexpanded with minimum 5 cm expansion (81 - 86 cm)",
            running: "Walking 1600 meters in 15 minutes",
            cycling: "8 km in 30 minutes"
          },
          female: {
            height: "152 cm minimum (Relaxable by 2.5 cm for ST candidates)",
            weight: "48 kg minimum (Relaxable by 2 kg for ST)",
            running: "Walking 1 km in 20 minutes",
            cycling: "3 km in 25 minutes"
          },
          notes: "Applicable only for Inspector Central Excise, Examiner, Preventive Officer, Sub-Inspector CBI & NIA, and Narcotics Inspector."
        },
        certificates: {
          obc: "OBC Non-Creamy Layer (NCL) certificate must be issued within Financial Year 2025-26 (between 01-Apr-2025 and 24-Jul-2026). Must state eligibility for Central Govt appointments (State OBC certificates without central clause will be rejected!).",
          ews: "Income & Asset Certificate must be valid for Year 2025-26 based on gross annual family income of FY 2024-25. Must bear signature of SDM/Tehsildar with official seal.",
          scSt: "Permanent caste certificate in Central Annexure-VI format. No expiration date, but issuing authority must be Tehsildar or above.",
          degreeCutoff: "Crucial date for educational degree is 01-August-2026. Passing marksheet or provisional degree must be issued on or before this exact date."
        }
      },
      links: {
        apply: "https://ssc.gov.in",
        login: "https://ssc.gov.in/candidate-login",
        pdfOfficial: "https://ssc.gov.in/api/notification-cgl-2026.pdf",
        pdfMirror: "#mirror-download",
        officialSite: "https://ssc.gov.in",
        calendarTitle: "SSC CGL 2026 - Last Date to Submit Online Application Form!",
        calendarDesc: "SSC CGL 2026 application window closes tonight at 11:00 PM. Apply now at https://ssc.gov.in to avoid last-minute server congestion."
      }
    },

    "up-police-si-2026": {
      title: "UP Police Sub Inspector (SI) & Platoon Commander 2026",
      org: "Uttar Pradesh Police Recruitment & Promotion Board (UPPRPB)",
      advtNo: "Advt No. PRPB-2(SI)/2026",
      vacancies: "4,210 Posts",
      status: "Application Active",
      lastDate: "2026-07-30T23:59:59",
      displayLastDate: "30 July 2026 (11:59 PM)",
      qualification: "Graduation in any stream from recognized university",
      ageCutoffDate: "2026-07-01",
      minAge: 21,
      maxAge: 28,
      posts: [
        { name: "Sub Inspector Civil Police (Male/Female)", count: 3650, age: "21 - 28 Yrs", qual: "Bachelor Degree" },
        { name: "Platoon Commander (PAC)", count: 480, age: "21 - 28 Yrs", qual: "Bachelor Degree (Male Only)" },
        { name: "Fire Station Second Officer (FSSO)", count: 80, age: "21 - 28 Yrs", qual: "B.Sc Degree with Physics/Chemistry" }
      ],
      fees: {
        urObcEws: "₹400/-",
        scStPwd: "₹400/-",
        female: "₹400/-",
        correction1: "₹200/-",
        modes: "E-Challan, Net Banking, UPI, SBI Collect"
      },
      dates: [
        { label: "Notification Released", val: "01 July 2026", status: "Done" },
        { label: "Online Application Starts", val: "05 July 2026", status: "Active" },
        { label: "Last Date for Registration", val: "30 July 2026", status: "Urgent", highlight: true },
        { label: "Fee Payment Last Date", val: "30 July 2026", status: "Urgent" },
        { label: "Physical Efficiency Test (PET)", val: "September 2026", status: "Upcoming" },
        { label: "Written Exam (CBT)", val: "November 2026", status: "Upcoming" }
      ],
      aiBrief: {
        pattern: {
          tier1: "Single stage online CBT with 160 Questions (400 Marks). Duration: 120 Minutes. 4 Sections: General Hindi (40Q/100M), Law / Constitution / GK (40Q/100M), Numerical & Mental Ability (40Q/100M), Mental Aptitude / IQ / Reasoning (40Q/100M).",
          negativeMarking: "✅ NO negative marking in UP Police SI exam! However, candidate must secure at least 35% marks in each individual subject and 50% aggregate.",
          tier2: "Stage 2 is Document Verification (DV) & Physical Standard Test (PST), followed by Physical Efficiency Test (PET race).",
          normalization: "Normalized using standard percentile score system."
        },
        physical: {
          male: {
            height: "168 cm (General/OBC/SC) | 160 cm for ST candidates",
            chest: "79 cm unexpanded to 84 cm expanded (Min 5 cm expansion required)",
            running: "4.8 Kilometers run to be completed in 28 minutes",
            cycling: "Not applicable"
          },
          female: {
            height: "152 cm (General/OBC/SC) | 147 cm for ST candidates",
            weight: "40 kg minimum weight strictly required for all female candidates",
            running: "2.4 Kilometers run to be completed in 16 minutes",
            cycling: "Not applicable"
          },
          notes: "Running is qualifying in nature. Failure to finish race within specified time results in immediate disqualification."
        },
        certificates: {
          obc: "UP State OBC-NCL certificate issued on or after 01-April-2025 and on or before closing date 30-July-2026. Non-UP domicile candidates will be treated as General/UR.",
          ews: "EWS certificate issued for financial year 2025-26 under UP Govt guidelines.",
          scSt: "UP state prescribed caste certificate format. Domicile (Nivas Praman Patra) is mandatory for claiming reservation.",
          degreeCutoff: "Candidate must possess degree certificate before closing date. Appearing candidates are NOT eligible."
        }
      },
      links: {
        apply: "http://uppbpb.gov.in",
        login: "http://uppbpb.gov.in/candidate-login",
        pdfOfficial: "http://uppbpb.gov.in/si-recruitment-2026.pdf",
        pdfMirror: "#mirror-si-pdf",
        officialSite: "http://uppbpb.gov.in",
        calendarTitle: "UP Police SI 2026 - Last Date to Submit Online Application Form!",
        calendarDesc: "UP Police Sub Inspector application closes on 30 July. Apply online at uppbpb.gov.in."
      }
    },

    "rrb-ntpc-2026": {
      title: "Railway RRB NTPC (Graduate & Undergraduate) Recruitment 2026",
      org: "Railway Recruitment Boards (Ministry of Railways, Govt of India)",
      advtNo: "CEN 05/2026 (NTPC)",
      vacancies: "11,558 Posts",
      status: "Application Active",
      lastDate: "2026-08-18T23:59:59",
      displayLastDate: "18 August 2026",
      qualification: "12th Pass (for Undergrad posts) / Bachelor's Degree (for Grad posts)",
      ageCutoffDate: "2026-07-01",
      minAge: 18,
      maxAge: 33,
      posts: [
        { name: "Station Master (Level 6)", count: 2480, age: "18 - 33 Yrs", qual: "Graduate + CBAT" },
        { name: "Goods Train Manager (Level 5)", count: 3140, age: "18 - 33 Yrs", qual: "Graduate" },
        { name: "Senior Commercial cum Ticket Clerk", count: 1890, age: "18 - 33 Yrs", qual: "Graduate" },
        { name: "Junior Clerk cum Typist (Level 2)", count: 2120, age: "18 - 30 Yrs", qual: "12th Pass + Typing" },
        { name: "Trains Clerk (Level 2)", count: 720, age: "18 - 30 Yrs", qual: "12th Pass" },
        { name: "Commercial cum Ticket Clerk", count: 1208, age: "18 - 30 Yrs", qual: "12th Pass" }
      ],
      fees: {
        urObcEws: "₹500/- (₹400 refunded after appearing in CBT-1)",
        scStPwd: "₹250/- (₹250 refunded after appearing in CBT-1)",
        female: "₹250/- (₹250 refunded after appearing in CBT-1)",
        correction1: "₹250/-",
        modes: "UPI, Internet Banking, Credit/Debit Card"
      },
      dates: [
        { label: "Detailed Centralized Notice", val: "15 July 2026", status: "Done" },
        { label: "Online Registration Start", val: "18 July 2026", status: "Active" },
        { label: "Last Date for Application", val: "18 August 2026", status: "Upcoming", highlight: true },
        { label: "CBT-1 Exam City Slip", val: "September 2026", status: "Upcoming" },
        { label: "1st Stage Computer Exam (CBT-1)", val: "October - November 2026", status: "Upcoming" }
      ],
      aiBrief: {
        pattern: {
          tier1: "1st Stage CBT is common for all posts. 100 Questions (100 Marks): General Awareness (40Q), Mathematics (30Q), General Intelligence & Reasoning (30Q). Time: 90 Minutes (120 mins for PwD).",
          negativeMarking: "⚠️ 1/3rd (-0.33 Marks) negative marking for each incorrect response in both CBT-1 and CBT-2.",
          tier2: "2nd Stage CBT (120 Questions, 90 mins). Separate 2nd Stage CBT for each 7th CPC Level (Level 2, 3, 5, 6).",
          normalization: "Marks scored in multi-session CBT will be normalized using revised percentile formula."
        },
        physical: {
          male: {
            height: "No general height standard; Eye vision standard A-2 mandatory for Station Master (6/9, 6/9 without glasses, near vision Sn: 0.6, 0.6).",
            chest: "General fitness check by Railway Medical Board",
            running: "No physical running test for NTPC (Physical test only in Group D)",
            cycling: "Not applicable"
          },
          female: {
            height: "Standard medical fitness; A-2/A-3 visual acuity must be verified prior to document verification",
            weight: "Standard BMI criteria",
            running: "None",
            cycling: "None"
          },
          notes: "Candidates who have undergone LASIK surgery are NOT eligible for Station Master or Goods Train Manager posts requiring A-2 medical standard!"
        },
        certificates: {
          obc: "OBC-NCL certificate in Central Govt format with validity for current financial year 2025-26.",
          ews: "Central EWS format valid for financial year 2025-26.",
          scSt: "SC/ST certificate for free railway travel pass during CBT exams.",
          degreeCutoff: "All educational qualifications must be completed before the closing date 18-August-2026."
        }
      },
      links: {
        apply: "https://rrbapply.gov.in",
        login: "https://rrbapply.gov.in/login",
        pdfOfficial: "https://rrbapply.gov.in/cen-05-2026.pdf",
        pdfMirror: "#mirror-rrb-pdf",
        officialSite: "https://indianrailways.gov.in",
        calendarTitle: "Railway RRB NTPC 2026 - Registration Last Date!",
        calendarDesc: "Railway RRB NTPC 2026 application closes today. Apply on https://rrbapply.gov.in."
      }
    },

    "ibps-po-2026": {
      title: "IBPS Probationary Officer (PO / MT) XIV Recruitment 2026",
      org: "Institute of Banking Personnel Selection (IBPS)",
      advtNo: "CRP PO/MT-XIV",
      vacancies: "4,455 Posts",
      status: "Application Active",
      lastDate: "2026-08-12T23:59:59",
      displayLastDate: "12 August 2026",
      qualification: "A Degree (Graduation) in any discipline from a recognized University",
      ageCutoffDate: "2026-08-01",
      minAge: 20,
      maxAge: 30,
      posts: [
        { name: "Bank of Baroda PO", count: 800, age: "20 - 30 Yrs", qual: "Bachelor Degree" },
        { name: "Canara Bank PO", count: 750, age: "20 - 30 Yrs", qual: "Bachelor Degree" },
        { name: "Punjab National Bank PO", count: 1200, age: "20 - 30 Yrs", qual: "Bachelor Degree" },
        { name: "Union Bank of India PO", count: 650, age: "20 - 30 Yrs", qual: "Bachelor Degree" },
        { name: "Central Bank of India PO", count: 500, age: "20 - 30 Yrs", qual: "Bachelor Degree" },
        { name: "Other Participating PSBs", count: 555, age: "20 - 30 Yrs", qual: "Bachelor Degree" }
      ],
      fees: {
        urObcEws: "₹850/- (Inclusive of GST)",
        scStPwd: "₹175/- (Inclusive of GST)",
        female: "Same as Category (Gen: ₹850, SC/ST: ₹175)",
        correction1: "No correction window (Must fill carefully!)",
        modes: "Online payment gateway (Debit Card, Credit Card, Internet Banking, IMPS, Cash Cards/Mobile Wallets)"
      },
      dates: [
        { label: "Notification Released", val: "22 July 2026", status: "Done" },
        { label: "Online Registration Starts", val: "23 July 2026", status: "Active" },
        { label: "Last Date to Apply & Pay Fee", val: "12 August 2026", status: "Urgent", highlight: true },
        { label: "Pre-Exam Training (PET)", val: "September 2026", status: "Upcoming" },
        { label: "Online Preliminary Exam", val: "October 2026", status: "Upcoming" },
        { label: "Online Main Exam", val: "November 2026", status: "Upcoming" }
      ],
      aiBrief: {
        pattern: {
          tier1: "Preliminary Exam: 100 Questions (100 Marks), 60 Minutes with sectional timing of 20 mins each. English (30Q), Quantitative Aptitude (35Q), Reasoning Ability (35Q). Both sectional and overall cutoff applicable!",
          negativeMarking: "⚠️ Penalty of 0.25 (one-fourth) of marks assigned to that question for wrong answers in Prelims & Mains.",
          tier2: "Mains Exam: 155 Questions (200 Marks) in 3 hours + English Descriptive Test (Letter Writing & Essay - 2 questions, 25 marks, 30 minutes).",
          normalization: "Scores normalized across shifts using equi-percentile method."
        },
        physical: {
          male: {
            height: "No physical height or chest restrictions. Medical fitness certification from authorized civil surgeon required at joining.",
            chest: "N/A",
            running: "No physical running tests for banking jobs.",
            cycling: "N/A"
          },
          female: {
            height: "No physical measurements required.",
            weight: "Standard medical health requirements.",
            running: "N/A",
            cycling: "N/A"
          },
          notes: "PwD candidates are eligible for scribe services with 20 minutes compensatory time per hour."
        },
        certificates: {
          obc: "Central OBC-NCL certificate issued between 01-April-2025 and 12-August-2026.",
          ews: "Income & Asset certificate for FY 2025-26 based on gross annual family income of FY 2024-25.",
          scSt: "Caste certificate in prescribed format issued by competent authority.",
          degreeCutoff: "Candidate must possess final graduation mark sheet/degree with result declared on or before 12-August-2026."
        }
      },
      links: {
        apply: "https://ibps.in",
        login: "https://ibps.in/crp-po-xiv",
        pdfOfficial: "https://ibps.in/notification-po-xiv.pdf",
        pdfMirror: "#mirror-ibps-pdf",
        officialSite: "https://ibps.in",
        calendarTitle: "IBPS PO XIV 2026 - Last Date to Submit Online Application!",
        calendarDesc: "IBPS Bank PO application deadline. Complete payment and print form before 12 August 2026."
      }
    }
  }
};
