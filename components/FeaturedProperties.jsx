import connectDB from "@/config/database";
import Property from "@/models/Property";
import FeaturedPropertyCard from "./FeaturedPropertyCard";

const FeaturedProperties = async () => {
  await connectDB();
  const properties = await Property.find({
    is_featured: true,
  }).lean();
  return properties.length > 0 ? (
    <section className="bg-blue-50 px-4 pt-6 pb-10">
      <div className="container-xl lg:container m-auto">
        <h3 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          Featured Property
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {properties.map((property) => {
          return (
            <FeaturedPropertyCard key={property._id} property={property} />
          );
        })}{" "}
      </div>
    </section>
  ) : null;
};

export default FeaturedProperties;
