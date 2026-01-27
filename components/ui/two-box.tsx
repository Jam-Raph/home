export default function TwoBox({videoUrl, title, description, alt = true, videoBG = "bg-[#A69C7D]"}:{videoUrl:string, title: string, description: string, alt?: boolean, videoBG?: string} ) {
    return (
        <article className="grid grid-cols-1 grid-rows-3 lg:grid-rows-1 lg:grid-cols-2 border border-stone-200 rounded-sm ">
            <div className={
                `${alt ? "lg:order-1 lg:rounded-r-sm" : "lg:-order-1 lg:rounded-l-sm" } 
                ${videoBG} row-span-2  p-8 rounded-t-sm lg:rounded-t-none flex items-center justify-center lg:aspect-square`}>
                <video className="rounded-md shadow-lg" autoPlay muted loop>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            
            <div className={`
                ${alt ? "lg:rounded-l-sm" : "lg:rounded-r-sm"} 
                flex justify-center flex-col bg-stone-100 w-full h-full rounded-b-sm lg:rounded-l-sm lg:rounded-t-none lg:p-24 p-12`}>
                <h1 className="text-lg font-bold">{title}</h1>
                <p>{description}</p>
            </div>
        </article>
    )
}