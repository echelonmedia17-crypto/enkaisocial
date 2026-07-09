# TODO

## Portfolio page editorial replacement
- [x] Read current `src/routes/portfolio.tsx` and identify existing gallery + card implementation.
- [x] Read current `src/routes/projectdata.ts` and confirm 7 total projects.
- [x] Replace the current portfolio gallery section with a new **Featured Projects** section.
- [x] Ensure **exactly 7** cards render immediately below the heading.
- [x] Enforce strict alternating split layout per card (Image 70/Text 30 vs Text 30/Image 70) across all 7 cards using index parity.
- [ ] Enforce layout constraints: one card per row, no masonry, ~90–95% container width, equal spacing 48–64px.
- [ ] Verify/update animations: card fade + move upward; image zoom 1.08 → 1; replay on viewport re-entry; hover image slight zoom; gold border glow on hover.
- [x] Run typecheck/build to ensure no TS/JSX errors.


