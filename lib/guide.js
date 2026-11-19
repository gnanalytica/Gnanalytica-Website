/**
 * Content for the Field Companion guide page (pages/field-companion/guide.js).
 *
 * Each step has an id (its anchor), a title, a short explanation and a mock
 * chat: a list of messages that components/guide/ChatMock.js draws as chat
 * bubbles. The chats are illustrative mock-ups written in HTML and CSS, not
 * screenshots. Message fields:
 *   from     'user' (the person, right) or 'bot' (the assistant, left)
 *   text     the message; *word* is shown in bold, as in WhatsApp
 *   buttons  reply buttons under a bot message (labels only)
 *   link     a link button under a bot message (label only; the mock does not open it)
 *   doc      a document bubble { name, meta }
 * The assistant is called Iris here. An organisation can pick another name;
 * the admin section says how.
 *
 * The welcome text and button labels follow the welcome that people receive
 * after JOIN, so keep them in step with apps/server conversation/texts.ts in
 * the Field Companion repository.
 */

export const GUIDE_VIDEO = {
  title: 'See it in three minutes',
  src: '/field-companion/field-companion-demo.mp4',
  poster: '/field-companion/field-companion-demo-poster.jpg',
};

export const STEPS = [
  {
    id: 'join',
    title: 'Join',
    body: 'Your admin sends you an invite link, or adds your number. Send JOIN with the code from the invite to the Field Companion number. The assistant introduces itself, tells you it is an AI, and shows three buttons so you can try it out right away.',
    chat: [
      { from: 'user', text: 'JOIN 7KQ2M9' },
      {
        from: 'bot',
        text: "Hello, I'm Iris, Field Companion's AI assistant for site visits. I am an AI, not a person: check what matters. Send *help* any time.",
      },
      {
        from: 'bot',
        text: 'Welcome to *Rijnstad Inspections*. Tell me a site and what to check, and I\'ll draft the checklist and send you a walkthrough link. On site, say "Iris, look at this" or tap *Look*. Your report arrives here when you submit, and you can ask me about past visits at any time.',
        buttons: ['Try a practice visit', 'What can you do?', 'Watch 3-min video'],
      },
    ],
  },
  {
    id: 'brief',
    title: 'Brief a visit',
    body: 'Tell the assistant the site and what to check, in your own words. It drafts a checklist for you to confirm or change, then sends a walkthrough link. Short on time? Just say start and the site, and it sets up the visit straight away.',
    chat: [
      { from: 'user', text: 'Kerkstraat 12, check the roof and gutters' },
      {
        from: 'bot',
        text: 'Visit at *Kerkstraat 12*. Checklist:\n1. Roof covering: slipped or broken tiles\n2. Roof edges and flashing\n3. Gutters: blockages and leaks\n4. Downpipes and joints',
        buttons: ['Confirm', 'Edit', 'Cancel'],
      },
      { from: 'user', text: 'Confirm' },
      { from: 'bot', text: 'Who will do the walkthrough?', buttons: ['Me', 'Someone else'] },
      { from: 'user', text: 'Me' },
      {
        from: 'bot',
        text: 'Your walkthrough is ready. Open it and allow the camera and microphone.\n\nTip: on site, say "Iris, look at this" or tap *Look*, and I\'ll tell you what the camera sees.',
        link: 'Open walkthrough',
      },
    ],
    aside: [
      { from: 'user', text: 'start Kerkstraat 12' },
      { from: 'bot', text: 'Done. The visit at *Kerkstraat 12* is ready: add what you find on the walk.', link: 'Open walkthrough' },
    ],
    asideTitle: 'Or skip the brief',
  },
  {
    id: 'on-site',
    title: 'On site',
    body: 'Open the link on your phone. Take photos, and say what you find out loud: it is written down and filed against the checklist. To ask what the camera sees, say the assistant’s name, "Iris, look at this", or tap the Look button.',
    phone: {
      captions: [
        { who: 'You say', text: 'Iris, look at this' },
        { who: 'You say', text: 'A crack about 2 mm wide above the door frame' },
      ],
      reply: 'Hairline crack above the door frame, running diagonally. Noted as a finding, with the photo.',
    },
  },
  {
    id: 'report',
    title: 'The report',
    body: 'Tap Finish, then Submit report. The report arrives in the same chat as a PDF, usually within a minute.',
    chat: [
      {
        from: 'bot',
        text: 'Your report for *Kerkstraat 12* is ready.',
        doc: { name: 'Kerkstraat-12-report.pdf', meta: 'PDF · 1.2 MB' },
      },
      {
        from: 'bot',
        text: 'Tip: you can hand this report\'s open items to a colleague ("hand these to Daan") or ask me about it ("what was found at Kerkstraat 12?").',
      },
    ],
  },
  {
    id: 'ask',
    title: 'Ask and hand off',
    body: 'Ask about any site: what is still open, what was found before, how something changed. Hand an item or a whole visit to a colleague; they get their own walkthrough link, and nothing is sent until you confirm.',
    chat: [
      { from: 'user', text: "What's open at Kerkstraat 12?" },
      {
        from: 'bot',
        text: 'Two open items at *Kerkstraat 12*:\n• Gutter, north side: leaking joint\n• Roof edge: loose flashing',
      },
      { from: 'user', text: 'Send the gutter items to Daan' },
      {
        from: 'bot',
        text: 'I will send the gutter item to *Daan* with a walkthrough link.',
        buttons: ['Confirm', 'Cancel'],
      },
    ],
  },
  {
    id: 'practice',
    title: 'Practice visit',
    body: 'New here? Tap Try a practice visit in the welcome. It is a two-minute tour at a demo site: a three-item checklist, a real walkthrough link where you take a photo and say one finding, and a sample report clearly marked PRACTICE. Nothing from it counts in your organisation’s reports or figures, and it is deleted after 7 days.',
    chat: [
      { from: 'user', text: 'Try a practice visit' },
      {
        from: 'bot',
        text: "Let's do a 2-minute practice visit at a demo site. It stays out of your organisation's reports and figures, and is deleted after 7 days.\n\nThe checklist:\n1. Take a photo of anything around you\n2. Say one finding out loud\n3. Say \"Iris, look at this\" or tap *Look*",
        link: 'Open walkthrough',
      },
    ],
  },
];

