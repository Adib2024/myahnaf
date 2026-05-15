# Portfolio Major Update Implementation Plan

This plan details the steps to modernize your portfolio's design, modularize the codebase, and update your profile to highlight Cloud Support Engineering, enterprise backup solutions, and full-stack development.

## User Review Required

> [!IMPORTANT]
> Please review the proposed new color palette and layout refactoring. Let me know if you have specific preferences for the "professional accent colors" (e.g., sticking with cyan/purple or moving to a more corporate blue/emerald).

## Open Questions

1. Do you want to keep the "Certifications & Education" section exactly as it is, or should we trim/update any specific certifications?
2. Do you have specific URLs (GitHub links, live demos) you'd like me to include for the new "VantageFlow Operations" and "Cloud Infrastructure Projects", or should I leave them as placeholders for now?

## Current File Analysis & Proposed Layout Changes

Currently, your portfolio is a single monolithic `Index.tsx` file (442 lines) combining state management, navigation, and all section layouts. The color palette is a bright gradient (`from-slate-900 via-purple-900 to-blue-900`) which is vibrant but less aligned with a sleek, minimalist aesthetic. 

**First Set of Layout Changes:**
1. **Modularization:** Break down `Index.tsx` into individual semantic React components (`Hero`, `About`, `Experience`, `Projects`, `Skills`, `Contact`). This makes the code much easier to maintain.
2. **Color Palette Update:** Transition to a deeply dark, sleek background (e.g., `#0a0a0a` or very dark slate) using minimal, high-contrast typography. We will use a unified primary accent color (like a sharp electric blue or elegant emerald) for subtle highlights, removing the heavy mixed gradients.
3. **Typography & Animation:** Implement `Inter` or `Outfit` fonts with clear hierarchy. Replace bouncy/pulsing animations with refined micro-interactions (e.g., smooth fade-ins on scroll, subtle lifting effects on hover, glassmorphism cards with fine borders).

## Proposed Changes

---

### UI & Layout Overhaul

#### [NEW] src/components/sections/Hero.tsx
Extract and redesign the hero section. Update the headline and subtitle to focus on "Cloud Support Engineer | Enterprise Backup & Automation". 

#### [NEW] src/components/sections/About.tsx
Update narrative to emphasize Dell Avamar, Data Domain, AWS, VMware, and the journey bridging cloud infra with full-stack development.

#### [NEW] src/components/sections/Experience.tsx
Refactor to clearly show recent roles and accomplishments in Cloud Support Engineering.

#### [NEW] src/components/sections/Projects.tsx
Introduce the two new flagship projects:
- **VantageFlow Operations:** Full-stack development (Google Apps Script, Python, DB logic).
- **Cloud Infrastructure Projects:** OS migrations and storage expansion.

#### [NEW] src/components/sections/Skills.tsx
Reorganize the grid into:
1. Cloud/DevOps (AWS, VMware, etc.)
2. Backup & Recovery (Dell Avamar, Data Domain)
3. Automation/SaaS (Python, Google Apps Script, Node.js)

#### [MODIFY] src/pages/Index.tsx
Refactor to act purely as a container/layout assembler that imports the above sections. Update global styles and remove the monolithic code.

#### [MODIFY] index.css & tailwind.config.ts
Adjust global styles to implement the new sleek, minimalist dark theme and refined animations.

## Verification Plan

### Automated Tests
- Verify TypeScript compilation without errors (`npm run build`).
- Verify routing and component imports.

### Manual Verification
- Visual inspection of the responsive layout on desktop and mobile viewports.
- Check hover states, scrolling behavior, and ensure all internal anchor links function properly.
- Ensure the updated narrative, project cards, and skills grid accurately reflect the new profile data.
