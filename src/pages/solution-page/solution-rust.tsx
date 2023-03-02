import { Fragment, h } from '@stencil/core'
import {
  ResponsiveContainer,
  Heading,
  Paragraph,
} from '@ionic-internal/ionic-ds'
export const SolutionRust = () => {
  return (
    <Fragment>
      <ResponsiveContainer id="what-is" as="section">
        <div class="ui-container">
          <ion-icon class="what-is-info-icon" name="information-circle-outline"></ion-icon>
          <Paragraph class="quote-summary">
            <b>What is Rust?</b>
          </Paragraph>
          <Paragraph class="quote-summary">
            Rust is a modern, open-source systems programming language that was designed to be safe, efficient, and fast. It was created by Mozilla and first released in 2010. Rust's design was heavily influenced by C++, but with a focus on memory safety and thread safety. Rust aims to provide the performance of low-level languages, like C and C++, with the safety and ease-of-use of high-level languages like Python or Ruby.
        </Paragraph>
          <Paragraph class="quote-summary">
            One of Rust's key features is its ownership and borrowing system, which ensures that memory safety is guaranteed at compile time. This means that Rust programs are much less likely to experience memory-related errors such as null pointer exceptions, buffer overflows, and data races. By eliminating these types of errors, Rust makes it much easier to write reliable and secure software.
        </Paragraph>
          <Paragraph class="quote-summary">
            Another advantage of Rust is its performance. Rust compiles to native machine code, which means that it can take full advantage of the hardware's capabilities. Rust code is typically faster than interpreted languages like Python, and in some cases, it can even be faster than C and C++ due to its optimized memory management and reduced overhead.
        </Paragraph>
          <Paragraph class="quote-summary">
            Finally, Rust has a strong and growing community, which means that there is a wealth of libraries and tools available for developers. Rust is also used by companies like Dropbox, Microsoft, and Mozilla, which means that it is well-supported and will continue to be developed and improved in the future.
        </Paragraph>
        </div>
      </ResponsiveContainer>
      <ResponsiveContainer id="getting-started" as="section">
        <article class="step">
          <sup class="ui-heading-6">01</sup>
          <div class="heading-group">
            <Heading level={3} id="install">
              Rust experts.
            </Heading>
            <Paragraph>
              We have a team of experienced and knowledgeable Rust developers who are passionate about building high-performance and reliable applications, and we use the latest tools and best practices to ensure that your project is completed on time, within budget, and to your exact specifications.
            </Paragraph>
          </div>
          <div class="image-wrapper">
            <webp-image
              src="/assets/img/solutions/rust-1.png"
              alt="Rust experts illustration"
              class="vm-icon"
            />
          </div>
        </article>

        <article class="step">
          <sup class="ui-heading-6">02</sup>
          <div class="heading-group">
            <Heading level={3}>WebAssembly integrations.</Heading>
            <Paragraph>
              Improve your websites, apps, and, in some cases, edge servers by leveraging WebAssembly through faster and more efficient processing of high-performance applications in the browser, reducing server load and latency, and enabling code portability and reusability across different platforms and programming languages, including Rust.
            </Paragraph>
          </div>
          <div class="image-wrapper">
            <webp-image
              src="/assets/img/solutions/rust-2.png"
              alt="WASM illustration"
              class="vm-icon"
            />
          </div>
        </article>
      </ResponsiveContainer>
    </Fragment>
  )
}
