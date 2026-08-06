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
import navkarDivas from "@/assets/navkar temple/front.png";
import jwilYamuna from "@/assets/yamuna/CTD00331.JPG";
import jitoChristmas from "@/assets/Christmas/PSB00003.JPG";

// Navkar Temple additional assets
import navkar_1 from "@/assets/navkar temple/P1034172.JPG";
import navkar_2 from "@/assets/navkar temple/P1034179.JPG";
import navkar_3 from "@/assets/navkar temple/Screenshot 2026-08-06 211429.png";
import navkar_4 from "@/assets/navkar temple/Screenshot 2026-08-06 211629.png";
import navkar_5 from "@/assets/navkar temple/Screenshot 2026-08-06 211753.png";
import navkar_6 from "@/assets/navkar temple/Screenshot 2026-08-06 212439.png";
import navkar_7 from "@/assets/navkar temple/Screenshot 2026-08-06 212508.png";
import navkar_8 from "@/assets/navkar temple/Screenshot 2026-08-06 212613.png";
import navkar_9 from "@/assets/navkar temple/Screenshot 2026-08-06 212723.png";
import navkar_10 from "@/assets/navkar temple/Screenshot 2026-08-06 212831.png";
import navkar_11 from "@/assets/navkar temple/Screenshot 2026-08-06 212846.png";
import navkar_12 from "@/assets/navkar temple/Screenshot 2026-08-06 212857.png";
import navkar_13 from "@/assets/navkar temple/Screenshot 2026-08-06 212911.png";

// Yamuna folder assets
import yamuna_1 from "@/assets/yamuna/CTD00323.JPG";
import yamuna_2 from "@/assets/yamuna/CTD00331.JPG";
import yamuna_3 from "@/assets/yamuna/CTD00334.JPG";
import yamuna_4 from "@/assets/yamuna/CTD00339.JPG";
import yamuna_5 from "@/assets/yamuna/CTD00345.JPG";
import yamuna_6 from "@/assets/yamuna/CTD00367.JPG";
import yamuna_7 from "@/assets/yamuna/CTD00369.JPG";
import yamuna_8 from "@/assets/yamuna/CTD00373.JPG";
import yamuna_9 from "@/assets/yamuna/CTD00383.JPG";
import yamuna_10 from "@/assets/yamuna/CTD00387.JPG";
import yamuna_11 from "@/assets/yamuna/CTD00419.JPG";
import yamuna_12 from "@/assets/yamuna/CTD00458.JPG";
import yamuna_13 from "@/assets/yamuna/CTD00554.JPG";
import yamuna_14 from "@/assets/yamuna/CTD00581.JPG";
import yamuna_15 from "@/assets/yamuna/CTD00604.JPG";
import yamuna_16 from "@/assets/yamuna/CTD00635.JPG";
import yamuna_17 from "@/assets/yamuna/CTD00683.JPG";
import yamuna_18 from "@/assets/yamuna/CTD00709.JPG";
import yamuna_19 from "@/assets/yamuna/CTD00747.JPG";

// Christmas folder assets
import christmas_1 from "@/assets/Christmas/CTD01198.JPG";
import christmas_2 from "@/assets/Christmas/CTD01220.JPG";
import christmas_3 from "@/assets/Christmas/CTD01335.JPG";
import christmas_4 from "@/assets/Christmas/CTD01421.JPG";
import christmas_5 from "@/assets/Christmas/CTD01538.JPG";
import christmas_6 from "@/assets/Christmas/CTD01585.JPG";
import christmas_7 from "@/assets/Christmas/CTD01653.JPG";
import christmas_8 from "@/assets/Christmas/CTD01693.JPG";
import christmas_9 from "@/assets/Christmas/CTD01710.JPG";
import christmas_10 from "@/assets/Christmas/PSB00005.JPG";
import christmas_11 from "@/assets/Christmas/PSB00063.JPG";
import christmas_12 from "@/assets/Christmas/PSB00096.JPG";
import christmas_13 from "@/assets/Christmas/PSB00104.JPG";

