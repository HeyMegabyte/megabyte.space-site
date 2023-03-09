import { Component, Host, h, Prop, ComponentInterface } from '@stencil/core'

import {
  ResponsiveContainer,
  Heading,
  Paragraph,
} from '@ionic-internal/ionic-ds'

import { SolutionHybrid } from './solution-hybrid'
import { SolutionDevOps } from './solution-devops'
import { SolutionRust } from './solution-rust'
import { SolutionWordPress } from './solution-wordpress'
import { SolutionQubes } from './solution-qubes'
import { SolutionTypeScript } from './solution-typescript'
import { SolutionKubernetes } from './solution-kubernetes'
import { SolutionAnsible } from './solution-ansible'


@Component({
  tag: 'solution-page',
  styleUrl: 'solution-page.scss',
  scoped: true,
})
export class SolutionPage implements ComponentInterface {
  @Prop() solutionId: string

  framework: {
    id: string
    name: string
    theme: string
    logo: string
    dimensions: string
  }
  componentWillLoad() {
    this.framework = solutions.find(entry => entry.id === this.solutionId)
  }
  getComponent() {
    switch (this.solutionId) {
      case 'ansible':
        return <SolutionAnsible />
      case 'devops':
        return <SolutionDevOps />
      case 'qubes':
        return <SolutionQubes />
      case 'kubernetes':
        return <SolutionKubernetes />
      case 'hybrid':
        return <SolutionHybrid />
      case 'wordpress':
        return <SolutionWordPress />
      case 'rust':
        return <SolutionRust />
      case 'typescript':
        return <SolutionTypeScript />
    }
  }

  Demo = () => {
    return (
      <section id="demo">
        <ResponsiveContainer>
          <div class="heading-group">
            <Heading id="demo-heading" level={2}>Megabyte Labs Enterprise Support</Heading>
            <Paragraph>Get it done the easy way by leveraging our team of <b>{this.framework.name} experts</b>.</Paragraph>
            <Paragraph>Guaranteed response SLAs to support your business needs. Our professional support team is on-hand to help you troubleshoot and address issues.</Paragraph>
            <Paragraph>Our team of experts will work with your teams to provide open-source based recommendations, strategies, and custom solutions that fits your unique goals and challenges. We are here to help ensure your success.</Paragraph>
            <Paragraph>Use the form below to send us a message or ask questions about how Megabyte Labs can help you with your specific needs.</Paragraph>
          </div>
          <capacitor-hubspot-form formId="a24b8d44-bc52-414d-b194-3652c7bab375" />
        </ResponsiveContainer>
      </section>
    )
  };

  render() {
    return (
      <Host>
        <meta-tags
          pageTitle={'Enterprise ' + this.framework.name + ' solutions'}
          description={
            'Find out how Megabyte Labs utilizes ' +
            this.framework.name + ' and learn about how you can leverage our expertise to improve your business.'
          }
        />
        <site-header class="heading-container" sticky={true} />
        <ResponsiveContainer id="top" as="section">
          <div class="heading-group">
            <webp-image
              width="301"
              height="167"
              loading="eager"
              src={this.framework.logo}
              alt={this.framework.name}
              class="react"
            />
            <Heading level={2} as="h1">
              {this.framework.name} &amp; Megabyte Labs
            </Heading>
            <Paragraph level={2}>
              Leverage our team of{' '}
              {this.framework.name}
              {' '}
              open-source subject matter experts
            </Paragraph>
            {/* <Button
              anchor
              href="#install"
              id="get-started"
              style={{ '--button-background': this.framework.theme }}
            >
              Get Started
            </Button> */}
          </div>
        </ResponsiveContainer>
        {this.getComponent()}
        <section id="continue">
          <ResponsiveContainer>
            <Heading level={3}>Continue your Megabyte Labs journey.</Heading>
            <Paragraph>
              This is only the beginning. Browse through the Megabyte Labs{' '}
              <a href="https://gitlab.com/megabyte-labs" target="_blank" rel="noopener">
                GitLab repository
              </a>{' '}
              or get started with contributing by checking out the{' '}
              <a href='/docs'>
                eco-system documentation
              </a>{' '}
              .
            </Paragraph>
          </ResponsiveContainer>
        </section>
        {this.Demo()}
        <pre-footer />
        <capacitor-site-footer />
      </Host>
    )
  }
}

const solutions = [
  {
    id: 'ansible',
    name: 'Ansible',
    theme: '#1793d1',
    logo: '/assets/img/solutions/venn-ansible.png',
    dimensions: '252x224',
  },
  {
    id: 'typescript',
    name: 'TypeScript / JavaScript',
    theme: '#212078',
    logo: '/assets/img/solutions/venn-typescript.png',
    dimensions: '252x224',
  },
  {
    id: 'qubes',
    name: 'Qubes',
    theme: '#d70a53',
    logo: '/assets/img/solutions/venn-qubes.png',
    dimensions: '252x224',
  },
  {
    id: 'devops',
    name: 'DevOps',
    theme: '#0B57A4',
    logo: '/assets/img/solutions/venn-devops.png',
    dimensions: '252x224',
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    theme: '#000000',
    logo: '/assets/img/solutions/venn-kubernetes.png',
    dimensions: '252x224',
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    theme: '#3874d8',
    logo: '/assets/img/solutions/venn-wordpress.png',
    dimensions: '252x224',
  },
  {
    id: 'rust',
    name: 'Rust',
    theme: '#dd4814',
    logo: '/assets/img/solutions/venn-rust.png',
    dimensions: '252x224',
  },
  {
    id: 'hybrid',
    name: 'Hybrid App Development',
    theme: '#00a1f1',
    logo: '/assets/img/solutions/venn-hybrid.png',
    dimensions: '252x224',
  },
]
