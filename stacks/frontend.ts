import { StaticSite, StackContext } from "sst";

export function checkout({ stack }: StackContext) {
  new StaticSite(stack, "checkout", {

  })
}
