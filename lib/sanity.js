import { createClient, createPreviewSubscriptionHook } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { PortableText as PortableTextComponent } from "@portabletext/react";

const config = {
  projectId: "wk8rolv9",
  dataset: "production",
  token:
    "skt570ep6LnhBP5hbaBGlKRBdcN0XuvlLzroRM1WiguVPcNAMWSa2O8acdoVwDZ4mPC7QrMOLp8E1oZtCV7Z9Q2s0Y9SBDNVkoauZ6lwElih5TBaWZtHSMCDgSGExpSi4T04ortj4El3lGfU2x7HgFh3QtYnCLBh3B4sFq50kwYKfX0rACpI",
  apiVersion: "2021-10-21",
  useCdn: false,
};

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const PortableText = (props) => (
  <PortableTextComponent components={{}} {...props} />
);
