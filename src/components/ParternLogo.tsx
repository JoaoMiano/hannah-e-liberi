type Props = {
  src: string;
  alt?: string;
  className?: string;
};

const PartnerLogo = ({ src, alt, className = "" }: Props) => {
  return (
    <div className={`
      flex items-center justify-center 
      bg-white 
      rounded-md 
      shadow-lg
      shadow-zinc-500
      border border-gray-100 
      p-2
      w-28lg:w-40 
      h-16 lg:h-22 
      ${className}
    `}>
      <img 
        src={src} 
        alt={alt || "Logo do parceiro"} 
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
};

export default PartnerLogo;