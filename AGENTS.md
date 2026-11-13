<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Route maps may define named map areas for long journeys; selecting a day switches to its area so regional and city-scale stops remain readable.
- Detailed paid guides live separately from public route summaries and render only inside an unlocked trip room, so public itinerary cards and maps remain previews.
- Reuse FranceRouteArtwork for paid France daily and overview artwork, with explicit schematic labels and separate navigation links, to keep maps consistent without implying road-level accuracy.
- Keep paid France venue links and dated verified rating snapshots in france-venues, rendered by FranceDayVenueLinks, to keep hotel and dining references consistent across days.
- Keep the France reservation overview inside the unlocked day switcher after day 7 and reuse france-venues for hotel and dining references to avoid public paid content and duplicated venue data.
- Consolidate only identical unused generated budget allowances through the shared estimate helper, preserving saved records and customer-entered expenses to avoid inflated estimates without losing spending.
- Keep France planning allowances in france-budget and reuse its total in catalogue and new expense budgets, preserving existing customer records when estimates change.
- Keep paid France day navigation, tool views and bottom continuation actions in TripRoomPage with one shared selection handler so all return to the same compact reading position; keep tool instances mounted when hidden to preserve unfinished input.
- Keep Oktoberfest detailed chapters in dedicated paid-guide components and expose only completed chapters through the shared trip-room day picker, so public previews and unfinished days cannot masquerade as detailed guides.
- Keep recorded Oktoberfest timings and dated access tariffs in day-specific planning modules with concrete tests, distinguishing walking estimates from recorded durations to avoid inventing travel history.
