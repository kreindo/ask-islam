import { openai } from "@ai-sdk/openai";
import { google } from "@ai-sdk/google";

import { fireworks } from "@ai-sdk/fireworks";
import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from "ai";

export const DEFAULT_CHAT_MODEL: string = "islamic-knowledge";

export const myProvider = customProvider({
  languageModels: {
    // 'chat-model-small': openai('gpt-4o-mini'),
    // 'chat-model-large': openai('gpt-4o'),
    // 'chat-model-reasoning': wrapLanguageModel({
    //   model: fireworks('accounts/fireworks/models/deepseek-r1'),
    //   middleware: extractReasoningMiddleware({ tagName: 'think' }),
    // }),
    // 'islamic-knowledge': openai('gpt-4o-mini'),
    // 'title-model': openai('gpt-4o-mini'),
    // 'artifact-model': openai('gpt-4o-mini'),
    "islamic-knowledge": google("gemini-1.5-flash") as any, // Note: using gemini-1.5-flash (official model name)
    "title-model": google("gemini-1.5-flash") as any,
    "artifact-model": google("gemini-1.5-flash") as any,
  },
  imageModels: {
    "small-model": openai.image("dall-e-2"),
    "large-model": openai.image("dall-e-3"),
  },
});

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: "islamic-knowledge",
    name: "Ask Islam",
    description:
      "Islamic knowledge assistant for Quran, Hadith, and Islamic teachings",
  },
  // {
  //   id: 'chat-model-small',
  //   name: 'Small model',
  //   description: 'Small model for fast, lightweight tasks',
  // },
  // {
  //   id: 'chat-model-large',
  //   name: 'Large model',
  //   description: 'Large model for complex, multi-step tasks',
  // },
  // {
  //   id: 'chat-model-reasoning',
  //   name: 'Reasoning model',
  //   description: 'Uses advanced reasoning',
  // },
];
