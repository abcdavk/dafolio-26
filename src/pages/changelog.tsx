export default function ChangelogPage() {
  return (
    <>
      <section>
        <div>
          <h1>Changelog</h1>
          <p>I've redesign and rewritten this website so many times. So, starting from now I will make a changelog for everything what I've changed. It's not really useful for you, It's just fun to writting something.</p>
          <h2 className="mt-4">Versioning System</h2>
          <p>There are two popular versioning systems: <a href="https://semver.org/" className="underline">SemVer</a> and <a href="https://calver.org/" className="underline">CalVer</a>. I'm usually use Semver for my projects. For this, I will only write changelog for a major change</p>
        </div>
        <hr className="my-6"/>
        <div>
          <h2>v26.10</h2>
          <p className="mb-4">I think this is the most beautiful design I've ever made. To be honest, it's not originally by me, I just recreate <a href="https://zen-browser.app/" className="underline">Zen Browser Style</a>.</p>
          <p>What's new:</p>
          <ul >
            <li>- New modern minimalist pastel theme.</li>
            <li>- New hover animation.</li>
            <li>- New auto dark and light mode.</li>
          </ul>
        </div>
      </section>
    </>
  )
}