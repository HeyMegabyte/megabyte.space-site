import { Component, Host, h } from '@stencil/core'
import {
  ResponsiveContainer,
  PrismicRichText,
  Grid,
  Col,
} from '@ionic-internal/ionic-ds'

@Component({
  tag: 'community-page',
  styleUrl: 'community-page.scss',
  scoped: true,
})
export class CommunityPage {
  data: any = { "top": [{ "type": "heading1", "spans": [], "text": "Community" }, { "type": "paragraph", "spans": [], "text": "Megabyte Labs is a large and growing project with a passionate community. Engage with the Megabyte Labs team and other helpful community members through the official forum, GitHub community, Twitter, and more." }], "top__list": [{ "image": { "dimensions": {}, "alt": "Card with Discord icon", "copyright": null, "url": "https://megabyte.space/assets/img/community/discord-graphic.png", "2x": {} }, "text": [{ "type": "heading4", "spans": [], "text": "Join the Discord" }, { "type": "paragraph", "spans": [], "text": "Join the community in Discord for discussing new features, asking questions, and helping others get started." }], "link": { "target": "_blank", "url": "https://discord.com/channels/1077138419953713222/1078553488642027550" } }, { "image": { "dimensions": {}, "alt": "GitHub discussions forum on card", "copyright": null, "url": "https://megabyte.space/assets/img/community/support-community.png", "2x": {} }, "text": [{ "type": "heading4", "spans": [], "text": "GitHub Discussions" }, { "type": "paragraph", "spans": [], "text": "Peruse through our official GitHub Discussions forum to find announcements, ideas, polls, questions, answers, and examples of other user's implementation of Megabyte Labs." }], "link": { "target": "_blank", "url": "https://github.com/orgs/megabyte-labs/discussions" } }, { "image": { "dimensions": {}, "alt": "Message icons with world map behind", "copyright": null, "url": "https://megabyte.space/assets/img/community/community-graphic.png", "2x": {} }, "text": [{ "type": "heading4", "spans": [], "text": "Megabyte Labs Matrix" }, { "type": "paragraph", "spans": [], "text": "Join the Megabyte Labs matrix chat room (i.e. gitter.im). Ask questions to the community or help other users with their questions." }], "link": { "target": "_blank", "url": "https://matrix.to/#/#megabyte-labs_community:gitter.im" } }], "websites__list": [{ "icon": { "dimensions": {}, "alt": "Twitter icon", "copyright": null, "url": "https://megabyte.space/assets/img/community/twitter-icon-1x.png" }, "text": [{ "type": "heading4", "spans": [], "text": "@MegabyteLabs" }, { "type": "paragraph", "spans": [], "text": "Follow Megabyte Labs on Twitter for the latest releases, features, and events." }], "link": [{ "type": "paragraph", "spans": [{ "start": 0, "end": 10, "type": "hyperlink", "data": { "target": "_blank", "link_type": "Web", "url": "https://twitter.com/MegabyteLabs" } }], "text": "Tweet" }] }, { "icon": { "dimensions": {}, "alt": "Reddit icon", "copyright": null, "url": "https://megabyte.space/assets/img/community/reddit-icon-1x.png" }, "text": [{ "type": "heading4", "spans": [], "text": "r/MegabyteLabs" }, { "type": "paragraph", "spans": [], "text": "Join the community on Reddit with discussions around Megabyte Labs." }], "link": [{ "type": "paragraph", "spans": [{ "start": 0, "end": 10, "type": "hyperlink", "data": { "target": "_blank", "link_type": "Web", "url": "https://www.reddit.com/r/MegabyteLabs/" } }], "text": "Post" }] }, { "icon": { "dimensions": {}, "alt": "Slack icon", "copyright": null, "url": "https://megabyte.space/assets/img/community/slack-icon-1x.png" }, "text": [{ "type": "heading4", "spans": [], "text": "Slack" }, { "type": "paragraph", "spans": [], "text": "Connect with us on Slack to join the discussion, get help, or just hang out." }], "link": [{ "type": "paragraph", "spans": [{ "start": 0, "end": 10, "type": "hyperlink", "data": { "target": "_blank", "link_type": "Web", "url": "https://megabyte-labs.slack.com" } }], "text": "Chat" }] }, { "icon": { "dimensions": {}, "alt": "GitHub icon", "copyright": null, "url": "https://megabyte.space/assets/img/community/github-icon-1x.png" }, "text": [{ "type": "heading4", "spans": [], "text": "GitHub" }, { "type": "paragraph", "spans": [], "text": "Find a potential bug? Let us know on GitHub and consider opening a pull request." }], "link": [{ "type": "paragraph", "spans": [{ "start": 0, "end": 10, "type": "hyperlink", "data": { "target": "_blank", "link_type": "Web", "url": "https://github.com/megabyte-labs/install.doctor" } }], "text": "Fork" }] }] }

  render() {
    const { Top, Websites } = this

    return (
      <Host>
        <meta-tags
          pageTitle="Community Hub: Chat, questions, answers"
          description={
            'Get connected and get help from the Megabyte Labs community. Find out how you can join our thriving community.'
          }
        />
        <site-header class="heading-container" sticky={true} />
        <Top />
        <Websites />
        <capacitor-site-footer />
      </Host>
    )
  }

  Top = () => {
    const { top, top__list } = this.data

    return (
      <ResponsiveContainer id="top" as="section">
        <div class="heading-group">
          <PrismicRichText richText={top} paragraphLevel={2} />
        </div>
        <div class="cards">
          {top__list.map(({ image, text, link: { target, url } }) => (
            <a target={target} href={url} class="card">
              <div class="image-wrapper">
                <prismic-image image={image} loading="eager" />
              </div>
              <PrismicRichText richText={text} />
            </a>
          ))}
        </div>
      </ResponsiveContainer>
    )
  };

  Websites = () => {
    const { websites__list } = this.data

    const dimensions = ['48x48', '48x48', '48x48', '48x48']

    return (
      <ResponsiveContainer id="websites" as="section">
        <Grid>
          {websites__list.map(({ icon, text, link }, i) => {
            const [width, height] = dimensions[i].split('x')
            return (
              <Col cols={12} xs={6} md={3}>
                <div class="image-wrapper">
                  <prismic-image
                    width={width}
                    height={height}
                    image={icon}
                  />
                </div>
                <PrismicRichText richText={text} />
                <PrismicRichText class="link" richText={link} />
              </Col>
            )
          })}
        </Grid>
      </ResponsiveContainer>
    )
  };
}
