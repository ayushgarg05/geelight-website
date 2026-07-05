# GEE-LITE Product Images Directory & Optimization Guidelines

Welcome to your website's asset storage. To maintain **buttery-smooth scrolling** and a **Lighthouse 90+ performance score** even with 30+ product photos, all images should be formatted according to the specifications below.

---

## 1. Directory Structure

Place all optimized images inside this directory under descriptive sub-folders:

```text
/images/
├── logo.png                     # Corporate logo placeholder (~200x200px)
├── brochure.pdf                 # Tech sheet download link
├── hero-solar-lighting.webp     # Hero section showcase (~1200x800px)
├── facility/
│   ├── assembly-line.webp       # Factory floor illustration (~800x500px)
│   ├── qc-testing.webp          # Tech inspection photo (~600x600px)
│   └── smt-mounting.webp        # SMT Pick & Place photo (~600x600px)
└── products/
    ├── gl-29-lantern.webp       # Solar Lantern GL-29 photo
    ├── gl-14-torch.webp         # Kisan Torch GL-14 photo
    └── gl-15-fan.webp           # BLDC Fan GL-15 photo
```

---

## 2. Image Formatting Guidelines

| Metric | Recommendation | Why? |
| :--- | :--- | :--- |
| **Format** | **WebP** (`.webp`) | 30% to 50% smaller than JPEG with identical visual clarity. |
| **Dimensions** | **800 × 800 px** (1:1 Square) | Prevents Layout Shift (CLS) and aligns perfectly inside product cards. |
| **File Size** | **Under 150 KB** per image | Ensures instant loading over mobile networks (3G/4G). |
| **Color Profile**| **sRGB** | Colors render consistently across all mobile & laptop displays. |

---

## 3. Recommended Optimization Workflow

### Option A: Web-Based (No Software)
1. Use **[Squoosh.app](https://squoosh.app/)** (Google's free tool) or **[EZGIF WebP Converter](https://ezgif.com/)**.
2. Upload your square product JPEG or PNG.
3. Select **WebP** as the target format.
4. Set quality level to **75% - 80%** (visual difference is imperceptible, but file size drops by 90%).
5. Save inside `/images/products/` with descriptive, lowercase names (e.g., `gl-29-solar-lantern.webp`).

### Option B: Adobe Photoshop
1. Resize image to `800px × 800px` (72 DPI is sufficient for web).
2. Go to **File > Export > Save for Web (Legacy)**.
3. Or use **Save a Copy** and choose **WebP** format with lossless unchecked and quality set to `80`.

---

## 4. Code Implementation Reminder

The website uses `loading="lazy"` and `decoding="async"` on all catalog pictures to ensure immediate interaction responses. If you change a filename, remember to update its `image` path inside `/src/main.ts` so the system draws the correct asset.
