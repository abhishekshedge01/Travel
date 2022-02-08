import React from 'react'
import './tabBar.css'


const tabs = [
    {
        id: 1,
        name: "Museums",
        active_img: "https://cdn-icons-png.flaticon.com/512/3936/3936783.png",
        backdrop: "#FCEEC0",
        inactive_img: "https://cdn-icons-png.flaticon.com/512/3936/3936764.png"
    },

    {
        id: 2,
        name: "Gardens",
        active_img: "https://cdn-icons.flaticon.com/png/512/2220/premium/2220094.png?token=exp=1644360054~hmac=1e19555d53ed91b253e8979af32c5fcd",
        backdrop: "#E5F3F3",
        inactive_img: "https://cdn-icons.flaticon.com/png/512/2220/premium/2220041.png?token=exp=1644360062~hmac=27401eedb2dc3b449003b7958e825b95"
    },

    {
        id: 3,
        name: "Forts",
        active_img: "https://cdn-icons.flaticon.com/png/512/2465/premium/2465371.png?token=exp=1644359736~hmac=276bd4eaf33576916d65a8157109d046",
        backdrop: "#FCEEC0",
        inactive_img: "https://cdn-icons.flaticon.com/png/512/2465/premium/2465341.png?token=exp=1644359746~hmac=6144ea80eedfb05e33b6acb75f56006a"
    },

    {
        id: 4,
        name: "Waterfall",
        active_img: "https://cdn-icons-png.flaticon.com/512/826/826923.png",
        backdrop: "#d8fbeb",
        inactive_img: "https://cdn-icons-png.flaticon.com/512/826/826872.png"
    },

    {
        id: 4,
        name: "Temples",
        active_img: "https://cdn-icons-png.flaticon.com/512/2465/2465349.png",
        backdrop: "#FCEEC0",
        inactive_img: "https://cdn-icons-png.flaticon.com/512/2465/2465330.png"
    },

    {
        id: 5,
        name: "ArtGallery",
        active_img: "https://cdn-icons-png.flaticon.com/512/1157/1157969.png",
        backdrop: "#ffe4fa",
        inactive_img: "https://cdn-icons-png.flaticon.com/512/1158/1158215.png"
    },
    {
        id: 6,
        name: "Animals",
        active_img: "https://cdn-icons-png.flaticon.com/512/375/375111.png",
        backdrop: "#EDF4FF",
        inactive_img: "https://cdn-icons-png.flaticon.com/512/375/375009.png"
    },
    {
        id: 7,
        name: "Library",
        active_img: "https://cdn-icons.flaticon.com/png/512/3038/premium/3038168.png?token=exp=1644359637~hmac=6f572f211553cc689f5b1bb62f46564b",
        backdrop: "#e2ffcc",
        inactive_img: "https://cdn-icons.flaticon.com/png/512/3037/premium/3037971.png?token=exp=1644359647~hmac=f00d1833a73e062c9be555ac3fd8cf04"
    },
    {
        id: 8,
        name: "Gardens",
        active_img: "https://cdn-icons.flaticon.com/png/512/2220/premium/2220094.png?token=exp=1644360054~hmac=1e19555d53ed91b253e8979af32c5fcd",
        backdrop: "#E5F3F3",
        inactive_img: "https://cdn-icons.flaticon.com/png/512/2220/premium/2220041.png?token=exp=1644360062~hmac=27401eedb2dc3b449003b7958e825b95"
    },
];


const TabBar = ({ currentTab, setCurrentTab }) => {
    return (
        <div className='tab-options'>
            <div className='options-wrapper'>
                {tabs.map((tab) => {
                    return <div onClick={() => setCurrentTab(tab.name)}

                        className={`tab-item absolute-center cur-po ${currentTab === tab.name && 'active-tab'}`}
                    >
                        <div
                            className='tab-image-container absolute-center'
                            style={{
                                backgroundColor: `${currentTab === tab.name ? tab.backdrop : ""
                                    }`
                            }}
                        >
                            <img className='tab-image' alt={tab.name} src={currentTab === tab.name ? tab.active_img : tab.inactive_img} />
                        </div>
                        <div style={{fontWeight:`${currentTab===tab.name?'600':""}`, color: `${currentTab===tab.name?'#000000':"#696969"}`}} className='tab-name'>{tab.name} </div>
                    </div>
                })}
            </div>
        </div>
    )
}
export default TabBar;
