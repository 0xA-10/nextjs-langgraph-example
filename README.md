# nextjs-langgraph-example

A simplistic implementation of Next.js + assistant-ui + LangGraph message streaming.

The workflow is not meant to do anything, it's only meant to demonstrate the technology.

The assistant streams a response from the LangGraph workflow. The first node makes a streaming call to OpenAI. The second node waits 3 seconds then appends a greeting to the response.


https://github.com/user-attachments/assets/6c81f06e-0c4e-472b-9991-326343789ec7


# relevant files

Chat route →
[route.ts](app/api/chat/route.ts)

LangGraph workflow →
[weatherHello.ts](workflows/weatherHello.ts)

# usage

1. clone the repo
1. create `.env.local` with `OPENAI_API_KEY` var (see `.env.local.template`)
1. install deps `> pnpm i`
1. run dev `> npm run dev`
