import { Component, h, Host, State } from '@stencil/core'
import {
  ResponsiveContainer,
  Col,
  Grid,
  Heading,
  Breakpoint,
  Button,
  PrismicRichText,
  Paragraph,
} from '@ionic-internal/ionic-ds'
import { href } from '@stencil/router'

@Component({
  tag: 'landing-page',
  styleUrl: 'landing-page.scss',
  scoped: true,
})
export class LandingPage {
  data: any = { "top": [{ "type": "heading1", "text": "Multi-OS provisioning made easy.", "spans": [] }, { "type": "paragraph", "text": "Megabyte Labs is a free provisioning tool compatible with most operating systems that lets you define the state of your operating system. With it, you can re-format often and provision your devices rapidly. Without any customization, it provisions an expertly configured eco-system of popular, free, open-source GitHub projects. It also provides a framework for defining your ideal configurations with as little work as possible.", "spans": [], "note": "By default, it installs an editor-curated collection of the most well-received projects on GitHub along with optimized settings." }], "top__hero": { "dimensions": { "width": 545, "height": 610 }, "alt": "layered stack of phone app showing capacitor in the middle", "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/ffa25bb6-a032-44e4-b2f6-b83c5a73226f_capacitor-homepage-top-0%402x.png?auto=compress,format&rect=0,0,1089,1219&w=545&h=610", "2x": { "dimensions": { "width": 1089, "height": 1220 }, "alt": "layered stack of phone app showing capacitor in the middle", "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/ffa25bb6-a032-44e4-b2f6-b83c5a73226f_capacitor-homepage-top-0%402x.png?auto=compress,format&rect=0,0,1089,1220&w=1089&h=1220" } }, "top__icons": { "dimensions": { "width": 193, "height": 25 }, "alt": "Archlinux, CentOS, Debian, Fedora, macOS, Qubes, Ubuntu, and Windows icons", "copyright": null, "url": "https://megabyte.space/assets/img/landing/supported-os-icon.png", "2x": { "dimensions": { "width": 385, "height": 50 }, "alt": "Archlinux, CentOS, Debian, Fedora, macOS, Qubes, Ubuntu, and Windows icons", "copyright": null, "url": "https://megabyte.space/assets/img/landing/supported-os-icon-2x.png" } }, "top__ctas": [{ "primary": "Get Started", "secondary": "Explore Features" }], "top__link": "Customize your build", "started": [{ "type": "heading2", "text": "Get started easily.", "spans": [{ "start": 12, "end": 19, "type": "em" }] }], "started__list": [{ "number": "01", "title": "Get started with a one-liner and guided prompts.", "text": "It is incredibly easy to get started with Megabyte Labs. Run the one-liner and you will be guided through interactive prompts where you can input any missing information." }, { "number": "02", "title": "Customize the script with your own fork.", "text": "Fork the Megabyte Labs project on GitHub and use the same convienient script to provision your devices by defining an environment variable with your username/project-name." }, { "number": "03", "title": "Test it out in a VM with Vagrant.", "text": "Test out Megabyte Labs before provisioning your main workstations with a one-liner. The script will install Vagrant, ensure a suitable virtualization platform is installed, and then provision a VM." }, { "number": "04", "title": "Automate everything.", "text": "Pass in your sensitive data as environment variables or include them as encrypted secrets stored in your fork for a completely automated one-line installation." }, { "number": "05", "title": "Manage software across operating systems.", "text": "Leverage our custom installer and define package requirements in a cross-OS way by defining the OS-specific package names software a YAML file." }, { "number": "06", "title": "Pin all your plugins, packages, and extensions.", "text": "Configure Megabyte Labs to install your favorite packages while provisioning your device by defining them in YAML." }], "started__icons": [], "ebook": [{ "background": { "dimensions": { "width": 1216, "height": 320 }, "alt": "See-through tiles", "copyright": null, "url": "https://megabyte.space/assets/img/landing/see-thru-tiles.png", "2x": { "dimensions": { "width": 2432, "height": 640 }, "alt": "See-through tiles", "copyright": null, "url": "https://megabyte.space/assets/img/landing/see-thru-tiles-2x.png" } }, "book": { "dimensions": { "width": 364, "height": 343 }, "alt": "Book cover with title reading \"Provisioning Operating Systems with Megabyte Labs\"", "copyright": null, "url": "https://megabyte.space/assets/img/landing/ebook-text-box.png", "2x": { "dimensions": { "width": 728, "height": 686 }, "alt": "Book cover with title reading \"Provisioning Operating Systems with Megabyte Labs\"", "copyright": null, "url": "https://megabyte.space/assets/img/landing/ebook-text-box-2x.png" } }, "text": [{ "type": "paragraph", "text": "Provision your computing environments faster. Our free guide details the benefits of leveraging Megabyte Labs to define the state of your PCs.", "spans": [{ "start": 0, "end": 45, "type": "em" }] }], "cta1": "Read the free eBook" }], "native": [{ "type": "heading2", "spans": [{ "start": 16, "end": 42, "type": "em" }], "text": "Developer-first open-source." }], "native__list": [{ "icon": { "dimensions": {}, "alt": "Coding icon", "copyright": null, "url": "https://megabyte.space/assets/img/landing/icon-coding.png" }, "item": [{ "type": "heading4", "spans": [], "text": "Developer-first" }, { "type": "paragraph", "spans": [], "text": "Tools and products that place the developer first, a key to rapid and effective engineering." }] }, { "icon": { "dimensions": {}, "alt": "Open-source icon", "copyright": null, "url": "https://megabyte.space/assets/img/landing/icon-open-source.png" }, "item": [{ "type": "heading4", "spans": [], "text": "Open-source" }, { "type": "paragraph", "spans": [], "text": "Pay nothing. Leverage our superior, free, open-source projects. Save time and money." }] }, { "icon": { "dimensions": {}, "alt": "Community icon", "copyright": null, "url": "https://megabyte.space/assets/img/landing/icon-community.png" }, "item": [{ "type": "heading4", "spans": [], "text": "Community-powered" }, { "type": "paragraph", "spans": [], "text": "Leverage the power of our community to get answers from subject matter experts." }] }], "features": [{ "type": "heading2", "text": "Consistent features, any operating system.", "spans": [{ "start": 21, "end": 44, "type": "em" }] }], "features__link": "Explore Features", "features__list": [{ "icon": { "dimensions": { "width": 84, "height": 68 }, "alt": "Camera icon", "copyright": null, "url": "https://megabyte.space/assets/img/landing/camera-icon.png" }, "item": [{ "type": "heading4", "text": "Stunning UI", "spans": [] }, { "type": "paragraph", "text": "Both KDE and GNOME Linux systems are configured to use our stunning Sweet-based theme and boot screens are sleek, without useless log messages.", "spans": [] }] }, { "icon": { "dimensions": { "width": 84, "height": 68 }, "alt": "File system icon", "copyright": null, "url": "https://megabyte.space/assets/img/landing/file-system-icon.png" }, "item": [{ "type": "heading4", "text": "File System", "spans": [] }, { "type": "paragraph", "text": "Read-only network file sharing folder, back-ups to S3 buckets, and integrations with OS-specific technologies like BTRFS.", "spans": [] }] }, { "icon": { "dimensions": { "width": 68, "height": 68 }, "alt": "Antenna icon", "copyright": null, "url": "https://megabyte.space/assets/img/landing/pin-icon.png" }, "item": [{ "type": "heading4", "text": "Pin Everything", "spans": [] }, { "type": "paragraph", "text": "Our system allows you to pin everything into your configuration. Keep track of your favorite addons / tools / extensions by pinning software packages, Chrome extensions, VSCode extensions, and more.", "spans": [] }] }, { "icon": { "dimensions": { "width": 72, "height": 68 }, "alt": "Spherical rings icon", "copyright": null, "url": "https://megabyte.space/assets/img/landing/sphere-icon.png" }, "item": [{ "type": "heading4", "text": "Developer-First", "spans": [] }, { "type": "paragraph", "text": "The default configuration is designed to accomodate the needs of developers by including development software and power-user tools like fully-enhanced terminal settings.", "spans": [] }] }, { "icon": { "dimensions": { "width": 60, "height": 68 }, "alt": "Bell icon", "copyright": null, "url": "https://megabyte.space/assets/img/landing/notifications-icon.png" }, "item": [{ "type": "heading4", "text": "Notifications", "spans": [] }, { "type": "paragraph", "text": "Monitor your devices via a personal web dashboard and receive notifications when something goes awry.", "spans": [] }] }, { "icon": { "dimensions": { "width": 68, "height": 68 }, "alt": "Person with circle around icon", "copyright": null, "url": "https://megabyte.space/assets/img/landing/network-icon.png" }, "item": [{ "type": "heading4", "text": "Network", "spans": [] }, { "type": "paragraph", "text": "Connect to your devices / services anywhere with a VPN-based LAN and SSO-protected web services.", "spans": [] }] }, { "icon": { "dimensions": { "width": 68, "height": 68 }, "alt": "Three encompassing circles icon", "copyright": null, "url": "https://megabyte.space/assets/img/landing/three-circles-icon.png" }, "item": [{ "type": "heading4", "text": "Multi-Layer Security", "spans": [] }, { "type": "paragraph", "text": "Utilize multiple layers of pre-configured security features like app-specific firewalls, sandboxing, and honeypots.", "spans": [] }] }, { "icon": { "dimensions": { "width": 68, "height": 64 }, "alt": "Slider adjustment icon", "copyright": null, "url": "https://megabyte.space/assets/img/landing/configure-icon.png" }, "item": [{ "type": "heading4", "text": "Configurable", "spans": [] }, { "type": "paragraph", "text": "Easily customize your own version of Megabyte Labs and host it, optionally bundled with your encrypted secrets, on GitHub.", "spans": [] }] }], "framework": [{ "type": "heading2", "spans": [{ "start": 15, "end": 42, "type": "em" }], "text": "Next-generation tech solutions." }, { "type": "paragraph", "spans": [], "text": "We take pride in using only the best open-source technologies to provide our clients with reliable, scalable, and innovative solutions." }], "framework__list": [{ "logo": { "dimensions": {}, "alt": "Ansible logo tile", "copyright": null, "url": "https://megabyte.space/assets/img/landing/ansible-box.png", "2x": {} }, "link": "/solution/ansible" }, { "logo": { "dimensions": {}, "alt": "GitLab CI/CD logo tile", "copyright": null, "url": "https://megabyte.space/assets/img/landing/cicd-box.png", "2x": {} }, "link": "/solution/devops" }, { "logo": { "dimensions": {}, "alt": "Cordova logo tile", "copyright": null, "url": "https://megabyte.space/assets/img/landing/cordova-box.png", "2x": {} }, "link": "/solution/hybrid" }, { "logo": { "dimensions": {}, "alt": "Qubes logo tile", "copyright": null, "url": "https://megabyte.space/assets/img/landing/qubes-box.png", "2x": {} }, "link": "/solution/qubes" }, { "logo": { "dimensions": {}, "alt": "Rust logo tile", "copyright": null, "url": "https://megabyte.space/assets/img/landing/rust-box.png", "2x": {} }, "link": "/solution/rust" }, { "logo": { "dimensions": {}, "alt": "TypeScript logo tile", "copyright": null, "url": "https://megabyte.space/assets/img/landing/typescript-box.png", "2x": {} }, "link": "/solution/typescript" }, { "logo": { "dimensions": {}, "alt": "WordPress logo tile", "copyright": null, "url": "https://megabyte.space/assets/img/landing/wordpress-box.png", "2x": {} }, "link": "/solution/wordpress" }, { "logo": { "dimensions": {}, "alt": "Kubernetes logo tile", "copyright": null, "url": "https://megabyte.space/assets/img/landing/kubernetes-box.png", "2x": {} }, "link": "/solution/kubernetes" }], "products": [{ "type": "heading2", "spans": [{ "start": 20, "end": 42, "type": "em" }], "text": "Gorgeous interfaces, innovative products." }, { "type": "paragraph", "spans": [{ "start": 13, "end": 39, "type": "hyperlink", "data": { "target": "_blank", "link_type": "Web", "url": "https://musicblobs.com" } }, { "start": 41, "end": 58, "type": "hyperlink", "data": { "target": "_blank", "link_type": "Web", "url": "https://linkbl.ink" } }, { "start": 75, "end": 95, "type": "hyperlink", "data": { "target": "_blank", "link_type": "Web", "url": "https://install.doctor" } }], "text": "Full-fledged Angular reference projects, free web services, and innovative provisioning systems with stunning, intuitive experiences are some of the brands and projects we have developed." }], "products__list": [{ "logo": { "dimensions": {}, "alt": "Install Doctor logo tile", "copyright": null, "url": "https://megabyte.space/assets/img/landing/install-doctor-box.png", "2x": {} }, "link": "https://install.doctor" }, { "logo": { "dimensions": {}, "alt": "Music Blobs logo tile", "copyright": null, "url": "https://megabyte.space/assets/img/landing/musicblobs-box.png", "2x": {} }, "link": "https://musicblobs.com" }, { "logo": { "dimensions": {}, "alt": "LinkBlink logo tile", "copyright": null, "url": "https://megabyte.space/assets/img/landing/linkblink-box.png", "2x": {} }, "link": "https://linkbl.ink" }, { "logo": { "dimensions": {}, "alt": "The Best Sites logo tile", "copyright": null, "url": "https://megabyte.space/assets/img/landing/thebestsites-box.png", "2x": {} }, "link": "https://thebestsites.com" }], "tweets": [{ "title": [{ "type": "heading2", "spans": [{ "start": 23, "end": 46, "type": "em" }], "text": "What people are saying about Megabyte Labs." }] }], "tweets__list": [{ "name": "Brian Zalewski", "handle": "@HillBillyHack3r", "text": [{ "type": "paragraph", "spans": [{ "start": 0, "end": 13, "type": "hyperlink", "data": { "target": "_blank", "link_type": "Web", "url": "https://twitter.com/MegabyteLabs" } }], "text": "@MegabyteLabs FTW!" }], "image": { "dimensions": {}, "alt": "Brian Zalewski Twitter profile picture", "copyright": null, "url": "https://megabyte.space/assets/img/landing/twitter-brian-zalewski.png", "2x": {} }, "verified": false }], "tweets__bottom": [{ "emoji": "", "text": [{ "type": "paragraph", "spans": [{ "start": 40, "end": 79, "type": "em" }], "text": "The Megabyte Labs community is growing. Connect with us, your opinion matters." }] }], "tweets__bottom__list": [{ "icon": { "dimensions": {}, "alt": "Twitter icon", "copyright": null, "url": "https://megabyte.space/assets/img/landing/twitter-icon.png" }, "text": "Follow us on Twitter", "link": { "url": "https://twitter.com/MegabyteLabs", "target": "_blank" } }, { "icon": { "dimensions": {}, "alt": "Github icon", "copyright": null, "url": "https://megabyte.space/assets/img/landing/github-icon.png" }, "text": "Join us on GitHub", "link": { "url": "https://github.com/megabyte-labs", "target": "_blank" } }, { "icon": { "dimensions": {}, "alt": "Slack icon", "copyright": null, "url": "https://megabyte.space/assets/img/landing/chat-icon.png" }, "text": "Connect on Slack", "link": { "url": "https://megabyte-labs.slack.com", "target": "_blank" } }], "cta": [{ "image": { "dimensions": {}, "alt": "Raised platforms with app icons", "copyright": null, "url": "https://megabyte.space/assets/img/landing/cap-enterprise-cta.png", "2x": {} }, "title": [{ "type": "heading2", "spans": [{ "start": 25, "end": 59, "type": "em" }], "text": "Supercharge your workflow with enterprise-grade solutions." }], "text": [{ "type": "paragraph", "spans": [{ "start": 0, "end": 21, "type": "em" }], "text": "Ready for enterprise. Augment your enterprise with open-source subject matter experts." }], "cta1": "Learn more" }], "companies": "Diverse experience in industry-leading technologies, software, libraries, and APIs, ensuring top-notch results", "companies__list": [{ "logo": { "dimensions": {}, "alt": "Ionic logo", "copyright": null, "url": "https://megabyte.space/assets/img/landing/tech/logo-ionic.png" } }, { "logo": { "dimensions": {}, "alt": "Angular logo", "copyright": null, "url": "https://megabyte.space/assets/img/landing/tech/logo-angular.png" } }, { "logo": { "dimensions": {}, "alt": "Android logo", "copyright": null, "url": "https://megabyte.space/assets/img/landing/tech/logo-android.png" } }, { "logo": { "dimensions": {}, "alt": "iOS logo", "copyright": null, "url": "https://megabyte.space/assets/img/landing/tech/logo-ios.png" } }, { "logo": { "dimensions": {}, "alt": "Microsoft logo", "copyright": null, "url": "https://megabyte.space/assets/img/landing/tech/logo-microsoft.png" } }, { "logo": { "dimensions": {}, "alt": "RedHat logo", "copyright": null, "url": "https://megabyte.space/assets/img/landing/tech/logo-redhat.png" } }, { "logo": { "dimensions": {}, "alt": "Docker logo", "copyright": null, "url": "https://megabyte.space/assets/img/landing/tech/logo-docker.png" } }, { "logo": { "dimensions": {}, "alt": "VirtualBox logo", "copyright": null, "url": "https://megabyte.space/assets/img/landing/tech/logo-virtualbox.png" } }, { "logo": { "dimensions": {}, "alt": "Go logo", "copyright": null, "url": "https://megabyte.space/assets/img/landing/tech/logo-go.png" } }, { "logo": { "dimensions": {}, "alt": "VMWare Logo", "copyright": null, "url": "https://megabyte.space/assets/img/landing/tech/logo-vmware.png" } }, { "logo": { "dimensions": {}, "alt": "Python logo", "copyright": null, "url": "https://megabyte.space/assets/img/landing/tech/logo-python.png" } }, { "logo": { "dimensions": {}, "alt": "Ubuntu logo", "copyright": null, "url": "https://megabyte.space/assets/img/landing/tech/logo-ubuntu.png" } }, { "logo": { "dimensions": {}, "alt": "Google Cloud Platform logo", "copyright": null, "url": "https://megabyte.space/assets/img/landing/tech/logo-gcp.png" } }, { "logo": { "dimensions": {}, "alt": "Firebase logo", "copyright": null, "url": "https://megabyte.space/assets/img/landing/tech/logo-firebase.png" } }, { "logo": { "dimensions": {}, "alt": "Chrome logo", "copyright": null, "url": "https://megabyte.space/assets/img/landing/tech/logo-chrome.png" } }, { "logo": { "dimensions": {}, "alt": "Arduino logo", "copyright": null, "url": "https://megabyte.space/assets/img/landing/tech/logo-arduino.png" } }], "get_started": [{ "type": "heading2", "text": "Ready to get started?", "spans": [{ "start": 9, "end": 21, "type": "em" }] }, { "type": "paragraph", "text": "Dive in and start provisioning your devices with Megabyte Labs", "spans": [] }], "get_started2": [{ "title": "Want to learn more?", "text": "Find out more about our polished, open-source web applications and tools" }], "get_started__ctas": [{ "primary": "Browse Code", "secondary": "Explore Documentation" }], "whitepaper_ad": { "image": { "dimensions": { "width": 512, "height": 383 }, "alt": "book cover with title \"Building cross-platform apps with capacitor\"", "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/a003d72b-bed4-40df-814a-c7a8fa2767bf_capacitor-whitepaper-ad-0%402x.png?auto=compress,format&rect=0,0,1024,766&w=512&h=383", "2x": { "dimensions": { "width": 1024, "height": 766 }, "alt": "book cover with title \"Building cross-platform apps with capacitor\"", "copyright": null, "url": "https://images.prismic.io/ionicframeworkcom/a003d72b-bed4-40df-814a-c7a8fa2767bf_capacitor-whitepaper-ad-0%402x.png?auto=compress,format&rect=0,0,1024,766&w=1024&h=766" } }, "text": [{ "line1": "See when and why to use Capacitor to build cross-platform apps.", "line2": "We wrote a guide to help you get started." }], "cta": "Read the Guide" }, "announcement": { "tag_text": "Blog", "desktop_text": "Announcing Megabyte Labs, a Multi-OS Provision System", "mobile_text": "Megabyte Labs, a Multi-OS Provision System", "link": { "link_type": "Web", "url": "/blog/megabyte-labs" } } }

