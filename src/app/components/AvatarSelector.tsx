import { motion } from 'motion/react';

interface Avatar {
  id: string;
  name: string;
  gender: string;
  origin: string;
  image: string;
  available: boolean;
}

interface AvatarSelectorProps {
  avatars: Avatar[];
  selected: string | null;
  onSelect: (id: string) => void;
}

export function AvatarSelector({ avatars, selected, onSelect }: AvatarSelectorProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {avatars.map((avatar) => (
        <motion.div
          key={avatar.id}
          className={`relative cursor-pointer ${!avatar.available ? 'opacity-40' : ''}`}
          onClick={() => avatar.available && onSelect(avatar.id)}
          whileHover={avatar.available ? { scale: 1.05, y: -5 } : {}}
          style={{ perspective: '1000px' }}
        >
          {/* 3D Tilt Container */}
          <motion.div
            className="relative"
            whileHover={
              avatar.available
                ? {
                    rotateY: 5,
                    rotateX: -5,
                  }
                : {}
            }
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {/* Avatar Image */}
            <div
              className="aspect-square rounded-full overflow-hidden border-4 transition-all"
              style={{
                borderColor:
                  selected === avatar.id
                    ? '#A78BFA'
                    : 'rgba(255, 255, 255, 0.2)',
                boxShadow:
                  selected === avatar.id
                    ? '0 0 30px rgba(167, 139, 250, 0.6)'
                    : 'none',
              }}
            >
              <img
                src={avatar.image}
                alt={avatar.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Selection Glow */}
            {selected === avatar.id && (
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle, rgba(167, 139, 250, 0.2) 0%, transparent 70%)',
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}

            {/* Lock Icon for unavailable */}
            {!avatar.available && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ color: '#F2F2F2' }}
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
            )}
          </motion.div>

          {/* Avatar Name */}
          <div className="text-center mt-3">
            <p className="text-sm" style={{ color: '#F2F2F2' }}>
              {avatar.name}
            </p>
            <p className="text-xs" style={{ color: '#A47864' }}>
              {avatar.gender} • {avatar.origin}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
