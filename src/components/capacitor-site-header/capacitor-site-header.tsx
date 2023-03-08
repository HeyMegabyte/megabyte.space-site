import {
  Element,
  Component,
  ComponentInterface,
  Host,
  Prop,
  State,
  h,
} from '@stencil/core'
import { href } from '@stencil/router'
import Router, { docsVersionHref } from '../../router'
import { Button } from '@ionic-internal/ionic-ds'
import { JSXBase } from '@stencil/core/internal'
import { DocsTemplate } from 'src/data.server/models'
//import { Translation } from '../../icons';

@Component({
  tag: 'site-header',
  styleUrl: 'capacitor-site-header.scss',
  scoped: true,
})
export class SiteHeader implements ComponentInterface {
  @Element() elm: HTMLElement
  @Prop() template: DocsTemplate
  @Prop() includeLogo = true;
  @Prop() includeBurger = false;
  @Prop() theme: 'light' | 'dark' = 'dark';
  @Prop() sticky = true;

  @State() collapsed = false;
  @State() expanded = false;
  @State() scrolled = false;

  private routeListener = Symbol();
  private links: { [key: string]: HTMLElement } = {};
  // Could be an announcement banner or platform bar
  private heightAboveBar = 72;

  componentWillLoad() {
    this.createHeaderObserver()
    this.createRouteListener()
  }

