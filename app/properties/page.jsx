import PropertyCard from "@/components/PropertyCard";
// import properties from "@/properties.json";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import Pagination from "@/components/Pagination";

const PropertiesPage = async ({ searchParams: { page = 1, pageSize = 3 } }) => {
  await connectDB();

  const skip = (page - 1) * pageSize;
  const total = await Property.countDocuments({});
  const properties = await Property.find({}).skip(skip).limit(pageSize);

  const showPagination = total > pageSize;
  // console.log("Check Property", properties);
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
          {showPagination && (
            <Pagination
              page={parseInt(page)}
              pageSize={parseInt(pageSize)}
              totalItems={total}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertiesPage;
