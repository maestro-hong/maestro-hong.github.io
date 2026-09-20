---
published: true
title: "Man pleads guilty to using AI-generated songs and bot accounts to take $8m in royalties"
slug: smith-streaming-royalty-fraud
incident_date: 2024-09-04
updated: 2026-09-14
category: I
country: United States
status: convicted
summary: "Michael Smith, 54, of Cornelius, North Carolina, obtained more than $8 million in streaming royalties between 2017 and 2024 by running roughly 10,000 bot accounts against music he owned on Spotify, Apple Music, Amazon Music and YouTube Music. From 2018 he bought that catalogue — hundreds of thousands of AI-generated tracks — from an AI music company executive under a monthly supply contract. He pleaded guilty to conspiracy to commit wire fraud in March 2026."
note_label: "Mechanism"
note: "Platform detection looked for implausible play counts on individual tracks. Volume was the binding constraint on evading it, and a contracted supply of AI songs removed that constraint — the same revenue, spread thin enough per track to sit inside normal variation."
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
  - tier: T
    outlet: Help Net Security
    title: "Fake AI songs streamed billions of times, netting fraudster $10 million"
    url: "https://www.helpnetsecurity.com/2026/03/20/ai-music-streaming-fraud-guilty-plea/"
    retrieved: 2026-09-14
---

## Correcting a widespread description

Nearly all coverage of this case describes Smith as having created hundreds
of thousands of songs with artificial intelligence. The indictment says
something different: he bought them.

The misdescription does not originate with the press. It is in the United
States Attorney's own statement announcing the plea, which says Smith
generated the songs using artificial intelligence — contradicting the
charging document filed by the same office eighteen months earlier. Trade
coverage then reproduced that framing while linking to the indictment in the
same paragraph. The Help Net Security piece listed below is included as an
example of that, not as a source for any fact in this entry.

The supplier was the chief executive of an AI music company, charged in the
indictment as a coconspirator. Under a Master Services Agreement dated
1 February 2019, that company undertook to deliver between one thousand and
ten thousand songs a month, with full intellectual property rights passing
to Smith. Smith paid the greater of two thousand dollars a month or fifteen
per cent of the streaming revenue those songs earned. A music promoter,
charged as a further coconspirator, and the supplier each took ten per cent
of the proceeds.

That distinction matters for anyone trying to understand how this category
of fraud scales. It was not one person with a generation tool. It was a
procurement relationship with a contracted monthly volume, a revenue share,
and a supplier whose product quality improved over the life of the contract
— by August 2020 the supplier was reporting substantially better audio and
newly added vocal generation.

## The constraint AI actually removed

Smith had been running bot accounts since 2017, initially against his own
small catalogue and then against a publicist's. He also tried selling
fraudulent streams to other musicians as a service. Neither produced the
volume the scheme needed.

The reason is a detection threshold. Platforms watched for individual tracks
with implausible play counts, so a billion streams concentrated on one song
was conspicuous while the same billion spread across tens of thousands of
songs was not. Catalogue size, not bot capacity, was the limiting factor.

This is unusually well evidenced. The indictment quotes Smith's own emails
to coconspirators across late 2018 and 2019 stating the logic directly: that
he needed a large quantity of content carrying small numbers of streams
each, that he needed songs quickly in order to work around the anti-fraud
systems then being deployed, and that without enough catalogue he would
overrun individual songs and lose them. In June 2019 he asked his supplier
for a further ten thousand songs specifically so the streams could be spread
wider.

## Operational detail

Roughly ten thousand bot accounts at peak, registered through bulk-purchased
email addresses in fictitious names, with over a thousand running
simultaneously. Family plans were used because they were the cheapest way to
hold multiple accounts. VPNs concealed that the accounts all operated from
one residence. Payment was routed through a debit-card service that Smith
told he was issuing cards to company employees, funded with $1.3 million in
fraud proceeds.

The supplied audio files arrived with randomised filenames. Smith generated
plausible song and artist names to attach to them — the disguise was in the
metadata rather than the audio.

## Three figures, not one

In a February 2024 email Smith claimed over four billion streams and twelve
million dollars in royalties since 2019. The indictment alleges more than
ten million. The plea carries a forfeiture of $8,091,843.64.

These are not revisions of a single estimate. The first is an offender's
boast, the second a prosecutor's allegation across three counts, the third a
negotiated forfeiture attached to one count. Coverage that presents them
interchangeably, or that pairs the largest figure with the guilty plea, is
conflating three different quantities.

## The provenance lie

When the Mechanical Licensing Collective halted payments and challenged him
in 2023, Smith and his representatives denied stream manipulation and
asserted that the works were human-authored rather than computer-generated.
The false claim was about AI provenance specifically, which is worth noting
as platforms and collecting societies move toward mandatory AI disclosure —
the enforcement question is not only whether disclosure is required but
whether a denial is independently actionable.

## Enforcement

Charged 4 September 2024 on three counts — wire fraud conspiracy, wire
fraud, and money laundering conspiracy — each carrying a maximum of twenty
years. Pleaded guilty 19 March 2026 to a single count of conspiracy to
commit wire fraud, maximum five years, forfeiture agreed at $8,091,843.64.
Sentencing was listed for 29 July 2026 before Judge John G. Koeltl.

**Open — sentencing outcome not confirmed in this record.** The listed date
has passed. Also unresolved: the indictment identifies the AI music company
executive and the promoter as coconspirators, and no public charging
document against either has been located.