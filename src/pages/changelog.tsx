export default function ChangelogPage() {
  return (
    <>
      <section className="mt-16">
        <div>
          <h1 className="mb-8">Changelog</h1>
          <p>
            I've redesign and rewritten this website so many times. So, starting
            from now I will make a changelog for everything what I've changed.
            It's not really useful for you, It's just fun to writting something.
          </p>
          <h2 className="mt-4">Versioning System</h2>
          <p>
            There are two popular versioning systems:{" "}
            <a href="https://semver.org/" className="underline">
              SemVer
            </a>{" "}
            and{" "}
            <a href="https://calver.org/" className="underline">
              CalVer
            </a>
            . I'm usually use Semver for my projects. For this, I will only
            write changelog for a major change. So I think Calver is a good
            choice.
          </p>
        </div>
        <hr className="my-6" />
        <div>
          <h2>v26.10</h2>
          <p>
            This is the most dedicated design I've ever made. To be honest, it's
            not originally by me, I just recreate{" "}
            <a href="https://zen-browser.app/" className="underline">
              Zen Browser Style
            </a>
            .
          </p>
          <p className="mt-4">What's new:</p>
          <ul>
            <li>- New modern minimalist pastel theme.</li>
            <li>- Simplify footer and navbar.</li>
            <li>- New button and hover animation.</li>
            <li>- New auto dark and light mode.</li>
            <li>
              - Remove the <code>/art</code> page.
            </li>
            <li>
              - No more <code>marquee</code>.
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h2>v26.8</h2>
          <p>
            In this version, I'm using Neo-pixel art design by using pixelated
            font and vibrant color. It's not well polised.
          </p>
          <p className="mt-4">What's new:</p>
          <ul>
            <li>- New Neo-pixel art theme.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
