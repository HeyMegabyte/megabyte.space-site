import { Component, h } from '@stencil/core';
import { ResponsiveContainer, Button } from '@ionic-internal/ionic-ds';

import Parallax from 'parallax-js';

import { Background } from '../assets/bg-3-only.svg';
// import { Background } from '../assets/bg-boxes.svg';

@Component({
  tag: 'top-parallax',
  styleUrl: 'top-parallax.scss',
  scoped: true,
})
export class LandingPage {
  $shapes!: HTMLDivElement;
  libID = 'parallax-lib';
  parallaxInstance: Parallax;

  disconnectedCallback() {
    this.parallaxInstance.distroy();
  }

  componentDidLoad() {
    this.parallaxInstance = new Parallax(this.$shapes, {
      invertX: false,
      invertY: false,
      scalarX: 3,
      scalarY: 3,
    });
  }

  render() {
    return (
      <section id="top">
        <ResponsiveContainer>
          <div id="shapes" ref={el => (this.$shapes = el as HTMLDivElement)}>
            <div id="circle-1" data-depth="0.8" />
            <div id="circle-2" data-depth="0.3" />
            <div id="circle-3" data-depth="0.6" />
            <div id="square-1" data-depth="0.7" />
            <div id="square-2" data-depth="0.7" />
            <div id="square-3" data-depth="0.6" />
            <div id="square-4" data-depth="0.3" />
            <div id="square-5" data-depth="0.1" />
            <div id="square-6" data-depth="0.2" />
            <div id="square-7" data-depth="0.3" />
            <div id="square-8" data-depth="0.5" />
            <Background id="bg" data-depth="0.3" />
          </div>
          <h1>
            <span class="reveal">Open.</span>
            <span class="reveal">Source.</span>
            <span class="reveal">Wizardry.</span>
          </h1>
          <p class="reveal">
          Join us in our quest to build the ultimate device deployment tools, scripts, and software
or follow us to reap the benefits of expert-configured, open-source software
built with paranoid-level security practices.
          </p>
          <div class="btns">
            <Button
              class="reveal"
              kind="round"
              color="indigo"
              variation="light"
              href="/docs/getting-started"
              anchor={true}
            >
              Get Beta Access  <span>{'->'}</span>
            </Button>
            <Button
              class="reveal"
              kind="round"
              color="indigo"
              href="/products"
              anchor={true}
            >
              View Products <span>{'->'}</span>
            </Button>
          </div>
        </ResponsiveContainer>
      </section>
    );
  }
}
