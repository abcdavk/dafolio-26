import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CommandBlock({ command, label }: { command: string; label: string }) {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">(
    "idle",
  );

  async function copyCommand() {
    try {
      await navigator.clipboard.writeText(command);
      setCopyStatus("copied");
    } catch (error) {
      console.error(`Failed to copy ${label.toLowerCase()} command`, error);
      setCopyStatus("error");
    }
  }

  const statusMessage =
    copyStatus === "copied"
      ? `${label} command copied`
      : copyStatus === "error"
        ? `Could not copy ${label.toLowerCase()} command`
        : "";

  return (
    <div className="docs-command" role="group" aria-label={`${label} command`}>
      <div className="docs-command-scroll">
        <code>{command}</code>
      </div>
      <button
        className="docs-copy-button"
        type="button"
        onClick={copyCommand}
        aria-label={`Copy ${label.toLowerCase()} command`}
        title={statusMessage || `Copy ${label.toLowerCase()} command`}
      >
        {
          copyStatus === "idle" ? <Copy size={18} aria-hidden="true" /> : <Check size={18} aria-hidden="true" />
        }
      </button>
      <span className="sr-only" aria-live="polite">
        {statusMessage}
      </span>
    </div>
  );
}