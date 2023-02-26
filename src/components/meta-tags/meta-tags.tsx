import { Build, Component, Element, Host, Prop, h } from '@stencil/core'
import Helmet from '@stencil/helmet'

@Component({
  tag: 'meta-tags',
})
export class MetaTags {
  site = 'https://megabyte.space';
  @Prop() pageTitle =
    'Megabyte Labs: Enterprise-grade open-source solutions';
  @Prop() description =
    'Find free, enterprise-grade, open-source projects and solutions';
  @Prop() image = 'https://megabyte.space/assets/img/og.png';
  @Prop() authorTwitter = '@MegabyteLabs';
  @Prop() ogType = 'website';
  @Prop() canonicalUrl = `${this.site}${location.pathname}`;

  @Element() el

  render() {
    const prettyTitle =
      this.pageTitle ===
        'Megabyte Labs: Enterprise-grade open-source solutions'
        ? this.pageTitle
        : `${this.pageTitle} | Megabyte Labs`

    if (!this.el.isConnected || Build.isServer) {
      return <Host></Host>
    }

    return (
      <Helmet>
        <title>{prettyTitle}</title>
        <meta name="description" content={this.description} />
        <meta property="og:type" content={this.ogType} />
        <meta property="og:title" content={prettyTitle} />
        <meta property="og:description" content={this.description} />
        <meta property="og:image" content={this.image} />
        {/* Fixed domain and strip out hashtags and query strings */}
        <meta property="og:url" content={`${this.site}${location.pathname}`} />
        <meta name="twitter:title" content={prettyTitle} />
        <meta name="twitter:description" content={this.description} />
        <meta name="twitter:image" content={this.image} />
        <meta name="twitter:creator" content={this.authorTwitter} />
        <link rel="canonical" href={this.canonicalUrl} />
      </Helmet>
    )
  }
}
