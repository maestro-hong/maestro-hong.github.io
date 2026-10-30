---
published: true
title: "Man pleads guilty to $8 million streaming fraud using AI-generated songs and bot accounts"
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
summary: "Michael Smith, 54, pleaded guilty in March 2026 to conspiracy to commit wire fraud for obtaining more than $8 million in streaming royalties. From 2017 to 2024 he ran roughly 10,000 bot accounts that streamed music he controlled on Spotify, Apple Music, Amazon Music and YouTube Music. From [2018 or 2019: match the body] he bought hundreds of thousands of AI-generated tracks from the chief executive of an AI music company under a monthly supply contract."
note_label: "Mechanism"
note: "Platforms flag individual tracks with implausible play counts. Spreading streams across hundreds of thousands of AI-generated tracks kept each track's numbers low enough to pass that check."
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

Most reports say Smith created hundreds of thousands of songs with AI. The indictment says he bought them.

The error starts with the government, not the press. The US Attorney's announcement of the plea says Smith generated the songs using AI, which contradicts the indictment the same office filed 18 months earlier. News reports repeated the newer statement, often while linking to the indictment in the same paragraph.

The supplier was the chief executive of an AI music company, later named in the indictment as a co-conspirator. Under a Master Services Agreement dated February 1, 2019, the CEO agreed to supply 1,000 to 10,000 songs a month [and the rights to them: check the indictment's wording]. Smith paid $2,000 a month or 15% of the streaming revenue.

The scheme ran on an ordinary supply contract: a vendor, a monthly volume and a revenue share.

## The constraint removed by AI

Smith had been running bot accounts since 2017 and had tried selling fraudulent streams to other musicians. Platforms flag individual tracks with implausible play counts: a billion streams on one song raises a red flag, while the same billion spread across tens of thousands of songs does not. The limiting factor was catalogue size, not bot capacity.

The indictment quotes emails Smith sent co-conspirators in late 2018 and 2019 saying he needed (1) a large quantity of songs, each carrying a small number of streams; (2) songs quickly, to work around anti-fraud systems; and (3) enough catalogue to avoid overrunning individual songs and losing them. In June 2019 he asked his supplier for another 10,000 songs so the streams could be spread wider.

## Operational detail

Roughly 10,000 bot accounts were operating during the peak, which were registered through bulk-purchased
email addresses in fabricated names. Family plans were used to reduce operating costs of
holding multiple accounts. VPNs concealed that the accounts all operated from
one residence. Payments ran through a debit-card service, which Smith told he was issuing cards to company employees; it was funded with $1.3 million in fraud proceeds.

The audio files arrived with randomized filenames. Smith attached invented song titles and artist names to the files.

## Forfeiture

In a February 2024 email, Smith claimed over four billion streams with 12
million dollars in royalties since 2019. The plea carries a forfeiture of a total of $8,091,843.64.

## The 2023 denial

When the Mechanical Licensing Collective paused payments and challenged Smith
in 2023, Smith and his representatives denied stream manipulation and
asserted that the works were human-authored rather than computer-generated.

## Enforcement

Smith was charged on September 4, 2024 with wire fraud conspiracy, wire fraud and money laundering conspiracy. Each count carries a maximum of 20
years. On March 19, 2026 Smith pleaded guilty to one count of conspiracy to commit wire fraud. Forfeiture was set at $8,091,843.64.

On September 22 2026, the defence filed a sentencing memorandum asking for probation, arguing that the losses were so thinly spread that no artist suffered any perceptible harm. The Sentencing Guidelines range is 46 to 57 months, but the Probation Office recommended 24.

Spreading streams thinly across hundreds of thousands of tracks is what kept the scheme hidden from the platforms. Smith now argues that the same thinness means nobody was harmed.

**Open** No sentencing date has been set. No public charging document has been found for the AI music company executive or the promoter.