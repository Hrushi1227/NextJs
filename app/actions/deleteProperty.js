"use server";
import cloudinary from "@/config/cloudinary";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function deleteProperty(propertyId) {
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID Is Required ");
  }

  const { userId } = sessionUser;
  const property = await Property.findById(propertyId);

  if (!property) throw new Error("Property Not Found");

  // Verify OwnerShip
  if (property.owner.toString() !== userId) {
    throw new Error("Unauthorised ");
  }

  // Extract public Id from image url
  const publicIds = property.images.map((imageUrl) => {
    const parts = imageUrl.split("/");
    return parts.at(-1).split(".").at(0);
  });

  // Delete Images from cloudnary
  if (publicIds.length > 0) {
    for (let publicId of publicIds) {
      await cloudinary.uploader.destroy("propertypulse/" + publicId);
    }
  }

  await property.deleteOne();

  revalidatePath("/", "layout");
}
export default deleteProperty;
