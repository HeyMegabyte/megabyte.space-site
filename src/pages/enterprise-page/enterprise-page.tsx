import { Component, h, Host } from '@stencil/core'
import {
  ResponsiveContainer,
  Heading,
  Button,
  PrismicRichText,
  Paragraph,
} from '@ionic-internal/ionic-ds'
import { State } from '@stencil/core/internal'

@Component({
  tag: 'enterprise-page',
  styleUrl: 'enterprise-page.scss',
  scoped: true
})
export class EnterprisePage {
  data: any = { "top": [{ "title": "Unleash the Power of Open Source", "text": "Transform your business by leveraging our team open-source subject matter experts. With our open-source acumen, find cost-effective solutions that will slay your business requirements.", "cta_1": "Talk to sales", "background": { "dimensions": {}, "alt": "Raised platforms with app and company icons", "copyright": null, "url": "https://megabyte.space/assets/img/enterprise/platform-elevated-graphic.png", "2x": {} } }], "companies": "powering incredible apps & dev teams", "native": [{ "supertext": "OPEN-SOURCE GAME-CHANGERS", "title": [{ "type": "heading2", "spans": [{ "start": 16, "end": 44, "type": "em" }], "text": "Enterprise-grade open-source" }], "subtext": "We believe that open-source software can be a game-changer for businesses of all sizes. But we also know that integrating and architecting these tools can be a challenge - that's where our team of experts comes in. Our open-source specialists have years of experience helping businesses like yours get the most out of these powerful tools. By partnering with us, you'll benefit from our in-depth knowledge and expertise." }], "native__list": [{ "title": "Efficiency & Productivity", "text": "Boost efficiency and productivity: Our open-source integrations and architectures are designed to streamline your operations and help your team work more efficiently." }, { "title": "Innovation & Flexibility", "text": "Increase innovation and flexibility: With our help, you'll be able to experiment with new open-source tools and technologies, and easily adapt your tech stack as your business evolves." }, { "title": "Save Money & Increase ROI", "text": "Save money and increase ROI: Our open-source solutions can help you reduce licensing costs and improve your overall return on investment." }], "ebook": [{ "background": { "dimensions": { "width": 1216, "height": 320 }, "alt": "See-through tiles", "copyright": null, "url": "https://megabyte.space/assets/img/landing/see-thru-tiles.png", "2x": { "dimensions": { "width": 2432, "height": 640 }, "alt": "See-through tiles", "copyright": null, "url": "https://megabyte.space/assets/img/landing/see-thru-tiles-2x.png" } }, "book": { "dimensions": { "width": 364, "height": 343 }, "alt": "Book cover with title reading \"Provisioning Operating Systems with Megabyte Labs\"", "copyright": null, "url": "https://megabyte.space/assets/img/landing/ebook-text-box.png", "2x": { "dimensions": { "width": 728, "height": 686 }, "alt": "Book cover with title reading \"Provisioning Operating Systems with Megabyte Labs\"", "copyright": null, "url": "https://megabyte.space/assets/img/landing/ebook-text-box-2x.png" } }, "text": [{ "type": "paragraph", "text": "Provision your computing environments faster. Our free guide details the benefits of leveraging Megabyte Labs to define the state of your PCs.", "spans": [{ "start": 0, "end": 45, "type": "em" }] }], "cta": "Read the free eBook" }], "approach": [{ "supertext": "Capacitor approach", "title": [{ "type": "heading2", "text": "Build modern native apps without ever leaving the Web.", "spans": [{ "start": 25, "end": 54, "type": "em" }] }] }], "approach_traditional": [{ "image": { "dimensions": { "width": 480, "height": 218 }, "alt": "android and apple platforms with blocks on top", "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/68b006a0-f96b-4d94-bc0d-b899f82d2bbd_capacitor-enterprise-traditional-0%402x.png?auto=compress,format&rect=0,0,960,436&w=480&h=218", "2x": { "dimensions": { "width": 961, "height": 436 }, "alt": "android and apple platforms with blocks on top", "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/68b006a0-f96b-4d94-bc0d-b899f82d2bbd_capacitor-enterprise-traditional-0%402x.png?auto=compress,format&rect=0,0,961,436&w=961&h=436" } }, "title": "Traditional Native app architecture", "text": "Native app experiences and functionality managed on a per application/platform basis.", "subtitle": "Traditional native approach" }], "approach_traditional__list": [{ "icon": { "dimensions": { "width": 20, "height": 20 }, "alt": "exclamation mark icon", "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/3695aa92-5204-4831-9076-34a2287ffd0e_capacitor-enterprise-traditional-1%402x.png?auto=compress,format&rect=0,0,40,40&w=20&h=20", "2x": { "dimensions": { "width": 40, "height": 40 }, "alt": "exclamation mark icon", "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/3695aa92-5204-4831-9076-34a2287ffd0e_capacitor-enterprise-traditional-1%402x.png?auto=compress,format&rect=0,0,40,40&w=40&h=40" } }, "text": "Separate codebase for each mobile platform" }, { "icon": { "dimensions": { "width": 20, "height": 20 }, "alt": "exclamation mark icon", "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/3695aa92-5204-4831-9076-34a2287ffd0e_capacitor-enterprise-traditional-1%402x.png?auto=compress,format&rect=0,0,40,40&w=20&h=20", "2x": { "dimensions": { "width": 40, "height": 40 }, "alt": "exclamation mark icon", "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/3695aa92-5204-4831-9076-34a2287ffd0e_capacitor-enterprise-traditional-1%402x.png?auto=compress,format&rect=0,0,40,40&w=40&h=40" } }, "text": "Specialized languages and dev environments" }, { "icon": { "dimensions": { "width": 20, "height": 20 }, "alt": "exclamation mark icon", "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/3695aa92-5204-4831-9076-34a2287ffd0e_capacitor-enterprise-traditional-1%402x.png?auto=compress,format&rect=0,0,40,40&w=20&h=20", "2x": { "dimensions": { "width": 40, "height": 40 }, "alt": "exclamation mark icon", "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/3695aa92-5204-4831-9076-34a2287ffd0e_capacitor-enterprise-traditional-1%402x.png?auto=compress,format&rect=0,0,40,40&w=40&h=40" } }, "text": "No ability to target web sites, web apps or PWAs" }, { "icon": { "dimensions": { "width": 20, "height": 20 }, "alt": "exclamation mark icon", "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/3695aa92-5204-4831-9076-34a2287ffd0e_capacitor-enterprise-traditional-1%402x.png?auto=compress,format&rect=0,0,40,40&w=20&h=20", "2x": { "dimensions": { "width": 40, "height": 40 }, "alt": "exclamation mark icon", "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/3695aa92-5204-4831-9076-34a2287ffd0e_capacitor-enterprise-traditional-1%402x.png?auto=compress,format&rect=0,0,40,40&w=40&h=40" } }, "text": "No web libraries, web UI components, or CSS styling" }, { "icon": { "dimensions": { "width": 20, "height": 20 }, "alt": "exclamation mark icon", "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/3695aa92-5204-4831-9076-34a2287ffd0e_capacitor-enterprise-traditional-1%402x.png?auto=compress,format&rect=0,0,40,40&w=20&h=20", "2x": { "dimensions": { "width": 40, "height": 40 }, "alt": "exclamation mark icon", "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/3695aa92-5204-4831-9076-34a2287ffd0e_capacitor-enterprise-traditional-1%402x.png?auto=compress,format&rect=0,0,40,40&w=40&h=40" } }, "text": "Access native functionality per each platform" }], "approach_web": [{ "image": { "dimensions": { "width": 493, "height": 326 }, "alt": "apple, android, and pwa platforms with capacitor on top", "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/77875dc7-d69e-4493-b04c-3e96e4a8cefd_capacitor-enterprise-traditional-2%402x.png?auto=compress,format&rect=0,0,987,653&w=493&h=326", "2x": { "dimensions": { "width": 987, "height": 653 }, "alt": "apple, android, and pwa platforms with capacitor on top", "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/77875dc7-d69e-4493-b04c-3e96e4a8cefd_capacitor-enterprise-traditional-2%402x.png?auto=compress,format&rect=0,0,987,653&w=987&h=653" } }, "title": "Web Native app architecture", "text": "Core native device APIs and experiences shared across multiple applications and platforms.", "subtitle": "Capacitor Web Native approach" }], "approach_web__list": [{ "icon": { "dimensions": { "width": 20, "height": 20 }, "alt": null, "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/4d7dd4de-a530-43e2-a8cb-33da40eb7591_capacitor-enterprise-traditional-3%402x.png?auto=compress,format&rect=0,0,41,41&w=20&h=20", "2x": { "dimensions": { "width": 40, "height": 40 }, "alt": null, "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/4d7dd4de-a530-43e2-a8cb-33da40eb7591_capacitor-enterprise-traditional-3%402x.png?auto=compress,format&rect=0,0,41,41&w=40&h=40" } }, "text": "One codebase for iOS, Android, and web (PWA)" }, { "icon": { "dimensions": { "width": 20, "height": 20 }, "alt": "checkmark circle icon", "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/4d7dd4de-a530-43e2-a8cb-33da40eb7591_capacitor-enterprise-traditional-3%402x.png?auto=compress,format&rect=0,0,41,41&w=20&h=20", "2x": { "dimensions": { "width": 40, "height": 40 }, "alt": "checkmark circle icon", "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/4d7dd4de-a530-43e2-a8cb-33da40eb7591_capacitor-enterprise-traditional-3%402x.png?auto=compress,format&rect=0,0,41,41&w=40&h=40" } }, "text": "Build with web standards: JavaScript, HTML, and CSS" }, { "icon": { "dimensions": { "width": 20, "height": 20 }, "alt": "checkmark circle icon", "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/4d7dd4de-a530-43e2-a8cb-33da40eb7591_capacitor-enterprise-traditional-3%402x.png?auto=compress,format&rect=0,0,41,41&w=20&h=20", "2x": { "dimensions": { "width": 40, "height": 40 }, "alt": "checkmark circle icon", "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/4d7dd4de-a530-43e2-a8cb-33da40eb7591_capacitor-enterprise-traditional-3%402x.png?auto=compress,format&rect=0,0,41,41&w=40&h=40" } }, "text": "Target the native app stores or desktop and mobile web" }, { "icon": { "dimensions": { "width": 20, "height": 20 }, "alt": "checkmark circle icon", "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/4d7dd4de-a530-43e2-a8cb-33da40eb7591_capacitor-enterprise-traditional-3%402x.png?auto=compress,format&rect=0,0,41,41&w=20&h=20", "2x": { "dimensions": { "width": 40, "height": 40 }, "alt": "checkmark circle icon", "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/4d7dd4de-a530-43e2-a8cb-33da40eb7591_capacitor-enterprise-traditional-3%402x.png?auto=compress,format&rect=0,0,41,41&w=40&h=40" } }, "text": "Use familiar web frameworks, UI libraries, and tooling" }, { "icon": { "dimensions": { "width": 20, "height": 20 }, "alt": "checkmark circle icon", "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/4d7dd4de-a530-43e2-a8cb-33da40eb7591_capacitor-enterprise-traditional-3%402x.png?auto=compress,format&rect=0,0,41,41&w=20&h=20", "2x": { "dimensions": { "width": 40, "height": 40 }, "alt": "checkmark circle icon", "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/4d7dd4de-a530-43e2-a8cb-33da40eb7591_capacitor-enterprise-traditional-3%402x.png?auto=compress,format&rect=0,0,41,41&w=40&h=40" } }, "text": "Access the same native functionality and APIs" }], "micro_frontends": [{ "supertext": "OPEN-SOURCE EXPERTS", "title": [{ "type": "heading2", "spans": [{ "start": 12, "end": 41, "type": "em" }], "text": "Open-source implementation gurus" }], "subtext": [{ "type": "paragraph", "spans": [], "text": "Our team of experts is available to answer your questions and provide guidance at every stage of your project. Whether you need help selecting the right open-source tools for your business, or have questions about custom development, we are here to help. Plus, because we have years of experience working with open-source software and custom development, we can offer expert advice that is tailored to your specific needs." }], "image": { "dimensions": {}, "alt": "Graphic depicting system connections", "copyright": null, "url": "https://megabyte.space/assets/img/enterprise/development-graphic.png" } }], "plugins": [{ "supertext": "CUSTOM HYBRID APP SOLUTIONS", "title": [{ "type": "heading2", "spans": [{ "start": 14, "end": 39, "type": "em" }], "text": "Cross-platform web applications" }], "subtext": "Our cross-platform, hybrid web application development solutions bring together the best of both worlds - open-source software and custom development. We will leverage our expertise in open-source tools and frameworks to build a powerful foundation for your web application, and then layer on custom development to create a truly unique solution.", "image": { "dimensions": {}, "alt": "Wheel of operating system icons around Megabyte Labs icon", "copyright": null, "url": "https://megabyte.space/assets/img/enterprise/os-wheel.png", "2x": {} } }], "security": [{ "image": { "dimensions": { "width": 608, "height": 600 }, "alt": "Security icons around Megabyte Labs icon", "copyright": null, "url": "https://megabyte.space/assets/img/enterprise/security-wheel.png", "2x": { "dimensions": { "width": 1216, "height": 1201 }, "alt": "Security icons around Megabyte Labs icon", "copyright": null, "url": "https://megabyte.space/assets/img/enterprise/security-wheel-2x.png" } }, "supertext": "Enterprise-Grade Protection", "title": [{ "type": "heading2", "text": "Zero-Trust, hardware-backed authentication", "spans": [{ "start": 11, "end": 42, "type": "em" }] }], "subtext": [{ "type": "paragraph", "text": "Utilize the best possible security practices by protecting all your web services with our Zero-Trust, hardware-backed authentication system. Authorize everything and require Multi-Factor Authentication (MFA) with support for hardware-based methods such as FIDO2.", "spans": [{ "start": 118, "end": 139, "type": "hyperlink", "data": { "link_type": "Web", "url": "https://megabyte.space/blog/single-sign-on" } }] }] }], "delivery": [{ "image": { "dimensions": { "width": 910, "height": 535 }, "alt": "Tablet connected to USB hard disk", "copyright": null, "url": "https://megabyte.space/assets/img/enterprise/usb-drive-graphic.png", "2x": { "dimensions": { "width": 1820, "height": 1070 }, "alt": "Tablet connected to USB hard disk", "copyright": null, "url": "https://megabyte.space/assets/img/enterprise/usb-drive-graphic-2x.png" } }, "supertext": "ULTRA SECURE", "title": [{ "type": "heading2", "text": "Reboot to reset, read-only disks", "spans": [{ "start": 16, "end": 32, "type": "em" }] }], "subtext": [{ "type": "paragraph", "text": "Most of the files on your system never change but, with traditional systems, those files still remain part of attack surface. With Megabyte Labs's Immutable Golden Image (IGI) feature, you can leverage a USB-C hard-drive with special firmware to store the majority of your system immutably while still leveraging traditional disks via a union file system. This gives you the capability of rebooting to clear ransomware while retaining stateful data on hard-disks, S3 buckets, and the like.", "spans": [] }] }], "support_guidance": [{ "image": { "dimensions": {}, "alt": "Message popup with timer", "copyright": null, "url": "https://megabyte.space/assets/img/enterprise/support-icon.png", "2x": {} }, "title": "Mission-Critical Support", "text": "Guaranteed response SLAs to support your business needs. Our professional support team is on-hand to help you troubleshoot and address issues." }, { "image": { "dimensions": {}, "alt": "Three person icons with sliders", "copyright": null, "url": "https://megabyte.space/assets/img/enterprise/guidance-icon.png", "2x": {} }, "title": "Expert Guidance", "text": "Our team of experts will work with your teams to provide open-source based recommendations, strategies, and custom solutions that fits your unique goals and challenges. We are here to help ensure your success." }], "features": [{ "supertext": "Enterprise Key Features", "title": [{ "type": "heading2", "spans": [{ "start": 21, "end": 62, "type": "em" }], "text": "Everything you need. Subject matter expert level support." }], "subtext": [{ "type": "paragraph", "spans": [], "text": "We are proud to have a team of subject matter expert-level open-source gurus on our staff. Our experts have years of experience working with open-source software, and are committed to staying on top of the latest trends and best practices in the field." }, { "type": "paragraph", "spans": [], "text": "Our open-source gurus are passionate about what they do. They love nothing more than helping businesses like yours succeed with open-source software, and are committed to providing the highest level of service and support." }] }], "features__list": [{ "icon": { "dimensions": {}, "alt": "Open source sphere in cube icon", "copyright": null, "url": "https://megabyte.space/assets/img/enterprise/open-source-icon.png", "2x": {} }, "title": "Enterprise + Open-Source", "text": "Guided open-source software integrations into other Enterprise-grade features like SSO." }, { "icon": { "dimensions": {}, "alt": "Paper icon", "copyright": null, "url": "https://megabyte.space/assets/img/enterprise/paper-icon.png", "2x": {} }, "title": "Guaranteed SLA", "text": "Timely support and troubleshooting when you need it most. Get expert help directly from the Megabyte Labs team with guaranteed response times." }, { "icon": { "dimensions": {}, "alt": "Calendar icon", "copyright": null, "url": "https://megabyte.space/assets/img/enterprise/calendar-icon.png", "2x": {} }, "title": "Regular Release Cycles", "text": "A release timeline you can count on, as opposed to a community maintainers schedule. Think days instead of months or years." }, { "icon": { "dimensions": {}, "alt": "Shield icon with checkmark", "copyright": null, "url": "https://megabyte.space/assets/img/enterprise/shield-icon.png", "2x": {} }, "title": "Critical Security Updates & Fixes", "text": "Keep your users protected with ongoing security notifications and fixes that keep pace with OS releases, patches, and known vulnerabilities." }, { "icon": { "dimensions": {}, "alt": "Head icon with light bulb", "copyright": null, "url": "https://megabyte.space/assets/img/enterprise/head-icon.png", "2x": {} }, "title": "Guidance & Expertise", "text": "Our team is here to ensure you are using the best, open-source tools while helping you to meet your deadlines." }], "editions": [{ "supertext": "READY FOR ENTERPRISE", "title": [{ "type": "heading2", "spans": [{ "start": 18, "end": 39, "type": "em" }], "text": "Slay requirements, leverage open-source" }], "paragraph_1": [{ "type": "paragraph", "spans": [], "text": "Partnering with Megabyte Labs means you will have access to a team of experts who are dedicated to helping you succeed. Our goal is to add real value to your business, and we are confident that we can do just that." }], "paragraph_2": [{ "type": "paragraph", "spans": [], "text": "Contact us today to learn more." }], "cta_1": "Talk to sales", "image": { "dimensions": {}, "alt": "Open source icon graphic", "copyright": null, "url": "https://megabyte.space/assets/img/enterprise/open-source-icon-graphic.png", "2x": {} } }], "demo": [{ "supertext": "Talk to Sales", "title": "Megabyte Labs for Enterprise" }] }
  @State() ebookModalOpen = false;

