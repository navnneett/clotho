import Image from "next/image";
import { inventory } from "@/Data/inventory";
import styles from "@/components/InventoryCard/InventoryCard.module.css"

export default function InventoryCard({
    title = "title",
    bgColor,
    photoId,
    alt
}) {
    return (
        <>
            <fieldset className={styles.fieldset} style={{backgroundColor: bgColor}}>
                <div className={styles.cards}>
                    <Image src={photos?.image} alt={alt} height={150} width={140} className={styles.image}/>
                    <p>{title}</p>
                </div>   
            </fieldset>
        </>
    )

}