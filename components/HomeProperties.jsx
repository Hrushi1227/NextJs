// import properties from "@/properties.json";
import PropertyCard from "./PropertyCard";
import Link from "next/link";
import Property from "@/models/Property";
import connectDB from "@/config/database";

const HomeProperties = async () => {
  await connectDB();

  const recentProperties = await Property.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .lean();

  return (
    <>
      <section>
        <div className="px-4 py-6">
          <div className="container-x1 lg:container m-auto px-4 py-6">
            <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center"></h2>
            {recentProperties.length === 0 ? (
              <p>No Properties found</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recentProperties.map((property) => {
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
      <section className="m-auto max-w-lg my-6 px-6">
        <Link
          href="/properties"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          {" "}
          Show more..
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
