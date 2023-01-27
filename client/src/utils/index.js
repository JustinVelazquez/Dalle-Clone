import { surpriseMePrompts } from '../constants';


// Function that generates a random prompt from our constants. Performs a check to ensure they dont repeat
export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);
  return randomPrompt
}