  @State() selectedCodeTab: string = 'notifications';
  @State() ebookModalOpen = false;

  render() {
    const {
      // Top,
      // Started,
      Native,
      Companies,
      // Features,
      Framework,
      Products,
      Tweets,
      Cta,
      // Ebook,
      // IoniconfCta,
    } = this

    return (
      <Host>
        <meta-tags
          pageTitle="Megabyte Labs: Enterprise-Grade Open-Source Solutions"
          description={
            'Innovative solutions for businesses and developers. Join the open-source movement and unlock limitless potential for your projects.'
          }
        />
        <site-header class="heading-container" sticky={true} />
        <top-parallax />
        {/* <Top /> */}
        {/* <IoniconfCta /> */}
        {/* <Started / > */}
        {/* <Ebook /> */}
        <Native />
        {/*<Features /> */}
        <Framework />
        <Companies />
        <Products />
        <Tweets />
        <Cta />
        <pre-footer />
        <capacitor-site-footer />
      </Host>
    )
  }

  Top = () => {
    const { Announcement } = this
    const { top, top__ctas, top__link, top__hero, top__icons } = this.data
    const { primary, secondary } = top__ctas[0]
    return (
      <section id="top">
        <div class="background"></div>
        <ResponsiveContainer>
          <div class="heading-group">
            <Announcement />
            <PrismicRichText richText={top} paragraphLevel={2} />
            <div class="buttons">
              <Button
                kind="round"
                anchor
                {...href('/docs')}
                class="primary"
              >
                {primary} <span class="arrow"> -&gt;</span>
              </Button>
              <Button
                kind="round"
                variation="light"
                anchor
                {...href('/docs')}
                class="secondary"
              >
                {secondary}
              </Button>
            </div>
            <a class="link | ui-paragraph-4" {...href('/docs/customization')}>
              {top__link}
              <span class="arrow"> -&gt;</span>
            </a>
            <prismic-image
              loading="eager"
              image={top__icons}
              width="91"
              height="16"
            />
          </div>
          <div class="image-wrapper">
            <prismic-image loading="eager" image={top__hero} />
          </div>
        </ResponsiveContainer>
      </section>
    )
  };

