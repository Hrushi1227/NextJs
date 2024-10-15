import PropertyCard from "@/components/PropertyCard";
import connectDB from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";

const SavedPropertiesPage = async () => {
  const { userId } = await getSessionUser();

  const { bookmarks } = await User.findById(userId).populate("bookmarks");
  console.log("Check bookmarks", bookmarks);

  return <div>Saved</div>;
};
export default SavedPropertiesPage;
