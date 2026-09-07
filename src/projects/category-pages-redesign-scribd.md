---
title: How to win book lovers’ attention
subtitle: Rethinking Category Pages layout variations as a scalable system
short_title: Category Pages, Scribd
date: 2021-04
company: Scribd
blurb: |
  When I was the lead designer of their SEO team, Scribd was still something like a hydra with two heads. Born as a place for uploading and sharing PDFs, it expanded into a book and audiobook subscription service, adding a Premium catalog of titles that became the core of the business model. But the overflowing volume of user-generated documents that made their SEO strategy so effective also meant Google didn’t recognize Scribd as a place for book readers.
  
  The SEO Product Manager set things in motion by redesigning key landing pages of the Premium book catalog. My first task was to redesign the Category Pages to capture readers’ attention and drive them to the Title Page, the highest-converting surface we had. It was a long and articulated project, and I laid out some ambitious goals: designing a modular layout structure that would allow for future experimentation; creating a content flow that would keep visitors engaged with the page as long as possible; and expanding our newly born design system with components that could benefit the site at large.
permalink: false
case_study: false
tags:
  - Web
  - SEO
  - Design-system
images:
  - src: /assets/projects/category-pages-redesign-scribd/scribd-category-01.webp
    alt: The top of a category page with the Spotlight section, on desktop and mobile
  - src: /assets/projects/category-pages-redesign-scribd/scribd-category-02.webp
    alt: The Author Spotlight module on desktop and mobile
  - src: /assets/projects/category-pages-redesign-scribd/scribd-category-03.webp
    alt: A "Dig deeper" module with a grid of titles, on desktop and mobile
  - src: /assets/projects/category-pages-redesign-scribd/scribd-category-04.webp
    alt: The All Categories page on desktop and mobile
layout: project.njk
---

### The problem

## Reorganizing dozens of categories with an adaptable, engaging layout

Born for quickly uploading and sharing PDF documents, by the time I joined, Scribd had matured into a reading subscription service with a premium catalog of books and audiobooks at its core. The early enormous catalog of user-generated documents covered a long tail of niche interests and generated thousands of landing pages. These entry points were the core of Scribd’s acquisition strategy, which relied on rigorous technical SEO work.

The great majority of prospective subscribers found Scribd through a document and were only occasionally motivated to convert and join the subscription free trial. The traffic volume was high, but the portion engaged by our calls to action was a fraction of it. Google was aware of the paradox of a few dedicated book landing pages drowning in an ocean of document URLs and refused to recognize Scribd as a reading service.

The new Product Manager on the SEO team wanted to approach things differently by building two parallel tracks. The long-term goal was to separate the reading subscription and catalog from the documents. These were different audiences and needed different brands and ultimately different URLs. In the short term, her plan was to improve the user experience of the book and audiobooks pages, which had been built hastily and opportunistically.

The first item on the SEO roadmap was a redesign of the Category pages. Put together with components originally built for documents, they didn’t mention what Scribd was, the reading subscription, the price, or a call to action for the free trial. It was a characterless place, with conversion left to the chance of clicking on a title and landing on the more effective book page.


### The research 

## Shaping an ambiguous problem into a design plan

To be successful and engaging, Category pages needed, at minimum, to:

- Communicate clearly what Scribd was: a reading subscription service for ebooks, audiobooks, magazines, and more, with a free trial available
- Show Scribd’s value by using a unique voice in curating content, and demonstrate authority in the book space
- Become a reliable activation surface that would drive conversion by increasing clicks and traffic to the Book page in a measurable way

The Product Manager wasn’t interested in pushing a batch of growth experiments focused on micro-optimizations and wasn’t trying to bring conversion upstream to these landing experiences. Category pages and most premium catalog pages were rarely found and needed major improvement to start indexing better on SERP. A user-centered experience was the right signal for Google that we were taking the reading subscription seriously.

During my exploration phase, I worked on two tracks: understanding what was not working on the current pages, and building a content and design strategy by defining priorities and goals.

Together with the Lead Senior Researcher, we interviewed book lovers, dropped them on our current Category pages, observed their behavior, and asked about their reading habits. In parallel, I conducted a teardown of these pages and discussed my findings on UX and content flow with stakeholders to achieve alignment before locking in solutions.

The results of this research informed my high-level plan, which I based on three principles:

1. Finding Scribd’s voice and organizing the page content in an opinionated way. This would bring focus to the page and make Scribd more recognizable and enticing.
2. Creating rules for balancing editorial curation with algorithmic selection. Scribd already had editors compiling lists of recommendations, but the human touch alone couldn’t support hundreds of pages. Striking the right balance would keep the landing experience fresh over time with the right curatorial overhead.
3. Developing reusable modules and components that would be easy to adapt to different categories while bringing variety to the layout. This was also a design-system problem, as I had to determine the minimum number of components needed to achieve that level of complexity sustainably.

I considered personalization as another factor, but since it was part of the logged-in experience, I deferred it to the Subscriber team designers, who could later extend this work. content strategy


