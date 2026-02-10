import { publicAssetUrl } from '@/utils/publicAssetUrl';

interface FaujiIconProps {
  variant: 'shield' | 'flag' | 'handshake' | 'rupee';
  className?: string;
}

export default function FaujiIcon({ variant, className = '' }: FaujiIconProps) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width: '64px', height: '64px' }}>
      <img
        src={publicAssetUrl('assets/generated/fauji-icons-set.dim_512x512.png')}
        alt={variant}
        className="absolute inset-0 w-[256px] h-auto"
        style={{
          objectFit: 'cover',
          objectPosition: variant === 'shield' ? '0 0' : variant === 'flag' ? '-64px 0' : variant === 'handshake' ? '-128px 0' : '-192px 0',
        }}
      />
    </div>
  );
}
