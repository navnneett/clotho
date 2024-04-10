import styles from './Button.module.css'

export default function Button({
    title = "test",
    onClick = () => {},
    height,
    width,
    bgColor,
    borderRadius
}) {
    return (
        <button className={styles.button} onClick={onClick} style={{ height: height, width: width, backgroundColor: bgColor, borderRadius: borderRadius}}>
            {title}
        </button>
    )
}
