import { Fragment, h } from '@stencil/core'
import {
  ResponsiveContainer,
  Heading,
  Paragraph,
} from 'ionic-ds-no-fonts'
export const SolutionAnsible = () => {
  return (
    <Fragment>
      <ResponsiveContainer id="what-is" as="section">
        <div class="ui-container">
          <ion-icon class="what-is-info-icon" name="information-circle-outline"></ion-icon>
          <Paragraph class="quote-summary">
            <b>What is Ansible?</b>
          </Paragraph>
          <Paragraph class="quote-summary">
            Ansible is an open-source IT automation tool that provides a simple, yet powerful way to automate software provisioning, configuration management, and application deployment. It was created by Michael DeHaan in 2012 and was later acquired by Red Hat.
        </Paragraph>
          <Paragraph class="quote-summary">
            Ansible uses a declarative language to describe system configurations, which makes it easy to write and understand automation scripts. Ansible playbooks are written in YAML, a human-readable data serialization format, and allow users to define the desired state of the systems they are configuring.
        </Paragraph>
          <Paragraph class="quote-summary">
            One of the key advantages of Ansible is its agentless architecture, which means that it does not require any software to be installed on the target systems. This makes it easy to manage a large number of systems and reduces the overhead of managing software and configurations.
        </Paragraph>
          <Paragraph class="quote-summary">
            Another advantage of Ansible is its ability to automate tasks across multiple systems simultaneously. This allows users to easily manage large-scale deployments and configurations, such as those found in cloud computing environments.
        </Paragraph>
          <Paragraph class="quote-summary">
            Ansible also provides a robust set of modules and plugins, which allows users to automate a wide range of tasks, including network device management, cloud infrastructure management, and application deployment.
        </Paragraph>
          <Paragraph class="quote-summary">
            Finally, Ansible is easy to learn and use, even for users with limited programming or scripting experience. Its simplicity and ease-of-use make it an ideal choice for system administrators, developers, and DevOps teams who want to streamline their workflows and increase their efficiency.
        </Paragraph>
        </div>
      </ResponsiveContainer>
      <ResponsiveContainer id="getting-started" as="section">
        <article class="step">
          <sup class="ui-heading-6">01</sup>
          <div class="heading-group">
            <Heading level={3} id="install">
              Featured Project: Gas Station
            </Heading>
            <Paragraph>
              <a href="https://github.com/megabyte-labs/gas-station" target="_blank" rel="noopener">Gas Station</a> is the predecessor to <a href="https://install.doctor" target="_blank" rel="noopener">Install Doctor</a>. It is a massive Ansible project that can be used to provision both workstations and servers. To support its development, many unique features were included, namely <a href="https://github.com/megabyte-labs/ansibler" target="_blank" rel="noopener">Ansibler</a> and <a href="https://github.com/megabyte-labs/mod-ansible-autodoc" target="_blank" rel="noopener">Ansible Auto-Documentation</a>.
            </Paragraph>
          </div>
          <div class="image-wrapper">
            <webp-image
              src="/assets/img/solutions/gas-station.png"
              alt="Gas Station Ansible project logo graphic"
              class="numbered-pic"
            />
          </div>
        </article>

        <article class="step">
          <sup class="ui-heading-6">02</sup>
          <div class="heading-group">
            <Heading level={3}>Hundreds of Roles</Heading>
            <Paragraph>
              During the development of Gas Station, hundreds of Ansible roles were created. The roles support the same targets that Install Doctor does - Arch Linux, CentOS, Debian, Fedora, macOS, Qubes, and Windows. To view all of the roles, browse through the roles folder of the <a href="https://github.com/megabyte-labs/gas-station" target="_blank" rel="noopener">Gas Station</a> project. Many of the roles are available on <a href="https://galaxy.ansible.com/search?deprecated=false&keywords=professormanhattan&order_by=-relevance&page=1" target="_blank" rel="noopener">Ansible Galaxy</a>.
            </Paragraph>
          </div>
          <div class="image-wrapper">
            <webp-image
              src="/assets/img/solutions/ansible-galaxy-graphic.png"
              alt="Ansible Galaxy illustration"
              class="numbered-pic"
            />
          </div>
        </article>

        <article class="step">
          <sup class="ui-heading-6">03</sup>
          <div class="heading-group">
            <Heading level={3}>
              Molecule Testing
            </Heading>
            <Paragraph>
              Since our Ansible roles and playbooks support a wide range of operating systems, we have done a lot of unique development with Ansible Molecule, which is used to test Ansible software deployments for errors and idempotence.
            </Paragraph>
          </div>
          <div class="image-wrapper">
            <webp-image
              src="/assets/img/solutions/ansible-molecule-graphic.png"
              alt="Ansible Molecule graphic"
              class="numbered-pic"
            />
          </div>
        </article>
      </ResponsiveContainer>
    </Fragment>
  )
}
