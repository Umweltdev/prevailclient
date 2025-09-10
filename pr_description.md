##  ClickUp Task Link

> Please paste the ClickUp task link here

[ClickUp Task](https://app.clickup.com/t/CU-XXXX)

---

## ✨ Summary

This pull request focuses on improving user flow and consistency across the Trinity+ pages. It adds navigation to the main wizard from various call-to-action buttons and pricing plans. It also includes updates to solution descriptions and visual adjustments to pricing pages.

---

##  Changes Made

> List all code-level changes in bullet format

- **Navigation:**
  - Implemented `onClick` handlers on 'Schedule Demo', 'Get Bundle', and other CTA buttons to navigate to the `/trinity/plus#wizard` page.
  - This change affects the following components:
    - `TrinityPlus/AedComponents/_components/CTA.tsx`
    - `TrinityPlus/ExpenseManager/_components/CTA.tsx`
    - `TrinityPlus/ExpenseManager/_components/Pricing.tsx`
    - `TrinityPlus/Mcd/components/Hero.tsx`
    - `TrinityPlus/TrinityPlus/_components/Hero.tsx`
    - `TrinityPlus/Garo/garo/_components/pricing-section.tsx`
    - `TrinityPlus/Mcd/components/Pricing.tsx`

- **Content Updates:**
  - Updated the descriptions for 'Trinity Core' and 'Trinity Plus' in `TrinityPlus/StepWizardComponent.tsx`.

- **UI/UX Improvements:**
  - Added the `FooterNew` component to the `TrinityCore` and `TrinityPlus` pages for a consistent look and feel.
  - Adjusted the 'Most Popular' and 'featured' flags on several pricing pages to highlight different plans in:
    - `TrinityPlus/ExpenseManager/_components/Pricing.tsx`
    - `TrinityPlus/AedComponents/_components/Pricing.tsx`
    - `TrinityPlus/Garo/garo/_components/pricing-section.tsx`
    - `TrinityPlus/Mcd/components/Pricing.tsx`
  - Wrapped the `StepWizard` component in a `div` with the id 'wizard' on the `TrinityPlus` page to enable direct linking.

---

##  Tests Performed

> Describe what was tested and how

- [x] Manual testing in local environment
- [x] API tested via Postman
- [x] UI tested on mobile + desktop
- [ ] Unit tests written (if applicable)

---

##  Screenshots (if applicable)

> UI changes should include screenshots

| Desktop | Mobile |
|--------|--------|
| ![desktop](URL_HERE) | ![mobile](URL_HERE) |

---

##  Additional Notes

> Any known bugs, edge cases, or follow-up work