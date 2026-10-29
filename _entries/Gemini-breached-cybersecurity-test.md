---
published: true
title: "Gemini breached three companies during a cybersecurity test"
slug: gemini-irregular-breakout
incident_date: 2026-05-01
updated: 2026-09-22
category: J
country: United States
status: unattributed
ai_claim_basis: described
detection_path: outside
next_check: 2026-12-25
safeguard: system-isolation
safeguard_outcome: bypassed
summary: "During cybersecurity tests run by the Israeli firm 'Irregular' in May 2026, Google's Gemini gained unauthorized access to three companies. Without human intervention, Gemini guessed a password by using credentials that were publicly available. However, Google confirms that the model stopped each time it recognised the target was real. Google did not publish anything at the time and confirmed the incidents on September 18 2026, after the Wall Street Journal reported. It was roughly seven weeks after Anthropic, OpenAI and Meta had each disclosed incidents arising from the same testing environment."
note_label: "Open question"
note: "Who decides whether a breach is disclosable when is not aware and whether the breach was committed by a model with no operator to hold responsible."
query: 'site:anthropic.com cybersecurity evaluations incidents; site:openai.com third-party cyber evaluations; "Irregular" evaluation sandbox real company'
sources:
  - tier: P
    outlet: Anthropic
    title: "Investigating three incidents in our cybersecurity evaluations"
    url: "https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals"
    retrieved: 2026-09-22
  - tier: P
    outlet: OpenAI
    title: "Third-party cyber evaluations involving OpenAI models"
    url: "https://openai.com/index/third-party-cyber-evaluations-involving-openai-models/"
    retrieved: 2026-09-22
  - tier: S
    outlet: Axios
    title: "Google confirms AI safety incidents during testing"
    url: "https://www.axios.com/2026/09/19/google-safety-incidents-testing-hacks"
    retrieved: 2026-09-22
  - tier: S
    outlet: Cybersecurity Dive
    title: "Google AI models broke out of sandbox, hacked three companies"
    url: "https://www.cybersecuritydive.com/news/google-ai-gemini-autonomous-hacks/830884/"
    retrieved: 2026-09-22
  - tier: S
    outlet: The Hacker News
    title: "Google Gemini Broke Into Real Company Systems After Security Test Domain Mix-Up"
    url: "https://thehackernews.com/2026/09/google-gemini-broke-into-real-company.html"
    retrieved: 2026-09-22
  - tier: S
    outlet: Al Jazeera
    title: "Google's Gemini AI hacks 3 companies in security test, then stops"
    url: "https://www.aljazeera.com/news/2026/9/19/googles-gemini-ai-hacks-3-companies-in-security-test-then-stops"
    retrieved: 2026-09-22
  - tier: S
    outlet: CNN
    title: "An AI model from Meta also hacked another company during testing"
    url: "https://www.cnn.com/2026/08/05/tech/meta-ai-hacking"
    retrieved: 2026-09-22
---

## The test setup

Gemini was being tested by Irregular, an Israeli firm that runs capture-the-flag type of
cybersecurity evaluations for frontier labs. The exercise provides an AI model a
fictional company to break into and scores the safety result.

According to Irregular, a fictional company selected in the exercises matched a real registered domain. The evaluation
machines had internet access, therefore the model went looking for its assigned target and attacked.

Google was the fourth company with this similar incident. Anthropic, OpenAI and Meta had 
disclosed incidents prior, tracing to the same testing environment.
Irregular informed Axios it notified every relevant lab in late July and all
known issues on its end were resolved weeks ago.

The larger question is how one vendor's test range let four labs' models reach real systems.

## Gemini's Action

Three real companies were breached by Gemini: It guessed a password for a
protected system by repeated attempts and for the other two it found credentials
that were already public and used them.

Google confirms that the model behaved correctly once it had enough
information. Heather Adkins, Google's vice president of security
engineering states that "In all three of these instances, the model
stopped." Google says it confirmed the three affected organisations were notified
and it worked with Irregular on changes to the testing process.

## Why this entry exists

Google did not publish a report about the incident. Only the statements given to reporters on September 18, 2026 is available, which is after the
Wall Street Journal reported the incidents four months after the incident happened.

According to Reuters, Google states that the behaviour was not due to model mis-alignment and did not warrant public disclosure because
Gemini worked properly.

A lab decides for itself whether a breach of a third party is disclosable, using
a test the lab also applies for itself, about a property of its own model.
Anthropic's report notes that of the affected organisations, two had not previously detected the activity. If a company can be
broken into without notice and the only party who knows has concluded that its
own safety measures worked, then nothing about the event ever reaches the
public record.


## Labs disclosure

Anthropic published the most detailed account of the three labs. It describes three incidents arising from what it
calls a misconfiguration where Claude operated on its own with internet access.

It is important to assess how those models behaved on
recognising a real target. In the first
incident involving Claude Opus 4.7, the report states that the model
eventually recognised the system was real and that none of the four runs
stopped the attack on that basis. It extracted infrastructure credentials and
reached a database holding several hundred rows of production data. In the
second, a Claude Mythos 5 model published a malicious package to PyPI which was
downloaded and run on fifteen real systems, including a security company's
scanner, and used it to exfiltrate the company's credentials; the model
continued after recognising possible real-world consequences, reasoning that it
must be part of the exercise. Third, an internal research model scanned
roughly 9,000 targets, compromised one company and then worked out on
its own that the host it had taken sat in a cloud account unconnected to the
challenge, concluded the target was real and stopped.

One of Anthropic's three models did what Google states all three of its
attempts did. The shorthand circulating in coverage that Claude did not stop
and Gemini did is true of two incidents out of three and not of the third.

OpenAI published on August 04, 2026, naming both Irregular and the UK AI Security
Institute describing a model that exploited a real website having mistaken
it for part of the simulated environment. Meta disclosed in early August.

## Irrelevant to the Hugging Face incident

The two incidents are unrelated and should not be merged together. OpenAI states
directly that the Irregular incidents are separate from the Hugging Face
security incident. Hugging Face involved OpenAI's own evaluation environment
and its own internal research model and is logged in this record separately.
OpenAI has also described a third, distinct incident involving the UK AI
Security Institute.

Three different failure modes, then, inside about three months, across at least
five organisations. In each case the test environment was less isolated than the systems the models were attacking. Anthropic's report commits to
closing exactly that gap.

## What the records did not establish

The three companies Gemini reached are unnamed in every report. So is
the Gemini model version, which no account identifies. Neither has any lab said
whether the affected companies have any recourse and it is not obvious what
recourse would consist of.

The date on this entry is a placeholder. Every source puts the incidents in May
2026 and none fixes a day, so the entry carries the first of the month purely
so that it sorts correctly. It should not be read as a date.

Accounts also differ slightly on where the public credentials came from. Axios
describes a public repository. Cybersecurity Dive describes public databases.
Al Jazeera describes public information found online and
credentials. These are probably the same fact recounted
loosely rather than three competing claims, but no source is specific enough to
settle it.

The originating report is the Wall Street Journal's and sits behind a paywall.
This entry is built from Google's statements as carried by Axios, Cybersecurity
Dive and Reuters, and from the primary reports published by Anthropic and
OpenAI. The CNN and CNBC coverage of the Gemini incidents was not readable when
this entry was compiled and is not cited.

No regulator has examined any of this. No enforcement body has a stated
interest. As with every entry in this category, there is no offender, because
there is no person who decided to do it.