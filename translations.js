/**
 * Multi-Language Translations Dictionary
 * Languages: English (en), Hindi (hi), Gujarati (gu)
 * Madhav Solar Energy C&I Decision-Making Funnel
 */
const TRANSLATIONS = {
  en: {
    // Navigation
    "nav.business_case": "Business Case",
    "nav.sectors": "Sectors",
    "nav.architecture": "Architecture",
    "nav.cfo_economics": "CFO Economics",
    "nav.process": "Process",
    "nav.boardroom_faqs": "Boardroom & FAQs",
    "nav.get_assessment": "Get Solar Assessment",

    // Hero Section
    "hero.badge_tag": "UTILITY AND INDUSTRIAL SOLAR EPC",
    "hero.badge_meta": "200+ MW COMMISSIONED",
    "hero.headline_1": "Your Energy Cost Shouldn’t Control",
    "hero.headline_accent": "Your Growth.",
    "hero.subheadline": "Lock Commercial and Industrial power costs at <strong>₹3.20/unit</strong> — shielding operating EBITDA from volatile grid tariff escalations.",
    "hero.cta_assessment": "Get Solar Opportunity Assessment",
    "hero.cta_expert": "Speak With an Expert",
    "hero.trust_1": "Zero Plant Downtime",
    "hero.trust_2": "Non-Penetrative Clamps",
    "hero.trust_3": "100% GEDA / CEIG Handled",

    // Section 2: Problem / Business Case
    "problem.eyebrow": "The Business Case",
    "problem.title": "Solar Is an EBITDA & Economics Decision.",
    "problem.lead": "Lock operating power costs and shield your bottom line from grid tariff volatility.",
    "problem.f1_tag": "FACTOR 01",
    "problem.f1_title": "Operating Margins",
    "problem.f1_desc": "High continuous load and exposure to peak industrial grid tariffs directly cut operating EBITDA.",
    "problem.f2_tag": "FACTOR 02",
    "problem.f2_title": "Capital Payback",
    "problem.f2_desc": "Fast asset payback with accelerated depreciation tax benefits in Year 1.",
    "problem.f3_tag": "FACTOR 03",
    "problem.f3_title": "ESG Mandates",
    "problem.f3_desc": "Verifiable Scope-2 carbon reduction for enterprise and global OEM compliance.",
    "problem.f4_tag": "FACTOR 04",
    "problem.f4_title": "Zero Disruption",
    "problem.f4_desc": "Engineered structural mounting and non-penetrative clamps protect roof integrity.",

    // Section 3: Strategic Value Proposition
    "value.eyebrow": "Strategic Value Proposition",
    "value.title": "Solar Engineered Around Four Strategic Quadrants",
    "value.lead": "Engineering precision. Execution reliability. Commercial viability.",
    "value.hub": "VALUE<br>CORE",
    "value.q1_tag": "Q1 // MARGINS",
    "value.q1_title": "Lower Grid Dependence",
    "value.q1_desc": "Shield plant EBITDA against rising utility base tariffs.",
    "value.q2_tag": "Q2 // VISIBILITY",
    "value.q2_title": "Better Cost Visibility",
    "value.q2_desc": "Lock fixed power tariffs for 25-year budget certainty.",
    "value.q3_tag": "Q3 // ROI",
    "value.q3_title": "Stronger Business Economics",
    "value.q3_desc": "2.8-year payback with 40% Year-1 tax depreciation.",
    "value.q4_tag": "Q4 // ESG",
    "value.q4_title": "Sustainable Growth",
    "value.q4_desc": "Cut Scope-2 carbon emissions with zero plant disruption.",

    // Section 4: Hardware Integrity Standard
    "hardware.eyebrow": "Hardware Integrity Standard",
    "hardware.title": "Engineered for 25 Years of Relentless Generation",
    "hardware.lead": "Every component selected for tier-1 reliability, degradation resistance, and audited performance.",

    // Section 5: Sectors
    "sectors.eyebrow": "Sector-Specific Solutions",
    "sectors.title": "Different Industries. Different Energy Problems.",
    "sectors.lead": "Solar should not be marketed using one generic message. Each industrial sector has a distinct commercial trigger.",
    "sectors.tab_mfg": "Manufacturing",
    "sectors.tab_warehousing": "Warehousing & Logistics",
    "sectors.tab_hospitality": "Hospitality",
    "sectors.tab_healthcare": "Healthcare",
    "sectors.tab_cre": "Commercial Real Estate",
    "sectors.tab_datacenters": "Data Centres",

    // Section 6: Solution Architecture
    "arch.eyebrow": "Solution Architecture",
    "arch.title": "The Right Solar Model Depends on Your Business.",
    "arch.lead": "There is no single solution that fits every organisation. The correct model depends on your power consumption, infrastructure, available space, and long-term capital allocation.",
    "arch.card1_tag": "MODEL 01 // ROOFTOP",
    "arch.card1_title": "Rooftop Solar",
    "arch.card1_desc": "Zero land cost. Direct daytime energy displacement for industrial PEB sheds and RCC roofs.",
    "arch.card2_tag": "MODEL 02 // GROUND-MOUNT",
    "arch.card2_title": "Ground-Mount Solar",
    "arch.card2_desc": "Maximum multi-megawatt generation on unutilized factory land with optimized tilt geometry.",
    "arch.card3_tag": "MODEL 03 // CAPTIVE",
    "arch.card3_title": "Group Captive Solar",
    "arch.card3_desc": "26% equity participation model delivering massive power tariff discounts without capital strain.",
    "arch.card4_tag": "MODEL 04 // OPEN ACCESS",
    "arch.card4_title": "Open Access Solar",
    "arch.card4_desc": "Multi-megawatt green power wheeled directly via state grid to your factory.",

    // Section 7: Strategic Evaluation Matrix
    "matrix.eyebrow": "Strategic Evaluation Matrix",
    "matrix.title": "Solar Decisions Should Be Made on Fit, Not Fashion",
    "matrix.lead": "A direct commercial comparison answering the most frequent boardroom buying dilemmas.",

    // Section 8: CFO Economics
    "cfo.eyebrow": "The CFO Section",
    "cfo.title": "Solar as a Commercial Asset, Not a Compliance Expense",
    "cfo.lead": "When structured correctly, commercial solar is one of the highest internal rate of return (IRR) capital projects available to an Indian business.",

    // Calculator
    "calc.eyebrow": "Interactive Financial Engine",
    "calc.title": "Estimate Your Factory Solar Opportunity",
    "calc.lead": "Select your average monthly electricity bill to calculate approximate plant capacity and economic returns.",
    "calc.slider_label": "Monthly Electricity Bill",
    "calc.cta_btn": "Get Detailed Feasibility Report for this Setup",
    "calc.lbl_capacity": "Recommended Capacity",
    "calc.lbl_savings": "Est. Annual Power Savings",
    "calc.lbl_payback": "Expected Capital Payback",
    "calc.lbl_lifetime": "25-Year Lifecycle Savings",

    // Section 9: Audited Proof
    "proof.eyebrow": "Audited Industrial Proof",
    "proof.title": "Proof Measured in Balance Sheet Outcomes, Not Just Megawatts",
    "proof.lead": "Most solar companies communicate “Project commissioned — X MW.” That shows activity. It does not show capability. Here is audited performance across operating industrial facilities.",

    // Section 10: 6-Stage Engineering Process
    "process.eyebrow": "The Engineering Process",
    "process.title": "From Energy Requirement to Executable Solar Roadmap",
    "process.lead": "A structured, six-stage turnkey process engineered for zero production disruption and guaranteed generation.",

    // Final CTA & Form
    "final.title": "Before You Buy Solar, Know What It Can Do for Your Business.",
    "final.lead": "Understand the technical feasibility, commercial model and long-term energy opportunity before making an investment decision.",
    "final.btn_assessment": "Get Your Solar Opportunity Assessment",
    "final.btn_speak": "Speak With a Commercial Engineer",

    // Modal Form
    "modal.eyebrow": "Confidential Commercial Modeling",
    "modal.title": "Request Your Solar Opportunity Assessment",
    "modal.desc": "We prepare a plant-specific generation study, shadow-loss simulation, and cash-flow model for your facility. No obligations.",
    "modal.lbl_name": "Full Name *",
    "modal.lbl_company": "Company Name *",
    "modal.lbl_email": "Work Email *",
    "modal.lbl_phone": "Direct Phone *",
    "modal.lbl_city": "Facility Location / City *",
    "modal.lbl_bill": "Approx. Monthly Electricity Bill *",
    "modal.lbl_req": "Requirement Type",
    "modal.lbl_timeline": "Project Timeline",
    "modal.btn_submit": "Assess My Solar Opportunity"
  },

  hi: {
    // Navigation
    "nav.business_case": "बिजनेस केस",
    "nav.sectors": "इंडस्ट्री सेक्टर्स",
    "nav.architecture": "सोलर मॉडल्स",
    "nav.cfo_economics": "CFO वित्तीय लाभ",
    "nav.process": "इंजीनियरिंग प्रोसेस",
    "nav.boardroom_faqs": "बोर्डरूम और FAQ",
    "nav.get_assessment": "सोलर असेसमेंट प्राप्त करें",

    // Hero Section
    "hero.badge_tag": "यूटिलिटी और इंडस्ट्रियल सोलर EPC",
    "hero.badge_meta": "200+ MW कमीशन किया गया",
    "hero.headline_1": "आपकी बिजली की लागत आपकी कंपनी की",
    "hero.headline_accent": "ग्रोथ को नहीं रोकनी चाहिए।",
    "hero.subheadline": "कमर्शियल और इंडस्ट्रियल बिजली लागत को <strong>₹3.20/यूनिट</strong> पर लॉक करें — और अपने ऑपरेटिंग EBITDA को ग्रिड बिजली के बढ़ते दामों से सुरक्षित रखें।",
    "hero.cta_assessment": "सोलर ऑपर्च्युनिटी असेसमेंट प्राप्त करें",
    "hero.cta_expert": "हमारे एक्सपर्ट से बात करें",
    "hero.trust_1": "जीरो प्लांट डाउनटाइम",
    "hero.trust_2": "नॉन-पेनेट्रेटिव क्लैम्प्स",
    "hero.trust_3": "100% GEDA / CEIG सरकारी अप्रूवल्स",

    // Section 2: Problem / Business Case
    "problem.eyebrow": "बिजनेस केस",
    "problem.title": "सोलर एक EBITDA और वित्तीय लाभ का निर्णय है।",
    "problem.lead": "ऑपरेटिंग बिजली लागत को लॉक करें और अपने मुनाफे को ग्रिड बिजली के दामों से सुरक्षित रखें।",
    "problem.f1_tag": "फैक्टर 01",
    "problem.f1_title": "ऑपरेटिंग मार्जिन",
    "problem.f1_desc": "लगातार भारी बिजली खपत और पीक ग्रिड टैरिफ सीधे आपके ऑपरेटिंग EBITDA को कम करते हैं।",
    "problem.f2_tag": "फैक्टर 02",
    "problem.f2_title": "कैपिटल पेबैक",
    "problem.f2_desc": "तेज एसेट पेबैक और पहले ही वर्ष में 40% टैक्स डेप्रिसिएशन का पूरा लाभ।",
    "problem.f3_tag": "फैक्टर 03",
    "problem.f3_title": "ESG और ग्रीन नियम",
    "problem.f3_desc": "एंटरप्राइज और ग्लोबल OEM ग्राहकों के लिए प्रमाणित Scope-2 कार्बन कटौती।",
    "problem.f4_tag": "फैक्टर 04",
    "problem.f4_title": "जीरो रुकावट",
    "problem.f4_desc": "इंजीनियरिंग माउंटिंग और बिना छेद वाले क्लैम्प्स जो छत की मजबूती को बनाए रखते हैं।",

    // Section 3: Strategic Value Proposition
    "value.eyebrow": "रणनीतिक वैल्यू प्रपोजिशन",
    "value.title": "चार रणनीतिक स्तंभों पर आधारित सोलर इंजीनियरिंग",
    "value.lead": "इंजीनियरिंग सटीकता। निष्पादन विश्वसनीयता। व्यावसायिक लाभ।",
    "value.hub": "वैल्यू<br>कोर",
    "value.q1_tag": "Q1 // मार्जिन सुरक्षा",
    "value.q1_title": "ग्रिड पर निर्भरता में कमी",
    "value.q1_desc": "बढ़ते बिजली टैरिफ के खिलाफ प्लांट EBITDA को सुरक्षित रखें।",
    "value.q2_tag": "Q2 // लागत स्पष्टता",
    "value.q2_title": "बेहतर लागत नियंत्रण",
    "value.q2_desc": "अगले 25 वर्षों के लिए फिक्स्ड बिजली दर पर बजट निश्चितता पाएं।",
    "value.q3_tag": "Q3 // रिटर्न ऑन इन्वेस्टमेंट",
    "value.q3_title": "मजबूत बिजनेस इकोनॉमिक्स",
    "value.q3_desc": "2.8 साल में पेबैक और पहले ही साल में 40% टैक्स डेप्रिसिएशन।",
    "value.q4_tag": "Q4 // पर्यावरण व विकास",
    "value.q4_title": "सतत एवं सुरक्षित विकास",
    "value.q4_desc": "बिना किसी प्रोडक्शन रुकावट के कार्बन उत्सर्जन में भारी कटौती।",

    // Section 4: Hardware Integrity Standard
    "hardware.eyebrow": "हार्डवेयर विश्वसनीयता मानक",
    "hardware.title": "25 वर्षों तक लगातार अधिकतम बिजली उत्पादन के लिए निर्मित",
    "hardware.lead": "टियर-1 विश्वसनीयता, शून्य परफॉर्मेंस डिग्रेडेशन और प्रमाणित आउटपुट के लिए हर कंपोनेंट की जांच।",

    // Section 5: Sectors
    "sectors.eyebrow": "सेक्टर-विशिष्ट समाधान",
    "sectors.title": "अलग-अलग उद्योग। अलग-अलग ऊर्जा जरूरतें।",
    "sectors.lead": "सोलर को एक ही सामान्य संदेश के साथ नहीं बेचा जाना चाहिए। हर औद्योगिक क्षेत्र की अपनी विशेष कमर्शियल प्राथमिकता होती है।",
    "sectors.tab_mfg": "मैन्युफैक्चरिंग",
    "sectors.tab_warehousing": "वेयरहाउसिंग और लॉजिस्टिक्स",
    "sectors.tab_hospitality": "हॉस्पिटैलिटी व होटल्स",
    "sectors.tab_healthcare": "हेल्थकेयर व अस्पताल",
    "sectors.tab_cre": "कमर्शियल रियल एस्टेट",
    "sectors.tab_datacenters": "डेटा सेंटर्स",

    // Section 6: Solution Architecture
    "arch.eyebrow": "सॉल्यूशन आर्किटेक्चर",
    "arch.title": "सही सोलर मॉडल आपके बिजनेस की जरूरत पर निर्भर करता है।",
    "arch.lead": "कोई एक समाधान सभी के लिए सही नहीं होता। सही मॉडल आपकी बिजली खपत, इन्फ्रास्ट्रक्चर, उपलब्ध जगह और कैपिटल बजट पर आधारित होता है।",
    "arch.card1_tag": "मॉडल 01 // रूफटॉप",
    "arch.card1_title": "रूफटॉप सोलर",
    "arch.card1_desc": "जीरो लैंड कॉस्ट। फैक्ट्री शेड और छत पर सीधे दिन की बिजली की खपत।",
    "arch.card2_tag": "मॉडल 02 // ग्राउंड-माउंट",
    "arch.card2_title": "ग्राउंड-माउंट सोलर",
    "arch.card2_desc": "उपलब्ध खाली जमीन पर मल्टी-मेगावाट स्केल और अनुकूलित कोण पर अधिकतम उत्पादन।",
    "arch.card3_tag": "मॉडल 03 // कैप्टिव",
    "arch.card3_title": "ग्रुप कैप्टिव सोलर",
    "arch.card3_desc": "बिना भारी निवेश के 26% इक्विटी पार्टनरशिप मॉडल के साथ भारी बिजली बचत।",
    "arch.card4_tag": "मॉडल 04 // ओपन एक्सेस",
    "arch.card4_title": "ओपन एक्सेस सोलर",
    "arch.card4_desc": "ग्रिड के जरिए सीधे सोलर पार्क से अपनी फैक्ट्री में ग्रीन पावर मंगवाएं।",

    // Section 7: Strategic Evaluation Matrix
    "matrix.eyebrow": "रणनीतिक मूल्यांकन मैट्रिक्स",
    "matrix.title": "सोलर का निर्णय ट्रेंड पर नहीं, कंपनी के लिए सही मॉडल पर होना चाहिए",
    "matrix.lead": "बोर्डरूम के सबसे आम सवालों और विकल्पों की सीधी तुलना।",

    // Section 8: CFO Economics
    "cfo.eyebrow": "CFO वित्तीय विश्लेषण",
    "cfo.title": "सोलर एक कमर्शियल एसेट है, सिर्फ अनुपालन (Compliance) का खर्च नहीं",
    "cfo.lead": "सही तरीके से प्लान करने पर कमर्शियल सोलर भारतीय उद्योगों के लिए सबसे ज्यादा रिटर्न (IRR) देने वाला कैपिटल प्रोजेक्ट साबित होता है।",

    // Calculator
    "calc.eyebrow": "इंटरएक्टिव वित्तीय कैलकुलेटर",
    "calc.title": "अपनी फैक्ट्री की सोलर बचत का अनुमान लगाएं",
    "calc.lead": "अनुमानित प्लांट क्षमता और आर्थिक रिटर्न देखने के लिए अपना मासिक बिजली बिल चुनें।",
    "calc.slider_label": "मासिक बिजली बिल",
    "calc.cta_btn": "इस सेटअप के लिए विस्तृत फिजिबिलिटी रिपोर्ट प्राप्त करें",
    "calc.lbl_capacity": "अनुशंसित क्षमता (Capacity)",
    "calc.lbl_savings": "अनुमानित वार्षिक बिजली बचत",
    "calc.lbl_payback": "अनुमानित निवेश पेबैक",
    "calc.lbl_lifetime": "25 वर्षों की कुल लाइफटाइम बचत",

    // Section 9: Audited Proof
    "proof.eyebrow": "प्रमाणित औद्योगिक परिणाम",
    "proof.title": "हमारी सफलता बैलेंस शीट के मुनाफे से मापी जाती है, सिर्फ मेगावाट से नहीं",
    "proof.lead": "अधिकांश सोलर कंपनियां केवल कमीशनिंग की बात करती हैं। हम वास्तविक औद्योगिक प्लांट्स में हर महीने होने वाली वास्तविक बिजली बचत और ऑडिटेड परिणाम दिखाते हैं।",

    // Section 10: 6-Stage Engineering Process
    "process.eyebrow": "इंजीनियरिंग प्रोसेस",
    "process.title": "ऊर्जा आवश्यकता से लेकर चालू प्लांट तक का पूरा रोडमैप",
    "process.lead": "एक व्यवस्थित 6-चरणीय टर्नकी प्रक्रिया जो जीरो प्रोडक्शन रुकावट और गारंटीड जनरेशन सुनिश्चित करती है।",

    // Final CTA & Form
    "final.title": "सोलर लगाने से पहले समझें कि यह आपके बिजनेस को क्या लाभ देगा।",
    "final.lead": "निवेश का फैसला लेने से पहले तकनीकी फिजिबिलिटी, कमर्शियल मॉडल और 25 साल की बिजली बचत का पूरा विश्लेषण प्राप्त करें।",
    "final.btn_assessment": "सोलर ऑपर्च्युनिटी असेसमेंट प्राप्त करें",
    "final.btn_speak": "कमर्शियल इंजीनियर से बात करें",

    // Modal Form
    "modal.eyebrow": "गोपनीय कमर्शियल मॉडलिंग",
    "modal.title": "सोलर ऑपर्च्युनिटी असेसमेंट का अनुरोध करें",
    "modal.desc": "हम आपकी फैक्ट्री के लिए एक प्लांट-विशिष्ट उत्पादन अध्ययन, शैडो-लॉस सिमुलेशन और कैश-फ्लो मॉडल तैयार करते हैं। कोई बाध्यता नहीं।",
    "modal.lbl_name": "पूरा नाम *",
    "modal.lbl_company": "कंपनी का नाम *",
    "modal.lbl_email": "ऑफिस ईमेल *",
    "modal.lbl_phone": "मोबाइल नंबर *",
    "modal.lbl_city": "फैक्ट्री का स्थान / शहर *",
    "modal.lbl_bill": "अनुमानित मासिक बिजली बिल *",
    "modal.lbl_req": "सोलर का प्रकार",
    "modal.lbl_timeline": "प्रोजेक्ट कब शुरू करना है?",
    "modal.btn_submit": "मेरा सोलर असेसमेंट बनाएं"
  },

  gu: {
    // Navigation
    "nav.business_case": "બિઝનેસ કેસ",
    "nav.sectors": "ઉદ્યોગ ક્ષેત્રો",
    "nav.architecture": "સોલર મોડેલ્સ",
    "nav.cfo_economics": "CFO આર્થિક નફો",
    "nav.process": "એન્જિનિયરિંગ પ્રક્રિયા",
    "nav.boardroom_faqs": "બોર્ડરૂમ અને FAQs",
    "nav.get_assessment": "સોલર એસેસમેન્ટ મેળવો",

    // Hero Section
    "hero.badge_tag": "યુટિલિટી અને ઇન્ડસ્ટ્રિયલ સોલર EPC",
    "hero.badge_meta": "200+ MW કમિશન્ડ",
    "hero.headline_1": "તમારો પાવર ખર્ચ તમારી કંપનીના",
    "hero.headline_accent": "વિકાસને રોકવો ન જોઈએ.",
    "hero.subheadline": "કમર્શિયલ અને ઔદ્યોગિક પાવર ખર્ચને <strong>₹3.20/યુનિટ</strong> પર લૉક કરો — અને તમારા ઓપરેટિંગ EBITDA ને ગ્રીડ વીજળીના વધતા ભાવોથી સુરક્ષિત રાખો.",
    "hero.cta_assessment": "સોલર ઓપોર્ચ્યુનિટી એસેસમેન્ટ મેળવો",
    "hero.cta_expert": "અમારા નિષ્ણાત સાથે વાત કરો",
    "hero.trust_1": "પ્લાન્ટમાં શૂન્ય ડાઉનટાઇમ",
    "hero.trust_2": "છત પર કાણા વગરના ક્લેમ્પ્સ",
    "hero.trust_3": "100% GEDA / CEIG સરકારી મંજૂરીઓ",

    // Section 2: Problem / Business Case
    "problem.eyebrow": "બિઝનેસ કેસ",
    "problem.title": "સોલર એ EBITDA અને નફાકારકતાનો વ્યાપારી નિર્ણય છે.",
    "problem.lead": "ઓપરેટિંગ પાવર ખર્ચને લૉક કરો અને તમારા નફાને ગ્રીડ વીજળીના વધતા ભાવોથી સુરક્ષિત રાખો.",
    "problem.f1_tag": "પરિબળ 01",
    "problem.f1_title": "ઓપરેટિંગ માર્જિન",
    "problem.f1_desc": "સતત ભારે વીજ વપરાશ અને પીક ગ્રીડ ટેરિફ સીધા તમારા ઓપરેટિંગ EBITDA ને ઘટાડે છે.",
    "problem.f2_tag": "પરિબળ 02",
    "problem.f2_title": "મૂડી પેબેક",
    "problem.f2_desc": "ઝડપી એસેટ પેબેક અને પ્રથમ વર્ષે 40% ટેક્સ ડેપ્રિશિયેશનનો સંપૂર્ણ ફાયદો.",
    "problem.f3_tag": "પરિબળ 03",
    "problem.f3_title": "ESG અને ગ્રીન નિયમો",
    "problem.f3_desc": "વૈશ્વિક OEM ગ્રાહકો માટે પ્રમાણિત Scope-2 કાર્બન ઉત્સર્જનમાં ઘટાડો.",
    "problem.f4_tag": "પરિબળ 04",
    "problem.f4_title": "શૂન્ય અડચણ",
    "problem.f4_desc": "એન્જિનિયર્ડ માઉન્ટિંગ અને કાણા પાડ્યા વગરના ક્લેમ્પ્સ છતની મજબૂતાઈ જાળવી રાખે છે.",

    // Section 3: Strategic Value Proposition
    "value.eyebrow": "વ્યૂહાત્મક વેલ્યુ પ્રપોઝિશન",
    "value.title": "ચાર વ્યૂહાત્મક સ્તંભો પર રચાયેલ સોલર એન્જિનિયરિંગ",
    "value.lead": "એન્જિનિયરિંગ ચોકસાઈ. અમલીકરણ વિશ્વસનીયતા. વ્યાપારી નફો.",
    "value.hub": "વેલ્યુ<br>કોર",
    "value.q1_tag": "Q1 // માર્જિન સુરક્ષા",
    "value.q1_title": "ગ્રીડ પર નિર્ભરતામાં ઘટાડો",
    "value.q1_desc": "વધતા ટેરિફ સામે પ્લાન્ટ EBITDA ને સુરક્ષિત રાખો.",
    "value.q2_tag": "Q2 // ખર્ચ નિયંત્રણ",
    "value.q2_title": "25 વર્ષ સુધી નિશ્ચિત વીજ દર",
    "value.q2_desc": "25 વર્ષ સુધી ફિક્સ્ડ પાવર ટેરિફ સાથે બજેટ નિશ્ચિતતા મેળવો.",
    "value.q3_tag": "Q3 // રિટર્ન ઓન ઇન્વેસ્ટમેન્ટ",
    "value.q3_title": "મજબૂત બિઝનેસ ઇકોનોમિક્સ",
    "value.q3_desc": "2.8 વર્ષમાં પેબેક અને પ્રથમ વર્ષે 40% ટેક્સ ડેપ્રિશિયેશન.",
    "value.q4_tag": "Q4 // પર્યાવરણ અને વિકાસ",
    "value.q4_title": "સતત અને સુરક્ષિત વિકાસ",
    "value.q4_desc": "ઉત્પાદનમાં કોઈ અડચણ વગર કાર્બન ઉત્સર્જનમાં મોટો ઘટાડો.",

    // Section 4: Hardware Integrity Standard
    "hardware.eyebrow": "હાર્ડવેર વિશ્વસનીયતા ધોરણો",
    "hardware.title": "25 વર્ષ સુધી અવિરત મહત્તમ ઉત્પાદન માટે એન્જિનિયર્ડ",
    "hardware.lead": "ટિયર-1 વિશ્વસનીયતા, શૂન્ય ડિગ્રેડેશન અને ઓડિટેડ કામગીરી માટે દરેક પાર્ટની પસંદગી.",

    // Section 5: Sectors
    "sectors.eyebrow": "સેક્ટર-વિશિષ્ટ ઉકેલો",
    "sectors.title": "વિવિધ ઉદ્યોગો. વિવિધ ઊર્જા જરૂરિયાતો.",
    "sectors.lead": "સોલરને માત્ર એક જ સામાન્ય મેસેજથી ન સમજાવી શકાય. દરેક ઔદ્યોગિક ક્ષેત્રનું અલગ વ્યાપારી લક્ષ્ય હોય છે.",
    "sectors.tab_mfg": "મેન્યુફેક્ચરિંગ",
    "sectors.tab_warehousing": "વેરહાઉસિંગ અને લોજિસ્ટિક્સ",
    "sectors.tab_hospitality": "હોસ્પિટાલિટી અને હોટેલ્સ",
    "sectors.tab_healthcare": "હેલ્થકેર અને હોસ્પિટલ્સ",
    "sectors.tab_cre": "કમર્શિયલ રિયલ એસ્ટેટ",
    "sectors.tab_datacenters": "ડેટા સેન્ટર્સ",

    // Section 6: Solution Architecture
    "arch.eyebrow": "સોલ્યુશન આર્કિટેક્ચર",
    "arch.title": "યોગ્ય સોલર મોડેલ તમારા વ્યવસાયની જરૂરિયાત પર આધારિત છે.",
    "arch.lead": "બધા માટે એક જ નિયમ લાગુ પડતો નથી. યોગ્ય મોડેલ તમારી વીજ વપરાશ, ઇન્ફ્રાસ્ટ્રક્ચર, ખાલી જગ્યા અને બજેટ પર આધાર રાખે છે.",
    "arch.card1_tag": "મોડેલ 01 // રૂફટોપ",
    "arch.card1_title": "રૂફટોપ સોલર",
    "arch.card1_desc": "જમીનનો કોઈ ખર્ચ નહીં. ફેક્ટરીના શેડ અને છત પર સીધો દિવસનો વીજ વપરાશ.",
    "arch.card2_tag": "મોડેલ 02 // ગ્રાઉન્ડ-માઉન્ટ",
    "arch.card2_title": "ગ્રાઉન્ડ-માઉન્ટ સોલર",
    "arch.card2_desc": "ઉપલબ્ધ જમીન પર મલ્ટી-મેગાવોટ સ્કેલ અને મહત્તમ વીજ ઉત્પાદન.",
    "arch.card3_tag": "મોડેલ 03 // કેપ્ટિવ",
    "arch.card3_title": "ગ્રુપ કેપ્ટિવ સોલર",
    "arch.card3_desc": "મોટા રોકાણ વગર 26% ઇક્વિટી મોડેલ સાથે વીજળીના દરોમાં જંગી બચત.",
    "arch.card4_tag": "મોડેલ 04 // ઓપન એક્સેસ",
    "arch.card4_title": "ઓપન એક્સેસ સોલર",
    "arch.card4_desc": "રાજ્ય ગ્રીડ દ્વારા સીધા સોલર પાર્કમાંથી તમારી ફેક્ટરીમાં ગ્રીન પાવર લાવો.",

    // Section 7: Strategic Evaluation Matrix
    "matrix.eyebrow": "વ્યૂહાત્મક મૂલ્યાંકન મેટ્રિક્સ",
    "matrix.title": "સોલરનો નિર્ણય દેખાદેખી પર નહીં, કંપનીની સાચી જરૂરિયાત પર થવો જોઈએ",
    "matrix.lead": "બોર્ડરૂમના સૌથી સામાન્ય પ્રશ્નો અને વિકલ્પોની સીધી સરખામણી.",

    // Section 8: CFO Economics
    "cfo.eyebrow": "CFO આર્થિક નફો",
    "cfo.title": "સોલર એ નફાકારક કમર્શિયલ એસેટ છે, માત્ર ખર્ચ નથી",
    "cfo.lead": "યોગ્ય રીતે આયોજિત સોલર ભારતીય ઉદ્યોગો માટે સૌથી ઊંચો નફો (IRR) આપતો કેપિટલ પ્રોજેક્ટ છે.",

    // Calculator
    "calc.eyebrow": "ઇન્ટરેક્ટિવ ફાઇનાન્સિયલ કેલ્ક્યુલેટર",
    "calc.title": "તમારી ફેક્ટરીની સોલર બચતનો અંદાજ મેળવો",
    "calc.lead": "અંદાજિત પ્લાન્ટ ક્ષમતા અને વાર્ષિક બચત જોવા માટે તમારું માસિક વીજ બિલ પસંદ કરો.",
    "calc.slider_label": "માસિક વીજળીનું બિલ",
    "calc.cta_btn": "આ સેટઅપ માટે વિગતવાર ફિઝિબિલિટી રિપોર્ટ મેળવો",
    "calc.lbl_capacity": "ભલામણ કરેલ ક્ષમતા (Capacity)",
    "calc.lbl_savings": "અંદાજિત વાર્ષિક વીજળી બચત",
    "calc.lbl_payback": "અપેક્ષિત મૂડી પેબેક",
    "calc.lbl_lifetime": "25-વર્ષની કુલ લાઇફટાઇમ બચત",

    // Section 9: Audited Proof
    "proof.eyebrow": "ઓડિટેડ ઔદ્યોગિક પરિણામો",
    "proof.title": "અમારી સફળતા બેલેન્સ શીટના નફાથી માપવામાં આવે છે, માત્ર મેગાવોટથી નહીં",
    "proof.lead": "મોટાભાગની કંપનીઓ માત્ર કમિશનિંગની વાત કરે છે. અમે ચાલુ ઔદ્યોગિક પ્લાન્ટ્સમાં ઓડિટ થયેલ વાસ્તવિક વીજ બચત અને નક્કર પરિણામો દર્શાવીએ છીએ.",

    // Section 10: 6-Stage Engineering Process
    "process.eyebrow": "એન્જિનિયરિંગ પ્રક્રિયા",
    "process.title": "વીજ જરૂરિયાતથી પ્લાન્ટ કમિશનિંગ સુધીનો સંપૂર્ણ રોડમેપ",
    "process.lead": "ઉત્પાદનમાં કોઈપણ વિક્ષેપ વગર અને ગેરંટીડ વીજ ઉત્પાદન આપતી 6-તબક્કાની ટર્નકી પ્રક્રિયા.",

    // Final CTA & Form
    "final.title": "સોલર ખરીદતા પહેલા જાણો કે તે તમારા બિઝનેસ માટે શું નફો લાવશે.",
    "final.lead": "રોકાણનો નિર્ણય લેતા પહેલાં ટેકનિકલ ફિઝિબિલિટી, કોમર્શિયલ મોડેલ અને 25 વર્ષની ઊર્જા બચતનો વિગતવાર અંદાજ મેળવો.",
    "final.btn_assessment": "સોલર ઓપોર્ચ્યુનિટી એસેસમેન્ટ મેળવો",
    "final.btn_speak": "કમર્શિયલ એન્જિનિયર સાથે વાત કરો",

    // Assessment Modal Form
    "modal.eyebrow": "ખાનગી કમર્શિયલ મોડેલિંગ",
    "modal.title": "તમારા સોલર ઓપોર્ચ્યુનિટી એસેસમેન્ટની વિનંતી કરો",
    "modal.desc": "અમે તમારી ફેક્ટરી માટે ચોક્કસ ઉત્પાદન અભ્યાસ, શેડો-લોસ સિમ્યુલેશન અને કેશ-ફ્લો મોડેલ તૈયાર કરીએ છીએ. કોઈ ફરજિયાત બંધન નથી.",
    "modal.lbl_name": "પૂરું નામ *",
    "modal.lbl_company": "કંપનીનું નામ *",
    "modal.lbl_email": "ઓફિસ ઇમેઇલ *",
    "modal.lbl_phone": "મોબાઇલ નંબર *",
    "modal.lbl_city": "ફેક્ટરીનું સ્થળ / શહેર *",
    "modal.lbl_bill": "અંદાજિત માસિક વીજ બિલ *",
    "modal.lbl_req": "જરૂરિયાતનો પ્રકાર",
    "modal.lbl_timeline": "પ્રોજેક્ટ ક્યારે શરૂ કરવો છે?",
    "modal.btn_submit": "મારું સોલર એસેસમેન્ટ બનાવો"
  }
};