  createHeaderObserver() {
    const opts = {
      root: document.body,
      rootMargin: `-${this.heightAboveBar + 1}px 0px 0px 0px`,
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(entries => {
      this.scrolled = !(entries[0].intersectionRatio < 1)
    }, opts)

    observer.observe(this.elm)
  }

  createRouteListener() {
    if (window.hasOwnProperty(this.routeListener)) return

    window[this.routeListener] = true
    Router.on('change', this.handleActive)
  }

  handleActive = (url: URL) => {
    const activeRoute = url.pathname.split('/')[1]

    for (const [key, value] of Object.entries(this.links)) {
      if (key === activeRoute) {
        value.classList.add('active')
      } else {
        value.classList.remove('active')
      }
    }
  };

  isActive(path: string): boolean {
    const prefix = new RegExp('^' + path, 'gm')
    const regexRes = prefix.test(Router.path)

    return regexRes
  }

  toggleExpanded = () => (this.expanded = !this.expanded);

  render() {
    const { expanded, template, includeLogo, includeBurger } = this

    return (
      <Host
        class={{
          scrolled: this.scrolled,
          [`theme--${this.theme}`]: true,
          sticky: this.sticky,
        }}
      >
        <site-backdrop
          visible={expanded}
          onClick={() => this.toggleExpanded()}
          mobileOnly
        />

        <header>
          {includeBurger ? <app-menu-toggle /> : null}

          {includeLogo ? (
            <a {...href('/')} aria-label="homepage link">
              {capacitorLogo()}
            </a>
          ) : null}

          {/* <div class="jobs-wrapper">
            <a
              class="jobs"
              href="https://ionic.io/about/jobs#positions"
              target="_blank"
              rel="noopener"
            >
              <svg
                width="12"
                height="12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="sparkle"
              >
                <g clip-path="url(#clip0)" fill="#D0FDFF">
                  <path d="M4.4 2.9a.65.65 0 011.22 0l.8 2.25c.07.18.22.33.4.4l2.25.8a.65.65 0 010 1.22l-2.25.8a.65.65 0 00-.4.4l-.8 2.25a.65.65 0 01-1.22 0l-.8-2.25a.65.65 0 00-.4-.4l-2.25-.8a.65.65 0 010-1.22l2.25-.8c.18-.07.33-.22.4-.4l.8-2.25zM9.04 1.2c.15-.4.72-.4.87 0l.29.81c.04.13.14.23.27.28l.8.29c.41.14.41.72 0 .87l-.8.28a.46.46 0 00-.27.28l-.3.8c-.14.41-.71.41-.86 0l-.29-.8a.46.46 0 00-.28-.28l-.8-.28a.46.46 0 010-.87l.8-.3a.46.46 0 00.28-.27l.29-.8zM1.5.48c.1-.3.5-.3.6 0l.24.65c.03.1.1.16.2.2l.65.23c.29.1.29.5 0 .61l-.65.24c-.1.03-.17.1-.2.2l-.23.65c-.1.28-.51.28-.62 0l-.23-.66a.32.32 0 00-.2-.2l-.65-.23a.32.32 0 010-.6l.65-.24c.1-.04.17-.1.2-.2l.23-.65z" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <path fill="#fff" d="M0 0h12v12H0z" />
                  </clipPath>
                </defs>
              </svg>
              We're hiring
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon arrow"
                width="14"
                height="12"
                viewBox="0 0 512 512"
              >
                <title>Arrow Forward</title>
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="M268 112l144 144-144 144M392 256H100"
                />
              </svg>
            </a>
          </div> */}

          <div class="docs-search-wrapper desktop-only">
            <docs-search theme={this.theme} />
          </div>
          <a
            {...href('https://gitlab.com/megabyte-labs')}
            target="_blank"
            rel="noopener"
            class={{
              'ui-paragraph-4': true,
              'active': template === 'cli',
            }}
          >
            Code
          </a>
          <a
            {...href(docsVersionHref('/docs'))}
            class={{
              'ui-paragraph-4': true,
              'active': template === 'docs',
            }}
          >
            Docs
          </a>

          <div class="separator desktop-only"></div>

          <nav
            class={{
              routes: true,
              expanded: this.expanded,
            }}
          >
            <div class="routes__header">
              <a aria-label="homepage link" class="logo-wrapper" {...href('/')}>
                {capacitorLogo()}
              </a>
              <button class="close" aria-label="close">
                <svg
                  onClick={this.toggleExpanded}
                  width="10"
                  height="10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 9L1 1M9 1L1 9"
                    stroke="#B2BECD"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div class="docs-search-wrapper mobile-only">
              <docs-search />
            </div>
            <a
              {...href('/blog')}
              class="ui-paragraph-4"
              ref={el => (this.links.blog = el)}
            >
              Blog
            </a>
            <a
              {...href('/community')}
              class="ui-paragraph-4"
              ref={el => (this.links.community = el)}
            >
              Community
            </a>
            <a
              {...href('/enterprise')}
              class="ui-paragraph-4"
              ref={el => (this.links.enterprise = el)}
            >
              Enterprise
            </a>
          </nav>

          <div class="separator desktop-only"></div>

          <more-button onClick={() => this.toggleExpanded()} />

          <div class="ctas">
            <a
              href="https://github.com/megabyte-labs"
              target="_blank"
              title="Megabyte Labs on GitHub"
              rel="noopener"
            >
              <svg
                class="social"
                width="16"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0a8.1 8.1 0 0 0-8 8.2c0 3.63 2.3 6.7 5.47 7.79l.14.01c.3 0 .4-.22.4-.4v-1.4c-.3.06-.57.1-.81.1-1.54 0-1.89-1.2-1.89-1.2-.36-.95-.89-1.2-.89-1.2-.7-.5 0-.5.05-.5.8.06 1.23.84 1.23.84.4.7.94.9 1.41.9.38 0 .72-.12.92-.21.07-.53.28-.9.5-1.1-1.77-.2-3.64-.91-3.64-4.05 0-.9.31-1.63.82-2.2-.08-.21-.35-1.05.08-2.18l.18-.01c.3 0 .94.1 2.02.86a7.5 7.5 0 0 1 4.01 0c1.08-.75 1.73-.86 2.02-.86l.18.01c.44 1.13.16 1.97.08 2.18.5.57.82 1.3.82 2.2 0 3.15-1.87 3.84-3.65 4.04.28.25.54.75.54 1.52l-.01 2.25c0 .2.1.41.4.41l.15-.01A8.19 8.19 0 0 0 16 8.2 8.1 8.1 0 0 0 8 0Z"
                  fill="#B2BECD"
                />
              </svg>
            </a>
            <a
              href="https://discord.com/channels/1077138419953713222/1078553488642027550"
              target="_blank"
              rel="noopener"
              title="Discord link"
            >
              <svg
                class="social"
                width="20"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.93 1.33A15.93 15.93 0 0 0 12.86 0c-.03 0-.05 0-.07.03-.17.33-.37.76-.5 1.1a14.52 14.52 0 0 0-4.57 0A11.3 11.3 0 0 0 7.2.03.06.06 0 0 0 7.14 0a15.89 15.89 0 0 0-4.1 1.35 18.4 18.4 0 0 0-2.93 12 16.3 16.3 0 0 0 5 2.65c.02 0 .05 0 .06-.03.39-.55.73-1.13 1.02-1.74a.07.07 0 0 0-.03-.1 10.7 10.7 0 0 1-1.56-.77.07.07 0 0 1 0-.12l.3-.25a.06.06 0 0 1 .07-.01 11.32 11.32 0 0 0 10.05 0h.06c.1.1.21.18.32.26.03.03.03.1-.01.12-.5.3-1.02.56-1.56.78a.07.07 0 0 0-.04.09c.3.6.65 1.2 1.03 1.74.01.03.04.04.07.03a16.24 16.24 0 0 0 5.02-2.7 18.26 18.26 0 0 0-2.98-11.97ZM6.68 10.9c-.98 0-1.8-.95-1.8-2.11 0-1.17.8-2.12 1.8-2.12 1.01 0 1.82.96 1.8 2.12 0 1.16-.8 2.11-1.8 2.11Zm6.65 0c-.99 0-1.8-.95-1.8-2.11 0-1.17.8-2.12 1.8-2.12s1.81.96 1.8 2.12c0 1.16-.8 2.11-1.8 2.11Z"
                  fill="#B2BECD"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com/MegabyteLabs"
              target="_blank"
              title="Twitter link"
              rel="noopener"
            >
              <svg
                class="social"
                width="18"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 1.9c-.66.32-1.37.53-2.12.63A4 4 0 0 0 17.5.3c-.7.46-1.5.8-2.34.98A3.55 3.55 0 0 0 12.46 0c-2.04 0-3.7 1.8-3.7 4.04 0 .31.04.62.1.92A10.2 10.2 0 0 1 1.26.74 4.33 4.33 0 0 0 2.4 6.13a3.38 3.38 0 0 1-1.68-.5v.04a3.97 3.97 0 0 0 2.96 3.96 3.42 3.42 0 0 1-1.66.07 3.76 3.76 0 0 0 3.45 2.8A7.02 7.02 0 0 1 0 14.18 9.7 9.7 0 0 0 5.65 16c6.8 0 10.52-6.15 10.52-11.5L16.16 4A7.94 7.94 0 0 0 18 1.89Z"
                  fill="#B2BECD"
                />
              </svg>
            </a>
            <Button
              class="primary | ui-paragraph-4"
              anchor
              {...href('/docs')}
              kind="regular"
              color="cyan"
              size="md"
            >
              <svg
                width="10"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 520.31"
              >
                <path
                  fill="#fff"
                  d="M179.5 167.9l-.2 167.9-57.76-55.44-57.76-55.43-1.72 1.8L48.1 241.3c-6.73 7.03-12.13 13.03-12 13.34.41 1 163.29 157.08 163.92 157.08.62 0 163.46-156.09 163.88-157.09.13-.3-5.27-6.3-12-13.33l-13.96-14.58-1.72-1.8-57.76 55.44-57.76 55.44-.2-167.9L220.3 0h-40.6l-.2 167.9M0 479.69V500h400v-40.62H0v20.3"
                  fill-rule="evenodd"
                ></path>
              </svg>
              Start
            </Button>
          </div>
        </header>
      </Host>
    )
  }
}

const capacitorLogo = (props?: JSXBase.SVGAttributes) => (
  <svg
    viewBox="500 10 350 240"
    class="capacitor-logo"
    fill="#000"
    height="32"
    version="1.1"
    width="180"
    x="0px"
    xmlns="http://www.w3.org/2000/svg"
    y="0px"
    {...props}
  >
    <g data-name="Layer 2"><g data-name="Layer 1"><path class="cls-1" d="M201,90.34c1.44,0,3,1.22,5.2,3.32l32.77,32.55L271.7,93.66c2.21-2.1,3.76-3.32,5.2-3.32,2,0,3.1,1.66,3.1,4.65v71.19q0,3.33-3.32,3.33H257.3q-3.31,0-3.32-3.33v-23l-10.74,10.41c-2.1,2.11-3.21,2.77-4.32,2.77s-2.21-.66-4.31-2.77l-10.74-10.41v23q0,3.33-3.32,3.33H201.17c-2.22,0-3.32-1.11-3.32-3.33V95C197.85,92,199,90.34,201,90.34Z" /><path class="cls-1" d="M306.58,92h49.49c2.22,0,3.32,1.11,3.32,3.32v13.29c0,2.21-1.1,3.32-3.32,3.32h-24.8c-1.55,0-2,.44-2,2V119c0,1.55.44,2,2,2h21.15q3.31,0,3.32,3.32v12.73q0,3.33-3.32,3.33H331.27c-1.55,0-2,.44-2,2v5.2c0,1.55.44,2,2,2h24.91c2.22,0,3.32,1.1,3.32,3.32v13.28c0,2.22-1.1,3.33-3.32,3.33h-49.6q-3.31,0-3.32-3.33V95.32Q303.26,92,306.58,92Z" /><path class="cls-1" d="M431.09,128.65h19.38q3.31,0,3.32,3.32v26.46c0,2.77-.56,3.88-3.1,5.21a68.16,68.16,0,0,1-31.89,7.53c-25,0-42.51-15.73-42.51-39.53,0-24.69,17.49-41.3,43.51-41.3A52.9,52.9,0,0,1,449.47,99c1.55,1,2.21,2,2.21,3.1a5.4,5.4,0,0,1-.88,2.54L443.16,117c-.89,1.44-1.77,2.22-3,2.22a6.67,6.67,0,0,1-2.44-.78,35.54,35.54,0,0,0-17.16-4.53c-11.84,0-17.82,7.52-17.82,17.16s6,17,16.38,17a22.57,22.57,0,0,0,6.87-.89c1.33-.44,1.77-1,1.77-2.55V132Q427.77,128.65,431.09,128.65Z" /><path class="cls-1" d="M510.78,89.79c2.22,0,4.32,1.44,6.42,5.53l36.43,70.53a3.93,3.93,0,0,1,.55,2c0,1.22-1.1,1.67-2.65,1.67H531.38c-3,0-3.66-.34-4.87-2.77L524,161.42c-.56-1.1-.78-1.33-2-1.33H498.83c-1.22,0-1.44.23-2,1.33l-2.54,5.32c-1.22,2.43-1.89,2.77-4.88,2.77H470c-1.55,0-2.66-.45-2.66-1.67a3.93,3.93,0,0,1,.55-2l36.43-70.53C506.47,91.23,508.46,89.79,510.78,89.79Zm6.09,50.82a1.78,1.78,0,0,0-.33-.89l-6.2-12.62-6.2,12.62a1.78,1.78,0,0,0-.33.89c0,.44.44.66,1.22.66h10.62C516.43,141.27,516.87,141.05,516.87,140.61Z" /><path class="cls-1" d="M573.06,92h30c22,0,34.55,6,34.55,22.15,0,7.3-3.66,12.06-10,15,8.53,2.66,12.73,8.31,12.73,17.05,0,17.05-13.28,23.26-38,23.26H573.06c-2.22,0-3.32-1.11-3.32-3.33V95.32C569.74,93.11,570.84,92,573.06,92Zm38.53,24.58c0-3.65-2.55-4.87-10.52-4.87h-3.32c-1.55,0-2,.44-2,2v5.76c0,1.55.44,2,2,2h3.32C608.38,121.45,611.59,120.24,611.59,116.58Zm2.32,27.9c0-3.54-2.32-5.2-11.4-5.2h-4.76c-1.55,0-2,.44-2,2v6.53c0,1.55.44,2,2,2h4.76C611.59,149.8,613.91,148.14,613.91,144.48Z" /><path class="cls-1" d="M650,95.66a4.24,4.24,0,0,1-.66-2c0-1.1.88-1.66,2.43-1.66h20.49c3.1,0,4.2.67,5.86,3.66l12.51,22.8L703,95.66c1.67-3,2.77-3.66,5.87-3.66h19.71c1.55,0,2.44.56,2.44,1.66a4.27,4.27,0,0,1-.67,2l-26.9,45.72v24.8q0,3.33-3.32,3.33H680.76q-3.32,0-3.32-3.33V141.94Z" /><path class="cls-1" d="M762.52,115H747.91c-2.22,0-3.32-1.1-3.32-3.32V95.32c0-2.21,1.1-3.32,3.32-3.32h59.23q3.33,0,3.33,3.32v16.39c0,2.22-1.11,3.32-3.33,3.32H792.53c-1.55,0-2,.44-2,2v49.16q0,3.33-3.33,3.33H767.84c-2.22,0-3.32-1.11-3.32-3.33V117C764.52,115.47,764.07,115,762.52,115Z" /><path class="cls-1" d="M830.22,92h49.49Q883,92,883,95.32v13.29q0,3.31-3.32,3.32H854.9c-1.55,0-2,.44-2,2V119c0,1.55.44,2,2,2h21.15c2.22,0,3.32,1.11,3.32,3.32v12.73c0,2.22-1.1,3.33-3.32,3.33H854.9c-1.55,0-2,.44-2,2v5.2c0,1.55.44,2,2,2h24.92c2.21,0,3.32,1.1,3.32,3.32v13.28q0,3.33-3.32,3.33h-49.6q-3.33,0-3.33-3.33V95.32Q826.89,92,830.22,92Z" /><path class="cls-2" d="M949,92h19.38q3.32,0,3.32,3.32v49.16c0,1.55.44,2,2,2h24.91c2.22,0,3.32,1.1,3.32,3.32v16.38c0,2.22-1.1,3.33-3.32,3.33H949q-3.32,0-3.32-3.33V95.32Q945.69,92,949,92Z" /><path class="cls-2" d="M1058.83,89.79c2.21,0,4.32,1.44,6.42,5.53l36.43,70.53a3.93,3.93,0,0,1,.55,2c0,1.22-1.11,1.67-2.66,1.67h-20.15c-3,0-3.65-.34-4.87-2.77l-2.54-5.32c-.56-1.1-.78-1.33-2-1.33h-23.14c-1.22,0-1.44.23-2,1.33l-2.55,5.32c-1.21,2.43-1.88,2.77-4.87,2.77h-19.37c-1.55,0-2.66-.45-2.66-1.67a3.93,3.93,0,0,1,.55-2l36.43-70.53C1054.51,91.23,1056.51,89.79,1058.83,89.79Zm6.09,50.82a1.78,1.78,0,0,0-.33-.89l-6.2-12.62-6.2,12.62a1.82,1.82,0,0,0-.34.89c0,.44.45.66,1.22.66h10.63C1064.48,141.27,1064.92,141.05,1064.92,140.61Z" /><path class="cls-2" d="M1121.11,92h30c22,0,34.54,6,34.54,22.15,0,7.3-3.65,12.06-10,15,8.53,2.66,12.73,8.31,12.73,17.05,0,17.05-13.28,23.26-38,23.26h-29.34q-3.33,0-3.33-3.33V95.32Q1117.78,92,1121.11,92Zm38.53,24.58c0-3.65-2.55-4.87-10.52-4.87h-3.32c-1.55,0-2,.44-2,2v5.76c0,1.55.45,2,2,2h3.32C1156.42,121.45,1159.64,120.24,1159.64,116.58Zm2.32,27.9c0-3.54-2.32-5.2-11.4-5.2h-4.76c-1.55,0-2,.44-2,2v6.53c0,1.55.45,2,2,2h4.76C1159.64,149.8,1162,148.14,1162,144.48Z" /><path class="cls-2" d="M1214.1,142.27a4.12,4.12,0,0,1,2.33,1c4.87,3.55,11.63,6.32,17.94,6.32,5,0,7.08-1.33,7.08-3.44,0-2.65-2.65-3.54-11.07-5.64-16.05-4.1-24.8-10.08-24.8-24.25,0-16.72,13.29-25.91,30.78-25.91a46.6,46.6,0,0,1,29.78,10.52,3.25,3.25,0,0,1,1.55,2.44,4.1,4.1,0,0,1-1,2.43l-8.2,11.85a2.56,2.56,0,0,1-2.1,1.44,3.81,3.81,0,0,1-2.33-1c-5.2-4-11.29-6.31-16.6-6.31-3.88,0-5.65,1.33-5.65,3.43,0,2.77,2.55,3.55,10.07,5.32,16.95,4,26,10.63,26,24.13,0,16.61-12.73,26.58-32.44,26.58a50.26,50.26,0,0,1-30.78-10.41,3.86,3.86,0,0,1-1.88-3,4.65,4.65,0,0,1,1-2.66l7.64-11C1212.33,142.93,1213.11,142.27,1214.1,142.27Z" /><path class="cls-3" d="M132.13,202.1,90.49,136.41V72.11h7.19a6.48,6.48,0,0,0,0-13H37a6.48,6.48,0,0,0,0,13h7.16l-.23,64.58-41.07,65a13.86,13.86,0,0,0,11.06,22.23H120.76a13.81,13.81,0,0,0,12.42-7.69A13.56,13.56,0,0,0,132.13,202.1Zm-10.55,8.33a.84.84,0,0,1-.82.51H13.88a.84.84,0,0,1-.82-.51c-.25-.51,0-.83.4-1.41l41.08-65a12.81,12.81,0,0,0,2.56-7.66V72.11H77.54V136.4a12.28,12.28,0,0,0,2.26,7.22l41.69,65.85A.84.84,0,0,1,121.58,210.43Z" /><circle class="cls-2" cx="62.01" cy="41.82" r="8.77" /><circle class="cls-2" cx="75.41" cy="12.82" r="12.82" /><path class="cls-2" d="M80,183.05c-14.21.91-31.13-18.5-35.93-12.47-1.34,1.68-18.35,28.93-18.35,28.93-3.15,4.75-1.8,6.17,3.4,6.17h79.64a2.28,2.28,0,0,0,1.93-3.5L97,180.62a2.25,2.25,0,0,0-2.69-.9A52.51,52.51,0,0,1,80,183.05Z" /></g></g>
  </svg>
)
