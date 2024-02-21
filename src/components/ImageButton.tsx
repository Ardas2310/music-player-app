type ImageButtonProps = {
    src: string
    onClick : () => void;
    className? : string;
}

const ImageButton = ({onClick, src ,className} : ImageButtonProps) => {
    const buttonSize = 65;
  
    return (
    <button onClick={onClick}>
        <img src={src} width={buttonSize} height={buttonSize} 
        className={`drop-shadow-lg ${className ?? ''}`}/>
    </button>
  )
}

export default ImageButton