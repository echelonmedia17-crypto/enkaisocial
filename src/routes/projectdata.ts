import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import pf1 from "@/assets/pf-1.jpg";
import pf2 from "@/assets/pf-2.jpg";
import pf3 from "@/assets/pf-3.jpg";
import pf4 from "@/assets/pf-4.jpg";
import pf5 from "@/assets/pf-5.jpg";
import pf6 from "@/assets/pf-6.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

export interface ProjectStat {
  number: string;
  label: string;
}

export interface ProjectImpactStat {
  icon: string;
  number: string;
  label: string;
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  designation: string;
}

export type ProjectHighlightIcon =
  | "user"
  | "grid"
  | "clock"
  | "device"
  | "clipboard"
  | "target"
  | "fingerprint"
  | "message"
  | "image"
  | "file"
  | "globe"
  | "shield"
  | "award"
  | "rocket"
  | "users"
  | "trophy"
  | "pencil"
  | "megaphone"
  | "trending"
  | "barChart"
  | "star"
  | "handshake";

export interface Project {
  id: number;
  name: string;
  category: string;
  img: string;
  instagram: string;
  blurb: string;
  description: string;
  highlights: string[];
  gallery: string[];
  year?: string;
  location?: string;
  duration?: string;
  stats?: ProjectStat[];
  behindScenes?: string[];
  impactText?: string;
  impactStats?: ProjectImpactStat[];
  technologies?: string[];
  testimonial?: ProjectTestimonial | null;
}

