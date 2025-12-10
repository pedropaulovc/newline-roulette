export interface ShortcutData {
  app: string;
  shortcut: string;
  notes: string;
  category: 'cli' | 'web' | 'chat' | 'dev';
}

export const shortcuts: ShortcutData[] = [
  {
    app: "Google Gemini CLI",
    shortcut: "Ctrl + J",
    notes: "Ctrl + Enter also works in some terminals; \\ + Enter is a reliable fallback.",
    category: 'cli'
  },
  {
    app: "Claude Code (CLI)",
    shortcut: "\\ + Enter",
    notes: "Alt + Enter works in VS Code terminal; Shift + Enter requires running /terminal-setup.",
    category: 'cli'
  },
  {
    app: "GitHub Copilot CLI",
    shortcut: "Shift + Enter",
    notes: "Requires a terminal that supports modern key protocols (e.g., Windows Terminal).",
    category: 'cli'
  },
  {
    app: "OpenAI Codex CLI",
    shortcut: "Ctrl + J",
    notes: "Alt + Enter is also a common alternative in this environment.",
    category: 'cli'
  },
  {
    app: "Google Gemini Web",
    shortcut: "Shift + Enter",
    notes: "Standard browser behavior.",
    category: 'web'
  },
  {
    app: "Claude.ai Web",
    shortcut: "Shift + Enter",
    notes: "Standard browser behavior.",
    category: 'web'
  },
  {
    app: "ChatGPT (Web)",
    shortcut: "Shift + Enter",
    notes: "Standard browser behavior.",
    category: 'web'
  },
  {
    app: "Microsoft Teams",
    shortcut: "Shift + Enter",
    notes: 'In "Expanded" rich-text mode, Enter creates a new line.',
    category: 'chat'
  },
  {
    app: "Slack",
    shortcut: "Shift + Enter",
    notes: "Configurable in preferences to make Enter create a new line.",
    category: 'chat'
  },
  {
    app: "Google Meet Chat",
    shortcut: "Shift + Enter",
    notes: "Enter sends the message immediately.",
    category: 'chat'
  },
  {
    app: "GitHub (Issues/PRs)",
    shortcut: "Enter",
    notes: "Ctrl + Enter is used to submit the comment.",
    category: 'dev'
  },
  {
    app: "VS Code Copilot Chat",
    shortcut: "Shift + Enter",
    notes: "Enter submits by default; configurable in keybindings.json.",
    category: 'dev'
  },
  {
    app: "Discord",
    shortcut: "Shift + Enter",
    notes: "Enter sends immediately. Can be changed in Settings > Text & Images.",
    category: 'chat'
  },
  {
    app: "Notion",
    shortcut: "Shift + Enter",
    notes: "Creates a line break within a block. Enter creates a new block.",
    category: 'dev'
  },
  {
    app: "Figma Comments",
    shortcut: "Shift + Enter",
    notes: "Enter submits the comment immediately.",
    category: 'dev'
  },
  {
    app: "Linear",
    shortcut: "Shift + Enter",
    notes: "Supports Markdown. Ctrl/Cmd + Enter submits.",
    category: 'dev'
  },
  {
    app: "Jira",
    shortcut: "Shift + Enter",
    notes: "In quick edit mode. Full editor mode uses Enter normally.",
    category: 'dev'
  },
  {
    app: "WhatsApp Web",
    shortcut: "Shift + Enter",
    notes: "Enter sends the message. No settings to change this.",
    category: 'chat'
  },
  {
    app: "Telegram Desktop",
    shortcut: "Shift + Enter",
    notes: "Configurable in settings to swap Enter/Ctrl+Enter behavior.",
    category: 'chat'
  },
  {
    app: "iMessage (macOS)",
    shortcut: "Option + Enter",
    notes: "Enter sends by default. Also works with Ctrl + Enter.",
    category: 'chat'
  },
  {
    app: "Gmail Compose",
    shortcut: "Enter",
    notes: "Regular Enter creates newline. Ctrl/Cmd + Enter sends.",
    category: 'web'
  },
  {
    app: "Outlook Web",
    shortcut: "Enter",
    notes: "Shift + Enter also works. Ctrl + Enter sends.",
    category: 'web'
  },
  {
    app: "Twitter/X DMs",
    shortcut: "Shift + Enter",
    notes: "Enter sends immediately in DMs.",
    category: 'chat'
  },
  {
    app: "LinkedIn Messages",
    shortcut: "Shift + Enter",
    notes: "Enter sends the message.",
    category: 'chat'
  },
  {
    app: "Obsidian",
    shortcut: "Enter",
    notes: "Normal text editing. Shift + Enter creates a soft line break.",
    category: 'dev'
  },
  {
    app: "Confluence",
    shortcut: "Shift + Enter",
    notes: "Enter creates new paragraph. Shift + Enter for line break.",
    category: 'dev'
  },
  {
    app: "Trello Comments",
    shortcut: "Shift + Enter",
    notes: "Enter submits the comment.",
    category: 'dev'
  },
  {
    app: "Asana Comments",
    shortcut: "Shift + Enter",
    notes: "Tab + Enter submits. Plain Enter also works for newline.",
    category: 'dev'
  },
  {
    app: "Facebook Messenger",
    shortcut: "Shift + Enter",
    notes: "Enter sends. Configurable in settings.",
    category: 'chat'
  },
  {
    app: "Zoom Chat",
    shortcut: "Shift + Enter",
    notes: "Enter sends immediately during meetings.",
    category: 'chat'
  }
];