  Announcement = () => {
    const {
      tag_text,
      desktop_text,
      mobile_text,
      link,
    } = this.data.announcement
    const { target, url } = link

    const newUrl = url.replace(window.location.origin, '')

    return (
      <a
        id="announcement"
        class="feature__register"
        href={newUrl}
        target={target}
        rel={target ? 'noopener' : undefined}
      >
        <div class="tag">{tag_text}</div>
        <Breakpoint sm={true} display="inline-block" class="text">
          <span class="text__content">
            {desktop_text} <span class="arrow">-&gt;</span>
          </span>
        </Breakpoint>
        <Breakpoint xs={true} sm={false} display="inline-block" class="text">
          <span class="text__content">
            {mobile_text} <span class="arrow">-&gt;</span>
          </span>
        </Breakpoint>
      </a>
    )
  };

  // IoniconfCta = () => {
  //   return (
  //     <section id="ioniconf-cta">
  //       <ResponsiveContainer>
  //         <div class="section-wrapper">
  //           <div class="start">
  //             <webp-image
  //               class="logo"
  //               src="/assets/img/landing/logo-ioniconf.png"
  //               width="359.38"
  //               height="147.54"
  //               alt="ioniconf logo"
  //             />
  //           </div>
  //           <header>
  //             <div class="overline">May 25 / 100% online / 100% Free</div>
  //             <Heading>Join us at Ioniconf 2022</Heading>
  //             <Paragraph>
  //               Ioniconf is Ionic's annual conference celebrating the future of
  //               cross-platform, the Web, and the makers behind it.&nbsp;
  //               <a
  //                 href="https://ionic.io/ioniconf"
  //                 target="_blank"
  //                 rel="noopener"
  //               >
  //                 Register today,
  //               </a>
  //               for free.
  //             </Paragraph>
  //             <Button
  //               anchor={true}
  //               href="https://ionic.io/ioniconf"
  //               rel="noopener"
  //               target="_blank"
  //               kind="round"
  //               size="md"
  //             >
  //               Register Free&nbsp;
  //               <span style={{ letterSpacing: '0px' }}> -&gt;</span>
  //             </Button>
  //           </header>
  //         </div>
  //       </ResponsiveContainer>
  //     </section>
  //   );
  // };

