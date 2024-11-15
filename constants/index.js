import { 
  mail, instagram, whatsapp, twitter, saudiBussiness, zakatax, BMW, GMC, staria, fordTurus, lobik, alansar, clock, rayhan, shield, send, star, road, appointment, easyBook, services, price,
  hero1,
  hero2,
  hero3
} from "@/public/assets";
import { GrServices } from "react-icons/gr";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";

export const heroImages = [
  {
    id: "img-1",
    image: hero1,
  },
  {
    id: "img-2",
    image: hero2,
  },
  {
    id: "img-3",
    image: hero3,
  },
  {
    id: "img-4",
    image: rayhan,
  },
];

export const navLinks = [
    {
      id: "home",
      title: "الرئيسية",
    },
    {
      id: "reservations",
      title: "الحجوزات",
    },
    {
        id: "evaluations",
        title: "تقييم العملاء",
      },
    {
      id: "contactus",
      title: "اتصل بنا",
    },
    {
      id: "signin",
      title: "تسجيل الدخول",
    },
  ];
  
  export const stats = [
    {
      id: "stats-1",
      title: "حجز فندقي",
      value: "3800+",
    },
    {
      id: "stats-3",
      title: "حجز سيارة",
      value: "4500+",
    },
    {
      id: "stats-2",
      title: "موثوق به من قبل الشركة",
      value: "230+",
    },
  ];

  export const cars = [
    {
        img: staria,
        name: "Nike Air Jordan-01",
    },
    {
        img: BMW,
        name: "Nike Air Jordan-10",
    },
    {
        img: fordTurus,
        name: "Nike Air Jordan-100",
    },
];

export const hotels = [
  {
      img: clock,
      name: "Makkah Clock Royal Tower",
  },
  {
      img: lobik,
      name: "Luvyka Hotel Madinah",
  },
  {
      img: rayhan,
      name: "Al Marwa Rayhaan by Rotana",
  },
  {
    img: alansar,
    name: "Anwar Al Madinah Mövenpick Hotel",
},
];

export const features = [
  {
    id: "feature-1",
    icon: <IoShieldCheckmark size={30} color='#e6c200'/>,
    title: "مصداقية وخبرة",
    content:
      "نتمتع بسنوات من الخبرة في تقديم خدمات حجوزات الحج والعمرة، ما أكسبنا ثقة آلاف الحجاج والمعتمرين. هدفنا هو خدمتك بمصداقية وتفانٍ لتعيش تجربة إيمانية سلسة ومميزة.",
  },
  {
    id: "feature-2",
    icon: <GrServices size={30} color='#e6c200'/>,
    title: "خدمات متخصصة ومتكاملة",
    content:
      "نحن نفهم خصوصية رحلات الحج والعمرة، لذا نقدم باقات مخصصة للحجوزات الفندقية وتأجير السيارات تضمن لك أقصى درجات الراحة والتسهيلات الضرورية بالقرب من الحرمين الشريفين.",
  },
  {
    id: "feature-3",
    icon: <FaCalendarAlt size={30} color='#e6c200'/>,
    title: "دعم مواصل على مدار الساعة مع سهولة و سرعة في الحجز",
    content:
      "نلتزم بتقديم دعم متواصل طوال رحلتك؛ ففريقنا متاح 24/8 للإجابة عن استفساراتك، وتقديم المساعدةلضمان تجربة مريحة ومطمئنة. كما أن موقعنا يوفر نظام حجز سريع وسهل، يتيح لك تأكيد حجزك خلال دقائق. نضمن لك عملية حجز سلسة وآمنة، مع طرق دفع متعددة وموثوقة",
  },
  {
    id: "feature-3",
    icon: <BiSolidOffer size={30} color='#e6c200'/>,
    title: "أفضل العروض والأسعار التنافسية",
    content:
      "سواء كنت ترغب بحجز فندق أو سيارة، يوفر موقعنا نظام حجز سريع وسهل، يتيح لك تأكيد حجزك خلال دقائق. نضمن لك عملية حجز سلسة وآمنة، مع طرق دفع متعددة وموثوقة.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "رائعين جدا محترمين جدا اللي يعرفكم ماياخذ غيركم ابدا",
    name: "منى الجليل",
    title: "Founder & Leader",
    evaluate: 5,
    date: '2024-08-13',
    // img: people01,
  },
  {
    id: "feedback-2",
    content:
      "من غير مدح افضل شركة في السعودية والشكر للأخ / ابو ناصر على جهوه...بيض الله وجهكم",
    name: "ابو علي",
    title: "Founder & Leader",
    evaluate: 5,
    date: '2023-10-31',
    // img: people02,
  },
  {
    id: "feedback-3",
    content:
      "تم التعامل مع مسار الغربية- اشكر الاستاذ ابو ناصر على ترتيب كامل الرحلة الى مكة وسرعة التجاوب لأي استفسار",
    name: "ابو خليفه",
    title: "Founder & Leader",
    evaluate: 5,
    date: '2023-10-31'
    // img: people03,
  },
];

export const footerLinks = [
  {
    title: "التراخيص",
    links: [
      {
        name: "رقم السجل التجاري-4031281145",
        image: ''
      },
      {
        name: "الرقم الضريبي-311164786100003",
        image: ''
      },
      {
        name: "رقم السجل التجاري 4031281145",
        image: saudiBussiness
      },
      {
        name: "الرقم الضريبي 311164786100003",
        image: zakatax
      },
    ],
  },
  {
    title: "طرق لدفع",
    links: [
      {
        name: "تحويل مصرفي مباشر",
        image: '',
      },
      {
        name: "الدفع اثناء التوصيل",
        image: '',
      },
      {
        name: " بطاقة ائتمان",
        image: '',
      },
      {
        name: "خصم عبر المدفوعات عبر الإنترنت",
        image: '',
      },
    ],
  },
  {
    title: "اتصل بنا",
    links: [
      {
        name: "966566633161+",
        image: '',
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: whatsapp,
    link: "https://wa.me/966566633161",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: mail,
    link: "mailto:admin@alaglaan.com/",
  },
];