## Step #1: developing the content strategy

The content flow was the underlying structure that held up the page and guided the user. Once I had that outlined, I could start drafting design patterns modeled around it.

I imagined a rhythm that places fewer, fresher, and carefully selected content at the top; evergreen and classic titles for the genre in the center; and a less curated, larger group of items toward the bottom. I called this content flow the “sandwich” because the sections could expand or contract depending on the category, much like a sandwich can be made to suit different preferences while choosing from the same set of options.
Once the content design idea was approved, I met with the SEO and design teams to discuss ideas for the sandwich sections: what could be at the top, a Spotlight or a “New author” component? Was “Coming Soon to Scribd” a good fit for top-level categories?

Here’s a diagram detailing what each section of the sandwich stood for and the top ideas we had for carousels or components.


## Step #2: low-fidelity explorations and final user testing

The SEO Product Manager and I reviewed all component ideas and sorted them into editorially (human) curated versus algorithm-based. We also brought back in some existing carousels that just needed adjustment and reframing to be more relevant.

Once we had our shortlist, I sketched low-fidelity “agnostic” patterns that could adapt to different types of carousels and sections. This abstraction made it easier to narrow down the type of components needed. For example, with a “list” pattern, we could cover both “Top Mysteries of the Year” and “Highly rated by Scribd Readers.” By adding a thumbnail and a blurb, the same list became a thematic or person’s list. My goal was to identify the most basic patterns needed to build the most flexible page.

[example lo-fi]

Following up, I created medium-fidelity versions of the chosen patterns and combined them into a large mobile prototype for moderated interviews. Users’ reactions were largely positive. I collected feedback and proceeded with the final designs.


### Extending the Web Design System

Scribd had just started revamping their UI and standardizing their Design System; there were only a few components available, namely:

- New typographic styles for headers and sub-headers
- Tab and pill styles for filtering
- A new basic book/audiobook carousel
- An editorial list carousel

[img]

The image above shows what was available in the new Design System Library when I started working on my final components. The visual design direction was set, and the foundational typographic styles were there, but there weren’t enough UI components to build the Category pages as I envisioned. For every design element you see on the page that is not one of these above, I explored visual variants, got approval for the final design, specced the responsive behavior, and supported the implementation, working alongside the SEO engineering team to create the DS components and make them usable and available to the rest of the team.


## Step #3: the final page layout and components

The legacy layout was a typical “minimum viable product,” built solely to drive SEO clicks and quickly funnel users to the Book page, which converted better. With my redesign, I aimed to build a “minimum lovable page” with effective content hierarchy, engaging flow, and trackable entry points to the Book page. The lovable aspect was less about “delight” and more about rhythm and focus. I wanted the layout to use proven design principles to meet communication goals. To me, delight means a new user lands on a page and finds it interesting enough to stay.

My content flow proposal was a starting point. I wanted the layout to be flexible and open to fine-tuning once we had enough traffic for quick experiments. The modularity of the patterns I designed allowed us to run A/B tests to find the best order, swap rows, and continue optimizing the page.


### The final designs

## Deep dive into the page, section by section

### Navigating across content types

Each tab was associated with a URL, so the ebooks tab would be scribd.com/ebooks/Mystery-Thriller-Crime-Fiction, while the audiobooks tab could be indexed at scribd.com/audiobooks/Mystery-Thriller-Crime-Fiction.

Users searching for “thriller audiobooks” would land on this page with the audiobook tab selected but could still switch tabs to explore other formats. Early on, I designed a version with just two tabs: “Reading | Listening.” Ebooks, magazines, and articles were grouped under “Reading,” while audiobooks and podcasts were under “Listening.”
While modes are definitely better at mapping users’ way of consuming content, this was still the most rewarding SEO approach.


### Highlighting the best content: the Spotlight

For top-level categories, choosing a single title for the top section immediately presented Scribd as a place for curated recommendations while grabbing the user’s eye and attention with simplicity.

To merchandise this, I used the monthly list of new, compelling titles compiled by Scribd’s editors and automatically selected one title at random. I made sure users who land on this page multiple times, whether logged in or logged out, will see a different book each visit.

Elevating one piece of content helps modulate attention. New visitors can focus on limited information first while the number of items increases as they scroll. This accent establishes the page hierarchy. I initially explored more visually rich designs, but we settled on a minimal layout that worked better with our new Design System styles. I specified the responsive breakdown of this pattern for Ebooks, Audiobooks, Podcasts, and Sheet Music.


### A shortlist of the best: the Top 10 This Month carousel

This row reused the new carousel with no modifications. What changed was the framing: we originally had a “Best titles” row, but users didn’t understand what “best” meant. They didn’t recognize recent bestsellers or have familiarity with Scribd.

Scribd’s editorial team selected the best among the most read titles on the platform, so we added “Our list of Scribd readers’ most read and top-rated for the month” as a secondary heading. Adding context and explaining how titles were selected improved clarity and trustworthiness. Capping the list at 10 made it more digestible and turned it into a familiar pattern users recognize from other platforms.


