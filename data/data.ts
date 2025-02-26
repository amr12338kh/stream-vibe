import {
  DevicesCardProps,
  FaqDataProps,
  FeaturesDataProps,
  FooterLinksProps,
  HeaderLinksProps,
  LinksProps,
  PricingDataProps,
} from "@/types/types";
import {
  FaFacebook,
  FaLinkedin,
  FaMobile,
  FaTablet,
  FaTwitter,
} from "react-icons/fa";
import { HiTv } from "react-icons/hi2";
import { AiOutlineLaptop } from "react-icons/ai";
import { BiSolidJoystick } from "react-icons/bi";
import { BsHeadsetVr } from "react-icons/bs";

export const navItems: HeaderLinksProps[] = [
  {
    icon: "Home",
    name: "Home",
    link: "/",
  },
  {
    icon: "TvMinimalPlay",
    name: "Movies",
    link: "/movies",
  },
  {
    icon: "Headset",
    name: "Support",
    link: "/support",
  },
  {
    icon: "SquareChartGantt",
    name: "Subscriptions",
    link: "/subscriptions",
  },
] as const;

export const devicesData: DevicesCardProps[] = [
  {
    icon: FaMobile,
    title: "Smartphones",
    content:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    icon: FaTablet,
    title: "Tablet",
    content:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    icon: HiTv,
    title: "Smart TV",
    content:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    icon: AiOutlineLaptop,
    title: "Laptops",
    content:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    icon: BiSolidJoystick,
    title: "Gaming Consoles",
    content:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    icon: BsHeadsetVr,
    title: "VR Headsets",
    content:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
];

export const faqData: FaqDataProps[] = [
  {
    title: "What is StreamVibe?",
    content:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    title: "How much does StreamVibe cost?",
    content:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    title: "What content is available on StreamVibe?",
    content:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    title: "How can I watch StreamVibe?",
    content:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    title: "How do I sign up for StreamVibe?",
    content:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    title: "What is the StreamVibe free trial?",
    content:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    title: "How do I contact StreamVibe customer support?",
    content:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    title: "What are the StreamVibe payment methods?",
    content:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
];

export const pricingData: PricingDataProps[] = [
  {
    title: "Basic Plan",
    description:
      "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    monthly_price: 9.99,
    yearly_price: 99.99,
  },
  {
    title: "Standard Plan",
    description:
      "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
    monthly_price: 12.99,
    yearly_price: 129.99,
  },
  {
    title: "Premium Plan",
    description:
      "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
    monthly_price: 14.99,
    yearly_price: 149.99,
  },
];

export const homeLinks: LinksProps[] = [
  {
    title: "Categories",
    link: "/#categories",
  },
  {
    title: "Devices",
    link: "/#devices",
  },
  {
    title: "Pricing",
    link: "/#pricing",
  },
  {
    title: "FAQ",
    link: "/#faq",
  },
];

export const moviesLinks: LinksProps[] = [
  {
    title: "Genres",
    link: "/movies/#genres",
  },
  {
    title: "Top 10 in Genres",
    link: "/movies/#top-genres",
  },
  {
    title: "Trending",
    link: "/movies/#trending",
  },
  {
    title: "New Release",
    link: "/movies/#new-release",
  },
  {
    title: "Must Watch",
    link: "/movies/#must-watch",
  },
];

export const showsLinks: LinksProps[] = [
  {
    title: "Genres",
    link: "/",
  },
  {
    title: "Trending",
    link: "/",
  },
  {
    title: "New Release",
    link: "/",
  },
  {
    title: "Popular",
    link: "/",
  },
];

export const supportLinks: LinksProps[] = [
  {
    title: "Contact us",
    link: "/support/#contact-us",
  },
];

export const subscriptionLinks: LinksProps[] = [
  {
    title: "Plans",
    link: "/subscriptions/#plans",
  },
  {
    title: "Features",
    link: "/subscriptions/#features",
  },
];

export const connectLinks: LinksProps[] = [
  {
    title: FaFacebook,
    link: "/",
  },
  {
    title: FaTwitter,
    link: "/",
  },
  {
    title: FaLinkedin,
    link: "/",
  },
];

export const footerLinks: FooterLinksProps[] = [
  {
    title: "Home",
    links: homeLinks,
  },
  {
    title: "Movies",
    links: moviesLinks,
  },
  {
    title: "Shows",
    links: showsLinks,
  },
  {
    title: "Support",
    links: supportLinks,
  },
  {
    title: "Subscriptions",
    links: subscriptionLinks,
  },
  {
    title: "Connect With Us",
    links: connectLinks,
  },
];

export const featuresData: FeaturesDataProps[] = [
  {
    plan: "Basic",
    price: 9.99,
    content:
      "Access to a wide selection of movies and shows, including some new releases.",
    devices: "Watch on one device simultaneously",
    free_trail: 7,
    cancel_anytime: true,
    hdr: false,
    dolby_atmos: false,
    ad_free: false,
    offline_viewing: false,
    family_sharing: false,
  },
  {
    plan: "Standard",
    price: 12.99,
    content:
      "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
    devices: "Watch on Two device simultaneously",
    free_trail: 7,
    cancel_anytime: true,
    hdr: true,
    dolby_atmos: true,
    ad_free: true,
    offline_viewing: "Yes, for select titles.",
    family_sharing: "Yes, up to 5 family members.",
    isPopular: true,
  },
  {
    plan: "Premium",
    price: 14.99,
    content:
      "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
    devices: "Watch on Four device simultaneously",
    free_trail: 7,
    cancel_anytime: true,
    hdr: true,
    dolby_atmos: true,
    ad_free: true,
    offline_viewing: "Yes, for all titles.",
    family_sharing: "Yes, up to 6 family members.",
  },
];
