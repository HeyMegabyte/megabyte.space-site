import { Component, Host, State, h } from '@stencil/core'
import { href } from '@stencil/router'
import {
  ResponsiveContainer,
  Grid,
  Col,
  Heading,
  Paragraph,
} from '@ionic-internal/ionic-ds'

declare global {
  interface Window {
    hbspt: {
      forms: {
        create: ({ }) => any
      }
    }
  }
}

@Component({
  tag: 'capacitor-site-footer',
  styleUrl: 'capacitor-site-footer.scss',
})
export class CapacitorSiteFooter {
  @State() email: string = '';
  @State() isLoading: boolean = false;
  @State() hasSubmitted: boolean = false;
  @State() isValid: boolean = true;
  @State() inlineMessage: string = '';

  componentWillLoad() { }

  handleNewsletterSubmit(e: Event) {
    e.preventDefault()

    this.isLoading = true

    const xhr = new XMLHttpRequest()
    const url = [
      'https://api.hsforms.com/submissions/v3/integration/submit',
      '24052635',
      '8801fbf5-204e-450a-87f4-f252a994c945',
    ].join('/')
    xhr.open('POST', url)
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const json = JSON.parse(xhr.responseText)
        this.inlineMessage = json.inlineMessage
        this.isLoading = false
        this.hasSubmitted = true
        this.isValid = true
      } else if (xhr.readyState == 4 && xhr.status == 400) {
        this.inlineMessage = 'Please enter a valid e-mail address.'
        this.isLoading = false
        this.isValid = false
      }
    }

    const hutkMatch =
      document.cookie.match && document.cookie.match(/hubspotutk=(.*?);/)
    const hutk = hutkMatch ? hutkMatch[1] : undefined

    xhr.send(
      JSON.stringify({
        submittedAt: new Date().getTime(),
        fields: [
          {
            name: 'email',
            value: this.email,
          },
          {
            name: 'first_campaign_conversion',
            value: 'Megabyte Labs Newsletter',
          },
        ],
        context: {
          hutk,
          pageUri: window.location.href,
          pageName: document.title,
        },
      }),
    )
  }

  handleEmailChange(ev: any) {
    this.email = ev.target.value
    this.isValid = true
  }

  handleInlineMessage(returnMessage: string) {
    const messageMatch =
      returnMessage.match && returnMessage.match(/<p>(.*?)<\/p>/)
    return messageMatch ? messageMatch[1] : undefined
  }

  render() {
    return (
      <Host>
        <footer>
          <ResponsiveContainer>
            <div class="newsletter">
              <div>
                <Heading level={4}>Join our Newsletter</Heading>
                <Paragraph level={4}>
                  Keep up to date with all the latest Megabyte Labs news and updates
                </Paragraph>
              </div>
              <div class="form-group">
                {this.hasSubmitted ? (
                  <div class="form-message">
                    <ion-icon name="checkmark-circle"></ion-icon>
                    <Paragraph>
                      {this.handleInlineMessage(this.inlineMessage)}
                    </Paragraph>
                  </div>
                ) : (
                    <form class="hs-form" onSubmit={e => this.handleNewsletterSubmit(e)}>
                      <div class="hs_email hs-email hs-fieldtype-text field hs-form-field">
                        <div class="input">
                          <input
                            name="email"
                            type="email"
                            autocomplete="email"
                            inputmode="email"
                            value={this.email}
                            onInput={() => this.handleEmailChange(event)}
                            disabled={this.isLoading}
                            placeholder="E-mail"
                            class={{ 'error': this.isValid, 'ui-paragraph-4': true }}
                            aria-label="Email"
                            required
                          />
                        </div>
                      </div>
                      <div class="hs_submit hs-submit">
                        <div class="actions">
                          <input type="submit" class="hs-button primary large" value="Subscribe" />
                        </div>
                      </div>
                      {!this.isValid && (
                        <Paragraph level={5} class="error-message">
                          {this.inlineMessage}
                        </Paragraph>
                      )}
                    </form>
                  )}
              </div>
            </div>
            <Grid>
              <Col md={6} sm={4} xs={12} cols={12} class="copyright">
                <webp-image
                  src="/assets/img/logo-white2.png"
                  alt="Megabyte Labs Logo"
                  class="logo"
                  loading="lazy"
                />
                <div class="footer-social-wrapper">
                  <a class="footer-social github" href="https://github.com/megabyte-labs" target="_blank" rel="noopener">
                    <ion-icon name="logo-github"></ion-icon>
                  </a>
                  <a class="footer-social gitlab" href="https://gitlab.com/megabyte-labs" target="_blank" rel="noopener">
                    <ion-icon name="logo-gitlab"></ion-icon>
                  </a>
                  <a class="footer-social slack" href="https://megabyte-labs.slack.com" target="_blank" rel="noopener">
                    <ion-icon name="logo-slack"></ion-icon>
                  </a>
                  <a class="footer-social discord" href="https://discord.com/channels/1077138419953713222/1078553488642027550" target="_blank" rel="noopener">
                    <ion-icon name="logo-discord"></ion-icon>
                  </a>
                  <a class="footer-social facebook" href="https://facebook.com/MegabyteLabs" target="_blank" rel="noopener">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                  <a class="footer-social twitter" href="https://twitter.com/MegabyteLabs" target="_blank" rel="noopener">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                  <a class="footer-social linkedin" href="https://linkedin.com/company/megabyte-labs" target="_blank" rel="noopener">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </div>
                <p>© {new Date().getFullYear()} Megabyte LLC</p>
                <p>
                  <a {...href('/')}>Megabyte Labs Open Source</a>
                </p>
                <p>
                  <a {...href('/privacy')}>Privacy Policy</a> | <a {...href('/terms')}>Terms of Service</a>
                </p>
              </Col >
              <Col md={6} sm={8} xs={12} cols={12}>
                <div class="routes-group">
                  <div>
                    <Heading level={5}>Documentation</Heading>
                    <ul class="routes">
                      <li>
                        <a class="ui-paragraph-4" href='/docs'>
                          Overview
                        </a>
                      </li>
                      <li>
                        <a class="ui-paragraph-4" href='/docs/philosophy'>
                          Philosophy
                        </a>
                      </li>
                      <li>
                        <a class="ui-paragraph-4" href='/docs/code'>
                          Code
                        </a>
                      </li>
                      <li>
                        <a class="ui-paragraph-4" href='/docs/contributing'>
                          Contributing
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Heading level={5}>Resources</Heading>
                    <ul class="routes">
                      <li>
                        <a
                          class="ui-paragraph-4"
                          href='/blog'
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a class="ui-paragraph-4" {...href('/community')}>
                          Community
                        </a>
                      </li>
                      <li>
                        <a
                          class="ui-paragraph-4"
                          href="https://github.com/orgs/megabyte-labs/discussions"
                        >
                          Discussions
                        </a>
                      </li>
                      <li>
                        <a class="ui-paragraph-4" {...href('/enterprise')}>
                          Enterprise
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Heading level={5}>Connect</Heading>
                    <ul class="routes">
                      <li>
                        <a
                          class="ui-paragraph-4"
                          href="https://github.com/megabyte-labs"
                          target="_blank"
                          rel="noopener"
                        >
                          GitHub
                        </a>
                      </li>
                      <li>
                        <a
                          class="ui-paragraph-4"
                          href="https://gitlab.com/megabyte-labs"
                          target="_blank"
                          rel="noopener"
                        >
                          GitLab
                        </a>
                      </li>
                      <li>
                        <a
                          class="ui-paragraph-4"
                          href="https://facebook.com/MegabyteLabs"
                          target="_blank"
                          rel="noopener"
                        >
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a
                          class="ui-paragraph-4"
                          href="https://twitter.com/MegabyteLabs"
                          target="_blank"
                          rel="noopener"
                        >
                          Twitter
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Grid >
          </ResponsiveContainer >
        </footer >
      </Host >
    )
  }
}
