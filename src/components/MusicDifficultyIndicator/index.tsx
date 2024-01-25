const MusicDifficultyIndicator = ({difficulty}:{difficulty:number}) => {

    const renderDifficultyLines = () => {
        const lines = [];

        for (let i = 1; i <= 5; i++) {
            
                if( i <= difficulty) {
                    lines.push(<div className="h-5/6 w-2 bg-gray1 rounded-sm"  key={i} />)

                } else {
                    lines.push(<div className="h-5/6 w-2 bg-gray3 rounded-sm"  key={i} />)
                }
            
        }
        return lines
    }

    return (
        <div className="flex flex-col items-center">
            <p className="text-text font-normal text-sm">Difficulty</p>
        <div className="h-full w-20 flex justify-evenly hover:bg-gray2 items-center">
            {renderDifficultyLines()}
        </div>
        </div>
    )
}

export default MusicDifficultyIndicator