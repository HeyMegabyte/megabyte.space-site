import { Fragment, h } from '@stencil/core'
import {
  ResponsiveContainer,
  Heading,
  Paragraph,
} from '@ionic-internal/ionic-ds'
export const SolutionWordPress = () => {
  return (
    <Fragment>
      <ResponsiveContainer id="what-is" as="section">
        <div class="ui-container">
          <ion-icon class="what-is-info-icon" name="information-circle-outline"></ion-icon>
          <Paragraph class="quote-summary">
            <b>What is WordPress?</b>
          </Paragraph>
          <Paragraph class="quote-summary">
            WordPress is a free and open-source content management system (CMS) that is used by millions of websites around the world. It allows users to easily create and manage their own websites, without needing to have advanced coding skills or knowledge.
        </Paragraph>
          <Paragraph class="quote-summary">
            One of the main reasons why WordPress is a great CMS to choose is its ease of use and flexibility. It has a simple and intuitive interface, which makes it easy to create and manage content, such as blog posts, pages, and media files. It also supports a wide range of plugins and themes, which can be used to customize the appearance and functionality of the website to suit individual needs and preferences.
        </Paragraph>
          <Paragraph class="quote-summary">
            Another advantage of WordPress is its robust and active developer community. This community regularly releases updates and new features, which help to keep the platform secure, stable, and up-to-date with the latest technologies and trends. Additionally, there are many resources and tutorials available online, which can help users to troubleshoot issues or learn how to use the platform more effectively.
        </Paragraph>
          <Paragraph class="quote-summary">
            Finally, WordPress is highly scalable and can be used for a wide range of applications, from personal blogs to e-commerce sites and even large corporate websites. It can also be easily integrated with other platforms and tools, making it a versatile and powerful solution for many different types of websites and businesses.
        </Paragraph>
        </div>
      </ResponsiveContainer>
      <ResponsiveContainer id="getting-started" as="section">
        <article class="step">
          <sup class="ui-heading-6">01</sup>
          <div class="heading-group">
            <Heading level={3} id="install">
              WordPress sites in minutes.
            </Heading>
            <Paragraph>
              Megabyte Labs makes amazing WordPress sites in minutes by utilizing pre-built templates, integrating powerful plugins and customizing them according to your needs, thereby streamlining the development process and delivering high-quality and visually appealing websites in a timely and efficient manner.            </Paragraph>
          </div>
          <div class="image-wrapper">
            <webp-image
              src="/assets/img/solutions/wordpress-1.png"
              alt="WordPress expert illustration"
              class="numbered-pic"
            />
          </div>
        </article>

        <article class="step">
          <sup class="ui-heading-6">02</sup>
          <div class="heading-group">
            <Heading level={3}>Custom themes and plugins.</Heading>
            <Paragraph>
              Launch a suite of web services via Docker Swarm and KubeSphere. Access all your machines over a VPN subnet (via Tailscale) and host SSO-protected web apps (via CloudFlare Teams).
            </Paragraph>
          </div>
          <div class="image-wrapper">
            <webp-image
              src="/assets/img/solutions/wordpress-2.png"
              alt="Wordpress custom themes and plugins illustration"
              class="numbered-pic"
            />
          </div>
        </article>

        <article class="step">
          <sup class="ui-heading-6">03</sup>
          <div class="heading-group">
            <Heading level={3}>
              More than just WordPress.
            </Heading>
            <div class="platforms">
              <webp-image
                loading="lazy"
                src="/assets/img/solutions/wordpress.png"
                alt="WordPress"
                class="vm-icon"
                width="37"
                height="37"
              />
              <webp-image
                loading="lazy"
                src="/assets/img/solutions/strapi.png"
                alt="Strapi"
                class="vm-icon"
                width="37"
                height="37"
              />
              <webp-image
                loading="lazy"
                src="/assets/img/solutions/drupal.png"
                alt="Drupal"
                class="vm-icon"
                width="37"
                height="37"
              />
              <webp-image
                loading="lazy"
                src="/assets/img/solutions/joomla.png"
                alt="Joomla"
                class="vm-icon"
                width="37"
                height="37"
              />
              <webp-image
                loading="lazy"
                src="/assets/img/solutions/kentico.png"
                alt="Kentico"
                class="vm-icon"
                width="37"
                height="37"
              />
            </div>
            <Paragraph>
              Our team has experience creating and maintaining more than just WordPress sites. Some of the CMS frameworks we have used include Strapi, Drupal, Joomla, and Kentico.
            </Paragraph>
          </div>
          <div class="image-wrapper">
            <webp-image
              src="/assets/img/solutions/wordpress-3.png"
              alt="Alternative CMS graphic"
              class="numbered-pic"
            />
          </div>
        </article>
        <article class="step">
          <sup class="ui-heading-6">04</sup>
          <div class="heading-group">
            <Heading level={3}>E-commerce development and optimization.</Heading>
            <div class="platforms">
              <webp-image
                loading="lazy"
                src="/assets/img/solutions/magento.png"
                alt="Magento"
                class="vm-icon"
                width="81"
                height="37"
              />
              <webp-image
                loading="lazy"
                src="/assets/img/solutions/woocommerce.png"
                alt="WooCommerce"
                class="vm-icon"
                width="45"
                height="37"
              />
            </div>
            <Paragraph>
              Our extensive experience and expertise in developing cutting-edge solutions that are tailored to meet the unique needs of each client is highlighted with our ability to create and maintain powerful e-commerce solutions.
            </Paragraph>
          </div>
          <div class="image-wrapper">
            <webp-image
              src="/assets/img/solutions/wordpress-4.png"
              alt="E-commerce illustration"
              class="numbered-pic"
            />
          </div>
        </article>
      </ResponsiveContainer>
    </Fragment>
  )
}
