// Small "Crafted by Velora" watermark — footer only, links to the Velora templates page.
export const VELORA_TEMPLATES = 'https://velora-invitations.velorain.workers.dev/templates'

export default function Credit() {
  return (
    <a className="zt-credit" href={VELORA_TEMPLATES} target="_blank" rel="noopener noreferrer" aria-label="Crafted by Velora">
      <span>Crafted by</span>
      <strong>Velora</strong>
    </a>
  )
}