export const ALL_PROJECTS_ENKAI: Project[] = [
  {
    id: 1,
    name: "DAV United Festival",
    category: "Concerts",
    img: portfolio1,
    instagram: "https://www.instagram.com/dav.united.festival/",
    blurb: "A festival-scale celebration captured in full swing.",
    description:
      "A three-day cultural spectacle bringing together 15,000 attendees across music, art, and dialogue. We captured every stage, every standing ovation, and every backstage whisper — published to the feed before the applause faded.",
    year: "2025",
    location: "New Delhi",
    duration: "3 Days",
    highlights: [
      "Multi-camera stage coverage with live switching",
      "Same-day highlight reels for socials",
      "Behind-the-scenes documentary edit",
      "Artist & audience cinematic captures",
    ],
    stats: [
      { number: "3", label: "Days of Coverage" },
      { number: "25+", label: "Performances Captured" },
      { number: "100+", label: "Reels Delivered" },
      { number: "1M+", label: "Digital Reach" },
    ],
    gallery: [portfolio1, pf5, hero1, pf2, pf6],
    behindScenes: [hero1, pf2, pf6],
    impactText:
      "Our real-time content strategy and cinematic storytelling helped DAV United engage audiences far beyond the venue — creating a lasting digital footprint of the festival that continued to generate reach weeks after the event.",
    impactStats: [
      { icon: "👥", number: "15K+", label: "Attendees" },
      { icon: "👁️", number: "1M+", label: "Impressions" },
      { icon: "▶️", number: "200K+", label: "Video Views" },
      { icon: "📈", number: "10K+", label: "Engagements" },
    ],
    technologies: [
      "Real-Time Coverage",
      "Cinematic Video",
      "Live Production",
      "Content Strategy",
    ],
    testimonial: {
      quote:
        "The energy, scale and emotion of DAV United were captured beautifully by Enkai. Their team was professional, creative and always a step ahead.",
      author: "Organizing Committee",
      designation: "DAV United Festival",
    },
  },
  {
    id: 2,
    name: "Screen Awards Night",
    category: "Awards",
    img: pf3,
    instagram: "https://www.instagram.com/enkai.social/",
    blurb: "India's most glamorous awards night, reimagined.",
    description:
      "India's most glamorous awards night, reimagined as a real-time social narrative. From the red carpet arrivals to the final encore, every frame was shot, cut, and live-published within minutes.",
    year: "2025",
    location: "Mumbai",
    duration: "1 Night",
    highlights: [
      "Red carpet live publishing",
      "Real-time winner announcement clips",
      "Behind the scenes celebrity content",
      "Polished high-fashion aesthetics",
    ],
    stats: [
      { number: "1", label: "Glamorous Night" },
      { number: "50+", label: "Celebrity Interviews" },
      { number: "80+", label: "Dynamic Pieces" },
      { number: "3M+", label: "Live Impressions" },
    ],
    gallery: [pf3, hero3, pf5, portfolio1],
    behindScenes: [hero3, pf5],
    impactText:
      "By transforming standard coverage into high-octane social snippets, the Screen Awards achieved its highest digital viewership in years, captivating young film enthusiasts online.",
    impactStats: [
      { icon: "🏆", number: "50+", label: "Award Winners" },
      { icon: "👁️", number: "3M+", label: "Live Reach" },
      { icon: "💬", number: "25K+", label: "Comments" },
      { icon: "🔥", number: "15%", label: "Virality Rate" },
    ],
    technologies: ["Instant Publishing", "Short-form Video", "Glow Grading"],
    testimonial: {
      quote:
        "Elegance meets pure speed. The Enkai crew delivered live broadcast-quality files right onto our social handlers inside of seconds.",
      author: "Executive Producer",
      designation: "Screen Awards",
    },
  },
  {
    id: 3,
    name: "Leadership Summit",
    category: "Corporate",
    img: portfolio2,
    instagram: "https://www.instagram.com/enkai.social/",
    blurb: "Corporate storytelling with an editorial edge.",
    description:
      "A flagship corporate summit gathering 200+ industry leaders. Keynotes, panel discussions, and networking moments captured and amplified across social platforms in real time.",
    year: "2025",
    location: "New Delhi",
    duration: "2 Days",
    highlights: [
      "Keynote summary reels",
      "Instant quote graphic production",
      "LinkedIn optimized highlights",
      "Speaker portrait sessions",
    ],
    stats: [
      { number: "200+", label: "Delegates" },
      { number: "30+", label: "Panels Captured" },
      { number: "12hr", label: "Turnaround Time" },
      { number: "500K+", label: "B2B Impressions" },
    ],
    gallery: [portfolio2, hero2, hero4, pf1],
    behindScenes: [hero2, hero4],
    impactText:
      "The real-time highlights built strong LinkedIn momentum, allowing delegates to share quotes and ideas immediately during active networking sessions.",
    impactStats: [
      { icon: "👔", number: "200+", label: "Leaders" },
      { icon: "📈", number: "400%", label: "LinkedIn Traffic" },
      { icon: "🤝", number: "1.2K", label: "Shares" },
      { icon: "📱", number: "98%", label: "Positive Sentiment" },
    ],
    technologies: ["B2B Strategy", "LinkedIn Engine", "Corporate Reels"],
    testimonial: {
      quote:
        "The absolute gold standard for corporate event coverage. They elevated a typical panel into high-status, beautiful editorial content.",
      author: "Marketing Director",
      designation: "Global Leadership Council",
    },
  },
  {
    id: 4,
    name: "Runway Debut",
    category: "Launches",
    img: pf1,
    instagram: "https://www.instagram.com/enkai.social/",
    blurb: "Where couture meets digital disruption.",
    description:
      "A high-fashion runway launch where every silhouette was a story. We translated the couture into a social-first visual language — bold, editorial, and instantly shareable.",
    year: "2025",
    location: "Mumbai",
    duration: "1 Evening",
    highlights: [
      "Couture visual grading",
      "Macro texture & detail shots",
      "Editorial speed ramping",
      "On-the-spot sound design",
    ],
    stats: [
      { number: "30+", label: "Looks Captured" },
      { number: "10M+", label: "Combined Reach" },
      { number: "24", label: "Hr Delivery" },
      { number: "5X", label: "Saves Growth" },
    ],
    gallery: [pf1, pf2, portfolio1, pf6],
    behindScenes: [pf2, pf6],
    impactText:
      "Our focus on high-fidelity visual texture transformed runway documentation into viral content, resulting in multiple organic shares from major fashion influencers.",
    impactStats: [
      { icon: "👗", number: "30", label: "Runway Looks" },
      { icon: "✨", number: "1.5M", label: "Organic Views" },
      { icon: "💾", number: "40K+", label: "Saves" },
      { icon: "🌟", number: "10X", label: "Profile Visits" },
    ],
    technologies: ["Fashion Videography", "Color Grading", "Sound Design"],
    testimonial: {
      quote:
        "Our digital runway experience looked even more spectacular than sitting front-row. Enkai has incredible fashion intuition.",
      author: "Creative Director",
      designation: "House of Couture",
    },
  },
  {
    id: 5,
    name: "Stadium Finale",
    category: "Concerts",
    img: pf4,
    instagram: "https://www.instagram.com/enkai.social/",
    blurb: "40,000 voices, perfectly unified.",
    description:
      "A stadium-scale concert finale with 40,000 fans on their feet. The energy was deafening, the lights were blinding, and we were in the thick of it — streaming the story as it unfolded.",
    year: "2024",
    location: "Hyderabad",
    duration: "1 Night",
    highlights: [
      "Crowd energy cinemagraphs",
      "Ultra-low light stage coverage",
      "Dynamic soundboard sync video",
      "Artist exclusive backstage access",
    ],
    stats: [
      { number: "40K", label: "Attendees" },
      { number: "12", label: "Cinematic Angles" },
      { number: "2M+", label: "Total Views" },
      { number: "99%", label: "Hype Preservation" },
    ],
    gallery: [pf4, pf5, portfolio1, hero3],
    behindScenes: [pf5, hero3],
    impactText:
      "Capturing stadium-scale emotion requires a delicate balance between crowd energy and stage intimacy. Our real-time coverage successfully unified both dynamics.",
    impactStats: [
      { icon: "🎤", number: "1", label: "Mega Stage" },
      { icon: "⚡", number: "40K", label: "Live Fans" },
      { icon: "📽️", number: "15", label: "Story Sets" },
      { icon: "📈", number: "180%", label: "Follower Gain" },
    ],
    technologies: ["Low-Light Kinetics", "Audio Master Sync", "Crowd Integration"],
    testimonial: {
      quote:
        "Enkai survived the chaos of a 40K crowd and still produced the most visually stunning concert reels we've ever seen.",
      author: "Tour Promoter",
      designation: "Stadium Tours India",
    },
  },
  {
    id: 6,
    name: "Concert Night",
    category: "Concerts",
    img: pf5,
    instagram: "https://www.instagram.com/enkai.social/",
    blurb: "An electrifying night of live neon energy.",
    description:
      "An electrifying night of live energy — neon lights, a packed room, and a story captured in motion with editorial precision.",
    year: "2025",
    location: "Mumbai",
    duration: "1 Night",
    highlights: [
      "Neon gradient coloring",
      "Rhythm-matched fast cuts",
      "Immersive point-of-view reels",
      "Artist performance highlights",
    ],
    stats: [
      { number: "5K+", label: "Attendance" },
      { number: "8", label: "Reels Output" },
      { number: "800K", label: "Reels Views" },
      { number: "25%", label: "Share Ratio" },
    ],
    gallery: [pf5, pf4, portfolio1, pf6],
    behindScenes: [portfolio1, pf6],
    impactText:
      "The tight, rhythmic pacing of the cinematic cuts matched the music beats perfectly, turning short-form clips into highly replayable digital loops.",
    impactStats: [
      { icon: "🎸", number: "5K+", label: "Night Attendance" },
      { icon: "🚀", number: "800K", label: "Loop Views" },
      { icon: "💚", number: "45K", label: "Likes" },
      { icon: "🔄", number: "12K", label: "Shares" },
    ],
    technologies: ["Beat-Sync Editing", "POV Aesthetics", "Neon Color Grading"],
    testimonial: {
      quote:
        "They turn a live event into a digital music video. The pacing and visuals are incredibly modern.",
      author: "Performing Artist",
      designation: "Concert Night Mumbai",
    },
  },
  {
    id: 7,
    name: "Award Ceremony",
    category: "Awards",
    img: hero3,
    instagram: "https://www.instagram.com/enkai.social/",
    blurb: "Black-tie elegance, immortalized in real time.",
    description:
      "A black-tie award evening built like a narrative — from the first arrivals to the final reveal, captured frame-by-frame.",
    year: "2025",
    location: "New Delhi",
    duration: "1 Evening",
    highlights: [
      "Cinematic slow-motion portraits",
      "High-contrast luxury lighting",
      "Acceptance speech soundbites",
      "Stage atmosphere captures",
    ],
    stats: [
      { number: "500", label: "VVIP Guests" },
      { number: "25", label: "Categories Shot" },
      { number: "100%", label: "Realtime Upload" },
      { number: "1.2M", label: "Audience Reach" },
    ],
    gallery: [hero3, pf3, portfolio2, hero2],
    behindScenes: [portfolio2, hero2],
    impactText:
      "By maintaining strict black-tie editorial grading standards under variable event lighting, the ceremony established an online identity equivalent to global premium galas.",
    impactStats: [
      { icon: "✨", number: "500", label: "VIP Guests" },
      { icon: "🎞️", number: "1.2M", label: "Gala Reach" },
      { icon: "💬", number: "8K+", label: "Live Chatters" },
      { icon: "🏅", number: "100%", label: "Fidelity" },
    ],
    technologies: ["Luxury Grading", "Dynamic Lighting Balance", "Speech Editing"],
    testimonial: {
      quote:
        "Every single photo and reel looked like it came directly from an international fashion magazine. Superb work.",
      author: "Event Chair",
      designation: "National Excellence Awards",
    },
  },
];

export const TABS_ENKAI = [
  "All",
  "Concerts",
  "Awards",
  "Corporate",
  "Launches",
];

export const GALLERY_PREVIEW_COUNT_ENKAI = 5;