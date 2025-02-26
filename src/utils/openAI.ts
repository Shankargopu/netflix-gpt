import OpenAI from "openai";
import { OPEN_AI_GPT_KEY } from "./constants";

const openai = new OpenAI({
  apiKey: OPEN_AI_GPT_KEY,
  dangerouslyAllowBrowser: true,
  organization: "org-yLGBu2URK3BM78TFcNTUM4yj",
});

// async function main(){
//   await openai.chat.completions.create({
//     messages : [{role : 'user', content : 'test'}],
//     model : 'gpt-3.5-turbo',

//   })
// }

export default openai;
