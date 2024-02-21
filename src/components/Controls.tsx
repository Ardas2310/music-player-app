import playButtonIcon from '../assets/icons/ic_play.svg';
import nextButtonIcon from '../assets/icons/ic_next.svg';
import prevButtonIcon from '../assets/icons/ic_prev.svg';
import shuffleButtonIcon from '../assets/icons/ic_shuffle.svg';
import repeatButtonIcon from '../assets/icons/ic_repeat.svg';
import ImageButton from './ImageButton';



const Controls = () => {
    function onClick() {
        //Will be removed
    }

  return (
    <div className='flex flex-row mt-4'>
        <ImageButton src={shuffleButtonIcon} onClick={onClick}/>
        <ImageButton src={prevButtonIcon} onClick={onClick}/>
        <ImageButton className='mr-2 ml-2' src={playButtonIcon} onClick={onClick}/>
        <ImageButton src={nextButtonIcon} onClick={onClick}/>
        <ImageButton src={repeatButtonIcon} onClick={onClick}/>
    </div>
  )
}

export default Controls

