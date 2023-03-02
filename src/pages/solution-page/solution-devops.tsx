import { Fragment, h } from '@stencil/core'
import {
  ResponsiveContainer,
  Heading,
  Paragraph,
} from '@ionic-internal/ionic-ds'
export const SolutionDevOps = () => {
  return (
    <Fragment>
      <ResponsiveContainer id="what-is" as="section">
        <div class="ui-container">
          <ion-icon class="what-is-info-icon" name="information-circle-outline"></ion-icon>
          <Paragraph class="quote-summary">
            <b>What is Continuous Integration / Continuous Deployment (CI/CD)?</b>
          </Paragraph>
          <Paragraph class="quote-summary">
            Continuous Integration (CI) and Continuous Delivery (CD) are software development practices that involve automating the building, testing, and deployment of software applications. CI/CD allows developers to deliver new code changes more frequently, with higher quality and greater efficiency, which helps businesses to stay competitive and meet the demands of their customers.
        </Paragraph>
          <Paragraph class="quote-summary">
            Continuous Integration is the process of regularly integrating new code changes into a shared code repository and automatically running tests to ensure that the code is functional and free of bugs. This allows developers to detect and fix errors quickly, reducing the risk of introducing defects into the codebase.
        </Paragraph>
          <Paragraph class="quote-summary">
            Continuous Delivery is the process of automating the deployment of code changes to production environments. This involves automatically building, testing, and packaging code changes, and deploying them to a staging environment for further testing and validation. Once the changes have been validated, they can be automatically deployed to the production environment.
        </Paragraph>
          <Paragraph class="quote-summary">
            CI/CD is absolutely vital for businesses because it provides a number of benefits, including:
        </Paragraph>
          <ul class="quote-summary quote-summary-list">
            <li><b>Faster time-to-market</b>: With CI/CD, developers can release new code changes more frequently, reducing the time it takes to bring new features and functionality to market.</li>
            <li><b>Improved quality</b>: CI/CD helps to ensure that code changes are thoroughly tested before they are deployed, reducing the risk of introducing defects into the production environment.</li>
            <li><b>Increased efficiency</b>: CI/CD automates many of the manual tasks involved in building, testing, and deploying software, freeing up developers to focus on more important tasks.</li>
            <li><b>Better collaboration</b>: CI/CD encourages collaboration between development, testing, and operations teams, enabling them to work together more effectively and deliver better results.</li>
          </ul>
          <Paragraph class="quote-summary">
            Overall, CI/CD helps businesses to deliver high-quality software more quickly and efficiently, which is essential in today's fast-paced and competitive business environment.
        </Paragraph>
        </div>
      </ResponsiveContainer>
      <ResponsiveContainer id="getting-started" as="section">
        <article class="step">
          <sup class="ui-heading-6">01</sup>
          <div class="heading-group">
            <Heading level={3} id="install">
              Continuous Integration / Delivery (CI/CD)
            </Heading>
            <div class="platforms">
              <webp-image
                loading="lazy"
                src="/assets/img/solutions/bitbucket.png"
                alt="BitBucket icon"
                class="vm-icon"
                width="37"
                height="37"
              />
              <webp-image
                loading="lazy"
                src="/assets/img/solutions/github.png"
                alt="GitHub icon"
                class="vm-icon"
                width="37"
                height="37"
              />
              <webp-image
                loading="lazy"
                src="/assets/img/solutions/gitlab.png"
                alt="GitLab icon"
                class="vm-icon"
                width="37"
                height="37"
              />
            </div>
            <Paragraph>
              With CI/CD, we can automate the building, testing, and deployment of your software applications, allowing your development teams to release new features and updates quickly and reliably. Our team of experts can work with you to design and implement a tailored CI/CD solution that meets your specific needs, using the latest tools and best practices in the industry. By implementing CI/CD, your company can improve the quality and stability of your software applications, reduce the risk of deployment errors, and ultimately deliver better value to your customers.
            </Paragraph>
          </div>
          <div class="image-wrapper">
            <webp-image
              src="/assets/img/solutions/ci-cd-graphic.png"
              alt="Continuous Integration and Continuous Delivery illustration"
              class="vm-icon"
            />
          </div>
        </article>

        <article class="step">
          <sup class="ui-heading-6">02</sup>
          <div class="heading-group">
            <Heading level={3}>Infrastructure-as-Code (IaC)</Heading>
            <div class="platforms">
              <webp-image
                loading="lazy"
                src="/assets/img/solutions/install-doctor.png"
                alt="Install Doctor icon"
                class="vm-icon"
                width="37"
                height="37"
              />
              <webp-image
                loading="lazy"
                src="/assets/img/solutions/ansible.png"
                alt="Ansible icon"
                class="vm-icon"
                width="37"
                height="37"
              />
              <webp-image
                loading="lazy"
                src="/assets/img/solutions/pulumi.png"
                alt="Pulumi icon"
                class="vm-icon"
                width="37"
                height="37"
              />
              <webp-image
                loading="lazy"
                src="/assets/img/solutions/terraform.png"
                alt="Terraform icon"
                class="vm-icon"
                width="37"
                height="37"
              />
            </div>
            <Paragraph>
              With IaC, we can help you automate your infrastructure management processes using code, making them more efficient, reliable, and cost-effective. Our team of experts can work with you to design and implement a customized IaC solution that suits your unique needs and requirements, using the latest tools and best practices in the industry. By adopting IaC, your company can gain greater visibility and control over your infrastructure, improve your security posture, and reduce your time to market.
            </Paragraph>
          </div>
          <div class="image-wrapper">
            <webp-image
              src="/assets/img/solutions/iac-graphic.png"
              alt="Infrastructure-as-Code illustration"
              class="vm-icon"
            />
          </div>
        </article>

        <article class="step">
          <sup class="ui-heading-6">03</sup>
          <div class="heading-group">
            <Heading level={3}>
              Monitoring / Logging
            </Heading>
            <div class="platforms">
              <webp-image
                loading="lazy"
                src="/assets/img/solutions/elasticsearch.png"
                alt="ElasticSearch icon"
                class="vm-icon"
                width="37"
                height="37"
              />
              <webp-image
                loading="lazy"
                src="/assets/img/solutions/logstash.png"
                alt="LogStash icon"
                class="vm-icon"
                width="37"
                height="37"
              />
              <webp-image
                loading="lazy"
                src="/assets/img/solutions/kibana.png"
                alt="Kibana icon"
                class="vm-icon"
                width="37"
                height="37"
              />
            </div>
            <Paragraph>
              With open-source tools like ELK (Elasticsearch, Logstash, Kibana), we can help you collect, analyze, and visualize data from your applications and infrastructure in real-time, allowing you to identify issues and optimize system performance quickly. Our team of experts can work with you to design and implement a tailored monitoring and logging solution that meets your specific requirements and business objectives, using the latest open-source technologies and best practices in the industry. By adopting open-source monitoring and logging solutions, your company can reduce your infrastructure costs, improve your system reliability, and gain greater flexibility and control over your monitoring and logging capabilities.
            </Paragraph>
          </div>
          <div class="image-wrapper">
            <webp-image
              src="/assets/img/solutions/logging-graphic.png"
              alt="Monitoring / Logging graphic"
              class="vm-icon"
            />
          </div>
        </article>
      </ResponsiveContainer>
    </Fragment>
  )
}
