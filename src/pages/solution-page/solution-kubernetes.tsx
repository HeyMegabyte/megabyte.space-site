import { Fragment, h } from '@stencil/core'
import {
  ResponsiveContainer,
  Heading,
  Paragraph,
} from '@ionic-internal/ionic-ds'
import { href } from '@stencil/router'
export const SolutionKubernetes = () => {
  return (
    <Fragment>
      <ResponsiveContainer id="what-is" as="section">
        <div class="ui-container">
          <ion-icon class="what-is-info-icon" name="information-circle-outline"></ion-icon>
          <Paragraph class="quote-summary">
            <b>What is Kubernetes?</b>
          </Paragraph>
          <Paragraph class="quote-summary">
            Kubernetes is an open-source container orchestration platform that is used for deploying, scaling, and managing containerized applications. It provides a highly scalable and resilient infrastructure for deploying and managing complex applications, and enables automated deployment, scaling, and management of containerized applications across multiple nodes.
        </Paragraph>
          <Paragraph class="quote-summary">
            Leveraging Kubernetes experts can be highly beneficial for businesses looking to improve their operations and stay competitive in today's fast-paced digital landscape. Kubernetes experts can help businesses to design and implement highly efficient and scalable infrastructure solutions, streamline their application deployment processes, and optimize their resource utilization.
        </Paragraph>
          <Paragraph class="quote-summary">
            By partnering with Kubernetes experts, businesses can also benefit from improved performance, increased uptime, enhanced security, and reduced infrastructure costs. Additionally, Kubernetes experts can provide valuable guidance and support in developing and implementing effective DevOps practices, such as continuous integration and delivery (CI/CD), which can help businesses to accelerate their time-to-market and improve their overall competitiveness.
        </Paragraph>
        </div>
      </ResponsiveContainer>
      <ResponsiveContainer id="getting-started" as="section">
        <article class="step">
          <sup class="ui-heading-6">01</sup>
          <div class="heading-group">
            <Heading level={3} id="install">
              Kubernetes experts.
            </Heading>
            <Paragraph>
              We have a team of highly skilled and experienced Kubernetes experts who can help you design and implement scalable, secure, and efficient infrastructure solutions that are tailored to your unique business needs, and provide ongoing support and maintenance to ensure your Kubernetes cluster is always running smoothly and meeting your performance goals.
            </Paragraph>
          </div>
          <div class="image-wrapper">
            <webp-image
              src="/assets/img/solutions/kubernetes-1.png"
              alt="Kubernetes experts illustration"
              class="numbered-pic"
            />
          </div>
        </article>

        <article class="step">
          <sup class="ui-heading-6">02</sup>
          <div class="heading-group">
            <Heading level={3}>KubeSphere integrations.</Heading>
            <Paragraph>
              <a href="https://kubesphere.io/" target="_blank" rel="noopener">KubeSphere</a> is a multi-tenant, distributed Kubernetes platform that simplifies the deployment and management of containerized applications in a hybrid cloud environment. Megabyte Labs can integrate KubeSphere into your stack by leveraging our expertise in Kubernetes and cloud infrastructure, and providing customized solutions tailored to your specific business needs, including deployment, migration, monitoring, and support services.
            </Paragraph>
          </div>
          <div class="image-wrapper">
            <webp-image
              src="/assets/img/solutions/kubernetes-2.png"
              alt="KubeSphere illustration"
              class="numbered-pic"
            />
          </div>
        </article>

        <article class="step">
          <sup class="ui-heading-6">03</sup>
          <div class="heading-group">
            <Heading level={3}>
              Docker image optimization experts.
            </Heading>
            <Paragraph>
              Our experts work with you to design performant, functional Docker images catered to your business needs. We leverage technologies like <a {...href('/blog/what-is-dockerslim')}>DockerSlim</a> to minimize the size of your Docker images, with sometimes up to a 90% decrease in Docker image size. At the same time, our experts can improve security by implementing sandboxes like <a href="https://github.com/google/gvisor" target="_blank" rel="noopener">gVisor</a>.
            </Paragraph>
          </div>
          <div class="image-wrapper">
            <webp-image
              src="/assets/img/solutions/kubernetes-3.png"
              alt="Docker optimization experts graphic"
              class="numbered-pic"
            />
          </div>
        </article>
      </ResponsiveContainer>
    </Fragment>
  )
}
