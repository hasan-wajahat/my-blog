# Frontend with Hasan

Personal blog and CV site for Hasan Wajahat. Two audiences: mid-level+ frontend engineers reading practical migration/integration guides, and recruiters evaluating Hasan's CV.

## Language

**Article**:
A published technical writing piece authored by Hasan, rendered from MDX.
_Avoid_: Post, blog post, entry, story

**Excerpt**:
One-sentence summary of an **Article**. Single source for the article tile blurb, SEO meta description, and social/OG preview.
_Avoid_: Description, summary, blurb, teaser

**Slug**:
Kebab-case identifier for an **Article**. Doubles as the URL path segment (`/articles/<slug>`) and the folder name under `app/articles/`.
_Avoid_: ID, path, key, permalink

**About Page**:
The single page at `/about-me` containing Hasan's bio, work history, and contact info. Serves recruiters as the CV surface.
_Avoid_: CV page, resume, profile (treat CV content as a section of the About Page, not a separate concept)

## Relationships

- An **Article** has exactly one **Excerpt**
- An **Article** is identified by exactly one **Slug**
- The **About Page** is singular and unrelated to **Articles**

## Example dialogue

> **Dev:** "Should the **Article** tile on the homepage show different copy than the SEO meta description?"
> **Hasan:** "No — same **Excerpt** everywhere. One sentence per **Article**, reused on tile, meta, and OG card."

## Flagged ambiguities

_(none yet)_