### The power of the preview: introducing the “big card” and its carousel

On a shelf, a cover lures the reader in, and once they pick up the book, they can turn it to read the back cover or the flaps. On a webpage, where that is not possible, users appreciated having context rather than having to guess from a small thumbnail. Making the card bigger to fit a small blurb was similar in concept to turning the book; it also helped SEO ranking by adding more words to the page.

I created this card as a variant of the original (smaller) content card in the Design System Library. Together with the engineer who worked on this task, we decided to create a new “big cards” carousel. When the container used was the “big cards” one, the inside card components would change to the “big card” variant with the blurb. The logic resided in the carousel container. The blurb would show a Scribd editor note, if one existed, or the book summary as shown on the book page.

I worked through the technical details and the responsive behavior of both cards and the carousel with the SEO and DS engineers. This carousel could be applied to different lists depending on the category: either a curated list of newly added titles, or other category-specific lists, and even more than once on the page.


### Showcasing depth: the Author Spotlight

In the first user testing session, we noticed users were often on the hunt for both their favorite authors and new ones. The subscription became more attractive once they knew we had almost all of an author’s catalog: if they started reading a book by that author and liked it, knowing they could keep reading their books in the same place at the same cost was a plus. From an SEO standpoint, this module would help attract author-related web searches.

In my early designs, this module featured special cards specific to this component only. While visually compelling, there was no reason to build a card just for this purpose. The “big card” worked well and made it possible to feature authors with only three titles available.

Behind the scenes, the SEO team built a mini content-management section in the admin tools so that editors could choose which author to feature in a Category, and select which titles to show in the carousel list.


### Navigating across Categories: the “loaves”

At the bottom of the original pages sat a simplistic list of links to related categories and sub-categories. This design was more useful for crawlers than users. My goal was to make it visible and easy for users to navigate to another page and browse more if they wanted. When I shared the designs for these category-button elements, the Design System Lead Designer renamed it “the loaf.” Other designers found it useful and started including it in their mockups before implementation.

In Top Categories, loaves link to children; in Sub Categories, they link to siblings. I wanted the image thumb to be dynamically pulled from top audiobooks, but our setup made this impractical if not impossible.

I believed loaves were an important element, so I decided to step in and do things the scrappy-startup way. I created a spreadsheet, manually re-created a list of all Categories, chose the best audiobook cover, and copied and pasted the URLs of the chosen images in the file. I handed the file over to the engineers, who used it to pull the static versions of the images and build the component’s logic.


### Closing the page: the grid arrangement

The last section allowed users to peek into the larger catalog without the curation layer of other modules. I chose to arrange elements on a grid, a configuration we had no pattern for since we only created carousels.

Looking at the basic element of the carousel, the item’s card, I realized the problem and the solution were tied to the choices made when the card and the carousel were built. The card had a fixed width that didn’t align with the grid. I convinced the team that by switching the card from fixed to fluid, we could make it work in both contexts: with a fixed width in the carousel and in a responsive grid. So I worked closely with engineers to create a new container in which the card would adopt a fluid behavior, carefully defining changes at each breakpoint and in between them.


## Flexibility and scalability: different sandwiches for different content

I developed the idea of building pages with different layers and levels of curation, each section working like an accordion, expanding and contracting to keep pages at the same level of “fullness”. Top Categories would be the most curated, with English popular Subcategories following right after. We would populate the most obscure Subcategories and non-US pages using algorithmically sourced rows and grid elements.



## But there was more…

The “Show more” button at the end of the grid would toggle open another batch of grid elements; this behavior would repeat 4 times, after which the button would change to “View all in [Category Name],” leading to another page. The architecture was the same as the original pages, but instead of the full and overwhelming list of titles in the genre, I designed an action bar for filtering and sorting, giving users the power to find what they need by proactively setting their preferences.

I also explored a light revamp of the All Categories central hub, and a mobile-specific pattern for navigating across Categories by pulling up a drawer. You can see these designs directly in this Figma file.



## Conclusions

Because Product never intended to track the changes through an experiment, this project's success wasn’t measured by numbers but by the qualitative impact and how it helped carry forward the plan for the book pages to be their own ecosystem, separate from the PDF documents.

My design system work had a big impact on the rest of the design team: I was the first designer to work on extending our new visual language, I supported engineers in building the responsiveness behavior of those patterns, and I socialized my designs early on to see how I could benefit other designers.

### What I would do differently

SEO is a long-term game, and this project wasn’t set up to provide instant traffic changes but to drive a shift in the authority of our book landing pages. We didn’t consider A/B testing to measure impact; we simply swapped the old layout for the new one. Today, I would think about results and success differently, and I would ask to instrument the page and run some tests on engagement and conversion, even without a previous baseline. I would collaborate with Data Analysis to see what meaningful stats we could recover from the old pages, or whether a small, cheap marketing campaign would allow us to compare bounce rate, time spent on the page, and conversion time.


