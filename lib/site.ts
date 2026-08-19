export const site = {
  name: "林晚",
  nameEn: "Lin Wan",
  role: "摄影师",
  email: "hello@linwan.studio",
  location: "上海 / 可差旅",
  tagline: "用光影记录人与地方之间的安静时刻。",
  about: {
    lead: "我拍摄人像、旅行与生活纪实。",
    body: "工作上偏爱自然光与留白，尽量让画面自己说话。客户多为个人写真、品牌视觉与小型活动记录。拍摄前会充分沟通场景与节奏，拍摄中保持克制，后期只做必要的色调整理。",
  },
} as const

export type WorkItem = {
  id: string
  title: string
  category: string
  /** picsum seed — swap for real files listed in PLACEHOLDERS.md */
  seed: number
  span: "tall" | "wide" | "square"
}

export const works: WorkItem[] = [
  {
    id: "w1",
    title: "晨雾海岸",
    category: "旅行",
    seed: 1011,
    span: "wide",
  },
  {
    id: "w2",
    title: "窗边肖像",
    category: "人像",
    seed: 1025,
    span: "tall",
  },
  {
    id: "w3",
    title: "市场一角",
    category: "纪实",
    seed: 1036,
    span: "square",
  },
  {
    id: "w4",
    title: "雨后街道",
    category: "城市",
    seed: 1043,
    span: "tall",
  },
  {
    id: "w5",
    title: "室内侧光",
    category: "人像",
    seed: 1060,
    span: "wide",
  },
  {
    id: "w6",
    title: "山脊黄昏",
    category: "旅行",
    seed: 1074,
    span: "square",
  },
]

export type PricingTier = {
  name: string
  price: string
  unit: string
  includes: string[]
  note?: string
}

export const pricing: PricingTier[] = [
  {
    name: "个人写真",
    price: "¥2,800",
    unit: "起 / 场",
    includes: ["2 小时拍摄", "2–3 个场景", "精修 20 张", "全部底片筛选后交付"],
  },
  {
    name: "品牌 / 产品",
    price: "¥4,500",
    unit: "起 / 天",
    includes: ["半天至一天档期", "场景与光线方案沟通", "精修 40 张", "可用于商业发布"],
    note: "具体报价按需求与差旅调整",
  },
  {
    name: "活动记录",
    price: "¥3,200",
    unit: "起 / 场",
    includes: ["最多 4 小时", "纪实为主、少量引导", "精修 30 张", "活动后 7 日内交付"],
  },
]

export function placeholderSrc(seed: number, width: number, height: number) {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`
}
