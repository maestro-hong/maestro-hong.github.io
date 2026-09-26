---
published: false
title: "News-headline style: who did what. Subject, verb, what happened. No thesis, no two-clause argument."
slug: short-url-slug
incident_date: 2026-01-01
updated: 2026-01-01
category: A
country: Country
status: reported
ai_claim_basis: statement  # court, described, statement, media or none. See _data/claim_bases.yml
detection_path: unknown    # provider, referral, victim, business, disclosure, outside, police or unknown. See _data/detection_paths.yml
next_check: 2026-01-31     # next known court or agency date plus one day; otherwise 30 days out if active, 90 if nothing is pending; empty when closed
summary: "Two or three sentences. What happened, who it affected, how it came to light. No adjectives that the sources do not support."
note_label: "Mechanism"
note: "One line only. What made this possible, what control it defeated, or what the numbers do and do not establish. Use Mechanism, Open question, or Numbers check."
query: 'site:justice.gov "artificial intelligence" wire fraud'
sources:
  - tier: P
    outlet: Issuing agency
    title: "Document title"
    url: "https://example.gov/release"
    retrieved: 2026-01-01
  - tier: S
    outlet: News outlet
    title: "Headline"
    url: "https://example.com/article"
    retrieved: 2026-01-01
---

Optional longer body. Most entries do not need one. Use it when the case
has an aftermath worth tracing, a contested figure worth unpacking, or a
legal question that will take years to resolve.

Copy this file, rename it, and set published to true.