  render() {
    const {
      Top,
      Native,
      // Ebook,
      MicroFrontends,
      // Approach,
      Plugins,
      // Security,
      // Delivery,
      SupportGuidance,
      Features,
      Demo,
      Editions,
    } = this

    return (
      <Host>
        <meta-tags
          pageTitle={`Enterprise-grade open-source solutions`}
          description={'Learn about the enterprise-grade support and solutions that we offer. Find out how to amplify your business with our services.'}
        />
        <site-header class="heading-container" sticky={true} />
        <enterprise-subnav />
        <Top />
        <Native />
        {/* <Ebook /> */}
        {/* <Approach /> */}
        <MicroFrontends />
        <Plugins />
        {/* <Security /> */}
        {/* <Delivery /> */}
        <SupportGuidance />
        <Features />
        <Editions />
        <Demo />
        <capacitor-site-footer />
      </Host>
    )
  }

  Top = () => {
    const { top } = this.data
    const { title, text, cta_1, background } = top[0]

    return (
      <section id="top">
        <prismic-image image={background} class="background" loading="eager" />
        <ResponsiveContainer>
          <div class="heading-group">
            <Heading level={1}>{title}</Heading>
            <Paragraph level={2}>{text}</Paragraph>
            <div class="cta-row">
              <Button anchor href="#inquiry" kind="round">
                {cta_1}
                <span class="arrow"> -&gt;</span>
              </Button>
              {/* <a href="https://ionic.io/contact/sales" class="link btn-link">
                {cta_2}
                <span class="arrow"> -&gt;</span>
              </a> */}
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  Native = () => {
    const { native, native__list } = this.data
    const { supertext, title, subtext } = native[0]

    const icons = [
      ['Three blocks with up arrow', '64x64'],
      ['Clock icon with up arrow', '64x64'],
      ['Fingerprint icon with lock symbol', '64x64'],
    ]

    return (
      <ResponsiveContainer id="native" as="section">
        <div class="heading-group">
          <p class="ui-heading-6">
            <sup>{supertext}</sup>
          </p>
          <PrismicRichText richText={title} />
          <Paragraph level={2}>{subtext}</Paragraph>
        </div>
        <ul class="list">
          {native__list.map(({ title, text }, i) => (
            <li key={icons[i][0]}>
              <webp-image
                width={icons[i][1].split('x')[0]}
                height={icons[i][1].split('x')[1]}
                src={`/assets/img/enterprise/enterprise-overview-${i}.png`}
                loading="lazy"
              />
              <Heading level={4} as="h3">
                {title}
              </Heading>
              <Paragraph leading="prose">{text}</Paragraph>
            </li>
          ))}
        </ul>
      </ResponsiveContainer>
    )
  };

  Ebook = () => {
    const { ebook } = this.data
    const { text, cta, background, book } = ebook[0]
    return (
      <section id="ebook">
        <ResponsiveContainer>
          <site-modal
            open={this.ebookModalOpen}
            onModalClose={() => (this.ebookModalOpen = false)}
          >
            <Heading level={2}>
              Free Megabyte Labs eBook
            </Heading>
            <Paragraph>
              Fill out and submit the form below to get your free copy of <strong>Open-Source, Cross-OS Workstations with Megabyte Labs</strong> sent to your e-mail.
            </Paragraph>
            <capacitor-hubspot-form formId="df7c28cd-d123-4ea2-aa2c-d7cb304fd398" />
          </site-modal>
          <div class="wrapper">
            <prismic-image image={background} class="background" />
            <div class="content">
              <div class="image-wrapper">
                <prismic-image image={book} />
              </div>
              <div class="heading-group">
                <PrismicRichText paragraphLevel={1} richText={text} />
                <Button
                  kind="round"
                  size="md"
                  onClick={() => (this.ebookModalOpen = true)}
                >
                  {cta} <span class="arrow"> -&gt;</span>
                </Button>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  Approach = () => {
    const {
      approach,
      approach_traditional,
      approach_traditional__list,
      approach_web,
      approach_web__list,
    } = this.data
    const { supertext, title } = approach[0]

    return (
      <section id="approach">
        <ResponsiveContainer>
          <div class="heading-group">
            <p class="ui-heading-6">
              <sup>{supertext}</sup>
            </p>
            <PrismicRichText richText={title} />
          </div>
          <div class="split">
            <article class="traditional column">
              <Heading>{approach_traditional[0]['title']}</Heading>
              <Paragraph>{approach_traditional[0]['text']}</Paragraph>
              <prismic-image
                image={approach_traditional[0]['image']}
              />
              <div class="list">
                <Heading level={4}>
                  {approach_traditional[0]['subtitle']}
                </Heading>
                <ul>
                  {approach_traditional__list.map(({ text, icon }) => (
                    <li>
                      <prismic-image image={icon} />
                      <Paragraph>{text}</Paragraph>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
            <article class="web column">
              <Heading>{approach_web[0]['title']}</Heading>
              <Paragraph>{approach_web[0]['text']}</Paragraph>
              <prismic-image image={approach_web[0]['image']} />
              <div class="list">
                <Heading level={4}>{approach_web[0]['subtitle']}</Heading>
                <ul>
                  {approach_web__list.map(({ text, icon }) => (
                    <li>
                      <prismic-image image={icon} />
                      <Paragraph>{text}</Paragraph>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  MicroFrontends = () => {
    const { micro_frontends } = this.data
    const { supertext, title, subtext, image } = micro_frontends[0]

    return (
      <section id="micro-frontends">
        <ResponsiveContainer>
          <div class="wrapper">
            <div class="image-wrapper">
              <prismic-image image={image} />
            </div>
            <div class="heading-group">
              <p class="ui-heading-6">
                <sup>{supertext}</sup>
              </p>
              <PrismicRichText richText={title} />
              <PrismicRichText richText={subtext} paragraphLevel={2} />
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  Plugins = () => {
    const { plugins } = this.data
    const { supertext, title, subtext, image } = plugins[0]

    return (
      <section id="plugins">
        <ResponsiveContainer>
          <div class="wrapper">
            <div class="heading-group">
              <p class="ui-heading-6">
                <sup>{supertext}</sup>
              </p>
              <PrismicRichText richText={title} />
              <Paragraph level={2}>{subtext}</Paragraph>
            </div>
            <div class="image-wrapper">
              <prismic-image image={image} />
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  Security = () => {
    const { security } = this.data
    const { supertext, title, subtext, image } = security[0]

    return (
      <section id="security">
        <ResponsiveContainer>
          <div class="wrapper">
            <div class="image-wrapper">
              <prismic-image image={image} />
            </div>
            <div class="heading-group">
              <p class="ui-heading-6">
                <sup>{supertext}</sup>
              </p>
              <PrismicRichText richText={title} />
              <PrismicRichText richText={subtext} paragraphLevel={2} />
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  Delivery = () => {
    const { delivery } = this.data
    const { supertext, title, subtext, image } = delivery[0]

    return (
      <section id="delivery">
        <ResponsiveContainer>
          <div class="wrapper">
            <div class="heading-group">
              <p class="ui-heading-6">
                <sup>{supertext}</sup>
              </p>
              <PrismicRichText richText={title} />
              <PrismicRichText richText={subtext} paragraphLevel={2} />
            </div>
            <div class="image-wrapper">
              <prismic-image image={image} />
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  SupportGuidance = () => {
    const { support_guidance } = this.data

    return (
      <section id="support-guidance">
        <ResponsiveContainer>
          <div class="wrapper">
            {support_guidance.map(({ image, title, text }) => (
              <article>
                <prismic-image image={image} />
                <Heading level={3}>{title}</Heading>
                <Paragraph level={2}>{text}</Paragraph>
              </article>
            ))}
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  Features = () => {
    const { features, features__list } = this.data
    const { supertext, title, subtext } = features[0]

    return (
      <section id="features">
        <ResponsiveContainer>
          <div class="wrapper">
            <div class="heading-group">
              <p class="ui-heading-6">
                <sup>{supertext}</sup>
              </p>
              <PrismicRichText richText={title} />
              <PrismicRichText richText={subtext} paragraphLevel={2} />
            </div>
            <ul>
              {features__list.map(({ icon, title, text }) => (
                <li>
                  <div class="image-wrapper">
                    <prismic-image image={icon} />
                  </div>
                  <div>
                    <Heading level={4} as="h3">
                      {title}
                    </Heading>
                    <Paragraph>{text}</Paragraph>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  Editions = () => {
    const { editions } = this.data
    const { supertext, title, paragraph_1, paragraph_2, cta_1, image } = editions[0]

    return (
      <section id="editions">
        <ResponsiveContainer>
          <div class="wrapper">
            <div class="heading-group">
              <p class="ui-heading-6">
                <sup>{supertext}</sup>
              </p>
              <PrismicRichText richText={title} />
              <PrismicRichText richText={paragraph_1} paragraphLevel={2} />
              <PrismicRichText richText={paragraph_2} paragraphLevel={2} />
              <div class="cta-row">
                <Button href="#inquiry" anchor kind="round">
                  {cta_1}
                  <span class="arrow"> -&gt;</span>
                </Button>
                {/* <a href="https://ionic.io/contact/sales" class="link btn-link">
                  {cta_2}
                  <span class="arrow"> -&gt;</span>
                </a> */}
              </div>
            </div>
            <div class="image-wrapper">
              <prismic-image image={image} />
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  Demo = () => {
    const { demo } = this.data
    const { supertext, title } = demo[0]

    return (
      <section id="demo">
        <ResponsiveContainer>
          <div class="heading-group" id="inquiry">
            <p class="ui-heading-6">
              <sup>{supertext}</sup>
            </p>
            <Heading level={2}>{title}</Heading>
            <Paragraph>
              Asking for enterprise support from Megabyte Labs can provide your enterprise with valuable advice and consulting that can potentially increase your capital efficiency. Megabyte Labs specializes in integrating open-source software and projects into people's products and businesses, which means they have a deep understanding of the latest industry trends and best practices. By engaging with their support team, you can gain insights into how to leverage open-source technology to optimize your operations, reduce costs, and increase efficiency.
            </Paragraph>
            <Paragraph>
              Additionally, Megabyte Labs' consulting services can help you identify new opportunities to grow your business and generate more revenue. By leveraging their expertise in open-source technology, they can help you identify new ways to improve your products and services, enhance your customer experience, and streamline your operations. This can potentially lead to increased sales, higher margins, and improved profitability. Overall, by asking for enterprise support from Megabyte Labs, you can gain access to a wealth of knowledge and expertise that can help you achieve your business goals and drive long-term success.
            </Paragraph>
            <Paragraph>
              <b class="noshow-noscript">Fill out and submit the form below and we will respond to your inquiry in a timely fashion.</b>
              <noscript>
                <b>Send an e-mail to <a href="mailto:help@megabyte.space">help@megabyte.space</a> and we will respond to you in a timely fashion.</b>
              </noscript>
            </Paragraph>
          </div>
          <capacitor-hubspot-form formId="a24b8d44-bc52-414d-b194-3652c7bab375" />
        </ResponsiveContainer>
      </section>
    )
  };
}
