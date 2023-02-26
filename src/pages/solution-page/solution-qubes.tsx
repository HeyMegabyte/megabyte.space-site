import { Fragment, h } from '@stencil/core'
import {
  ResponsiveContainer,
  Heading,
  Paragraph,
} from '@ionic-internal/ionic-ds'
export const SolutionQubes = () => {
  return (
    <Fragment>
      <ResponsiveContainer id="what-is" as="section">
        <ion-icon class="what-is-info-icon" name="information-circle-outline"></ion-icon>
        <Paragraph class="quote-summary">
          <b>What is Qubes OS?</b>
        </Paragraph>
        <Paragraph class="quote-summary">
          Qubes OS is a security-focused, open-source operating system that is designed to provide better security and isolation for its users. Unlike traditional operating systems, Qubes OS uses a unique approach to security called "Security by Compartmentalization."
        </Paragraph>
        <Paragraph class="quote-summary">
          This approach involves separating different applications and tasks into isolated compartments, called "qubes," which are each assigned a specific level of trust. For example, you can have a qube for your personal documents, a qube for browsing the web, and a qube for running sensitive applications. This way, if one qube is compromised, the others remain secure and unaffected.
        </Paragraph>
        <Paragraph class="quote-summary">
          Qubes OS also provides other security features, such as strict isolation of networking and USB devices, enforced memory management, and compartmentalized cryptography. It is designed to be used on a variety of hardware, including laptops and desktops, and supports a range of applications, including web browsing, email, office productivity, and multimedia.
        </Paragraph>
        <Paragraph class="quote-summary">
          Qubes OS is free and open-source, which means that anyone can access the source code and contribute to its development. It is often used by journalists, activists, and security professionals who require a high level of security and privacy in their work.
        </Paragraph>
      </ResponsiveContainer>
      <ResponsiveContainer id="getting-started" as="section">
        <article class="step">
          <sup class="ui-heading-6">01</sup>
          <div class="heading-group">
            <Heading level={3} id="install">
              Install Doctor supports Qubes.
            </Heading>
            <Paragraph>
              <a href="https://install.doctor" target="_blank">Install Doctor</a> is a provisioning tool and framework we developed that can provision systems with optimal settings and software. It also lets you <a href="https://install.doctor/solution/qubes" target="_blank">provision Qubes</a> with a one-liner. The Qubes provisioning process includes a lot of Qubes-specific code including a theme for KDE on dom0.
            </Paragraph>
          </div>
          <div class="image-wrapper">
            <img
              src="/assets/img/products/venn-qubes.png"
              alt="Qubes Install Doctor venn diagram"
              class="vm-icon"
            />
          </div>
        </article>

        <article class="step">
          <sup class="ui-heading-6">02</sup>
          <div class="heading-group">
            <Heading level={3} id="install">
              Industry leading security.
            </Heading>
            <Paragraph>
              Qubes makes significant changes to the desktop experience in order to make computing more secure. We take a step further by configuring Qubes with sensible default settings and settings that improve security.
            </Paragraph>
          </div>
          <div class="image-wrapper">
            <img
              src="/assets/img/solutions/security-graphic.png"
              alt="Desktop security graphic"
              class="vm-icon"
            />
          </div>
        </article>

        <article class="step">
          <sup class="ui-heading-6">03</sup>
          <div class="heading-group">
            <Heading level={3}>Virtualization with other platforms.</Heading>
            <div class="platforms">
              <img
                loading="lazy"
                src="/assets/img/landing/hyperv.png"
                alt="Hyper-V"
                class="vm-icon"
                width="37"
                height="37"
              />
              <img
                loading="lazy"
                src="/assets/img/landing/parallels.png"
                alt="Parallels"
                class="vm-icon"
                width="37"
                height="37"
              />
              <img
                loading="lazy"
                src="/assets/img/landing/qemu.png"
                alt="QEMU"
                class="vm-icon"
                width="37"
                height="37"
              />
              <img
                loading="lazy"
                src="/assets/img/landing/virtualbox.png"
                alt="VirtualBox"
                class="vm-icon"
                width="37"
                height="37"
              />
              <img
                loading="lazy"
                src="/assets/img/landing/vmware.png"
                alt="VMWare"
                class="vm-icon"
                width="37"
                height="37"
              />
            </div>
            <Paragraph>
              Part of what makes Qubes unique is its integration of virtualized desktop environment into an all-encompassing operating system that is designed to never connect to the internet. Our expertise with virtualization does not stop with Qubes. VMWare, Parallels, KVM, Docker, Hyper-V, and VirtualBox are all essential to our eco-system.
            </Paragraph>
          </div>
          <div class="image-wrapper">
            <img
              src="/assets/img/solutions/virtualization.png"
              alt="Virtualization graphic"
              class="vm-icon"
            />
          </div>
        </article>
      </ResponsiveContainer>
    </Fragment>
  )
}
