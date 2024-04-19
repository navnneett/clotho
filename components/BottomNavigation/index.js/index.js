import styles from './BottomNavigation.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import AddPopup from '@/components/AddPopup'

export default function BottomNavigation(props) {
    const {
        bgColorHome,
        bgColorInventory,
        bgColorPlus,
        bgColorCollection,
        bgColorCommunity,
        pathColorHome,
        pathColorInventory,
        pathColorCollection,
        pathColorCommunity,
        borderStyle,
        iconWidth,
        iconHeight,
    } = props

    const [openPopup, setOpenPopup] = useState(false);

    const plusButton = () => {
        setOpenPopup(!openPopup)
    };

    const closePopup = () => {
        setOpenPopup(false);
    };
    
    return (
        <>
            { openPopup && <AddPopup plusButton={plusButton} onClick={closePopup}/>}
            <div className={styles.container}>
                <div className={styles.home} style={{backgroundColor: bgColorHome, borderRadius: borderStyle, width: iconWidth, height: iconHeight}}>
                    <Link href='/'>
                    <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg" tabIndex={1}>
                        <path style={{ stroke: pathColorHome}} d="M11.1236 22.1254C11.876 25.047 14.5298 27.2057 17.6881 27.2057C20.8464 27.2057 23.5002 25.047 24.2527 22.1254M16.0236 3.098L4.53089 12.0311C3.76265 12.6282 3.37853 12.9268 3.1018 13.3007C2.85666 13.6319 2.67406 14.0051 2.56294 14.4018C2.4375 14.8496 2.4375 15.3359 2.4375 16.3086V28.5605C2.4375 30.4573 2.4375 31.4057 2.80688 32.1302C3.1318 32.7675 3.65026 33.2856 4.28794 33.6103C5.0129 33.9795 5.96191 33.9795 7.85995 33.9795H27.5163C29.4144 33.9795 30.3634 33.9795 31.0883 33.6103C31.726 33.2856 32.2445 32.7675 32.5694 32.1302C32.9388 31.4057 32.9388 30.4573 32.9388 28.5605V16.3086C32.9388 15.3359 32.9388 14.8496 32.8133 14.4018C32.7022 14.0051 32.5196 13.6319 32.2745 13.3007C31.9977 12.9268 31.6136 12.6282 30.8454 12.0311L19.3527 3.098C18.7573 2.63526 18.4597 2.4039 18.131 2.31496C17.841 2.23649 17.5353 2.23649 17.2453 2.31496C16.9166 2.4039 16.6189 2.63526 16.0236 3.098Z" stroke="#8229E0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </Link>
                </div>
                <div className={styles.inventory} style={{backgroundColor: bgColorInventory, borderRadius: borderStyle, width: iconWidth, height: iconHeight}}>
                    <Link href='/Inventory/Inventory'>
                    <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg" tabIndex={2}>
                        <path style={{ stroke: pathColorInventory}} d="M35.4792 12.1274L19.307 21.1062M19.307 21.1062L3.13484 12.1274M19.307 21.1062L19.3071 39.1696M36.4306 21.1063V13.3893C36.4306 12.7378 36.4306 12.4121 36.3346 12.1215C36.2496 11.8645 36.1107 11.6286 35.9271 11.4295C35.7196 11.2045 35.4347 11.0463 34.8648 10.7299L20.7855 2.91305C20.2459 2.61346 19.9761 2.46367 19.6904 2.40495C19.4375 2.35297 19.1767 2.35297 18.9238 2.40495C18.6381 2.46367 18.3683 2.61347 17.8287 2.91305L3.74939 10.7299C3.17952 11.0463 2.89457 11.2045 2.68709 11.4295C2.50353 11.6286 2.36462 11.8645 2.27965 12.1215C2.18359 12.4121 2.18359 12.7378 2.18359 13.3893V28.8232C2.18359 29.4747 2.18359 29.8005 2.27965 30.091C2.36462 30.348 2.50353 30.5839 2.68709 30.783C2.89457 31.008 3.17953 31.1662 3.74939 31.4826L17.8287 39.2995C18.3683 39.5991 18.6381 39.7488 18.9238 39.8076C19.1767 39.8595 19.4375 39.8595 19.6904 39.8076C19.9761 39.7488 20.2459 39.5991 20.7855 39.2995L21.2097 39.0639M10.7453 6.84575L27.8689 16.3528M38.3332 39.1696L36.4306 37.2682M38.3332 32.5147C38.3332 35.665 35.7777 38.2189 32.6254 38.2189C29.473 38.2189 26.9176 35.665 26.9176 32.5147C26.9176 29.3643 29.473 26.8105 32.6254 26.8105C35.7777 26.8105 38.3332 29.3643 38.3332 32.5147Z" stroke="#8229E0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </Link>
                </div>
                <div className={styles.plus} style={{backgroundColor: bgColorPlus, borderRadius: borderStyle, width: iconWidth, height: iconHeight}}>
                    <svg width="81" height="37" viewBox="0 0 81 37" fill="none" xmlns="http://www.w3.org/2000/svg" tabIndex={3} onClick={plusButton}>
                        <rect x="0.603516" y="0.430176" width="80.2522" height="35.7654" rx="17.8827" fill="#8229E0"/>
                        <rect x="27.1733" y="15.6034" width="27.1122" height="5.41899" rx="2.7095" fill="white"/>
                        <rect x="38.0186" y="31.8604" width="27.095" height="5.42244" rx="2.71122" transform="rotate(-90 38.0186 31.8604)" fill="white"/>
                    </svg>
                </div>
                <div className={styles.collection} style={{backgroundColor: bgColorCollection, borderRadius: borderStyle, width: iconWidth, height: iconHeight}}>
                    <Link href='/Collection/Collection'>
                    <svg width="37" height="41" viewBox="0 0 37 41" fill="none" xmlns="http://www.w3.org/2000/svg" tabIndex={4}>
                      <path style={{ stroke: pathColorCollection}} d="M32.6062 16.7002V10.9199C32.6062 7.88498 32.6062 6.36752 31.9979 5.20833C31.4627 4.18868 30.6088 3.35968 29.5585 2.84015C28.3644 2.24951 26.8013 2.24951 23.6752 2.24951H11.767C8.64085 2.24951 7.07777 2.24951 5.88373 2.84015C4.83342 3.35968 3.97949 4.18868 3.44433 5.20833C2.83594 6.36752 2.83594 7.88498 2.83594 10.9199V29.7057C2.83594 32.7407 2.83594 34.2581 3.44433 35.4173C3.97949 36.437 4.83342 37.266 5.88373 37.7855C7.07777 38.3761 8.64085 38.3761 11.767 38.3761H17.7211M18.6514 18.5065H10.2785M12.1392 25.7318H10.2785M25.1637 11.2812H10.2785M27.0192 25.4258C25.5312 23.7839 23.0498 23.3422 21.1854 24.8457C19.321 26.3493 19.0585 28.8631 20.5226 30.6413C21.9868 32.4195 27.0192 36.5698 27.0192 36.5698C27.0192 36.5698 32.0517 32.4195 33.5158 30.6413C34.9799 28.8631 34.7495 26.3334 32.853 24.8457C30.9566 23.358 28.5072 23.7839 27.0192 25.4258Z" stroke="#8229E0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </Link>
                </div>
                <div className={styles.community}  style={{backgroundColor: bgColorCommunity, borderRadius: borderStyle, width: iconWidth, height: iconHeight}}>
                    <Link href='/Community/Community'>
                    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg" tabIndex={5}>
                        <path style={{ stroke: pathColorCommunity}} d="M3.98109 28.2264L7.60257 26.1371C7.79873 26.024 8.02892 25.9846 8.25156 26.0263L15.3771 27.359C15.9626 27.4685 16.5032 27.018 16.5005 26.4227L16.4728 20.1834C16.472 20.0139 16.5168 19.8472 16.6023 19.7009L20.1982 13.5484C20.3854 13.2282 20.3686 12.8284 20.1553 12.525L14.1008 3.91247M34.9417 7.76905C24.5035 12.7781 30.1967 19.4163 32.0949 20.3647C35.6573 22.1444 40.6114 22.2612 40.6114 22.2612C40.6269 21.9471 40.6349 21.6309 40.6349 21.3129C40.6349 10.838 32.1379 2.34644 21.6563 2.34644C11.1747 2.34644 2.67773 10.838 2.67773 21.3129C2.67773 31.7878 11.1747 40.2794 21.6563 40.2794C21.9745 40.2794 22.2909 40.2716 22.6052 40.2561M30.6859 40.1652L24.6758 24.3305L40.5206 30.3368L33.4944 33.1435L30.6859 40.1652Z" stroke="#8229E0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </Link>
                </div>
                <div className={styles.background}>
                <svg width="430" height="82" viewBox="0 0 430 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="430" height="82" fill="url(#paint0_linear_415_4683)"/>
                    <defs>
                    <linearGradient id="paint0_linear_415_4683" x1="-92.5" y1="-202.887" x2="392.529" y2="223.804" gradientUnits="userSpaceOnUse">
                    <stop offset="0.175" stop-color="#DDB8FF" stop-opacity="0.8"/>
                    <stop offset="0.805" stop-color="#D6EFFF" stop-opacity="0.8"/>
                    </linearGradient>
                    </defs>
                </svg>
                </div>
            </div>
        </>
    )
}


