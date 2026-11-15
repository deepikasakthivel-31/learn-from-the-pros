import type { SupportedLanguage } from "@/lib/marketplace";

export type CopyKey =
  | "learnTogether"
  | "findMentor"
  | "exploreSkills"
  | "browseMentors"
  | "forLearners"
  | "forProfessionals"
  | "howItWorks"
  | "signIn"
  | "language"
  | "searchPlaceholder"
  | "allSkills"
  | "allLanguages"
  | "availableMentors"
  | "monthlyFrom"
  | "viewProfile"
  | "sessionsPerMonth"
  | "verified"
  | "mentorSearch"
  | "mentorSearchDescription"
  | "search"
  | "clearFilters"
  | "tryAnotherSearch"
  | "learnWith"
  | "monthlyLearning"
  | "freeMessages"
  | "viewPrograms"
  | "aboutMentor"
  | "teachingLanguages"
  | "skills"
  | "monthlyProgram"
  | "sessionsIncluded"
  | "sendMessage"
  | "backToMentors"
  | "sampleLabel"
  | "howItWorksTitle"
  | "stepOne"
  | "stepTwo"
  | "stepThree"
  | "heroKicker"
  | "heroTitle"
  | "heroDescription"
  | "searchLabel"
  | "skillLabel"
  | "languageLabel"
  | "resultsLabel"
  | "mentorsSuffix"
  | "yearsExperience"
  | "learnWithMentor"
  | "planDescription"
  | "perMonth"
  | "sessionsIncludedText"
  | "aboutPageTitle"
  | "aboutPageDescription"
  | "contactPageTitle"
  | "contactPageDescription"
  | "helpPageTitle"
  | "helpPageDescription"
  | "allProfilesExample";

type CopyBook = Record<CopyKey, string>;

const english: CopyBook = {
  learnTogether: "Good work grows when it’s shared.",
  findMentor: "Find your person to learn from.",
  exploreSkills: "Explore skills",
  browseMentors: "Browse mentors",
  forLearners: "For learners",
  forProfessionals: "For professionals",
  howItWorks: "How it works",
  signIn: "Sign in",
  language: "Language",
  searchPlaceholder: "Try “Python”, “design” or a name",
  allSkills: "All skills",
  allLanguages: "All languages",
  availableMentors: "mentors to learn with",
  monthlyFrom: "per month",
  viewProfile: "View profile",
  sessionsPerMonth: "sessions / month",
  verified: "Verified mentor",
  mentorSearch: "A good guide changes everything.",
  mentorSearchDescription: "Meet experienced people who make the next step in your learning feel possible.",
  search: "Search",
  clearFilters: "Clear filters",
  tryAnotherSearch: "Try another skill, language or search.",
  learnWith: "Learn with",
  monthlyLearning: "Monthly learning plan",
  freeMessages: "5 free messages to start",
  viewPrograms: "Browse learning plans",
  aboutMentor: "A little about the mentor",
  teachingLanguages: "Teaching languages",
  skills: "What we can learn together",
  monthlyProgram: "Monthly program",
  sessionsIncluded: "guided sessions included",
  sendMessage: "Start a conversation",
  backToMentors: "Back to mentors",
  sampleLabel: "Sample profile",
  howItWorksTitle: "A learning rhythm that feels personal.",
  stepOne: "Find a mentor who gets your goals.",
  stepTwo: "Start with a few messages and agree on a plan.",
  stepThree: "Learn together, one practical session at a time.",
  heroKicker: "A little closer to the work you want to do",
  heroTitle: "Learn practical skills from people who use them every day.",
  heroDescription: "Find a thoughtful mentor, ask your first questions, and make a monthly learning plan that fits your goals.",
  searchLabel: "Search by skill or name",
  skillLabel: "Skill area",
  languageLabel: "Teaching language",
  resultsLabel: "Showing",
  mentorsSuffix: "mentors",
  yearsExperience: "years experience",
  learnWithMentor: "Learn with a mentor",
  planDescription: "Monthly learning plan",
  perMonth: "per month",
  sessionsIncludedText: "guided sessions included",
  aboutPageTitle: "Practical learning, shared generously.",
  aboutPageDescription: "Skills Exchange brings learners and experienced professionals together for practical, personal learning.",
  contactPageTitle: "We’d love to hear from you.",
  contactPageDescription: "Questions about the learning marketplace? Our support contact details will be published before launch.",
  helpPageTitle: "A little help goes a long way.",
  helpPageDescription: "Answers to common questions about learning with Skills Exchange.",
  allProfilesExample: "Example profiles and prices for preview only",
};

