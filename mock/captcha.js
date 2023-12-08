export default [
  {
    url: '/api/captcha',
    method: 'get',
    response: () => {
      return {
        data: {
          key:"720e0d79-2363-4029-bdf9-38acc677b2d9",
          expired_at:"2022-04-05 06:45:52",
          image_content:"data:image\/jpeg;base64,\/9j\/4AAQSkZJRgABAQEAYABgAAD\/\/gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2OTApLCBxdWFsaXR5ID0gOTAK\/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU\/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU\/8AAEQgAKACWAwERAAIRAQMRAf\/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC\/\/EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29\/j5+v\/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC\/\/EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29\/j5+v\/aAAwDAQACEQMRAD8A+va90gKACgDn4\/HmjS+KZfDwuGGqR4zEyEA8BuD0PBFecsww7xDwvN766HKsVSdV0b+8dBXonUFACMwQZYhR6k0N23ASORZVDIwdT0KnIpJpq6BNPYdmmAUAFABQAUAVtR1Sz0e1a5v7uGyt1IBluJAignoMmsqtWnRjz1ZKK7t2InONNc03ZHMz\/FvwjbuobWoWVjjzIkd0U+hZQQPxrzJZxgYvWqvxa+9I43j8Mvtl62+Ifhe7laKLxBprOuODcoM5GeMnn8K3jmWDm7RrR+9GqxeHk7Ka+8zZPizoV1I1ro8smuakfljtLSN\/mbtlyNqj3J4rmeb4ab5MO+efRJP87WXqYvHUZPlpPml2X+ex0eg3Wo3mnLNqljHp12zHNtHMJti9ssAAT9K9LDzqzhzVo8su17\/iddKU5RvUjZ9r3NCug1CgAoAKAPBtX\/0P9o+yboJ9pP8A3wR\/7LXwFb3M+i+\/+R8xU93M15\/5HvNffn04y4EhgkERCy7TsJ6A9qUr2fLuJ3toeE+OvButw6LdXuu+O0F6kbSrp5l8qNsKSFVd4yScAcfnXwOPwWJjRlUxOK961+W9l6LXf5HzOJw9VQc61bXtt+pp\/BP4laHY+DoNM1TVYrO9glkAF0xUMpO4HceO5HXtXVkeZ4anhVRrVEpJvf79zbLsZSjRVOpKzV9zldV1uHxT8UdUNp4un0bR5IlmF3bzMqfLGuflyO4NeTVrxxeY1HDEOEGr3TdtEul0cU6ir4qXLV5Y90\/IpeKL9tAt1vNB8f6hrt3AwMiHzCqIeN24krjOBjPOawxVR4ePtMLi5Tkt99F67GdafslzUa7k16nZ3HiX4n67p2mXemwWOnW8tsknmmWEmYkdSJOR64Axz1Ne97bPMVThUw8Ek0nfTX79juliMdOMZRtFNd1r95y7\/FP4j6H4hurG5SO+uoFV5bNbZZUUFQd2YucEEH72Oe1eRLNc3w2IlSqK8lurJ9P7v+ZyfXsbTqOL1a6Wv+R2Pgrxt4h+IVxcafba1b2yxJunlOnmO5Rc4+X52TOeO9ezgcdisxk6UKqVt3y2kvTVo9DDYmti24Rml301\/Noh1l7HSPEf9m6daaj488SQjc39pz+bBa59uEU8+nGetZ13To1\/Y0oyr1V\/M7qP6L+tSajhTqckE6s13d0v0O18C6prd5NdWmteG4dGKoGWW3IMcvONuPUfWvcwFXETcqeIoqHmtmejhp1ZNxq0+X0N658KaJexJFcaPYTxJkqklqjBcnJwCOOST+NehLCYea5ZU4teiOp0KUlaUE\/kjSjjSFAiKEQcBVGAK6UklZGySWiHUwCgAoA5bXfib4c8PXj2Vxf+bfqdv2S1jaWXPphQcH64rysRmmEw0vZzneXZJt\/gcVXGUKUuSUtey1Zm\/wDCT+M9X\/0jSfDdvbWL8xNqs5jmYepjXlfoa5frWYVveoUUo9OZ2f3LYx9tiqmtOmkvN6\/ceS+MpvENn8XNIu723s21Z1jMVtC5EY5YBSx79efcV8hjZYqGZ051Eud2slt10ueFiHWjjIyklzduh63\/AG54\/T943hjTZEfkQpqGHT2YkYJ+lfYe3zRauhF+XNqvXoe97XGLX2a+8d\/YnjbW\/wB5d6\/b6DBJ8xtLC1WWRAf4TK3ceoFP2GY19Z1VTT6RV36Xf5oPZ4uprKaiuyV\/xJZPhjoNtpd401mmqahJExk1DUQJp3bH3ixHBHQYxgAVbyvDRpyco80mvilq\/v8A8ing6MYO6u+71Zxn7O9vban4N1OxvLeK5iS7LGOZAw+ZQOh\/3a8ThuMKuFnTqK6T6+a\/4B52UqM6MoSV9Th9d0ZdC+Ll5baRpFzqggUPHaxSkyA7R825gxOPfNeZUk8Lm8pU6XtWuju+m93dnkVsOoYp06MXp0T1\/Ul13VLm81fTrHxfbanoOhFw5icmXzCOxOFCj6An2710Y\/MamKnChjqXsaV72S39WJwaqRWKclHzd\/8AL8j27R7Twfd4isDp9wQARGsgdgO3BOQMdPbpxX3dLH0pRUKVRWS2TW3Q+hhhsv1aUf69TzjTNPVPj1rUWmzfYQlshRoUDgfukyNp696+SoYmDz2rVl76aW2vRdjxVyRxUvqsrLpyrm6a6f1956Rrlxr2i6PfXpvLKRbaB5N5gYOcAnGM4r7PEVqNGjOryu6TZ7VT67Tg5c8Wl5O\/5njPgTWdYt9HP9gJNqmu6k73V4IkUeWN7Ku+QngnBIA9fevg8pxzw+H\/AHFH2tabcm+iV7K\/5ng0frDj+4k+aWrsl36t\/kdz4C8T3uv6pd6Pf3Wo6Nr9sN5hnkWWN19QCo9Rx+tfTZfnP1qpLD4iioVF07nfhVVqTdN1ZRmu7TX3WO9j1LV7eRY7rS1mXIBntZgR9drYNe84Umrxl956ka+Kg1GrSv5xf6PU2q5j0woAKAMjxN4XtPFllHaXslwkKSCTFtMYyxwRgkdRz0rjxWFp4uChUbte+jsYVqMa8eWd7eWhLoXhvTPDNmltptnHaxqMEqMs3uzHlj7k1eHw1HCx5KMbL+t31HSo06MeWmrGlXSbHgvxrWbTfiRoGqi2mmt7cxySGJCeFcEj8s18BnnNSx9KvZtKz08mfMZjeGJhUtojrU\/aG8KFf3n22Jx1VoO\/51664jwXW6+R3LNsP1v9xd8O\/GjRfEeqG2SOaxtwhYXd7iNHbI+Uc9ea3w2d4fE1ORJxXd6L0NaOY0q0+VaLuyfxj8WPDmg6Zcquow3120bLHb2rCRixGBnHA\/GtMbm+Ew9N2mpS7LUrEY6hSg\/eu+yMf4AeHrzR\/DV5d3sLW738wlSNxg7RnBx75ri4ew1Sjh5VKitzO5z5XSlTpOUlbmZk6F8\/7ReqH+7av\/JRXJh9c9n6P9DCl\/yMpeh6B8RfCkHjTwzdaa67rjHmQOBykg6HPYdq9zNMPDGUHQteXTyf6fr0O3HKFaDopXl0t09Xsvnv0uzA+GGgajceFE07xTpvzWrFIDPgnZ7Y5H1rz8swdSph\/Z4+F+Xa\/Y5cJg3VhbFxvbZPb+vU5XQml0j47675aXGorFbrvZn3ShdiZOMfNj0HJ7ZNedh+ajnNWycrL57L7\/zMaV6ePna70+ey+89M8VTw6\/4G1n7FIJt1rKuACGVguSrKeVYdCpAIPBFfUYuUcRg6ns3fR\/ls+z8nqezXaq0J8nZnIfs6rZx+BGMRT7U1zIbjn5sjAXPtjH6143DaprB+7vd3ODKeX6vpvfUzft8Ou\/tCwS6a4mitLPyriWPldwDZ5\/4EB+Fc3tI4jPFKjqoxs39\/\/DGPOquYp0+i1PZa+0PoAoAKACgAoAKACgBHRZFKuoZT2YZFDSejDcqNo1g7BmsrdiO5iX\/CsXRpPVxX3Eezh2MnxX4C0fxna29vqUDGK3bfGsTbMHp2rkxeX0MbFQrLRbW0OevhaWISjNbEWgfDLwz4acSWOkQLMORLMPNcH1BbJH4VGHyvB4V3p01fu9X+IqWDoUdYR\/U6Vy4A2BT\/ALxxiu+o6it7NL5v\/gGtV1Vb2ST9Xb9P68yoNJhN6btooRdFdpmSICTHpu64rl+rSlPnm1fyVn6X1f69mjl+rVZy5qk\/\/AVZ+l9Xb8ezRbSNYxhQB\/WuuFOFNWirf117nZTpQoq0Fb9fV7t+b1HVoanMWPgG00\/xve+JYrmY3N3HskhfBQcAZXjI6d815dPL4U8XLGKTvJarocccLGFd109WaeoeG7HUZjcMjQXZGBc27lJB+I6j2OQe4I4rqqYanUfNa0u60f8AXrp3Np0YTd9n3POr39nXSJbhntNUv7OKRlaSHIZWGeR268\/Qn04r5upw3Qcr06kknujyZZTSbvGTR3fhTwPo\/gu2aLS7UQl\/vysdzv8AU17+EwGHwUeWjG3n1PToYalh1amjervOkKACgAoA\/9k="
        }
      }
    }
  }
]
