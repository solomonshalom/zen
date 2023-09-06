import ExternalLink from './ExternalLink';

export default function Footer() {
  return (
    <footer className="text-quaternary mx-auto mt-4 max-w-2xl border-t border-dashed border-gray-200 py-4 text-sm dark:border-gray-700 dark:text-gray-600">
      Articulate your thoughts in zen w/o a single element, share it on <ExternalLink href="https://theabyss.ink">The Abyss</ExternalLink> when done. Crafted with care by{' '}
      <ExternalLink href="https://linktr.ee/solomonshalom">Solomon Shalom Lijo</ExternalLink> // <ExternalLink href="https://theabyss.ink">The Abyss</ExternalLink>
    </footer>
  );
}