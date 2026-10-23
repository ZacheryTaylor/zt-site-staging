/*
  ACTIVE PROJECTS — shown on the home page and on Life & Interests
  (partials/active-projects.njk). One short line each.
  status: shown as written. tone: "active" (green) | "ongoing" (blue) | "scheduled" (bronze)
  href: only for public, live pages. Leave it out for private previews.
  Digital products are pulled from civil-work-data.js and grouped by the
  `productGroups` below (match on the product's Gumroad link).
*/

const activeProjects = {
  items: [
    {
      id: "parcel-filter",
      label: "Land research tool",
      title: "Parcel Filter",
      text: "A map tool that sorts Northwest Florida parcels by acreage, vacancy, zoning, flood zone, and utilities.",
      status: "In development",
      tone: "ongoing"
    },
    {
      id: "tree-survey",
      label: "Field app",
      title: "Tree Survey App",
      text: "An offline phone app that logs trees with averaged GPS and exports Civil 3D points, paired with a tree protection and mitigation calculator.",
      status: "In development",
      tone: "ongoing"
    },
    {
      id: "products",
      label: "Product shop",
      title: "Digital products",
      text: "Study guides and spreadsheet tools from civil and land-development work, sold by ZT, LLC.",
      status: "Live",
      tone: "active",
      href: "/civil.html#products-title",
      hrefLabel: "See all products"
    },
    {
      id: "stem-books",
      label: "Children’s books",
      title: "STEM picture book series",
      text: "Read-aloud picture books for ages 4–7 about how bridges, roads, and stormwater work, published by ZT, LLC.",
      status: "Book 1 in progress",
      tone: "scheduled"
    },
    {
      id: "draft-the-stars",
      label: "Web app",
      title: "Draft the Stars",
      text: "A fantasy league for Dancing with the Stars: live draft board, weekly scoring, and rankings.",
      status: "Live",
      tone: "active",
      href: "https://draftthestars.com/",
      external: true
    }
  ],

  productGroups: [
    { title: "PE exam prep", hrefs: ["https://ztllc.gumroad.com/l/qdnxn", "https://ztllc.gumroad.com/l/pe-construction-free-sample"] },
    { title: "Estimating & land development", hrefs: ["https://ztllc.gumroad.com/l/sitework-utility-estimator", "https://ztllc.gumroad.com/l/free-trench-calculator", "https://ztllc.gumroad.com/l/land-dev-proforma", "https://ztllc.gumroad.com/l/land-dev-sitework-bundle"] },
    { title: "Real estate investing", hrefs: ["https://ztllc.gumroad.com/l/rental-property-analyzer", "https://ztllc.gumroad.com/l/fix-and-flip-analyzer", "https://ztllc.gumroad.com/l/real-estate-investor-bundle"] }
  ]
};