const localized: Record<SupportedLanguage, Partial<CopyBook>> = {
  English: english,
  Tamil: {
    learnTogether: "பகிர்ந்தால் திறமை மேலும் வளரும்.",
    findMentor: "கற்றுக்கொள்ள உங்களுக்கு ஏற்ற வழிகாட்டியைக் கண்டறியுங்கள்.",
    exploreSkills: "திறன்களை ஆராயுங்கள்",
    browseMentors: "வழிகாட்டிகளைப் பாருங்கள்",
    forLearners: "கற்பவர்களுக்கு",
    forProfessionals: "தொழில்முனைவோருக்கு",
    howItWorks: "இது எப்படி செயல்படுகிறது",
    signIn: "உள்நுழை",
    language: "மொழி",
    searchPlaceholder: "“Python”, “design” அல்லது பெயரைத் தேடுங்கள்",
    allSkills: "அனைத்து திறன்களும்",
    allLanguages: "அனைத்து மொழிகளும்",
    search: "தேடு",
    clearFilters: "வடிகட்டிகளை நீக்கு",
    verified: "சரிபார்க்கப்பட்ட வழிகாட்டி",
    sendMessage: "உரையாடலைத் தொடங்கு",
    backToMentors: "வழிகாட்டிகளுக்குத் திரும்பு",
    heroKicker: "நீங்கள் செய்ய விரும்பும் பணியை இன்னும் நெருக்கமாக அறியுங்கள்",
    heroTitle: "தினமும் பயன்படுத்தும் நிபுணர்களிடமிருந்து நடைமுறைத் திறன்களைக் கற்றுக்கொள்ளுங்கள்.",
    heroDescription: "சரியான வழிகாட்டியைக் கண்டறிந்து, உங்கள் முதல் கேள்விகளைக் கேட்டு, இலக்குகளுக்கேற்ற மாதாந்திரக் கற்றல் திட்டத்தை உருவாக்குங்கள்.",
    searchLabel: "திறன் அல்லது பெயரைத் தேடுங்கள்",
    skillLabel: "திறன் துறை",
    languageLabel: "கற்பிக்கும் மொழி",
    mentorsSuffix: "வழிகாட்டிகள்",
    yearsExperience: "ஆண்டுகள் அனுபவம்",
    planDescription: "மாதாந்திரக் கற்றல் திட்டம்",
    perMonth: "மாதத்திற்கு",
    aboutPageTitle: "பயனுள்ள கற்றலை அன்புடன் பகிர்வோம்.",
    contactPageTitle: "உங்கள் கருத்தைக் கேட்க விரும்புகிறோம்.",
    helpPageTitle: "சிறிய உதவி பெரிய மாற்றம் தரும்.",
    allProfilesExample: "முன்னோட்டத்திற்கான உதாரண சுயவிவரங்கள் மற்றும் விலைகள்",
  },
  Hindi: {
    learnTogether: "साझा करने से हुनर और निखरता है।",
    findMentor: "सीखने के लिए अपना मार्गदर्शक खोजें।",
    exploreSkills: "कौशल देखें",
    browseMentors: "मार्गदर्शक देखें",
    forLearners: "सीखने वालों के लिए",
    forProfessionals: "पेशेवरों के लिए",
    howItWorks: "यह कैसे काम करता है",
    signIn: "साइन इन",
    language: "भाषा",
    searchPlaceholder: "“Python”, “design” या नाम खोजें",
    allSkills: "सभी कौशल",
    allLanguages: "सभी भाषाएँ",
    search: "खोजें",
    clearFilters: "फ़िल्टर हटाएँ",
    verified: "सत्यापित मार्गदर्शक",
    sendMessage: "बातचीत शुरू करें",
    backToMentors: "मार्गदर्शकों पर वापस जाएँ",
    heroKicker: "अपने पसंदीदा काम को और करीब से जानें",
    heroTitle: "उन लोगों से व्यावहारिक कौशल सीखें जो हर दिन उनका उपयोग करते हैं।",
    heroDescription: "अपना मार्गदर्शक खोजें, शुरुआत के सवाल पूछें और अपने लक्ष्यों के अनुसार मासिक सीखने की योजना बनाएँ।",
    searchLabel: "कौशल या नाम से खोजें",
    skillLabel: "कौशल क्षेत्र",
    languageLabel: "सिखाने की भाषा",
    mentorsSuffix: "मार्गदर्शक",
    yearsExperience: "वर्षों का अनुभव",
    planDescription: "मासिक सीखने की योजना",
    perMonth: "प्रति माह",
    aboutPageTitle: "काम की सीख, उदारता से साझा।",
    contactPageTitle: "हम आपसे सुनना चाहेंगे।",
    helpPageTitle: "थोड़ी मदद बहुत काम आती है।",
    allProfilesExample: "केवल पूर्वावलोकन के लिए उदाहरण प्रोफ़ाइल और कीमतें",
  },
  Telugu: {
    learnTogether: "పంచుకుంటే నైపుణ్యం మరింత పెరుగుతుంది.",
    findMentor: "నేర్చుకోవడానికి మీ మార్గదర్శిని కనుగొనండి.",
    exploreSkills: "నైపుణ్యాలను చూడండి",
    browseMentors: "మార్గదర్శులను చూడండి",
    forLearners: "నేర్చుకునేవారి కోసం",
    forProfessionals: "నిపుణుల కోసం",
    howItWorks: "ఇది ఎలా పనిచేస్తుంది",
    signIn: "సైన్ ఇన్",
    language: "భాష",
    searchPlaceholder: "“Python”, “design” లేదా పేరు వెతకండి",
    allSkills: "అన్ని నైపుణ్యాలు",
    allLanguages: "అన్ని భాషలు",
    search: "వెతకండి",
    clearFilters: "ఫిల్టర్లను తొలగించండి",
    verified: "ధృవీకరించిన మార్గదర్శి",
    sendMessage: "సంభాషణ ప్రారంభించండి",
    backToMentors: "మార్గదర్శుల వద్దకు తిరిగి వెళ్లండి",
    heroKicker: "మీరు చేయాలనుకునే పనిని మరింత దగ్గరగా తెలుసుకోండి",
    heroTitle: "ప్రతిరోజూ ఉపయోగించే నిపుణుల నుంచి ఆచరణాత్మక నైపుణ్యాలు నేర్చుకోండి.",
    heroDescription: "మీ మార్గదర్శిని కనుగొని, మొదటి ప్రశ్నలు అడిగి, మీ లక్ష్యాలకు సరిపోయే నెలవారీ అభ్యాస ప్రణాళికను రూపొందించండి.",
    searchLabel: "నైపుణ్యం లేదా పేరు ద్వారా వెతకండి",
    skillLabel: "నైపుణ్య విభాగం",
    languageLabel: "బోధించే భాష",
    mentorsSuffix: "మార్గదర్శులు",
    yearsExperience: "సంవత్సరాల అనుభవం",
    planDescription: "నెలవారీ అభ్యాస ప్రణాళిక",
    perMonth: "నెలకు",
    aboutPageTitle: "ఆచరణాత్మక అభ్యాసాన్ని మనస్ఫూర్తిగా పంచుకుందాం.",
    contactPageTitle: "మీతో మాట్లాడాలని ఉంది.",
    helpPageTitle: "చిన్న సహాయం ఎంతో ఉపయోగపడుతుంది.",
    allProfilesExample: "ప్రివ్యూ కోసం మాత్రమే ఉదాహరణ ప్రొఫైళ్లు, ధరలు",
  },
  Malayalam: {
    learnTogether: "പങ്കിടുമ്പോൾ കഴിവുകൾ വളരുന്നു.",
    findMentor: "പഠിക്കാൻ നിങ്ങളുടേതായ വഴികാട്ടിയെ കണ്ടെത്തൂ.",
    exploreSkills: "കഴിവുകൾ അന്വേഷിക്കൂ",
    browseMentors: "വഴികാട്ടികളെ കാണൂ",
    forLearners: "പഠിതാക്കൾക്കായി",
    forProfessionals: "പ്രൊഫഷണലുകൾക്കായി",
    howItWorks: "ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു",
    signIn: "സൈൻ ഇൻ",
    language: "ഭാഷ",
    searchPlaceholder: "“Python”, “design” അല്ലെങ്കിൽ പേര് തിരയൂ",
    allSkills: "എല്ലാ കഴിവുകളും",
    allLanguages: "എല്ലാ ഭാഷകളും",
    search: "തിരയൂ",
    clearFilters: "ഫിൽട്ടറുകൾ നീക്കൂ",
    verified: "സ്ഥിരീകരിച്ച വഴികാട്ടി",
    sendMessage: "സംഭാഷണം തുടങ്ങൂ",
    backToMentors: "വഴികാട്ടികളിലേക്ക് മടങ്ങൂ",
    heroKicker: "നിങ്ങൾ ആഗ്രഹിക്കുന്ന ജോലിയിലേക്ക് ഒരു പടി കൂടി",
    heroTitle: "ദിവസവും ഉപയോഗിക്കുന്ന വിദഗ്ധരിൽ നിന്ന് പ്രായോഗിക കഴിവുകൾ പഠിക്കൂ.",
    heroDescription: "നിങ്ങളുടെ വഴികാട്ടിയെ കണ്ടെത്തി, ആദ്യ ചോദ്യങ്ങൾ ചോദിച്ച്, ലക്ഷ്യങ്ങൾക്ക് യോജിച്ച പ്രതിമാസ പഠനപദ്ധതി ഒരുക്കൂ.",
    searchLabel: "കഴിവോ പേരോ തിരയൂ",
    skillLabel: "കഴിവിന്റെ മേഖല",
    languageLabel: "പഠിപ്പിക്കുന്ന ഭാഷ",
    mentorsSuffix: "വഴികാട്ടികൾ",
    yearsExperience: "വർഷത്തെ പരിചയം",
    planDescription: "പ്രതിമാസ പഠനപദ്ധതി",
    perMonth: "പ്രതിമാസം",
    aboutPageTitle: "പ്രായോഗിക പഠനം, മനസ്സോടെ പങ്കിടാം.",
    contactPageTitle: "നിങ്ങളിൽ നിന്ന് കേൾക്കാൻ ആഗ്രഹമുണ്ട്.",
    helpPageTitle: "ഒരു ചെറിയ സഹായം ഏറെ വിലപ്പെട്ടതാണ്.",
    allProfilesExample: "പ്രിവ്യൂവിനുള്ള മാതൃകാ പ്രൊഫൈലുകളും നിരക്കുകളും മാത്രം",
  },
  Kannada: {
    learnTogether: "ಹಂಚಿಕೊಂಡಾಗ ಕೌಶಲ್ಯ ಬೆಳೆಯುತ್ತದೆ.",
    findMentor: "ಕಲಿಯಲು ನಿಮ್ಮ ಮಾರ್ಗದರ್ಶಕರನ್ನು ಕಂಡುಕೊಳ್ಳಿ.",
    exploreSkills: "ಕೌಶಲ್ಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
    browseMentors: "ಮಾರ್ಗದರ್ಶಕರನ್ನು ನೋಡಿ",
    forLearners: "ಕಲಿಯುವವರಿಗೆ",
    forProfessionals: "ವೃತ್ತಿಪರರಿಗೆ",
    howItWorks: "ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
    signIn: "ಸೈನ್ ಇನ್",
    language: "ಭಾಷೆ",
    searchPlaceholder: "“Python”, “design” ಅಥವಾ ಹೆಸರನ್ನು ಹುಡುಕಿ",
    allSkills: "ಎಲ್ಲಾ ಕೌಶಲ್ಯಗಳು",
    allLanguages: "ಎಲ್ಲಾ ಭಾಷೆಗಳು",
    search: "ಹುಡುಕಿ",
    clearFilters: "ಫಿಲ್ಟರ್ ತೆರವುಗೊಳಿಸಿ",
    verified: "ಪರಿಶೀಲಿಸಿದ ಮಾರ್ಗದರ್ಶಕ",
    sendMessage: "ಸಂಭಾಷಣೆ ಪ್ರಾರಂಭಿಸಿ",
    backToMentors: "ಮಾರ್ಗದರ್ಶಕರಿಗೆ ಹಿಂತಿರುಗಿ",
    heroKicker: "ನೀವು ಮಾಡಲು ಬಯಸುವ ಕೆಲಸಕ್ಕೆ ಇನ್ನಷ್ಟು ಹತ್ತಿರ",
    heroTitle: "ಪ್ರತಿದಿನ ಬಳಸುವ ತಜ್ಞರಿಂದ ಪ್ರಾಯೋಗಿಕ ಕೌಶಲ್ಯಗಳನ್ನು ಕಲಿಯಿರಿ.",
    heroDescription: "ನಿಮ್ಮ ಮಾರ್ಗದರ್ಶಕರನ್ನು ಕಂಡುಕೊಳ್ಳಿ, ಮೊದಲ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ, ನಿಮ್ಮ ಗುರಿಗಳಿಗೆ ಹೊಂದುವ ಮಾಸಿಕ ಕಲಿಕಾ ಯೋಜನೆ ರೂಪಿಸಿ.",
    searchLabel: "ಕೌಶಲ್ಯ ಅಥವಾ ಹೆಸರಿನಿಂದ ಹುಡುಕಿ",
    skillLabel: "ಕೌಶಲ್ಯದ ಕ್ಷೇತ್ರ",
    languageLabel: "ಬೋಧನಾ ಭಾಷೆ",
    mentorsSuffix: "ಮಾರ್ಗದರ್ಶಕರು",
    yearsExperience: "ವರ್ಷಗಳ ಅನುಭವ",
    planDescription: "ಮಾಸಿಕ ಕಲಿಕಾ ಯೋಜನೆ",
    perMonth: "ತಿಂಗಳಿಗೆ",
    aboutPageTitle: "ಪ್ರಾಯೋಗಿಕ ಕಲಿಕೆಯನ್ನು ಮನಸಾರೆ ಹಂಚಿಕೊಳ್ಳಿ.",
    contactPageTitle: "ನಿಮ್ಮ ಮಾತು ಕೇಳಲು ಸಂತೋಷವಾಗುತ್ತದೆ.",
    helpPageTitle: "ಸ್ವಲ್ಪ ಸಹಾಯವೂ ಬಹಳ ಉಪಯುಕ್ತ.",
    allProfilesExample: "ಪೂರ್ವವೀಕ್ಷಣೆಗಾಗಿ ಮಾತ್ರ ಮಾದರಿ ಪ್ರೊಫೈಲ್‌ಗಳು ಮತ್ತು ಬೆಲೆಗಳು",
  },
};

export function getCopy(language: SupportedLanguage, key: CopyKey) {
  return localized[language][key] ?? english[key];
}