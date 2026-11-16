---
published: true
title: "Prosecutors say a Sydney man used ChatGPT to write code that pulled thousands of restricted court documents"
slug: sydney-chatgpt-court-registry-scraping
incident_date: 2026-09-10
updated: 2026-11-16
category: F
country: Australia
status: charged
ai_claim_basis: described
detection_path: unknown
next_check: 2026-12-16
safeguard: account-security
safeguard_outcome: bypassed
summary: "New South Wales police say about 9,000 restricted files were downloaded from the state's online court registry in early 2025. In September 2026 a police prosecutor told a Sydney court that the accused used ChatGPT to write scripts that downloaded them in bulk, and later asked it for legal advice. He has pleaded not guilty to four counts of accessing restricted data."
note_label: "Mechanism"
note: "The charges are about the access, not the AI. The prosecution wants the ChatGPT conversations as evidence of how it was done and of what he knew."
query: 'Online Registry NSW data breach ChatGPT scraper Maldigri Downing Centre Local Court restricted data not guilty'
sources:
  - tier: S
    outlet: ABC News (Australia)
    title: "Prosecutors allege man used AI to 'scrape' court website, then asked ChatGPT for legal help"
    url: "https://www.abc.net.au/news/2026-09-10/christopher-duff-to-stand-trial-over-nsw-ai-court-data-breach/107135032"
    retrieved: 2026-11-16
  - tier: S
    outlet: Information Age (Australian Computer Society)
    title: "Sydney man allegedly used ChatGPT in court data breach"
    url: "https://ia.acs.org.au/article/2026/sydney-man-allegedly-used-chatgpt-in-court-data-breach.html"
    retrieved: 2026-11-16
  - tier: S
    outlet: ABC News (Australia)
    title: "Man granted bail over NSW court website hit by major data breach"
    url: "https://www.abc.net.au/news/2025-04-23/sydney-man-charged-department-community-and-justice-data-breach/105207852"
    retrieved: 2026-11-16
  - tier: S
    outlet: iTnews
    title: "Man charged in connection with court document data breach"
    url: "https://www.itnews.com.au/news/man-charged-in-connection-with-court-document-data-breach-616746"
    retrieved: 2026-11-16
  - tier: S
    outlet: iTnews
    title: "Thousands of NSW court documents downloaded in 'major data breach'"
    url: "https://www.itnews.com.au/news/thousands-of-nsw-court-documents-downloaded-in-major-data-breach-615999"
    retrieved: 2026-11-16
  - tier: S
    outlet: Cyber Daily
    title: "NSW Police investigating significant Department of Communities and Justice data breach"
    url: "https://www.cyberdaily.au/security/11904-nsw-police-investigating-significant-department-of-communities-and-justice-data-breach"
    retrieved: 2026-11-16
---

## What happened

On March 25, 2025, New South Wales police learned that a large number of files had been taken from the state's Online Registry. The registry is the website the Department of Communities and Justice runs for filings in the Supreme, District and Local Courts. The site went offline.

Police said about 9,000 sensitive court files had been downloaded, including apprehended violence orders and affidavits. The department said at the time that no data had been made public. Reports do not say how the breach was first noticed or who noticed it.

On April 23, 2025, detectives searched a home in Sydney's east, seized two laptops and arrested a man. He was granted bail at his first court appearance. The conditions included handing in his passport and carrying only a basic phone that could make calls and send texts.

By then police had said the files were accessed between late January and late March 2025.

## The hearing

In September 2026 the case came before the Downing Centre Local Court in Sydney. He pleaded not guilty to four counts of accessing restricted data.

A hearing booked for three days stalled when the court was told how much material there was. The defence estimated 10,000 or more pages of proposed exhibits. The case was adjourned for two weeks, and reports at the time said a longer hearing might be set. No later date has been reported.

## The AI claim

The claim comes from the police prosecutor, Sergeant Andrew Maldigri, speaking in court. ABC News and Information Age both reported it.

Maldigri said the man used ChatGPT to write scripts in Python that downloaded documents in bulk. He described a scraper as code that lets a user get around the normal way of moving through a website. That, the prosecution says, is how the files came out of the registry.

Maldigri said the man's login to the registry was later shut down. After that, the prosecution alleges, he asked ChatGPT what police would be doing and what to say if they approached him. He later declined to answer questions in a police interview.

The prosecution intends to rely on the ChatGPT conversations, together with expert evidence on the forensics. Maldigri said this could be the first use of generative AI evidence of this kind in an Australian court. ABC described the case as believed to be one of the first of its kind in Australia.

None of the reports says how police obtained the conversations. They do not say which version of ChatGPT was used, or whether the scripts have been shown in court.

## What the defence says

The defence barrister, Daniel McMahon, said the queries, if his client made them, read more like a realisation after the event. He pointed to questions such as whether it was even a crime yet and what had been done without authority.

McMahon told the court the offence requires proof that the accused actually knew the access was unauthorised. Recklessness, he said, is not enough. In general terms, he said, his client might not dispute some of the conduct alleged. The court heard that the man was helping a friend with complicated bankruptcy proceedings.

## The numbers

The reports disagree on how many documents were taken. Police first said about 9,000. iTnews quoted police at the April 2025 charge as saying 8,769 restricted documents. ABC's 2025 report gave 8,789 and its 2026 report gave 8,769.

Reports of the original charge also mention a separate count of using a carriage service to menace, harass or offend, as quoted by iTnews. The 2026 reports describe only four counts of accessing restricted data. We do not know whether the earlier count was withdrawn or never carried over.

## A note on naming

News outlets have named the accused. Unio Analytics has not found a NSW Police release or a court document that names him, so it does not.

## Open

**The hearing** No outcome or later date has been reported since the September adjournment.

**The charge** The reports describe the offence as accessing restricted data held in a computer. They do not name the statute or section, and we have not confirmed it ourselves. We have left out a penalty for that reason.

**The documents** Accounts differ on what was in them. Police and early reports mention apprehended violence orders and affidavits. Information Age also mentions details of minors, attributing that to officials.

**The scripts** Whether the prosecution has put the code itself in evidence is not reported.

**Detection** No report says who found the breach or how.

**Sources** Everything here comes from news reports of the hearing. We have not seen a NSW Police release, a charge document or a transcript.