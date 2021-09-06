module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Conor Dev Portfolio",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "WvTwyrs1LRO_-gRCpjOgPsxtLcM2MmiZL8r7KAq7T5Y",
        spaceId: "6i4nt0aquy0a",
      },
    },
  ],
};
