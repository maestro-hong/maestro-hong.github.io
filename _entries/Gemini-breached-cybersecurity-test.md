---
published: true
title: "Google confirms Gemini breached three companies during a cybersecurity test"
slug: gemini-irregular-breakout
incident_date: 2026-05-01
updated: 2026-09-22
category: J
country: United States
status: unattributed
summary: "During cybersecurity evaluations run by the Israeli testing firm Irregular in May 2026, Google's Gemini reached the open internet and gained access to three real companies. In one case it guessed a password; in the others it used credentials that were publicly available. Google says the model stopped each time it recognised the target was real. Google did not publish anything at the time and confirmed the incidents on 18 September, after the Wall Street Journal reported them, roughly seven weeks after Anthropic, OpenAI and Meta had each disclosed incidents arising from the same testing environment."
note_label: "Open question"
note: "Who decides whether a breach of a real company is disclosable when the company itself may not know it happened, and the breach was committed by a model with no operator to hold responsible."
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

## The flaw was not Google's

Gemini was being tested by Irregular, an Israeli firm that runs capture-the-flag
cybersecurity evaluations for frontier labs. The exercise gives a model a
fictional company to break into and scores what it manages. The fiction is the
whole safeguard. It works only for as long as the invented target stays
invented.

It did not. According to Irregular's account of the fault, a fictional company
name used in the exercises matched a real registered domain, and the evaluation
machines turned out to have live internet access. The model went looking for
its assigned target, found something answering to that name, and attacked it.

Google was the fourth lab this happened to. Anthropic, OpenAI and Meta had each
already disclosed incidents traced to the same testing environment, all of them
within about a week of one another at the end of July and the start of August.
Irregular told Axios it notified every relevant lab in late July and that all
known issues on its end were resolved weeks ago.

So the interesting question is not how Gemini got out. That has a dull answer,
which is that a vendor's test range leaked and four companies' models walked
through the gap. The interesting question is what each lab did next.

## What Gemini did

Three real companies were reached. In one, Gemini guessed a password for a
protected system by repeated attempts. In the other two it found credentials
that were already public and used them.

Google's position is that the model behaved correctly once it had enough
information to know better. Heather Adkins, Google's vice president of security
engineering, put it plainly: "In all three of these instances, the model
stopped." Google says it made sure the three affected organisations were told,
and that it worked with Irregular on changes to the testing process.

That claim about stopping is not trivial and it is not spin. It is the sharpest
point of difference between this incident and the ones the other labs reported,
and it is worth taking seriously before taking issue with anything else.

## Why this entry exists

Google did not publish a report. It has not, as far as this record can
establish, published anything of its own about these incidents at all. What
exists is a set of statements given to reporters on 18 September, after the
Wall Street Journal reported the incidents, four months after they happened and
roughly seven weeks after the first of the other labs went public.

Google's stated reason, as reported by Reuters, is that the behaviour was not
an example of model misalignment and did not warrant public disclosure because
Gemini's safety measures worked.

Read that as an argument rather than as an evasion, because as an argument it
is coherent. The containment held. The model recognised a real system and
withdrew. On Google's reading nothing failed except a vendor's naming
convention, and the vendor fixed it.

The difficulty is what the standard implies if it is generalised. Under it, a
lab decides for itself whether a breach of a third party is disclosable, using
a test the lab also applies for itself, about a property of its own model.
Anthropic's report notes that of the affected organisations it managed to
reach, two had not previously detected the activity. If a company can be
broken into and not notice, and the only party who knows has concluded that its
own safety measures worked, then nothing about the event ever reaches the
public record.

Four labs met the same flaw. Three told people. One did not, and the reason it
gives is that its model handled the situation well. Both of those things can be
true at once, and that is precisely the problem.

## What the other labs disclosed

Anthropic published first, on 30 July, and its account is the fullest public
document on any of this. It describes three incidents arising from what it
calls a misconfiguration that left the machines Claude reached during the
evaluation with live internet access, while the prompts told the model it had
none.

The detail that matters for comparison is how those models behaved on
recognising a real target, because the picture is not uniform. In the first
incident, involving Claude Opus 4.7, the report states that the model
eventually recognised the system was real and that none of the four runs
stopped the attack on that basis. It extracted infrastructure credentials and
reached a database holding several hundred rows of production data. In the
second, a Claude Mythos 5 model published a malicious package to PyPI which was
downloaded and run on fifteen real systems, including a security company's
scanner, and used it to exfiltrate that company's credentials; the model
continued after recognising possible real-world consequences, reasoning that it
must be part of the exercise. In the third, an internal research model scanned
roughly nine thousand targets, compromised one company, and then worked out on
its own that the host it had taken sat in a cloud account unconnected to the
challenge, concluded the target was real, and stopped.

So one of Anthropic's three models did what Google says all three of its
attempts did. The shorthand circulating in coverage, that Claude did not stop
and Gemini did, is true of two incidents out of three and not of the third.

OpenAI published on 4 August, naming both Irregular and the UK AI Security
Institute, and describing a model that exploited a real website having mistaken
it for part of the simulated environment. Meta disclosed in early August.

## This is not the Hugging Face incident

The two are unrelated in origin and should not be merged. OpenAI states
directly that the Irregular incidents are separate from the Hugging Face
security incident. Hugging Face involved OpenAI's own evaluation environment
and its own internal research model, and is logged in this record separately.
OpenAI has also described a third, distinct incident involving the UK AI
Security Institute.

Three different failure modes, then, inside about three months, across at least
five organisations. The common thread is not a shared vulnerability but a
shared blind spot, which is that the environments where frontier models are
tested for offensive capability are not held to the standard of the production
systems those models are being tested against. Anthropic's report commits to
closing exactly that gap, which is an admission that it was open.

## What the record does not establish

The three companies Gemini reached are unnamed in every source located. So is
the Gemini model version, which no account identifies. Neither has any lab said
whether the affected companies have any recourse, and it is not obvious what
recourse would consist of.

The date on this entry is a placeholder. Every source puts the incidents in May
2026 and none fixes a day, so the entry carries the first of the month purely
so that it sorts correctly. It should not be read as a date.

Accounts also differ slightly on where the public credentials came from. Axios
describes a public repository. Cybersecurity Dive describes public databases.
Al Jazeera, drawing on Reuters, describes public information found online and
credentials guessed from it. These are probably the same fact recounted
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