  Started = () => {
    const { started, started__list } = this.data

    const panels = [
      <code-tabs
        data={{
          tabs: ['Linux/macOS', 'Windows', 'Qubes'],
          languages: ['shell-session'],
          code: [
            `
bash <(curl -sSL https://megabyte.space/start)
`, //-----------------------------------
            `
iex ((New-Object System.Net.WebClient).DownloadString('https://megabyte.space/windows'))
`, //-----------------------------------
            `
qvm-run --pass-io sys-firewall "curl -sSL https://megabyte.space/qubes" > ~/setup.sh && bash ~/setup.sh
`
          ],
        }}
      />,
      <code-tabs
        data={{
          tabs: ['Linux/macOS', 'Windows', 'Qubes'],
          languages: ['shell-session'],
          code: [
            `
export START_REPO=my-gh-user/my-fork-name
bash <(curl -sSL https://megabyte.space/start)
`, //-----------------------------------
            `
$env:START_REPO = 'my-gh-user/my-fork-name'
iex ((New-Object System.Net.WebClient).DownloadString('https://megabyte.space/windows'))
`, //-----------------------------------
            `
export START_REPO=my-gh-user/my-fork-name
qvm-run --pass-io sys-firewall "curl -sSL https://megabyte.space/qubes" > ~/setup.sh && bash ~/setup.sh
`
          ],
        }}
      />,
      <code-tabs
        data={{
          tabs: ['Linux/macOS', 'Windows'],
          languages: ['shell-session'],
          code: [
            `
bash <(curl -sSL https://megabyte.space/vagrant)
`, //-----------------------------------
            `
iex ((New-Object System.Net.WebClient).DownloadString('https://megabyte.space/windows-vagrant'))
`
          ],
        }}
      />,
      <code-tabs
        data={{
          tabs: ['Linux/macOS', 'Windows', 'Qubes'],
          languages: ['shell-session'],
          code: [
            `
echo "Headlessly provisioning a Linux / macOS / Unix machine"
export HEADLESS_INSTALL=true
export SOFTWARE_GROUP=Standard-Desktop
export FULL_NAME="Joe Shmoe"
export PRIMARY_EMAIL="help@megabyte.space"
export PUBLIC_SERVICES_DOMAIN="megabyte.space"
export CLOUDFLARE_API_TOKEN="cf-pat-xXP999kUu888777"
export TAILSCALE_AUTH_KEY="tailscale-auth-key-xXP999kUu888777"
export START_REPO=my-gh-user/my-fork-name
bash <(curl -sSL https://megabyte.space/start)
`, //-----------------------------------
            `
Write-Host "Headlessly provisioning a Windows machine"
$env:HEADLESS_INSTALL = true
$env:SOFTWARE_GROUP = Standard-Desktop
$env:FULL_NAME = 'Joe Shmoe'
$env:PRIMARY_EMAIL = 'help@megabyte.space'
$env:PUBLIC_SERVICES_DOMAIN = 'megabyte.space'
$env:CLOUDFLARE_API_TOKEN = 'cf-pat-xXP999kUu888777'
$env:TAILSCALE_AUTH_KEY = 'tailscale-auth-key-xXP999kUu888777'
$env:START_REPO = 'my-gh-user/my-fork-name'
iex ((New-Object System.Net.WebClient).DownloadString('https://megabyte.space/windows'))

`, //-----------------------------------
            `
echo "Headlessly provisioning Qubes from dom0"
export HEADLESS_INSTALL=true
export SOFTWARE_GROUP=Standard-Desktop
export FULL_NAME="Joe Shmoe"
export PRIMARY_EMAIL="help@megabyte.space"
export PUBLIC_SERVICES_DOMAIN="megabyte.space"
export CLOUDFLARE_API_TOKEN="cf-pat-xXP999kUu888777"
export TAILSCALE_AUTH_KEY="tailscale-auth-key-xXP999kUu888777"
export START_REPO=my-gh-user/my-fork-name
qvm-run --pass-io sys-firewall "curl -sSL https://megabyte.space/qubes" > ~/setup.sh
bash ~/setup.sh
`
          ],
        }}
      />,
      <code-snippet
        language="yaml"
        code={`
---
softwarePackages:
  imagemagick:
    _bin: convert
    apk: imagemagick
    apt:
      - imagemagick
      - libx11-dev
    brew: imagemagick
    choco: imagemagick
    dnf:fedora: imagemagick
    scoop: imagemagick
`}
      />,
      <code-snippet
        language="yaml"
        code={`
---
chromeExtensions:
  - automa/infppggnoaenmfagbfknfkancpbljcca
  - bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb
firefoxAddOns:
  - automa
  - bitwarden-password-manager
  - chatgpt-for-google
  - firefox-translations
  - floccus
  - ublock-origin

`}
      />,
    ]

    return (
      <ResponsiveContainer id="started" as="section">
        <div class="heading-group">
          <PrismicRichText richText={started} />
        </div>
        {started__list.map(({ number, title, text }, i) => (
          <div class="step">
            <sup class="ui-heading-6">{number}</sup>
            <div class="heading-panel-wrapper">
              <div class="heading-wrapper">
                <Heading>{title}</Heading>
                {text ? <Paragraph>{text}</Paragraph> : null}
              </div>
              <div class="panel">{panels[i]}</div>
            </div>
          </div>
        ))}
      </ResponsiveContainer>
    )
  };

