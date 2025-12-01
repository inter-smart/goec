export default function Buttons({text, color, type= "primary"}){
    return(
          <button
              // onClick={() => setActiveTab('news')}
              className={`px-8 py-3 rounded-full transition-all duration-300 font-medium ${
                type === "secondary"
                  ? 'bg-blue-600 text-white'
                  : 'bg-transparent text-black border-1 border-black/20'
              }`}
            >
              {text}
            </button>
    )
}