export const allShortcuts = [
  "Ctrl + J",
  "\\ + Enter",
  "Shift + Enter",
  "Alt + Enter",
  "Enter",
  "Ctrl + Enter",
  "Option + Enter"
];

export const embarrassingMessages: Record<string, string[]> = {
  "cli": [
    "rm -rf / --no-preserve-root\n[SENT INCOMPLETE - CATASTROPHIC]",
    "sudo apt-get install hentai-wallpa\n[MESSAGE SENT TO WORK SLACK]",
    "git push --force origin ma\n[GOODBYE PRODUCTION]",
    "I think my boss is a complete idio\n[SENT TO #GENERAL]"
  ],
  "web": [
    "Hey, can you help me write an email to HR about my coworker's bad hygie\n[SENT]",
    "Write me a resignation letter because this company is a complete shi\n[SENT]",
    "I need help explaining to my mom why I spent $3000 on anime figuri\n[SENT]",
    "Help me write a Tinder bio that doesn't make me sound desperatel\n[SENT]"
  ],
  "chat": [
    "I think we should fire Sarah because she\n[SENT TO SARAH]",
    "OMG did you see what Karen wore toda\n[SENT TO KAREN]",
    "Meeting at 3? Perfect, that gives me time to job hunt becau\n[SENT TO BOSS]",
    "brb gotta pretend to be busy while I actually watc\n[SENT TO TEAM]"
  ],
  "dev": [
    "TODO: fix this hacky workaround before anyone sees this embarrassing co\n[COMMITTED TO MAIN]",
    "// whoever wrote this code should be fire\n[PUSHED TO PRODUCTION]",
    "Note to self: figure out what this function actually does before the cod\n[VISIBLE IN PR]",
    "FIXME: I have no idea why this works, don't touc\n[MERGED]"
  ]
};

export const successMessages = [
  "Crisis averted! Your multi-line message is safe.",
  "Phew! No embarrassing sends today.",
  "You've mastered the arcane art of newlines!",
  "Your keyboard-fu is strong.",
  "The shortcut gods smile upon you.",
  "Another catastrophe prevented!",
  "Your coworkers remain blissfully unaware.",
  "HR won't be calling you today!"
];

export function getRandomEmbarrassment(category: string): string {
  const messages = embarrassingMessages[category] || embarrassingMessages['chat'];
  return messages[Math.floor(Math.random() * messages.length)];
}

export function getRandomSuccess(): string {
  return successMessages[Math.floor(Math.random() * successMessages.length)];
}

export function getShuffledOptions(correct: string): string[] {
  const options = allShortcuts.filter(s => s !== correct);
  const shuffled = options.sort(() => Math.random() - 0.5).slice(0, 3);
  shuffled.push(correct);
  return shuffled.sort(() => Math.random() - 0.5);
}