  Ebook = () => {
    const { ebook } = this.data
    const { text, cta1: cta, background, book } = ebook[0]

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

  Native = () => {
    const { native, native__list } = this.data
    const dimensions = ['64x64', '64x64', '64x64']

    return (
      <ResponsiveContainer id="native" as="section">
        <div class="heading-group">
          <PrismicRichText richText={native} />
        </div>
        <Grid>
          {native__list.map(({ icon, item }, i: number) => (
            <Col xs={6} sm={4} cols={12}>
              <prismic-image
                image={icon}
                width={dimensions[i].split('x')[0]}
                height={dimensions[i].split('x')[1]}
              />
              <PrismicRichText richText={item} />
            </Col>
          ))}
        </Grid>
      </ResponsiveContainer>
    )
  };

  Features = () => {
    const { features, features__list, features__link } = this.data
    const dimensions = [
      '48x48',
      '48x48',
      '48x48',
      '48x48',
      '48x48',
      '48x48',
      '48x48',
      '48x48',
    ]

    return (
      <section id="features">
        <ResponsiveContainer>
          <div class="heading-group">
            <PrismicRichText richText={features} />
            <a {...href('/docs/features')} class="link | ui-heading-4">
              {features__link}
              <span class="arrow">-&gt;</span>
            </a>
          </div>
          <Grid>
            {features__list.map(({ icon, item }, i: number) => (
              <Col xs={6} sm={4} md={3} cols={12}>
                <prismic-image
                  image={icon}
                  width={dimensions[i].split('x')[0]}
                  height={dimensions[i].split('x')[1]}
                />
                <PrismicRichText richText={item} />
              </Col>
            ))}
          </Grid>
        </ResponsiveContainer>
      </section>
    )
  };

  Framework = () => {
    const { framework, framework__list } = this.data

    const logoTile = (logo: any) => (
      <prismic-image image={logo} width="272" height="200" />
    )

    return (
      <ResponsiveContainer id="framework" as="section">
        <div class="heading-group">
          <PrismicRichText richText={framework} paragraphLevel={2} />
        </div>
        <Grid>
          {framework__list.map(({ logo, link }) => (
            <Col sm={3} cols={6}>
              {link ? <a {...href(link)}>{logoTile(logo)}</a> : logoTile(logo)}
            </Col>
          ))}
        </Grid>
      </ResponsiveContainer>
    )
  };

  Products = () => {
    const { products, products__list } = this.data

    const logoTile = (logo: any) => (
      <prismic-image image={logo} width="272" height="200" />
    )

    return (
      <ResponsiveContainer id="products" as="section">
        <div class="heading-group">
          <PrismicRichText richText={products} paragraphLevel={2} />
        </div>
        <Grid>
          {products__list.map(({ logo, link }) => (
            <Col sm={3} cols={6}>
              {link ? <a {...href(link)} target="_blank" rel="noopener">{logoTile(logo)}</a> : logoTile(logo)}
            </Col>
          ))}
        </Grid>
      </ResponsiveContainer>
    )
  };

  Tweets = () => {
    const {
      tweets,
      tweets__list,
      tweets__bottom,
      tweets__bottom__list,
    } = this.data
    const { title } = tweets[0]
    const { emoji, text } = tweets__bottom[0]

    return (
      <section id="tweets">
        <ResponsiveContainer>
          <div class="heading-group">
            <PrismicRichText richText={title} />
          </div>
          <div class="tweets">
            {tweets__list.map(({ name, handle, text, image, verified }, i) => (
              <article class="tweet" key={i}>
                <div class="title-row">
                  <prismic-image image={image} />
                  <div class="title">
                    <Heading level={5} as="h3">
                      {name}
                      {verified && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="#1DA1F2"
                            d="M512 268c0 17.9-4.3 34.5-12.9 49.7a92 92 0 01-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1a86.8 86.8 0 01-65.4 28.6 85.6 85.6 0 01-32.6-6.3 99.2 99.2 0 01-34.6 39.7A86 86 0 01256 512a86.8 86.8 0 01-49.7-14.9 97 97 0 01-34.3-40 85.3 85.3 0 01-32.6 6.3 87.8 87.8 0 01-65.7-28.6 96 96 0 01-26.3-81.7 92.7 92.7 0 01-34.6-35.4A100.3 100.3 0 010 268c0-19 4.8-36.5 14.3-52.3a88.1 88.1 0 0138.3-35.1 98.9 98.9 0 01-6.3-34.3 96 96 0 0127.4-69.1A88.1 88.1 0 01172 54.9a99.2 99.2 0 0134.6-39.7A86.7 86.7 0 01256 0c17.9 0 34.4 5.1 49.4 15.1A100 100 0 01340 54.8a85.3 85.3 0 0132.6-6.3c25.5 0 47.3 9.5 65.4 28.6a96.7 96.7 0 0127.1 69.1c0 12.6-1.9 24-5.7 34.3a88.1 88.1 0 0138.3 35.1A100.4 100.4 0 01512 268zm-266.9 77.1l105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4a19.5 19.5 0 00-13.7-2.9c-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8a17 17 0 00-13.1-5.4c-5 .2-9.3 2-13.1 5.4a17.5 17.5 0 00-5.1 12.9c0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z"
                          />
                        </svg>
                      )}
                    </Heading>
                    <Paragraph level={6}>{handle}</Paragraph>
                  </div>
                  <svg
                    width="16"
                    height="13"
                    viewBox="0 0 16 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 1.54036C15.41 1.80104 14.7794 1.97708 14.1149 2.05833C14.793 1.65208 15.3151 1.00885 15.5592 0.24375C14.9252 0.619531 14.2234 0.89375 13.474 1.03932C12.8739 0.399479 12.0195 0 11.0769 0C9.26298 0 7.79487 1.46927 7.79487 3.28047C7.79487 3.53776 7.822 3.78828 7.87963 4.02865C5.15024 3.89323 2.72939 2.58646 1.1121 0.599219C0.830685 1.08333 0.667938 1.6487 0.667938 2.24792C0.667938 3.38542 1.25111 4.39089 2.13266 4.97995C1.59017 4.96641 1.08159 4.81745 0.640814 4.57031V4.61094C0.640814 6.20208 1.77326 7.52578 3.27527 7.82708C3.00064 7.90156 2.70905 7.94219 2.41068 7.94219C2.20047 7.94219 1.99364 7.92188 1.7936 7.88125C2.21064 9.18464 3.42445 10.1326 4.86205 10.1596C3.73978 11.0398 2.32253 11.5646 0.783217 11.5646C0.518754 11.5646 0.257682 11.5477 0 11.5172C1.44776 12.4583 3.17355 13 5.02479 13C11.0701 13 14.3725 7.99974 14.3725 3.66302C14.3725 3.52083 14.3691 3.37865 14.3624 3.23984C15.0032 2.77604 15.5592 2.20052 16 1.54036Z"
                      fill="#1DA1F2"
                    />
                  </svg>
                </div>

                <PrismicRichText
                  richText={text}
                  paragraphLevel={4}
                  className="content"
                />
              </article>
            ))}
          </div>
          <div class="bottom">
            <Paragraph class="emoji">{emoji}</Paragraph>
            <PrismicRichText richText={text} paragraphLevel={1} />
            <div class="links">
              {tweets__bottom__list.map(({ icon, text, link }) => (
                <a href={link.url} target={link.target}>
                  <article>
                    <prismic-image image={icon} />
                    <Heading level={4}>{text}</Heading>
                  </article>
                </a>
              ))}
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    )
  };
  Companies = () => {
    const { companies, companies__list } = this.data
    //array structure matches css div placement
    const dimensions = [
      //groups of 4 (2 groups of 2)
      //groups of 2
      '93x32',
      '118x32',
      '37x32',
      '48x32',
      '107x32',
      '100x32',
      '38x32',
      '32x32',
      '86x32',
      '32x32',
      '108x32',
      '38x32',
      '56x32',
      '114x32',
      '117x32',
      '47x32',
    ]
    return (
      <ResponsiveContainer id="technologies" as="section">
        <div class="heading-group">
          <Paragraph level={2}>{companies}</Paragraph>
        </div>
        <div class="images">
          {dimensions.map((x, i) => (
            <prismic-image
              image={companies__list[i].logo}
              width={x.split('x')[0]}
              height={x.split('x')[1]}
            />
          ))}
        </div>
      </ResponsiveContainer>
    )
  };

