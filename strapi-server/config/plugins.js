// module.exports = () => ({});


module.exports = () => ({
    slugify: {
      enabled: true,
      config: {
        contentTypes: {
          category: { // Your content type name
            field: "slug", // The field where the slug will be stored
            references: "name", // The field used to generate the slug
          },
          product: {
            field: "slug",
            references: "name",
          },
        },
      },
    },
  });
  
