import PropertyCard from "@/components/PropertyCard";
import properties from "@/properties.json";

const PropertiesPage = () => {
  return (
    <section>
      <div className="px-4 py-6">
        <div className="container-x1 lg:container m-auto px-4 py-6">
          {properties.length === 0 ? (
            <p>No Properties found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties.map((property) => {
                return (
                  <PropertyCard
                    key={property._id}
                    property={property}
                  ></PropertyCard>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertiesPage;
