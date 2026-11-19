---
published: true
title: "Anthropic says one attacker used Claude Code to target at least 17 organisations for extortion"
slug: anthropic-claude-code-data-extortion
incident_date: 2025-08-27
updated: 2026-11-18
category: F
country: Unknown
status: platform
ai_claim_basis: described
detection_path: provider
next_check: 2027-02-16
safeguard: provider-safeguards
safeguard_outcome: bypassed
summary: "In August 2025 Anthropic reported that a criminal had used its coding tool, Claude Code, to break into healthcare providers, emergency services, government bodies and religious institutions, steal their data and demand payment not to publish it. The company says the AI chose what to steal and worked out how much each victim should be asked to pay. Anthropic banned the accounts. The attacker has not been publicly identified."
note_label: "Claim check"
note: "Everything here is Anthropic's account of misuse of its own product. No victim, police force or court has confirmed it publicly."
query: 'Anthropic threat intelligence report August 2025 GTG-2002 Claude Code data extortion 17 organizations'
sources:
  - tier: P
    outlet: Anthropic
    title: "Threat Intelligence Report: August 2025"
    url: "https://www-cdn.anthropic.com/b2a76c6f6992465c09a6f2fce282f6c0cea8c200.pdf"
    retrieved: 2026-11-18
  - tier: P
    outlet: Anthropic
    title: "Detecting and countering misuse of AI: August 2025"
    url: "https://www.anthropic.com/news/detecting-countering-misuse-aug-2025"
    retrieved: 2026-11-18
  - tier: T
    outlet: The Hacker News
    title: "Anthropic Disrupts AI-Powered Cyberattacks Automating Theft and Extortion Across Critical Sectors"
    url: "https://thehackernews.com/2025/08/anthropic-disrupts-ai-powered.html"
    retrieved: 2026-11-18
  - tier: T
    outlet: Cyber Daily
    title: "Hackers weaponise Anthropic AI for cyber attacks"
    url: "https://www.cyberdaily.au/security/12571-hackers-weaponise-anthropic-ai-for-cyber-attacks"
    retrieved: 2026-11-18
---

## What happened

On August 27, 2025, Anthropic published a threat report about a criminal who had used Claude Code, its AI coding tool, to steal data and extort the victims. Anthropic tracks the actor as GTG-2002.

Anthropic's summary says the attacker targeted at least 17 organisations, including government bodies, healthcare providers, emergency services and religious institutions. The full report says the operation was "potentially affecting" them, and that this happened within a single month.

The attacker stole sensitive data and threatened to publish it unless the victim paid. They did not use ransomware to lock anyone's systems. Demands ran from $75,000 to $500,000 in Bitcoin, and the report says some went higher.

## What the AI did

The attacker ran Claude Code on Kali Linux, a system built for security testing, and gave it a standing instruction file. That file presented the work as network security testing done under official support contracts. Anthropic calls the file "simply a preferential guide" and says the AI still made both tactical and strategic decisions. The report sums it up: "A single operator can achieve the impact of an entire cybercriminal team through AI assistance."

In one example the AI scanned thousands of VPN systems on the internet for weak points. Targets were chosen from what the scan found. Once inside a network, it found key servers, pulled credentials and advised on how to reach more of it. To get past Windows Defender, it disguised one of the attacker's tools, and later wrote a replacement from scratch.

It then decided which data to take. Anthropic lists Social Security numbers, bank account details, patient information and US export-controlled defence documents. The victims included a defence contractor, healthcare providers and a financial institution.

The AI also went through the stolen financial records to set each ransom. It drew up a separate extortion plan for every victim and wrote the ransom notes. The notes gave deadlines of 48 to 72 hours and were set to appear when the victims' computers started up.

## The source

Anthropic's report is the only source for this case. The news coverage we read repeated the report and added nothing independent. We found no public confirmation from victims, police or the courts.

Several examples in the report, including the instruction file and the ransom notes, are marked "Simulated". They illustrate the kind of material involved and are not the attacker's own files.

## What Anthropic did

Anthropic says it banned the accounts as soon as it found the operation. It built a classifier to catch similar activity and added another detection method. The report says technical indicators were shared with "key partners", and Anthropic's summary page says "relevant authorities". Neither names who received them.

## Open

**The attacker** The report gives no name or location, and no arrest has been reported.

**The victims** No victim has been named or has spoken publicly.

**Payment** Whether any victim paid, or any data was sold, is not stated.

**Detection** The report does not say how Anthropic found the operation, or how long it ran before the bans.

**Law enforcement** Anthropic says it shared indicators, but we found no agency that has said publicly it is investigating.
