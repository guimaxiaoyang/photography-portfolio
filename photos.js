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
  bioEn: `Based in the San Francisco Bay Area, I'm a portrait photographer with five years of experience — drawn to light, emotion, and the fleeting moments that deserve to be remembered.`,

  // About 页简介（中文）
  bioZh: `旧金山湾区人像摄影师，五年拍摄经验。着迷于光线与情感，以及那些值得被珍藏的瞬间。`,

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
//  作品集系列 — 每次拍摄是一个系列
//
//  id:       唯一标识，英文+数字，不含空格（URL用）
//  name:     系列名称（你自己取，显示在网站上）
//  category: portrait | event | travel
//  date:     拍摄日期
//  cover:    封面图路径（放在 images/ 文件夹里）
//  photos:   这个系列的所有照片路径
//
//  ➕ 新增系列：复制一个 {} 块，填写信息，放进数组即可
// ============================================================

const SERIES = [
  {
    id: "portrait-sarah-2024",
    name: "Sarah · Golden Hour",
    category: "portrait",
    date: "Oct 2024",
    cover: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=85",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1200&q=85",
      "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?w=1200&q=85",
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&q=85",
    ],
  },
  {
    id: "portrait-amy-2024",
    name: "Amy · Studio",
    category: "portrait",
    date: "Dec 2024",
    cover: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1200&q=85",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1200&q=85",
    ],
  },
  {
    id: "event-gala-2024",
    name: "Annual Gala 2024",
    category: "event",
    date: "Nov 2024",
    cover: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=85",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=85",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=85",
    ],
  },
  {
    id: "travel-tokyo-2024",
    name: "Tokyo · Spring",
    category: "travel",
    date: "Apr 2024",
    cover: "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?w=1200&q=85",
    ],
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
