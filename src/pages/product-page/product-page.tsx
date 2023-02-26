import { Component, Host, h, Prop, ComponentInterface } from '@stencil/core'

import {
  ResponsiveContainer,
  Heading,
  Paragraph,
} from '@ionic-internal/ionic-ds'

import { ProductLinkBlink } from './product-linkblink'
import { ProductMusicBlobs } from './product-musicblobs'
import { ProductTheBestSites } from './product-thebestsites'
import { ProductInstallDoctor } from './product-installdoctor'


@Component({
  tag: 'product-page',
  styleUrl: 'product-page.scss',
  scoped: true,
})
export class ProductPage implements ComponentInterface {
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
      case 'install-doctor':
        return <ProductInstallDoctor />
      case 'musicblobs':
        return <ProductMusicBlobs />
      case 'linkblink':
        return <ProductLinkBlink />
      case 'thebestsites':
        return <ProductTheBestSites />
    }
  }
  render() {
    return (
      <Host>
        <meta-tags
          page-title={this.framework.name + ' | Megabyte Labs'}
          description={
            'Find out more about ' +
            this.framework.name + ' and how it fits into the Megabyte Labs eco-system.'
          }
        />
        <ResponsiveContainer id="top" as="section">
          <div class="heading-group">
            <img
              width={this.framework.dimensions?.split('x')[0]}
              height={this.framework.dimensions?.split('x')[1]}
              loading="eager"
              src={this.framework.logo}
              alt={this.framework.name}
              class="react"
            />
            <Heading level={2} as="h1">
              {this.framework.name} &amp; Megabyte Labs
            </Heading>
            <Paragraph level={2}>
              Learn about the{' '}
              {this.framework.name}
              {' '}
              brand that Megabyte Labs is responsible for.
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
              <a href="https://gitlab.com/megabyte-labs" target="_blank">
                GitLab repository
            </a>{' '}
            or get started with contributing by checking out the{' '}
              <a href="/docs">
                eco-system documentation
            </a>{' '}
            .
          </Paragraph>
          </ResponsiveContainer>
        </section>

        <ResponsiveContainer id="newsletter">
          <newsletter-signup />
        </ResponsiveContainer>

        <pre-footer />
        <capacitor-site-footer />
      </Host>
    )
  }
}

const solutions = [
  {
    id: 'install-doctor',
    name: 'Install Doctor',
    theme: '#1793d1',
    logo: '/assets/img/products/venn-install-doctor.png',
    dimensions: '252x224',
  },
  {
    id: 'musicblobs',
    name: 'Music Blobs',
    theme: '#212078',
    logo: '/assets/img/products/venn-musicblobs.png',
    dimensions: '252x224',
  },
  {
    id: 'linkblink',
    name: 'LinkBl.ink',
    theme: '#d70a53',
    logo: '/assets/img/products/venn-linkblink.png',
    dimensions: '252x224',
  },
  {
    id: 'thebestsites',
    name: 'The Best Sites',
    theme: '#0B57A4',
    logo: '/assets/img/products/venn-thebestsites.png',
    dimensions: '252x224',
  }
]
