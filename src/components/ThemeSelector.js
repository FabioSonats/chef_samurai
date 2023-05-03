
import { useTheme } from '../hooks/useTheme'
import  modeIcon  from '../assets/mode-icon.svg'
//styles
import './ThemeSelector.css'

const themeColors = ['#58249c', '#8B0000', '#b70233']

export default function ThemeSelector() {
    const {changeColor, changeMode, mode } = useTheme(false)


    const toggleMode = () => {
        changeMode(mode === 'light' ? 'dark' : 'light')

    }
    console.log(mode)
  
    return (
    <div className='theme-selector'>
        <div className='mode-toggle'>
            <img 
                onClick={toggleMode}
                src={modeIcon}
                alt='dark/light toggle icon'
                style={{filter: mode === 'dark' ? 'invert(100%)': 'invert(20%)'}}
            />
        </div>
        <div className='theme-buttons'>
            {themeColors.map(color => (
                <div key={color}
                onClick={() => changeColor(color)}
                style={{background: color}}
                ></div>
            ))}    
        </div>
      
    </div>
  )
}
