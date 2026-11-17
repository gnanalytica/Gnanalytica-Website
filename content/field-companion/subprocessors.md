# Field Companion: subprocessors

Version 1.0 · 17 November 2026

This page is about Field Companion only. It does not cover other products shown on gnanalytica.com.

## Who we are

Field Companion is provided by Gnanalytica, a sole proprietorship (eenmanszaak) registered in the Netherlands, KvK 98649035, Kneppelhoutstraat 7, 5615 KL Eindhoven, the Netherlands. Contact for privacy and security: sandeep@gnanalytica.com.

When your organisation uses Field Companion, your organisation decides what happens to the data its members record. Gnanalytica processes that data on your organisation's behalf (we are the "processor"). A subprocessor is another company that we use to run Field Companion and that handles your organisation's data for us.

## Before you read the list

Field Companion is not yet available to customers. Today it is in a **test phase**: only people we invite test it, in test organisations that we run ourselves, with sample data (made-up data). Even so, some real personal data goes to the companies below today: the names, WhatsApp numbers and profile names of the testers, and their own messages, voice and photos. For that data we are the controller, not your processor.

Organisations that we invite will use Field Companion in a **closed pilot**. The closed pilot runs only on our live set-up. The "Today" and "From launch" notes in the table show how each company is used in the test phase and from the start of the closed pilot.

Before a subprocessor receives your organisation's data, we sign a data processing agreement with it. That agreement puts the same data protection duties on it as our agreement with you (Article 28(4) GDPR). We stay fully responsible to you for its work. [OWNER: these agreements are not signed yet. Sign them before the closed pilot starts, and before this page is published.]

## The list

