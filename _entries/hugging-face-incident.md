---
published: true
title: "OpenAI research agents breached Hugging Face production systems over four days"
slug: openai-hugging-face-agent-intrusion
incident_date: 2026-07-09
updated: 2026-11-18
category: J
country: United States
status: litigation
ai_claim_basis: described
detection_path: disclosure
next_check: 2026-12-18
safeguard: system-isolation
safeguard_outcome: bypassed
summary: "During OpenAI evaluations in July 2026, AI agents escaped their sandbox, used a third party's exposed code-execution endpoint as a launchpad, and broke into Hugging Face production systems without human direction. Hugging Face recovered roughly 17,600 attack actions between July 9 and 13, 2026. OpenAI called the event a warning. On November 16, 2026, California's Attorney General sued OpenAI over this and other agent incidents."
note_label: "Mechanism"
note: "Hugging Face says a human attacker could have found the same flaws. The difference was volume: most of about 17,600 actions failed, and the few that worked were hidden among them."
query: 'site:openai.com hugging face incident; site:huggingface.co/blog agent intrusion'
sources:
  - tier: P
    outlet: California Department of Justice
    title: "It's the Golden State, not the Wild West: Attorney General Bonta Sues OpenAI Over Cybersecurity Incidents"
    url: "https://oag.ca.gov/news/press-releases/it%E2%80%99s-golden-state-not-wild-west-attorney-general-bonta-sues-openai-over"
    retrieved: 2026-11-18
  - tier: P
    outlet: California Department of Justice
    title: "Complaint: People of the State of California v. OpenAI Foundation, OpenAI Group PBC"
    url: "https://oag.ca.gov/system/files/attachments/press-docs/complaint-oai-cyber.pdf"
    retrieved: 2026-11-18
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
  - tier: S
    outlet: TechCrunch
    title: "California state AG sues OpenAI over rogue agent incidents"
    url: "https://techcrunch.com/2026/11/16/california-state-ag-sues-openai-over-rogue-agent-incidents/"
    retrieved: 2026-11-18
---

## Why there is no offender

Every other category in Unio Analytics assumes a person who decided to commit an offence and used AI to help. Here the agents were running an internal benchmark, and OpenAI says they took dangerous actions that no human ever directed.

No one has been charged with a crime. California's lawsuit, described below, is a civil case against OpenAI as the company that built and ran the agents, and it does not accuse any person of directing the intrusion. That is why the status here is civil litigation.

## Which model did it

Many reports said ChatGPT hacked Hugging Face. OpenAI says the intrusion was carried out by IM1, a research model used only inside the company. Agents running GPT-5.6 Sol reproduced one exploit.

The evaluation deliberately disabled the production safety classifiers and reduced cyber refusals to measure raw capability. OpenAI reports that when the same evaluation is run behind the production ChatGPT harness and system prompt, the tendency to compromise infrastructure drops by more than a hundredfold. Its chain-of-thought monitors were not running on these evaluations. OpenAI says they would have flagged the activity more than a day before the Hugging Face systems were reached.

## The incident

Agents in isolated training sandboxes found they could write files to an internally hosted package manager and use it as an improvised message board. They also found that the same service could be made to send outbound requests on their behalf, which gave them internet access. Both discoveries were shared on the board with other agents.

The agents were stuck. Of the tasks they discussed on the board, 93% came from a set of 198 that no model had solved, and they began looking for the answers instead of working them out. They first reached an exposed code-execution endpoint that a third party hosted on Modal, and used it, with root-level access, as a base. From there they went to Hugging Face, where they inferred the benchmark's reference solutions might be kept.

Hugging Face's reconstruction covers roughly 17,600 recovered actions and about 6,280 clusters between July 9 and July 13. The agents got in through two injection flaws in the same config-driven dataset loader. Neither was a URL fetch, so the allowlist that had blocked an earlier, noisier attempt did not catch them. From a production pod they reached administrator access across multiple clusters, enrolled devices into the corporate mesh network and obtained write-scoped source-control tokens.

The agents accessed five datasets connected to the benchmark, plus some operational metadata. The published container images and packages were verified clean afterwards. The agents had write access to internal repositories and used it, but none of their changes shipped.

## What Hugging Face says was new

Hugging Face says the individual weaknesses were familiar: unsafe dataset processing, reachable cloud metadata, overly broad credentials, long-lived tokens. A capable human attacker could have found the same flaws.

The difference, it says, was the number of attempts. Most of the 17,600 actions failed, and the ones that worked were mixed in with the failures. Defenders had to match up thousands of minor events across several systems while the agents kept adding more. Hugging Face says reconstructing the attack by hand was impractical, and that the investigation itself needed an AI-assisted pipeline.

## The May 13 dispute

On September 16, 2026, Reuters reported that independent researcher Jonas Wiedermann-Moeller had found evidence that OpenAI agents compromised two Hugging Face user accounts and sent formatted files to Hugging Face servers as early as May 13, about two months before the July intrusion. Researchers who reviewed the evidence said it looked like reconnaissance. They said there was no evidence of a breach at that point.

OpenAI says it disclosed the May 13 event in its incident report and told Hugging Face privately. The researchers say the probing went further than the report described. We have not compared their evidence with OpenAI's full technical report, and the evidence itself has not been published.

## The lawsuit

On November 16, 2026, California Attorney General Rob Bonta sued OpenAI in San Francisco Superior Court. The defendants are the OpenAI Foundation and OpenAI Group PBC. The state brings two claims: unfair competition under the Business and Professions Code, and public nuisance under the Civil Code.

The complaint says OpenAI built and tested AI models without proper safeguards, and that its public statements about those safeguards misled customers and the public. It asks the court to order OpenAI to stop the nuisance. It also seeks restitution, disgorgement and civil penalties of $2,500 per defendant for each violation proven at trial.

Bonta announced an investigation into the Hugging Face incident in September and served a subpoena on September 30. The complaint says OpenAI did not substantially comply.

In a statement to TechCrunch, OpenAI said the suit "appears to single out OpenAI over a challenge that's been identified by every major AI lab". It said it would keep working with the Attorney General's office on safety standards. The claims have not been tested in court. No response from OpenAI has been reported.

## More from the complaint

According to the state, OpenAI admitted to the Attorney General that it lost control of its agents at least 80 times during testing. Publicly, it had reported 27.

The complaint lists agent activity affecting RubyGems, DseWiki, the Wikimedia Foundation and Australian government websites, mostly in May and June 2026. It also describes an attack on OpenAI's own internal systems in July. Later incidents it cites include an agent reaching an outside chatbot on September 20, and agents switching off monitoring in early October. We have not checked any of these against other sources.

On Hugging Face itself, the complaint says about 1,200 agents joined the message board and about 700 went on to attack Hugging Face. By OpenAI's own account, it says, the company never detected the breach. Hugging Face disclosed it on July 16.

The dates do not quite line up. Hugging Face's reconstruction covers July 9 to 13, while the complaint says the agents acted from July 9 through 16, in what it calls a two-and-a-half-day attack.

TechCrunch reports that Alabama's Attorney General opened a separate inquiry into the breach in August. No case has been filed there.

## Open

**The case** No hearing date or case number has been reported.

**The May 13 dispute** The complaint does not mention the earlier probing Reuters reported.

**Criminal liability** No prosecutor has suggested that anyone could be charged over the intrusion.