export const ADMIN = {
  invite: {
    title: 'Invite people',
    body: 'Send these to the Field Companion number from your own phone. Nobody needs an account or an app.',
    commands: [
      { cmd: 'add Daan +31 6 12345678 as inspector', does: 'Adds a person by name and number, as inspector or admin.' },
      { cmd: 'add person', does: 'Then share a contact card from your phone.' },
      { cmd: 'invite link', does: 'Gives you a link to forward. They tap it and send JOIN.' },
      { cmd: 'invites', does: 'Shows who has been invited and has not joined yet.' },
      { cmd: 'make Daan admin', does: 'Changes someone’s role.' },
      { cmd: 'remove Daan', does: 'Removes someone from the organisation.' },
    ],
  },
  name: {
    title: 'Name your assistant',
    body: 'The assistant is called Iris unless you choose another name. In the Field Companion web app, open Settings and enter a name of 2 to 20 letters. It is the word people say to start a look, for example “Iris, look at this”, so pick something short that is easy to say on site.',
  },
  roles: {
    title: 'Roles',
    rows: [
      ['Admin', 'Manages people, settings, templates and the glossary. Can do everything an inspector can.'],
      ['Inspector', 'Briefs and walks visits, and sees the organisation’s sites and their history.'],
      ['Guest', 'Works only on the visits and items handed to them. Cannot start new visits, and does not take a seat.'],
    ],
    note: 'Templates and the glossary are edited in the web app.',
  },
};
