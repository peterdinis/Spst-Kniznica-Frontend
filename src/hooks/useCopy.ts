import { toast } from "@/components/ui/use-toast";
import { CopiedValue, CopyFn } from "@/types/HookTypes";
import { useState } from "react";

function useCopyToClipboard(): [CopiedValue, CopyFn] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const copiedValue = () =>toast({
    title: "Skopirované",
    className: "bg-green-500",
    duration: 3000
  })

  const copy: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported");
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      copiedValue();
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      setCopiedText(null);
      return false;
    }
  };

  return [copiedText, copy];
}

export default useCopyToClipboard;