# TODO

## Premium Services cinematic horizontal scroll (ScrollTrigger)
- [x] Replace existing `Services()` bento grid in `src/routes/index.tsx` with a pinned, scroll-driven horizontal sequence (01→06).

- [ ] Implement GSAP ScrollTrigger with scrub and sufficient scroll distance so cards transition smoothly without snapping.
- [ ] Ensure initial state shows Service 01 fully visible and active.
- [ ] For each segment, set active/inactive card visuals (active: scale ~1.03, brighter border/shadow/typography; inactive: opacity 0.6–0.7).
- [ ] Add subtle depth/parallax (not exaggerated motion) while keeping navy background constant.
- [ ] Support mobile: cards fill most viewport width and use the same scroll-driven reveal (no touch horizontal swipe).
- [ ] Reset ScrollTrigger when the user leaves/returns to replay the sequence.
- [ ] Quick manual test: desktop + mobile scroll entry/exit boundaries and performance.

