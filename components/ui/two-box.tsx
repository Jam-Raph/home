export default function TwoBox({videoUrl, title, description, alt = true, ctaHref}:{videoUrl:string, title: string, description: string, alt?: boolean, ctaHref?: string} ) {
    return (
        <article className="grid grid-cols-1 grid-rows-3 lg:grid-rows-1 lg:grid-cols-2 border border-[#E5E5E5] rounded-2xl overflow-hidden">
            <div className={
                `${alt ? "lg:order-1" : "lg:-order-1" }
                bg-surface-warm row-span-2 p-8 flex items-center justify-center lg:aspect-square`}>
                <video className="rounded-lg shadow-lg" autoPlay muted loop>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className={`
                flex justify-center flex-col gap-4 bg-white w-full h-full lg:p-24 p-12`}>
                <h3 className="text-lg font-bold text-stone-900">{title}</h3>
                <p className="text-stone-500">{description}</p>
                {ctaHref && (
                    <a href={ctaHref} className="text-sm font-medium text-brand-primary hover:text-brand-hover hover:underline transition-colors">
                        See how it works &rarr;
                    </a>
                )}
            </div>
        </article>
    )
}
