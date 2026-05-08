// ============================================================
//  📷 你的照片配置文件 — 只需要改这里！
//  更新照片时：把图片放进 images/ 文件夹，然后在下面填写文件名
// ============================================================

const SITE_CONFIG = {
  // 你的名字或品牌名
  name: "Your Name",
  nameZh: "你的名字",

  // 首页大标题
  tagline: "Light & Moment",
  taglineZh: "光与瞬间",

  // About 页简介（英文）
  bioEn: `I'm a portrait and event photographer based in the San Francisco Bay Area. 
I believe every frame is a quiet conversation — between light, subject, and time. 
With a film-inspired warmth and an unhurried eye, I capture what words often can't.`,

  // About 页简介（中文）
  bioZh: `我是一位人像与活动摄影师，工作于旧金山湾区。
我相信每一帧都是一场安静的对话——光、人与时间之间的。
以胶片般的温度和从容的视角，记录语言难以表达的瞬间。`,

  // 联系邮箱
  email: "hello@yourname.com",

  // Instagram（填用户名，不含@；不想显示就留空 ""）
  instagram: "yourname",

  // 预约链接（可以填 Calendly 链接，或者留空用表单）
  calendlyUrl: "",

  // 客片取片密码提示文字
  clientPickupHint: "请输入摄影师提供的专属取件码",
  clientPickupHintEn: "Enter the access code provided by your photographer",
};

// ============================================================
//  作品集照片 — 在这里添加你的照片
//  src: 图片路径（放在 images/ 文件夹里）
//  alt / altZh: 图片描述
//  category: portrait（人像）| event（活动）| travel（旅行）| other（其他）
// ============================================================

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    alt: "Golden hour portrait",
    altZh: "黄金时刻人像",
    category: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80",
    alt: "Natural light portrait",
    altZh: "自然光人像",
    category: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80",
    alt: "Outdoor couple portrait",
    altZh: "户外人像",
    category: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    alt: "Wedding moment",
    altZh: "婚礼瞬间",
    category: "event",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    alt: "Event atmosphere",
    altZh: "活动现场",
    category: "event",
  },
  {
    src: "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?w=800&q=80",
    alt: "Warm afternoon light",
    altZh: "午后暖光",
    category: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?w=800&q=80",
    alt: "Golden fields",
    altZh: "金色田野",
    category: "travel",
  },
  {
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
    alt: "Candid moment",
    altZh: "抓拍瞬间",
    category: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    alt: "Celebration",
    altZh: "庆典",
    category: "event",
  },
];

// ============================================================
//  客片取片 — 在这里添加已完成的客户相册
//  name / nameZh: 显示名称（不用真实姓名，用代号或日期也行）
//  date: 拍摄日期
//  password: 取件密码（自己设定）
//  link: 相册链接（Google Photos 分享链接、Pixieset 等）
//  cover: 封面图（可以是 images/ 里的文件，或外链）
// ============================================================

const CLIENT_ALBUMS = [
  {
    name: "Sarah & Tom",
    nameZh: "S & T 婚礼",
    date: "2025-10-12",
    password: "demo1234",
    link: "https://photos.google.com",
    cover: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
  },
  {
    name: "Annual Gala 2025",
    nameZh: "年度晚宴",
    date: "2025-11-08",
    password: "gala2025",
    link: "https://photos.google.com",
    cover: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
  },
];
