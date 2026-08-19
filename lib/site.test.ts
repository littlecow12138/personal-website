import { describe, expect, it } from "vitest"
import { site } from "./site"

/**
 * Seam: `lib/site` — identity fields consumed by layout, header, hero, footer, contact.
 * Spec: generic photographer template (placeholder name + hello@example.com).
 */
describe("site identity template", () => {
  it("uses hello@example.com as the contact email", () => {
    expect(site.email).toBe("hello@example.com")
  })

  it("uses a placeholder Chinese photographer name instead of a personal identity", () => {
    expect(site.name).toBe("艾未")
    expect(site.name).not.toBe("林晚")
  })

  it("uses a placeholder English photographer name instead of a personal identity", () => {
    expect(site.nameEn).toBe("Avery Moss")
    expect(site.nameEn).not.toBe("Lin Wan")
  })
})