  Cta = () => {
    const { cta } = this.data
    const { image, title, text, cta1 } = cta[0]

    //const { companies__list2 } = this.data;

    const { get_started2: get_started, get_started__ctas } = this.data
    const { title: get_started_title, text: get_started_text } = get_started[0]
    const { primary, secondary } = get_started__ctas[0]

    /*const dimensions = [
      '33x42',
      '31x42',
      '32x36',
      '34x34',
      '51x30',
      '35x35',
      '58x25',
      '35x35',
    ];*/

    return (
      <section id="multisection">
        <ResponsiveContainer>
          <div id="cta">
            <PrismicRichText richText={title} />
            <div class="wrapper">
              <div class="card">
                <prismic-image image={image} class="background" />
                <div class="heading-group">
                  <PrismicRichText richText={text} paragraphLevel={1} />
                  <Button kind="round" {...href('/enterprise')}>
                    {cta1} <span class="arrow"> -&gt;</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div id="companies">
          </div>
          <div id="get-started">
            <div class="heading-group">
              <Heading level={2}>{get_started_title}</Heading>
              <Paragraph level={2}>{get_started_text}</Paragraph>
            </div>
            <div class="ctas">
              <Button
                href="https://gitlab.com/megabyte-labs"
                kind="round"
                anchor
                class="secondary"
                rel="noopener"
                target="_blank"
                color="cyan"
              >
                {primary}
                <span class="arrow"> -&gt;</span>
              </Button>
              <Button
                {...href('/docs')}
                anchor
                kind="round"
                variation="light"
                class="primary"
                color="cyan"
              >
                {secondary}
                <span class="arrow"> -&gt;</span>
              </Button>
            </div>
          </div>
        </ResponsiveContainer>
        <div class="homepage-blog-article">
          <Paragraph>
            <b>Dear Open-Source Sugar Plum,</b>
          </Paragraph>
          <Paragraph>
            At Megabyte Labs, we take pride in being the umbrella company for a large ecosystem of open-source projects that are powered by the open-source community. Whether you are a business looking for a technology consulting firm or an open-source community member, we are the golden standard for leveraging free, industry-leading, open-source solutions that increase the capital efficiency of your business.
            </Paragraph>
          <Paragraph>
            Our team of skilled technology professionals has extensive knowledge of open-source solutions and can help you identify the most suitable open-source solutions for your business. By leveraging these solutions, you can reduce your IT costs and improve the overall efficiency of your business operations.
            </Paragraph>
          <Paragraph>
            Additionally, we can help you optimize your business processes by automating routine tasks and streamlining workflows. Our skilled technology professionals can create custom solutions that meet your specific business needs and free up your employees' time, increase their productivity, and reduce the risk of human errors.
            </Paragraph>
          <Paragraph>
            Moreover, as the umbrella company for a large ecosystem of open-source projects, we are deeply rooted in the open-source community. We understand the value of community-driven projects and are committed to supporting them. We are constantly seeking ways to contribute to the open-source community, and our team is always up-to-date with the latest technology trends and best practices.
            </Paragraph>
          <Paragraph>
            Whether you are a business looking for a technology consulting firm or an open-source community member, Megabyte Labs is the golden standard for leveraging free, industry-leading, open-source solutions. With our team of skilled technology professionals and commitment to the open-source community, we can help take your business to the next level and increase its capital efficiency. <a {...href('/enterprise#demo')}>Contact us today</a> to learn more about how we can help you reach your business goals.
          </Paragraph>
          <div class="homepage-blog-article-signature">
            <webp-image
              loading="lazy"
              src="/assets/img/landing/signature.png"
              alt="Heart Megabyte Labs"
              width="290"
              height="81"
            />
          </div>
          <Paragraph class="fun-fact">
            <small><b>SEO Fun Fact:</b> This comical letter / blib is down here at the bottom because search engines need a sizable amount of text to properly index a website. <i>SEO is another thing we do.</i></small>
          </Paragraph>
          <Paragraph class="fun-fact">
            <small><b>AI Fun Fact:</b> The content in this article and most of the content across the entire site (apart from the documentation) was written using ChatGPT AI. <i>AI is another thing we do.</i></small>
          </Paragraph>
        </div>
      </section>
    )
  };
}
