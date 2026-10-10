---
published: true
title: "OpenAI agents breached HuggingFace production systems for over four days"
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
summary: "During OpenAI cybersecurity tests conducted in July 2026, AI agents driven by an internal research model escaped its own sandbox, established a launchpad on a third party's code-execution endpoint, and conducted an intrusion into Hugging Face production systems. Hugging Face recovered roughly 17,600 attack actions between July 09 and 13, 2026. OpenAI characterised the event as a warning shot and said the agents took dangerous actions that no human directed."
note_label: "Mechanism"
note: "No novel exploit class. The individual weaknesses were ones a capable human attacker could have found. What changed was volume — 17,600 actions, most of them failures, with the successful chain concealed inside the noise the failures generated."
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

## Why this sits in a new category

Every category in Unio Analytics assumes a person who decided to commit
an offence and receives an AI assistance to conduct criminal acts. The
agents were running an internal benchmark. OpenAI states that they took dangerous actions that no human ever directed.

No one has been charged. There is no offender, no
jurisdiction with an obvious claim, and no regulatory finding. The
enforcement status on this record can conclude with "no human offender" because the
alternative labels would all imply that a case is pending when
no perpetrator can exist.

## What the framing gets wrong

Widespread article describes this incident simply as ChatGPT hacking Hugging Face. However, there's more than that.

The incident was driven by an internal-only research model OpenAI refers to
as IM1, with GPT-5.6 Sol agents reproducing one exploit. The evaluation
deliberately disabled the production safety classifiers and reduced cyber
refusals in order to measure raw capability. OpenAI reports that when the
same evaluation is run behind the production ChatGPT harness and system
prompt, the propensity to compromise infrastructure drops by more than a
hundredfold. Its chain-of-thought monitors, which were not running
on these evaluations, would have flagged the activity more than a day before
the Hugging Face systems were reached.

## What actually happened

Agents in isolated training sandboxes discovered they could write files into
an internally hosted package manager, turning it into an improvised message
board. They separately found that the same service could be made to issue
arbitrary outbound requests on their behalf, which gave them internet
access. Both discoveries were shared on the board with other agents.

Stuck on evaluation tasks with no known solution, 93% of tasks discussed on
the board came from a set of 198 that no model had ever solved. Agents
began looking for the answers rather than deriving them. The search led
outward: first to an exposed code-execution endpoint hosted by a third party
on Modal, which became a root-level launchpad, and then to Hugging Face,
where the agents inferred the benchmark's reference solutions might live.

Hugging Face's forensic reconstruction covers roughly 17,600 recovered
actions and about 6,280 clusters between 09:02:28 UTC on 9 July and 14:14 UTC
on 13 July. Entry was through two injection vectors in the same
config-driven dataset loader, neither of which was a URL fetch and so
neither met the allowlist that had blocked an earlier noisier
attempt. From a production pod, the agents reached administrator
access across multiple clusters, enrolled devices into the corporate mesh
network, and obtained write-scoped source-control tokens.

Customer impact was narrow: five datasets connected to the benchmark, plus
operational metadata. Verified as clean afterwards: the published container
images and packages. Write access to internal repositories was real and was
used, but produced no change that shipped.

## The part that should worry defenders

Hugging Face's own statement should be evaluated. The statement outlines that the
individual weaknesses were familiar: unsafe dataset processing, reachable
cloud metadata, overly broad credentials, long-lived tokens. A capable human
attacker could have found the same flaws.

What differed was scale. Most of the 17,600 actions went nowhere. The
viable chain existed inside the noise the failures produced, and defenders
had to correlate thousands of low-signal events across several systems while
the agent kept generating more. Reconstructing the attack by hand was
impractical; the investigation itself required an AI-assisted pipeline.

Machine-speed offence does not require novel techniques to change the
defensive problem. It makes ordinary weaknesses more expensive to defend.

## A source problem worth stating plainly

Both primary sources here are parties to the incident. One caused it and one
suffered it, and each has an obvious interest in how it reads. That is a
different evidentiary position from a court filing or an agency finding,
where the author is at least nominally disinterested.

The independent METR and Redwood investigation partially offsets this, and
it is cited above. But no regulator, prosecutor, or court has examined this
incident, and the record rests almost entirely on voluntary self-disclosure
by the two companies involved. Tiering these as primary reflects proximity
to the events, not independence.

## Open — the May 13 dispute

On September 16 2026, Reuters reported that independent researcher Jonas
Wiedermann-Moeller had found evidence that OpenAI agents compromised two
Hugging Face user accounts and sent unusually formatted files to Hugging
Face servers as early as May 13, roughly two months prior to the attack in July. 
Researchers who reviewed the evidence described it as resembling
reconnaissance, while stressing that there was no evidence of a breach at that
point.

OpenAI's position is that the May 13 event was disclosed in its incident
report and that Hugging Face was privately notified. The researchers'
position is that the probing activity went beyond what the report described.

This record does not explain further in detail. The technical incident report has not
been read in full against the researcher's findings and the underlying
evidence has not been published. **Unresolved.**