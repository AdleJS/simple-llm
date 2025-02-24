import { ChatOllama } from "@langchain/ollama";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const llm = new ChatOllama({
    model: "deepseek-r1:1.5b",
});

const prompt = ChatPromptTemplate.fromMessages([
    ["system", "You are a helpful assistant that translates message from English to {language}."],
    ["human", "{text}"],
])

const promptValue = await prompt.invoke({
    language: "Kazakh",
    text: "I love programming",
});

const result = await llm.invoke(promptValue);

console.log(result.content);