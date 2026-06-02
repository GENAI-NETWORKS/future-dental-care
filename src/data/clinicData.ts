import { 
  Drill, 
  Anchor, 
  Sparkles, 
  Smile, 
  AlignCenter, 
  Scissors, 
  Sun, 
  PenTool, 
  Minus, 
  Star 
} from 'lucide-react';

export const clinicInfo = {
  name: "Future Dental Care",
  tagline: "Smile! It Increases Your Face Value",
  address: "Future Dental Care Srinivas Complex, 4/2-307, Kannagi Nagar, Angammal Colony, Salem, Tamil Nadu 636009",
  email: "futuredentalcare2022@gmail.com",
  phone: "96982 82828",
  phoneRaw: "+919698282828", // For tel: links
  hours: "Sunday only by appointment"
};

export const doctors = [
  {
    id: "dr-balaji",
    name: "Dr. K.C. Balaji Raja",
    degrees: "BDS",
    role: "Dental Surgeon",
    phone: "98944 25686",
    phoneRaw: "+919894425686",
    specialties: ["General Dentistry", "Restorative Care", "Preventive Dentistry"]
  },
  {
    id: "dr-saradha",
    name: "Dr. R. Saradha",
    degrees: "MDS",
    role: "Periodontist & Implantologist",
    phone: "98944 25656",
    phoneRaw: "+919894425656",
    specialties: ["Dental Implants", "Gum Surgery", "Periodontal Therapy"]
  }
];

export const services = [
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    description: "Save your natural tooth and relieve dental pain with our advanced, painless root canal therapy.",
    icon: Drill
  },
  {
    id: "implants",
    title: "Dental Implants",
    description: "Permanent, natural-looking replacements for missing teeth that restore function and aesthetics.",
    icon: Anchor
  },
  {
    id: "laser",
    title: "Laser Treatment",
    description: "Minimally invasive laser dentistry for precise, virtually painless procedures and faster healing.",
    icon: Sparkles
  },
  {
    id: "dentures",
    title: "Dentures (Fixed & Removable)",
    description: "Custom-fitted complete and partial dentures designed for maximum comfort and a natural look.",
    icon: Smile
  },
  {
    id: "ortho",
    title: "Orthodontic Treatment",
    description: "Straighten your teeth and correct your bite with traditional braces or clear aligners.",
    icon: AlignCenter
  },
  {
    id: "flap-surgery",
    title: "Flap Surgery (Gum Treatment)",
    description: "Advanced surgical treatment for severe gum disease to restore your oral health.",
    icon: Scissors
  },
  {
    id: "whitening",
    title: "Tooth Whitening",
    description: "Professional whitening services to remove stains and brighten your smile dramatically.",
    icon: Sun
  },
  {
    id: "filling",
    title: "Tooth Filling",
    description: "Durable, tooth-colored composite fillings to repair cavities and restore tooth structure.",
    icon: PenTool
  },
  {
    id: "extraction",
    title: "Tooth Extraction",
    description: "Safe and comfortable removal of severely damaged or impacted teeth, including wisdom teeth.",
    icon: Minus
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description: "Comprehensive aesthetic treatments including veneers and smile makeovers to enhance your look.",
    icon: Star
  }
];

export const stats = [
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Happy Patients", value: 5000, suffix: "+" },
  { label: "Expert Doctors", value: 2, suffix: "" },
  { label: "Rating", value: 4.9, suffix: "" }
];

export const socialLinks = {
  instagram: "https://instagram.com",
  whatsapp: "https://wa.me/919698282828",
  facebook: "https://facebook.com"
};
