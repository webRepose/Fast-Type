import { useTranslation } from "react-i18next";
import {
    FacebookShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton,
    VKShareButton,
    WhatsappShareButton,
    FacebookIcon,
    FacebookMessengerIcon,
    LinkedinIcon,
    RedditIcon,
    TelegramIcon,
    TwitterIcon,
    VKIcon,
    WhatsappIcon,
    FacebookMessengerShareButton
  } from "react-share";

const SocialMedia = ({shareRes}) => {
    const [t] = useTranslation();

    return (
        <>
         <div>
            <VKShareButton 
                title={t('TI-myRes')} 
                url={shareRes}>                        
                <VKIcon></VKIcon>
            </VKShareButton>
            <TelegramShareButton 
                title={t('TI-myRes')} 
                url={shareRes}>
                <TelegramIcon></TelegramIcon>
            </TelegramShareButton>
            <WhatsappShareButton
                title={t('TI-myRes')} 
                url={shareRes}>
                <WhatsappIcon></WhatsappIcon>
            </WhatsappShareButton>
            <TwitterShareButton
                title={t('TI-myRes')} 
                url={shareRes}>
                <TwitterIcon></TwitterIcon>
            </TwitterShareButton>
                </div>
            <div>
            <FacebookShareButton
                title={t('TI-myRes')} 
                url={shareRes}>
                <FacebookIcon></FacebookIcon>
            </FacebookShareButton>
            <LinkedinShareButton
                title={t('TI-myRes')} 
                url={shareRes}>
            <LinkedinIcon></LinkedinIcon>
            </LinkedinShareButton>
            <RedditShareButton
                title={t('TI-myRes')} 
                url={shareRes}>
                <RedditIcon></RedditIcon>
            </RedditShareButton>
            <FacebookMessengerShareButton
                title={t('TI-myRes')} 
                url={shareRes}>
                <FacebookMessengerIcon></FacebookMessengerIcon>
            </FacebookMessengerShareButton>
            </div>
        </>
    )
}


export default SocialMedia;