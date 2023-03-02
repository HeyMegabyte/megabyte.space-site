import { Component, Host, Element, Prop, h } from '@stencil/core'

@Component({
  tag: 'prismic-image',
})
export class PrismicImage {
  @Prop() image
  @Prop() height: number
  @Prop() width: number

  @Element() el

  render() {
    console.log(this.image)
    const webpSrc = this.image.replace(/.png/gi, '.webp')
    return (
      <Host>
        <picture>
          <source type="image/webp" src={webpSrc} />
          <source type="image/png" src={this.src} />
          <img
            data-webp-image="true" src={this.src} alt={this.alt} width={this.width} height={this.height} class={this.class} loading={this.loading}
          />
        </picture>
      </Host>
    )
  }
}
