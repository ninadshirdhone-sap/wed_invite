/**
 * Pure helper functions for the Ninad & Rachana Wedding Invitation
 */

export interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export function calculateTimeRemaining(targetIsoString: string, currentTimestamp: number = Date.now()): CountdownResult {
  const targetTime = new Date(targetIsoString).getTime();
  const diff = targetTime - currentTimestamp;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds, isPast: false };
}

export function generateWhatsAppRsvpUrl(phone: string, guestName: string, attending: boolean, guestCount: number, message: string = ''): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const attendanceText = attending ? 'Joyfully Attending' : 'Regretfully Declining';
  
  let text = `Namaste Ninad & Rachana! 🙏\n\n`;
  text += `RSVP: ${attendanceText}\n`;
  if (guestName.trim()) {
    text += `Guest Name: ${guestName.trim()}\n`;
  }
  if (attending) {
    text += `Number of Guests: ${guestCount}\n`;
  }
  if (message.trim()) {
    text += `Blessings/Message: "${message.trim()}"\n`;
  }
  text += `\nLooking forward to celebrating together!`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

export function generateGoogleMapsSearchUrl(venue: string, placeId?: string): string {
  const base = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue)}`;
  return placeId ? `${base}&query_place_id=${encodeURIComponent(placeId)}` : base;
}

export type SupportedLanguage = 'en' | 'mr';

export interface InvitationTranslations {
  heroSub: string;
  groomHero: string;
  brideHero: string;
  weddingDateHero: string;
  heroStatus: string;
  scrollExplore: string;
  
  inviteSub: string;
  inviteScript: string;
  groomLabel: string;
  groomParents: string;
  brideLabel: string;
  brideParents: string;
  inviteTogether: string;
  eventsHeader: string;

  haldiTag: string;
  haldiTitle: string;
  haldiBadge: string;
  haldiDesc: string;
  haldiDay: string;
  haldiDate: string;
  haldiTimeLabel: string;
  haldiTimeVal: string;
  haldiVenue: string;
  haldiBtn: string;

  sangeetTag: string;
  sangeetTitle: string;
  sangeetBadge: string;
  sangeetDesc: string;
  sangeetDay: string;
  sangeetDate: string;
  sangeetTimeLabel: string;
  sangeetTimeVal: string;
  sangeetVenue: string;
  sangeetBtn: string;

  weddingMuhurthamBanner: string;
  weddingTag: string;
  weddingTitle: string;
  weddingBadge: string;
  weddingDesc: string;
  weddingDay: string;
  weddingDate: string;
  weddingTimeLabel: string;
  weddingTimeVal: string;
  weddingVenue: string;
  weddingBtn: string;

  dioramaQuote: string;
  dioramaBadge: string;

  rsvpTag: string;
  rsvpTitle: string;
  rsvpDesc: string;
  rsvpBtn: string;
  rsvpSubtext: string;

  countdownTitle: string;
  countdownSub: string;
  timerDays: string;
  timerHours: string;
  timerMins: string;
  timerSecs: string;
  petalsBtn: string;
  petalsSub: string;

  coupleFooter: string;
  dateFooter: string;
  foreverBegins: string;
  withLove: string;
  familiesFooter: string;
  welcomesYou: string;
  addToCalendar: string;
  shareInvite: string;
  audioPlay: string;
  audioPlaying: string;
}

export const translations: Record<SupportedLanguage, InvitationTranslations> = {
  en: {
    heroSub: "With joy in our hearts, we celebrate",
    groomHero: "NINAD",
    brideHero: "RACHANA",
    weddingDateHero: "28 DECEMBER 2026",
    heroStatus: "ARE GETTING MARRIED",
    scrollExplore: "Scroll to Explore",

    inviteSub: "With the divine blessings of God and our beloved families, we cordially invite you to celebrate the wedding ceremony of",
    inviteScript: "Invite",
    groomLabel: "NINAD",
    groomParents: "Son of Mr. Sagar Shirdhone & Mrs. Suvarna Shirdhone",
    brideLabel: "RACHANA",
    brideParents: "Daughter of Mr. Raju Urane & Mrs. Vaishali Urane",
    inviteTogether: "Together with their families, Ninad & Rachana request the pleasure of your presence and blessings as they begin their sacred journey of togetherness.",
    eventsHeader: "On the following auspicious events",

    haldiTag: "CELEBRATION",
    haldiTitle: "Haldi Ceremony",
    haldiBadge: "Haldi",
    haldiDesc: "A sunlit morning of auspicious turmeric, holy blessings, and family happiness.",
    haldiDay: "Sunday",
    haldiDate: "27 Dec 2026",
    haldiTimeLabel: "Timing",
    haldiTimeVal: "5:00 PM onwards",
    haldiVenue: "Pandurang Mangal Karyalaya",
    haldiBtn: "View Location",

    sangeetTag: "CELEBRATION",
    sangeetTitle: "Sangeet Ceremony",
    sangeetBadge: "Sangeet",
    sangeetDesc: "An enchanting evening of music, dance, and joyful celebration as both families unite.",
    sangeetDay: "Sunday",
    sangeetDate: "27 Dec 2026",
    sangeetTimeLabel: "Timing",
    sangeetTimeVal: "5:00 PM onwards",
    sangeetVenue: "Pandurang Mangal Karyalaya",
    sangeetBtn: "View Location",

    weddingMuhurthamBanner: "✦ SHUBH MUHURTHAM · MAIN CEREMONY ✦",
    weddingTag: "SACRED VOWS",
    weddingTitle: "Wedding Ceremony",
    weddingBadge: "11:27 AM",
    weddingDesc: "Sacred Vedic Saat Phere, holy rituals, and solemn blessings for our eternal bond.",
    weddingDay: "Monday",
    weddingDate: "28 Dec 2026",
    weddingTimeLabel: "Muhurtham",
    weddingTimeVal: "11:27 AM",
    weddingVenue: "Pandurang Mangal Karyalaya",
    weddingBtn: "View Location",

    dioramaQuote: "\"Where two souls unite in timeless grace before the divine\"",
    dioramaBadge: "SHUBH MUHURTHAM · 11:27 AM",

    rsvpTag: "KINDLY RESPOND",
    rsvpTitle: "Will You Join Us?",
    rsvpDesc: "We would be truly honoured to celebrate with you. Please let us know if you will be joining our wedding festivities.",
    rsvpBtn: "RSVP via WhatsApp",
    rsvpSubtext: "Tap to confirm your attendance with Ninad & Rachana on WhatsApp (+91 84548 55058)",

    countdownTitle: "Counting the Days",
    countdownSub: "Until our Auspicious Muhurtham",
    timerDays: "Days",
    timerHours: "Hours",
    timerMins: "Mins",
    timerSecs: "Secs",
    petalsBtn: "Touch here for Magic",
    petalsSub: "Tap anytime to shower sacred rose petal blessings!",

    coupleFooter: "Ninad & Rachana",
    dateFooter: "28 DECEMBER 2026",
    foreverBegins: "Forever Begins Here",
    withLove: "With sincere love, gratitude and blessings,",
    familiesFooter: "The Shirdhone & Urane Families",
    welcomesYou: "Welcomes You",
    addToCalendar: "Add to Calendar",
    shareInvite: "Share Invite",
    audioPlay: "Play Music",
    audioPlaying: "Playing Music"
  },
  mr: {
    heroSub: "।। सस्नेह निमंत्रण ।।",
    groomHero: "निनाद",
    brideHero: "रचना",
    weddingDateHero: "२८ डिसेंबर २०२६",
    heroStatus: "शुभ विवाह",
    scrollExplore: "निमंत्रण पत्रिका पहा",

    inviteSub: "श्रींच्या कृपेने व वडीलधाऱ्यांच्या आशीर्वादाने आमच्या येथे शुभविवाह ठरला आहे, तरी या मंगल प्रसंगी आपली उपस्थिती प्रार्थनीय आहे.",
    inviteScript: "निमंत्रण",
    groomLabel: "चि. निनाद",
    groomParents: "श्री. सागर शिरढोणे व सौ. सुवर्णा शिरढोणे यांचे सुपुत्र",
    brideLabel: "चि. सौ. कां. रचना",
    brideParents: "श्री. राजू उरणे व सौ. वैशाली उरणे यांची सुकन्या",
    inviteTogether: "समस्त शिरढोणे व उरणे परिवारातर्फे आपणास सहकुटुंब, सहपरिवार उपस्थित राहून वधू-वरांस शुभाशीर्वाद देण्याचे नम्र निमंत्रण.",
    eventsHeader: "।। शुभ विवाह सोहळा कार्यक्रम ।।",

    haldiTag: "मांगल्य सोहळा",
    haldiTitle: "हळदी समारंभ",
    haldiBadge: "हळद",
    haldiDesc: "शुभ हळदीचा रंग, आपुलकीचा सुगंध आणि शुभाशीर्वादांची मंगलमय सकाळ.",
    haldiDay: "रविवार",
    haldiDate: "२७ डिसेंबर २०२६",
    haldiTimeLabel: "वेळ",
    haldiTimeVal: "सायं. ५:०० वाजता",
    haldiVenue: "पांडुरंग मंगल कार्यालय",
    haldiBtn: "स्थळ नकाशा",

    sangeetTag: "उत्सव आणि आनंद",
    sangeetTitle: "संगीत सोहळा",
    sangeetBadge: "संगीत",
    sangeetDesc: "गीत, संगीत आणि नृत्याविष्कारासह दोन्ही परिवारांचा मनमोहक आनंदोत्सव.",
    sangeetDay: "रविवार",
    sangeetDate: "२७ डिसेंबर २०२६",
    sangeetTimeLabel: "वेळ",
    sangeetTimeVal: "सायं. ५:०० वाजता",
    sangeetVenue: "पांडुरंग मंगल कार्यालय",
    sangeetBtn: "स्थळ नकाशा",

    weddingMuhurthamBanner: "✦ शुभ मुहूर्त · मुख्य विवाह सोहळा ✦",
    weddingTag: "पवित्र सप्तपदी",
    weddingTitle: "शुभ विवाह",
    weddingBadge: "स. ११:२७",
    weddingDesc: "वैदिक मंत्रोच्चार, मंगलाष्टके, पवित्र सप्तपदी आणि वडीलधाऱ्यांचे शुभाशीर्वाद.",
    weddingDay: "सोमवार",
    weddingDate: "२८ डिसेंबर २०२६",
    weddingTimeLabel: "शुभ मुहूर्त",
    weddingTimeVal: "सकाळी ११:२७ वा.",
    weddingVenue: "पांडुरंग मंगल कार्यालय",
    weddingBtn: "स्थळ नकाशा",

    dioramaQuote: "।। दोन आत्म्यांचे पवित्र मिलन देवाच्या साक्षीने ।।",
    dioramaBadge: "शुभ मुहूर्त · स. ११:२७ वा.",

    rsvpTag: "उपस्थितीची पूर्वसूचना",
    rsvpTitle: "आपण उपस्थित राहणार ना?",
    rsvpDesc: "आपली मंगल उपस्थिती नवदाम्पत्यास अखंड आशीर्वाद देईल. कृपया आपल्या उपस्थितीची पूर्वकल्पना द्यावी.",
    rsvpBtn: "व्हॉट्सॲपवर उपस्थिती कळवा",
    rsvpSubtext: "निनाद आणि रचना यांना व्हॉट्सॲपवर कळवण्यासाठी येथे स्पर्श करा (+91 84548 55058)",

    countdownTitle: "शुभ मुहूर्ताचे दिवस",
    countdownSub: "मंगल क्षणाची प्रतीक्षा",
    timerDays: "दिवस",
    timerHours: "तास",
    timerMins: "मिनिटे",
    timerSecs: "सेकंद",
    petalsBtn: "शुभ अक्षता व पुष्पवृष्टी",
    petalsSub: "गुलाब पाकळ्यांचा वर्षाव करण्यासाठी येथे स्पर्श करा!",

    coupleFooter: "निनाद व रचना",
    dateFooter: "२८ डिसेंबर २०२६",
    foreverBegins: "दोन जीवांचे रेशीमबंध",
    withLove: "स्नेह, आदर आणि शुभाशीर्वादांसह,",
    familiesFooter: "शिरढोणे व उरणे परिवार",
    welcomesYou: "आपले सहर्ष स्वागत करीत आहे",
    addToCalendar: "कॅलेंडरमध्ये जोडा",
    shareInvite: "निमंत्रण शेअर करा",
    audioPlay: "संगीत सुरू करा",
    audioPlaying: "संगीत सुरू आहे"
  }
};

export function getTranslations(lang: SupportedLanguage): InvitationTranslations {
  return translations[lang] || translations.en;
}

