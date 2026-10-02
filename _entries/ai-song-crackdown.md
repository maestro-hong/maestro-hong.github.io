---
published: true
title: "Man pleads guilty of using AI-generated songs and bot accounts totalling $8 mil royalties"
slug: smith-streaming-royalty-fraud
incident_date: 2024-09-04
updated: 2026-09-26
category: I
country: United States
status: convicted
ai_claim_basis: court
detection_path: unknown
next_check: 2026-10-26
safeguard: platform-detection
safeguard_outcome: bypassed
summary: "A 54 year old man, Michael Smith, pleaded guilty of fradulently obtaining more than $8 million in streaming royalties with the use of AI. From 2017 to 2024, Smith operated roughly 10,000 bot accounts against music he owned on platforms, such as Spotify, Apple Music, Amazon Music and YouTube Music. Since 2018, he purchased hundreds of thousands of AI-generated tracks by an AI music company executive under a monthly supply contract. He pleaded guilty to conspiracy to commit wire fraud in March 2026."
note_label: "Mechanism"
note: "Music streaming platforms detected implausible play counts on Smith's individual tracks. Volume is the binding constraint on evading the unusual activity, but a large supply of AI songs removed the abnormality. The method of using bots to repeatedly play numerous tracks may not have immediately alerted the moderator since the activity may have appeared to sit inside normal variation."
query: 'site:justice.gov "artificial intelligence" streaming fraud royalties'
sources:
  - tier: P
    outlet: U.S. District Court, SDNY
    title: "Sealed Indictment, United States v. Michael Smith, 24 Cr. 504"
    url: "https://www.justice.gov/usao-sdny/media/1366241/dl"
    retrieved: 2026-09-14
  - tier: P
    outlet: U.S. Attorney's Office, SDNY
    title: "North Carolina Man Pleads Guilty To Music Streaming Fraud Aided By Artificial Intelligence"
    url: "https://www.justice.gov/usao-sdny/pr/north-carolina-man-pleads-guilty-music-streaming-fraud-aided-artificial-intelligence-0"
    retrieved: 2026-09-14
  - tier: S
    outlet: Bloomberg Law
    title: "AI Music Maker Who Faked Streams Pleads Guilty on Fraud Count"
    url: "https://news.bloomberglaw.com/ip-law/ai-music-maker-who-faked-streams-pleads-guilty-on-fraud-count"
    retrieved: 2026-09-14
  - tier: S
    outlet: Music Business Worldwide
    title: "Man who pocketed $8m using AI songs and bot streams asks for no prison time, arguing ‘no artist suffered any perceptible harm’"
    url: "https://www.musicbusinessworldwide.com/man-who-pocketed-8m-using-ai-songs-and-bot-streams-asks-for-no-prison-time-arguing-no-artist-suffered-any-perceptible-harm/"
    retrieved: 2026-09-26
  - tier: T
    outlet: Help Net Security
    title: "Fake AI songs streamed billions of times, netting fraudster $10 million"
    url: "https://www.helpnetsecurity.com/2026/03/20/ai-music-streaming-fraud-guilty-plea/"
    retrieved: 2026-09-14
---

## Correction

Nearly all coverage of this case describes Smith as having created hundreds
of thousands of songs with artificial intelligence. However, the indictment states that it was purchased.

The misinformation does not originate from the press. The United
States Attorney's statement announced the plea, which states that Smith
generated the songs using artificial intelligence. The information contradicts the
charging document filed by the same office 18 months earlier. Trade
coverage then reproduced that framing while linking to the indictment in the
same paragraph.

The supplier was the chief executive of an AI music company, who was later charged in the indictment as a co-conspirator. A Master Services Agreement dated
February 01, 2019 that company delivered between 1,000 and 10,000 songs a month with full intellectual property rights passing to Smith. Smith paid $2,000 a month or 15% of the streaming revenue. Both a music promoter and the supplier each took 10% of the proceeds.

It was not just one person who conducted the act. The crime was committed as a procurement relationship between differing parties with a contracted monthly volume, a revenue share and a supplier; by August 2020 the supplier was reporting substantially better audio and newly added vocal generation.

## The constraint removed by AI

Smith had been running bot accounts since 2017. He also tried selling
fraudulent streams to other musicians as a service. Platforms detect individual tracks with implausible play counts, so a billion streams concentrated on one song was conspicuous while the same billion spread across tens of thousands of songs was not. Catalogue size, not bot capacity was the limiting factor.

The indictment quotes Smith's email correspondence to coconspirators across late 2018 and 2019 that: 1) he needed a large quantity of content carrying small numbers of streams 2) he needed songs quickly to work around the anti-fraud systems 3) that without enough catalogue he would overrun individual songs and lose them. In June 2019, Smith asked his supplier for a further 10,000 songs so the streams could be spread wider.

## Operational detail

Roughly 10,000 bot accounts at peak, registered through bulk-purchased
email addresses in fabricated names, with over a thousand running
simultaneously. Family plans were used because they were the cheapest way to
hold multiple accounts. VPNs concealed that the accounts all operated from
one residence. Payment was routed through a debit-card service that Smith
told he was issuing cards to company employees, funded with $1.3 million in
fraud proceeds.

The supplied audio files was initially delivered to Smith with randomized filenames. Smith generated plausible songs and artist names to attach to each other. The disguise was in the metadata rather than the audio.

## Three figures, not one

In a February 2024 email, Smith claimed over four billion streams and twelve
million dollars in royalties since 2019. The indictment alleges more than
10 million. The plea carries a forfeiture of $8,091,843.64.

These are not revisions of a single estimate. The first is an offender's
boast, the second is a prosecutor's allegation across three counts, the third a
negotiated forfeiture attached to one count. Coverage that presents them
interchangeably, or that pairs the largest figure with the guilty plea, is
conflating three different quantities.

## The provenance lie

When the Mechanical Licensing Collective halted payments and challenged him
in 2023, Smith and his representatives denied stream manipulation and
asserted that the works were human-authored rather than computer-generated.
The false claim was about AI provenance specifically, which is worth noting
as platforms and collecting societies move toward mandatory AI disclosure. The enforcement question is not whether disclosure is required, but
whether a denial is independently actionable.

## Enforcement

Smith was charged on September 04, 2024 on three counts a) wire fraud conspiracy b) wire fraud and 3) money laundering conspiracy. Each count carries a maximum of twenty
years. On March 19 2026, Smith pleaded guilty to a single count of conspiracy to
commit wire fraud, maximum five years and forfeiture agreed at $8,091,843.64.
Sentencing was listed for July 29 2026 before Judge John G. Koeltl.

On September 22, the defence filed a sentencing memorandum asking for probation arguing that the losses were spread so thinly across millions of rights holders that no individual artist or songwriter suffered any real damage. The guidelines range is 46 to 57 months, but the Probation Office recommended 24. The government had not filed its submission when this was reported.

That argument is worth holding next to the mechanism described above.
Spreading the revenue thinly enough per track to sit inside normal variation
was how the scheme stayed under the platforms' detection thresholds. The same
thinness is now being offered as the reason nobody was harmed.

**Open.** No sentencing date and the indictment identifies the
AI music company executive and the promoter as co-conspirators, and no public
charging document against either has been located.