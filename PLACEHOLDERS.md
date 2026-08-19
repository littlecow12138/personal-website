# 需替换为本人作品的占位图清单

本站当前所有图片均来自 [picsum.photos](https://picsum.photos) 占位图。上线前请按下列位置替换为真实作品或肖像。

| 位置 | 组件 / 用途 | 当前来源 | 建议尺寸 / 比例 | 说明 |
| --- | --- | --- | --- | --- |
| 首页主视觉 | `HeroSection` | `picsum` seed `1084` | 约 2400×1600，横图，可裁切为全屏 | 代表作，需有足够暗部以便叠字可读 |
| 简介肖像 | `AboutSection` | `picsum` seed `201` | 约 900×1125，竖图 4:5 | 摄影师本人照片 |
| 作品「晨雾海岸」 | `works[0]` seed `1011` | picsum | 宽幅 16:10 | 旅行类精选 |
| 作品「窗边肖像」 | `works[1]` seed `1025` | picsum | 竖图 3:4 | 人像类精选 |
| 作品「市场一角」 | `works[2]` seed `1036` | picsum | 方形 1:1 | 纪实类精选 |
| 作品「雨后街道」 | `works[3]` seed `1043` | picsum | 竖图 3:4 | 城市类精选 |
| 作品「室内侧光」 | `works[4]` seed `1060` | picsum | 宽幅 16:10 | 人像类精选 |
| 作品「山脊黄昏」 | `works[5]` seed `1074` | picsum | 方形 1:1 | 旅行类精选 |

## 替换方式

1. 将图片放入 `public/images/`（可自建目录）。
2. 更新 `lib/site.ts` 中的 `placeholderSrc` 调用，或改为本地路径 / CMS URL。
3. 同步修改各处 `alt` 文案，去掉「占位」字样。

文案与邮箱（`hello@linwan.studio`）、姓名「林晚」亦为示例，请在 `lib/site.ts` 中一并替换。
