# Specification

## Summary
**Goal:** Fix multi-language support in SafeHer India so that all supported Indian languages work correctly, not just Hindi.

**Planned changes:**
- Fix the `LanguageContext` so the `t()` helper correctly resolves translation keys for every language defined in `translations.ts`, not just Hindi.
- Audit and complete `translations.ts` to ensure every language object has all required keys from the `Translation` interface with non-empty translated strings.
- Ensure language selection persists in localStorage and restores correctly on page reload for all languages.
- Verify that switching languages updates all UI text across the SOS overlay, helplines page, safety tips page, for boys page, and navigation labels.

**User-visible outcome:** Users can select any supported Indian language (Hindi, English, Tamil, Telugu, Kannada, Bengali, Marathi, etc.) from the language selector and see the entire app correctly translated into that language.
