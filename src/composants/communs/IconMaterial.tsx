/**
 * Helper pour afficher les icônes Google Material Symbols Rounded.
 * Utilisé dans tout le projet pour garantir la cohérence visuelle.
 */

interface IconMaterialProps {
  name: string;
  className?: string;
  filled?: boolean;
}

export default function IconMaterial({ name, className = "", filled = false }: IconMaterialProps) {
  return (
    <span
      className={`material-symbols-rounded ${className}`}
      style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
    >
      {name}
    </span>
  );
}
