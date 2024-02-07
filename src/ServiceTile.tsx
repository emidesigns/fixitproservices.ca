interface ServiceTileProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceTile: React.FC<ServiceTileProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white py-4 px-8 sm:px-6 shadow-md text-center">
      <span className="material-symbols-outlined text-6xl mb-4">
        {icon}
      </span>
      <h4 className="text-2xl font-medium mb-4">{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default ServiceTile;
