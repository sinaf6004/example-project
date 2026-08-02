import { Supplier } from "../types";

export const INITIAL_SUPPLIERS: Supplier[] = [
  {
    id: "sup-1",
    name: "عمده‌فروشی پروپرینت (ProPrint)",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCj9CDlxMlzc5eC-ooPou6_s6WJyE68Wr4yMpyCnFDKq9XmzX4mC9_dFOW4ExeZG5gSp1kZSLTc-BT2vmLMtK5ehw7-UV7Xdpmqxrx_up5yf-7ooOIeaDlGi0zEy2mJzT6ZTPv5a4sVoaVEeejVrCqFmjKoR2bVApgp1DbOTHkPHWGfqegaKubKwwssrfC1JSkoECRe0GimFZlMXhuH51CDXEkZt5ip5GK4xR_3e-0VhRECCwG_fj2f",
    verified: true,
    categories: ["تراکت و بروشور", "چاپ لارج فرمت و وینیل"],
    tags: ["کاغذ", "لارج فرمت"],
    description:
      "توزیع‌کننده برتر B2B در زمینه کاغذهای تجاری با حجم بالا، مواد چاپ افست و بنرهای وینیل لارج فرمت. ارسال سریع ۴۸ ساعته برای چاپخانه‌های تجاری.",
    location: "شیکاگو، ایلینوی، آمریکا",
    phone: "+1 (800) 555-0192",
    email: "wholesale@proprint.com",
    website: "https://proprint-example.com",
    minOrder: "حداقل ۲۵۰ دلار",
    leadTime: "۲ تا ۴ روز کاری",
    rating: 4.9,
    reviewCount: 128,
    featured: true,
    products: [
      {
        id: "p1",
        name: "مقوای گلاسه ۱۰۰ پوندی (۵۰۰۰ برگ)",
        category: "کاغذ",
        spec: "۱۲ در ۱۸ اینچ، دارای گواهی FSC، دو رو روکش‌دار",
        priceRange: "۱۸۰ - ۲۲۰ دلار / جعبه",
        image:
          "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&q=80",
      },
      {
        id: "p2",
        name: "رول بنر وینیل مات ۱۳ اونسی (Frontlit)",
        category: "لارج فرمت",
        spec: "رول ۵۴ اینچ در ۱۵۰ فوت، مقاوم و ضدآب",
        priceRange: "۹۵ - ۱۱۵ دلار / رول",
        image:
          "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=400&q=80",
      },
      {
        id: "p3",
        name: "بروشور خام سه لت (خط‌تا خورده)",
        category: "کاغذ",
        spec: "۸.۵ در ۱۱ اینچ، کاغذ ابریشمی ممتاز ۸۰ پوندی",
        priceRange: "۶۵ دلار / بسته ۱۰۰۰ تایی",
        image:
          "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80",
      },
    ],
  },
  {
    id: "sup-2",
    name: "تجهیزات مهرسازی استمپ‌مستر",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5XyzsvAtbzX7-jt0VNUXqPtkZSQciwsWVkYd4XjFTVqJVW3RvOAkmNIQ2txN5-qZgqN4zz9U39KPHJkKIRTsLZ0HbrBjrrs55mo1jcNCvRGgFwPO7XE2GCtAF_c1ztiaep9hLAZZuX8G7MIyPnOxTfOXP573KIJvH81p_QkSs39OnAFQfRASm1t1YOIYUp_9pDbJIR_ACv4tMppkw4KY_-QDE_T_yXuKk0PoQPUMmfXzZrAnNB72d",
    verified: true,
    categories: ["مواد اولیه مهرسازی", "جوهر و مواد شیمیایی"],
    tags: ["ژلاتین", "جوهر"],
    description:
      "تولیدکننده پیشرو در ژلاتین مایع فوتوپلیمر، پایه‌های مهر اتوماتیک، پدهای جوهر یدکی و لوازم دقیق مهرسازی از سال ۱۹۹۸.",
    location: "کلیولند، اوهایو، آمریکا",
    phone: "+1 (888) 555-8392",
    email: "orders@stampmaster-supplies.com",
    website: "https://stampmastersupplies-example.com",
    minOrder: "حداقل ۱۰۰ دلار",
    leadTime: "۱ تا ۳ روز کاری",
    rating: 4.8,
    reviewCount: 94,
    featured: true,
    products: [
      {
        id: "p4",
        name: "ژلاتین فوتوپلیمر مایع فوق شفاف (سطل ۱۸ کیلویی)",
        category: "مهرسازی",
        spec: "سختی ۵۰ Shore A، وضوح و برجستگی بالا",
        priceRange: "۲۴۰ - ۲۶۵ دلار / سطل",
        image:
          "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80",
      },
      {
        id: "p5",
        name: "جوهر مهر پایه روغن با خشک‌شدن سریع (۱ لیتر)",
        category: "جوهر",
        spec: "جوهر شارژ برای مهرهای لاستیکی اتوماتیک - مشکی/قرمز/آبی",
        priceRange: "۳۲ دلار / بطری",
        image:
          "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=400&q=80",
      },
      {
        id: "p6",
        name: "پایه مهر تاریخ‌زن اتوماتیک مقاوم (عمده)",
        category: "مهرسازی",
        spec: "جعبه ۵۰ تایی، طراحی ارگونومیک",
        priceRange: "۱۴۰ دلار / جعبه",
        image:
          "https://images.unsplash.com/photo-1583521214690-73421a1829a9?w=400&q=80",
      },
    ],
  },
  {
    id: "sup-3",
    name: "شرکت کِم‌اینک (ChemInk)",
    logoUrl: "",
    verified: false,
    categories: ["جوهر و مواد شیمیایی"],
    tags: ["حلال‌ها", "صنعتی"],
    description:
      "تولیدکننده تخصصی مواد شیمیایی شامل پاک‌کننده‌های صنعتی مهر، جوهر برای سطوح غیرمتخلخل، جوهرهای فلکسو با خشک‌کن UV و محلول‌های شستشوی کلیشه سازگار با محیط زیست.",
    location: "هیوستون، تگزاس، آمریکا",
    phone: "+1 (713) 555-9011",
    email: "sales@chemink-corp.com",
    website: "https://cheminkcorp-example.com",
    minOrder: "حداقل ۳۰۰ دلار",
    leadTime: "۳ تا ۵ روز کاری",
    rating: 4.6,
    reviewCount: 42,
    featured: true,
    products: [
      {
        id: "p7",
        name: "حلال پاک‌کننده مهر صنعتی (بشکه ۵ گالنی)",
        category: "مواد شیمیایی",
        spec: "محلول پاک‌کننده لاستیک و فوتوپلیمر بدون ایجاد رسوب",
        priceRange: "۱۱۰ دلار / بشکه",
        image:
          "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80",
      },
      {
        id: "p8",
        name: "جوهر زودخشک‌شونده برای سطوح فلزی و پلاستیکی",
        category: "جوهر",
        spec: "خشک شدن در کمتر از ۱۰ ثانیه، فرمول ضدآب",
        priceRange: "۴۸ دلار / ۵۰۰ میلی‌لیتر",
        image:
          "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&q=80",
      },
    ],
  },
  {
    id: "sup-4",
    name: "لیزر و دای‌کات دقیق (Precision Laser)",
    logoUrl: "",
    verified: true,
    categories: ["ماشین‌آلات و تجهیزات", "مواد اولیه مهرسازی"],
    tags: ["ماشین‌آلات", "لاستیک لیزری"],
    description:
      "دستگاه‌های حکاکی لیزر CO2 با دقت بالا برای مهرهای لاستیکی، کلیشه‌های برجسته‌کاری منیزیمی، و ورق‌های لاستیکی مخصوص لیزر با دوام بالا و بدون بو هنگام حکاکی.",
    location: "میلواکی، ویسکانسین، آمریکا",
    phone: "+1 (414) 555-4421",
    email: "info@precisionlaser-die.com",
    website: "https://precisionlaser-example.com",
    minOrder: "حداقل ۱۵۰ دلار",
    leadTime: "۲ تا ۳ روز کاری",
    rating: 4.9,
    reviewCount: 67,
    products: [
      {
        id: "p9",
        name: "ورق لاستیکی لیزری بدون بو (سایز A4 - بسته ۱۰ تایی)",
        category: "مهرسازی",
        spec: "ضخامت ۲.۳ میلی‌متر، سبز/خاکستری/قرمز، مقاومت حرارتی بالا",
        priceRange: "۵۵ دلار / بسته",
        image:
          "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80",
      },
      {
        id: "p10",
        name: "دستگاه ولکانیزه مهر نوری (فلاش) رومیزی",
        category: "ماشین‌آلات",
        spec: "تایمر نوردهی دیجیتال، سیستم دو لامپه",
        priceRange: "۶۸۰ دلار / دستگاه",
        image:
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80",
      },
    ],
  },
  {
    id: "sup-5",
    name: "عمده‌فروشی مستقیم هدایای تبلیغاتی (PromoGift)",
    logoUrl: "",
    verified: true,
    categories: ["هدایای تبلیغاتی"],
    tags: ["سابلیمیشن", "هدایا"],
    description:
      "تولیدکننده محصولات خام B2B برای چاپخانه‌ها از جمله ماگ‌های سابلیمیشن، بندآویزهای گردنی سفارشی، بطری‌های آب آلومینیومی و هدایای تبلیغاتی.",
    location: "آتلانتا، جورجیا، آمریکا",
    phone: "+1 (404) 555-7830",
    email: "contact@promogiftdirect.com",
    website: "https://promogiftdirect-example.com",
    minOrder: "حداقل ۲۰۰ دلار",
    leadTime: "۳ تا ۶ روز کاری",
    rating: 4.7,
    reviewCount: 115,
    products: [
      {
        id: "p11",
        name: "ماگ سابلیمیشن سرامیکی سفید ۱۱ اونسی (کارتن ۳۶ تایی)",
        category: "تبلیغاتی",
        spec: "کوتینگ گرید AAA، قابل شستشو در ماشین ظرفشویی",
        priceRange: "۴۲ دلار / کارتن",
        image:
          "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80",
      },
      {
        id: "p12",
        name: "بندآویز گردنی خام پلی‌استر با گیره چرخان",
        category: "تبلیغاتی",
        spec: "عرض ۳/۴ اینچ، بسته ۱۰۰ تایی، رنگ‌های متنوع",
        priceRange: "۳۸ دلار / بسته",
        image:
          "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=400&q=80",
      },
    ],
  },
  {
    id: "sup-6",
    name: "فویل فلکسوگرافیک و جوهرهای خاص",
    logoUrl: "",
    verified: true,
    categories: ["جوهر و مواد شیمیایی", "تراکت و بروشور"],
    tags: ["طلاکوب", "فلکسو"],
    description:
      "توزیع‌کننده اصلی فویل‌های متالیک طلاکوب، وارنیش UV موضعی، جوهرهای فلورسنتی فلکسو و جوهرهای امنیتی خاص برای اسناد رسمی.",
    location: "نیوآرک، نیوجرسی، آمریکا",
    phone: "+1 (973) 555-6677",
    email: "orders@flexographicfoil.com",
    website: "https://flexographicfoil-example.com",
    minOrder: "حداقل ۱۷۵ دلار",
    leadTime: "۲ تا ۴ روز کاری",
    rating: 4.85,
    reviewCount: 51,
    products: [
      {
        id: "p13",
        name: "رول فویل طلاکوب متالیک",
        category: "فویل",
        spec: "رول ۲۵ اینچ در ۴۰۰ فوت، روکش براق",
        priceRange: "۸۸ دلار / رول",
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80",
      },
    ],
  },
];
