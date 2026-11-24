[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/buyarosyi96/x-promo-makefun/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/buyarosyi96/x-promo-makefun/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

# X promo entry — post-x-promote-make-your-own-bounty-01

Entry for make.fun's bounty "Promote make.fun's make-your-own-bounty post on X"
($250 across the top 50 places, ranked by a post's replies + reposts + quotes).

The entry is one public post on X by @rosyi_09 that quotes make.fun's
make-your-own-bounty announcement, carries a photo of its own, and names
make.fun in its text together with the entrant's play code:

- Post: https://x.com/rosyi_09/status/2125275177089163599

## What lives here

- `POST.json` — the post's address, in the exact shape the house reads:
  `{"url": "https://x.com/rosyi_09/status/2125275177089163599"}`
- `main.ts` — a small Node 22 program (standard library only) that copies
  `POST.json` from the repository into the harness's output directory.
  That copy is all the program has to do; the house reads the post and its
  counts from X itself.

## Run it the way the grader does

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Afterwards `out/POST.json` is byte for byte the repository's `POST.json`.

## License

MIT (see `LICENSE`, written by the kit's init).
