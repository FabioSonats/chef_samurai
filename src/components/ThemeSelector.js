
import { useTheme } from '../hooks/useTheme'
import modeIcon from '../assets/mode-icon.svg'

const themeColors = [
  { name: 'Purple', color: '#A8C8A8' },
  { name: 'Blue', color: '#BAE1FF' },
  { name: 'Green', color: '#BAFFC9' },
  { name: 'Pink', color: '#FFB3BA' },
  { name: 'Orange', color: '#FFDFBA' }
]

export default function ThemeSelector() {
    const { changeColor, changeMode, mode } = useTheme(false)

    const toggleMode = () => {
        changeMode(mode === 'light' ? 'dark' : 'light')
    }
  
    return (
        <div className="fixed top-20 right-4 z-50 bg-white bg-opacity-90 rounded-xl shadow-lg p-4 border border-gray-200">
            <div className="flex flex-col items-center space-y-4">
                <div className="mode-toggle">
                    <button 
                        onClick={toggleMode}
                        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                        title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
                    >
                        <img 
                            src={modeIcon}
                            alt='dark/light toggle icon'
                            className="w-5 h-5"
                            style={{filter: mode === 'dark' ? 'invert(100%)': 'invert(20%)'}}
                        />
                    </button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                    {themeColors.map(({ name, color }) => (
                        <button
                            key={color}
                            onClick={() => changeColor(color)}
                            className="w-6 h-6 rounded-full border-2 border-white shadow-sm hover:scale-110 transition-transform duration-200"
                            style={{ background: color }}
                            title={name}
                        />
                    ))}    
                </div>
            </div>
        </div>
    )
}
