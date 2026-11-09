import platinumBannerUrl from "../../assets/projects/platinum_banner.png";

import { ArrowLeft, ArrowUpRight, Folder, Monitor, Terminal } from "lucide-react";
import "./style.css";
import { CommandBlock } from "./components/CodeBlock";
import { Link } from "react-router-dom";



export default function ProjectPlatinumPage() {
  return (
    <section className="docs my-12 sm:my-16">
      <Link to="/project" className="flex mb-8 gap-2 items-center bg-paper-reverse w-fit text-paper p-2 pr-4 rounded-xl group hover:scale-104 transition-transform">
        <ArrowLeft className="group-hover:animate-wiggle"/> Back
      </Link>
      <header className="docs-hero mb-10 overflow-hidden rounded-3xl">
        <img
          src={platinumBannerUrl}
          alt="Platinum — drag-and-drop AppImage installer"
          className="docs-banner"
        />
        <div className="px-5 py-7 text-center sm:px-8 sm:py-9">
          <h1 className="mb-3">Platinum</h1>
          <p className="mx-auto max-w-xl">
            Install AppImages with a simple drag and drop.
          </p>
          <a
            className="docs-github-link mt-6"
            href="https://github.com/abcdavk/platinum"
            target="_blank"
            rel="noreferrer"
          >
            <span>View on GitHub</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </header>

      <div className="docs-content">
        <section className="docs-section" aria-labelledby="platform-heading">
          <div className="docs-section-heading">
            <Monitor size={21} aria-hidden="true" />
            <h2 id="platform-heading">Platform requirements</h2>
          </div>
          <div className="docs-card">
            <p className="mb-4">
              Platinum currently supports GNOME and requires the Nautilus file
              manager.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="docs-badge">
                <Monitor size={15} aria-hidden="true" />
                GNOME
              </span>
              <span className="docs-badge">
                <Folder size={15} aria-hidden="true" />
                Nautilus
              </span>
            </div>
            <p className="docs-note mt-4">
              Other desktop environments and file managers are not supported.
            </p>
          </div>
        </section>

        <section className="docs-section" aria-labelledby="install-heading">
          <div className="docs-section-heading">
            <Terminal size={21} aria-hidden="true" />
            <h2 id="install-heading">Install</h2>
          </div>
          <div className="docs-card">
            <p className="mb-4">Run this command in your terminal:</p>
            <CommandBlock
              label="Install"
              command="curl -fsSL https://raw.githubusercontent.com/abcdavk/platinum/refs/heads/main/tools/setup.sh | bash"
            />
          </div>
        </section>

        <section className="docs-section" aria-labelledby="uninstall-heading">
          <div className="docs-section-heading">
            <Terminal size={21} aria-hidden="true" />
            <h2 id="uninstall-heading">Uninstall</h2>
          </div>
          <div className="docs-card">
            <p className="mb-4">To remove Platinum, run:</p>
            <CommandBlock
              label="Uninstall"
              command="curl -fsSL https://raw.githubusercontent.com/abcdavk/platinum/refs/heads/main/tools/uninstall.sh | bash"
            />
          </div>
        </section>
      </div>
    </section>
  );
}