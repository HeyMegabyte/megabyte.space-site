import { Fragment, h } from '@stencil/core'
import {
  ResponsiveContainer,
  Heading,
  Paragraph,
} from '@ionic-internal/ionic-ds'
export const SolutionHybrid = () => {
  return (
    <Fragment>
      <ResponsiveContainer id="what-is" as="section">
        <div class="ui-container">
          <ion-icon class="what-is-info-icon" name="information-circle-outline"></ion-icon>
          <Paragraph class="quote-summary">
            <b>What are cross-platform hybrid apps?</b>
          </Paragraph>
          <Paragraph class="quote-summary">
            Cross-platform hybrid web apps are software applications that can run on multiple platforms and operating systems, such as Android, iOS, and web browsers. These apps are built using web technologies like HTML, CSS, and JavaScript, and are wrapped in a native container that allows them to be deployed and run natively on different platforms.
        </Paragraph>
          <Paragraph class="quote-summary">
            One of the key advantages of cross-platform hybrid web apps is that they can be developed once and deployed on multiple platforms, reducing the time and cost associated with building native apps for each platform. This makes them a cost-effective solution for businesses that want to reach a wider audience without having to develop and maintain separate apps for different platforms.
        </Paragraph>
          <Paragraph class="quote-summary">
            Another advantage of cross-platform hybrid web apps is that they provide a consistent user experience across different platforms. Since they are built using web technologies, they can be designed to look and feel the same on all platforms, which can help to improve user satisfaction and reduce support and maintenance costs.
        </Paragraph>
          <Paragraph class="quote-summary">
            Cross-platform hybrid web apps are also easy to update and maintain, since changes can be made to the codebase once and deployed to all platforms simultaneously. This reduces the time and effort required to maintain multiple codebases, and ensures that all users have access to the latest version of the app.
        </Paragraph>
          <Paragraph class="quote-summary">
            Finally, cross-platform hybrid web apps can leverage existing web development skills, tools, and frameworks, which can help to reduce the learning curve and accelerate development. This makes them an ideal solution for businesses that want to develop apps quickly and efficiently, without having to invest in new development skills or tools.
        </Paragraph>
          <Paragraph class="quote-summary">
            Overall, cross-platform hybrid web apps are a cost-effective solution that can help businesses to reach a wider audience, provide a consistent user experience, and reduce the time and cost associated with app development and maintenance.
        </Paragraph>
        </div>
      </ResponsiveContainer>
      <ResponsiveContainer id="getting-started" as="section">
        <article class="step">
          <sup class="ui-heading-6">01</sup>
          <div class="heading-group">
            <Heading level={3} id="install">
              Cost-effective apps.
            </Heading>
            <Paragraph>
              Cross-platform hybrid apps are cost-effective, as they can run on multiple platforms and devices with minimal development effort. This means that your company can reach a wider audience without breaking the bank.
            </Paragraph>
          </div>
          <div class="image-wrapper">
            <webp-image
              src="/assets/img/solutions/hybrid-1.png"
              alt="Cordova app development graphic"
              class="vm-icon"
            />
          </div>
        </article>

        <article class="step">
          <sup class="ui-heading-6">02</sup>
          <div class="heading-group">
            <Heading level={3}>Multiple platforms, one code base.</Heading>
            <Paragraph>
              Cross-platform hybrid apps are easy to maintain and update, as changes can be made to the codebase once and deployed across multiple platforms simultaneously. This saves time and resources, allowing your company to focus on other important aspects of your business.
            </Paragraph>
          </div>
          <div class="image-wrapper">
            <webp-image
              src="/assets/img/solutions/hybrid-2.png"
              alt="Hybrid app development graphic"
              class="vm-icon"
            />
          </div>
        </article>

        <article class="step">
          <sup class="ui-heading-6">03</sup>
          <div class="heading-group">
            <Heading level={3}>
              Proven track record.
            </Heading>
            <Paragraph>
              Megabyte Labs has a proven track record of delivering high-quality cross-platform hybrid web apps to satisfied clients. With your team's expertise and experience, you can be confident that your project will be completed on time, within budget, and to the highest standards.
            </Paragraph>
          </div>
          <div class="image-wrapper">
            <webp-image
              src="/assets/img/solutions/hybrid-3.png"
              alt="Cross-platform app development graphic"
              class="vm-icon"
            />
          </div>
        </article>
      </ResponsiveContainer>
    </Fragment>
  )
}
