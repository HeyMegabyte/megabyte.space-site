https://megabyte-labs.slack.com/
https://gitter.im/megabyte-labs/community

We are developing a cross-platform, config-driven eco-system for defining home labs. Megabyte Labs aims to combine all of the best, well-received GitHub projects (that have lots of stars) into a network-installer that can either be run with minimal configuration or entirely automated.

Megabyte Labs designs tools for anything we wish already existed. Sometimes those tools end up maturing into web applications. Below, you can find a short list of web applications that we have designed. It is not a comprehensive list.
Although we do not host public repositories with the source to our applications, feel free to reach out if you are interested in borrowing some of the code.

GV: 860-8SW-ANKY
Make it so service worker caches either png or webp based on browser
WEB
help@megabyte.space


<webp-image(([^>]|\n)*)src..(([^"])*)"(([^>]|\n)*)> | <picture><source srcset="$3" type="image/webp"><source srcset="$3" type="image/png"><webp-image$1src="$3"$5></picture>


pe while>
❯ find . -type f -name "*.png" | while read PNGFILE; do sharp -i "$PNGFILE" -o "$(echo "$PNGFILE" | sed 's/png$/webp/')"; done
/U