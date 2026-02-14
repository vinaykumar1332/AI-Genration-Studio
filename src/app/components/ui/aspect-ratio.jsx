"use client";

import * as RadixAspectRatio from "@radix-ui/react-aspect-ratio";

function AspectRatio({
  ...props
}) {
  return <RadixAspectRatio.Root data-slot="aspect-ratio" {...props} />;
}

export { AspectRatio };
