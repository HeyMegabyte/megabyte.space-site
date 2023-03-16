import { Fragment, h } from '@stencil/core'
import {
  ResponsiveContainer,
  Heading,
  Paragraph,
} from 'ionic-ds-no-fonts'
export const SolutionTypeScript = () => {
  return (
    <Fragment>
      <ResponsiveContainer id="what-is" as="section">
        <div class="ui-container">
          <ion-icon class="what-is-info-icon" name="information-circle-outline"></ion-icon>
          <Paragraph class="quote-summary">
            <b>What is TypeScript / JavaScript?</b>
          </Paragraph>
          <Paragraph class="quote-summary">
            TypeScript and JavaScript are both programming languages that are widely used for building web applications and other software projects. JavaScript is a scripting language that is supported by all major web browsers and is used for client-side scripting, while TypeScript is a superset of JavaScript that adds static typing and other features to make it easier to write and maintain large-scale applications.
        </Paragraph>
          <Paragraph class="quote-summary">
            One of the main reasons why TypeScript and JavaScript are considered some of the best programming languages to choose is their versatility and widespread use. They are used by developers to build everything from simple websites to complex web applications, mobile apps, and even desktop applications. They are also supported by a large and active developer community, which provides a wealth of resources, libraries, and tools to help make development faster and more efficient.
        </Paragraph>
          <Paragraph class="quote-summary">
            In addition, TypeScript and JavaScript are both relatively easy to learn and use, making them accessible to developers of all skill levels. They also allow for rapid prototyping and development, which can help businesses bring products to market faster and more efficiently. Finally, both languages are constantly evolving and improving, with regular updates and new features being added to keep pace with changing technologies and user needs.
        </Paragraph>
        </div>
      </ResponsiveContainer>
      <ResponsiveContainer id="getting-started" as="section">
        <article class="step">
          <sup class="ui-heading-6">01</sup>
          <div class="heading-group">
            <Heading level={3} id="install">
              TypeScript / JavaScript experts.
            </Heading>
            <Paragraph>
              Megabyte Labs is well-versed in TypeScript / JavaScript, delivering high-quality, maintainable code with the language's advanced type system and your expertise in TypeScript / JavaScript development.
            </Paragraph>
          </div>
          <div class="image-wrapper">
            <webp-image
              src="/assets/img/solutions/typescript-1.png"
              alt="TypeScript expert illustration"
              class="numbered-pic"
            />
          </div>
        </article>

        <article class="step">
          <sup class="ui-heading-6">02</sup>
          <div class="heading-group">
            <Heading level={3}>Open-source contributions.</Heading>
            <Paragraph>
              Our team actively contributes to TypeScript and JavaScript projects on GitHub by submitting pull requests, reviewing and merging code changes, addressing issues and bugs, and collaborating with other developers to improve the functionality and performance of these projects.
            </Paragraph>
          </div>
          <div class="image-wrapper">
            <webp-image
              src="/assets/img/solutions/typescript-2.png"
              alt="Open-source TypeScript contributions illustration"
              class="numbered-pic"
            />
          </div>
        </article>

        <article class="step">
          <sup class="ui-heading-6">03</sup>
          <div class="heading-group">
            <Heading level={3}>
              Focus on quality and maintainability.
            </Heading>
            <Paragraph>
              Megabyte Labs creates maintainable and high-quality TypeScript code by adhering to best practices, conducting code reviews, performing automated testing, documenting the codebase thoroughly, and continuously optimizing and refactoring the code for optimal performance and scalability.
            </Paragraph>
          </div>
          <div class="image-wrapper">
            <webp-image
              src="/assets/img/solutions/typescript-3.png"
              alt="Maintainable TypeScript / JavaScript graphic"
              class="numbered-pic"
            />
          </div>
        </article>
      </ResponsiveContainer>
    </Fragment>
  )
}
