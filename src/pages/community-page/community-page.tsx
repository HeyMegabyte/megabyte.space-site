import { Component, Host, h } from '@stencil/core'
import {
  ResponsiveContainer,
  PrismicRichText,
  Paragraph,
  Heading,
  Grid,
  Col,
} from 'ionic-ds-no-fonts'

@Component({
  tag: 'community-page',
  styleUrl: 'community-page.scss',
  scoped: true,
})
export class CommunityPage {
  data: any = { "top": [{ "type": "heading1", "spans": [], "text": "Community" }, { "type": "paragraph", "spans": [], "text": "Megabyte Labs is a large and growing project with a passionate community. Engage with the Megabyte Labs team and other helpful community members through Discord, GitHub Discussions, Twitter, and more." }], "top__list": [{ "image": { "dimensions": {}, "alt": "Card with Discord icon", "copyright": null, "url": "https://megabyte.space/assets/img/community/discord-graphic.png", "2x": {} }, "text": [{ "type": "heading4", "spans": [], "text": "Join the Discord" }, { "type": "paragraph", "spans": [], "text": "Join the community in Discord for discussing new features, asking questions, and helping others get started." }], "link": { "target": "_blank", "url": "https://discord.com/channels/1077138419953713222/1078553488642027550" } }, { "image": { "dimensions": {}, "alt": "GitHub discussions forum on card", "copyright": null, "url": "https://megabyte.space/assets/img/community/support-community.png", "2x": {} }, "text": [{ "type": "heading4", "spans": [], "text": "GitHub Discussions" }, { "type": "paragraph", "spans": [], "text": "Peruse through our official GitHub Discussions forum to find announcements, ideas, polls, questions, answers, and examples of other user's implementation of Megabyte Labs." }], "link": { "target": "_blank", "url": "https://github.com/orgs/megabyte-labs/discussions" } }, { "image": { "dimensions": {}, "alt": "Message icons with world map behind", "copyright": null, "url": "https://megabyte.space/assets/img/community/community-graphic.png", "2x": {} }, "text": [{ "type": "heading4", "spans": [], "text": "Megabyte Labs Matrix" }, { "type": "paragraph", "spans": [], "text": "Join the Megabyte Labs matrix chat room (i.e. gitter.im). Ask questions to the community or help other users with their questions." }], "link": { "target": "_blank", "url": "https://matrix.to/#/#megabyte-labs_community:gitter.im" } }], "websites__list": [{ "icon": { "dimensions": {}, "alt": "Twitter icon", "copyright": null, "url": "https://megabyte.space/assets/img/community/twitter-icon-1x.png" }, "text": [{ "type": "heading4", "spans": [], "text": "@MegabyteLabs" }, { "type": "paragraph", "spans": [], "text": "Follow Megabyte Labs on Twitter for the latest releases, features, and events." }], "link": [{ "type": "paragraph", "spans": [{ "start": 0, "end": 10, "type": "hyperlink", "data": { "target": "_blank", "link_type": "Web", "url": "https://twitter.com/MegabyteLabs" } }], "text": "Tweet" }] }, { "icon": { "dimensions": {}, "alt": "Reddit icon", "copyright": null, "url": "https://megabyte.space/assets/img/community/reddit-icon-1x.png" }, "text": [{ "type": "heading4", "spans": [], "text": "r/MegabyteLabs" }, { "type": "paragraph", "spans": [], "text": "Join the community on Reddit with discussions around Megabyte Labs." }], "link": [{ "type": "paragraph", "spans": [{ "start": 0, "end": 10, "type": "hyperlink", "data": { "target": "_blank", "link_type": "Web", "url": "https://www.reddit.com/r/MegabyteLabs/" } }], "text": "Post" }] }, { "icon": { "dimensions": {}, "alt": "Slack icon", "copyright": null, "url": "https://megabyte.space/assets/img/community/slack-icon-1x.png" }, "text": [{ "type": "heading4", "spans": [], "text": "Slack" }, { "type": "paragraph", "spans": [], "text": "Connect with us on Slack to join the discussion, get help, or just hang out." }], "link": [{ "type": "paragraph", "spans": [{ "start": 0, "end": 10, "type": "hyperlink", "data": { "target": "_blank", "link_type": "Web", "url": "https://megabyte-labs.slack.com" } }], "text": "Chat" }] }, { "icon": { "dimensions": {}, "alt": "GitHub icon", "copyright": null, "url": "https://megabyte.space/assets/img/community/github-icon-1x.png" }, "text": [{ "type": "heading4", "spans": [], "text": "GitHub" }, { "type": "paragraph", "spans": [], "text": "Find a potential bug? Let us know on GitHub and consider opening a pull request." }], "link": [{ "type": "paragraph", "spans": [{ "start": 0, "end": 10, "type": "hyperlink", "data": { "target": "_blank", "link_type": "Web", "url": "https://github.com/megabyte-labs/install.doctor" } }], "text": "Fork" }] }] }

  render() {
    const { Top, Websites, WhyJoin } = this

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
        <WhyJoin />
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

  WhyJoin = () => {
    return (
      <ResponsiveContainer id="what-is" as="section">
        <div class="ui-container">
          <ion-icon class="what-is-info-icon" name="information-circle-outline"></ion-icon>
          <Heading class="quote-summary" level={2}>
            <b>Why join the Megabyte Labs community?</b>
          </Heading>
          <Paragraph class="quote-summary">
            There are several compelling reasons why you should consider joining the Megabyte Labs community. First, Megabyte Labs is an open-source business that specializes in community-run open-source projects. This means that the community is the driving force behind the projects, and all members are encouraged to contribute their skills and expertise to create high-quality, innovative open-source solutions.
          </Paragraph>
          <Paragraph class="quote-summary">
            Second, Megabyte Labs has a team of experts who are diverse in a wide variety of open-source technologies. This means that regardless of your area of interest, you are likely to find a community of like-minded individuals who are passionate about the same technologies and willing to share their knowledge and experience with you.
          </Paragraph>
          <Paragraph class="quote-summary">
            Third, by joining the Megabyte Labs community, you will have the opportunity to work on meaningful, impactful projects that have the potential to make a difference in the world. The community is committed to developing open-source solutions that are accessible, sustainable, and beneficial to society, and you can be part of this effort.
          </Paragraph>
          <Paragraph class="quote-summary">
            Fourth, the Megabyte Labs community is a supportive and inclusive environment where everyone is welcome. Whether you are an experienced developer or just starting out, you will find a welcoming community that is eager to help you grow and develop your skills.
          </Paragraph>
          <Paragraph class="quote-summary">
            Finally, being part of the Megabyte Labs community can help you build your professional network and open up new career opportunities. By working on open-source projects with other talented individuals, you can gain valuable experience, showcase your skills, and make connections that could lead to new job opportunities or collaborations.
          </Paragraph>
          <Paragraph class="quote-summary">
            In conclusion, if you are passionate about open-source technologies and want to work on impactful projects with a supportive and diverse community, then joining Megabyte Labs is an excellent choice. You will have the opportunity to learn, grow, and make a difference while being part of a community of like-minded individuals who share your passion for open-source.
          </Paragraph>
        </div>
      </ResponsiveContainer>
    )
  }

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
