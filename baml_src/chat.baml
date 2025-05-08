class Message {
  role "user" | "assistant"
  content string
}

function Chat(messages: Message[]) -> string {
  client "openai/gpt-4o-mini"
  prompt #"
    You are a helpful and knowledgeable AI assistant engaging in a conversation.
    Your responses should be:
    - Clear and concise
    - Accurate and informative
    - Natural and conversational in tone
    - Focused on addressing the user's needs

    {{ ctx.output_format }}

    {% for m in messages %}
    {{ _.role(m.role)}}
    {{m.content}}
    {% endfor %}
  "#
}

test TestName {
  functions [Chat]
  args {
    messages [
      {
        role "user"
        content "help me understand Chobani's success"
      }
    ]
  }
}
