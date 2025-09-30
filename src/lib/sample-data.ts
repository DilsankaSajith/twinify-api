export const sampleData = [
  {
    type: 'plagarism',
    text1: 'Climate change is accelerating due to human activities',
    text2: 'Human actions are speeding up climate change',
  },
  {
    type: 'bug_report',
    text1: 'App crashes when clicking the save button on profile page',
    text2: 'Saving profile information causes the app to crash',
  },
  {
    type: 'virtual_assist',
    text1: 'Turn on the living room lights',
    text2: 'Switch on the lights in my lounge',
  },
  {
    type: 'not_relevant',
    text1: 'The stock market closed higher today after tech gains',
    text2: 'I love baking chocolate cakes on weekends',
  },
  {
    type: 'maybe_relevant',
    text1: 'I’m learning Java programming this semester',
    text2: 'Next year I plan to study Python and web development',
  },
] as const;