import aagaaz1 from "@/assets/Aagaaz/1.png";
import aagaaz2 from "@/assets/Aagaaz/2.png";
import aagaaz3 from "@/assets/Aagaaz/3.png";
import aagaaz4 from "@/assets/Aagaaz/4.png";
import aagaaz5 from "@/assets/Aagaaz/5.png";
import aagaaz6 from "@/assets/Aagaaz/6.png";
import aagaaz7 from "@/assets/Aagaaz/7.png";
import aagaaz8 from "@/assets/Aagaaz/8.JPG";
import aagaaz9 from "@/assets/Aagaaz/9.JPG";
import aagaaz10 from "@/assets/Aagaaz/10.JPG";

import dav1 from "@/assets/dav/1.png";
import dav2 from "@/assets/dav/2.png";
import dav3 from "@/assets/dav/3.png";
import dav4 from "@/assets/dav/4.png";
import dav5 from "@/assets/dav/5.JPG";
import dav6 from "@/assets/dav/6.JPG";
import dav7 from "@/assets/dav/7.JPG";
import dav8 from "@/assets/dav/8.JPG";
import dav9 from "@/assets/dav/9.JPG";

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
    img: dav1,
    instagram: "https://www.instagram.com/dav.united.festival/",
    blurb: "A three-day festival that brought together over 50,000 attendees, 100+ speakers and performers, and participants from 23 Indian states and 10 countries. Enkai Social documented every defining moment through live coverage, premium visual storytelling, and real-time social media publishing.",
    description:
      "DAV United Festival 2025 was one of India's largest educational and cultural celebrations, bringing together students, educators, artists, entrepreneurs, and community leaders from across the country and abroad. Enkai Social provided complete live event coverage—from capturing performances and keynote moments to publishing premium social content while the festival was still unfolding, ensuring the experience reached audiences far beyond the venue.",
    year: "2025",
    location: "Delhi",
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
    gallery: [dav1, dav2, dav3, dav4, dav5],
    behindScenes: [dav6, dav7, dav8, dav9],
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
    img: aagaaz1,
    instagram: "https://www.instagram.com/enkai.social/",
    blurb: "A flagship cultural celebration captured and amplified in real time.",
    description:
      "Aagaaz 4.0 brought together thousands of attendees for two days of performances, competitions, celebrity appearances, and cultural celebrations. Enkai Social managed complete live media coverage, delivering premium visual storytelling through instant content creation, on-site editing, and strategic social amplification.",
    year: "2025",
    location: "Delhi",
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
    gallery: [aagaaz1, aagaaz2, aagaaz3, aagaaz4, aagaaz5],
    behindScenes: [aagaaz6, aagaaz7, aagaaz8, aagaaz9, aagaaz10],
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
    name: "Navkar Divas – CM Event",
    category: "Corporate",
    img: navkarDivas,
    instagram: "https://www.instagram.com/enkai.social/",
    blurb: "Celebrating Navkar Divas with a high‑impact corporate event.",
    description: "Navkar Divas 2025 was a flagship corporate celebration, featuring keynote speeches, cultural performances, and a vibrant exhibition. Enkai Social captured the event in real time, delivering premium visual storytelling across social platforms.",
    year: "2025",
    location: "Delhi",
    duration: "1 Day",
    highlights: [
      "Live keynote coverage",
      "Real‑time social reels",
      "Behind‑the‑scenes documentary",
      "Strategic brand amplification"
    ],
    stats: [
      { number: "10K+", label: "Attendees" },
      { number: "4K+", label: "Social Impressions" },
      { number: "5", label: "Keynote Speakers" },
      { number: "2 Hours", label: "Turnaround" }
    ],
    gallery: [navkarDivas, navkar_1, navkar_2, navkar_3, navkar_4, navkar_5],
    behindScenes: [navkar_6, navkar_7, navkar_8, navkar_9, navkar_10, navkar_11, navkar_12, navkar_13],
    impactText: "The event generated massive digital buzz, extending brand reach beyond the venue and driving sustained engagement throughout the day.",
    impactStats: [
      { icon: "👥", number: "10K+", label: "Attendees" },
      { icon: "📈", number: "4K+", label: "Impressions" },
      { icon: "⏱️", number: "2 Hours", label: "Turnaround" },
      { icon: "💬", number: "95%", label: "Engagement" }
    ],
    technologies: [
      "Live Event Coverage",
      "Real‑time Publishing",
      "Social Media Strategy",
      "Cinematography"
    ],
    testimonial: null
  },
  {
    id: 4,
    name: "JWIL – Yamuna Drive",
    category: "Community",
    img: jwilYamuna,
    instagram: "https://www.instagram.com/enkai.social/",
    blurb: "A vibrant community drive by JWIL along the Yamuna banks.",
    description: "JWIL organized a clean‑up and cultural drive on the Yamuna riverfront, combining environmental activism with live performances. Enkai Social documented the event, delivering immersive stories that amplified the cause.",
    year: "2025",
    location: "Delhi",
    duration: "8 Hours",
    highlights: [
      "River clean‑up",
      "Live acoustic sets",
      "Community engagement reels",
      "Interactive social challenges"
    ],
    stats: [
      { number: "5K+", label: "Volunteers" },
      { number: "200K+", label: "Reach" },
      { number: "3", label: "Live Acts" },
      { number: "1 Day", label: "Duration" }
    ],
    gallery: [yamuna_1, yamuna_2, yamuna_3, yamuna_4, yamuna_5, yamuna_6, yamuna_7, yamuna_8, yamuna_9],
    behindScenes: [yamuna_10, yamuna_11, yamuna_12, yamuna_13, yamuna_14, yamuna_15, yamuna_16, yamuna_17, yamuna_18, yamuna_19],
    impactText: "The drive raised awareness about river conservation, with social media impressions surpassing 200K and a surge in community participation.",
    impactStats: [
      { icon: "🌊", number: "5K+", label: "Volunteers" },
      { icon: "📢", number: "200K+", label: "Reach" },
      { icon: "🌍", number: "1 Day", label: "Duration" },
      { icon: "💚", number: "95%", label: "Engagement" }
    ],
    technologies: [
      "Live Streaming",
      "Community Storytelling",
      "Real‑time Editing"
    ],
    testimonial: null
  },
  {
    id: 5,
    name: "JITO Christmas Party",
    category: "Celebration",
    img: jitoChristmas,
    instagram: "https://www.instagram.com/enkai.social/",
    blurb: "A festive celebration captured with cinematic flair.",
    description: "JITO's annual Christmas party featured live performances, gala dinner, and high‑energy festivities. Enkai Social delivered premium visual content, from magical lighting to festive reels.",
    year: "2025",
    location: "Delhi",
    duration: "Evening",
    highlights: [
      "Holiday light installations",
      "Live band performances",
      "Cinematic party reels",
      "Real‑time social highlights"
    ],
    stats: [
      { number: "2K+", label: "Guests" },
      { number: "1M+", label: "Impressions" },
      { number: "4", label: "Live Acts" },
      { number: "1 Night", label: "Duration" }
    ],
    gallery: [christmas_1, christmas_2, christmas_3, christmas_4, christmas_5, christmas_6],
    behindScenes: [christmas_7, christmas_8, christmas_9, christmas_10, christmas_11, christmas_12, christmas_13],
    impactText: "The party's visual storytelling boosted JITO's brand image, achieving over 1M impressions and high engagement across platforms.",
    impactStats: [
      { icon: "🎄", number: "2K+", label: "Guests" },
      { icon: "📈", number: "1M+", label: "Impressions" },
      { icon: "⏱️", number: "1 Night", label: "Duration" },
      { icon: "💬", number: "95%", label: "Engagement" }
    ],
    technologies: [
      "Event Cinematography",
      "Real‑time Publishing",
      "Social Media Amplification"
    ],
    testimonial: null
  },
];

export const TABS_ENKAI = [
  "All",
  "Concerts",
  "Corporate",
  "Community",
  "Celebration",
];

export const GALLERY_PREVIEW_COUNT_ENKAI = 5;
