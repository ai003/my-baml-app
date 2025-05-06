class Story {
  title string @stream.not_null
  content string @stream.not_null
}

function WriteMeAStory(input: string) -> Story {
  client "openai/gpt-4o"
  prompt #"
    Tell me a short story

    {{ ctx.output_format() }}

    {{ _.role("user") }}

    Topic: {{input}}
  "#
}

//test the writemeastory function
test test_write_me_a_story {
  functions [WriteMeAStory]
  args {
    input #"

        A cat and a dog become friends

        A bird learns to fly
    "#
  }
}