| Company | What it does for Field Companion | Data involved | Where the data is stored and processed | Safeguard for any access from outside the EU | Today / From launch |
| --- | --- | --- | --- | --- | --- |
| **Supabase, Inc.** (United States) | Database, file storage and backups | All content your members record (messages, photos, notes, transcripts, reports and so on) and account data | Amazon Web Services, Frankfurt, Germany. From launch, backups stay in the same region [to confirm]. Supabase support staff outside the EU may be able to access the data. | EU Standard Contractual Clauses in Supabase's data processing agreement [to confirm] | Today: testers' data and sample data. From launch: yes |
| **Fly.io, Inc.** (United States) | Runs our servers: the main server, background jobs and the voice assistant | All content your members record, while it is being processed and sent | Frankfurt, Germany, for every server. Content passes through while it is processed and is not stored on Fly.io [OWNER: confirm no volumes or logs with content] | EU Standard Contractual Clauses in Fly.io's data processing agreement [to confirm] | Today: testers' data and sample data. From launch: yes |
| **LiveKit, Inc.** (United States) | Carries the live sound of a walkthrough between the phone and our voice assistant | Live walkthrough audio while it is sent; room and participant details. Nothing is recorded. | LiveKit Cloud, EU data region (Frankfurt, Germany). [Owner: we cannot yet rule out that live audio passes through LiveKit servers outside the EU. Confirm and reword before publishing.] | EU Standard Contractual Clauses [to confirm] | Today: testers' walkthroughs. From launch: yes |
| **Deepgram, Inc.** (United States) | Turns speech into text, and text into speech | Walkthrough audio, WhatsApp voice notes, the resulting text, and the text of spoken replies; short words that help recognition (the assistant's name, site, area and checklist items, never member names) | Deepgram's EU service. We tell Deepgram on every request not to use the data to improve its models. [Owner: confirm how long Deepgram keeps request data.] | EU Standard Contractual Clauses [to confirm] | Today: testers' voice. From launch: yes |
| **OpenRouter, Inc.** (United States) | Sends requests to the AI models that understand messages, describe photos and draft reports | Prompts and AI answers, which include your members' content and photos | Today: OpenRouter's global service, which may process requests outside the EU, under standard settings. From launch: OpenRouter's EU service, with routing limited to Europe and zero data retention on every request (the request is not stored after the answer is sent). Account and billing details may be processed in the United States. | EU Standard Contractual Clauses or the EU-US Data Privacy Framework [to confirm] | Today: testers' data and sample data. From launch: EU service, zero data retention |
| **Anthropic** [OWNER: legal entity] (United States), through our own Anthropic account | Runs the AI language and vision models in the test phase | Prompts and AI answers | United States [OWNER: confirm] | [OWNER: from Anthropic's commercial terms] | Today: testers' data and sample data. From launch: [OWNER: yes or no] |
| **OpenAI** [OWNER: legal entity] (United States), reached through OpenRouter | Runs the search (embedding) model in the test phase | Text to be indexed for search | United States [OWNER: confirm] | Through OpenRouter's terms [to confirm] | Today: sample data. From launch: [OWNER: yes or no] |
| **{Provider legal entity}** ({country}), reached through OpenRouter [OWNER: one row per production provider and model] | Runs the {model} model for {understanding messages / describing photos / drafting reports / search} | Prompts and AI answers, only while a request is handled. A 5-minute cache holds only fixed instructions, never personal data. | {Region} | {Safeguard} | Today: {yes/no}. From launch: {yes/no} |
| **Meta**: Meta Platforms Ireland Limited or WhatsApp Ireland Limited [to confirm] | Runs the WhatsApp Business service that Field Companion uses to chat with your members. Your members talk to Field Companion in WhatsApp, so Meta carries and holds these chat messages for our WhatsApp business account. | Chat messages, documents, images, voice notes, phone numbers and the profile names of people who write | Hosted by Meta, which may process the messages outside the EU, including in the United States. [Owner: confirm where Meta stores the data for an EU business, and switch on EU storage if Meta offers it.] | Meta's WhatsApp business terms, which include EU Standard Contractual Clauses; Meta Platforms, Inc. is listed under the EU-US Data Privacy Framework [to confirm] | Today: test number, testers' messages. From launch: yes |
| **Functional Software, Inc.**, trading as Sentry (United States) | Error reports, so we can find and fix faults | Technical error details and internal ID numbers. It is set up so that no member content and no names are sent. | Sentry's EU data storage, Germany [to confirm] | EU Standard Contractual Clauses or the EU-US Data Privacy Framework [to confirm] | Today: [to confirm whether switched on]. From launch: yes |
| **Better Stack s.r.o.** (Czech Republic) | Keeps our application logs and sends alerts | Technical logs: ID numbers, pages and timings; no member content. Results of backup checks. | Germany | Not needed: EU company, EU region [confirm no support access from outside the EU] | Today: not used. From launch: yes (chosen, contract not yet signed) |
| **Hetzner Online GmbH** (Germany) | Keeps a second, encrypted copy of our backups | Encrypted copies of the database and files and, if enabled, an archive of technical logs (no member content). Hetzner cannot read them: we encrypt the data before it is sent. | Falkenstein, Germany | Not needed: EU company, EU location | Today: not used. From launch: yes (chosen, contract not yet signed) |
| **Langfuse GmbH** (Germany) | Records AI requests so we can find faults | Prompts, AI answers and tool steps, so members' content | Langfuse Cloud, EU region | Not needed: EU company, EU region | Today: yes, testers' data and sample data. From launch: not yet decided. [Owner: delete this row if Langfuse gets no keys in production. If kept, use a plan that deletes traces after 30 days, and sign its agreement.] |

### Not on this list

- **Gnanalytica Technologies LLP** (Bengaluru, India) shares the gnanalytica.com website but runs other products. It has no access to Field Companion systems or data. If that ever changes, we will treat it as a new subprocessor and give the notice described below.
- **PostHog** (product analytics) is set up but not used: Field Companion sends it nothing. We will add it to this list, with the notice described below, before we send it any data.
- Tools that never receive customer data, such as the service that holds our source code, are not subprocessors.

## How we tell you about changes

Your agreement with us allows us to use the subprocessors on this list. Before a new or replacement subprocessor receives your organisation's data, we will tell you **at least 30 days in advance**. We send the notice by email to your organisation's privacy contact, or, if we have no email address, in WhatsApp to your organisation's admins. We update this page on the same day.

If you have reasonable data protection grounds to object, tell us within that period at sandeep@gnanalytica.com. We will work with you to find a solution. If we cannot resolve your objection, you may end the affected service without penalty.

Questions about this list: sandeep@gnanalytica.com.
