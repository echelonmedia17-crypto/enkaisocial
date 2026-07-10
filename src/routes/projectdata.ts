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
    blurb: "A three-day festival that brought together over 50,000 attendees, 100+ speakers and performers, and participants from 23 Indian states and 10 countries. Enkai Social documented every defining moment through live coverage, premium visual storytelling, and real-time social media publishing.",
    description:
      "DAV United Festival 2025 was one of India's largest educational and cultural celebrations, bringing together students, educators, artists, entrepreneurs, and community leaders from across the country and abroad. Enkai Social provided complete live event coverage—from capturing performances and keynote moments to publishing premium social content while the festival was still unfolding, ensuring the experience reached audiences far beyond the venue.",
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
      { number: "72", label: "Hours of Coverage" },
      { number: "50K+", label: "Visitors" },
      { number: "100+", label: "Speakers & Artists" },
      { number: "23", label: "States Represented" },
    ],
    gallery: [portfolio1, pf5, hero1, pf2, pf6],
    behindScenes: [hero1, pf2, pf6],
    impactText:
      "Our real-time content strategy and cinematic storytelling helped DAV United engage audiences far beyond the venue — creating a lasting digital footprint of the festival that continued to generate reach weeks after the event.",
    impactStats: [
      { icon: "👥", number: "50K+", label: "Visitors" },
      { icon: "📍", number: "23", label: "States Represented" },
      { icon: "🎤", number: "100+", label: "Artists" },
      { icon: "🌍", number: "10", label: "Countries" },
    ],
    technologies: [
      "Live Event Coverage",
      "Photography",
      "Cinematography",
      "Real-Time Editing",
      "Social Media Production",
      "Drone Coverage",
      "Highlight Film",
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
    name: "Aagaaz 4.0",
    category: "Cultural Festival • 2025",
    img: pf3,
    instagram: "https://www.instagram.com/enkai.social/",
    blurb: "A flagship cultural celebration captured and amplified in real time.",
    description:
      "Aagaaz 4.0 brought together thousands of attendees for two days of performances, competitions, celebrity appearances, and cultural celebrations. Enkai Social managed complete live media coverage, delivering premium visual storytelling through instant content creation, on-site editing, and strategic social amplification.",
    year: "2025",
    location: "Nwe Delhi, Bharat Mandapam",
    duration: "48 hours",
    highlights: [
      "End-to-end live event coverage",
      "Real-time reels & story publishing",
      "Premium photography & cinematic videography",
      "Same-day highlight delivery",
      "Strategic social media amplification",
    ],
    stats: [
      { number: "48", label: "Hours of Coverage" },
      { number: "18K+", label: "Peak Audience" },
      { number: "30+", label: "Live Performances" },
      { number: "150+", label: "Content Assets Delivered" },
    ],
    gallery: [pf3, hero3, pf5, portfolio1],
    behindScenes: [hero3, pf5],
    impactText:
      "5M+ Estimated social impressions generated through real-time publishing across platforms. 500K+ Video views accumulated from reels, stories, and highlight content. 2 Hours Average turnaround from capture to live social publishing. 95% Audience engagement maintained throughout the live coverage period through continuous content distribution.",
    impactStats: [
      { icon: "👥", number: "5M+", label: "Impressions" },
      { icon: "📹", number: "500K+", label: "Video Views" },
      { icon: "⏱️", number: "2 Hours", label: "Turnaround" },
      { icon: "💬", number: "95%", label: "Engagement" },
    ],
    technologies: [
      "Live Event Coverage",
      "Real-Time Publishing",
      "Photography",
      "Cinematic Videography",
      "Drone Coverage",
      "Social Media Strategy",
      "Content Editing",
    ],
    testimonial: {
      quote:
        "The Enkai team delivered content while the event was still happening. Their speed, quality, and storytelling significantly increased our online visibility and audience engagement throughout Aagaaz 4.0.",
      author: "Event Organizing Committee",
      designation: "Aagaaz 4.0",
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