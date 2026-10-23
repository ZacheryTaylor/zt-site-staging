/*
  PLAIN PROJECT CARDS on Life & Interests: projects that don't have their own
  project page (yet). Same card look as the others, but no page and no quick view.
  group: the Life & Interests group id the card joins ("apps" or "projects").
  status: shown above the title. cover: image under src/ (optional).
  href: ONLY for public, live pages. Leave it out for private work.
*/

const activeProjects = {
  items: [
    {
      id: "parcel-filter",
      group: "apps",
      type: "Web Application",
      title: "Parcel Filter",
      status: "In development",
      cover: "images/personal/covers/parcel-filter.svg",
      text: "A map tool that sorts Northwest Florida parcels by acreage, vacancy, zoning, flood zone, and utilities, using live public county data."
    },
    {
      id: "tree-inventory",
      group: "apps",
      type: "Mobile Web App",
      title: "ZT Tree Inventory",
      titleNote: "working name",
      status: "In development",
      cover: "images/personal/covers/tree-inventory.jpg",
      coverAlt: "ZT Tree Inventory on an iPhone: the Trees tab listing sample tagged trees with species, DBH, protected and heritage flags, and each point’s estimated GPS error",
      text: "An offline iPhone web app for field tree inventories: averaged GPS tree locations, tree records, and Civil 3D-ready exports.",
      features: [
        "Averaged GPS readings with a live accuracy readout. Phone GPS is typically within 10–30 ft. Coordinates convert to NAD83 Florida State Plane North (US ft) or a system you pick; the conversion math matches NOAA NCAT within 0.001 ft on 5 test points.",
        "Tag #, species, DBH (multi-stem trees combined), canopy, condition and photos for each tree, with suggested protected/heritage flags from the Pensacola, Escambia and Santa Rosa thresholds.",
        "Separate jobs for each client and site, plus a field check of GPS error against a known corner point.",
        "Exports a Civil 3D PNEZD CSV, an Excel tree log ready for the mitigation calculator, a photos zip, and a 6-page Tree Inventory Report PDF.",
        "A parcel sketch page that plots numbered tags on county GIS parcel outlines with a title block, saved as PNG or PDF at Letter or 11x17."
      ],
      disclaimer: "Locations are approximate (phone GPS is about 10-30 ft per GPS.gov) and this is not a survey. Tool, not engineering or surveying advice.",
      credit: "Zach Taylor, EI (Engineer Intern), ZT, LLC"
    },
    {
      id: "products",
      group: "projects",
      type: "Digital Products",
      title: "Digital products",
      status: "Live on Gumroad",
      cover: "images/personal/covers/digital-products.svg",
      text: "Study guides and spreadsheet tools from civil work: PE exam prep, estimating and land development, and real estate investing analyzers.",
      href: "/civil.html#products-title",
      hrefLabel: "See the products"
    },
    {
      id: "stem-books",
      group: "projects",
      type: "Children’s Books",
      title: "STEM picture book series",
      status: "Book 1 in progress",
      cover: "images/personal/covers/stem-books.svg",
      text: "Read-aloud picture books for ages 4–7 about how bridges, roads, and stormwater work, by Zachery A. Taylor and published by ZT, LLC."
    }
  ]
};
