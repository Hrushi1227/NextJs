"use client"

import { FacebookShareButton, TwitterShareButton,
  WhatsappShareButton,EmailShareButton,
  FacebookIcon,TwitterIcon,WhatsappIcon,
  EmailIcon } from "react-share";


const ShareButton = ({ property }) => {
  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${property._id}`;
  return (
    <>
    <h3 className="text-xl font-bold text-center pt-2">Share this Property:</h3>
    <div className="flex gap-3 justify-center pb-5">
      <FacebookShareButton url={shareUrl} quote={property.name} hashtag={`#${property.type.replace(/\s/g, '')}ForRent`}>
      <FacebookIcon size={40}round={true}></FacebookIcon>
      </FacebookShareButton>
    </div>
    </>
  );
};

export default ShareButton;
