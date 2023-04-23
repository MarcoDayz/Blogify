import { createContext, useState } from "react";

const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [postsData, setPostsData] = useState([]);
    const [showArticles, setShowArticles] = useState(true);
    const [showSidebar, setShowSidebar] = useState(true)
    const [showIcon, setShowIcon] = useState(false);
    const [showList, setShowList] = useState(false)

    const catArr = [
        "Travel",
        "Food",
        "Fashion",
        "Technology",
        "Politics",
        "Lifestyle",
        "Movies",
        "Newsletter",
        "Business",
        "Finance"
    ]

    const photos = [
        "https://media.istockphoto.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?s=612x612&w=0&k=20&c=kt8-RRzCDunpxgKFMBBjZ6jSteetNhhSxHZFvHQ0hNU=",
        "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=",
        "https://media.istockphoto.com/id/1347455404/photo/shot-of-an-unrecognizable-woman-spending-a-day-in-the-city.jpg?s=612x612&w=0&k=20&c=W3-QMPd9D-ok_upk94ooFtb3wnWUZW4Gu8dtYRH3fKI=",
        "https://media.istockphoto.com/id/1344688192/photo/shot-of-a-young-man-using-his-digital-tablet-and-computer-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=6h8BU5yqJDSuW9LS7SdoqYTipap8MvcZNiR9cvBaC-I=",
        "https://media.istockphoto.com/id/1414697648/photo/political-contributions-lobbyists-super-pacs-and-political-campaign-donations.jpg?s=612x612&w=0&k=20&c=Jv75yyzVrXM17ZjzE1vHVl-xVikcTkD8OcK_hRCPfpA=",
        "https://media.istockphoto.com/id/1347431090/photo/fit-woman-standing-outdoors-after-a-late-afternoon-trail-run.jpg?s=612x612&w=0&k=20&c=t6IMTQoG_YlCQVgsFUKCt7Fw9iUjO25kniyg6nJq2E4=",
        "https://media.istockphoto.com/id/1180701083/photo/friends-in-the-cinema.jpg?s=612x612&w=0&k=20&c=bqAG0CwlhSH3iFfdHwqhqSDwoKgogi7X-vz5pjBWDdo=",
        "https://media.istockphoto.com/id/1358132702/photo/businesswoman-sitting-at-a-coffee-shop-using-digital-tablet.jpg?s=612x612&w=0&k=20&c=GjX6QGS3x7kECJNioaYoCCmfLb1LRnUqf7H1_x_nFP0=",
        "https://media.istockphoto.com/id/1340856012/photo/happy-businessmen-shaking-hands-on-a-meeting-in-the-office.jpg?s=612x612&w=0&k=20&c=MC2xgKObxbTfF_JwYTm6Ki7JixQNX3CzN9Kvb-OjdTY=",
        "https://media.istockphoto.com/id/1365445918/photo/stand-out-from-the-crowd-yellow-unique-dollar-sign-profit-and-money-financial-and-business-3d.jpg?s=612x612&w=0&k=20&c=kmrLOdkjmbYXt8mrafWeSfbjEZPZIFMTlQ36KYEFUZw="   
    ]

    const sidebarList = [
        "Home",
        "About",
        "Contact"
    ]


    return (
        <AppContext.Provider
        value={{
            postsData, setPostsData,
            catArr,
            sidebarList,
            photos,
            showArticles, setShowArticles,
            showList, setShowList,
            showSidebar, setShowSidebar
        }}>
            {children}
        </AppContext.Provider>
    )
};

export default AppContext;