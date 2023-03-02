import { Fragment, h } from '@stencil/core'
import {
  ResponsiveContainer,
  Heading,
  Paragraph,
} from '@ionic-internal/ionic-ds'
export const ProductTheBestSites = () => {
  return (
    <Fragment>
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
              We specialize in implementing Continuous Integration/Continuous Delivery (CI/CD) solutions to help streamline your software development process. With CI/CD, we can automate the building, testing, and deployment of your software applications, allowing your development teams to release new features and updates quickly and reliably. Our team of experts can work with you to design and implement a tailored CI/CD solution that meets your specific needs, using the latest tools and best practices in the industry. By implementing CI/CD, your company can improve the quality and stability of your software applications, reduce the risk of deployment errors, and ultimately deliver better value to your customers.
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
              Is your company struggling with manual infrastructure management processes that are time-consuming, error-prone, and expensive? We specialize in implementing Infrastructure as Code (IaC) solutions that can revolutionize the way you manage your IT infrastructure. With IaC, we can help you automate your infrastructure management processes using code, making them more efficient, reliable, and cost-effective. Our team of experts can work with you to design and implement a customized IaC solution that suits your unique needs and requirements, using the latest tools and best practices in the industry. By adopting IaC, your company can gain greater visibility and control over your infrastructure, improve your security posture, and reduce your time to market.
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
