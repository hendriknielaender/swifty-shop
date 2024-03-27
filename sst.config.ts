/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "swifty-shop",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      region: "eu-central-1"
    };
  },
  async run() {
    const checkout = new sst.aws.StaticSite("Checkout", {
      build: {
        command: "npm run package",
        output: "apps/app1/dist"
      },
      path: "apps/app1"
    })
    const product = new sst.aws.StaticSite("Product", {
      build: {
        command: "npm run package",
        output: "apps/app2/dist"
      },
      path: "apps/app2"
    })
    const host = new sst.aws.StaticSite("Host", {
      build: {
        command: "npm run package",
        output: "apps/host/dist"
      },
      path: "apps/host",
      environment: {
        SST_PRODUCT_URL: product.url,
        SST_CHECKOUT_URL: checkout.url
      }
    })
  },
});
