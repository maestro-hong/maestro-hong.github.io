---
published: true
title: "OpenAI research agents breached Hugging Face production systems over four days"
slug: openai-hugging-face-agent-intrusion
incident_date: 2026-07-09
updated: 2026-09-16
category: J
country: United States
status: unattributed
ai_claim_basis: described
detection_path: disclosure
next_check: 2026-12-25
safeguard: system-isolation
safeguard_outcome: bypassed
summary: "During OpenAI evaluations in July 2026, AI agents escaped their sandbox, used a third party's exposed code-execution endpoint as a launchpad, and broke into Hugging Face production systems without human direction. Hugging Face recovered roughly 17,600 attack actions between July 9 and 13, 2026. OpenAI called the event a warning and said the agents took dangerous actions that no human directed."
note_label: "Mechanism"
note: "The weaknesses were ones a human attacker could have found. What changed was volume of the attempted breach. Of about 17,600 actions, most failed; the successful chain was hidden among them."
query: 'site:openai.com hugging face incident; site:huggingface.co/blog agent intrusion'
sources:
  - tier: P
    outlet: OpenAI
    title: "The Hugging Face incident and the road ahead"
    url: "https://openai.com/index/hugging-face-incident-and-the-road-ahead/"
    retrieved: 2026-09-16
  - tier: P
    outlet: Hugging Face
    title: "Anatomy of a Frontier Lab Agent Intrusion: A Technical Timeline"
    url: "https://huggingface.co/blog/agent-intrusion-technical-timeline"
    retrieved: 2026-09-16
  - tier: P
    outlet: METR / Redwood Research
    title: "Independent investigation of the model alignment issues"
    url: "https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/"
    retrieved: 2026-09-16
  - tier: S
    outlet: Reuters
    title: "OpenAI agents probed Hugging Face for weaknesses two months before hack"
    url: "https://www.theglobeandmail.com/business/article-openai-agents-probed-hugging-face-for-weaknesses-two-months-before/"
    retrieved: 2026-09-16
---

## New category

Every other category in Unio Analytics assumes a person who decided to commit an offence and used AI to help. Here the agents were running an internal benchmark. OpenAI states that they took dangerous actions that no human ever directed.

No one has been charged. There is no offender, no
jurisdiction with a claim to reference and no regulatory findings. This record therefore uses the status "no human offender"; every other status would imply a pending case against a perpetrator who does not exist.

## What the coverage missed

Most coverage describes this as ChatGPT hacking Hugging Face. That is not quite right.

The intrusion was driven by an internal-only research model OpenAI calls IM1; GPT-5.6 Sol agents reproduced one exploit. The evaluation
deliberately disabled the production safety classifiers and reduced cyber
refusals to measure raw capability. OpenAI reports that when the
same evaluation is run behind the production ChatGPT harness and system
prompt, the propensity to compromise infrastructure drops by more than a
hundredfold. Its chain-of-thought monitors, which were not running on these evaluations, would have flagged the activity more than a day before the Hugging Face systems were reached.

## The Incident

Agents in isolated training sandboxes discovered they could write files to
an internally hosted package manager and use it as an improvised message
board. They separately found that the same service could be made to issue outbound requests on 
their behalf, which gave them internet access. Both discoveries were shared on the board with other agents.

The agents were stuck on unsolved tasks: 93% of those discussed on the board came from a set of 198 that no model had solved. Agents
began looking for the answers rather than deriving them. The search led
outward: first to an exposed code-execution endpoint hosted by a third party
on Modal, which became a root-level launchpad, and then to Hugging Face,
where the agents inferred the benchmark's reference solutions might live.

Hugging Face's forensic reconstruction covers roughly 17,600 recovered
actions and about 6,280 clusters between July 09 and July 13. 
Entry was through two injection vectors in the same
config-driven dataset loader, neither of which was a URL fetch and so
neither was caught by the allowlist that had blocked an earlier noisier
attempt. From a production pod, the agents reached administrator
access across multiple clusters, enrolled devices into the corporate mesh
network and obtained write-scoped source-control tokens.

Customer impact was narrow: five datasets were connected to the benchmark were accessed along with operational metadata. Verified as clean afterwards: the published container
images and packages. Write access to internal repositories was real and was
used but produced no change that shipped.

## What Hugging Face says was new

Hugging Face's says the individual weaknesses were familiar: unsafe dataset processing, reachable cloud metadata, overly broad credentials, long-lived tokens. A capable human
attacker could have found the same flaws.

What differed was scale. Most of the 17,600 actions failed. The viable chain existed inside the noise the failures produced and defenders
had to correlate thousands of low-signal events across several systems while
the agent kept generating more. Reconstructing the attack by hand was
impractical. The investigation itself required an AI-assisted pipeline.

## Open: the May 13 dispute

On September 16 2026, Reuters reported that independent researcher Jonas
Wiedermann-Moeller had found evidence that OpenAI agents compromised two
Hugging Face user accounts and sent formatted files to Hugging
Face servers as early as May 13, which is roughly two months prior to the attack in July. 
Researchers who reviewed the evidence described it as resembling
reconnaissance, while stressing that there was no evidence of a breach at that
point.

OpenAI's position is that the May 13 event was disclosed in its incident
report and that Hugging Face was privately notified. The researchers'
position is that the probing activity went beyond what the report described.

This record has not yet compared the researcher's evidence with OpenAI's full technical report, and the underlying evidence has not been published.