
export default function BenchComponent(props) {
    return (
        <div className="grid grid-cols-1 lg:flex text-center place-items-center ">

            <ol className="flex  w-full gap-8  self-center lg:grid-cols-4 ">
                <li className="text-xl font-bold  lg:text-3xl text-center text-slate-50 font-semi-bold flex flex-col">{props.range} <span className="text-sm inline-block">Autonomie
                </span> <span className="text-sm hidden lg:inline text-one ">  (estimation de l'EPA)</span></li>
                <li className="text-xl font-bold lg:text-3xl text-center text-slate-50 font-semi-bold flex flex-col">2.1s <span className="text-sm lg:inline">de 0 à 100km/h*</span></li>
                <li className="   text-xl font-bold lg:text-3xl text-center text-slate-50 font-semi-bold md:flex flex-col">{props.topSpeed}<span className="text-sm  lg:inline-block">Vitesse maximal</span></li>
                <li className=" hidden text-xl font-bold lg:flex lg:text-3xl text-center text-slate-50 font-semi-boldmd:flex flex-col md:flex md:text-xl ">1020 np <span className="text-sm hidden md:inline-block">puissance de crête</span></li>
            </ol>
            <button className="text-lg px-16  m-2

            shadow-sm  text-slate-150  
            flex self-start
            rounded-sm  bg-transparent 
            border-slate-100 border-4 py-2 text-slate-50">Commander</button>

        </div>
    )
}