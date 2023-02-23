import { Component, Host, h, Prop, ComponentInterface } from '@stencil/core';

import {
  ResponsiveContainer,
  Heading,
  Paragraph,
} from '@ionic-internal/ionic-ds';

import { SolutionUbuntu } from './solution-ubuntu';
import { SolutionFedora } from './solution-fedora';
import { SolutionCentOS } from './solution-centos';
import { SolutionDebian } from './solution-debian';
import { SolutionMacOS } from './solution-macos';
import { SolutionArchlinux } from './solution-archlinux';
import { SolutionQubes } from './solution-qubes';
import { SolutionWindows } from './solution-windows';

@Component({
  tag: 'solution-page',
  styleUrl: 'solution-page.scss',
  scoped: true,
})
export class SolutionPage implements ComponentInterface {
  @Prop() solutionId: string;

  framework: {
    id: string;
    name: string;
    theme: string;
    logo: string;
    dimensions: string;
  };
  componentWillLoad() {
    this.framework = solutions.find(entry => entry.id === this.solutionId);
  }
  getComponent() {
    switch (this.solutionId) {
      case 'archlinux':
        return <SolutionArchlinux />;
      case 'centos':
        return <SolutionCentOS />;
      case 'debian':
        return <SolutionDebian />;
      case 'fedora':
        return <SolutionFedora />;
      case 'macos':
        return <SolutionMacOS />;
      case 'qubes':
        return <SolutionQubes />;
      case 'ubuntu':
        return <SolutionUbuntu />;
      case 'windows':
        return <SolutionWindows />;
    }
  }
  render() {
    return (
      <Host>
        <meta-tags
          page-title={'Provision ' + this.framework.name + ' with Megabyte Labs'}
          description={
            'Headlessly deploy a fully configured workstation on ' +
            this.framework.name
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
              Get more out of{' '}
              {this.framework.name}
              {' '}
              by provisioning it with Megabyte Labs
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

        <ResponsiveContainer id="newsletter">
          <newsletter-signup />
        </ResponsiveContainer>

        <pre-footer />
        <capacitor-site-footer />
      </Host>
    );
  }
}

const solutions = [
  {
    id: 'archlinux',
    name: 'Archlinux',
    theme: '#1793d1',
    logo: '/assets/img/solutions/archlinux.png',
    dimensions: '252x224',
  },
  {
    id: 'centos',
    name: 'CentOS',
    theme: '#212078',
    logo: '/assets/img/solutions/centos.png',
    dimensions: '252x224',
  },
  {
    id: 'debian',
    name: 'Debian',
    theme: '#d70a53',
    logo: '/assets/img/solutions/debian.png',
    dimensions: '252x224',
  },
  {
    id: 'fedora',
    name: 'Fedora',
    theme: '#0B57A4',
    logo: '/assets/img/solutions/fedora.png',
    dimensions: '252x224',
  },
  {
    id: 'macos',
    name: 'macOS',
    theme: '#000000',
    logo: '/assets/img/solutions/macos.png',
    dimensions: '252x224',
  },
  {
    id: 'qubes',
    name: 'Qubes',
    theme: '#3874d8',
    logo: '/assets/img/solutions/qubes.png',
    dimensions: '252x224',
  },
  {
    id: 'ubuntu',
    name: 'Ubuntu',
    theme: '#dd4814',
    logo: '/assets/img/solutions/ubuntu.png',
    dimensions: '252x224',
  },
  {
    id: 'windows',
    name: 'Windows',
    theme: '#00a1f1',
    logo: '/assets/img/solutions/windows.png',
    dimensions: '252x224',
  },
];
